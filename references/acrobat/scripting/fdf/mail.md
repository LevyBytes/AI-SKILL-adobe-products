# mail

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Writes the FDF object out as a temporary FDF file and sends that file as an attachment to all of the recipients, with the user interface shown or skipped. Once it is no longer needed, the temporary file is removed.

See also a pp. mailGetAddrs, app. mailMsg, the Doc methods mailDoc and mailForm, and the Report object method mail.

Note

Under Windows, this method works only where the client machine's default mail application has been set up as MAPI enabled.

Parameters

| Parameter | Description |
| --- | --- |
| bUI | (optional) Governs whether a user interface appears. Pass true (this is the default) and the remaining parameters seed a compose-new-message window that gets shown to the user. Pass false and the cTo parameter becomes mandatory while everything else stays optional. - (Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, reverting to true. See Privileged context. |
| cTo | (optional) A semicolon-separated list of recipients for the message. |
| cCc | (optional) A semicolon-separated list of CC recipients for the message. |
| cBcc | (optional) A semicolon-separated list of BCC recipients for the message. |
| cSubject | (optional) The subject of the message. The length limit is 64 KB. |
| cMsg | (optional) The content of the message. The length limit is 64 KB. |

Returns

Throws an exception if there is an error.

Example:

```javascript
var fdf = app.openFDF( "/c/temp/myDoc.fdf" );
/* This opens the compose new message window */
fdf.mail();

/* This will send out the mail with the attached FDF file to fun1@example.com

 and fun2@example.com */
fdf.mail( false, "fun1@example.com", "fun2@example.com", "",
    "This is the subject", "This is the body.");
```
