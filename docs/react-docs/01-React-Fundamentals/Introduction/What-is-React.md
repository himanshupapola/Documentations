---
title: What is React?
sidebar_label: What is React?
sidebar_position: 1
---

React is an extremely popular, declarative, component-based, state-driven JavaScript library for building user interfaces.  
It was created by Meta (formerly Facebook) and is widely used across the industry for building fast, interactive, and scalable web applications.

### Why React Exists

Modern web applications are dynamic and interactive. Managing the DOM manually with vanilla JavaScript becomes complex as the UI grows.  
React solves this by abstracting away DOM manipulation and allowing developers to build UIs using reusable components and state.

---

## Key Concepts

### Component-Based Architecture

React applications are built from **components**—small, reusable pieces of UI such as buttons, input fields, search bars, navbars, or entire sections of a page.

- Components are like **LEGO blocks**.
- We combine them to build complex UIs (e.g., Airbnb’s search bar, listing cards, map panel).
- Components can be reused with different data (e.g., multiple listings in a results panel).

React’s job is simple: **render components on a webpage based on the current state**.

---

### Declarative UI with JSX

React uses a declarative syntax called **JSX** to describe what the UI should look like.

Declarative means:

- We tell React **what** the UI should look like.
- React figures out **how** to update the DOM.

JSX mixes HTML-like markup with JavaScript, and even allows referencing other components.  
This lets us focus on UI logic rather than low-level DOM operations.

---

### State and Re-Rendering

React keeps the UI **in sync with state**.

- State is the data that drives a component (e.g., list of apartments on Airbnb).
- When state changes—like loading more data—React automatically **re-renders the UI** to reflect that change.
- React “reacts” to state updates, which is where its name comes from.

Developers update state; React handles the UI updates.

---

## Library or Framework?

React is technically a **library**, not a full framework.

- React provides only the **view layer**.
- For routing, data fetching, and app structure, we rely on additional libraries.

To solve this, frameworks built on top of React—such as **Next.js** and **Remix**—provide full application capabilities.

---

## Popularity and Ecosystem

React is the **most widely used UI library** in the world.  
Key reasons:

- Adopted early by large companies (Meta, Netflix, Airbnb)
- Massive global job market
- Huge open-source community
- Rich ecosystem of third-party libraries and tools

Because of this, React continues to grow and evolve rather than fade.

---

## History

- **2011:** Created by Jordan Walke at Facebook  
- **2013:** Open-sourced to the public  
- Used in Facebook’s newsfeed, chat, Instagram, and many more applications  
- Sparked the creation of modern competitor frameworks inspired by its ideas  

React transformed frontend development and influenced almost every modern UI framework.

---

## Summary

React excels at two things:

1. **Rendering UI components** based on their current state  
2. **Keeping the UI in sync with state** by re-rendering when data changes  

It achieves this using concepts such as:

- Virtual DOM  
- Fiber architecture  
- One-way data flow  
- Components and hooks  

React is fast, efficient, popular, and backed by a large ecosystem—making it the top choice for modern web development.

---