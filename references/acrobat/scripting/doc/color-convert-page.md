# colorConvertPage

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 8.0 | D | NO | Acrobat Pro only |

Carries out color conversion on one page of the document.

Parameters

| Parameter | Description |
| --- | --- |
| pageNum | A 0-based index naming which page number of the document is to be converted. |
| actions | An array of colorConvertAction objects driving this color conversion. The colorConvertAction object entry lists its properties. For every object on the page, the actions get tested against that object's attributes and color spaces in whatever order they sit in the actions array, until one matches and gets run. Think of the action list the way most email clients handle filters: each object is weighed against every action's selection criteria, in turn, until a matching action surfaces. That action then runs on the object. Bear in mind that actions don't chain, save for the case of aliased ink definitions. |
| inkActions | An array of colorConvertAction objects spelling out the ink actions for this color conversion. The ink list sets the actions for individual separations, be they in Separation or DeviceN. Among other uses, this lets you set up ink aliases. When a DeviceN holds some inks to alias and some to convert, the color converts through OPP technology, so the converted portion lands as process while the aliased portion stays spot. With ink actions the match fields go ignored. The action list ought to carry an underlying Separation or DeviceN that spells out the behavior; whenever that underlying space draws a Preserve or Decalibrate from the action list, the ink-action-list aliases come into play. |

Returns

A Boolean value; returns true when the page changed, and otherwise returns false.

Example: For an example, see getColorConvertAction.
