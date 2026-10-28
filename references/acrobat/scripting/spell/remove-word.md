# removeWord

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0. For Adobe Reader, 7.0 or later. | P | Yes | All |

Takes a word out of a dictionary. User dictionaries built through customDictionaryCreate or customDictionaryExport do not permit word removal.

See also addWord.

Note

Under the hood, the spell object combs the user dictionary and strips out the earlier-added word when it finds it. Failing that, the word goes into the user’s “Not-A-Word” dictionary. The dictionary itself stays untouched.

Since Acrobat 8.1, running this method is confined to the console or a batch process.

Parameters

| Parameter | Description |
| --- | --- |
| cWord | Whichever word you want taken out. |
| cName | (optional) Either the dictionary name or its language code. dictionaryNames or languages will hand back an array of the installed dictionaries. |

Returns

true if successful, false otherwise
