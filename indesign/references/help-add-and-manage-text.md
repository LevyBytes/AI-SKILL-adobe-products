# Add And Manage Text Frames, Add And Import Text

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add and manage text; Create and position text frames; Change text frame properties; View word and character counts in text frames; Set column rules for text frames; Open and use Story Editor; Add text to documents; Generate text variations; Use Creative Cloud text assets in InDesign documents; Drag and drop text within InDesign; Thread text frames; Set up smart text reflow; Find and replace text; Import text files; Import options.

## Add and manage text

### Add and manage text frames

Create and position text frames

Change text frame properties

View word and character counts in text frames

Set column rules for text frames

Open and use Story Editor

### Add and import text

Add text to documents

Generate text variations

Use Creative Cloud text assets in InDesign documents

Drag and drop text within InDesign

Thread text frames

Set up smart text reflow

Find and replace text

Import text files

Import options

### Type on a path

Add or delete type on path

Edit type on path

Apply effects to type on path

### Conditional and variable text

Conditional text overview

Create and edit conditional text

Use condition sets

Text variables overview

Create and manage text variables

Format text variables

Markers types and display options

## Create and position text frames

Learn how to create text frames, then move or resize them to control the way text appears in an Adobe InDesign layout.

In Adobe InDesign, text lives in containers called text frames. You can draw empty text frames yourself, or InDesign can create them automatically when you paste or place text. Use this workflow to make plain text frames and change their page size and position.

### Create a text frame

Choose the Type tool.

On the page, drag diagonally to set the frame width and height.

When the frame is the size you want, release the mouse; a text insertion point appears inside the frame.

Tip

While dragging, hold Shift to constrain the frame to a square.

### Move a text frame

Choose the Selection tool.

Click the frame. Blue handles show on its corners and edges.

Move the frame by dragging it to the page position you want.

Tip

If the Type tool is active, move a frame by holding Ctrl (Windows) or Cmd (macOS) while dragging it. Release the modifier key to resume text editing.

### Resize a text frame

Choose the Selection tool, then click the text frame.

Resize the frame by dragging any corner or edge handle.

Release the mouse once the frame reaches the size you want.

Tip

Hold Shift while dragging a corner handle to preserve the frame's aspect ratio. Hold Ctrl (Windows) or Command (macOS) to scale the text inside the frame.

With the Selection tool, double-click a text frame handle to fit the frame around its contents. The bottom handle, for example, changes height, while the right handle changes width. Overset frames expand this way too, unless the text cannot fit on the page.

## Change text frame properties

Learn how to adjust columns, inset spacing, and baseline grids inside text frames in Adobe InDesign.

Use Text Frame Options to split one frame into columns, create edge padding around text, or align the frame to a custom baseline grid. These frame-level settings operate separately from text styling and can be stored in an object style for repeated use across several frames. Selecting Preview lets you watch changes update in real time.

Tip

To reuse the same properties on several text frames, create an Object Style and apply it to them.

### Add or modify columns

Open Object > Text Frame Options. As another route, use the Selection tool to double-click the frame while holding Alt (Windows) or Option (macOS).

On the General tab, go to Columns and enter the Number of columns you need.

Set the Width for each column and the Gutter (spacing) between columns.

Use Balance Columns when column widths should stay fixed as the frame is resized. When this option is active, horizontal resizing adds or removes columns instead of changing their width.

Note

Within a single text frame, InDesign does not support columns with unequal widths. For custom column layouts, use multiple threaded text frames placed side by side on the page or parent page.

### Adjust inset spacing

Open the General tab's Inset Spacing section, then enter offset distances for Top, Left, Bottom, and Right.

Under Vertical Justification, choose Align and then select Top, Center, Bottom, or Justify as needed.

Choose OK to apply the changes.

Inset spacing adds margins between the text content and the frame edges. This keeps text away from the frame border and improves readability, especially on frames that use strokes or fills.

Note

When the selected frame has a non-rectangular shape, Top, Left, Bottom, and Right are dimmed, and Inset appears instead.

## View word and character counts in text frames

Learn how the Info panel in Adobe InDesign shows live word and character counts for selected text or full stories.

