# addDictionary

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| deprecated | No | No | P, X |

Note

From Acrobat 6.0 onward this method is dropped and always hands back false. Reach for the customDictionaryOpen method in its place.

Registers a dictionary onto the list of available dictionaries.

Each dictionary is in fact made of four files: DDDxxxxx.hyp, DDDxxxxx.lex, DDDxxxxx.clx, and DDDxxxxx.env. cFile has to give the device-independent path of the .hyp file — for instance, “/c/temp/testdict/TST.hyp “. The Spelling plug-in then hunts for the remaining three files in the parent directory of that TST.hyp file. To bind the four together, every file name must open with the same unique 3 characters and close with the dot-three extensions listed above, Mac OS included.

Parameters

| Parameter | Description |
| --- | --- |
| cFile | The device-independent path leading to the dictionary files. |
| cName | The dictionary name shown in the spelling dialog box. It works as the input parameter handed to the check, checkText, and checkWord methods. |
| bShow | (optional) When true (the default), the cName value gets joined with “User”, and that combined name surfaces across every list and menu. Say cName is “Test”: then “User: Test” lands in all lists and menus. When false, the custom dictionary stays hidden from every list and menu. |

Returns

false
