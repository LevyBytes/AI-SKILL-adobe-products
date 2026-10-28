# mailGetAddrs

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Note

This method is a Windows-only feature.

Brings up an address book dialog box so the user can pick e-mail recipients. You can optionally seed that dialog with semicolon-separated addressee lists through the cTo, cCc, and cBcc strings. Whether the user may select CC and BCC recipients is governed by the bCc and bBcc Boolean values.

See also mailMsg, the Doc object methods mailDoc and mailForm, the FDF object mail method and the Report object mail method.

Note

(Acrobat 7.0) Only during a batch or console event can this method run. See also Privileged context. See the event object for a discussion of JavaScript events.

Parameters

| Parameter | Description |
| --- | --- |
| cTo | (optional) A semicolon-separated list of "To" addressees to use. |
| cCc | (optional) A semicolon-separated list of CC addressees to use. |
| cBcc | (optional) A semicolon-separated list of BCC addressees to use. |
| cCaption | (optional) A string to appear on the caption bar of the address dialog box. |
| bCc | (optional) A Boolean flag controlling whether CC recipients are selectable by the user. |
| bBcc | (optional) A Boolean flag for whether the user is allowed to pick BCC recipients. Set this one only when bCc is true; otherwise the method fails (and returns undefined). |

Returns

When the user cancels, the call fails and returns undefined. On success it hands back an array of three strings for To, CC, and BCC.

Example: Allow the user two attempts at supplying mail addresses.

```javascript
var attempts = 2;
while (attempts > 0)
{
    var recipients = app.mailGetAddrs
    ({
        cCaption: "Select Recipients, Please",
        bBcc: false
    })
    if (typeof recipients == "undefined" ) {
        if (--attempts == 1)
            app.alert("You did not choose any recipients, try again");
    } else break;
}
if (attempts == 0)
    app.alert("Cancelling the mail message");
else {
    // JavaScript statements to send mail
}
```
