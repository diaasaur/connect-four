import { useEffect, useState } from 'react';

export default function useMedia(query) {
  const [state, setState] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    setState(Boolean(mql.matches));

    const handleChange = e => mounted && setState(Boolean(e.matches));
    mql.addEventListener('change', handleChange);

    return () => {
      mounted = false;
      mql.removeEventListener('change', handleChange);
    };
  }, [query]);

  return state;
}
