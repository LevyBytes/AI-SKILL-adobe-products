# text

Return type: String

Fetches the text of whichever dropdown menu item is selected at the current composition time.

Syntax: dropdownProperty.text

As your expression is evaluated, After Effects grabs and returns the text string belonging to the dropdown menu item currently selected. Should that selection be animated (carry keyframes), text follows along and returns the right text for each frame as the selection shifts.

For shared projects or Motion Graphics Templates, our advice is to keep driving expression logic off the dropdown menu index rather than off matching strings, because indexes hold up better. Some dropdown text shifts with the application language, and that breaks expressions.
