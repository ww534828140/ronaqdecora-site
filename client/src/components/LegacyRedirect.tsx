import { useEffect } from 'react';

type LegacyRedirectProps = {
  to: string;
};

export default function LegacyRedirect({ to }: LegacyRedirectProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}
