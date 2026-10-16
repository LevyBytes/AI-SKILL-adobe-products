# BridgeTalk.getTargets()

BridgeTalk.getTargets([version],[locale])

### Description

Lists the locally installed applications that support messaging.

### Parameters

**version (Number)**

Optional. Search for this version number, or pass null to select the best available version (matching, most recent, or running) and include version details.

A major-only value selects the highest available minor release for that major value.

Example with Photoshop CS versions 9, 9.5, and 10 installed

```javascript
BridgeTalk.getTargets( "9" )
// Example result: [photoshop-9.5]
```

With a negative value, the result includes every version no higher than that value's absolute value. Example:

```javascript
BridgeTalk.getTargets( "-9.9" )
// Example result: [photoshop-9.0, photoshop-9.5]
```

**locale (String)**

Optional. Search for this locale, or pass null to include applications from all locales with locale details. If version is supplied and locale is omitted, the specifiers include version details only.


### Returns

Return value is an array of Application specifiers.

- With version supplied, specifiers contain the base name and version details.
- With locale supplied, specifiers contain the full name, including both version and locale details.
- With neither version nor locale supplied, BridgeTalk returns base specifiers without version or locale details while still trying to select the best matching pair. Application specifiers describes the selection rules.

### Example

Example setup: Photoshop CS3 10.0 en_US, Photoshop CS4 11.0 en_us, and Illustrator CS4 14.0 de_de are installed

Results depend on the illustrated host/version or object setup.

```javascript
BridgeTalk.getTargets();
    // Example result:  [photoshop,illustrator]

BridgeTalk.getTargets( "10.0" );
    // Example result:  [photoshop-10.0]

BridgeTalk.getTargets( null );
    // Example result:  [photoshop-11.0, illustrator-14.0]

BridgeTalk.getTargets( null, "en_US" );
    // Example result:  [photoshop-10.0-en_US, photoshop-11.0-en_US]

BridgeTalk.getTargets( null, null );
    // Example result:  [photoshop-10.0-en_US, photoshop-11.0-en_us, illustrator-14.0-de_de]
```
