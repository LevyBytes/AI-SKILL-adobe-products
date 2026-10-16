# Cross-DOM functions — Cross-DOM API reference

Every exported function, including cross-DOM API functions, is called through the exporting application's namespace specifier (see Namespace specifiers). The following call shows the form:

```javascript
//execute an Illustrator script in version 12
illustrator12.executeScript(myAIScript);
```

When a specifier omits version information, it invokes the highest installed version of that application. Sample call:

```javascript
//execute a Photoshop script in the highest available version
photoshop.executeScript (myPSScript)
```
