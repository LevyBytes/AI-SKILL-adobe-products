# BridgeTalk.getSpecifier()

BridgeTalk.getSpecifier(appName[, version][, locale])

### Description

Gets a complete application specifier.

### Parameters

**appName (String)**

Application base name to locate.

**version (Number)**

Optional. Search for this version number.

If 0 or omitted, the most recent version is returned.

If negative, the highest version no greater than the absolute value is returned.

When a major version is given, BridgeTalk selects the highest minor release matching that major value. For example, with Photoshop CS versions 9, 9.1, and 10 installed:

```javascript
BridgeTalk.getSpecifier( "photoshop", "9" )
// Example result: "photoshop-9.1"
```

**locale (String)**

Optional. Locale to search for. When omitted and multiple language versions exist, the current locale's version is preferred.


### Returns

Application specifier for a locally installed messaging-enabled application version; null is returned when the requested version is absent.

### Example

Assume this installed set: Photoshop CS4 11.0 en_us, Photoshop CS2 8.5 de_de, Photoshop CS2 9.0 de_de, and Photoshop CS2 9.5 de_de. Current locale: en_US

Results depend on the illustrated host/version or object setup.

```javascript
BridgeTalk.getSpecifier ("photoshop");
    // Example result:  "photoshop-11.0-en_us"

BridgeTalk.getSpecifier ("photoshop", 0, "en_us");
    // Example result:  "photoshop-11.0-en_us"

BridgeTalk.getSpecifier ("photoshop", 0, "de_de");
    // Example result:  "photoshop-9.5-de_de"

BridgeTalk.getSpecifier ("photoshop", -9.2, "de_de");
    // Example result:  "photoshop-9.0-de_de"

BridgeTalk.getSpecifier ("photoshop", 8);
    // Example result:  "photoshop-8.5-de_de"
```
