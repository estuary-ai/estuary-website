import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '@/utils/analytics';

export const usePageTracking = () => {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);
};