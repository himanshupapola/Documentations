---
title: Creating a React App
sidebar_label: Creating React App
sidebar_position: 1
description: Learn how to quickly set up a React application using Vite.
---

# Creating a React App

This guide explains how to create a modern React application using Vite.  
It covers prerequisites, installation steps, and essential commands to get your app running.

## Overview

Vite provides a faster, lightweight alternative to traditional tooling like Create React App.  
With Vite, we get:

- Extremely fast startup using native ES modules
- Hot Module Replacement (HMR) with minimal reload time
- Simple project structure
- Efficient production build using Rollup

## Prerequisites

Before creating a new React app with Vite, ensure the following are installed:

- Node.js (version 18 or higher recommended)
- A package manager — npm, yarn, or pnpm
- Basic understanding of React components and JSX

## Step-by-Step Guide

### 1. Create the Project

Run the following command to generate a new React project using Vite:

```bash
npm create vite@latest my-react-app --template react
```

For TypeScript:

```bash
npm create vite@latest my-react-app --template react-ts
```

### 2. Install Dependencies

Navigate to the project and install required dependencies:

```bash
cd my-react-app
npm install
```

### 3. Start the Development Server

Run the local dev server:

```bash
npm run dev
```

Your application will be available at:

```
http://localhost:5173/
```

> Note: Vite automatically refreshes the browser using Hot Module Replacement (HMR).

## Example Code

Below is the default `App.jsx` that Vite generates:

```jsx
function App() {
  return <h1>Hello World from Vite + React</h1>;
}

export default App;
```

## Best Practices

- Use meaningful folder structures under `src/` (components, hooks, utils).
- Prefer functional components and React hooks.
- Keep environment variables in `.env` files.
- Run `npm run build` before deployment to produce an optimized bundle.

---

export const Highlight = ({children}) => (
<span style={{backgroundColor: '#f0f0f0', padding: '2px 4px', borderRadius: '4px'}}>
{children}
</span>
);
