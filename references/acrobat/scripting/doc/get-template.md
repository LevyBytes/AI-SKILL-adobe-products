# getTemplate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Pulls the template you name back from the document. See also templates, createTemplate, removeTemplate, and the Template object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name of the template to retrieve. |

Returns

The Template object or null if the named template does not exist in the document.

Example: Try to get a particular template and determine if it is hidden or visible.

```javascript
var t = this.getTemplate("myTemplate");
if ( t != null ) console.println( "myTemplate exists and is "
    + eval( '( t.hidden) ? "hidden" : "visible"' ) + ".");
else console.println( "myTemplate is not present!");
```
