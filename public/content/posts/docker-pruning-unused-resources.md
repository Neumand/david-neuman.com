---
title: "Docker: Pruning Unused Resources"
slug: docker-pruning-unused-resources
date_published: 2020-10-13T13:08:45.000Z
date_updated: 2020-10-13T13:09:06.000Z
tags:
  - Software Development
excerpt: How to clear up unused disk space in Docker
---

Docker doesn't explicitly perform garbage-collection on unused images, containers or volumes. Without specifically asking Docker to remove unused disk space you may eventually receive a similar error message:

    ERROR: Service XXXX failed to build: Error processing tar file(exit status1): no space left on device

Clearing up space is fairly simple.

    // Prune all resources
    docker image prune
    docker container prune
    docker volume prune
