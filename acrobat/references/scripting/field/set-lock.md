# setLock

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Determines which fields get locked once a signature is placed in this signature field. Locked fields admit no changes. Clearing the signature releases every field that had been locked back to an unlocked state. To read the current configuration, call getLock.

Note

Running this method is permitted inside batch, console, or application-initialization events. See Privileged context.

A field sitting in a document that has already been signed cannot have this method applied to it.

Parameters

| Parameter | Description |
| --- | --- |
| oLock | A Lock object that carries the lock properties. |

Returns

true if successful, otherwise false or throws an exception.

Lock Object

A generic JavaScript object that holds lock properties. setLock receives it and getLock hands it back for a signature field. Its properties are as follows.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| action | <br>String | R/W | The action's name, independent of language. Values are:<br><br>All: every field throughout the document gets locked.<br><br>Include: locking is limited to the fields named in fields.<br><br>Exclude: everything gets locked apart from the fields named in fields. |
| fields | Array of Strings | R/W | A string array holding the field names. Needed whenever action is set to Include or Exclude. |
