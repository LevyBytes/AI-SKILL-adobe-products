# customDictionaryOpen

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0. For Adobe Reader, 7.0 or later. | No | No | All |

Registers a custom export dictionary among the dictionaries on hand. See customDictionaryExport.

Note

You can produce a custom dictionary file through the customDictionaryCreate and customDictionaryExport methods.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | Where the custom dictionary file sits, given as a device-independent path. |
| cName | The name the dictionary shows under in the spelling dialog box. You may also feed it as the input argument to the check, checkText, and checkWord methods. |
| bShow | (optional) When this is true, the default, the cName value gets combined with “User: ” and that label appears throughout every list and menu. For example, with a cName of “Test”, add “User: Test” lands in all lists and menus. Set bShow to false and the custom dictionary stays out of every list and menu. |

Returns

On success this yields true; otherwise it returns false. Should the user lack read permission for the file, this method fails.

Example: Picking up where the customDictionaryCreate and customDictionaryExport examples left off, this one registers a custom export dictionary among the available dictionaries.

The user drops the custom export dictionary into whatever folder grants read/write permission. One handy spot is the user dictionaries folder, whose path the app.getPath method can hand back.

```javascript
app.getPath("user", "dictionaries");
```

With the export dictionary in place, you can make the listing happen on its own by dropping in a bit of folder-level JavaScript. Running the following hands back the path to the user JavaScripts folder.

```javascript
app.getPath("user", "javascript");
```

Finally, drop a .js file into that folder and put in the line

```javascript
var myDictionaries = app.getPath("user", "dictionaries");
spell.customDictionaryOpen( myDictionaries, "JavaScripts", true);
```

On the following Acrobat launch, the “JavaScript” dictionary comes up ready to use.
