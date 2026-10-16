# Working with text frames — Threaded frames

Illustrator supports threading area text frames and path text frames, and scripts can do the same.

For text frames that already exist, connect them with the next frame or previous frame property on the text frame object.

When placing this script in your script editor, keep the contents property value on a single line. The long-line character (¬) cannot be used inside string contents.

```applescript
tell application "Adobe Illustrator"
    make new document
    make new rectangle in current document with properties
        {position:{100, 500}, height:100, width:100}
    make new text frame in current document with properties
        {kind:area text, text path:the result, name:"tf1", contents:"This is two text frames linked together as one story, with text flowing from the first to the last. First frame content. "}
    make new rectangle in current document with properties
        {position:{300, 700}, height:100, width:100}
    make new text frame in current document with properties
        {kind:area text, text path:the result, name:"tf2", contents:"Second frame content." }
    --use the next frame property to thread the frames
        set next frame of text frame "tf1" of current document to
        text frame "tf2" of current document
    redraw
end tell
```
