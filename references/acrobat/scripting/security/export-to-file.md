# exportToFile

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Writes a Certificate object out to local disk as a raw certificate file.

Note

The data written has to belong to a valid certificate; data of arbitrary types may not be written. An existing file will not be overwritten by this method.

See also security. importFromFile.

Parameters

| Parameter | Description |
| --- | --- |
| oObject | The Certificate object that is to be exported to disk. |
| cDIPath | The device-independent save path. - The parameter cDIPath must be a safe path (see Safe path) and must end with the extension .cer. |

Returns

The path of the file that was written, if successful.

Example:

```javascript
var outPath = security.exportToFile(oCert, "/c/outCert.cer");
```
