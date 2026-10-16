# userWords

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0. For Adobe Reader, 7.0 or later. | No | No | All |

Hands back the array of words a user has either added to or pulled from a dictionary. See also addWord and checkWord.

Parameters

| Parameter | Description |
| --- | --- |
| cName | (optional) Either the dictionary name or its language code. dictionaryNames or languages will hand back an array of the installed dictionaries. Leave cName out and the default dictionary applies — that being whichever dictionary tops the list in the Spelling preferences dialog box. |
| bAdded | (optional) Pass true to get back the user’s array of added words, or false for the array of removed words. true is the default. |

Returns

Whichever array the user built — the added words, or the removed ones.

Example: List the words added to the “JavaScript” dictionary. (Refer to the example that comes after the customDictionaryCreate description.)

```javascript
var aUserWords = spell.userWords({cName: "JavaScript"});
aUserWords.toSource();
```
