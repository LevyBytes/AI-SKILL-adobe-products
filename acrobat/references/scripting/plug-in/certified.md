# certified

A value of true marks the plug-in as carrying Adobe certification. Such certified plug-ins have been put through rigorous testing so that no lapses in application or document security arise. A user may set the viewer up to load nothing but certified plug-ins.

| Type | Access |
| --- | --- |
| Boolean | R |

Example: Count how many plug-ins lack certification.

```javascript
var j=0; aPlugins = app.plugIns;
for (var i=0; i < aPlugins.length; i++)
    if (!aPlugins[i].certified) j++;
console.println("Report: There are "+j+" uncertified plug-ins loaded.");
```
