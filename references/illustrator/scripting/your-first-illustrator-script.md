# Your first Illustrator script

Many programming introductions begin by showing "Hello World!" This example creates a new Illustrator document and places that message in a text frame. Use the steps below:

A default Mac OS installation places Script Editor at /Applications/AppleScript/Script Editor/.

If Script Editor is missing, reinstall it from your Mac OS system CD.

1. Launch Script Editor.

```applescript
--Send the following commands to Illustrator
tell application "Adobe Illustrator"

--Create a new document
set docRef to make new document

--Create a new text frame with the string "Hello World"
set textRef to make new text frame in docRef
with properties { contents: "Hello World!", position:{200, 200} }

end tell
```

3. Click Run in the Script Editor toolbar.

Many programming languages begin with a "Hello World!" first project. In this example, the script creates a new Illustrator document and adds a text frame containing that message. Use these steps:

Viewing the JavaScript object model explains where the ExtendScript Toolkit is located.

```javascript
//Hello World!
var myDocument = app.documents.add();
//Create a new text frame and assign it to the variable "myTextFrame"
var myTextFrame = myDocument.textFrames.add();
// Set the contents and position of the text frame
myTextFrame.position = [200,200];
myTextFrame.contents = "Hello World!"
```

- In the ESTK workflow, open the upper-left drop-down list and choose Adobe lllustrator CC 2017; choose Yes to launch Illustrator, then run the script with Debug > Run in the ESTK.
- With a text editor other than the ESTK, save the file as text-only in a folder you choose, using the .jsx file extension, then start Illustrator. In Illustrator, choose File > Scripts > Other Scripts, then browse to and run the script file.

The standard first exercise for a programming language is to show the message "Hello World!" This example creates a new Illustrator document and adds a text frame that contains that message. Use these steps:

1. Use Notepad or another text editor, then enter this code:

```vbscript
Rem Hello World
Set appRef = CreateObject("Illustrator.Application")
Rem Create a new document and assign it to a variable
Set documentRef = appRef.Documents.Add
Rem Create a new text frame item and assign it to a variable
Set sampleText = documentRef.TextFrames.Add
Rem Set the contents and position of the TextFrame
sampleText.Position = Array(200, 200)
sampleText.Contents = "Hello World!"
```

3. Save the file as text-only in any folder you choose, using the .vbs file extension.

- Double-click the file.
- Start Illustrator, choose File > Scripts > Other Scripts, then browse to and run the script file.
