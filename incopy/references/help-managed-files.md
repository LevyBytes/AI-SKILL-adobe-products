# Managed Files, Assignment Packages

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Working with managed files — Open shared content; Assignment packages — Create and send packages (InDesign).

## Working with managed files — Open shared content

Assignment files (.inca) open only in InCopy. When an InCopy user opens an InDesign file that includes assignments, all managed content becomes available to that user, independent of assignment membership.

Use one of these methods.

In InCopy, use FileÂ > Open, choose an assignment file (.icma or .inca), then click Open.

In InDesign or InCopy, use FileÂ > Open, choose an InDesign file (.indd) with assigned content, then click Open.

Open an assignment package. See Receive packages (InCopy).

The Assignments panel then lists the assignment names with their contents.

### Working with managed files — Check out content

Checking out an item creates a hidden lock file (.idlk) on the file system. After checkout, editing control belongs only to you, so other users cannot change that content. InCopy content can be checked out; InDesign documents that contain layout information cannot.

If you try to close an InDesign document while one or more InCopy content files are checked out to you, InDesign displays an alert asking you to check in all content. Closing without checking in leaves those content files assigned to your checkout the next time you open the InDesign document. Saving the InDesign document also saves each editable InCopy content file.

### Working with managed files — Check out content (InDesign)

Use one of these methods:

Select the needed text or graphics frames in the layout, then choose EditÂ > InCopyÂ > Check Out.

From the Assignments panel, select the files, then use the panel menu command Check Out.

After available content is checked out in InDesign, the Editing iconÂ  is shown on the InDesign frame. In InCopy, the In Use iconÂ  is displayed on the InCopy frame and in the Assignments panel when the assignment files reside on a local server.

### Working with managed files — Check out content (InCopy)

Use one of these methods:

Select FileÂ > Open and choose the assignment file (.icma or .inca) when the content is part of an assignment.

If the material was exported as separate files, choose FileÂ > Open and select the InCopy file (.icml or .incx). For copyfitting with layout context, select the InDesign document.

Then use one of these checkout methods:

For a single InCopy content file, choose FileÂ > Check Out.

For every item in an assignment at the same time, select the assignment in the Assignments panel, then use the panel menu command Check Out.

For individual assignment items, expand the assignments list in the Assignments panel, select one or more items, then use the panel menu command Check Out.

The Editing iconÂ  appears next to each selected item in the Assignments panel, showing that the content is checked out to you for exclusive use.

If InCopy asks to update the content with changes, clickÂ OK.

After available content is checked out in InCopy, the Editing iconÂ  is visible on the InCopy frame and in the Assignments panel. InDesign shows the In Use iconÂ  on the InDesign frame.

### Working with managed files — Opening managed files (InCopy)

Opening a managed content file (.icml or .incx) directly in InCopy, then editing it in Story view, can be better for quick writing and revision. No separate checkout step is required for an individual managed file; InCopy checks it out automatically for editing. When the file is saved and closed, InCopy checks the content back in automatically. Save commands change when individual files are opened.

### Working with managed files — Update assignment files (InDesign)

Assignment changes can be saved manually, or during closure of the current document. To expose layout edits to InCopy users, the assignment file must be updated.

Use one of these methods:

For selected assignments, highlight them in the Assignments panel, then use Update Selected Assignments from the Assignments panel menu.

For all out-of-date assignments in the current document, use Update Out-Of-Date Assignments from the Assignments panel menu. This updates only assignments whose status is out of date.

For every current-document assignment, use Update All Assignments from the Assignments panel menu.

Note

When the update occurs while an InCopy user already has that assignment open, the InCopy Assignments panel marks the assignment with the Out Of Date iconÂ .

### Working with managed files — Update content

To stay on current content, monitor the Assignments panel for Out Of Date icons and update when they appear. Updating an InCopy assignment file plus its contents, or updating separate content files, pulls data from the newest file-system copy so the version on your computer matches that stored copy. An update neither requires check-in or checkout nor grants editing permission. Problems can still occur if another user has removed your lock.

