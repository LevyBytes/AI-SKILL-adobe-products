# Contexts in CEP

At startup, CEP defines several contexts. These are the defaults:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. In addition to Browser objects, CEP file system APIs are available here.

2.  **Native Context**

This extended context comes through the "cep" object, with CSInterface.js providing file system access.

3.  **Node Context** (when --enable-nodejs turns on nodejs)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    evalscript API accesses this context.

---

**Separate Context Mode**

CEP creates this context when it starts with the following command line switch: --enable-nodejs, with --mixed-context **not** passed. In this context, CEP provides these symbols:

1.  cep_node: a global symbol available across frames for reaching node symbols. Changes to this symbol are visible in every frame context. This symbol was added in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are accessible only in the main frame, which is the current document. Newly created frames in the current document do not receive these symbols in their own contexts. This differs from CEP 7 frame behavior, where node globals were available in all frames.

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

CEP creates this context when launched with --enable-nodejs and --mixed-context. In this context, these symbols exist:

1.  cep_node: a local symbol inside each frame that provides access to node symbols. Changing this symbol in one frame does not affect other frames. This symbol was added in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are available in all frames, separately for each frame.

The following representation shows the context visually:

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
