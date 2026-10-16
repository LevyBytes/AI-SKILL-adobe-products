# items

Return type: Array of Strings

Fetches an array holding every text string in the dropdown menu, kept in order.

Syntax: dropdownProperty.items

What comes back is an ordinary JavaScript array: index 0 holds the first menu item's text, index 1 holds the second menu item's text, and onward from there.

Note

Whereas dropdown menu values count from 1, JavaScript array indexes count from 0. A dropdown menu whose value is 3 therefore exposes its text at items[2]. Each separator item "(-" — the divider line shown in the dropdown menu — lands in the array as the string "(-".
