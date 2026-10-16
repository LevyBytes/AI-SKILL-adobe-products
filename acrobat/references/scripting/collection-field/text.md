# text

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | All | String | R/W |

Whatever label the field displays in the interface is held by text.

### type

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | All | String | R/W |

A text string naming the kind of data the field holds. The accepted values are:

S, marks the field's value as a string.

D, marks the field's value as a date.

N, marks the field's value as a number.

F, means the value is the file name of one collection member.

Desc, means the value is a description string for a collection member.

Size, means the value is the file size of a collection member.

ModDate, means the value is the modification date of a collection member.

CreationDate, means the value is the creation date of a collection member.

CompressedSize, means the value is the compressed file size of a collection member.

Once a field exists, this property is fixed and cannot be altered. You only get to set the type at the moment the field is created through the addField method.

Example: Tweak and then inspect the properties on the user-defined "from" field.

```javascript
var f = this.collection.getField("from");
f.visible = true;
f.order = 1;
f.text = "From";
console.println("Field name: " + f.name);
console.println("Field type: " + f.type);
```
