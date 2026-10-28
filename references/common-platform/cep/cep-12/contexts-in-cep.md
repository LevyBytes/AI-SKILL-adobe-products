# Contexts in CEP

CEP defines multiple contexts at startup. These are the default contexts:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. Alongside Browser objects, this context provides access to CEP file system APIs.

2.  **Native Context**

    Through the "cep" object, this extended context exposes file-system operations through CSInterface.js.

3.  **Node Context** (when --enable-nodejs enables nodejs)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    The evalscript API reaches this context.

---

**Separate Context Mode**

This context is created by the following command line switch: --enable-nodejs (with --mixed-context **not** passed). Starting CEP this way exposes these symbols:

1.  cep_node: Treated as a global symbol shared across frames, this provides access to node symbols. Changes made to this symbol appear in every frame context. CEP 8 introduced this symbol.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be reached only from the main frame, meaning the current document. When the current document creates a new frame, those symbols are absent from that frame's context. This differs from CEP 7 frame behavior, where node globals were accessible in all frames.

The following representation gives visual context:

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

Create this context by starting CEP with the command line switches --enable-nodejs and --mixed-context. Under that startup mode, these symbols are present:

1.  cep_node: Treated as a local symbol inside each frame, this provides access to node symbols. A modification in one frame is not reflected into other frames. CEP 8 introduced this symbol.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be accessed in all frames, with a unique instance per frame.

The following representation gives visual context:

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
