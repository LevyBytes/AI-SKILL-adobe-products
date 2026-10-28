# Resource bundle values

CEP 9.0 extension example. Load the matching `CSInterface.js` library first and provide `locale/messages.properties` resources; see [locale selection](locale-selection.md) and [fallback resources](shared-locale-resources.md).

Run this inline while the HTML document is being parsed; `document.write` after loading can replace the document.

```javascript
var cs = new CSInterface();
// Get properties according to current locale of host application.
var resourceBundle = cs.initResourceBundle();
// Use the localized strings.
document.write(resourceBundle.key1);
```
