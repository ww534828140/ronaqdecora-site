import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { TrpcContext } from './_core/context';

const dbMocks = vi.hoisted(() => ({
  listApprovedCustomerReviews: vi.fn(),
  createCustomerReview: vi.fn(),
  listPendingCustomerReviews: vi.fn(),
  moderateCustomerReview: vi.fn(),
  getUserByOpenId: vi.fn(),
  upsertUser: vi.fn(),
}));

vi.mock('./db', () => dbMocks);

import { appRouter } from './routers';

function createContext(role?: 'admin' | 'user'): TrpcContext {
  return {
    user: role
      ? {
          id: 1,
          openId: 'owner-open-id',
          name: 'Owner',
          email: 'owner@example.com',
          loginMethod: 'manus',
          role,
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSignedIn: new Date(),
        }
      : null,
    req: {
      ip: '127.0.0.1',
      headers: {},
      protocol: 'https',
    } as TrpcContext['req'],
    res: {} as TrpcContext['res'],
  };
}

describe('reviews router', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns approved reviews with their average', async () => {
    dbMocks.listApprovedCustomerReviews.mockResolvedValue([
      { id: 1, authorName: 'عميل أول', city: 'الرياض', rating: 5, comment: 'تجربة ممتازة جداً', createdAt: new Date() },
      { id: 2, authorName: 'عميل ثان', city: 'الرياض', rating: 4, comment: 'عمل مرتب ومتقن', createdAt: new Date() },
    ]);

    const result = await appRouter.createCaller(createContext()).reviews.list();

    expect(result.count).toBe(2);
    expect(result.average).toBe(4.5);
    expect(result.items).toHaveLength(2);
  });

  it('stores a valid review as pending', async () => {
    dbMocks.createCustomerReview.mockResolvedValue(undefined);

    const result = await appRouter.createCaller(createContext()).reviews.submit({
      authorName: 'عميل حقيقي',
      city: 'الرياض',
      rating: 5,
      comment: 'الخدمة ممتازة والتنفيذ كان مرتباً ودقيقاً.',
      visitorKey: 'visitor-key-1234567890',
    });

    expect(result.success).toBe(true);
    expect(dbMocks.createCustomerReview).toHaveBeenCalledWith(
      expect.objectContaining({ status: 'pending', rating: 5 })
    );
  });

  it('rejects an invalid star value', async () => {
    await expect(
      appRouter.createCaller(createContext()).reviews.submit({
        authorName: 'عميل',
        city: 'الرياض',
        rating: 0,
        comment: 'هذا تعليق طويل وصالح للاختبار.',
        visitorKey: 'visitor-key-1234567890',
      })
    ).rejects.toThrow();
  });

  it('allows the owner admin to approve a review', async () => {
    dbMocks.moderateCustomerReview.mockResolvedValue(undefined);

    const result = await appRouter.createCaller(createContext('admin')).reviews.moderate({
      id: 12,
      status: 'approved',
    });

    expect(result.success).toBe(true);
    expect(dbMocks.moderateCustomerReview).toHaveBeenCalledWith(12, 'approved');
  });
});
