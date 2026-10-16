# Managed files

A managed file is created by adding it to an assignment file, exporting it from InDesign as InCopy content, or placing InCopy content in InDesign. Managed files report both content status and ownership. They support the following actions:

Lock and unlock stories to help maintain file integrity.

Alert InCopy users when the related InDesign layout is no longer current.

Show which user is working on a file.

Inform users when an InCopy content file is out of date, in use, or open for editing. Alerts can appear as messages, frame icons, Links panel status icons, or Assignments panel status icons.

Read-only files

After a content file is managed, every workflow participant sees it as read-only except the user who checked it out. When someone checks out a content file, the software makes a lock file (\*.idlk) and grants exclusive editing control to that user. Read-only files behave as follows:

An InCopy user cannot format the text manually. If the text uses character or paragraph styles, though, an InDesign user can edit those style definitions, changing the text formatting even while the file is checked out by someone else. After the InDesign user updates the file, those style-definition edits appear in the text.

Typically, users in InCopy and InDesign cannot modify objects such as text or applied styles inside locked InCopy content. Certain objects, including character and paragraph styles, are used only by the content. For example, the way a character style is applied to locked content cannot be changed, but the character style definition itself can be edited, which changes how the text looks.

The margins and columns of text content can be changed by an InDesign user, as can the shape, placement, and count of text frames occupied by the story.

An InDesign user may adjust a graphics frame's geometry and formatting without checking out the graphic. An InCopy user cannot alter the graphics frame or its formatting. To change the graphic itself, such as rotating or scaling it, InDesign and InCopy users both must check out the graphics frame.
