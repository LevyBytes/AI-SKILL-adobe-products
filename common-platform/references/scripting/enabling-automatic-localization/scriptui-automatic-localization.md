# Localization in ScriptUI objects — Enabling automatic localization

When variable replacement is unnecessary, automatic localization is available. Enable it by setting the global value:

```javascript
$.localization = true
```

After automatic localization is enabled, any property that accepts a localizable string can receive a localization object directly; no localize call is required. Example:

```javascript
var btnText = { en: "Yes", de: "Ja", fr: "Oui" };
b1 = win.add( "button", undefined, btnText );
```

The localize function translates whenever it is called, independent of the $.localize setting.

Example:

```javascript
// Only works if the $.localize = true
var b1 = win.add ( "button", undefined, btnText );
// Always works, regardless of $.localize value
var b1 = win.add ( "button", undefined, localize( btnText ) );
```

Use the localize function when localized strings must include variables.
