---
layout: ../../layouts/BlogPostLayout.astro
title: 'React Server Components: A Primer'
slug: react-server-components
datePublished: 2021-01-17T22:35:57.000Z
dateUpdated: 2021-02-08T12:26:43.000Z
tags:
  - React
excerpt: A primer on Server Components, an upcoming feature coming to React in the near future.
featureImage: /images/react-server-components.png
---

On December 21, 2020 the React team introduced [zero-bundle-size server components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html). I'd highly recommend watching [Dan and Laura's talk](https://youtu.be/TQQPAU21ZUw) outlining the core idea and demo. If you're interested in a quick summary, you can find my notes [here](https://brain-food.vercel.app/docs/javascript/react/react-server-components).

I'm pretty excited about Server Components. The React team mentioned that they would roll out first for frameworks like Next.js, which I use daily at work. I think when used properly that they'll be a game-changer for both user and developer experience.

## What are server components?

According to the [RFC](https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md), React Server Components "allow developers to build apps that span the server and client, combing the rich interactivity of client-side apps with the improved performance of traditional server rendering".

In a nutshell, React will let developers denote their components as either Client, Server or Shared components:

- **Client Components** are the components that we currently work with.
- **Server Components\***only \*execute on the server and are never shipped in the client-side bundle.
- **Shared Components** are components that will require both interactivity and have data requirements — they are rendered on both the client _and_ the server.

## What are the benefits?

### Server Components and their dependencies have no impact on the client-side bundle size.

```javascript
// ServerComponent.js - BEFORE SERVER COMPONENTS

import someExternalLib from '@external/lib'; // 40.1K (12K gzipped)
import anotherLib from '@another/lib'; // 23.6K (8.4K gzipped)

export default const ServerComponent({ children }) => {
    // Some component code
}

// ServerComponent.server.js - AFTER SERVER COMPONENTS

import someExternalLib from '@external/lib'; // Zero bundle size
import anotherLib from '@another/lib'; // Zero bundle size

export default const ServerComponent({ children }) => {
    // Some component code
}
```

Not only will `ServerComponent` be excluded from the client bundle, but the third-party packages won't be shipped to the client either. This means that developers will be able to freely use third-party packages without impacting the code shipped to the client when leveraging Server Components.

What's more, Shared Component code is lazy-loaded; in other words, it's only shipped to the client when required. [Laura from the React Data team showcases this in the demo](https://youtu.be/TQQPAU21ZUw?t=1775).

This has the potential for awesome performance implications — the less JavaScript that we ship to the browser, the faster our application will be. In fact, in their preliminary testing the React team noticed significantly reduced bundle sizes of ~18%. Of course, we'll need to wait for more work to be done for the team to have a more accurate picture of the overall bundle reduction.

### Server Components allow you to access the backend directly.

In current Next.js applications we can access the backend inside of `getServerSideProps()`. This only works at the top page level. With Server Components, we'll be able to access the backend from any component designated as a server component.

### Server Components provide automatic code-splitting where possible.

While React currently allows for code-splitting via dynamic imports, using them comes with a few issues. Firstly, it can be hard to remember to even do so in the first place.

```javascript
// React.lazy allows us to load this component when rendered on the client.
const DynamicallyImported = React.lazy(() => import('./Dynamic.js'));
```

It also delays when the app can start loading the selected component. This offsets some of the benefit of loading less code in the first place.

With Server Components, all imports of Client Components will be considered as possible places to code-split. No more need to specify which components to lazy-load; React will do the heavy lifting for us!

### Server Components can be refetched while preserving the client state inside of their tree.

![React component tree](/assets/react-component-tree.png)
Server Components can pass Client Components as props to other Client Components. What's cool is that any computed values within that component are already rendered, so you're essentially passing the component rendered JSX.

React is smart enough to understand that when we fetch data in a Server Component that we don't need re-render child Client Components. What this means is that **client-side state is always preserved**. This is fascinating and will lead to interesting use cases, the first of which the team showcases as a search feature.

## Are there any drawbacks?

### New mental model to learn.

Previously we'd only need to worry about writing our components for the client. With Server Components, we'll need to think about which components we want to designate as client, server, and shared. Initially, it might not be so clear.

### Constraints that developers will need to become accustomed to.

Since server components, well, run on the _server:_

- They cannot leverage browser-only APIs (i.e. the DOM) without a polyfill.
- They cannot use or hold state because they are conceptually executed only once per request on the server.
- They cannot use lifecycle methods or `useEffect()` / `useLayoutEffect`.
- They cannot use any custom hooks dependent on state or effects.

It might take some time before developers get used to these restrictions.

### New convention for distinguishing between types of components.

Server Components will introduce new conventions for distinguishing between the different components: `.client.js` and `.server.js` for Client and Server components, respectively. Shared Components will not require a specific convention.

It may take a while for React developers to get used to determining which component is responsible for.

## Summary

The main mental model to learn here is that **Server Components pass data from the backend to Client Components as props**. It might take React developers to get used to this paradigm, but I think it has the potential to reshape the way that we develop our applications.

To summarize:

- Server Components have zero effect on the bundle size.
- Server Components allow you to access the backend resources directly.
- Server Components let you only load the code that is necessary.
- Server Components let you decide the tradeoff for every concrete use case.
- Server Components provide modern UX with a server-driven mental model.

I'm personally excited to start using Server Components to see the impact that it has on performance, and to implement it in my projects at work.

Kudos to everyone in the React Core and React Data teams who contributed to this awesome, upcoming feature!
