# Text Changes, Tracking Reviewing Changes, Using Editorial Notes, Using Text Macros

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Text changes; Tracking and reviewing changes — Track changes; Using editorial notes — About editorial notes; Using text macros — Create a text macro.

## Text changes

New Eyedropper tool

With the Eyedropper tool, copy text formatting from a selected text range and apply it to another text range. The Eyedropper Tool Options dialog box controls which attributes are applied. See Copy type attributes (Eyedropper).

Paragraphs that span columns

In InCopy CS5, a paragraph can span more than one column. Within the same text frame, a paragraph can also be split into multiple columns. For related guidance, see the topic Create paragraphs that span or split columns.

Caption variables

In InDesign CS5, captions can be generated from image metadata in several ways. Live captions rely on a new text variable named Metadata Caption. Caption text variables can be created or edited for use in InDesign. See Define caption variables.

## Tracking and reviewing changes — Track changes

Track Changes lets an editorial team see how each contributor has altered a story during writing and review. When someone adds, removes, or relocates text in an existing story, InDesign marks that edit in Story Editor, while InCopy shows it in Galley and Story views. After review, each marked edit can be accepted or rejected.

InDesign provides the Track Changes panel for turning tracking on or off, showing or hiding edits, and accepting or rejecting contributor changes. InCopy provides the same controls through the Track Changes toolbar.

Change tracking shown in Story Editor (InDesign)

A. Change bars B. Added text C. Deleted text D. Moved text (from) E. Moved text (to)

Change tracking shown in Story Editor (InDesign)

### Tracking and reviewing changes — Turn on change tracking

Open the Track Changes controls by choosing Window > Editorial > Track Changes for the Track Changes panel (InDesign), or Window > Track Changes for the Track Changes toolbar (InCopy).

Place the insertion point in text, then use any needed action:

Click Enable Track Changes In Current Story when tracking should apply just to the current story.

(InDesign) To cover every story, choose Enable Track Changes In All Stories on the Track Changes panel menu.

(InCopy) In a multistory document, choose Changes > Enable Tracking In All Stories to track every open story.

Edit the story by adding, deleting, or moving text as required.

Note

After Track Changes is enabled, Galley view and Story view show a track changes icon at the right end of the Story bar.

### Tracking and reviewing changes — How change tracking is displayed

After Track Changes is enabled, edits use these default indicators in Story Editor (InDesign) and in Galley and Story views (InCopy):

Note

In the Preferences dialog box, the Track Changes section provides a color choice for identifying your edits. The same section also controls which edit types are tracked, including adding, deleting, and moving text, and how the tracking markup appears.

Added text

Shown with highlighting.

Deleted text

Shown with highlighting and a strikethrough.

Moved (cut-and-pasted) text

At the original position, shown with highlighting and a strikethrough; at the destination, shown with highlighting and a box.

Note

When text is cut from one document and pasted into another, the first document shows that text as deleted, and the destination document shows it as added.

Copied text

Highlighted at the copied-to position. The source text remains unchanged.

Change bars

A change bar is a vertical line at the left side of a text line that contains an edit. While working, you can show or hide change bars. You can also set the color used to display the change bars.

### Tracking and reviewing changes — Show or hide changes

If tracked edits are hidden, the story is displayed as though change tracking were off: inserted text remains visible, deleted text is not shown, and moved or pasted material appears at its insertion point.

(InDesign) With change-tracking enabled, edits are recorded whether you work in Story Editor or in the document layout. Tracked edits are visible only in Story Editor, not in the layout.

(InCopy) With change-tracking enabled, edits are recorded in Galley, Story, and Layout view. Tracked edits are visible only in Galley and Story views, not Layout view.

Click Show/Hide Changes in the Track Changes panel (InDesign) or the Track Changes toolbar (InCopy).

### Tracking and reviewing changes — Turn off change tracking

Put the insertion point in text, then choose the needed action:

Click Disable Track Changes In Current Story when tracking should stop only in the current story.

(InDesign) To stop tracking across every story, choose Disable Track Changes In All Stories on the Track Changes panel menu.

(InCopy) In a multistory document, choose Changes > Disable Tracking In All Stories to stop tracking in every open story.

Note

Turning tracking off prevents later edits from being tracked. Changes that were already tracked remain unchanged.

### Tracking and reviewing changes — View change information in the Track Changes panel

Choose Window > Track Changes.

Place the insertion point inside a change. The Track Changes panel then shows the change date, time, and other related details.

### Tracking and reviewing changes — Accept and reject changes

After a story contains tracked edits, whether made by you or another contributor, change tracking gives you a review workflow for deciding which edits become part of the story. You can approve or decline one change, part of a tracked change, or every change together.

