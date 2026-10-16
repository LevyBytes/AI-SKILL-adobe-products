# Localization and Platforms — Localization

For localization and similar host-aware logic, a plugin may need details about its host environment. Use this pattern to retrieve them:

```js
const host = require("uxp").host;
const locale = host.uiLocale;
const hostName = host.name;
const hostVersion = host.version;

console.log(`locale: ${locale}  host ${hostName} version ${hostVersion}`);
```

After receiving those strings, feed them into `switch` statements or other control flow so the plugin can adjust behavior, such as choosing the right text for messages and dialogs.

The same values can also drive HTML component updates in panels, commonly through `innerHTML` or `innerText`, so the displayed strings match the target language.
