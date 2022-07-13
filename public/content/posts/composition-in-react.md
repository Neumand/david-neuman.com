---
title: Composition in React
slug: composition-in-react
date_published: 2021-03-07T15:56:08.000Z
date_updated: 2021-03-24T13:13:45.000Z
tags:
  - React
  - Software Development
excerpt: A look at React's composition model and why we say we favor composition over inheritance.
feature_image: https://images.unsplash.com/photo-1591025810539-a321000cda85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDN8fGNvbXBvc2V8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000
---

*"What do we mean when we say that we favor composition over inheritance?"*

This is a question that I was asked in an interview for a position as a front-end developer a few months ago. I was familiar with the term "inheritance" as a foundational principle of Object-Oriented Programming (OOP) but I had little clue what my interviewer meant by composition. When I heard Kent C. Dodds bring up the concept in his [excellent new course Epic React](https://epicreact.dev/), I decided it was time to figure this out for myself.

## Inheritance

While I'd like to focus on the power of composition in this post, it's worth discussing the alternative paradigm: **inheritance**. This core concept of OOP allows classes to share common attributes/values and methods. Child classes can "extend" from a parent class, deriving some functionality and attributes from the parent without explicitly specifying them.

While most prominently featured in OOP-focused languages, here's a quick example in JavaScript:

    class Vehicle {
      isEngineOn = false;
      start() {
        this.isEngineOn = true;
      }
    }
    
    class Car extends Vehicle {
      speed = 0;
      constructor(make, model) {
        this.make = make;
        this.model = model;
      }
      drive(desiredSpeed) {
        this.start();
        this.speed = desiredSpeed; // In reality you wouldn't immediately reach the desired speed...
      }
    }
    
    const camry = new Car("Toyota", "Camry");
    camry.drive();

In this contrived example, you can see that we can create an instance of the `Car` class and have access to the variables and methods on the parent `Vehicle` class.

With inheritance, types or classes are designed around what they *are*. This is the most important distinction. First, we think about what the object *is* and then we can start thinking about what that means in terms of its functionality and properties.

This process encourages you to build a hierarchy of relationships among classes beforehand. In this way we are sort of trying to predict the future. The problem? **We're not very good at predicting the future**. With multiple stakeholders on projects decisions can change down the road. The inheritance mechanism makes it difficult to modify relationships between classes in the future. This is especially relevant when multiple classes or objects share the same functionality.

The definition we give to a `Vehicle` might change in 6 months. If it does, our inheritance structure will begin to break down.

## Composition

Enter **composition**, where classes are favored over what they *do* as opposed to what they *are*. Instead of having functionality coupled to a specific class we can abstract them into composable functions. Then, we can use them together with any class or type that needs it.

### React's Composition Model

React was built with composition in mind, and the documentation recommends taking advantage of it whenever possible. Composition in React solves two common problems:

1. **Containment**
2. **Specialization**

### Containment

As I mentioned before, a problem with inheritance is that the mechanism encourages you to build the hierarchy of relationships beforehand. With the built-in `children` prop in React, we can pass child elements directly from a parent component to a child. This gives developers the flexibility of passing whatever they'd like as children of that component. It also becomes easy to change in the future.

Here's a contrived example:

    function Toast({ children, status }) {
      let color;
      switch (status) {
        case "SUCCESS":
          color = "green";
          break;
        case "WARNING":
          color = "yellow";
          break;
        case "ERROR":
          color = "red";
          break;
        default:
          throw new Error("No status provided");
      }
      return (
        <div className="toast" style={{ backgroundColor: color }}>
          {children}
        </div>
      );
    }
    
    function App() {
      return (
        <>
          <Toast status="SUCCESS">Congratulations!</Toast>
          <Toast status="ERROR">
            <SomeErrorComponent />
          </Toast>
        </>
      );
    }

We can use the `children` prop to pass pretty much *anything* we want as a child to the `<Toast />` component. This gives us the flexibility to pass some text, or even another component in the case above.

### Specialization

What happens if we have a class or an object that is a "special case" of another? If we go back to our initial example, what if we have a `HoverCar` class that is similar to a `Car` but has some additional properties or methods, like a `hover()` method? We'd need to have the `HoverCar` class inherit from both the `Vehicle`*and*`Car` classes.

React uses composition to allow for more specific components to render a more generic one. This is done with props.

    function FrenchToast() {
      return (
        <div>
          <Toast status="SUCCESS">
            Félications! 🎉
          </Toast>
        </div>
      );
    }

Is a `FrenchToast` a `Toast`? Instead of asking that question we can hone in on what it *does*, which is to render a `Toast` component with a "congratulations" message  in French via the `children` prop.

We no longer need to worry about the component's identity but rather focus on functionality.

## Favoring Composition

So, what do we mean when we say that we "favor" composition over inheritance? Well, when it comes to front-end development in React we mean that we focus on what components *do* versus what they *are*. It means that we develop reusable components based on functionality instead of identity.

React lets developers:

1. Pass data of an "unknown" type from a parent to child component through the special `children` prop.
2. Use `props` to render generic components in more specific ones, eliminating the need for complex and changing hierarchies.
