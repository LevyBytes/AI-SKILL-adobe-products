# Spell, Tableinfo

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: spell; TableInfo.

## spell

### JavaScript APIs — spell

Through this object, users run spell checks over Comments, Form Fields, and additional spelling domains. Using the spell object first requires that the Acrobat Spelling plug-in and the spelling dictionaries be installed.

Note

Versions of Adobe Reader before 7.0 do not offer the spell object. Under Adobe Reader 7.0 every property and method is reachable except customDictionaryCreate, customDictionaryDelete, and customDictionaryExport.

### spell properties

### available

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0. For Adobe Reader, 7.0 or later.

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

true when the spell object can be used.

Example:

```
console.println("Spell checking available: " + spell.available);
```

### dictionaryNames

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0. For Adobe Reader, 7.0 or later.

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

An array naming the dictionaries on hand. You can hand a subset of it to check, checkText, and checkWord, as well as to spellDictionaryOrder, to pin down which dictionary or dictionaries get used and the sequence in which they are searched.

Run spell.dictionaryNames from the console to see which dictionary names are valid for the user's installation.

### dictionaryOrder

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0. For Adobe Reader, 7.0 or later.

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

The dictionary array's search sequence, as the user set it on the Spelling Preferences panel. The Spelling plug-in checks words against the document's Doc spellDictionaryOrder array first, when one has been set, and then against this dictionary array.

### domainNames

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0. For Adobe Reader, 7.0 or later.

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

The array of spelling domains that other plug-ins have registered with the Spelling plug-in. Passing a subset of it to check narrows down how far the spell check reaches.

Subject to the user's installation, valid domains may take in:

```
Everything
Form Field
All Form Fields
Comment
All Comments
```

### languages

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0. For Adobe Reader, 7.0 or later.

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

This property hands back the array of ISO 639-2/3166-1 language/country codes available. Feed a subset of it into the methods check, checkText, checkWord, and customDictionaryCreate — and likewise into the Doc spellLanguageOrder property — when you want to lock down a particular language or set of languages plus the sequence in which they are searched.

Subject to the user's installation, the valid language/country codes may take in codes drawn from the following list.

Code

Description

ca_ES

Catalan

cs_CZ

Czech

da_DK

Danish

nl_NL

Dutch

en_CA

English-Canadian

en_GB

English-UK

en_US

English-US

fi_FI

Finnish

fr_CA

French-Canadian

fr_FR

French

de_DE

German

de_CH

German-Swiss

el_GR

Greek

hu_HU

Hungarian

it_IT

Italian

nb_NO

Norwegian-Bokmal

nn_NO

Norwegian-Nynorsk

pl_PL

Polish

pt_BR

Portuguese-Brazil

pt_PT

Portuguese

ru_RU

Russian

es_ES

Spanish

sv_SE

Swedish

tr_TR

Turkish

| --- | --- |

Note

Under Acrobat 7.0 this array's entries differ from what Acrobat 6.0 returned. So that no JavaScript code built for Acrobat 6.0 breaks, the Acrobat 6.0 ISO codes are mapped internally onto the new ISO codes when fed in from JavaScript. No such translation happens on the way out.

Example: Print out each language code that is available.

```
console.println( spell.languages.toSource() );
```

### languageOrder

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0. For Adobe Reader, 7.0 or later.

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

The dictionary search sequence given as an array of ISO 639-2, 3166 language codes — the sequence the user set on the Spelling Preferences panel. The Spelling plug-in checks words against the document's Doc spellLanguageOrder array first, when one has been set, and then against this language array.

Example: Print the order in which dictionaries are searched.

```
console.println( spell.languageOrder.toSource() );
```

### spell methods

### addDictionary

Version (Key)

Save-Prefs

Security

Product

deprecated

No

No

P, X

| --- | --- | --- | --- |

Note

From Acrobat 6.0 onward this method is dropped and always hands back false. Reach for the customDictionaryOpen method in its place.

Registers a dictionary onto the list of available dictionaries.

Each dictionary is in fact made of four files: DDDxxxxx.hyp, DDDxxxxx.lex, DDDxxxxx.clx, and DDDxxxxx.env. cFile has to give the device-independent path of the .hyp file — for instance, “/c/temp/testdict/TST.hyp “. The Spelling plug-in then hunts for the remaining three files in the parent directory of that TST.hyp file. To bind the four together, every file name must open with the same unique 3 characters and close with the dot-three extensions listed above, Mac OS included.

Parameters

Parameter

Description

cFile

