# Field/Validate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Whatever the field type, a user's interaction with it can yield a new value. The user is said to have committed that new value once they click outside the field, tab to another field, or press the enter key.

For a field, this is the very first event raised after the value is committed, giving a JavaScript its chance to confirm the entry was right. Should the validate event pass, the calculate event comes next.

The target of this event is whichever field's validation script is running. It also defines the change, changeEx, keyDown, modifier, shift, targetName, and value properties.

The rc return code carries no weight for this event. A return code of false marks the field value invalid and leaves the field unchanged.