Accepted changes become regular text in the story flow and lose their change highlighting. Rejected changes restore the text to its state before the edit.

Place the insertion point at the story start in Story Editor (InDesign) or in Galley or Story view (InCopy).

Click Next Change in the Track Changes panel (InDesign) or the Track Changes toolbar (InCopy).

Use any of these actions:

- Click Accept Change to keep the highlighted edit and merge it into the text flow.
- Click Reject Change to discard the edit and restore the original text.

Note

For a selected edit that should be accepted or rejected with an immediate move forward, Alt-click (Windows) or Option-click (Mac OS) Accept Change or Reject Change.

Use Previous Change to go back; use Next Change to skip the current edit and advance.

Use Accept All Changes In Story to approve every edit without individual review, or Reject All Changes In Story to decline them all.

For accepting or rejecting all edits in the story or document, or all edits from a particular participant, use the appropriate option from the Track Changes panel menu (InDesign) or the Changes menu (InCopy).

Note

If you reverse your decision after accepting or rejecting an edit, undo it with Edit > Undo, Ctrl+Z (Windows), or Command+Z (Mac OS).

An Accept All Changes or Reject All Changes command also affects hidden conditional text.

### Tracking and reviewing changes — Set Track Changes preferences

Track Changes preferences control several tracking behaviors. You can set the color that identifies your edits and choose which edit categories are tracked: adding, deleting, or moving text. The same preferences define each tracked-change style and can add colored margin bars.

Choose Edit > Preferences > Track Changes (Windows) or InCopy > Preferences > Track Changes (Mac OS).

Choose each change type that should be tracked.

For every change type, choose the marking method and the text and background colors.

Enable Prevent Duplicate User Colors so each user receives a distinct color.

To display change bars, select Change Bars. Use the Change Bar Color menu for the bar color, then choose the left or right margin.

To spell-check deletion-marked content, select Include Deleted Text When Spellchecking.

Click OK.

### Tracking and reviewing changes — Change the user name and color

Close every open story. Choose File > User. Enter the user name and color that change tracking and notes should use, then click OK.

### More like this

- Using editorial notes

## Using editorial notes — About editorial notes

Editorial notes are short comments or annotations intended for you or other contributors. In Galley and Story views, every note appears inline within the text, with note content placed between note bookends. In Layout view, a note anchor marks each note. The Notes panel shows the note content, and user-specific colors can be applied.

Note bookends shown in Galley view (left) and Note anchor shown in Layout view (right)

Note bookends shown in Galley view (left) and Note anchor shown in Layout view (right)

### Using editorial notes — Notes panel overview

The Notes panel shows the note author, last-modified date and time, story label, page number, current note number out of the total notes, character and word counts, and note content.

Notes panel

A. User color B. Show/Hide notes C. Go to note anchor D. Go to previous note E. Go to next note F. New note G. Delete note

Notes panel Note

No matter which view is active, the Notes panel content is presented the same way.

### Using editorial notes — Open the Notes panel

Use one of these methods:

Choose Window > Notes.

In Layout view, choose Notes > New Note.

### Using editorial notes — Use Notes Mode

Notes Mode provides a quick route to create, split, or delete notes based on the insertion-point position or the selected text.

Use any needed setup:

New note: position the insertion point in text.

Text-to-note conversion: select the text.

Note split: position the insertion point within a note.

Note-to-text conversion: select the note bookends (in Galley view or Story view).

Insertion point outside a note: place it at the note beginning or note end.

Choose Notes > Notes Mode.

### Using editorial notes — Add a note

Use either method:

With the Type tool, click the note location, then choose Notes > New Note.

With the Note tool, click where the note should be placed.

In Layout view, adding a note opens the Notes panel when it is not already open.

In Galley or Story view, enter the note text between the note bookends. In Layout view, enter the note text in the Notes panel.

Notes can be added wherever you need them, with no limit on count. A note cannot be created inside another note.

Notes Mode can also be used to add a note.

### Using editorial notes — Convert text to a note

Select the text to place into a new note. Choose Notes > Convert To Note.

This creates a new note. The selected text is removed from the story body and inserted into the new note. The note anchor or bookend is placed at the position where the selected text was removed.

Notes added to a linked InCopy story also appear in the matching InDesign story, where they can be edited.

Notes Mode can also convert text to a note.

Note

Keyboard shortcuts can be assigned for converting a word, line, paragraph, or story into a note. Choose Edit > Keyboard Shortcuts, then choose Notes Menu from the Product Area menu. Add the shortcut to the command, then click OK.

