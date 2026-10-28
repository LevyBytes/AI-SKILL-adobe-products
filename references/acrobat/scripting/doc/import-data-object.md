# importDataObject

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | All |

Pulls an external file into the document and ties the name you give to the data object. Later on, that data object can be extracted or worked on.

Kindred objects, properties, and methods include dataObjects, getDataObject, openDataObject, createDataObject, exportDataObject, importDataObject, getDataObjectContents, and setDataObjectContents, plus the data object.

Note

Hand in a cDIPath parameter and this method runs only during a batch or console event, or through an external call — OLE, for example. See Privileged context. For a treatment of JavaScript events, turn to the event object.

Bring in a file attachment through importDataObject and its Data.name takes the value of the cName parameter. Attach a file by way of the UI, though, and the name gets set on its own — attachments pick up the sequential names "Untitled Object", "Untitled Object 2", "Untitled Object 3", and so on.

Parameters

| Parameter | Description |
| --- | --- |
| cName | What name to tie to the data object. |
| cDIPath | (optional) A device-independent path pointing at a data file on the user's hard drive. The path can be absolute or relative to the current document. Skip it and the user gets prompted to find a data file. |
| cCryptFilter | (optional, Acrobat 6.0) The language-independent name of whichever crypt filter encrypts this data object. That crypt filter has to already sit in the document's crypt-filter list — added earlier through the Doc addRecipientListCryptFilter method — or an exception fires. Want this data object left unencrypted inside a file that the Doc encryptForRecipients method encrypts? Reach for the predefined Identity crypt filter. |

Returns

true on success. An exception is thrown on failure.

Example: Attach two files into current document, and write all Data object information to the console.

```javascript
function DumpDataObjectInfo(dataobj)
{
    for (var i in dataobj)
        console.println(dataobj.name + "[" + i + "]=" + dataobj[i]);
}
// Prompt the user for a data file to embed.
this.importDataObject("MyData");
DumpDataObjectInfo(this.getDataObject("MyData"));
// Embed Foo.xml (found in the parent directory for this doc).
this.importDataObject("MyData2", "../Foo.xml");
DumpDataObjectInfo(this.getDataObject("MyData2"));
```