As you edit text, InDesign tracks words and characters for a selection or for an entire story, including threaded text frames and overset text. Use these totals for publication limits, content-length control, or translation cost estimates.

Using the Type tool, click inside a text frame, or highlight the specific text to count.

Open Window > Info.

The Info panel reports these values:

- Characters: count of all characters, including spaces.
- Words: total number of words.
- Lines: count of text lines.
- Paragraphs: count of paragraph breaks.

The insertion point position within the text frame is also shown.

Note

When no text is selected, the Info panel reports the entire story; when text is highlighted, it reports only that selection; when text from multiple stories is selected, it reports each story separately. In threaded text frames, the totals cover the whole thread no matter which frame contains the insertion point.

## Set column rules for text frames

Learn how to improve readability and layout clarity in Adobe InDesign by adding vertical separator lines between columns.

Column rules are vertical lines between columns in multi-column text frames; they improve readability and give layouts a more finished appearance. They appear only when a frame has two or more columns, starting at the ascent of the top line and ending at the descent of the bottom line.

Tip

For one-column frames, or when you need custom dividers between separate text frames, use the Line tool or draw vertical rules manually.

### Access column rule settings

With the Selection tool, select the multi-column text frame.

Select Object > Text Frame Options.

Select the Column Rules tab.

### Configure column rule appearance

Select Object > Text Frame Options, then select Column Rules.

Select Insert Column Rules.

Set Weight to control the rule thickness.

Choose a Type, such as Solid, Dashed, or Dotted.

Select a Color, then adjust the Tint percentage if needed.

Select Preview to view changes while you adjust settings.

Select OK.

### Adjust column rule position

Select Object > Text Frame Options, then select Column Rules.

Select Insert Column Rules.

Change the Start and End values to shorten or lengthen rules within the frame.

To move rules left or right, enter an Offset value under Horizontal Position.

For professional print preparation, select Overprint Stroke.

Select OK.

Note

To keep column rule formatting consistent across several text frames, open Window > Styles > Object Styles. From the panel menu, create a new style and configure Text Frame Column Rule Options within the Basic Attributes.

## Open and use Story Editor

Learn how Story Editor in Adobe InDesign lets you edit text without layout distractions and view tracked changes.

Story Editor presents text as a simple continuous flow, which makes overset content easier to read, review, and edit. Every story opens in its own window with a consistent font and size, and edits update the layout right away.

### Open and Exit Story Editor for a text frame

With the Type tool, click inside the text frame you need to edit, or select more than one text frame.

Choose Edit > Edit in Story Editor.

Inspect the content there.

A. Vertical depth ruler B. Paragraph styles C. Drag divider to adjust column width D. Overset text indicator

Use the Story Editor window to review the content.

Choose Edit > Edit in Layout to return to layout view with the current text selection or insertion point still active.

### Configure Story Editor preferences

With the Type tool, click inside the text frame you need to change.

Choose Edit > Edit in Story Editor.

Choose Edit > Preferences > Story Editor Display (Windows) or InDesign > Preferences > Story Editor Display (macOS).

In Text Display Options, set the display font, size, line spacing, text color, background color, and theme you prefer.

Choose Enable Anti-aliasing to make text edges smoother, and choose an antialiasing type if you want one.

In Cursor Options, change the cursor appearance settings.

Choose Blink when you want the cursor to flash.

Choose OK.

Tip

For South-East Asian scripts, use the same font for the Story Editor display that the document uses, so characters appear correctly.

### Show or hide Story Editor components

With the Type tool, click inside the text frame you need to edit.

Choose Edit > Edit in Story Editor.

Choose View > Story Editor.

Choose the option you want to switch:

- Show Style Name Column or Hide Style Name Column: Shows or suppresses the paragraph style-name column at the left.
- Show Depth Ruler or Hide Depth Ruler: Shows or suppresses the vertical ruler for text depth and overset limits.
- Expand All Footnotes or Collapse All Footnotes: Sets footnotes to appear open or collapsed.
- Show Paragraph Break Marks or Hide Paragraph Break Marks: Shows or suppresses paragraph return symbols that indicate paragraph starts.

### View tracked changes and notes

Story Editor identifies note authors and tracked-change authors through workflow usernames. Each person's edits are color-coded according to Edit > Preferences > Notes (Windows) or InDesign > Preferences > Notes (macOS).

