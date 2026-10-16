# textFont

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | C | string | R/W |

Picks which font lays out the text inside a free text annotation. The recognized fonts are exposed as properties on the font object (compare the textFont property on the Field object).

To apply some other font, set textFont to a string holding that font’s PostScript name when laying out the free text annotation.

Annotations: FreeText

Example: Create a FreeText annotation using the Helvetica font.

```javascript
var annot = this.addAnnot({
    page: 0,
    type: "FreeText",
    textFont: font.Helv, // or, textFont: "Viva-Regular",
    textSize: 10,
    rect: [200, 300, 200+150, 300+3*12], // height for three lines
    width: 1,
    alignment: 1 });
```
