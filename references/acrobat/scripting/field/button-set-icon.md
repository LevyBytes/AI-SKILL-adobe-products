# buttonSetIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | All |

Assigns the icon attached to a button.

On how the icon and caption sit on the button face, see buttonAlignX, buttonAlignY, buttonFitBounds, buttonPosition, buttonScaleHow, and buttonScaleWhen.

To obtain an Icon object for this method's oIcon parameter, use either buttonGetIcon or doc.getIcon.

Note

This method has to run from script that lives inside the document. Run script that calls buttonSetIcon from the console of Adobe Reader, for instance, and a NotAllowedError exception gets thrown.

Parameters

| Parameter | Description |
| --- | --- |
| oIcon | The Icon object attached to the button. |
| nFace | (optional) When given, assigns an icon of the stated type:<br><br>0: (default) normal icon<br><br>1: down icon<br><br>2: rollover icon |

Example: This one walks every named icon in the document and uses the names to build a list box. Picking an entry in the list box puts the icon of that name onto the face of the field "myPictures". What comes next is the mouse-up action of the button field "myButton".

```javascript
var f = this.getField("myButton")
var aRect = f.rect;
aRect[0] = f.rect[2];             // Place list box relative to the
aRect[2] = f.rect[2] + 144;        // position of "myButton"
var myIcons = new Array();
var l = addField("myIconList", "combobox", 0, aRect);
l.textSize = 14;
l.strokeColor = color.black;
for (var i = 0; i < this.icons.length; i++)
    myIcons[i] = this.icons[i].name;
l.setItems(myIcons);
l.setAction("Keystroke",
    'if (!event.willCommit) {rt'
    + 'var f = this.getField("myPictures");rt'
    + 'var i = this.getIcon(event.change);rt'
    + 'f.buttonSetIcon(i);r'
    + '}');
```

As for the named icons, you can bring them into the document either interactively — see the example under addIcon — or through a batch sequence.

For a fuller example, see also buttonGetCaption.
