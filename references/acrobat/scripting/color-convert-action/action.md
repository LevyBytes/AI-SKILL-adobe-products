# action

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Integer | R/W |

Sets out what to do once a match lands.

You reach the value of action by way of the colorConvertAction object's constants.actions object, using the constants below:

constants.actions object

| Name | Description |
| --- | --- |
| Preserve | Leave things alone apart from resolving ink aliases. |
| Convert | Convert to target space. |
| Decalibrate | Convert calibrated space to device. |
| DownConvert | Downconvert NChannel to DeviceN. |
