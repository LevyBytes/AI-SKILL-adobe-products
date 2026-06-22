# Editing Text (part 1)

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

With the Type tool active, use one of these methods:

Drag the I‑bar cursor across a character, a word, or an entire text block to make the selection.

Double-click a word; adjacent spaces are excluded.

Double-click a character to select neighboring characters of the same type. For example, if Roman text, kanji, and hiragana appear together in a paragraph, double-clicking a kanji selects the adjacent kanji in that continuous string.

Triple-click in a line to select that line. When the Triple Click To Select A Line preference is off, a triple-click selects the full paragraph instead.

When Triple Click To Select A Line is on, quadruple-click inside a paragraph to select the whole paragraph.

To select the whole story, quintuple-click, or click within the story and choose Edit > Select All.

Note

When the selected text includes a note anchor, these selection methods also select the note and its contents.

If text inside a frame cannot be selected, the frame may be on a locked layer or on a parent page. Unlock the layer or navigate to the parent page. Another possibility is that the text frame is under another text frame or a transparent object. See Select text in a frame that is covered.

## Editing text — Change what triple-clicking does

Choose Edit > Preferences > Type (Windows) or InCopy  > Preferences > Type (Mac OS). Turn on Triple Click To Select A Line to make triple-click select a line; this is the default. Turn the option off when triple-click should select a paragraph.

## Editing text — Select text in a frame that is covered

With the Selection tool, hold Ctrl (Windows) or Command (Mac OS) and click the text frame. Switch to the Type tool, then click inside the frame or select the desired text.

## Editing text — Paste text

Text can be pasted from another application or from Adobe InCopy.

In InDesign, pasting while the insertion point is outside any text frame creates a new plain text frame. When the insertion point is already inside a text frame, pasted material goes into that frame. If text is selected, the pasted content replaces the selection.

Edit > Paste Without Grid Format pastes into a frame grid while keeping the copied text's font, font size, and character spacing settings. To apply the frame-grid character attributes afterward, select text and choose Edit > Apply Grid Format.

## Editing text — Paste text from another application

To keep formatting and data such as styles and index markers, open Clipboard Handling in Preferences and select All Information under Paste. To strip those items and other formatting during paste, choose Text Only. In another application or in an InCopy document, cut or copy the text. Optionally select existing text or click in a text frame; otherwise the paste creates a separate new frame. Then choose one of the following:

Choose Edit > Paste. If some formatting is missing after the paste, modify the RTF document choices in the Import Options dialog box.

Choose Edit > Paste Without Formatting. Paste Without Formatting is unavailable when content from another application is pasted while Clipboard Handling Preferences is set to Text Only.

Choose Edit > Paste Without Grid Format.

Note

Text can also be dragged from another application into an InDesign document, or a text file or word-processing file can be inserted directly into an InDesign document from Windows Explorer or Mac OS Finder. In those cases, the text is added to a new frame. Shift-drag removes formatting. The Clipboard Handling setting determines whether items such as index markers and swatches are preserved.

## Editing text — Adjust spacing automatically when pasting text

When text is pasted, InCopy can insert or suppress spaces based on the surrounding text. A word cut from one place and dropped between two other words gets spacing on both sides; placing that word before a sentence-ending period does not add an extra space.

Note

This spacing behavior is meant mainly for Roman text. It works only when the Roman text being pasted has a Roman language assigned in the Character panel.

Open Edit > Preferences > Type (Windows) or InCopy > Preferences > Type (Mac OS). Enable Adjust Spacing Automatically When Cutting And Pasting Words, then click OK.

## Editing text — Paste text to a frame grid

InCopy can paste copied text while keeping formatting attributes from its source. If text with changed attributes is copied from one frame grid into another frame grid, only those altered attributes are retained after the paste. Pasting without grid formatting is also available.

Cut or copy text from another application or from an InCopy document. In the frame grid, show the text insertion point or select the text range to replace. Use one of these commands:

To make pasted text follow the grid format, choose Edit > Paste.

To insert the text without grid formatting, choose Edit > Paste Without Grid Format.

Grid formatting can still be applied afterward with Edit > Apply Grid Format. The text receives the grid format attributes defined in the Named Grids panel.

## Editing text — Apply grid format to text

Grid format can be assigned to text that is not currently matching the grid format.

Select the text, then choose Edit > Apply Grid Format.

## Editing text — Change the text direction

Select the text frame. Use either method:

Choose Type > Writing Direction > Horizontal or Vertical.

Choose Type > Story to open the Story panel. For Story Direction, select Horizontal or Vertical.

Galley view and Story view display text horizontally, even when Vertical is selected. Layout View displays the text vertically when Vertical is selected.