### Using editorial notes — Convert notes to text

Open the Notes panel. In the Notes panel, select the text to add to the document text. Alternatively, in Galley view, select text inside the inline note. Choose Notes > Convert To Text.

Notes Mode can also convert notes back to text.

Note

When only part of the note content is selected during conversion to text, the original note is split into two notes, and the converted content appears between those two new notes.

### Using editorial notes — Navigate between notes

Moving through notes shifts the active text insertion point from the current note anchor to the next or previous note anchor. In Layout view, click the Go to Note Anchor button to show the anchor tied to the note currently displayed in the Notes panel.

Click inside a story's content. Use one of these actions:

Choose Notes > Previous Note or Notes > Next Note.

In the Notes panel menu, choose Previous Note or Next Note.

In the Notes panel, use Go To Previous Note or Go To Next Note.

Note

In Galley and Story views, Find/Change can locate notes. The Notes section in the Preferences dialog box includes a setting for searching notes with Find/Change.

### Using editorial notes — Split a note

In the Notes panel or in the note content, place the insertion point where the note should be split.

A note cannot be split when the insertion point is at the start or end of the note, or when the note has no content.

Use either action:

From the Notes menu, choose Notes > Split Note.

From the Notes panel menu, choose Split Note. After the split, the active text insertion point sits between the two notes.

Notes Mode can also split a note.

### Using editorial notes — Expand or collapse notes

Expanded notes show their content between the bookends. As note content is entered, the bookends move farther apart to fit the text. Collapsing the bookends hides the note content.

With the Type tool selected, click either the begin-note bookend or the end-note bookend. If a note container contains the insertion point, choose Notes > Collapse Note.

For every note in the active story, choose Notes > Expand/Collapse Notes In Story to expand or collapse them together.

### Using editorial notes — Select and open a note in Layout view

In Layout view, a note anchor marks where a note is located. The Notes panel shows the note's contents and specific details about that note.

Activate the Type tool or Note tool. Hover over the note anchor; when the pointing-hand pointer appears, use one of these actions:

Click the note anchor.

Choose Notes > Previous Note or Notes > Next Note.

### Using editorial notes — Edit a note

- In Galley view or Story view, choose the Type tool, click inside the target note between its bookends, and revise the note text.
- In Layout View, use the Type tool to click the note anchor; edit the opened note in the Notes panel.

### Using editorial notes — Check spelling or find/change text in notes

Open the Galley or Story view tab. Expand any notes that need spell-checking or text search. To open every note, use Notes > Expand/Collapse Notes In Story. Then run Edit > Spelling > Check Spelling or Edit > Find/Change.

Note

When Change All is used during spelling or Find/Change work, collapsed note text is skipped in Galley View or Story View. In Layout View, every matching occurrence is replaced.

### Using editorial notes — Move or duplicate notes

Notes can be moved or copied.

### Using editorial notes — Move or duplicate notes in Galley and Story views

Select the note by using Shift+Alt-click (Windows) or Shift+Option-click (Mac OS) on either the start-note or end-note bookend. Then choose one action:

Move it by dragging the selected note.

Copy it by Shift-dragging the selected note.

### Using editorial notes — Duplicate a note anchor in Layout view

Use either method:

With the Type tool, drag over the note anchor until it is highlighted, and then choose Edit > Copy. Paste the copied anchor somewhere else.

With the Note tool or Type tool, hold Shift while dragging the anchor to the text location where it should be placed.

### Using editorial notes — Delete notes

- For one note, select it with Shift+Alt-click (Windows) or Shift+Option-click (Mac OS) on the start-note or end-note bookend, and then choose Notes > Delete Note.
- For all notes in the active story, choose Notes > Remove Notes From Story.
- For every note in the document, choose Notes > Remove All Notes.

### Using editorial notes — Printing and exporting notes

InCopy can print document notes along with the document itself. Notes can also be exported from InCopy as PDF annotations, but table-contained notes are excluded from PDF annotation export.

### Using editorial notes — Specify note preferences

Use Note preferences to set the colors used for inline note anchors, bookends, and backgrounds in Galley and Story views. These settings also govern note tool tips and whether Galley and Story view Find/Change operations and spell checking include note content.

Open Edit > Preferences > Notes (Windows) or InCopy > Preferences > Notes (Mac OS). From the Note Color menu, choose the color for note anchors and note bookends. Choose [User Color] to apply the color defined in the User dialog box, which helps distinguish contributors in a shared file. Choose Show Note Tool Tips to display note information and note content, in whole or in part, when the pointer pauses over a Layout view note anchor or over a Galley or Story view note bookend. Set whether inline note content is included when using Find/Change and Spell Check commands (Galley and Story views only).