Note

Content updates do not refresh assignment packages that have not been returned.

A common update sequence works this way:

First, an InCopy user opens an assignment file, or checks out one content file, and makes edits.

Next, the InCopy user saves the content file so the file-system copy is refreshed, then keeps working.

InDesign then shows the Out Of Date iconÂ  beside the selection in both the Assignments panel and the Links panel; the associated frame also shows the In UseÂ  and Text Content Out Of Date iconÂ  or Graphics Content Out Of Date iconÂ .

Assignments panel with In Use and Out Of Date icons (left) and Layout with out-of-date content (right)

Assignments panel with In Use and Out Of Date icons (left) and Layout with out-of-date content (right)

The InDesign user updates the content.

### Working with managed files — Update content while opening a managed document (InDesign)

Choose FileÂ > Open, find the target file, and click Open. When asked whether to update the document with modified file-system content, click Yes. Then use one of these methods:

To have InDesign repair links, click Fix Links Automatically.

For manual link repair, click Donâ€™t Fix; in the Links panel, select the file that needs updating and choose Update Link from the panel menu.

### Working with managed files — Update content while working (InDesign)

Use one of these methods:

In the layout, select the text or graphics frames, then choose EditÂ > InCopyÂ > Update Content.

In the Links panel, select the text or graphics frames, then click the Update Link buttonÂ  or choose Update Link from the Assignments panel menu.

### Working with managed files — Update content while working (InCopy)

Use one of these methods:

Place an insertion point in the text frame to select it, then choose FileÂ > Update Content.

In the Assignments panel, select the content, then click the Update Content buttonÂ  or choose Update Content from the Assignments panel menu.

The Links panel can also be used to update content.

### Working with managed files — Accidentally updating your work

Update commands are usually unavailable for content checked out to you, since that content should already be current. A bad conflict can happen when another user removes the checked-out content's lock, for example by moving the lock file [.idlk] into Recycle Bin [Windows] or Trash [MacÂ OS], and then changes the content. Under those conditions, update commands may become available even though the content is still checked out to you, which effectively lets two people edit the same content simultaneously. Running an update in that state can discard your work. For best results, keep lock files in place.

### Working with managed files — Update the InDesign layout

InDesign users can change layout, such as the size or position of a story's text frames, and save those edits while InCopy users are editing text in the same frames. In a shared-server workflow, notification behavior for layout changes depends on whether InCopy users opened an assignment file or checked out separate content files and also opened the linked InDesign file.

Consider these cases:

If an InDesign user changes frame layout inside an assignment, the assignment must be updated before InCopy users can see the design changes. Saving the document does not make InDesign update assignment files automatically.

For an assignment kept on a shared server, once the InDesign user updates it, the InCopy Assignments panel places the Out Of Date iconÂ  beside the assignment. To view the current layout, the InCopy user must update the design.

For exported content outside any assignment, when an InDesign user changes the layout, the Assignments panel marks the InDesign document name with the Out Of Date icon, and the title bar reports that the layout is out-of-date. InCopy users can refresh the active InDesign document to bring in the newest layout and style changes.

Layout updates in InCopy help with copyfitting because Layout and Galley views show the latest appearance and line breaks.

Use one of these methods:

When an assignment file is open and the Assignments panel displays the Out Of Date iconÂ  beside the assignment name, click the Update Design buttonÂ , or choose FileÂ > Update Design. This command cannot be undone.

When you are not using assignment files and more than one InDesign document is open, choose the document that should become active, then choose FileÂ > Update Design.

### Working with managed files — Check in content

Checking in a managed content file saves it to a shared file-system location, making it available for other users to check out for editing or other changes. When a text or graphics frame is exported from InDesign, that content is also checked in automatically.

A checked-in file can be checked out for editing, but it is not editable until checkout occurs, unless you work on the content in stand-alone mode in InCopy. Checking in returns editing control without closing the file. The content stays open on your screen in a read-only state.