The device-independent path leading to the dictionary files.

cName

The dictionary name shown in the spelling dialog box. It works as the input parameter handed to the check, checkText, and checkWord methods.

bShow

(optional) When true (the default), the cName value gets joined with “User”, and that combined name surfaces across every list and menu. Say cName is “Test”: then “User: Test” lands in all lists and menus. When false, the custom dictionary stays hidden from every list and menu.

| --- | --- |

Returns

false

### addWord

Version (Key)

Save-Prefs

Security

Product

5.0. For Adobe Reader, 7.0 or later.

P

Yes

All

| --- | --- | --- | --- |

Registers a fresh word into a dictionary. See also the removeWord.

Note

From Acrobat 7.0 onward this method runs only inside a console or batch event. See Privileged context.

Behind the scenes, the spell object combs the user “Not-A-Word” dictionary and pulls the word out if it appears there. Failing that, the word joins the user dictionary. The real dictionary stays untouched.

Parameters

Parameter

Description

cWord

The fresh word to register.

cName

(optional) The dictionary name or language code. Fetch an array of the currently installed dictionaries via dictionaryNames or languages.

| --- | --- |

Returns

true on success; otherwise false.

### check

Version (Key)

Save-Prefs

Security

Product

5.0. For Adobe Reader, 7.0 or later.

No

No

All

| --- | --- | --- | --- |

Brings up the Spelling dialog box, letting the user correct misspellings sitting in annotations, form fields, or any other object.

Parameters

Parameter

Description

aDomain

(optional) An array of Doc for the Spelling plug-in to examine — form fields or comments, for instance. Leave the domain array out and the “EveryThing” domain applies. Fetch an array of the registered domains via the domainNames property.

aDictionary

(optional) The array of dictionary names or language codes for the spell checker to draw on. Their order in the array sets the order the spell checker follows while hunting for misspelled words. Fetch an array of the currently installed dictionaries via spell.dictionaryNames or spell.languages. Omit this parameter and the spellDictionaryOrder list is searched first, then the dictionaryOrder list.

| --- | --- |

Returns

true once the user has changed or skipped every flagged word. Should the user close the dialog box before the check finishes, the method hands back false.

Example: Choose the dictionaries and then run a spell check over the present document's comments and form fields, logging the outcome to the console.

```
var dictionaries = ["de", "French", "en-GB"];
var domains = ["All Form Fields", "All Annotations"];
if (spell.check(domains, dictionaries) )
    console.println("You get an A for spelling.");
else
    console.println("Please spell check this form before you submit.");
```

### checkText

Version (Key)

Save-Prefs

Security

Product

5.0. For Adobe Reader, 7.0 or later.

No

No

All

| --- | --- | --- | --- |

Brings up the spelling dialog box so the user can fix misspelled words inside the supplied string.

Parameters

Parameter

Description

cText

The string that gets checked.

aDictionary

(optional) Which language codes, or dictionary names, the spell checker should consult. Whatever order they hold in the array becomes the order the checker uses while hunting for misspelled words. Fetch an array of installed dictionaries via spell.dictionaryNames or spell.languages. Omit this parameter and the spellDictionaryOrder list is searched first, then the dictionaryOrder list.

| --- | --- |

Returns

The spelling dialog box's outcome, delivered as a new string.

Example: Run a spell check on one specific field and write the corrected spelling back into it.

```
var f = this.getField("Text Box")    // A form text box
f.value = spell.checkText(f.value);  // Let the user pick the dictionary
```

### checkWord

Version (Key)

Save-Prefs

Security

Product

5.0. For Adobe Reader, 7.0 or later.

No

No

All

| --- | --- | --- | --- |

Checks how a given word is spelled.

Parameters

Parameter

Description

cWord

The word that gets checked.

aDictionary

(optional) Which language codes, or dictionary names, the spell checker should consult while hunting for misspelled words. The checker walks through the dictionaries in whatever order the array gives them. Fetch an array of installed dictionaries via spell.dictionaryNames or spell.languages. When this parameter is left out, the spellDictionaryOrder list is searched first, then the dictionaryOrder list.

| --- | --- |

Returns

A null object when the word checks out; otherwise an array of alternative spellings for the unrecognized word.

Example 1: Drop the array of suggested replacement spellings straight into a list box.

```
var word = "subpinna"; /* misspelling of "subpoena" */
var dictionaries = ["English"];
var f = this.getField("Alternatives") // Alternative spellings list box

 f.clearItems();
f.setItems(spell.checkWord(word, dictionaries));
```

