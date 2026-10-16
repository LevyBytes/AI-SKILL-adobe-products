# addIndex

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | P | Yes | All |

Appends the given index onto the roster of searchable indexes.

Note

Starting with Acrobat 8.1, this method indexes pdx files exclusively.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | A device-independent path to an index file on the user's hard drive. |
| cDIPath | (optional) Whether the index should be selected for searching. |

Returns

An Index object.

Example: Appends Acrobat's standard help index onto the index list:

```javascript
search.addIndex("/c/program files/adobe/Acrobat 5.0/help/exchhelp.pdx", true);
```
