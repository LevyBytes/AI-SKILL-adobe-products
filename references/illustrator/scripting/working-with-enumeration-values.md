# Working with enumeration values

In VBScript, properties backed by enumeration values are assigned with numbers instead of text constants.

For instance, TextFrame object's Orientation property controls whether content in a text frame runs horizontally or vertically. That property uses the aiTextOrientation enumeration, whose available values are aiHorizontal and aiVertical.

Use either source below to look up numeric enumeration values:

- In your scripting editor, open the object browser. See Viewing the VBScript object model.
- Adobe lllustrator CC 2017 Scripting Reference: VBScript. In the book's final "Enumerations" chapter, each constant is followed directly by its numeral value. This table excerpt illustrates the format:

| Enumeration type | Values | What it means |
| --- | --- | --- |
| AiTextOrientation | aiHorizontal = 0 aiVertical = 1 | Controls whether text in a text frame is oriented horizontally or vertically |

This sample sets the text orientation to vertical:

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Set docRef = appRef.Documents.Add
Set textRef = docRef.TextFrames.Add
textRef.Contents = "This is some text content."
textRef.Left = 50
textRef.Top = 700
textRef.Orientation = 1
```

A common scripting convention is to add the text constant in a comment after the numeric value, as shown here:

```vbscript
textRef.Orientation = 1 ' aiVertical
```
