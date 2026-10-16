# getPath

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | All |

Hands back the path to folders that installation created. Application folders and user folders are treated as separate categories. Should the path be missing, the method raises a GeneralError exception (see Error object).

Note

(Acrobat 7.0) Only during a batch or console event can this method run (see the event object). See also Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cCategory | (optional) The category of folder sought. Valid values are app (the default) and user. |
| cFolder | (optional) A platform-independent string that indicates the folder. Valid values are root, eBooks, preferences, sequences, documents, javascript, stamps, dictionaries, plugIns spPlugIns,help, temp, messages, resource, update The default is root. |

Returns

The path to the folder determined by the parameters. An exception is thrown if the folder does not exist.

Example 1: Work out where the user's Sequences folder path points.

```javascript

try {
var userBatch = app.getPath("user","sequences");
} catch(e) {
var userBatch = "User has not defined any custom batch sequences";
}
console.println(userBatch);
```

Example 2: Under Windows, build a document and save it into the My Documents folder.

```javascript

var myDoc = app.newDoc();
var myPath = app.getPath("user", "documents") + "/myDoc.pdf"
myDoc.saveAs(myPath);
myDoc.closeDoc();
```
