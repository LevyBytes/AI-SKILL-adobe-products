# mailMsg

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | Yes | All |

Sends e-mail out, whether or not the user is prompted to interact.

See also the Doc object mailDoc and mailForm methods, the FDF object mail method and the Report object mail method.

Note

On Windows: For this method to work, the client machine's default mail program has to be configured as MAPI enabled.

Parameters

| Parameter | Description |
| --- | --- |
| bUI | Indicates whether user interaction is required. When true, the rest of the parameters seed the compose-new-message window shown to the user. When false, cTo is required while the others stay optional. - (Acrobat 7.0) Running this method in a non-privileged context causes the bUI parameter to be ignored and to default to true. See Privileged context. |
| cTo | A semicolon-separated list of addressees. |
| cCc | (optional) A semicolon-separated list of CC addressees. |
| cBcc | (optional) A semicolon-separated list of BCC addressees. |
| cSubject | (optional) Subject line text. The length limit is 64 KB. |
| cMsg | (optional) Mail message text. The length limit is 64 KB. |

Example: Bring up the compose new message window.

```javascript
app.mailMsg(true);
```

Route the message to fun1@example.com and fun2@example.com.

```javascript
app.mailMsg(false, "fun1@example.com; fun2@example.com", "", "",
"This is the subject", "This is the body of the mail.");
```

A message that carries form data can be assembled too.

```javascript
var cMyMsg = "Below are the current budget figures:nn";
cMyMsg += "Date Compiled: " + this.getField("date").value + "n";
cMyMsg += "Current Estimate: " + this.getField("budget").value + "n";
app.mailMsg({
    bUI: true,
    cTo: "myBoss@example.com",
    cSubject: "The latest budget figures",
    cMsg: cMyMsg
} );
```
