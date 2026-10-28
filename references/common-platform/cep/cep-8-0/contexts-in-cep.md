# Contexts in CEP

CEP defines several contexts at startup. These are the defaults:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. Besides Browser objects, CEP file system APIs are available here.

2.  **Native Context**

    This extended context uses the "cep" object to expose file system access through CSInterface.js.

3.  **Node Context** (When nodejs is enabled through --enable-nodejs command line switch)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

This context is reached through the evalscript API.

---

**Separate Context Mode**

This context is created when the command line switch --enable-nodejs is used and --mixed-context is **not** passed. When CEP starts in this mode, these symbols are present:

1.  cep_node: This global symbol is shared across frames and provides access to node symbols. Changes made to it are reflected in every frame context. This symbol was added in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be used only in the main frame, meaning the current document. New frames created inside the current document do not receive these symbols in their own context. This differs from CEP 7 frame behavior, where node globals could be accessed from all frames.

The following representation shows the context visually:

> **Separate Context**

```html
<html>
  <head> </head>
  <body>
    <iframe name="iframe_1"> </iframe>
    <iframe name="iframe_2"> cep_node.process.myVar = "Hello"; </iframe>
    <iframe name="iframe_3"> </iframe>
  </body>
</html>
```

**Mixed Context Mode**

This context is created with the command line switches --enable-nodejs and --mixed-context. When CEP starts with this context, it exposes these symbols:

1.  cep_node: This local symbol exists inside each frame and provides access to node symbols. Changing it in one frame does not affect other frames. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are available in every frame, with a unique copy for each frame.

The following representation shows the context visually.

> **Mixed Context**

```html
<html>
  <head> </head>
  <body>
    <iframe name="iframe_1"> </iframe>
    <iframe name="iframe_2"> cep_node.process.myVar = "Hello"; </iframe>
    <iframe name="iframe_3"> </iframe>
  </body>
</html>
```
