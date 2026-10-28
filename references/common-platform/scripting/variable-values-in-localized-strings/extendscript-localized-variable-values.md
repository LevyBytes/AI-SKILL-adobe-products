# Localizing ExtendScript strings - Variable values in localized strings

Certain localized strings must carry extra values whose placement can differ from one language to another.

Variables can be embedded in localization-object string values by using the %n form. The returned string replaces those placeholders with the results of JavaScript expressions that are passed as extra localize arguments. The %1 placeholder maps to the first extra argument, %2 maps to the second, and the sequence continues.

Because substitution happens after the localized string has been selected, each value lands in the position required by that language. For example:

```javascript
today = {
    en: "Today is %1/%2.",
    de: "Heute ist der %2.%1."
};
d = new Date();
alert (localize (today, d.getMonth()+1, d.getDate()));
```
