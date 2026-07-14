import { useEffect, useState } from 'react';

const queries = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export function useMediaQuery(query) {
  const mediaQuery = queries[query] || query;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [mediaQuery]);

  return matches;
}

export default useMediaQuery;
