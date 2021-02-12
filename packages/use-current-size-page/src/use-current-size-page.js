import { useEffect, useCallback, useState } from 'react';

import { useDebounce } from '@open-react-hooks/use-debounce';

let initialWidth;
let initialHeight;

if (typeof window !== 'undefined') {
  initialWidth =
    window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth;
  initialHeight =
    window?.innerHeight || document?.documentElement?.clientHeight || document?.body?.clientHeight;
}

function useCurrentSizePage({ event, delay } = { event: 'resize', delay: 350 }) {
  const { debounce } = useDebounce({ delay });

  const [width, updateWidth] = useState(initialWidth);
  const [height, updateHeight] = useState(initialHeight);

  const handleGetWidth = useCallback(() => {
    return (
      window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth
    );
  }, []);

  const handleGetHeight = useCallback(() => {
    return (
      window?.innerHeight || document?.documentElement?.clientHeight || document?.body?.clientHeight
    );
  }, []);

  useEffect(() => {
    function resizeListener() {
      updateWidth(handleGetWidth);
      updateHeight(handleGetHeight);
    }

    window.addEventListener(event, debounce(resizeListener));

    return () => {
      window.removeEventListener(event, resizeListener);
    };
  }, [event, handleGetWidth, handleGetHeight, debounce]);

  return [height, width];
}

export default useCurrentSizePage;
