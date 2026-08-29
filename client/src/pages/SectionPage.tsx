import { useEffect, type ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export type SectionPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SectionPage({ title, description, children }: SectionPageProps) {
  useEffect(() => {
    document.title = `${title} | رونق للديكور بالرياض`;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', description);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [description, title]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b border-border bg-secondary/50 px-6 py-20 text-center md:py-28">
          <div className="container max-w-4xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-accent">رونق للديكور · الرياض</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
