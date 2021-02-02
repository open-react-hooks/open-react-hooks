import React from 'react';

import { useDebounce } from '@open-react-hooks/use-debounce';
import { useThrottle } from '@open-react-hooks/use-throttle';

function HomePage() {
  const { debounce } = useDebounce({ delay: 500 });
  const { throttle } = useThrottle({ mode: 'memoize', delay: 500 });

  function handleClick() {
    console.log('handleClick');
  }

  return (
    <div>
      <button onClick={debounce(handleClick)}>button</button>
      <button onClick={throttle(handleClick)}>button</button>
    </div>
  );
}

export default HomePage;
