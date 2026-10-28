# customDictionaryCreate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Call this method when you want to build a fresh custom dictionary file and register it among the dictionaries that are available.

Note

Execution is restricted to a console or batch event only. See Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name the dictionary shows under in the spelling dialog box. You may also feed it as the input argument to the check, checkText, and checkWord methods. |
| cLanguage | (optional) Supply this to tie the dictionary to a particular language. The spell.languages property yields the roster of languages you can pick from. |
| bShow | (optional) When this is true (the default), the cName value gets prefixed with “User: ” and appears under that combined label throughout every list and menu. For Example, a cName of “Test” surfaces as “User: Test” across all lists and menus. Set bShow to false and the custom dictionary stays out of every list and menu. |

Returns

On success this yields true; otherwise it returns false. A lack of read and write permission on the target directory causes this method to fail.

Example: Launch a PDF in Acrobat and run the script below from the console. It pulls the leading word out of every bookmark. Words already present in a dictionary get dropped, while any unrecognized word is filed into a brand-new dictionary — here named JavaScript”.

```javascript
spell.customDictionaryCreate("JavaScript", "en", true);
function GetJSTerms(bm, nLevel)
{
    var newWord = bm.name.match(re);
    if (newWord) {
    var ckWord = spell.checkWord( newWord[0] );
    if ( ckWord != null )
    {
        var cWord = spell.addWord( newWord[0], "JavaScript");
        if ( cWord )  console.println( newWord[0] );
    }
    }
    if (bm.children != null)
    for (var i = 0; i < bm.children.length; i++)
    GetJSTerms(bm.children[i], nLevel + 1);
}
console.println('\nAdding New words to the "JavaScript" '

     + "dictionary:");
var re = /^\w+/;
GetJSTerms(this.bookmarkRoot, 0);
```
