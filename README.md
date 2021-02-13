<div align="center">
    <p align="center">
        <a href="https://github.com/open-react-hooks" title="React Hook Form - Simple React forms validation">
            <img src="https://github.com/open-react-hooks/open-react-hooks/blob/main/docs/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" width="300px" />
        </a>
    </p>
</div>

<p align="center">A place of powerful hooks for your react applications.</p>

> ALL BETA

## Install

    npm install @open-react-hooks/core

or

    yarn add @open-react-hooks/core

## Quickstart

```jsx
import { useCurrentSizePage } from '@open-react-hooks/core';

function App() {
  const [pageHeight] = useCurrentSizePage(); // initialize the hook

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <span>Current size page: {pageHeight} </span>
    </div>
  );
}
```