Changing the setting converts a vertical text frame or frame grid to horizontal, or converts a horizontal text frame or frame grid to vertical. The change applies to the whole story and affects every frame threaded to the selected frames.

Note

For character-level direction changes inside a frame, use Tate-chu-yoko or the Character Rotation feature in the Character panel.

## Editing text — Drag and drop text

InDesign lets you move text with the mouse in the Story Editor or in Layout View. Text can be dragged between the Story Editor and the layout window, or into some dialog boxes, including Find/Change. When the source is a locked or checked-in story, the drag operation copies the text instead of moving it. During drag and drop, you can also copy the text or create a new frame.

InCopy supports mouse-based text drag and drop in Galley View, Story View, and Layout View. Text can also be dragged into certain dialog boxes, such as Find/Change. If the story is locked or checked in, dragging copies the text rather than moving it. Copying during a drag is also supported.

For a drag-and-drop walkthrough, Jeff Witchel provides the video tutorial Using InDesign Drag and Drop Text.

Turn on drag and drop from Edit > Preferences > Type (Windows) or InCopy > Preferences > Type (Mac OS). Enable one or more of these options: Enable In Layout View, Enable In Story Editor (InDesign), or Enable In Galley/Story View (InCopy), then click OK. Select the text to move or copy. Hover on the selection until the drag and drop icon appears, then drag the text.

During the drag, the selected text stays where it is. A vertical bar marks the insertion position that will be used when you release the mouse button, and that bar appears in each text frame the pointer passes over.

Use any of these actions:

To place the text in another location, put the vertical bar where the text should be inserted, then release the mouse button.

To place the text in a new frame, begin dragging, hold Ctrl (Windows) or Command (Mac OS), and release the mouse button before releasing the key.

To place the text without formatting, begin dragging, hold Shift, and release the mouse button before releasing the key.

To copy the text, begin dragging, hold Alt (Windows) or Option (Mac OS), and release the mouse button before releasing the key.

Note

Modifier keys can be combined. For example, to copy unformatted text into a new frame, begin dragging and hold Alt+Shift+Ctrl (Windows) or Option+Shift+Command (Mac OS).

If the dropped text has incorrect spacing, enable the Adjust Spacing Automatically option in Type Preferences.

## Editing text — Transpose characters

The Transpose command fixes two neighboring characters that were typed in the wrong order. For instance, if 1243 was entered instead of 1234, Transpose swaps the 4 and the 3.

Put the insertion point between the two characters to swap. Choose Edit > Transpose.

Note

Transpose works only with characters and numbers in stories. It does not move InCopy note anchors, tables, spaces, or other nonprinting characters. Locked stories cannot use Transpose.

## Editing text — View hidden characters

During text edits, showing nonprinting characters can help you see spaces, tabs, and paragraph symbols. These marks appear only in the document window and do not appear in printed or exported output.

Nonprinting characters hidden (top) and visible (bottom)

Nonprinting characters hidden (top) and visible (bottom)

Use one of these methods:

Choose Type > Show Hidden Characters. The menu command displays a check mark when active.

Click the Show Hidden Characters button on the horizontal toolbar.

## Editing text — Edit text on a parent page

In InDesign documents, a parent page acts as a template for multiple pages. Parent pages usually hold recurring layout elements used throughout the document, including margins, page numbers, headers, and footers. InCopy can edit text on an InDesign parent page when that text is a linked file. It cannot change frame attributes controlled by the parent, and parent-page text cannot be edited from other regular pages in the document.

Note

If a nonlocked text frame on a regular page will not accept an insertion point, the text may belong to a parent page. Ask the person who created the frames and the design team to confirm.

If the document is not already in Layout view, choose View > Layout View. In the page box at the lower-left of the document window, choose the parent page.

On the parent page, select the text to edit and make the changes.

Editing text on a parent page requires the parent page to contain managed stories that are checked out.

## Editing text — Undo actions

InCopy can undo or redo as many as several hundred recent actions. The available undo depth depends on installed RAM and on the types of actions performed. Saving, closing, quitting, or exiting clears the recent-action record, so those actions are no longer available for undo. You can also cancel an operation before it finishes or return content to an earlier saved version.

Use any of these commands:

To reverse the latest change, choose Edit > Undo [action]. Some actions, including scrolling, cannot be undone.

To restore an action that was just undone, choose Edit > Redo [action].

To discard all changes since the project was last saved, choose File > Revert Content.

To interrupt a change that InCopy is still processing, such as one shown with a progress bar, press the Escape key.

To exit a dialog box without using its changes, click Cancel.

## Editing text — Jump to a position marker

