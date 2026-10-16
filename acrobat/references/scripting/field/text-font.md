# textFont

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | String | R/W |

The font applied when text is laid out in a text field, combo box, list box, or button. The valid fonts live as properties on the font object. From Acrobat 5.0 on, you can also use arbitrary fonts. See fonts.

Fields

button, combobox, listbox, text

font Object

| Text font | Keyword |
| --- | --- |
| Times-Roman | font.Times |
| Times-Bold | font.TimesB |
| Times-Italic | font.TimesI |
| Times-BoldItalic | font.TimesBI |
| Helvetica | font.Helv |
| Helvetica-Bold | font.HelvB |
| Helvetica-Oblique | font.HelvI |
| Helvetica-BoldOblique | font.HelvBI |
| Courier | font.Cour |
| Courier-Bold | font.CourB |
| Courier-Oblique | font.CourI |
| Courier-BoldOblique | font.CourBI |
| Symbol | font.Symbol |
| ZapfDingbats | font.ZapfD |

Use of arbitrary fonts

From Acrobat 5.0 on, you can lay out a text field, combo box, list box, or button with an arbitrary font by setting textFont to the PDSysFont font name that PDSysFontGetName returns. (See the Acrobat and PDF Library API Reference.)

Here is how to discover a font's PDSysFont font name:

Add a text field to a PDF document. Through the UI, set this field's text font to the font you want.

Bring up the JavaScript Debugger Console and run the script

```javascript
this.getField("Text1").textFont
```

The code above takes the field's name to be Text1.

Whatever string the console prints back is the font name you need to set the text font from script.

Example: Switch the font to Helvetica.

```javascript
var f = this.getField("myField");
f.textFont = font.Helv;
```

Example (Acrobat 5.0)

Switch myField's font to Viva-Regular.

```javascript
var f = this.getField("myField");
f.textFont = "Viva-Regular";
```
