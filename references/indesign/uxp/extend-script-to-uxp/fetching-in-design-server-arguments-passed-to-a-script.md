# Fetching InDesign Server arguments passed to a script

**Applicable to:** v18.4 Onwards

ExtendScript:

```js
var myArg = app.scriptArgs.getValue("argumentName");
```

UXP:

```js
let arguments = script.args;
```

[Learn More](../passing-arguments.md)
