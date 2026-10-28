# query

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Looks through the named document or index for the named text. Properties carried on the search object — matchCase, matchWholeWord, stem, and so on — can shape the outcome.

Note

Starting with Acrobat 8.1, when the cDIPath parameter is supplied, this method may run only from the console or within a batch process.

Parameters

| Parameter | Description |
| --- | --- |
| cQuery | The text for which to search. |
| cWhere | (optional) Specifies where the text should be searched. Values are: ActiveDoc Folder Index ActiveIndexes The default is ActiveIndexes. |
| cDIPath | (optional) A device-independent path to a folder or Catalog index on the user's computer. When cWhere is Folder or Index, this parameter is required. |

Examples

Search for the word "Acrobat".

| cWhere | Query |
| --- | --- |
| ActiveIndexes | search.query("Acrobat"); // "ActiveIndexes" is the default. search.query("Acrobat", "ActiveIndexes"); |
| ActiveDoc | search.query("Acrobat", "ActiveDoc"); |
| Folder | search.query("Acrobat","Folder","/c/myDocuments"); search.query("Acrobat","Folder",app.getPath("user","documents")); search.query("Acrobat", "Folder", "//myserver/myDocuments"); |
| Index | search.query("Acrobat", "Index", "/c/Myfiles/public/index.pdx"); |
