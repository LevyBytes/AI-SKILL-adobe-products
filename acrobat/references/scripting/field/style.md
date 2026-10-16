# style

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | String | R/W |

Lets the user pick the glyph style for a check box or radio button — the glyph style being the graphic that marks the item as selected.

Keywords pair with the style values as shown here.

| Style | Keyword |
| --- | --- |
| check | style.ch |
| cross | style.cr |
| diamond | style.di |
| circle | style.ci |
| star | style.st |
| square | style.sq |

Fields

checkbox, radiobutton

Example: Here the glyph style is set to circle.

```javascript
var f = this.getField("myCheckbox");
f.style = style.ci;
```
