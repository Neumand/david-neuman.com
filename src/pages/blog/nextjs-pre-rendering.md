---
layout: ../../layouts/BlogPostLayout.astro
title: Pre-Rendering in Next.js
slug: nextjs-pre-rendering
datePublished: 2020-09-30T23:29:43.000Z
dateUpdated: 2021-01-17T22:36:22.000Z
tags:
  - Software Development
excerpt: A brief overview of how Next.js renders the content for each page of a website or app.
featureImage: /static/images/ghost/2020/09/next-js-1.png
---

At [Stingray](https://www.stingray.com/) our websites are written in [Next.js](https://nextjs.org/), a popular framework built with React. React is the premier library for building single-page applications (SPAs), where content is rendered on the client-side. However, there are a couple of problems when it comes to building SPAs:

- Since pages are generated at runtime by JavaScript, web crawlers are unable to discover metadata about the app. As such SPAs cannot leverage search engine optimization (SEO) tools, which are critical for bringing visibility and providing access to your site.
- Content is only available when all of the JavaScript has finished loading. Until then, users will simply view a blank page.

This is where Next.js comes in. Next.js pre-renders content by generating HTML for each page in advance. Afterwards, the JavaScript code runs and makes the app fully interactive in a process called **hydration**. So instead of users seeing a blank page until all of the JavaScript has run, they will be able to view the page's content almost instantaneously and then be able to interact with more dynamic features once the hydration process has finished.

The below images from the official Next.js documentation help explain these concepts and process.
![](//public/static/images/ghost/2020/09/image-3.png)Sourced from the official [Next.js documentation](https://nextjs.org/learn/basics/data-fetching/pre-rendering)![](//public/static/images/ghost/2020/09/image-2.png)Sourced from the official [Next.js documentation](https://nextjs.org/learn/basics/data-fetching/pre-rendering)
You can also choose _how_ to pre-render your content. This decision primarily affects _when_ the HTML is generated for each page.

## Static Generation vs. Server-Side Generation (SSG)

Next.js provides the option to generate pages statically through a process commonly known as **static site generation **(SSG) or through **server-side rendering** (SSR).
![](//public/static/images/ghost/2020/09/image-4.png)Static generation![](//public/static/images/ghost/2020/09/image-5.png)Server-side rendering
Pages generated through SSG are prepared at build time, meaning that every possible view of a site is generated ahead of a user making a request to that page.

The resurgence in statically generated sites can be largely attributed to modern, improved tooling that makes it easy to build static websites. Other than Next.js, popular frameworks include [Gatsby](https://www.gatsbyjs.com/), which I've experimented with myself, and [Hugo](https://gohugo.io/).

Next.js recommends statically generating your pages whenever possible as they can can be built once, cached, and served by content-delivery network (CDN). This process makes your site's responses _fast_, more so than having to server render the page each time a user makes a request — the essence of server-side rendering.

The caveat — _whenever possible_ — means:

- You can predict all possible requests
- Responses are the same no matter who views it
- Responses do not go quickly out of date

## Hybrid Approach

Next.js allows for different pages to be rendered either statically or via server-side. By default pages are statically generated. But we can use some built-in functions to choose how we'd like to render the page.

Using `getStaticProps` allows us to fetch data for our statically rendered page on build time, which `getServerSideProps` lets us do so on each request to the server.

```javascript
// Static using getStaticProps.
const About = () => {
    // component code...
};

// Function that allows you to fetch data at build time.
export async function getStaticProps() {
    const app = await getApp();
    return {
        props: {
            app,
        },
    };
};

export default About;

// SSR using getServerSideProps.
const Billing = () => {
    // component code...
};

// Function that allows you to fetch data on each request.
export async function getServerSideProps(context) {
    // Fetch data.
    const paymentInfo = await fetch("https://...api/billing/data");
    const data = res.json();

    // Pass data to the Billing page via props.
    return { props: { data } };
};

export default Billing;
```

At Stingray most of our websites are server-side rendered. We have data that needs to be updated frequently, but more importantly we use a custom Node/Express server for them. Nevertheless, I plan to explore if we can statically render some of our marketing or "About" pages to see the impact on performance.

As I become more comfortable with the features that Next.js provides developers, I'm hoping to write more about the framework. It's been a joy to work with so far and I'm excited to dive in even further.
