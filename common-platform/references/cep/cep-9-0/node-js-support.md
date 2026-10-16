# Node.js Support

In CEP 6.1, the HTML engine moved to CEF 2272. That runtime is based on Chromium 41.0.2272.104 and integrates IO.js version 1.2.0.

Additional notes:

- Node.js APIs are **disabled by default**
  - For security reasons, node.js APIs are off by default at both the extension level and the iFrame level. In CEP versions before 6.1, they were enabled by default.

To enable Node.js APIs:

- Use version 5.0 or higher for both `ExtensionManifest` and `RequiredRuntime`.
- Add `--enable-nodejs` to the extension manifest. For details, see Customize CEF Command Line Parameters.
- For `Node.js` APIs inside IFrames, add the `enable-nodejs` property to the target IFrame and every ancestor IFrame. If one ancestor lacks the property, `Node.js` APIs will not work.

```html
<iframe id="xxx" class="xxxxx" enable-nodejs></iframe>
```

- The new HTML engine ignores the old `nodejs-disabled` CEF command line parameter and iFrame property; they are no longer supported.
- Node context and Browser context
  - Integrating `io.js` into CEF created two JavaScript context types: one for the browser and one for `io.js`. Global objects created in HTML pages live in browser context, while required JS files execute in `io.js` context. The two contexts cannot directly access each other's data. To share information, pass object references between them:
    - Accessing objects in `io.js` context from browser context - In browser context, for example, `var backbone = require('backbone');` runs the backbone module code and passes the resulting object back into browser context.
    - Accessing objects in browser context from `io.js` context - CEP injects the browser context's `window` global object into `io.js` context, giving `io.js` code a route to browser-context objects. For example, an `io.js` module can access a browser-context global named `localeStrings` through `window.localStrings`.
