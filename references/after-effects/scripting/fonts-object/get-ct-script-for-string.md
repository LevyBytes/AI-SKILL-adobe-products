# FontsObject.getCTScriptForString()

app.fonts.getCTScriptForString(charString, preferredCTScript)

Note

This functionality was added in After Effects 25.1

### Description

For the supplied characters, this gives back an array of generic objects, each reporting how many characters fall in the range and the CTScript enum tied to them. A complete list of CTScript enumerated values lives under FontObject.writingScripts.

When a character could belong to two or more CTScript values, the value handed in as the second argument, preferredCTScript, settles the tie.

```javascript
var scriptsV = app.fonts.getCTScriptForString("ABヂ", CTScript.CT_ROMAN_SCRIPT);
var str = "[0] chars:" + scriptsV[0].chars +   // 2
            " ctScript:" + getEnumAsString(scriptsV[0].ctScript) +
            "\n[1] chars:" + scriptsV[1].chars + // 1
            " ctScript:" + getEnumAsString(scriptsV[1].ctScript);
alert(str);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| charString | String | Characters to check. If empty, will return an empty array. |
| preferredCTScript | CTScript enum | CT Script to prefer |

### Returns

Array of generic objects;

- Key chars will be set to number of characters the in the range.
- Key ctScript will be set to the CTScript which applies to the characters in the range.

—
