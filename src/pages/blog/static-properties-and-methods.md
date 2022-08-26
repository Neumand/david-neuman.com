---
layout: ../../layouts/BlogPostLayout.astro
title: 'OOP Fundamentals: Static Properties and Methods'
slug: static-properties-and-methods
datePublished: 2021-03-24T13:13:36.000Z
dateUpdated: 2021-04-09T15:34:33.000Z
tags:
  - Software Development
excerpt: A high-level overview of the static keyword in object-oriented programming.
featureImage: https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGVsZWN0cmljaXR5fGVufDB8fHx8MTYxNjU5MTUyMQ&ixlib=rb-1.2.1&q=80&w=2000
---

In an effort to brush up on my object-oriented programming (OOP) fundamentals and the Java language — which I sometimes need to dive into at work — I decided to enroll in some Coursera courses. Brandon Krakowsky's [Introduction to Java and Object-Oriented Programming](https://www.coursera.org/learn/java-object-oriented-programming) covers the basics and was a great refresher for me, but I did learn some new concepts. In particular what the `static` keyword is actually used for and why it's useful. Here's what I learned.

## What does the static keyword do?

When a variable or method is given the `static` keyword it means that they can be accessed or used without creating an instance of the class. Pretty simple concept, right? For someone with little OOP experience while this makes sense, it was more difficult to envision in what circumstances to use the `static` keyword. Let's take a look at a simple example.

```java
  import java.util.UUID;

  public class Store {
    UUID id;
    String location;

    static int storeCount;
    static String STORE_NAME = "Apple";

    public Store(String location) {
      this.id = UUID.randomUUID();
      this.location = location;
      storeCount++;
    }

    public static int getStoreCount() {
      return storeCount;
    }

    public double getTaxRate() {
      return Tax.getRateForLocation(this.location);
    }
  }
```

## Main uses of the static keyword

So we have a simple `Store` class where we can create a new class by providing the location of the new store: `new Store("Montreal, QC")`. We don't have any meaningful functionality on the class, but that doesn't matter for this contrived example. What we can observe, however, is some of the common uses of the `static` keyword.

### Storing Constant Values

In our case we want each store to represent an Apple store. It wouldn't make sense to give each instance of the `Store` class the name "Apple" since this is shared across all stores. Instead, we create a static variable called `STORE_NAME` that stores the name of the store. We can then retrieve this value by simply calling `Store.STORE_NAME`.

### Sharing Data Across Instances of a Class

What if we want to track how many Apple stores there are? The easiest way is to create a static variable `storeCount` and use a static method `getStoreCount` to get the number of stores. Each time a new instance of the class is instantiated we increment the count of all stores by 1. This way we can share the count of all stores across all instances.

### Helper Methods

We can leverage static methods on helper classes to provide common functionality or calculations without creating an instance of the class. In our contrived example we can use the `getTaxRate` helper method on the `Tax` class to get the tax rate for an instance of the `Store` class depending on its location. While we need an instance of the `Store` class to retrieve the tax rate, we don't need one for the `Tax` class. It's useful to simply call the static helper method on the class to figure that out for us.

## Static in JavaScript

I noticed that my colleagues at a former employer were using the `static` keyword in JavaScript classes on the front-end. In JavaScript, however, there is an important distinction between static _methods_ and _properties_:

- Static methods were officially introduced in ES6/ES2015 and have widespread support at this point
- Static properties are a recent addition to the spec and aren't supported yet in Safari

![Browser compatibility table from MDN documentation](//public/static/images/ghost/2021/03/image.png)Browser compatibility as per MDN

## The "Shocking" Truth of Static

The `static` keyword in theory is simple to understand. But until I saw concrete use cases and explanations for when to use it I didn't fully grasp its usefulness. Static properties are great for storing constant values or shared data across object instances, while static methods are perfect as helper methods or when an instance of the class isn't required.
