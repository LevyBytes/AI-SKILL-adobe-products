# setDataObjectContents

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | Requires attachment rights |

Overwrites the file attachment named by cName, putting the oStream parameter's contents in its place.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name tied to the Data object that oStream is to replace. |
| oStream | A ReadStream object that holds the file attachment's contents. |
| cCryptFilter | (optional) The language-independent name of a crypt filter to apply when encrypting this data object. That crypt filter has to already sit in the document's crypt-filter list, added earlier via the addRecipientListCryptFilter method; otherwise an exception is thrown. You can reach for the predefined Identity crypt filter to leave this data object unencrypted inside a file that the encryptForRecipients method has otherwise encrypted. |

Example 1: See getDataObjectContents.

Example 2: a file attachment called Acrobat.xml lives in this document. The script opens it, refreshes the XML data, then writes the revised XML document back into the attachment. That XML file attachment can also be submitted; see the submitForm method. The XML data in play here comes from the example that follows XMLData. applyXPath.

```javascript
// Get the file stream object of the attachment
var Acrobat = this.getDataObjectContents("Acrobat.xml");

// Convert to a string
var cAcrobat = util.stringFromStream(Acrobat, "utf-8");

// Parse this and get XFAObject
var myXML = XMLData.parse(cAcrobat,false);

// Change the value of grandad's income
myXML.family.grandad.personal.income.value = "300000";

// Save the XML document as a string, cAcrobat
var cAcrobat = myXML.saveXML('pretty');

// Convert to a file stream
var Acrobat = util.streamFromString(cAcrobat, "utf-8");

// Now "update" the attachment Acrobat.xml with this file stream
this.setDataObjectContents("Acrobat.xml", Acrobat);
```

The associated objects, properties, and methods include dataObjects, getDataObject, openDataObject, createDataObject, importDataObject, getDataObjectContents, and removeDataObject, plus the data object.
