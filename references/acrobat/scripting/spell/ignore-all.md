# ignoreAll

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0. For Adobe Reader, 7.0 or later. | No | No | All |

Puts a word onto, or takes one off, the Spelling ignored-words list belonging to the current document.

Parameters

| Parameter | Description |
| --- | --- |
| cWord | Which word to put on or take off the ignored list. |
| bIgnore | (optional) When true (the default), the word joins the document ignored word list; when false, it comes off that list. |

Returns

On success this yields true. Should no document be open, this method throws an exception.

Example:

```javascript
var bIgnored = spell.ignoreAll("foo");
if (bIgnored) console.println('"foo" will be ignored');
```
