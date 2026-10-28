# importFromFile

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Pulls in a raw data file and yields the contents as an object whose type comes from cType. Whatever file you bring in has to be a valid certificate. Compare also security. exportToFile

Parameters

| Parameter | Description |
| --- | --- |
| cType | Names the kind of object this method hands back. The lone type that works is "Certificate". |
| cDIPath | (optional) With bUI set to false, you must give this — it is the device-independent path to the file being opened. With bUI set to true, it instead seeds the path shown in the open dialog box. |
| bUI | (optional) Set true to have the user pick the file to bring in. The fallback is false. |
| cMsg | (optional) With bUI true, the caption shown on the open dialog box. Leave cMsg out and the standard caption applies. |

Returns

A Certificate object.

Example:

```javascript
var oMyCert = security.importFromFile("Certificate", "/c/myCert.cer");
```
