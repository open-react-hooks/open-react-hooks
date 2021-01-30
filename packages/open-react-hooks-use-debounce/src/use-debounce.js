import { useCallback, useRef, useEffect } from 'react';

import { modeTypes } from './utils';

function useDebounce({ mode, delay } = { mode: modeTypes.MODE_DEFAULT, delay: 1000 }) {
  const handleDebounce = useCallback(
    (callback) => {
      let timer;

      return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          callback.apply(this, args);
        }, delay);
      };
    },
    [delay],
  );

  function handleMemoizedDebounce(callback) {
    const memoizedCallback = useCallback(callback, []);

    const debouncedFn = useRef(handleDebounce(memoizedCallback, delay));

    useEffect(() => {
      debouncedFn.current = handleDebounce(memoizedCallback, delay);
    }, [memoizedCallback, debouncedFn]);

    return debouncedFn.current;
  }

  const debounce = mode === modeTypes.MODE_MEMOIZE ? handleMemoizedDebounce : handleDebounce;

  return {
    debounce,
  };
}

export default useDebounce;
