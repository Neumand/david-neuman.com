---
title: The Magic of JavaScript Closures
slug: the-magic-of-closures
date_published: 2021-08-16T14:51:19.000Z
date_updated: 2021-10-24T18:53:14.000Z
tags:
  - JavaScript
excerpt: Closures are magical. And I'm a fantasy nerd. To see what closures are and how useful they can be, let's take a look at a little example.
---

> This is the most elegant feature in all of JavaScript. Elegant meaning, like, interesting, intriguing, and surprisingly kind of nicely crafted feature.
> 
> - Will Sentance on closures, JavaScript: The Hard Parts, v2 (Frontend Masters)

Closures are *magical*. And I'm a fantasy nerd. To see what closures are and how useful they can be, let's take a look at a little example.

## The Conjuring

Let's create a function that makes a spell.

    function conjureSpell(spellName, element, cost) {
      let mana = 100;
      return () => {
        if (mana >= cost) {
          mana -= cost;
          console.log(`You cast ${spellName}! ${element} Mana: ${mana}`);
        } else {
          console.log(`Oops, not enough mana (${mana}) to cast ${spellName}`);
        }
      };
    }

Here's what we're doing:

- We declare a function `conjureSpell` which takes in the name of our spell, the spell's element (fire, wind, etc.), and how much the spell costs.
- We create a variable `mana` — our resource cost — and set it to `100`.
- We return a function that will cast our spell! More on this in a bit.

In JavaScript functions are first-class citizens. What this means is that JavaScript functions can accept other functions as arguments and return other functions. We have a name for this type of function: **higher-order functions**. `conjureSpell` is one such function.

Let's create a couple of spells.

    const pyroStrike = conjureSpell('Pyrostrike', '🔥', 30);
    const voltWave = conjureSpell('Voltwave', '⚡', 50);

Not the most creative names, but they will have to do
Now that we've got our spells we can get to the interesting bit. Recall that `conjureSpell` returns a function. That means that calling either of our spells will invoke the function that was returned from our `conjureSpell` function. What you'll notice is that all of the arguments that we initially passed into `conjureSpell` — as well as the variable `mana` — are being used in the returned function (our spell cast).

But wait: how does that make sense? After we've called `conjureSpell` wouldn't we lose access to those variables since that function technically doesn't exist anymore?

## The Casting

Let's cast our spells a few times and see what happens.

    function conjureSpell(spellName, element, cost) {
      let mana = 100;
      return () => {
        if (mana >= cost) {
          mana -= cost;
          console.log(`You cast ${spellName}! ${element} Mana: ${mana}`);
        } else {
          console.log(`Oops, not enough mana (${mana}) to cast ${spellName}!`);
        }
      };
    }
    
    pyroStrike(); // You cast Pyrostrike! 🔥 Mana: 70
    voltWave(); // You cast Voltwave! ⚡ Mana: 50
    voltWave(); // You cast Voltwave! ⚡ Mana: 0
    pyroStrike(); // You cast Pyrostrike! 🔥 Mana: 40
    pyroStrike(); // You cast Pyrostrike! 🔥 Mana: 10
    pyroStrike(); // Oops, not enough mana (10) to cast Pyrostrike!

`pyroStrike`*remembers* all of the variables that were declared or inferred through its paremeters within `conjureSpell`'s scope. Magic, right?

This is the essence of what a closure is. As soon as we declared `conjureSpell` it received a hidden property: `[[scope]]`. For the sake of our analogy, let's call it our inventory. The inventory links to *where* the surrounding data is stored. When we return a function for casting our spell, the inventory comes with it! This allows the function to "remember" the data in the context that it was called in. Better yet, it's *stored there permanently*.

## The Wisdom

You can think of our inventory — a closure — with the following acronym: **PLSRD**, or **persistent, lexically scoped, referenced data**.

**Closures provide functions with permanent memory**. This is useful for a myriad of use-cases, including:

- Limiting function calls to a certain number of calls
- Memoizing return values for optimizing performance
- Persisting state and updating values over time

As an example, React relies heavily on closures in its implementation of hooks.

I've taken closures for granted in the few years that I've been programming with JavaScript. Will helped me take a hard look not only at what they are, but how they are practically used. Hopefully this fantastical example shed some light as to how they work and how they can be used in your day-to-day programming.
