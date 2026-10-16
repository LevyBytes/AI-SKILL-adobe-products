# addToolButton

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Puts a button on the "Add-on" toolbar under Acrobat 9 or earlier. Under Acrobat X, the button is placed instead on the Plugin Addon Tools panel along the right edge of the display area.

Suppose a document — say docA.pdf — is the active one in Acrobat at the moment this method runs to add a button. Acrobat then drops that button once docA.pdf stops being active or gets closed. In the first of those cases, should docA.pdf become active once more, the button returns to the toolbar on its own.

Icons are capped at 20 by 20 pixels. Supply one any larger and an exception is raised.

Note

(Acrobat 7.0) Several changes govern using this method securely. Invoking addToolButton from the console or during application initialization counts as privileged, trusted execution.

Call this method from a script that lacks privilege, however, and the "JavaScript Window" warning shows up on the "Add-on" toolbar, which then cannot be docked. (See Privileged context.)

Companion method: removeToolButton.

Parameters

| Parameter | Description |
| --- | --- |
| cName | A language-independent identifier, unique to the button. That language-independent name is how other methods (removeToolButton, for one) reach the button. - cName has to be unique. Guard against a name clash by consulting listToolbarButtons, which reports every toolbar button name in place at the moment. |
| oIcon | An Icon Stream object. From Acrobat 7.0 onward this parameter becomes optional whenever a cLabel is supplied. |
| cExec | The string expression evaluated when the button is chosen. |
| cEnable | (optional) A string expression that settles whether the toolbutton is enabled. By default the button stays enabled. Have the expression set event.rc to false to disable it. |
| cMarked | (optional) A string expression that settles whether the toolbutton is marked. By default the button carries no mark. Have the expression set event.rc to true to mark it. |
| cTooltext | (optional) The help text shown for the button while the pointer rests over the toolbutton. By default there is no tool tip. - Steer clear of extended characters inside cTooltext, since the string can end up truncated. |
| nPos | <br>(optional) The number of the existing toolbar button that the new button should precede. With nPos at -1 (its default), the new button is tacked onto the end of the toolbar. |
| cLabel | (optional, Acrobat 7.0) A text label placed on the button just to the right of its icon. By default no label appears. |

Returns

undefined

Example: Create a button from an icon graphic on the user's hard drive. This script is executed from the console.

```javascript
// Create a document
var myDoc = app.newDoc();

// import icon (20x20 pixels) from the file specified
myDoc.importIcon("myIcon", "/C/myIcon.jpg", 0);

// convert the icon to a stream.
oIcon = util.iconStreamFromIcon(myDoc.getIcon("myIcon"));

// close the doc now that we have grabbed the icon stream
myDoc.closeDoc(true);

// add a toolbutton
app.addToolButton({
    cName: "myToolButton",
    oIcon: oIcon,
    cExec: "app.alert('Someone pressed me!')",
    cTooltext: "Push Me!",
    cEnable: true,
    nPos: 0
});

app.removeToolButton("myToolButton")
```

See also the example following util. iconStreamFromIcon.
