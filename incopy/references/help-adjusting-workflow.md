# Adjusting Workflow

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

InDesign users can move content from one existing assignment to another, or out of the Unassigned InCopy Content section in the Assignments panel. They can also create a new assignment and move content into it.

After saving the InDesign document, use the Assignments panel arrow beside the assignment name to show its contents. Select one assignment item, then choose one action:

Move the content by dragging it between assignments.

To use an existing assignment, open the Assignments panel menu, choose Add To Assignment, and pick the target assignment.

To create an assignment while moving the content, choose Add To AssignmentÂ > New from the Assignments panel menu, then configure the New Assignment dialog box.

From the Assignments panel menu, choose Update All Assignments. Note

When assignment lists are brief, dragging content items among assignments and the Unassigned InCopy Content section may be quicker.

## Adjusting your workflow — Delete assignments (InDesign)

Select one or more assignments in the Assignments panel, then choose Delete Assignment from the panel menu.

Deleting assignments has these results:

Assignment data is removed from the document.

The assignment file is deleted from the file system.

The assignment name no longer appears in the list.

Any InCopy content moves to the Unassigned InCopy Content section in the Assignments panel.

Note

When an InCopy user has an assignment open and that assignment is deleted in InDesign, an alert tells the InCopy user that the assignment was deleted. The content files themselves remain, however, and can still be updated without losing changes.

## Adjusting your workflow — Relink missing assignment files (InDesign)

When an assignment file is moved or deleted from disk and the InDesign document that created it is opened later, InDesign cannot locate that assignment file. Re-create the assignment file so InDesign can find it again.

## Adjusting your workflow — Re-create the assignment file in the original location

In the Assignments panel, do one of the following:

For the missing assignment, which still appears in the panel, choose Update Selected Assignments from the panel menu.

From the panel menu, choose Update All Assignments.

## Adjusting your workflow — Change the assignment location

To rebuild the assignment file somewhere else, do one of the following in the Assignments panel:

Choose the assignment, then choose Change Assignment Location from the panel menu. Enter the new file's location and name.

Open the assignment by double-clicking its name. Click Change in the Assignment Options dialog box and provide the new file's location and name.

## Adjusting your workflow — Correct mistakes

If you make an error, discard the edits made after the last Save command and restore the file-system copy of the content.

Because InDesign saves each editable InCopy content file automatically when the InDesign document is saved, Cancel Checkout restores only the versions created since the document was last changed.

Do one of the following:

For only the latest change, choose EditÂ > Undo [action].

To remove every change since the document was last saved, choose FileÂ > Revert Content.

To remove edits made after the last saved version and delete the lock file, choose the content in the Assignments panel and then choose Cancel Check Out from the panel menu. This makes the content read-only and lets others check it out.

## Adjusting your workflow — Overriding locked files (InDesign)

Users may not immediately understand how their actions affect others in the workflow, which can accidentally create conflicts between content status and ownership. When needed, the InDesign user can resolve this by unlinking a locked file that another user checked out, then taking control of the file. Unlinking stores the content inside the InDesign document, but the content stops being shared with InCopy.

## Adjusting your workflow — Unlink content files (InDesign)

When necessary, for example to meet a production deadline, unlinking lets InDesign users remove a content file from both the managed workflow and the Links panel. To make that content editable again, export it again as InCopy content using a different file name. A new name keeps the old lock file from blocking edits.

Note

If you unlink a file that you checked out yourself, it leaves the workflow and the lock file is removed from disk. You can then re-export the content and overwrite that file name without creating a conflict.

To unlink an InCopy content file, use the Links panel to select the file (.icml or .incx extension), then choose Unlink from the panel menu. Unlinking embeds the content in the document and removes the disk link to the InCopy file.

To relink the file, choose EditÂ > Undo Unlink.

Note

Deleting a frame can also unlink content, and the InDesign Links panel can relink a content file to a different file. Another option is selecting the story in the Assignments panel and dragging it to the Trash icon.

## Adjusting your workflow — Placing InCopy files in InDesign documents

A common workflow starts in InDesign, where the basic layout plus text and graphics placeholders are created and exported to InCopy. Another workflow can begin with a stand-alone InCopy content file (.icml or .incx), which you place in InDesign with the FileÂ > Place command.

Consider these dependencies when placing InCopy content files in an InDesign document:

Styles

When styles are applied to the InCopy text file, they are added to the document's InDesign style list. If a style name conflicts, InDesign replaces the incoming style with the style already present.

Layout

InDesign can define the content's basic layout geometry first; text and styles can then be created or imported from a word-processing application. (When text files are placed within InCopy, they are embedded in the InCopy document rather than linked to any external file.)

Placing/Duplicating

Placing the same InCopy content file more than once creates multiple instances in the InDesign Links panel, but all instances are managed as a single content file. The same behavior applies to exact copies of a content file created by any duplication method.

Note

If you copy and paste some, but not all, text from a managed InCopy content file, the pasted content becomes a new content file. That new file is independent of the original and has no link to any external file, whether InCopy or otherwise. The original content and pasted portion can be edited independently.

Updates/Management

After multiple instances of a managed content file exist in an InDesign document, they act as though the file were open in two applications. For example, checking out one content-file instance locks every other instance, so only the checked-out instance can be edited. In that situation, refresh the other open content instances with the appropriate Update command.

### More like this

- Update, restore, and replace links
- Accidentally updating your work
