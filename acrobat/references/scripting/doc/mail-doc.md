# mailDoc

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | No | Requires document save rights |

Saves the current PDF and sends it off as an attachment to every recipient, whether or not the user gets involved.

mailForm, app. mailGetAddrs, app. mailMsg, the FDF object mail method, and the Report object mail method are also worth a look.

Note

(Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, falling back to true. See Privileged context.

(Save Rights) For Adobe Reader 5.1 and later, this method is allowed, but document Save rights are required in case the document is changed.

On Windows, this method needs the client computer's default mail program set up as MAPI enabled.

Parameters

| Parameter | Description |
| --- | --- |
| bUI | (optional) With true the default, the remaining parameters feed a compose-new-message window shown to the user. Set it false and cTo becomes mandatory while the rest stay optional. - (Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, falling back to true. See Privileged context. |
| cTo | (optional) The semicolon-delimited list of recipients for the message. |
| cCc | (optional) The semicolon-delimited list of CC recipients for the message. |
| cBcc | (optional) The semicolon-delimited list of BCC recipients for the message. |
| cSubject | (optional) The subject of the message. The length limit is 64 KB. |
| cMsg | (optional) The content of the message. The length limit is 64 KB. |

Example: Open the compose message window.

```javascript
this.mailDoc(true);
```

Mail the attached PDF off to apstory@example.com and dpsmith@example.com. From Acrobat 7.0 on, running the code below in a privileged context becomes a requirement if the bUI parameter (set false) is to be honored.

```javascript
this.mailDoc({
    bUI: false,
    cTo: "apstory@example.com",
    cCC: "dpsmith@example.com",

     cSubject: "The Latest News",
    cMsg: "A.P., attached is my latest news story in PDF."
});
```
