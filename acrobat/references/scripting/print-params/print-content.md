# printContent

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Determines what the print job will contain. You assign the printContents property through the constants printContents object. By default this is doc.

constants.printContents Object

| Property | Description |
| --- | --- |
| doc | Prints just the document body, leaving comments out. |
| docAndComments | Prints the document body together with its comments. |
| formFieldsOnly | Prints nothing but the form-field contents. Handy when overprinting onto forms that are already preprinted. |

Example: Set printer to silently print form fields only.

```javascript
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.silent;
pp.printContent = pp.constants.printContents.formFieldsOnly;
this.print(pp);
```