Note

In Layout view, Find/Change and Spell Check cannot search note contents, regardless of the Preferences dialog box settings. Change All, however, still edits note contents.

For the background color of an inline note, select either [None] or [Note Color] (the color chosen earlier). Confirm with OK.

For note visibility, use View > Show Notes or Hide Notes.

Related topics:

### More like this

- Keys for working with text
- Printing
- Exporting to Adobe PDF
- Change the user name and color

## Using text macros — Create a text macro

A textmacro acts as a shortcut for a keystroke sequence. It may be simple, such as entering a frequently used word or phrase, or more complex, such as a formatted address. The macro code is the name assigned to the text macro. For example, rather than repeatedly typing "Centers for Disease Control and Prevention," you can define a macro code such as "cdc" that expands to the full name.

Choose Window > Text Macros. To build a text macro from existing content, first highlight that document text. From the Text Macros panel menu, choose New Macro; alternatively, use the New Macro button in that panel. In the Macro Code text box, enter the macro code. Macro codes are case-sensitive.

The code is added to the Text Macros list.

In Macro Text, enter the text string that should appear when the text macro is activated. To preserve attributes from existing text during insertion or swapping, select Remember Text Attributes.

Unless changed, inserted or swapped macro text takes the style attributes from the destination paragraph.

To set a keyboard shortcut that activates the macro, click in the Macro Key Shortcut text box and press the desired key combination.

Shortcuts are particularly helpful when Automatically Swap Macro Text is turned off in the Text Macros panel.

If the chosen keyboard shortcut already belongs to another function, the dialog box shows an alert symbol at the bottom and displays "Currently Assigned To: [function]." Assigning that shortcut to the macro overrides the earlier shortcut function.

Click OK.

Macro codes can turn into macro text automatically during typing, through a macro key shortcut, or through Swap Macro Text in the Text Macros panel menu.

### Using text macros — Edit a text macro

In the Text Macros panel list, double-click the target text macro. You can also select the macro and use the Edit Text Macro button in the Text Macros panel. Make the revisions in the text box, and then click OK.

### Using text macros — Duplicate a macro

The Duplicate Macro command makes a copy of an existing macro. The copy keeps the original macro code with a number appended, and it appears directly after the original macro in the Text Macros panel. For example, duplicating "DOT" creates a copy named "DOT1."

In the Text Macros panel list, select the text macro to duplicate. Choose Duplicate Macro from the Text Macros panel menu.

### Using text macros — Delete a text macro

In the Text Macros panel list, select the text macro that should be removed. Choose Delete Macro from the Text Macros panel menu.

Note

A deleted macro cannot be restored with Undo.

### Using text macros — Insert or swap macro text

Macro text can be inserted in three ways: run Insert Macro Text at the insertion point, let macro text appear automatically while typing, or swap existing text for macro text.

### Using text macros — Insert macro text automatically

When Automatically Swap Macro Text is selected, typed macro codes turn into macro text automatically. For example, after creating a macro code named "cdc," type cdc followed by a word-ending character such as a space or period, and Center for Disease Control and Prevention appears. Macro codes remain case-sensitive.

Confirm that Automatically Swap Macro Text is selected from the Text Macros panel menu. Its selected state is indicated with a check mark. Enter the macro code, then add a word-ending character (space, comma, period, or paragraph return).

Note

To bring back the macro code text, choose Edit > Undo until the code appears again.

### Using text macros — Insert macro text at the insertion point

Insert Macro Text puts the selected macro text at the current insertion point.

With the Type tool, click where the macro text should be inserted. Use one of these actions:

Press the macro keyboard shortcut for the macro you need.

In the Text Macros panel, select the macro. Then choose Insert Macro Text from the panel menu, or use the Insert Macro Text button.

### Using text macros — Swap text with macro text

Swap Macro Text checks the text immediately before the current insertion point for a defined macro code (case-sensitive). When it finds one, the command deletes that code and inserts the associated macro text. For example, suppose you created a text macro for Centers for Disease Control and Prevention with CDC as the macro code. To use it, type The CDC, place the insertion point immediately after the macro code, and choose Swap Macro Text. InCopy examines the text just before the insertion point and changes CDC to the macro text Centers for Disease Control and Prevention.

With the Type tool, click immediately after the macro code that should be replaced, or select the replacement target text. Use the Text Macros panel menu command Swap Macro Text, or choose Edit > Swap Macro Text.

Note

Swap Macro Text does not scan the whole document for each occurrence of the macro code. Use Find/Change when all instances of a word or phrase need to be found and replaced.
