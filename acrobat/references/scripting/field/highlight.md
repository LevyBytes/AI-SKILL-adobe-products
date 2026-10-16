# highlight

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | String | R/W |

Sets the visual response a button gives when clicked. There are four supported highlight modes:

none: Clicking produces no visible feedback.

invert: The area inside the button's rectangle flips briefly.

push: If a down face exists for the button, it shows for a moment.

outline: The rectangle's border flips briefly.

Each mode maps to a state on the convenience highlight object, like so:

| Type | Keyword |
| --- | --- |
| none | highlight.n |
| invert | highlight.i |
| push | highlight.p |
| outline | highlight.o |

Fields

button

Example: Give a button field the "invert" highlight.

```javascript
var f = this.getField("myButton");
f.highlight = highlight.i;
```

lineWidth

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | D | No | F | Integer | R/W |

Sets how thick the line is when the outline of a field's rectangle gets stroked. A transparent stroke color makes this setting irrelevant, except where a beveled border is involved. The accepted values are:

0: none

1: thin

2: medium

3: thick

Earlier editions of this spec called this property borderWidth. That older name remains valid for backward compatibility, though using it is discouraged.

By default lineWidth is 1 (thin). You may supply any integer, but going past 5 tends to warp how the field looks.

Fields

all

Example: Bump the Text Box border up to medium thickness.

```javascript
f.lineWidth = 2
```
