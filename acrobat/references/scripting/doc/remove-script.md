# removeScript

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | D | No | Not available in Reader |

Deletes a document-level JavaScript, provided the caller holds permission to remove scripts.

Parameters

| Parameter | Description |
| --- | --- |
| cName | A string giving the name of the script you want deleted. |

Returns

On success the result is undefined. Should the named script not exist, the call raises an exception.

Example: register a document-level script and then take it back out.

```javascript
this.addScript("myScript", "app.alert('A.C. Robat welcomes you!')");
```

Now remove this script:

```javascript
this.removeScript("myScript");
```

removeTemplate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Deletes the template of the given name from the document.

See also templates, createTemplate, getTemplate, and the Template object.

Note

Execution is restricted to a batch or console event only. See Privileged context. The event object covers how JavaScript events work.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name identifying the template to delete. |

A template carries its name as a property of the Template object. That name gets assigned at creation time, whether through the Acrobat UI or by way of the getTemplate JavaScript method.
