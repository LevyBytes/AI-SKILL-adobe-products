# Working with text frames

In AppleScript, set the kind property on the text frame object when you need a text frame of a particular type.

```applescript
set myRect to make new rectangle in current document with properties
{position:{100, 700}, height:100, width:100}
set myAreaText to make new text frame in current document with properties
{kind:point text,contents:"Text Frame 1"}
```

In JavaScript, create a text frame for a particular frame type through the text frame object's kind property:

```javascript
var rectRef = docRef.pathItems.rectangle(700, 50, 100, 100);
//use the areaText method to create the text frame
var areaTextRef = docRef.textFrames.areaText(rectRef);
```

In VBScript, create a specific kind of text frame by calling the TextFrames method that matches the frame type you need:

```vbscript
Set rectRef = docRef.PathItems.Rectangle(700, 50, 100, 100)

' Use the AreaText method to create the text frame
Set areaTextRef = docRef.TextFrames.AreaText(rectRef)
```
