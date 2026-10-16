# transitions

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array | R |

A list of strings naming every transition the viewer implements. Setting defaultTransition to an empty string is the same as choosing No Transition:

```javascript
app.fs.defaultTransition = "";
```

Example: Print out the transition names the viewer currently supports.

```javascript
console.println("[" + app.fs.transitions + "]");
```
