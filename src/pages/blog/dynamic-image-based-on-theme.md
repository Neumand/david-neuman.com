---
layout: ../../layouts/BlogPostLayout.astro
title: Dynamic Image Based on Theme (Light/Dark)
slug: dynamic-image-based-on-theme
datePublished: 2022-08-22
excerpt: A beautiful excerpt
featureImage: https://images.unsplash.com/photo-1627843240043-aa499ed215e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHluYW1pYyUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60
tags: []
draft: true
---

On the About page of my blog, I have an image that changes based on the active theme.

![](/images/lightouse-light-dark.gif)

Pretty cool, right? The current implementation looks something like this:

```javascript
import { useTheme } from 'next-themes';
import LighthouseDay from 'public/static/images/lighthouse-sunset.png';
import LighthouseNight from 'public/static/images/lighthouse-night.png';

const { theme } = useTheme();

<Image
  placeholder='blur'
  src={theme === 'light' ? LighthouseDay : LighthouseNight}
  alt='Lighthouse'
/>;
```

## Too Much JavaScript

I encountered some challenges with this dynamic image while moving my website over to [Astro](https://astro.build). My new About page is statically generated with _zero_ JS shipped to the browser. I would need another approach to generate different images based on the theme.

## Leveraging the picture and source Elements

## content: url()
