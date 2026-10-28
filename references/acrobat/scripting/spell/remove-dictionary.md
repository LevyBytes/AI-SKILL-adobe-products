# removeDictionary

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| deprecated | No | No | P, X |

Note

From Acrobat 6.0 onward, support for this method was dropped. It now always returns false. Turn to the customDictionaryClose method instead.

Takes out a user dictionary that had been put in with addDictionary.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which dictionary to remove. It has to match the name supplied to addDictionary. |

Returns

false
