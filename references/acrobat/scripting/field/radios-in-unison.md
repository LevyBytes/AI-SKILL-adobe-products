# radiosInUnison

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | F | Boolean | R/W |

At false, radio buttons sharing a name and export value still act mutually exclusively, the way HTML radio buttons do. New radio buttons start out false.

At true, radio buttons sharing a name and export value toggle together as a group, the way they did in Acrobat 4.0.

Fields

radiobutton

### readonly

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | Boolean | R/W |

Whether the field is read-only. Mark a field read-only and the user can view it but has no way to alter it.

Fields

all

Example: Fetch a field and lock it as read-only.

```javascript
var f = this.getField("myTextField");
f.value = "You can't change this message!";
f.readonly = true;
```
