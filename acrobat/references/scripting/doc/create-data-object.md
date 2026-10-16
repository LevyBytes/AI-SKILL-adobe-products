# createDataObject

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Requires forms rights |

Builds a Data object.

Data objects lend themselves to ad hoc construction. That helps when the data originates in JavaScript from somewhere other than an external file (ADBC database calls, for instance).

Related objects, properties, and methods are dataObjects, getDataObject, openDataObject, importDataObject, removeDataObject, getDataObjectContents, and setDataObjectContents, and the data object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which name to tie to the data object. |
| cValue | A string holding the data to embed. |
| cMIMEType | (optional) The data's MIME type. This defaults to "text/plain". |
| cCryptFilter | (optional, Acrobat 6.0) Which crypt filter, by its language-independent name, encrypts this data object. That crypt filter has to have been added beforehand to the document's crypt-filter list through the Doc addRecipientListCryptFilter method, or else an exception is raised. You can use the predefined Identity crypt filter so this data object stays unencrypted inside a file that the Doc encryptForRecipients method otherwise encrypts. |

Example:

```javascript
this.createDataObject("MyData.txt", "This is some data.");
```

Refer as well to the sample shown right after addRecipientListCryptFilter.