With the Type tool, click inside the text frame you need to edit.

Choose Edit > Edit in Story Editor.

To create a note while using Story Editor, click where the note anchor should go.

Choose Type > Notes > New Note.

Enter the note text between the note bookends that appear.

## Add text to documents

Bring text into Adobe InDesign documents in a way that fits your workflow.

InDesign supports several text-entry paths. Type short passages directly, paste text copied from other applications, or place word-processing files when you need longer formatted documents.

When you paste or place text without first selecting a text frame, InDesign builds the text frame automatically.

### Type text directly in a frame

Choose the Type tool.

Drag to make a new text frame, or click inside an existing frame to set the insertion point.

Enter the text. For a text frame inherited from a parent page, hold Ctrl + Shift (Windows) or Cmd + Shift (macOS), then select the frame.

### Paste text from other applications

Choose Edit > Preferences > Clipboard Handling (Windows) or InDesign > Preferences > Clipboard Handling (macOS).

Choose All Information to retain formatting, or Text Only to discard formatting.

Copy or cut text from another application or from an InDesign document.

Click in a text frame with the Type tool, or leave every frame deselected so InDesign creates one.

Choose Edit > Paste or Edit > Paste without Formatting.

Note

Pink, green, or other highlighting on imported text means one or more composition preference options are enabled. Choose Edit > Preferences > Composition (Windows) or InDesign > Preferences > Composition (macOS) to see which highlighting choices are active.

### Adjust spacing when pasting text

Automatic spacing adjustment applies mainly to Roman text, and it is available only when the Character panel sets the text language to a Roman language.

Choose Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

Choose Adjust Spacing Automatically When Cutting and Pasting Words.

Choose OK.

### Insert placeholder text

Placeholder text occupies the selected frame or the selected threaded frames. Replace it by selecting that text and entering new content.

Select one or more text frames, or click inside a frame with the Type tool.

Choose Type > Fill with Placeholder Text.

To supply custom placeholder content, create a text file named Placeholder.txt and save it in the InDesign application folder. InDesign then uses that file instead of the default Latin placeholder text.

## Generate text variations

Use Rewrite in Adobe InDesign to revise existing text or create new content.

Select text, or place the cursor in a text frame when you want to include the full story.

To open the Generate panel, use Generate Text on the Contextual Task Bar (Window > Contextual Task Bar). Generate is also available from Window > Generate, from the right-click menu, and through Generate Text in the Quick Actions section of the Properties panel.

Select Generate, and InDesign fills the text frame with placeholder text that follows the Paragraph Style or fonts already applied to the frame.

In the Prompt field, describe the output you want, then select Generate. The generated language follows the prompt language, not the language set for the document or text frame.

To revise existing text, select Rephrase, Shorten, Lengthen, or Fit Text to refine the text, and select Formal, Casual, Inspirational, Academic, Personal, or Comical to set the tone. These refinements use the language of the current text in the selected frame.

Note

- For updating or refining existing text, this feature works best with input text of up to ~1500 words.
- Fit Text consumes one credit for each generation; the other Rewrite options are free. Tone choices, other text-refinement choices, and text generated from a prompt do not deduct credits.
- Lengthen expands the text to 1.2 to 1.5 times its original length.
- Rephrase, Shorten, Lengthen, and tone changes remove footnotes, hyperlinks, cross-references, and text variables from the text frame. Fit Text keeps those elements.

Use the Generate panel to view, preview in the document, and choose among generated variations.

Select Done, or click anywhere outside the Generate panel, to commit the selected variation and replace the original text. After you commit, the other variations are no longer available.

## Use Creative Cloud text assets in InDesign documents

Store and place Creative Cloud text assets in Adobe InDesign.

Creative Cloud Libraries can store reusable text so you can place it in documents with or without links and formatting.

### Add a text asset

Using the Type tool, select a text object in the document.

Choose Windows > CC Libraries.

Choose the Add elements icon, then choose Text.

### Place a text asset in a document

Choose Window > CC Libraries.

Right-click, then choose one of these options:

