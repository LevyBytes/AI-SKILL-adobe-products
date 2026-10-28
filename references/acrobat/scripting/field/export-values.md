# exportValues

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D |  | F | Array | R/W |

A string array carrying the field's export values. It holds as many elements as the field has annotations, and those elements map to the annotations in creation order (tab-order has no effect).

On radio button fields this property is what makes the field operate properly as a group: whichever button is checked at the moment lends its value to the field overall.

On check box fields, absent a specified export value, "Yes" (or its localized equivalent) is the default while the field is checked. "Off" is the default while it is unchecked — the same as a radio button field with none of its buttons checked.

Fields

checkbox, radiobutton

Example: build a radio button field and assign its export values.

```javascript
var d = 40;
var f = this.addField("myRadio","radiobutton",0,  [200, 510, 210, 500]);
this.addField("myRadio","radiobutton",0,  [200+d, 510-d, 210+d, 500-d]);
this.addField("myRadio","radiobutton",0,  [200, 510-2*d, 210, 500-2*d]);
this.addField("myRadio","radiobutton",0,  [200-d, 510-d, 210-d, 500-d]);
f.strokeColor = color.black;
// Now give each radio field an export value
f.exportValues = ["North", "East", "South", "West"];
```
