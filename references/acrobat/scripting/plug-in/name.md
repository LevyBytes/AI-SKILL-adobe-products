# name

The name of the plug-in.

| Type | Access |
| --- | --- |
| String | R |

Example: Tally the plug-ins and print each one to the console.

```javascript
// Get an array of PlugIn Objects
var aPlugins = app.plugIns;
// Get the number of plug-ins
var nPlugins = aPlugins.length;
// Enumerate the names of all plug-ins
for (var i = 0; i < nPlugins; i++)
    console.println("Plugin #" + i + " is " + aPlugins[i].name);
```