Example 2: This script flags every misspelled word in the document with a squiggle annotation, stashing the suggested replacement spellings as that annotation's contents. You can run it from the console, fire it as a mouse-up action inside the document, attach it to a menu, or schedule it as a batch sequence.

```
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

### customDictionaryClose

Version (Key)

Save-Prefs

Security

Product

6.0. For Adobe Reader, 7.0 or later.

No

No

All

| --- | --- | --- | --- |

Shuts a custom dictionary that customDictionaryOpen or customDictionaryCreate had opened.

Parameters

Parameter

Description

cName

Dictionary name supplied when this dictionary was opened or created.

| --- | --- |

Returns

On success this yields true; otherwise it returns false.

### customDictionaryCreate

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Call this method when you want to build a fresh custom dictionary file and register it among the dictionaries that are available.

Note

Execution is restricted to a console or batch event only. See Privileged context.

Parameters

Parameter

Description

cName

The name the dictionary shows under in the spelling dialog box. You may also feed it as the input argument to the check, checkText, and checkWord methods.

cLanguage

(optional) Supply this to tie the dictionary to a particular language. The spell.languages property yields the roster of languages you can pick from.

bShow

(optional) When this is true (the default), the cName value gets prefixed with “User: ” and appears under that combined label throughout every list and menu. For Example, a cName of “Test” surfaces as “User: Test” across all lists and menus. Set bShow to false and the custom dictionary stays out of every list and menu.

| --- | --- |

Returns

On success this yields true; otherwise it returns false. A lack of read and write permission on the target directory causes this method to fail.

Example: Launch a PDF in Acrobat and run the script below from the console. It pulls the leading word out of every bookmark. Words already present in a dictionary get dropped, while any unrecognized word is filed into a brand-new dictionary — here named JavaScript”.

```
spell.customDictionaryCreate("JavaScript", "en", true);
function GetJSTerms(bm, nLevel)
{
    var newWord = bm.name.match(re);
    var ckWord = spell.checkWord( newWord[0] );
    if ( ckWord != null )
    {
        var cWord = spell.addWord( newWord[0], "JavaScript");
        if ( cWord )  console.println( newWord[0] );
    }
    if (bm.children != null)
    for (var i = 0; i < bm.children.length; i++)
    GetJSTerms(bm.children[i], nLevel + 1);
}
console.println("nAdding New words to the "JavaScript" "

     + "dictionary:");
