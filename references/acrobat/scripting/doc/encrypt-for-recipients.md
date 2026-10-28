# encryptForRecipients

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Locks down the document for the listed recipients by relying on each recipient’s public-key certificate. No encryption actually happens until the save occurs. You may sort recipients into groups, and every group can carry its own distinct permission settings. Should the operation fail, this method raises an exception.

Note

Batch, console, and app initialization events are the contexts where this method is available. Refer also to Privileged context.

Related entries include the createDataObject method, the security. chooseRecipientsDialog method, and the data object.

Parameters

| Parameter | Description |
| --- | --- |
| oGroups | An array of generic Group objects that list the recipients for which the document is to be encrypted. |
| bMetaData | (optional) When true (the default), document metadata is to be encrypted. Flipping this to false yields a document viewable solely in Acrobat 6.0 or later. |
| bUI | (optional) When true, the handler shows its interface, letting the user pick which recipients the document is encrypted for. The default value is false. |

Returns

On success, true; failing that, an exception gets thrown.

Group object

A generic JavaScript object that lets a set of permissions be bound to a recipient list targeted for encryption of a document or data. encryptForRecipients receives this object, and security.chooseRecipientsDialog hands it back. Its properties are the following.

| Property | Description |
| --- | --- |
| permissions | A Permissions object carrying the group’s permission set. |
| userEntities | An array of UserEntity objects — the users the permissions cover. |

Permissions object

A generic JavaScript object holding a permission set, used within a Group object. Its properties are listed below. Every Boolean property defaults to false.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| allowAll | Boolean | R/W | Indicates whether complete, unrestricted access is granted. A true value supersedes every other property. |
| allowAccessibility | Boolean | R/W | Indicates whether content access for visually impaired users is granted. When true, content may be pulled out for use by applications that, say, read text aloud. |
| allowContentExtraction | Boolean | R/W | Indicates whether copying and extracting content is granted. |
| allowChanges | String | R/W | Which document edits are permitted. Values are:<br><br>none documentAssembly fillAndSign editNotesFillAndSign all |
| allowPrinting | String | R/W | Which printing security level the document permits. Values are:<br><br>none lowQuality highQuality |


Example: Encrypt every string and stream the document holds. The resulting file stays openable in Acrobat 5.0 and later releases:

```javascript
var sh = security.getHandler( "Adobe.PPKMS" );
var dir = sh.directories[0];
var dc = dir.connect();

dc.setOutputFields({oFields:["certificates"]});
var importantUsers = dc.search({oParams:{lastName:"Smith"}});
var otherUsers = dc.search({oParams: {lastName:"Jones" }});

this.encryptForRecipients({
    oGroups :
    [
        {userEntities:importantUsers,permissions:{allowAll:true }},
        {userEntities: otherUsers, permissions:{allowPrinting:"highQuality"}}
    ],
    bMetaData : true
});
```
