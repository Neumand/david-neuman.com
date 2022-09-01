---
layout: ../../layouts/BlogPostLayout.astro
title: 'Docker: Pruning Unused Resources'
slug: docker-pruning-unused-resources
datePublished: 2020-10-13T13:08:45.000Z
dateUpdated: 2020-10-13T13:09:06.000Z
tags:
  - Software Development
excerpt: How to clear up unused disk space in Docker
featureImage: https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ
---

Docker doesn't explicitly perform garbage-collection on unused images, containers or volumes. Without specifically asking Docker to remove unused disk space you may eventually receive a similar error message:

```
ERROR: Service XXXX failed to build: Error processing tar file(exit status1): no space left on device
```

Clearing up space is fairly simple.

```javascript
// Prune all resources
docker image prune
docker container prune
docker volume prune
```
