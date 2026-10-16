# userName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | String | R/W |

A short descriptive string naming the field. It is meant to surface as tooltip text the moment the cursor moves into a field, and it can double as a friendly label — rather than the raw field name — when error messages get built.

Fields

all

Example: Attach a tooltip to a button field.

```javascript
var f = this.getField("mySubmit");
f.userName = "Press this button to submit your data.";
```

### value

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | various | R/W |

Whatever value the user typed into the field. According to the field's type, it may come back as a String, Date, or Number. Calculated fields are the usual reason to read it.

From Acrobat 6.0 on, if a field carries rich text formatting, writing to this property throws that formatting away and rebuilds the field's value and appearance from the defaultStyle and the plain text. To change the value while preserving formatting, use the richValue property instead.

Note

On signature fields, a value comes back as a non-null string once the field has been signed.

In Acrobat 5.0 and later, when the field is a list box that takes multiple selections (see multipleSelection), you can hand it an array to set the value, and value gives back an array whenever a list box currently has several values picked.

For a list box with multiple selections, working through currentValueIndices is the preferred and most efficient route to read and write this kind of field's value.

See also valueAsString and event. type.

Fields

all except button

Example: Here the calculated field's value becomes the sum of the "Oil" and "Filter" fields, then multiplied by the state sales tax.

```javascript
var oil = this.getField("Oil");
var filter = this.getField("Filter");
event.value = (oil.value + filter.value) * 1.0825;
```
