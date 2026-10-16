# resetForm

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | D | No | F |

Returns the document's fields to their starting state. A reset field reverts to whatever its default is — for text fields that default is normally empty.

Note

Should the form hold signature fields, you'll need signature rights to run this method inside Adobe Reader.

Parameters

| Parameter | Description |
| --- | --- |
| aFields | (optional) An array naming which fields to reset. Leave it out or pass null and the whole form's fields reset. Non-terminal fields are allowed in the array. |

Example 1: pick the fields to reset, then reset them.

```javascript
var fields = new Array();
fields[0] = "P1.OrderForm.Description";
fields[1] = "P1.OrderForm.Qty";
this.resetForm(fields);
```

The same fields can be reset using only one line of code:

```javascript
this.resetForm(["P1.OrderForm.Description","P1.OrderForm.Qty"]);
```

Example 2: here's how to reset an entire subtree. Hand "name" into the fields array, say, and every name field below it — name.first and name.last among them — gets reset.

```javascript
this.resetForm(["name"]);
```
