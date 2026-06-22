# Add Manage Text

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Design with text; Add or remove placeholder text; Wrap or unwrap text around objects; Resize the text area; Add rows and columns to text; Add margins to text and adjust the first baseline; Create text threads between objects; Remove or break text threads between objects; Add text to vector artwork; Add text in Illustrator with Type, Area Type, and Touch Type tools.

## Design with text

### Add and manage text

Add text to vector artwork

Add or remove placeholder text

Wrap or unwrap text around objects

Resize the text area

Add rows and columns to text

Add margins to text and adjust the first baseline

Create text threads between objects

Remove or break text threads between objects

Add text in Illustrator with Type, Area Type, and Touch Type tools

### Work with fonts and scripts

Font browser overview

Find and apply fonts

Organize fonts using Creative Cloud Libraries

Apply the fonts organized in Creative Cloud Libraries

Find, apply, and adjust variable fonts

Supported font file types in Adobe Illustrator

Edit fonts

Find and replace fonts

Preview, add, or replace missing fonts

Edit text without replacing missing fonts

Identify fonts using Retype

Apply Retype-suggested fonts to live text

About Adobe Asian composers

Justify text using Kashida and hyphenation

Format Japanese text in Illustrator

Mojikumi and Kinsoku settings in Illustrator

Mojikumi and Kinsoku overview for Japanese text formatting

### Edit and format text

Character panel overview

Transform text

Underline or strikethrough text

Change case and capitalization styles

Adjust kerning and tracking

Vary font height

Turn fractional character widths off or on

Paragraph panel overview

Align text

Adjust word and letterspacing in justified text

Indent text

Adjust paragraph spacing

Create bulleted or numbered lists

Move or flip text

Adjust text alignment and spacing on paths

Apply effects to text on paths

### Use special characters and glyphs

About character sets and alternate glyphs

Insert special characters

Glyphs panel overview

Replace characters with alternate glyphs

OpenType panel overview

Use ligatures and contextual alternates

Use swashes, titling alternates, or stylistic alternates

Add stylistic sets to selected text

Insert white space and break characters

Snap to Glyph options

Snap with glyph guides

Snap glyph to angles, anchor points, or text area

## Add or remove placeholder text

Add and remove placeholder text in Illustrator.

### Add placeholder text

From the Tools panel, choose the Type tool.

Drag on the artboard at the place where the text box should be created.

Note

Every newly created type object in Illustrator receives placeholder text automatically.

To tailor the placeholder copy for the current need, choose Type > Fill With PlaceHolder Text.

### Remove placeholder text

With the Selection tool, choose the text box that currently contains placeholder text.

Switch to the Type tool, then highlight the placeholder characters that should be deleted.

Use Delete or Backspace to clear that placeholder text.

### Remove default placeholder text

Choose Edit > Preferences > Type.

In Preferences, clear the Fill New Type Objects With Placeholder Text checkbox.

Choose OK.

## Wrap or unwrap text around objects

Control whether Illustrator wraps text around objects.

Area text can wrap around drawn objects, imported images, or type objects. Put the area type on the same layer as the wrapping object, directly below that object in the layer stack. When that layer includes other type objects that should stay unwrapped, place them on a different layer or move them above the wrap object.

### Wrap text around an object

Create or place the object that the text should flow around.

Use the Type tool to add a block of text.

Right-click the object, then choose Arrange > Bring to Front.

Hold Shift while selecting the object and the text.

Choose Object > Text Wrap > Make.

Note

For additional control over the wrap, open Object > Text Wrap > Text Wrap Options.

### Unwrap text around an object

Using the Selection tool, choose the object with an applied text wrap.

Choose Object > Text Wrap > Release.

## Resize the text area

Use the Selection tool or Direct Selection tool to change a type area's size quickly.

### Resize using the Selection tool

With the Selection tool, choose the type object.

Drag a corner or side handle on the bounding box to change the text area dimensions. Illustrator reflows the text inside the updated bounds.

### Resize using the Direct Selection tool

With the Direct Selection tool, choose the type path.

Drag to reshape the path. Illustrator reflows the text along the adjusted path.

## Add rows and columns to text

Use the Anchor Point tool when you need exact control over path shape by editing anchor points and direction handles.

With the Selection tool, choose the area type object.

From the menu, choose Type > Area Type Options.

In Area Type Options, configure these settings:

- Number: sets how many rows and columns the object contains.
- Span: controls each row's height and each column's width.

  - When selected: changes the row and column count while preserving their width.
  - When deselected: changes row and column width while preserving their count.

- Gutter: defines the spacing between rows or between columns.

Under Options, pick one of these Text Flow choices:

- Rows : text moves left to right across rows.
- Columns : text moves through columns, starting in the left column.

Choose OK to commit the settings.

