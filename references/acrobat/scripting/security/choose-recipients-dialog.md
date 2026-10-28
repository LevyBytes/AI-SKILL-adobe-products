# security.chooseRecipientsDialog

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Brings up a dialog box where the user picks a roster of recipients. Hands back an array of generic Group objects, usable when documents or data are encrypted through the Doc's encryptForRecipients or addRecipientListCryptFilter methods.

Note

Runs only during a console, menu, or application-initialization event. Refer to Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| oOptions | A DisplayOptions object containing the parameters for the display options. |

Returns

An array of Group objects.

For a description of the Group object, see the Doc encryptForRecipients method.

DisplayOptions object

These are the properties the DisplayOptions object carries.

| Property | Description |
| --- | --- |
| bAllowPermGroups | Governs whether permissions may be assigned to entries in the recipient list. The default value is true. |
| bPlaintextMetadata | Supply this property and a check box appears that lets the user choose plaintext or encrypted metadata. Its default tracks the value of this property (true or false). Omit the property and the check box stays hidden. |
| cTitle | The title shown in the dialog box. It defaults to "Choose Recipients". |
| cNote | A note shown in the dialog box. By default none is shown. |
| bAllowImportFromFile | Sets whether the option to import recipients from a file is shown. The default value is true. |
| bRequireEncryptionCert | When true, every recipient must carry an encryption certificate. The default value is true. |
| bRequireEmail | When true, every recipient must carry an email address. The default value is false. |
| bUserCert | When true, the user is asked to supply his or her own certificate so as to join the recipient list. Turning this flag on produces a prompt yet does not force the user to hand over a certificate. |

Related references:

- [Selecting a recipient name](recipient-name-example.md)
- [Preparing recipient email lists](recipient-email-list-example.md)
- [Listing recipient groups and permissions](recipient-group-listing-example.md)
