# Invoke point product's scripts from html extension

Start by declaring a callback inside the CEP extension:

```javascript
function evalScriptCallback(result)
{
   // process the result string here.
}
```

Then invoke `CSInterface.evalScript` with the target script and that callback:

```javascript
var csInterface = new CSInterface();
var script = "app.documents.add();";  //Demo script
csInterface.evalScript(script, evalScriptCallback);
```

Remember that the script passed to evalScript and the jsx file configured in `<ScriptPath>` in the extension manifest both execute in the host application's ExtendScript engine, which runs on the host application's main thread. CEP events are dispatched from that same main thread. If a script must interact with CEP events, break the script into smaller pieces and call them separately so the CEP event can be scheduled.
