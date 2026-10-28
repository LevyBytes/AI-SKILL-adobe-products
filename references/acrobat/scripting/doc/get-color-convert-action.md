# getColorConvertAction

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only |

Retrieves a colorConvertAction object that mirrors the default color conversion settings.

Look to colorConvertPage as well; two colorConvertAction arrays are what it accepts as parameters.

Returns

A colorConvertAction object

Example: Get a colorConvertAction object, set it up to convert everything to RGB. (Note that we do not convert any alternate spaces, hence the “space type” match is for anything but alternate spaces.)

```javascript
// Get a color convert action
var toRGB = this.getColorConvertAction();

// Set up the action for a conversion to RGB
toRGB.matchAttributesAny = -1;
toRGB.matchSpaceTypeAny = ~toRGB.constants.spaceFlags.AlternateSpace;
toRGB.matchIntent = toRGB.constants.renderingIntents.Any;
toRGB.convertProfile = "Apple RGB";
toRGB.convertIntent = toRGB.constants.renderingIntents.Document;
toRGB.embed = true;
toRGB.preserveBlack = false;
toRGB.useBlackPointCompensation = true;
toRGB.action = toRGB.constants.actions.Convert;

// Convert the first page of the document
var result = this.colorConvertPage(0,[toRGB],[]);
```
