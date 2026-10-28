# embedDocAsDataObject

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | Requires attachment rigths |

Stores the given document inside the current one as a Data Object.

Note

From Adobe Reader 7.0 onward this call works when the host document holds file-attachment rights; however, should the document being embedded have been modified, it must itself carry document Save rights.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name that will be tied to the data object. |
| oDoc | Which document gets embedded as the data object. |
| cCryptFilter | (optional) A crypt filter, given by its language-independent name, that encrypts this data object. That filter must already sit in the document’s crypt-filter list — added earlier through the addRecipientListCryptFilter method — or an exception results. To keep this data object unencrypted within a file that the encryptForRecipients method otherwise encrypts, apply the predefined Identity crypt filter. |
| bUI | (optional) When true, an alert is permitted if oDoc needs saving yet its permissions forbid the save. Default value is false. |

Example: Suppose an envelope file carrying a “myFilter” crypt filter was authored earlier and folded into the current document.

```javascript
var authorEmail = "johndoe@example.com";
var envelopeDoc = this.openDataObject( "envelope" );
envelopeDoc.embedDocAsDataObject( "attachment", this, "myFilter" );
envelopeDoc.title.Author = authorEmail;
envelopeDoc.mailDoc({
    cTo: "support@example.com",
    cSubject: "Application from " + authorEmail
});
```
