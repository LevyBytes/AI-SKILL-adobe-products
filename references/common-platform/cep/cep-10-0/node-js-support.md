# Node.js Support

The HTML engine in CEP 6.1 moved to CEF 2272, based on Chromium 41.0.2272.104, and includes IO.js version 1.2.0.

Other notes:

- Node.js APIs are **disabled by default**
  - For security reasons, node.js APIs start disabled by default at both the extension and iFrame levels. Before CEP 6.1, they were enabled by default.

To enable Node.js APIs:

- Use `ExtensionManifest` and set `RequiredRuntime` to version 5.0 or later.
- Add `--enable-nodejs` to the extension manifest. Details are in Customize CEF Command Line Parameters.
- For `Node.js` APIs inside IFrames, place the `enable-nodejs` property on the target IFrame and on every ancestor iFrame. If any ancestor omits it, `Node.js` APIs are unavailable there.

```html
<iframe id="xxx" class="xxxxx" enable-nodejs></iframe>
```

- The former `nodejs-disabled` CEF command line parameter and iFrame property no longer have any effect in the new HTML engine.
- Node context and Browser context
  - Integrating `io.js` into CEF creates two JavaScript contexts: one browser context and one `io.js` context. HTML page globals live in browser context, while `required` js files execute in `io.js` context. The two contexts cannot directly read each other's data. To share values, pass object references between them:
    - Browser context reading `io.js` objects - In browser context, `var backbone = require('backbone');` runs the backbone module code and then passes the result object back to browser context.
    - `io.js` context reading browser objects - The browser context's `window` global object is injected into `io.js` context, giving `io.js` code a route to browser-context objects. For example, to read a global object named `localeStrings` that was defined in browser context from an `io.js` module, use `window.localStrings` inside that `io.js` module.
