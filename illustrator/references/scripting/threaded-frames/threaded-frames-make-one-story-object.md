# Threaded frames make one story object

Linked frames are represented as one story object. After running the preceding script, run this AppleScript to inspect the counts.

```applescript
display dialog ("There are " & (count(text frames of current document)) & " text frames.")
display dialog("There are " & (count(stories of current document)) & " stories.")
```

Illustrator scripting supports threaded area text frames and threaded path text frames, matching the application behavior.

For frames that already exist, connect them by setting the text frame object's nextFrame or previousFrame property.

If you paste this script into the ESTK, keep the contents property value unwrapped:

```javascript
var myDoc = documents.add();
var myPathItem1 = myDoc.pathItems.rectangle(244, 64, 82, 76);
var myTextFrame1 = myDoc.textFrames.areaText(myPathItem1);
var myPathItem2 = myDoc.pathItems.rectangle(144, 144, 42, 116);
var myTextFrame2 = myDoc.textFrames.areaText(myPathItem2);

// use the nextFrame property to thread the text frames
myTextFrame1.nextFrame = myTextFrame2;
var sText = "This is two text frames linked together as one story, with text flowing from the first to the last. This is two text frames linked together as one story, with text flowing from the first to the last. This is two text frames linked together as one story. ";
myTextFrame1.contents = sText;
redraw();
```

### Threaded frames make one story object

Linked frames belong to one story object. To see the result, execute this JavaScript after the preceding script has run.

```javascript
var myDoc = app.activeDocument
alert("There are " + myDoc.textFrames.length + " text frames.")
alert("There are " + myDoc.stories.length + " stories.")
```

Illustrator scripting can thread area text frames or path text frames, just as the Illustrator application can.

To connect text frames that already exist, set the TextFrames object's NextFrame or PreviousFrame property.

When pasting this script into a script editor, keep the Contents property value on one line. The long-line character (\_) cannot be used within string text.

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set myDoc = appRef.Documents.Add
Set myPathItem1 = myDoc.PathItems.Rectangle(244, 64, 82, 76)
Set myTextFrame1 = myDoc.TextFrames.AreaText(myPathItem1)
    myTextFrame1.Contents = "This is two text frames linked together as one story, with text flowing from the first to the last."
Set myPathItem2 = myDoc.PathItems.Rectangle(144, 144, 42, 116)
Set myTextFrame2 = myDoc.TextFrames.AreaText(myPathItem2)

'Use the NextFrame property to thread the frames
myTextFrame1.NextFrame = myTextFrame2

appRef.Redraw()
```

### Threaded frames make one story object

Threaded frames form one story object. To verify this, run the following VBScript after the earlier script has completed.

```vbscript
Set myDoc = appRef.ActiveDocument
myMsg = "alert(""There are " & CStr(myDoc.TextFrames.Count) & " text frames. "")"
appRef.DoJavaScript myMsg
myMsg = "alert(""There are " & CStr(myDoc.Stories.Count) & " storiess. "")"
appRef.DoJavaScript myMsg
```
