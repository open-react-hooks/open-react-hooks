import React from 'react';

import { useDebounce } from '@open-react-hooks/use-debounce';

function HomePage() {
  const { debounce } = useDebounce({ delay: 500 });

  function handleClick() {
    console.log('handleClick');
  }

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt inventore quaerat soluta
      nulla in nisi, ullam assumenda minima cupiditate, laudantium eum itaque voluptatem autem
      consectetur eius magnam voluptatum, cumque dolore.
      <button onClick={debounce(handleClick)}>button</button>
    </div>
  );
}

export default HomePage;