## Add margins to text and adjust the first baseline

Set the gap between text and its bounding box, and control where the first text line begins.

With the Selection tool, choose an area-type object.

Choose Type > Area Type Options.

In Area Type Options, type an Inset Spacing value to control the inner gap around the text frame.

Use the First Baseline dropdown in the Offset section to choose one of these options:

- Ascent: lines up the tops of lowercase letters with the object's top edge.
- Cap Height: places uppercase letter tops at the top edge.
- Leading: bases the offset on the text's leading value.
- x Height: aligns the top of lowercase x with the top edge.
- Em Box Height: bases the offset on the font's em box height.
- Fixed: allows a custom offset value.
- Legacy: applies the alignment behavior from Illustrator 10 or earlier.

Choose Fixed and type a value in Min to set the precise distance from the object's top.

Choose OK to apply the updates.

## Create text threads between objects

Build flexible layouts by linking text objects so copy can flow smoothly between them.

### Thread any text area

From the toolbar, choose the Type tool.

Click inside the first object where the text should begin.

Enter or paste the text. If the first object cannot hold all content, the Overflow text indicator appears.

Select the Overflow text indicator. The pointer changes to Loaded text.

Right-click inside the second object where the text should continue. Content flows out of the first object and into the second.

Tip

To display the threads you made, choose View > Show Text Threads and select a linked object.

### Thread text to an object

Create a shape, then place text inside it.

Choose the Type tool and click the out port at the bottom of the text frame. The pointer changes to Loaded text.

Use one of these methods to continue the text in another object:

- To thread to a single object: click the object's path. The text moves into that shape.
- To thread to multiple objects: hold Shift and select every object to be threaded, then choose Type > Threaded Text > Create.

After the objects are threaded, the text flows among them. Editing the text or changing the shapes causes Illustrator to reflow the content automatically.

## Remove or break text threads between objects

Remove or break text threads between objects.

Choose the threaded text object that should be disconnected.

Choose Type > Threaded Text > Remove Thread to detach the thread from the following object.

Choose Type > Threaded Text > Release Selected Threaded Text to break every thread and separate all objects.

## Add text to vector artwork

Add text to vector artwork in Illustrator.

### Enter text at a point

Point type can run horizontally or vertically from the point you click, extending as characters are entered. Each text line remains independent. Adding or deleting characters changes the line length, but the text does not wrap to the next line.

From the Tools panel, choose the Type tool.

Click anywhere on the artboard to place the insertion point and start typing.

Tip

Press Enter (Windows) or Return (Mac) to start another line inside the same type object.

With the Selection tool, choose the type object.

To adjust font style, font size, leading, and related settings, choose Window > Type > Character.

### Enter text in an area

Area type, also known as paragraph type, uses an object's boundaries to manage horizontal or vertical character flow. After text reaches an edge, Illustrator wraps it automatically inside the defined area.

Use the Polygon tool to draw the shape.

Choose the Area Type tool from the Tools panel.

When the pointer displays an I-beam with a dotted circle, click once inside the shape to turn it into an area type text container.

Note

Illustrator fills the shape with placeholder text.

Enter or paste replacement text inside the area.

### Enter text on a path

Text can be placed on a path or around a shape outline.

From the Tools panel, choose the Polygon tool, then draw the shape.

Note

For a custom path or shape, draw it with the Pen tool or another Shape tool instead.

In the Tools panel, choose the Type on a Path tool.

Click once where the path starts, or click any location on the shape border.

Type the content that should follow the path or shape outline.

### Delete empty type objects from the artwork

Unused type objects add to document weight; removing them can make artwork simpler to export or print.

Choose Object > Path > Clean Up.

In the Clean Up dialog box, turn on the Empty Text Paths checkbox.

Select OK.

## Add text in Illustrator with Type, Area Type, and Touch Type tools

Create text in Illustrator with the tool suited to the layout: standard text, text inside shapes, or text attached to paths.

Illustrator provides multiple text tools for adding type to artwork. For ordinary text objects, use the Type tool; to pour text into shapes, use the Area Type tool; to reposition, scale, or rotate a single character, use the Touch Type tool.

Review how the Type tool, Area Type tool, and Type on a Path tool work in Adobe Illustrator, along with the main differences among them.

### Add text with the Type tool

Choose the Type tool.

Click the artboard to make a text object.

Enter your text, then choose the Selection tool when you need to move or resize it.

### Fill shapes with text using the Area Type tool

Select a shape, then choose the Area Type tool.

Position the pointer over the shape until the pointer changes.

Click within the shape.

Enter text so it fills the shape.

### Adjust characters using the Touch Type tool

Select the text, then choose the Touch Type tool.

Click the character you need to change.

Drag the character to move, scale, or rotate it.
