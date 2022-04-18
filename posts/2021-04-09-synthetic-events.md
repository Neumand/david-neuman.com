---
title: "Synthetic Events: Handling State Updates Outside of React"
slug: synthetic-events
date_published: 2021-04-09T15:34:14.000Z
date_updated: 2021-08-16T14:50:59.000Z
tags: React, Software Development
excerpt: How a JavaScript bundle can react to events occurring outside of its scope using synthetic events.
---

You've probably seen a banner on the bottom of many websites asking you to either accept all cookies or to manage your cookie preferences. My current "shape" or cycle at work involves building something similar that we can integrate across websites and apps. It will be a simple React app bundled to be consumable in different ways (i.e. as a script tag or a React component).

While building the actual UI and functionality of the cookie preferences banner is simple, I needed to think about one requirement in particular. Any site that integrates the bundle would need to be able to trigger the cookie preferences popup. The problem? We display the popup based on internal React component state. How can I update the state from outside of the bundle?

## Synthetic Events

During my research I discovered that you can easily create custom or synthetic DOM events and dispatch them for event listeners.

    // Create synthetic event
    const cookiePopupEvent = new Event('triggerCookiePopup');
    
    // Dispatch event
    window.dispatchEvent(cookiePopupEvent);

Here's how I thought about the interaction between a website and our bundled React application:

1. The bundled React app creates a custom event and exports a function for the consumer that dispatches the event
2. The website or app would consume this function and attach it as a handler on a button or link of its choice
3. The bundle, having also created an event listener on this custom event, triggers the popup display when the event is dispatched

## Creating and Exporting

    // CookieManager.js
    import React from "react;
    
    // Other imports
    
    const triggerCookiePreferencesEvent = new Event('triggerCookiePreferences');
    
    function triggerCookiePreferences() {
        window.dispatchEvent(triggerCookiePreferencesEvent);
    }
    
    // JSX Component
    function CookieManager() {...}
    
    export { CookieManager, triggerCookiePreferences };

Because declarations are evaluated before function expressions I needed to create the synthetic event in the parent scope. This way when event actually exists when called from the `triggerCookiePreferences` function or when the event listener is created within the `ConsentManager` component, as I'll demonstrate shortly.

You'll notice that instead of a default export – which is how we traditionally export React components — I opted for named exports so that we can include the function in the final bundle. Both the React component and function will be exported from `index.js`.

## Triggering

It would take another blog post to describe the process — and frustrations — of bundling an app. Without going into the nitty-gritty, here's an example of what a rollup.js config file might look like:

    //rollup.config.js
    export default {
      input: "dist/index.js",
      output: {
        name: "CookieManager",
        file: "dist/index.min.js",
        format: "umd",
        sourcemap: false
      }
      // ... Plugins
    }

Once the app is bundled we can use it in another project by adding it as the source in a `script` tag. Now the `triggerCookiePreferences` method can be called on the `ConsentManager` module as that's the global variable name that was specified for the bundle. Clicking the `button` element below will dispatch the previously created synthetic event.

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cookie Demo</title>
        <script src="index.min.js" type="text/javascript"></script>
      </head>
    
      <body>
        <button onclick="ConsentManager.triggerCookiePreferences()">
            Manage Cookie Preferences
        </button>
      </body>
    </html>
    

## Handling

The React app needs to know about the synthetic event. This can be done with a simple event listener.

    // CookieManager.js
    React.useEffect(() => {
        const handleCookiePreferences = () => {
            setModalIsOpen(!modalIsOpen);
        };
    
        window.addEventListener(
            "triggerCookiePreferences",
            handleCookiePreferences
        );
    
        return () => {
            window.removeEventListener(
                "triggerCookiePreferences",
                handleCookiePreferences
            );
        };
    }, [modalIsOpen]);

Here we are:

- Creating a handler function for updating the modal's state
- Creating an event listener for reacting to the `triggerCookiePreferences` custom event
- Cleaning up by returning a function that removes the event listener so that we avoid memory leaks

## Conclusion

Synthetic events can allow for a bundled application to react to any specified action occurring outside of its scope. In my case, I was able to create and expose functions from the bundle that the consuming app could call however it liked. The most practical example would be adding a click handler on a button to trigger the function and in turn show the modal.

The implementation is simple, easy to understand and make use of a built-in browser feature.
