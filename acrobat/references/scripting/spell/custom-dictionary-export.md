# customDictionaryExport

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not allowed in Reader: Only available in Acrobat products |

Writes out to a fresh file a custom dictionary that had been brought up via the spell methods customDictionaryOpen or customDictionaryCreate.

A prompt asks the user for an export directory; there the custom dictionary lands as a .clam file, named from the dictionary name plus the language set in customDictionaryCreate. As an illustration, a dictionary named “JavaScript” created under the “en” language exports to the file name JavaScript-eng.clam.

Dictionaries you export this way remain usable in later customDictionaryOpen calls.

Note

Execution is restricted to a console or batch event only. See Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name the dictionary carried when it was opened or created. |

Returns

On success this yields true; otherwise it returns false. Without adequate file system permission, this method will fail.

Example: Export a custom dictionary so it can be forwarded to other users. (Refer to the example that comes after customDictionaryCreate.)

```javascript
spell.customDictionaryExport("JavaScript");
```
