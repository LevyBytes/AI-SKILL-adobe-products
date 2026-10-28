# Invoke point product's scripts from html extension

Begin by defining a callback function in the CEP extension:

```javascript
function evalScriptCallback(result)
{
   // process the result string here.
}
```

Next, pass both the target script and the callback function to `CSInterface.evalScript`:

```javascript
var csInterface = new CSInterface();
var script = "app.documents.add();";  //Demo script
csInterface.evalScript(script, evalScriptCallback);
```

The script supplied to evalScript and the jsx file configured in `<ScriptPath>` in the extension manifest both run in the host application's ExtendScript engine, on the host application's main thread. CEP events are dispatched from that same main thread. If the script must interact with CEP events, split the script into smaller pieces and call them separately so CEP events can be scheduled.
