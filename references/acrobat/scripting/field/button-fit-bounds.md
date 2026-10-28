# buttonFitBounds

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | F | Boolean | R/W |

Set this true and the limit on how far the icon may scale is pinned to the button field's bounds. The other icon-placement properties still come into play for scaling and positioning the icon inside the button face.

Earlier Acrobat releases always factored in the field border's width when scaling an icon to a button face, even with no border color set. Set this property true once a border color has been specified for the button and an exception gets raised.

Fields

button
