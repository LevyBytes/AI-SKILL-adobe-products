# Invoke point product's scripts from html extension

First, declare a callback function in the CEP extension:

```js
function evalScriptCallback(result) {
  // process the result string here.
}
```

Then pass the script to execute, plus the callback function, into `CSInterface.evalScript`:

```js
var script = "app.documents.add"; //Demo script
CSInterface.evalScript(script, evalScriptCallback);
```

Remember that the script passed to evalScript and the jsx file configured in `<ScriptPath>` in the extension manifest run inside the host application's ExtendScript engine, which uses the host application's main thread. CEP events are also dispatched from that same main thread. If a script must interact with CEP events, break the script into smaller calls so CEP events can be scheduled between them.
