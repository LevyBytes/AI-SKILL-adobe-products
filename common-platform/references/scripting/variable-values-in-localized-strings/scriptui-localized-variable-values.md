# Localization in ScriptUI objects — Variable values in localized strings

localize can substitute variable values into localized strings. Each variable placeholder receives the evaluated value of an extra argument.

Example:

```javascript
var today = {
    en: "Today is %1/%2.",
    de: "Heute ist der %2.%1."
};
var date = new Date();
Window.alert( localize( today, date.getMonth() + 1, date.getDate() ) );
```
