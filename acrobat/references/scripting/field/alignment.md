# alignment

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | String | R/W |

Governs how text sits within the text field. Values are

```javascript
left
center
right
```

Fields

text

Example:

```javascript
var f = this.getField("MyText");
f.alignment = "center";
```

borderStyle

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | String | R/W |

A field's border style. The valid border styles are

```javascript
solid
dashed
beveled
inset
underline
```

How the rectangle's border gets drawn is set by the border style. As a static convenience constant, the border object spells out all of a field's border styles, per the table that follows:

| Type | Keyword | Description |
| --- | --- | --- |
| solid | border.s | Runs a solid line right around the rectangle's full edge. |
| beveled | border.b | Like solid, but adds a beveled (pushed-out look) edge set just inside that solid border. |
| dashed | border.d | Runs a dashed line around the rectangle's edge. |
| inset | border.i | Like solid, but adds an inset (pushed-in look) edge set just inside that solid border. |
| underline | border.u | Strokes only the lower stretch of the rectangle's edge. |

Fields

All

Example: here is how a field's border style gets set to solid :

```javascript
var f = this.getField("MyField");
f.borderStyle = border.s; /* border.s evaluates to "solid" */
```
