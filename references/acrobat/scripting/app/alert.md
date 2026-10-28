# alert

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Brings up an alert dialog box.

Parameters

| Parameter | Description |
| --- | --- |
| cMsg | A string holding the message that gets displayed. |
| nIcon | (optional) Which icon to show. The possible values are:<br><br>0: Error (default)<br><br>1: Warning<br><br>2: Question<br><br>3: Status - On Mac OS, warnings and questions are treated as one and the same. |
| nType | (optional) Which group of buttons to show. The possible values are:<br><br>0: OK (default)<br><br>1: OK, Cancel<br><br>2: Yes, No<br><br>3: Yes, No, Cancel |
| cTitle | (optional, Acrobat 6.0) Text for the dialog box title. Leave it out and the title "Adobe Acrobat" is used. |
| oDoc | (optional, Acrobat 6.0) The Doc object the alert should be tied to. |
| oCheckbox | (optional, Acrobat 6.0) Supply this and a check box appears in the alert box's lower-left corner. oCheckbox is a plain JavaScript object carrying three properties; the alert method reads the first two property values, while the third hands back a Boolean.<br><br>cMsg: (optional) A string shown next to the check box. Omit it and the default text "Do not show this message again" is used.<br><br>bInitialValue: (optional) Set true to have the check box start out checked. It defaults to false.<br><br>bAfterValue: Holds the check box's state once the alert method finishes — that is, its state when the dialog box closed. A value of true means the box was checked at the moment the alert box closed. |

Returns

nButton: a code identifying which button the user clicked:

1: OK

2: Cancel

3: No

4: Yes

Example 1: Display a simple alert box:

```javascript
app.alert({
    cMsg: "Error! Try again!",
    cTitle: "Acme Testing Service"
});
```

Example 2: Shut the document only once the user has agreed to it:

```javascript
// A MouseUp action
var nButton = app.alert({
    cMsg: "Do you want to close this document?",
    cTitle: "A message from A. C. Robat",
    nIcon: 2, nType: 2
});
if ( nButton == 4 ) this.closeDoc();
```

Example 3 (Acrobat 6.0)

Here one document raises an alert box belonging to a second. Two documents are in play, DocA and DocB — DocA loaded inside a browser while DocB sits in the viewer.

```javascript
// The following is a declaration at the document level in DocA
var myAlertBoxes = new Object;
myAlertBoxes.oMyCheckbox = {
    cMsg: "Care to see this message again?",
    bAfterValue: false
}
```

What follows is a mouse-up action inside DocA. There, theOtherDoc holds the Doc object for DocB. The alert box checks whether the user wants it shown another time; tick the check box and the alert stops reappearing.

```javascript
if ( !myAlertBoxes.oMyCheckbox.bAfterValue )
{
    app.alert({
        cMsg: "This is a message from the DocA?",
        cTitle: "A message from A. C. Robat",
        oDoc:theOtherDoc,
        oCheckbox: myAlertBoxes.oMyCheckbox
    });
}
```