- Place linked: Places the text as a linked asset. Changes to the library asset update in the document. Character and paragraph styles remain preserved.
- Place copy: Places the text with no link. Changes to the library asset do not update the document. Styles remain preserved.
- Place without styles: Places the text content alone; styles and links are omitted.

To create a linked text asset, drag an asset onto the document.

Drag an asset while pressing Alt to create a non-linked text asset.

For the Place inline option, use the Selection tool to select the insertion point inside the text frame, then right-click the text asset and choose Place inline.

Note

By default, InDesign brings the text asset into the document while keeping its character and paragraph attributes. For plain text without those styles, right-click the asset in the CC Libraries panel and choose Place without styles from the menu.

## Drag and drop text within InDesign

In Adobe InDesign, drag selected text to move or copy it across text frames, Layout View, and Story Editor.

Drag and drop gives you a quick way to reposition text without cut and paste. It works best for short selections in one document.

Dragging works in Layout view, in Story Editor, and between those views. For text from another document or another application, use copy and paste or the Place command.

Choose Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

Choose Enable in Layout View and Enable in Story Editor, then choose OK.

Hover over the selected text until the cursor changes, then drag the text.

Use any of these actions:

- To put the text in a different location, place the vertical bar where the text should appear, then release the mouse button.
- For a new frame, begin dragging, press Ctrl (Windows) or Command (macOS), then release the mouse button before releasing the key.
- To place the text without formatting, hold down Shift after dragging begins, then release the mouse button before you release the key.
- To copy the text, begin dragging, press Alt (Windows) or Option (macOS), then release the mouse button before releasing the key.

Tip

Modifier keys can be combined for advanced results. For example, Alt + Shift + Ctrl (Windows) or Option + Shift + Command (macOS) copies unformatted text into a new frame. Release the mouse button first, then release the modifier keys.

## Thread text frames

Connect frames so text flows continuously across Adobe InDesign pages and layouts.

Threading links text frames, allowing one story to continue from frame to frame as each fills. Each frame includes an in port and an out port for frame links. Empty ports identify a story's beginning or ending, arrows indicate connected frames, and a red plus sign in an out port icon signals overset text when no remaining frame can contain it.

To inspect the threading structure, choose View > Extras > Show Text Threads. Visual guides appear between connected frames to show the text-flow path.

### Add a new frame to a thread

Use this approach to make and connect a new text frame in a single step.

Select a text frame with the Selection tool.

Select the in port when the new frame should come before the selected frame, or select the out port when it should follow.

Thread text frames using the in port and out port to link frames.

A. In port with an arrow symbol B. An out port with a red plus sign (+) indicating overset text

Thread text frames using the in port and out port to link frames.

Place the loaded text cursor icon where the new frame should go.

Select or drag to create the frame.

As long as the loaded text pointer remains active, page turning, new-page creation, and zooming remain available. Choose any tool in the toolbar to cancel threading. No text is deleted.

### Add an existing frame to a thread

Use this approach to connect an unthreaded frame with an existing story.

With the Selection tool, select a threaded text frame.

Load the text cursor by selecting the in port or out port.

Move that loaded cursor over the frame you want to connect. It changes to the thread cursor icon.

Select inside the target frame to finish threading.

When a frame grid is threaded to a text frame, or to another grid with different settings, the destination inherits the source grid settings. Automatic jump lines can also be added to track threaded stories.

### Add a frame inside a sequence of threaded frames

Use this approach to place a frame between two frames that are already connected.

With the Selection tool, select the out port at the story position where the inserted frame should go.

When the loaded text cursor appears, drag to make a new frame, or select an existing unthreaded frame.

### Unthread text frames

Unthreading removes the link between one frame and every later frame in the thread. Text that had flowed into those frames becomes overset text, and no text is deleted. All later frames become empty.

With the Selection tool, select the frame.

Use one of these methods:

- Break the connection by double-clicking the in port or out port.
- For another method, click a threaded in port or out port so the text cursor loads, move the cursor over the connected frame until the unthread cursor icon appears, then select to remove that frame from the thread.

Tip

To split one story into two stories, cut the text meant for the second story, break the link between frames, and paste that text into the first frame of the new story.

### Cut a frame from a thread

With the Selection tool, select the frame. For multiple frames, press Shift while selecting each frame.

