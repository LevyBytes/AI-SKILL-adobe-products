# check

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0. For Adobe Reader, 7.0 or later. | No | No | All |

Brings up the Spelling dialog box, letting the user correct misspellings sitting in annotations, form fields, or any other object.

Parameters

| Parameter | Description |
| --- | --- |
| aDomain | (optional) An array of Doc for the Spelling plug-in to examine — form fields or comments, for instance. Leave the domain array out and the “EveryThing” domain applies. Fetch an array of the registered domains via the domainNames property. |
| aDictionary | (optional) The array of dictionary names or language codes for the spell checker to draw on. Their order in the array sets the order the spell checker follows while hunting for misspelled words. Fetch an array of the currently installed dictionaries via spell.dictionaryNames or spell.languages. Omit this parameter and the spellDictionaryOrder list is searched first, then the dictionaryOrder list. |

Returns

true once the user has changed or skipped every flagged word. Should the user close the dialog box before the check finishes, the method hands back false.

Example: Choose the dictionaries and then run a spell check over the present document's comments and form fields, logging the outcome to the console.

```javascript
var dictionaries = ["de", "French", "en-GB"];
var domains = ["All Form Fields", "All Annotations"];
if (spell.check(domains, dictionaries) )
    console.println("You get an A for spelling.");
else
    console.println("Please spell check this form before you submit.");
```
