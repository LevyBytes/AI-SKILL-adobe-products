# Localized string parameters

CEP 9.0 extension example. Load the matching `CSInterface.js` library first and provide `locale/messages.properties` resources; see [locale selection](locale-selection.md) and [fallback resources](shared-locale-resources.md).

Use parameters `($1, $2, ...)` inside localized strings.

```javascript
var localize = function(key) {
    var cs = new CSInterface();
    var resourceBundle = cs.initResourceBundle();
    var localizedStr = resourceBundle[key];
    var args = arguments;
    if (!localizedStr) return '';
    return localizedStr.replace(/\$(\d+)/g, function(token, number) {
        var index = Number(number);
        return index > 0 && index < args.length ? String(args[index]) : token;
    });
};
```

Every occurrence of `$1`, `$2`, and later numbered parameters is replaced when that argument exists. Missing arguments remain as tokens; a missing resource key returns an empty string.
