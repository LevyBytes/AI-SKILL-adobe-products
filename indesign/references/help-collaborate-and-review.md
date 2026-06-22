# Track Changes And Review

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Collaborate and review; Track text changes; Review tracked text changes; Set preferences for Track Changes; Add and manage editorial notes.

## Collaborate and review

### Track changes and review

Track text changes

Review tracked text changes

Set preferences for Track Changes

Add and manage editorial notes

### Share and collaborate

Share for review overview

Share documents with review links

Review a shared InDesign document

Manage feedback for shared documents

Edit InDesign documents with InCopy on the web (beta)

View custom fonts

Invite collaborators to edit cloud documents

Import PDF comments

Create and share projects

Add files to projects

### Edit with InCopy

About assignment files between InDesign and InCopy

Set user identification

Set up assignment packages for InCopy workflows

Create and manage assignments

Relink or unlink assignment files

Open and update managed content

Check in and check out content

Save managed layout changes

Workflow icons for managed files

## Track text changes

This section covers using Track Changes in Adobe InDesign to inspect edits contributed by more than one person.

When contributors add, delete, or move text, change tracking records each edit during the editorial process. Editors can keep collaborative revisions under control by reviewing the marked changes and approving them before they become final.

### Turn on Track Changes

Choose Window > Editorial > Track Changes.

Place the cursor in the text where tracking should begin.

In the Track Changes panel, select the Enable Track Changes in Current Story icon.

To begin tracking in every story at the same time, open the Track Changes panel menu and select Enable Track Changes In All Stories.

Edit the text; the edits are then tracked.

### View change details

Choose Window > Editorial > Track Changes.

Put the cursor inside a tracked edit.

In the Track Changes panel, inspect the displayed User Name, Change Time, and Change Type.

### Turn off Track Changes

Choose Window > Editorial > Track Changes.

Place the cursor in the story where tracking is currently active.

Select the Disable Track Changes in Current Story icon.

Tip

Disabling tracking stops new edits from being marked, while earlier tracked edits remain in the document. To turn tracking off for every story, choose Disable Track Changes in All Stories from the Track Changes panel menu.

## Review tracked text changes

Use these steps in Adobe InDesign to accept or reject additions, deletions, moves, and other text edits submitted by collaborators.

This procedure is for InDesign documents where Track Changes is enabled. In the Story Editor, additions are highlighted, deletions use strikethrough, and moved text is boxed at its new location.

### Navigate and review individual changes

Choose Edit > Edit in Story Editor.

Choose Window > Editorial > Track Changes.

Put the cursor at the start of the story.

In the Track Changes panel, select the Next Change icon to move to the first tracked edit and highlight it.

The Track Changes panel shows details such as User Name, Change Date, and Change Type.

To keep the edit, select the Accept Change icon; to return to the original text, select the Reject Change icon.

For automatic movement to the next edit, press Alt (Windows) or Option (macOS) while choosing Accept Change icon or Reject Change icon.

Use the Previous Change icon to move backward through tracked edits. To leave an edit for later, use Next Change icon without accepting or rejecting it.

Continue until every change in the story has been accepted or rejected.

### Accept or reject all changes at once

Choose Window > Editorial > Track Changes.

Use the Accept All Changes in Story icon to apply every tracked edit, or use the Reject All Changes in Story icon to remove every tracked edit.

Caution

Accepting or rejecting all tracked edits is not undoable as one grouped operation. To reverse it, use Edit > Undo immediately after the action.

For finer control, use the Track Changes panel menu to accept or reject all edits from one contributor, or to handle edits across all stories in the document.

### Filter changes by contributor

Use the panel options icon to open the Track Changes panel menu.

Choose Accept All Changes By This User. Alternatively, choose Reject All Changes By This User.

From the submenu, choose the contributor whose edits should be processed.

If you reject a change accidentally, immediately select Edit > Undo, press Ctrl + Z (Windows) or Cmd + Z (macOS), and restore the change for another review.

## Set preferences for Track Changes

This topic explains how added, deleted, and moved text is displayed when Track Changes is active, and how to adjust change bar visibility and user color assignments in Adobe InDesign.

Set these preferences before enabling Track Changes if the collaboration needs consistent markup. Preference changes affect only the display of tracked edits; they do not turn tracking on or off.

