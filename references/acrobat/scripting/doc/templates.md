# templates

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array | R |

An array holding each Template object found in the document. See also createTemplate, getTemplate, and removeTemplate.

Example: Print out all of the document's templates.

```javascript
var t = this.templates
for ( var i=0; i < t.length; i++)
{
    var state = (t[i].hidden) ? "hidden" : "visible"
    console.println('Template: "' + t[i].name
        + '", current state: ' + state);
}
```
