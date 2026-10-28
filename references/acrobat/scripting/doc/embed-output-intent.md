# embedOutputIntent

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 8.0 | D | No | Acrobat Pro only |

Stores a color profile inside the file to serve as a PDF/X Output Intent (consult the PDF Reference ).

Parameters

| Parameter | Description |
| --- | --- |
| outputIntentColorSpace | A string holding the description of the profile that the output intent should use. The app object’s printColorProfiles property supplies the roster of color profiles you can draw from. |

Example: Embed a color profile.

```javascript
this.embedOutputIntent("U.S. Sheetfed Coated v2")
```