LiveEdit Workflow plugâ€‘ins maintain no version history; updates from either InCopy or InDesign overwrite the files.

After checking in work that belongs to an assignment package, return or forward the assignment package.

### Working with managed files — Check in managed content (InDesign)

Use one of these methods:

In the layout, select the content, then choose EditÂ > InCopyÂ > Check In.

From the Assignments panel, select the content and use the panel menu command Check In.

### Working with managed files — Check in managed content (InCopy)

Use one of these methods:

In Layout view, select the content, then choose FileÂ > Check In.

From the Assignments panel, select the content and use the panel menu command Check In.

Note

Before check-in, you can undo the most recent changes.

Note

Checking in a file displays the Available icon in these places: the text or graphics frame in the InDesign layout, InCopy Layout view, the Assignments panel, and the story bar (InCopy).

### Working with managed files — Save changes (InDesign)

While you edit content checked out to you, you can save changes and refresh the file-system copy.

Use one of these methods:

For selected content only, select the content in the layout and choose EditÂ > InCopyÂ > Save Content; this does not save changes to the InDesign document or any linked files.

To save every content file checked out to you, choose FileÂ > Save. This save operation does not, by itself, refresh assignment files or checked-out InCopy content files. The checked-out files in InCopy, however, will show the Out Of Date iconÂ  in the Assignments panel.

To save the InDesign document with a new name while preserving links to existing InCopy files, choose FileÂ > Save As. Until updated, the assignments in that InDesign file appear as missing.

To save a copy of the active document, choose FileÂ > Save A Copy. The copy can be given a new name and location while retaining links to any existing InCopy files.

### Working with managed files — Save changes (InCopy)

Use one of these methods:

To keep the InCopy file in the same file-system name and location, choose FileÂ > Save Content. The file remains checked out to you.

To save the InCopy content file with a new name, choose FileÂ > Save Content As. The new content file is outside the managed workflow. Save Content As is available only when the InCopy content file (.icml or .incx) has been opened directly.

To create a copy of the active InCopy content file, choose FileÂ > Save Content Copy. You can assign the copy a new name and location. The saved copy is outside the managed workflow. Save Content Copy is available only when the InCopy content file (.icml or .incx) has been opened directly.

To save all open InCopy content files that are checked out, choose FileÂ > Save All Content. All files are saved to their current locations. Save All Content is available only when an assignment or InDesign file is open.

### More like this

- Assignment files
- Managed files
- Managed files
- Managed files
- Create and send packages (InDesign)
- Links panel overview
- Exporting content from InDesign
- Work with stand-alone documents
- Managed files

## Assignment packages — Create and send packages (InDesign)

Ideally, every InDesign and InCopy user on the team can reach the server that stores assignment files. When one or more users lack access to the same server, compressed assignment packages can be created and distributed. After completing work on the assignment, the InCopy user repackages it and sends it back so it can be integrated into the InDesign document. Packages made in InDesign use the .icap extension. Return packages made in InCopy use the .idap extension.

Packaging uses two commands: Package For InCopy and Package And Email. Package For InCopy creates a compressed package for manual distribution; Package And Email creates a compressed package and attaches it to an email message automatically.

Note

Do not mistake an assignment package for the File > Package command in InDesign, which bundles a document and its assets for delivery to a printer.

### Assignment packages — Create a package for manual distribution

Start by creating an assignment, then add the content that should go into the package.

Only checked-in content can be placed in the packaged assignment. If any content is checked out, InCopy prompts you to check in content.

Select the assignment in the Assignments panel, then use the panel menu command Package For InCopy. Enter the package file name and location, then click Save.

The package file can be attached to an email message, uploaded to an FTP server, or copied to a disk or other external media.

Note

After package creation, choosing EditÂ > Undo cancels the package and unlocks the assignment items, but it does not remove the package file from your computer or recall the email.

### Assignment packages — Create a package for email (InDesign)

Start by creating an assignment, then add the content that should go into the package.