var re = /^w+/;
GetJSTerms(this.bookmarkRoot, 0);
```

### customDictionaryDelete

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Reach for this method to shut down and remove a custom dictionary file previously brought up through customDictionaryOpen or customDictionaryCreate.

Note

Execution is restricted to a console or batch event only. See Privileged context.

Parameters

Parameter

Description

cName

Which dictionary to delete, given by the name assigned when it was opened or created.

| --- | --- |

Returns

On success this yields true; otherwise it returns false. Without adequate file system permission, this method will fail.

Example: Remove a custom dictionary you no longer need.

```
spell.customDictionaryDelete("JavaScript");
```

### customDictionaryExport

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Writes out to a fresh file a custom dictionary that had been brought up via the spell methods customDictionaryOpen or customDictionaryCreate.

A prompt asks the user for an export directory; there the custom dictionary lands as a .clam file, named from the dictionary name plus the language set in customDictionaryCreate. As an illustration, a dictionary named “JavaScript” created under the “en” language exports to the file name JavaScript-eng.clam.

Dictionaries you export this way remain usable in later customDictionaryOpen calls.

Note

Execution is restricted to a console or batch event only. See Privileged context.

Parameters

Parameter

Description

cName

The name the dictionary carried when it was opened or created.

| --- | --- |

Returns

On success this yields true; otherwise it returns false. Without adequate file system permission, this method will fail.

Example: Export a custom dictionary so it can be forwarded to other users. (Refer to the example that comes after customDictionaryCreate.)

```
spell.customDictionaryExport("JavaScript");
```

### customDictionaryOpen

Version (Key)

Save-Prefs

Security

Product

6.0. For Adobe Reader, 7.0 or later.

No

No

All

| --- | --- | --- | --- |

Registers a custom export dictionary among the dictionaries on hand. See customDictionaryExport.

Note

You can produce a custom dictionary file through the customDictionaryCreate and customDictionaryExport methods.

Parameters

Parameter

Description

cDIPath

Where the custom dictionary file sits, given as a device-independent path.

cName

The name the dictionary shows under in the spelling dialog box. You may also feed it as the input argument to the check, checkText, and checkWord methods.

bShow

(optional) When this is true, the default, the cName value gets combined with “User: ” and that label appears throughout every list and menu. For example, with a cName of “Test”, add “User: Test” lands in all lists and menus. Set bShow to false and the custom dictionary stays out of every list and menu.

| --- | --- |

Returns

On success this yields true; otherwise it returns false. Should the user lack read permission for the file, this method fails.

Example: Picking up where the customDictionaryCreate and customDictionaryExport examples left off, this one registers a custom export dictionary among the available dictionaries.

The user drops the custom export dictionary into whatever folder grants read/write permission. One handy spot is the user dictionaries folder, whose path the app.getPath method can hand back.

```
app.getPath("user", "dictionaries");
```

With the export dictionary in place, you can make the listing happen on its own by dropping in a bit of folder-level JavaScript. Running the following hands back the path to the user JavaScripts folder.

```
app.getPath("user", "javascript");
```

Finally, drop a .js file into that folder and put in the line

```
var myDictionaries = app.getPath("user", "dictionaries");
spell.customDictionaryOpen( myDictionaries, "JavaScripts", true);
```

On the following Acrobat launch, the “JavaScript” dictionary comes up ready to use.

### ignoreAll

Version (Key)

Save-Prefs

Security

Product

6.0. For Adobe Reader, 7.0 or later.

No

No

All

| --- | --- | --- | --- |

Puts a word onto, or takes one off, the Spelling ignored-words list belonging to the current document.

Parameters

Parameter

Description

cWord

Which word to put on or take off the ignored list.

bIgnore

(optional) When true (the default), the word joins the document ignored word list; when false, it comes off that list.

| --- | --- |

Returns

On success this yields true. Should no document be open, this method throws an exception.

Example:

```
var bIgnored = spell.ignoreAll("foo");
if (bIgnored) console.println(""foo" will be ignored);
```

### removeDictionary

Version (Key)

Save-Prefs

Security

Product

deprecated

No

No

P, X

| --- | --- | --- | --- |

Note

From Acrobat 6.0 onward, support for this method was dropped. It now always returns false. Turn to the customDictionaryClose method instead.

Takes out a user dictionary that had been put in with addDictionary.

Parameters

Parameter

Description

cName

Which dictionary to remove. It has to match the name supplied to addDictionary.

| --- | --- |

Returns

false

### removeWord

Version (Key)

Save-Prefs

Security

Product

5.0. For Adobe Reader, 7.0 or later.

P

Yes

All

| --- | --- | --- | --- |

Takes a word out of a dictionary. User dictionaries built through customDictionaryCreate or customDictionaryExport do not permit word removal.

See also addWord.

Note

Under the hood, the spell object combs the user dictionary and strips out the earlier-added word when it finds it. Failing that, the word goes into the user’s “Not-A-Word” dictionary. The dictionary itself stays untouched.

Since Acrobat 8.1, running this method is confined to the console or a batch process.

Parameters

Parameter

Description

cWord

Whichever word you want taken out.

cName

(optional) Either the dictionary name or its language code. dictionaryNames or languages will hand back an array of the installed dictionaries.

| --- | --- |

Returns

true if successful, false otherwise

### userWords

Version (Key)

Save-Prefs

Security

Product

5.0. For Adobe Reader, 7.0 or later.

No

No

All

| --- | --- | --- | --- |

Hands back the array of words a user has either added to or pulled from a dictionary. See also addWord and checkWord.

Parameters

Parameter

Description

cName

(optional) Either the dictionary name or its language code. dictionaryNames or languages will hand back an array of the installed dictionaries. Leave cName out and the default dictionary applies — that being whichever dictionary tops the list in the Spelling preferences dialog box.

bAdded

(optional) Pass true to get back the user’s array of added words, or false for the array of removed words. true is the default.

| --- | --- |

Returns

Whichever array the user built — the added words, or the removed ones.

Example: List the words added to the “JavaScript” dictionary. (Refer to the example that comes after the customDictionaryCreate description.)

```
var aUserWords = spell.userWords({cName: "JavaScript"});
aUserWords.toSource();
```

## TableInfo

### JavaScript APIs — TableInfo

Holding nothing but the essentials about a table, this generic JavaScript object comes back from connection.getTableList and carries the properties below.

Property

Type

Access

Description

name

String

R

A table’s identifying name. SQL statements can use this string to point at the table the TableInfo object goes with.

description

String

R

A string carrying database-dependent details about the table.

| --- | --- | --- | --- |
