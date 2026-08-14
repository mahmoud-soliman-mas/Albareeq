'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export function useRedirectIfUnauthenticated() {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
      if (!isAuthenticated) {
        router.replace('/admin/login');
      } else {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, pathname, router]);

  return isLoading;
}
