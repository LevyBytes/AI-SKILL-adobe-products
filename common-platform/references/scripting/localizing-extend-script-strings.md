# Localizing ExtendScript strings

Localization adapts an interface through translation and related changes so that it appears designed for a target language. In ExtendScript, scripts can localize the strings used by their user interfaces. At startup, the application selects the language from the operating system's current locale.

For text that appears on screen, localizing the displayed string is often useful. Any string can be localized explicitly with the Global localize function, which receives a localization object containing the string's localized versions.

A localization object is a JavaScript object literal. Its property names are locale names, and its property values are the translated text strings. A locale name uses a standard language code and can also include a region identifier. For the exact syntax, see Locale names.

In this example, the msg object stores text for two locales. That object provides the alert dialog text:

```javascript
msg = { en: "Hello, world", de: "Hallo Welt" };
alert (msg);
```

ExtendScript compares the active locale and platform with the object's properties, then selects the corresponding string. On a German system, for example, de: "Hallo Welt" becomes the string "Hallo Welt".
