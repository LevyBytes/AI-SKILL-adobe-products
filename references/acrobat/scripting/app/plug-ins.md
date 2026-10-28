# plugIns

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array | R |

An array of PlugIn objects for the plug-ins presently loaded in the viewer.

Example:

```javascript
// Get array of PlugIn objects
var aPlugins = app.plugIns;
// Get number of plug-ins
var nPlugins = aPlugins.length;
// Enumerate names of all plug-ins
for ( var i = 0; i < nPlugins; i++)
    console.println("Plugin #"+i+" is " + aPlugins[i].name);
```
