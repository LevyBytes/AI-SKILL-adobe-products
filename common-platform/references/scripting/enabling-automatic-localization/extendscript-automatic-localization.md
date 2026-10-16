# Localizing ExtendScript strings — Enabling automatic localization

ExtendScript also supports automatic localization. Once that mode is active, a localization object can be assigned directly to any property whose value is a localizable string, without calling localize. For example:

```javascript
msg = { en: "Yes", de: "Ja", fr: "Oui" };
alert (msg);
```

Enable this automatic translation behavior in the script with this statement:

```javascript
$.localize = true;
```

The localize function itself always translates, no matter how $.localize is set; for example:

```javascript
msg = { en: "Yes", de: "Ja", fr: "Oui" };
//Only works if the $.localize=true
alert (msg);
//Always works, regardless of $.localize value
alert ( localize (msg));
```

When localized strings need variables, call the localize function.