Choose Edit > Cut.

Go to the page where the frame should appear.

Choose Edit > Paste.

### Delete a frame from a thread

With the Selection tool, choose the frame you want to remove.

Press Backspace or Delete.

After removal, the frame is gone and the story continues into the following threaded frame. When that text frame has no connection to any other frame, deleting it also removes the text it contains.

## Set up smart text reflow

Configure Adobe InDesign so pages can be inserted or removed automatically while you type or edit text.

Smart Text Reflow responds to text-length changes by adding or deleting pages, which helps avoid overset text and unused blank pages. The feature relies on primary text frames, meaning text frames placed on a parent page; those frames need to be threaded and present on both left and right parent pages in facing-page documents.

Open Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

Enable Smart Text Reflow.

Choose the needed settings:

- Add Pages To: choose End of Story to place new pages directly after the active story, End of Section to place them at the close of the section, or End of Document to append them at the end of the document.
- Limit to Primary Text Frames: turn this on when automatic page handling should apply only to primary text frames on parent pages. Leave it off when manually threaded frames on separate pages should also reflow.
- Preserve Facing-Page Spreads: turn this on so reflow in the middle of a facing-page document adds two-page spreads and keeps left-page and right-page relationships intact.
- Delete Empty Pages: turn this on to remove pages automatically when editing shortens the text, as long as the emptied text frame is the page's only object.

Select OK to apply the chosen settings.

If Smart Text Reflow is used with text frames that do not come from parent pages, InDesign creates new pages with full-page, single-column text frames, no matter what attributes belong to the frame that receives the new threaded frame.

## Find and replace text

Find and replace text in Adobe InDesign documents, including text that is tied to formatting.

Open the InDesign document.

Choose Edit > Find/Change.

On the Text tab, type the search string in Find what. When the search should target and replace formatting attributes, leave Find what and Change to empty.

In the Find Format section, select the Specify attributes to find icon.

From the Find Format Settings dialog box, choose the formatting category, define the attributes, and select OK.

In the Change Format section, select the Specify attributes to change icon.

From the Change Format Settings dialog box, choose the formatting category, define the attributes, and select OK.

Select Find Next, then use Change, Change All, or Change/Find to replace the located text.

Note

For document-wide font listing, searching, and replacement, use Type > Find/Replace Font.

## Import text files

Bring text and spreadsheet files into Adobe InDesign by importing, linking, or embedding them.

Placing a text or spreadsheet file lets you choose import options that govern formatting, styles, tables, and related content. For large amounts of material from word-processing or spreadsheet applications, placing text is preferred because it gives more control than typing or pasting.

During import, decide whether files remain linked or become embedded, whether the incoming text uses an existing frame or a new one, and which formatting details are retained.

### Import text

Choose File > Place.

Browse to the text file and select it.

Turn on Show Import Options when you need to set formatting, styles, or other import controls before the file is placed.

Turn on Replace Selected Item when the incoming text should replace the contents of the currently selected frame; leave it off to make a new frame instead.

Select Open.

If import options were requested, set them and select OK.

Click a page location to draw a new text frame there, or click inside an existing text frame to insert the text into that frame.

### Link or embed imported text files

InDesign normally embeds placed text files instead of linking them back to the original file. You can switch this behavior so placed text files become links, making them manageable and updateable through the Links panel.

Updating linked text replaces any edits or formatting that were made in InDesign with content from the source file. Because that can overwrite work unintentionally, linked text files are not refreshed automatically.

Open a document if this preference should affect that document. Close every document if the preference should apply to documents created later.

Choose Edit > Preferences > File Handling (Windows) or InDesign > Preferences > File Handling (macOS).

Enable Create Links When Placing Text and Spreadsheet Files so placed files are created as links.

## Import options

Manage and customize file import settings in Adobe InDesign.

When Show Import Options is enabled in the Place dialog box (File > Place), InDesign shows settings specific to the chosen format before it imports text or spreadsheet files. Those settings control imported-content formatting, style preservation or mapping, and handling for special elements such as tables and footnotes.

### Microsoft Word and RTF import options

Note

Paragraph and character styles convert during import, but list styles do not.

## See also

- [Characters](uxp-characters.md)
