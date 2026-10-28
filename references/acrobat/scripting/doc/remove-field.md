# removeField

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | F |

Strips the named field out of the document. Where that field shows on more than one page, every representation goes away.

Note

(Acrobat 6.0): From Acrobat 6.0 on, removeField works inside Adobe Reader for documents that carry forms usage rights.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which field, by name, gets stripped. |

Example:

```javascript
this.removeField("myBadField");
```
