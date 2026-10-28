# checkWord

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0. For Adobe Reader, 7.0 or later. | No | No | All |

Checks how a given word is spelled.

Parameters

| Parameter | Description |
| --- | --- |
| cWord | The word that gets checked. |
| aDictionary | (optional) Which language codes, or dictionary names, the spell checker should consult while hunting for misspelled words. The checker walks through the dictionaries in whatever order the array gives them. Fetch an array of installed dictionaries via spell.dictionaryNames or spell.languages. When this parameter is left out, the spellDictionaryOrder list is searched first, then the dictionaryOrder list. |

Returns

A null object when the word checks out; otherwise an array of alternative spellings for the unrecognized word.

Example 1: Drop the array of suggested replacement spellings straight into a list box.

```javascript
var word = "subpinna"; /* misspelling of "subpoena" */
var dictionaries = ["English"];
var f = this.getField("Alternatives") // Alternative spellings list box

 f.clearItems();
f.setItems(spell.checkWord(word, dictionaries));
```

Example 2: This script flags every misspelled word in the document with a squiggle annotation, stashing the suggested replacement spellings as that annotation's contents. You can run it from the console, fire it as a mouse-up action inside the document, attach it to a menu, or schedule it as a batch sequence.

```javascript
var ckWord, numWords;
for (var i = 0; i < this.numPages; i++ )
{
    numWords = this.getPageNumWords(i);
    for (var j = 0; j < numWords; j++)
    {
        ckWord = spell.checkWord(this.getPageNthWord(i, j))
        if ( ckWord != null )
        {
            this.addAnnot({
                page: i,
                type: "Squiggly",
                quads: this.getPageNthWordQuads(i, j),
                author: "A. C. Acrobat",
                contents: ckWord.toString()
            });
        }
    }
}
```
