import { useEffect } from 'react';

export function useAutoHideInfo(info: any, clearInfo: () => void, delay = 1000) {
  useEffect(() => {
    if (info) {
      const timer = setTimeout(() => clearInfo(), delay);
      return () => clearTimeout(timer);
    }
  }, [info, clearInfo, delay]);
}
