# Localizing ExtendScript strings — Testing localization

ExtendScript keeps the active locale in $.locale. Whenever the host application's locale changes, this variable is refreshed.

For testing localized strings, temporarily assign another locale to $.locale. To return to normal selection, use null, false, 0, or a zero-length string. Example:

```javascript
$.locale = "ru"; // try your Russian messages
$.locale = null; // restore to the locale of the app
```
