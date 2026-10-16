# keyDown

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Boolean | R |

Surfaces solely throughout a keystroke event on a list box and combo box. For a list box, or a combo box's pop-up portion, the value reads true when the arrow keys drove a selection and false if not.

On a combo box, keyDown surfaces only when its pop-up portion comes into play — that is, a selection is being picked from the pop-up by mouse or keyboard. Should the combo be editable and the user type an entry, the Field/Keystroke event acts the way it would for a text field (so no changeEx or keyDown event properties exist).
