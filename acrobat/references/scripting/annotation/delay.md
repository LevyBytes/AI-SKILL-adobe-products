# delay

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | C | boolean | R/W |

Set this to true and edits to the annotation pile up in a queue, firing only once delay returns to false. (It mirrors how the Field object delay property works.)

Annotations: All

Example: Taking annot as an Annotation object, the lines that follow turn its border dashed.

```javascript
annot.delay=true;
annot.style = "D";
annot.dash = [4,3];
annot.delay = false;
```