Only checked-in content is placed in the packaged assignment. If any content is checked out, InDesign prompts you to check in content.

Select the assignment in the Assignments panel, then use the panel menu command Package For InCopy And Email.

Your default email application receives a new email message with the compressed assignment package attached.

Note

To send through a different email application, change the default email application. For details, see your system documentation.

Add a recipient and any instructions to the email message, then send it.

Every assignment item is checked out to the assigned user. The package contents themselves, however, are not locked, so any person can open the package and edit them.

### Assignment packages — Cancel a package

Sometimes a sent package never comes back. The message can be lost, or the recipient might have left the project. In that situation, cancel the package.

In the Assignments panel, select the packaged assignment, then choose Cancel Package from the panel menu. Click OK to confirm.

Canceling a package does not delete the package file from your computer.

After cancellation, the package contents become editable again. If someone later returns a canceled package, conflicts can result.

### Assignment packages — Update a package

Once a package exists, you may need to add stories, remove them, or change their size.

Modify one or more stories in the packaged assignment by adding, removing, or resizing them. Select the assignment in the Assignments panel, then use one of these commands:

Choose Update Package from the Assignments panel menu. Enter the file name and storage location. Make the revised package available to users by putting it on a shared server or sending it by email. Notify InCopy users that the package has changed.

Choose Update Package And Email from the Assignments panel menu, then send the message.

When InCopy users open an updated package, InCopy automatically adds only content that is new to the assignment. Users can choose whether existing content should be overwritten, so earlier edits can be kept.

### Assignment packages — Receive packages (InCopy)

An InDesign user who built the package can send it to you, or an InCopy user can pass along a package they received. Opening an assignment package decompresses it and copies the contents into a new subfolder inside an InCopy Assignments folder.

### Assignment packages — Open a package (InCopy)

To open an InCopy package (_.icap or _.incp), use any of these methods:

Open the package from your email application. For example, double-click the attachment file.

Open the file through Explorer or Finder. For example, double-click the file, or drag it onto the InCopy application icon.

Use InCopy's File > Open command, then open the packaged assignment file by double-clicking it.

Use the Assignments panel menu in InCopy to choose Open Package, then open the package file by double-clicking it.

The stories in the package are now ready for editing. When you start changing a story, InCopy asks you to check out the frame contents. After you finish editing, save all content, then return or forward the package.

### Assignment packages — Return or forward a package (InCopy)

After opening and editing a package, either pass it to another InCopy user or send it back to the InDesign user who originally created it. Packages meant for other InCopy users use the .icap extension; packages returned to InDesign users use .idap.

Edit the content that should go into the package, then check it in. Use the Assignments panel menu to choose the needed command:

Forward For InCopy

Builds a package for another InCopy user. Specify the package file name and location, then make that file available to the InCopy user.

Forward For InCopy And Email

Builds a package for another InCopy user and sends it by email. The package is attached to a new message in your default email application. Enter the recipient, add instructions, and send the email message.

Return For InDesign

Builds a package for returning the work to the InDesign user.

Return For InDesign And Email

Builds a return package for the InDesign user and sends it through email. The package is attached to a new message in your default email application. Enter the recipient, add instructions, and send the email message.

### Assignment packages — Receive return packages (InDesign)

To open an InDesign package (_.idap or _.indp), use any of these methods:

Open the package from the email application. For example, double-click the attachment file.

Open the file through Explorer or Finder. For example, double-click the file, or drag it onto the InDesign application icon.

Use InDesign's File > Open command, then open the package file by double-clicking it.

Use the Assignments panel menu in InDesign to choose Open Package, then open the package file by double-clicking it.

When the package opens, InDesign asks whether to update all links. If a story changed after packaging, decide whether the InDesign file should update that content or unlink it. After the returned stories are checked in, you can check them out and edit them.

### More like this

- Check in content
- Save changes (InCopy)
- Update assignment files (InDesign)
- Unlink content files (InDesign)
