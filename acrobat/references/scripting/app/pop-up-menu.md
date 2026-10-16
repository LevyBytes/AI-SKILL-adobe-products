# popUpMenu

Version (Key): 5.0 | Save-Prefs: No | Security: No | Product: All

Note

The preferred call here is popUpMenuEx rather than this method.

At the spot where the mouse currently sits, this builds a pop-up menu holding whatever items you pass in.

Parameters

Parameter — Description

cItem

(optional) Pass a string and it shows up in the menu as one menu item. Reserve the menu item name "-" to render a separator line across the menu.

Array

(optional) Pass an array and it surfaces as a submenu, with that array's first element acting as the parent menu item. Nesting further submenus inside is allowed.

Returns

Whichever menu item the user picked comes back by name; null comes back when nothing was picked.

Example: Assemble a pop-up menu whose entries are the chapters of a document.

```javascript
var cChoice = app.popUpMenu("Introduction", "-", "Chapter 1",
    [ "Chapter 2", "Chapter 2 Start", "Chapter 2 Middle",
    ["Chapter 2 End", "The End"]]);
app.alert('You chose the "' + cChoice + '" menu item');
```
