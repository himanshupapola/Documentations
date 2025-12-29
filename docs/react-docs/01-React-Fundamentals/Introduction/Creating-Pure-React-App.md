---
title: Creating Pure React App
sidebar_label: Creating Pure React App
sidebar_position: 2
---

import CodeBlock from '@theme/CodeBlock';

# Creating a Pure React App

This guide demonstrates how to build a small React application **without npm, bundlers, build tools, or JSX**.  
We will use **React via `<script>` tags**, also known as the *Pure React* or *CDN React* approach.

This method helps you understand how React works behind the scenes before using modern tools like Vite or Next.js.

## Learning Objectives

By the end of this tutorial, you will understand:

- How to load React and ReactDOM directly from a CDN.
- How React components work **without JSX**.
- How `React.createElement()` builds UI elements.
- How to mount a React component into the DOM using `ReactDOM.createRoot()`.
- Why modern projects use bundlers instead of this method.

## 1. Project Setup

Create a simple HTML file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

This `div` will be the container where React renders our UI.

## 2. Import React and ReactDOM

Add the official CDN versions of React:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```

These scripts expose two global objects:

- `React`
- `ReactDOM`

## 3. Create Your First Component (Without JSX)

In pure React, components return **React elements**, created manually using:

```
React.createElement(type, props, children)
```

Example:

```html
<script>
  function App() {
    return React.createElement("header", null, "Hello from Pure React!");
  }
</script>
```

This creates:

```html
<header>Hello from Pure React!</header>
```

### Why no JSX?

Because browsers cannot understand JSX.  
Normally Babel or Vite compiles JSX into `React.createElement()`.  
Here, we are writing the compiled form manually.

## 4. Render the Component onto the Page

React 18 uses `createRoot()`:

```html
<script>
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement(App));
</script>
```

This mounts the `App` component inside the `<div id="root">`.

## 5. Full Working Example

Below is the complete pure React page, matching your screenshot:

<CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    <script>
      function App() {
        return React.createElement("header", null, "Hello from Pure React!");
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(React.createElement(App));
    </script>
  </body>
</html>`}</CodeBlock>

## How It Works (Visual Summary)

Here is what your screenshot is showing:

- You define a component:  
  `function App() { return React.createElement("header"); }`
- React creates a virtual DOM element.
- `createRoot()` attaches React to the `#root` div.
- `render()` draws the component on the page.

No bundlers, packages, JSX, or build steps are involved.

---
