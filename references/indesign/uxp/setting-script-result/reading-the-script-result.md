# Reading the script result

The snippets below show how another script can read a script result.

```js
// caller.idjs
const myInDesign = require("indesign");
const app = myInDesign.app;
const resultOfCalledScript = app.doScript(
  "PATH_TO_CALLED.IDJS/called.idjs",
  myInDesign.ScriptLanguage.UXPSCRIPT,
);
console.log(resultOfCalledScript);
```

Scripts return values by assigning the needed value with the `setResult()` API. The caller that launched the script receives that result. If the script runs from InDesign's scripts panel, the result is ignored.
For scripts launched in InDesign Server, the result is sent back to the client that requested execution. When another script forks this script through the `app.doScript()` API, the value set by the 'called' script is returned to the 'caller' script, as shown above.

After this script runs on InDesign Server, the client side shows the returned result.

```text
Script result (std__string): Hello World!
```
