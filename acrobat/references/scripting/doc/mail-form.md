# mailForm

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | No | Requires forms rights |

Sends the form data out and mails the FDF file it produces as an attachment to every recipient, user interaction or not. Signed signature fields get no support from the method.

mailDoc, app. mailGetAddrs, app. mailMsg, the FDF object mail method, and the Report object mail method are also worth a look.

Note

On Windows, this method needs the client machine's default mail program set up as MAPI enabled.

Parameters

| Parameter | Description |
| --- | --- |
| bUI | Set it true and the remaining parameters feed a compose-new-message window shown to the user. Set it false and cTo becomes mandatory while the rest stay optional. - (Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, falling back to true. See Privileged context. |
| cTo | (required if bUI is true) A semicolon-delimited list of recipients for the message. |
| cCc | (optional) A semicolon-delimited list of CC recipients for the message. |
| cBcc | (optional) A semicolon-delimited list of BCC recipients for the message. |
| cSubject | (optional) The subject of the message. The length limit is 64 KB. |
| cMsg | (optional) The content of the message. The length limit is 64 KB. |

Example: Open the compose message window.

```javascript
this.mailForm(true);
```

Send the mail with the attached FDF file to fun1@example.com and fun2@example.com.

```javascript
this.mailForm(false, "fun1@example.com; fun2@example.com", "", "",
    "This is the subject", "This is the body of the mail.");
```
