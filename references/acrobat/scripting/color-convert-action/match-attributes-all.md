# matchAttributesAll

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Integer | R/W |

A bitmap of object attributes (flags) earmarked for matching is what the matchAttributesAll property holds. Only when every flag lines up — a full match — does the action fire.

You get at these flags via the colorConvertAction object's constants.objectFlags object, laid out like so:

constants.objectFlags object

| Flag name | Description |
| --- | --- |
| ObjImage | Object is an image. |
| ObjJPEG | Object is a JPEG image. |
| ObjJPEG2000 | Object is a JPEG2000 Image. |
| ObjLossy | Image in a lossy space. |
| ObjNonLossy | Image in a non-lossy space. |
| ObjText | Object is text. |
| ObjLineArt | Object is line-art (fill or stroke). |
| ObjShade | Object is a smooth shade. |
| ObjTransparent | Object is not opaque. |
| ObjOverprinting | Object overprints. |
| ObjOverprintMode | OPM is set to 1. |

Note

Pairing the bitwise operators with the constants.objectFlags bit flags lets you assign matchAttributesAll.

Example: Match images that overprint.

```javascript
var action = this.getColorConvertAction();
action.matchAttributesAll = action.constants.objFlags.ObjImage
               action.constants.objFlags.ObjOverprinting;
```
