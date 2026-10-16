# dirty

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | Not available in Reader | Boolean | R/W |

Tracks whether changes to the document have left it needing a save. Clearing the dirty flag comes in handy after changes that should not trigger a save, such as refreshing a status field.

Note

For a temporary or freshly made document, setting dirty to false changes nothing — the user is still prompted to save changes before the document closes. See requiresFullSave.

Example 1: Resets a form and then sets dirty to false. Once the reset runs, the user may close the document without dismissing a Save dialog box.

```javascript
var f = this.getField("MsgField");
f.value = "You have made too many mistakes, I'm resetting the form. "
    + "Start over, this time follow the directions!";
this.resetForm();
this.dirty = false;
```

Example 2: Writes into a text field to prompt the user to finish the form. The script is written so that filling the field leaves the document's save state untouched.

```javascript
var f = this.getField("MsgField");
var b = this.dirty;
f.value = "Please fill in the fields below.";
this.dirty = b;
```
