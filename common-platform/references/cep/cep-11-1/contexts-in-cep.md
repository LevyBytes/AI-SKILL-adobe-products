# Contexts in CEP

CEP initializes with several contexts. The default contexts are listed below:

1.  **Browser Context**

    CEP's browser engine uses this as its default JS context. Browser objects are present here, and CEP file system APIs are reached from this context.

2.  **Native Context**

    The "cep" object extends this context to provide file system access through CSInterface.js.

3.  **Node Context** (When nodejs is enabled through --enable-nodejs command line switch)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    Code reaches this context through the evalscript API.

---

**Separate Context Mode**

This context is created when CEP starts with --enable-nodejs and without --mixed-context. In that mode, CEP exposes these symbols:

1.  cep_node: CEP treats this as a global symbol shared across frames for node-symbol access. Changes to this symbol are visible in every frame context. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are available only in the main frame, which is the current document. Newly created frames in the current document do not receive those symbols. This differs from CEP 7 behavior for frames, where node globals could be accessed from all frames.

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

This context is created when CEP starts with both --enable-nodejs and --mixed-context. In this mode, CEP exposes these symbols:

1.  cep_node: CEP treats this as a local symbol inside each frame, used to reach node symbols. Changes to the symbol stay within that frame and are not mirrored into other frames. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are accessible in all frames, with a separate copy for each frame.

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
