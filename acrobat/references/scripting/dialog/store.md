# store

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Returns the dialog box elements' values packaged as an object literal. Each dialog box item is keyed by an ItemID, a unique 4-character string. Per element, the object literal holds an entry labeled by the ItemID with that element's setting as contents. Where an element carries several values (a list_box or popup, for instance), its value is itself an object literal that pairs the shown entry as label with a numeric value as contents. Anything above 0 in that numeric value marks the item as having been selected; otherwise it was not.

Most often you invoke store from within the commit method (refer to Dialog box handlers) on the object literal that app.execDialog receives, letting you extract the values of various dialog box elements.

Returns
