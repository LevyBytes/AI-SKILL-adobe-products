# numFields

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | No | No | All | Integer | R |

How many fields the document contains in total. See also getNthFieldName.

Example 1:

```javascript
console.println("There are " + this.numFields + " in this document");
```

Example 2: Combining the numFields property with the getNthFieldName method, this script iterates over every field the document holds. Each button field is reworked to carry a beveled look (you could apply other tweaks to the document's buttons here too).

```javascript
for ( var i = 0; i < this.numFields; i++) {
    var fname = this.getNthFieldName(i);
    if ( fname.type = "button" ) f.borderStyle = border.b;
}
```
