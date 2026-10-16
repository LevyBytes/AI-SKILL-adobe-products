# Text Objects — Objects that represent text content

Inside a text frame or story, the real text content is available through any of these objects:

- characters
- words
- paragraphs
- lines

A line object contains all characters that fit onto a single line in a text frame or story object.

Every text-art item includes at least one text line, represented by a line object.

Text art may include more than one text line when the text includes hard line breaks or when characters flow to another line because they exceed the text art width.

Collections within text frame and story objects provide access to and identification for text objects; for example:

```javascript
textFrame("My Text Frame").paragraphs
// or
story("My Story").paragraphs
```

Insertion point and text selection properties are available on both text frame and story objects.

Properties on the text frame object also include the text frame's defining characteristics, such as:

- Frame width, height, and position
- Hidden or locked state for the frame
- Text editability

Note

Scripts cannot create a line object. They can create character, paragraph, and word objects.
