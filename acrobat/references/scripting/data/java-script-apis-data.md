# JavaScript APIs — Data

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

An embedded file or data stream kept inside the document is what the Data object stands for. Consult the PDF Reference for the particulars.

Data objects give you a tidy way to bind and embed source files, metadata, and other related data alongside a document. They can be pulled in from the external file system, queried, and pulled back out.

See the following Doc properties and methods:

createDataObject, dataObjects, exportDataObject, getDataObject, importDataObject, removeDataObject, openDataObject, getDataObjectContents, and setDataObjectContents.

The following objects, properties and methods support PDF portfolios (also called PDF collections or PDF packages):

app.newCollection, Doc. collection, collection object, and collectionField object

Note

Although the Data object methods first shipped in Acrobat 5.0, using them in Adobe Reader under additional usage rights did not become possible until Adobe Reader 6.0.
