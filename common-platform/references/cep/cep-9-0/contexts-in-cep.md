# Contexts in CEP

At startup, CEP defines several default contexts:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. In addition to Browser objects, CEP file system APIs are available here.

2.  **Native Context**

    This extended context uses the "cep" object to provide file system access through CSInterface.js.

3.  **Node Context** (when the --enable-nodejs command line switch enables nodejs)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    The evalscript API accesses this context.

---

**Separate Context Mode**

CEP creates this context when started with --enable-nodejs and without --mixed-context. In that configuration, the following symbols are present:

1.  cep_node: A global symbol shared across frames that provides access to node symbols. Changes made to this symbol are visible in every frame context. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be used only from the main frame, which is the current document. New frames created by that document do not receive those symbols in their context. This differs from CEP 7 behavior, where node globals could be accessed in all frames.

The following representation shows the context layout:

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

CEP creates this context when started with both --enable-nodejs and --mixed-context. In that configuration, these symbols are present:

1.  cep_node: A local symbol available within each frame that provides access to node symbols. Changes made to this symbol are not visible in other frames. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be used from every frame, and each frame receives its own instance.

The following representation shows the context layout:

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
