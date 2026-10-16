# customDictionaryDelete

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Reach for this method to shut down and remove a custom dictionary file previously brought up through customDictionaryOpen or customDictionaryCreate.

Note

Execution is restricted to a console or batch event only. See Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which dictionary to delete, given by the name assigned when it was opened or created. |

Returns

On success this yields true; otherwise it returns false. Without adequate file system permission, this method will fail.

Example: Remove a custom dictionary you no longer need.

```javascript
spell.customDictionaryDelete("JavaScript");
```
