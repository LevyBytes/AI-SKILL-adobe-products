# checkText

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0. For Adobe Reader, 7.0 or later. | No | No | All |

Brings up the spelling dialog box so the user can fix misspelled words inside the supplied string.

Parameters

| Parameter | Description |
| --- | --- |
| cText | The string that gets checked. |
| aDictionary | (optional) Which language codes, or dictionary names, the spell checker should consult. Whatever order they hold in the array becomes the order the checker uses while hunting for misspelled words. Fetch an array of installed dictionaries via spell.dictionaryNames or spell.languages. Omit this parameter and the spellDictionaryOrder list is searched first, then the dictionaryOrder list. |

Returns

The spelling dialog box's outcome, delivered as a new string.

Example: Run a spell check on one specific field and write the corrected spelling back into it.

```javascript
var f = this.getField("Text Box")    // A form text box
f.value = spell.checkText(f.value);  // Let the user pick the dictionary
```
