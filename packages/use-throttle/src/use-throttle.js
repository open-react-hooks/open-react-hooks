import { useCallback, useRef, useEffect } from 'react';

import { throttleModeTypes } from '@open-react-hooks/utils';

function useThrottle({ mode, delay } = { mode: throttleModeTypes.MODE_DEFAULT, delay: 1000 }) {
  const handleThrottle = useCallback(
    (callback) => {
      let timer;

      return (...args) => {
        if (!timer) {
          callback.apply(this, args);
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
          timer = undefined;
        }, delay);
      };
    },
    [delay],
  );

  function handleMemoizedThrottle(callback) {
    const memoizedCallback = useCallback(callback, []);

    const throttleFn = useRef(handleThrottle(memoizedCallback, delay));

    useEffect(() => {
      throttleFn.current = handleThrottle(memoizedCallback, delay);
    }, [memoizedCallback, throttleFn]);

    return throttleFn.current;
  }

  const throttle =
    mode === throttleModeTypes.MODE_MEMOIZE ? handleMemoizedThrottle : handleThrottle;

  return {
    throttle,
  };
}

export default useThrottle;