A position marker works like a bookmark for a location in a document. Use it when you need a fast return point, especially for a place you visit often. Each document can contain only one position marker.

Put the insertion point where the marker should be added. Choose Edit > Position Marker > Insert Marker. If a marker already exists, choose Replace Marker.

To return there from any document location, choose Edit > Position Marker > Go To Marker.

To delete the marker, choose Edit > Position Marker > Remove Marker. Closing and reopening the document also removes the marker automatically.

## Editing text — Add column, frame, and page breaks

Insert special break characters into text to control column, frame, and page breaks.

With the Type tool, click where the break should be placed. Choose Type > Insert Break Character, then select a break option from the submenu.

Note

Breaks can also be inserted with the Enter key on the numeric keypad. Press Enter for a column break, Shift+Enter for a frame break, and Ctrl+Enter (Windows) or Command+Return (Mac OS) for a page break.

To delete a break character, choose Type > Show Hidden Characters so nonprinting characters are visible, then select and remove the break character.

Note

When paragraph settings create a break, as in the Keep Options dialog box, the break is placed before the paragraph that contains that setting. A break made with a special character is inserted immediately after that character.

## Editing text — Break options

These options are available from the Type > Insert Break Character menu:

Column break

Moves following text to the next column in the current text frame. If that frame contains only one column, the text continues in the next threaded frame.

Frame break

Moves following text into the next threaded text frame, regardless of how columns are configured in the current text frame.

Page break

Moves following text to the next page that has a text frame threaded to the current text frame.

Odd page break

Moves following text onto the next odd-numbered page whose text frame is threaded to the current frame.

Even page break

Moves following text onto the next even-numbered page whose text frame is threaded to the current frame.

Paragraph Return

Adds a paragraph return, equivalent to pressing Enter or Return.

Forced Line Break

Breaks the line at the inserted character and starts a new line without creating a new paragraph, equivalent to pressing Shift+Enter or Shift+Return. A forced line break is also known as a soft return.

Discretionary Line Break

Marks a point where a line of text may break if needed. A discretionary line break works like a discretionary hyphen, except no hyphen is added at the break.

Related break controls are also found in the Keep Options dialog box and the Paragraph Style Options dialog box.

## Editing text — Use conditional text

Conditional text lets one document hold alternate versions of the same content. After conditions are created, they are assigned to ranges of text. Different document versions are produced by showing some conditions and hiding others. For example, a computer manual can have separate Mac OS and Windows conditions. To print the Mac OS user guide, show text carrying the "Mac" condition and hide text carrying the "Windows" condition. For the Windows user guide, reverse those visibility states.

Conditional text shown

A. All conditions shown B. Conditional indicators

Conditional text shown Conditional text hidden

A. "Mac" condition hidden B. Hidden condition symbols

Conditional text hidden

Only text can receive conditions. Anchored objects can be made conditional only by selecting the anchored object marker. Conditions can be assigned to text inside table cells, but not to the table cells, columns, or rows themselves. Locked InCopy stories do not accept conditional text.

For a video tutorial on conditional text, see www.adobe.com/go/lrvid4026_id.

## Editing text — Planning conditional documents

When preparing a conditional-text project, review the material itself and consider how multiple contributors may hand it off. Consistent treatment of conditional text makes the document easier to use and maintain. Follow these guidelines.

Number of versions

Decide how many finished versions the project needs. For example, a manual for a program that runs on both Windows and Mac OS might require at least two outputs: a Windows version and a Mac OS version. If editorial comments must be present in some review drafts and absent in others, the set grows to Mac OS with comments plus Mac OS without comments, along with Windows with comments plus Windows without comments.

For heavily conditional documents, define condition sets so the document can be switched quickly between versions.

Number of condition tags required

Work out the number of condition tags needed to generate the planned versions. Each version is identified by a distinct combination of condition tags. In a finished Windows manual, for example, the Windows condition tag might be showing while the Mac OS condition tag and Comments condition tag are hidden. With that setup, decide whether Windows comments and Mac OS comments need separate condition tags or whether one shared condition tag should cover comments for both platforms.

Organization of content

Assess how much of the document should be conditional and arrange the material to keep authoring and maintenance manageable. A book might be structured so conditional text appears in only a few documents. Another approach is to keep alternate versions of a chapter in separate files, then use a different book file for each book version.

For some cases, including multilingual work, separate layers may be a better choice than conditions. Those layers can be shown or hidden, with each layer containing text for a different language.

Tagging strategy

Choose the smallest unit that will be made conditional. When a document will be translated, use a full sentence as the minimum conditional unit. Because translation can change word order, marking only part of a sentence as conditional can make translation harder.