Track Changes preferences define how editorial markup looks. For additions, deletions, and moved content, you can set color, highlighting, and marking behavior, while also managing change bars and distinct team-member colors.

Open Edit > Preferences > Track Changes (Windows) or InDesign > Preferences > Track Changes (macOS).

Turn on the checkbox for each change type that should be tracked: Added Text, Deleted Text, or Moved Text.

For each change type, set the Text color, Background color, and Marking method.

Select Prevent Duplicate User Colors when each contributor should receive a different color for easier identification.

For Change Bars, set Change Bar Color and Location of change bars.

If spell checking should include deleted material, enable Include Deleted Text When Spellchecking.

Select OK.

By default, added text uses highlighting, deleted text uses strikethrough plus highlighting, and moved text combines strikethrough at the original position with boxed highlighting at the new position. Change bars appear as vertical margin lines beside lines that contain tracked edits.

## Add and manage editorial notes

Use editorial notes in Adobe InDesign when you need to add comments, identify reviewers, and coordinate feedback while a document is being reviewed.

During review, editorial notes give collaborators a place to communicate inside the document. In text, each note is shown with a user-specific color, which helps identify the person responsible for a comment. InDesign can print notes only from Story Editor, and notes are not available for PDF export.

Notes let you store comments, questions, or draft material without changing the final published document. More than one note can be inserted at the same text location, and anyone who opens the document can still see the notes.

### Create a note using the Notes panel

With the Type tool, choose the text position where the note should be inserted.

Select Type > Notes > New Note.

Enter the note text in the Notes panel, which shows both the note content and its author and timestamp details. A note anchor indicates where the note sits in the text.

### Create a note using the Story Editor

With the Type tool, choose the text position where the note should be inserted.

Select Edit > Edit in Story Editor.

Select Type > Notes > New Note.

In the Notes panel, choose the Show/Hide Notes icon first, then choose the New Note icon.

Enter the note text in the Story Editor panel. The note anchor identifies the note's text location and is displayed as bookends that hold the note text.

Use View > Extras > Show Notes or Hide Notes when you need to change whether notes are visible as you work.

### Set your user name for note attribution

The workflow user name supplies both the attribution and the color coding for notes. Check that User Name is set correctly so your notes are identified as yours.

Select File > User.

In the User Name field, enter your name, then choose a Color for your notes and tracked changes.

Select OK.

### Edit preferences for Notes

Select Edit > Preferences > Notes (Windows) or InDesign > Preferences > Notes (macOS).

Choose a Note Color.

Turn on Show Note Tool Tips when you want note details and note content to appear as a tool tip as the pointer rests over a note anchor in Layout View or over a note bookend in the Story Editor panel.

Turn on the Include Note Content When Checking Spelling option and the Include Note Content in Find/Change Operations option if InDesign should include Notes while spell-checking or running find actions in the Story Editor panel.

Note

In Layout View, the Find/Change and Spell Check commands cannot search inside note content.

Choose the Inline Background Color from None or Note Color.

Select OK.

### Convert text to a note

With the Type tool, select the text that should become a note.

Select Type > Notes > Convert To Note. InDesign places the selected text in a new note and leaves the note anchor at that position.

### Convert a note back to text

In the Notes panel or the Story Editor panel, select the note text that should be restored to story text.

Select Type > Notes > Convert To Text. The note text returns to the story at the note anchor position, and the note is deleted.

### Split a note into two notes

Using the Type tool, put the cursor inside the note at the split point.

Select Type > Notes > Split Note. The result is two separate notes. Text before the insertion point stays in the first note, while text after that point moves into the second note. The author and color coding are kept on both notes.

### Navigate between notes

With the Type tool, put the cursor anywhere in the story.

Select Type > Notes > Next Note to go forward to the next note, or select Type > Notes > Previous Note to go back to the previous note.

### Working with Notes Mode

Notes Mode changes what it does according to the current selection or insertion-point location. After you turn on Notes Mode (Type > Notes > Notes Mode), InDesign chooses the appropriate action automatically:

- If the cursor is in regular text, a new note is created.
- If text is selected, the selected content becomes a note.
- If the cursor is already inside a note, the note is divided at that spot.
- If notebookends are selected in the Story Editor panel, the note is restored as text.
- If the cursor is positioned at the start or finish of a note, the insertion point moves outside the note

This selection-aware behavior can make note handling faster, especially when many notes are being managed in the Story Editor.
