# Invoke point product's scripts from html extension

First, define a callback function in CEP extension:

```javascript
function evalScriptCallback(result)
{
   // process the result string here.
}
```

Then call `CSInterface.evalScript` with the script you want to call and the callback function:

```javascript
var csInterface = new CSInterface();
var script = "app.documents.add();";  //Demo script
csInterface.evalScript(script, evalScriptCallback);
```

Keep in mind that both the script passed to `evalScript` and the jsx file named by `<ScriptPath>` in the extension manifest run inside the host application's ExtendScript engine, and that engine runs on the host application's main thread. CEP events are delivered from that same main thread as well. When a script must coordinate with CEP events, break the work into smaller calls and invoke them separately so event scheduling has room to occur.