Apply conditions to spaces and punctuation consistently; otherwise, extra spaces or misspelled words can result. If conditional text starts or ends with punctuation, include that punctuation in the condition. This keeps the text readable when multiple versions are visible.

To prevent word-spacing issues, such as an unconditional space followed by a conditional space, define a rule for spaces after conditional text: make them either always conditional or always unconditional.

Set a consistent sequence for conditional text and use that order everywhere in the document to avoid confusion.

Indexes and cross-references

For indexing, note whether index markers sit inside or outside conditional text. Index markers that are hidden with conditional text are omitted from the generated index.

When a cross-reference points to conditional text, ensure that the source text has the same condition. For example, if a cross-reference is inserted in a "Windows" paragraph but the text anchor is in a "Mac" condition, hiding the "Mac" condition leaves the cross-reference unresolved. The Hyperlinks panel shows "HT" next to that cross-reference.

After changing visibility settings for a condition that affects text in a cross-referenced paragraph, update the cross-reference.

## Editing text — Create conditions

Newly created conditions are stored in the current document. If no document is open at creation time, the condition is added to every new document you create.

Condition indicators, such as wavy red underlines, can make conditional text easier to recognize.

In managed InCopy files, existing conditions can be applied, but conditions cannot be created or deleted. InCopy can hide or show conditional text, although those visibility changes do not appear in InDesign after the managed file is checked in. In standalone InCopy documents, conditions can be created, applied, and shown or hidden the same way they can in InDesign.

Choose Window > Type & Tables > Conditional Text to show the Conditional Text panel. From the Conditional Text panel menu, choose New Condition, then enter a condition name. In the Indicator group, define how the indicator for that condition should appear.

By default, indicators such as wavy red lines appear in the document but are not printed or output. The Indicators menu in the Conditional Text panel can hide indicators or include them in print and output, which is useful for review.

Click OK.

## Editing text — Apply conditions to text

The same text can have more than one condition applied. By default, condition indicators mark conditional text. If indicators are hidden, the Conditional Text panel can still show which conditions apply at the current selection. A solid check mark means the condition applies to the current text; a dim check mark means the condition applies to only part of the selection.

Select the text that should receive the condition. In the Conditional Text panel (Windows > Type & Tables > Conditional Text), use one of these actions:

To apply a condition, click the condition or click the box beside the condition name.

To assign one condition and clear any others on that text, Alt-click (Windows) or Option-click (Mac OS) a condition.

To clear a condition, use the box beside the condition name to remove its check mark. Alternatively, click [Unconditional] to clear every condition from the selected text.

Note

Specific conditions cannot have keyboard shortcuts assigned to them. Conditions can still be applied with Quick Apply.

## Editing text — Show or hide conditions

Hiding a condition hides every text range assigned to that condition. Page numbering in a document or book often changes when conditions are hidden. Smart Text Reflow can add or remove pages automatically as conditions are shown and hidden.

The document generally treats hidden conditional text as absent. It is skipped for printing, export, searching, and spell-checking; index markers inside it are left out of a generated index.

When a condition is hidden, its text is kept inside a hidden condition symbol. If selected text contains a hidden condition symbol and you try to delete it, InCopy asks for confirmation before deleting the hidden conditional text. Hidden conditional text cannot receive other conditions, styles, or formatting.

Text with multiple conditions remains visible when at least one applied condition is shown, even if another applied condition is hidden.

- To show or hide one condition, click the visibility box beside the condition name. The eye icon means the condition is visible.
- To show or hide every condition, choose Show All or Hide All from the Conditional Text panel menu.

## Editing text — Use condition sets

A condition set stores the visibility state of every condition, allowing different document renditions to be applied quickly. Example: a complex document might include platform conditions named Mac OS, Windows XP, Vista, and UNIX; language conditions named English, French, German, and Spanish; plus editorial conditions such as Editorial Review and Internal Comments. For a French review of the Vista version, create a set that shows Vista, French, and Editorial Review while hiding all other conditions.

Sets are optional, but they make repeated changes to condition visibility faster and more dependable.

Apply conditions to text as needed. If the Set menu is not visible, choose Show Options from the Conditional Text panel menu. Set each condition to visible or hidden as required. From the Set menu, choose Create New Set, enter a name for the set, and click OK.

The new set is now the active set.

Use one of these actions:

To use a condition set in a document, choose its name from the Set menu.

For an override, first make the set active, then change the visibility setting for any condition. A plus sign (+) appears beside the condition set. Select the condition set again to remove overrides. Choose Redefine "[Condition Set]" to save the new visibility settings into the condition set.

To delete a condition set, select it, then choose Delete "[Condition Set]." Removing a condition set does not remove its conditions and does not remove those conditions from text where they are applied.
