# Localization in ScriptUI objects

Screen-visible text in a ScriptUI interface can be localized. Any ScriptUI object can use the global localize function to supply localized display strings in a compact way. The function receives a localization object that contains the localized variants of a string.

For full information about this ExtendScript capability, see Localizing ExtendScript strings.

A localization object is a JavaScript object literal. Its property names are locale names, and each property value is the text for that locale. Locale names are identifiers defined by the ISO 31 standard. In this example, btnText holds text for several locales and supplies the Button text for a control added to the window win:

```javascript
btnText = { en: "Yes", de: "Ja", fr: "Oui" };
b1 = win.add ( "button", undefined, localize( btnText ) );
```

localize selects the string that matches the current locale. It compares the active locale and platform with the object's properties, then returns the matching property value. On a German system, for instance, the de property supplies "Ja".

When a script localizes strings for user-interface elements, it should also use Automatic layout. The layout manager can size each user-interface element from its localized text, letting script-defined dialogs adjust automatically for the different string widths used by different languages.
