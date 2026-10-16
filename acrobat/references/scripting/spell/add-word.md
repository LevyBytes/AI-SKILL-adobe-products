# addWord

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0. For Adobe Reader, 7.0 or later. | P | Yes | All |

Registers a fresh word into a dictionary. See also the removeWord.

Note

From Acrobat 7.0 onward this method runs only inside a console or batch event. See Privileged context.

Behind the scenes, the spell object combs the user “Not-A-Word” dictionary and pulls the word out if it appears there. Failing that, the word joins the user dictionary. The real dictionary stays untouched.

Parameters

| Parameter | Description |
| --- | --- |
| cWord | The fresh word to register. |
| cName | (optional) The dictionary name or language code. Fetch an array of the currently installed dictionaries via dictionaryNames or languages. |

Returns

true on success; otherwise false.
