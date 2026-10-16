# addField

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | All |

Inserts a fresh field (or category) into the collection schema. Where the field is already present, the method raises an exception.

| Parameter | Description |
| --- | --- |
| name | A string giving the field name of the collectionField object slated to be added. |
| text | This field's text as it is shown to the user within the interface. |
| type | (Optional) A string pinning down the kind of data the field carries. The candidate values appear below. S, a string type. A field whose value is a string. D, a date type. A field whose value is a date. N, a numeric type. A field whose value is numeric. These next values mark out the file-related field kinds: F, a field set aside for the file name of a collection member. Desc, a field set aside for a description string of a collection member. Size, a field set aside for the file size of a collection member. ModDate, a field set aside for the modification date of a collection member. CreationDate, a field set aside for the creation date of a collection member. CompressedSize, a field set aside for the compressed file size of a collection member. "S", a string type, is the default. |
| order | (Optional) An integer fixing where the field falls in the collection's on-screen display within the interface. Leave this parameter out and the new field lands at the end of the list. |
| visible | (Optional) A Boolean fixing whether the field shows. true makes the field visible; false keeps it hidden. The default is true. |
| readOnly | (Optional) A Boolean; true marks the field read only. The default is false. A read-only field bars the user from altering its value through the interface. |

Returns

The collectionField object of the newly created field.

Example: add a fresh collection field named "to" by way of object-literal syntax.

```javascript
this.collection.addField({name:"to", order:3, text:"To", type:"S"});

// Identical to the call above, just with positional arguments instead.
this.collection.addField("to", "To", "S", 3);
```
