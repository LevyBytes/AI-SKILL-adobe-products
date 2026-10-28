# spellDictionaryOrder

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array | R/W |

An array laying out the order in which dictionaries are searched for this document. A designer building a medical form, for example, might want a medical dictionary consulted ahead of the user's own preferred sequence.

The Spelling plug-in begins by scanning this array for words, and only then moves on to whichever dictionaries the user picked on the Spelling Preference panel. You can read the user's chosen order from spell.dictionaryOrder, while spell.dictionaryNames gives you an array of every dictionary currently installed.

Note

On a write, supplying any array element that is not a recognized dictionary name throws an exception.
