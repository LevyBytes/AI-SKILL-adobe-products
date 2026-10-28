# importSettings

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.1 | No | Yes | Not available in Reader |

Offers a slice of what Preferences > Security panel > Security Settings > Import does, except the settings arrive from an embedded file. Through it, digital IDs can be brought in from an attached acrobat security settings file when a button in the host document is clicked. Bear in mind that this method moves digital IDs only; trust settings and every other security setting stay untouched. The triggers it accepts are limited to a console, batch, or field mouse up event.

Build the file you plan to embed by exporting the settings through Preferences > Security panel > Security Settings > Export. Take the case below: with the script wired to a button click event and the document that this refers to put together properly, clicking the button pops up a basic import dialog for digital IDs.

Note

For a security settings file to count as valid, it has to be certified.

Parameters

| Parameter | Description |
| --- | --- |
| oDocObj | Stands in for the document, and inside a running script this is normally just this. |
| cFilename | Names the embedded file within oDocObj that holds a security settings file. There is a working cap on how long the file name may be; overshoot it and the import does not go through. |
| bSimplifiedUI | Pass true to favor a simplified user interface where feasible, or false to skip it. With digital IDs, that pared-down interface shows up only when exactly one ID is being brought in. Bring in more than one, or set bSimplifiedUI false, and you instead get a list of IDs. |

Returns

A count of the digital IDs that were installed, or -1 when the operation is cancelled.

Example:

```javascript
security.importSettings(this, "ids.acrobatsecuritysettings", true);
```
