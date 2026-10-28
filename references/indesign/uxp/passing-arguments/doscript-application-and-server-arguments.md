# Passing Arguments to InDesign Server/ InDesign App Via doScript()

The `doScript` API lets one UXP script pass arguments to another.

Pass an array variable as the third parameter in the doScript API call. For this case, unlike InDesign Server argument passing, `script.args` reads the values sent to the external script. Example:

```js
//caller.idjs
const myInDesign = require("indesign");
const app = myInDesign.app;
const argsArray = [100, 200];
app.doScript("PATH_TO_CALLED/called.idjs", myInDesign.ScriptLanguage.UXPSCRIPT, argsArray);
```

```js
//called.idjs
const script = require("uxp").script;
console.log(script.args);
```

```text
[console] 100,200
```
