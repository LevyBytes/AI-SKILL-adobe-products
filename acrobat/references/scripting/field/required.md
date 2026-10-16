# required

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | Boolean | R/W |

Whether the field must hold a value. When true, the field has to be non-null at the moment the user presses a submit button that posts the field's value. A null value triggers a warning to the user and blocks the submit from going through.

Fields

all except button

Example: Turn "myField" into a required field.

```javascript
var f = this.getField("myField");
f.required = true;
```
