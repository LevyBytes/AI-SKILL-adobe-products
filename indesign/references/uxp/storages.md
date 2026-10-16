# Storages

When a script or plugin only needs to save a key-value pair for later lookup, Storages provide a direct mechanism.

UXP offers `Session Storage`, `Local Storage`, and `Secure Storage`. Their APIs are shaped similarly, but the right choice depends on the lifetime and sensitivity required by the use case.

**Session Storage** stores data for the current session only.

- For plugins, UDT-managed sessions run from 'Load' until 'Unload'. Installed plugins instead keep the session from application launch through application quit.
- For scripts, each run counts as its own session.

For longer-lived data, choose either **Local storage** or **Secure storage**. Secure Storage fits sensitive values such as passwords.

Plugins and Scripts

**In plugins**, all three storage types are available.

**In scripts**, only session storage should be used because script lifetime is limited to the current execution. Persistent stores such as local or secure storage can lead to incorrect behavior. Read more about [script lifespan](script-lifespan/reference-index.md).

In both plugin and script cases, treat stored data as potentially removable even though it is technically expected to remain indefinitely. Store values that can be recreated if a user action accidentally deletes them.

```js
// Session storage
const storage = window.sessionStorage;
```

```js
// Local storage
const storage = window.localStorage;
```

```js
// Secure storage
const storage = require("uxp").storage.secureStorage;
```

After the appropriate storage type is selected, set and fetch a key-value pair with these calls.

```js
await storage.setItem("key", "value");
await storage.getItem("key");
```
