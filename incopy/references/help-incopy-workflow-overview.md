# Using Incopy Workflow, Collaboration, Basic Managed File Workflow

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create and use InCopy workflows; Collaboration; Understanding a basic managed-fileworkflow.

## Create and use InCopy workflows

Adobe® InCopy® supports both stand-alone documents and files linked to Adobe® InDesign®. In a linked-document workflow, one InDesign file can contain multiple InCopy stories, depending on the workflow system. Writers, editors, and designers can work at the same time on the same InDesign document without overwriting one another's changes.

### About InCopy workflows

Because InCopy and InDesign are closely integrated, writers, editors, and designers can collaborate on one InDesign document at the same time without overwriting each other's changes. Check-out and check-in controls in the workflow system protect file integrity.

InCopy lets writers and editors see their contributions in layout context without having InDesign installed. They retain full text control, with typesetting work that can include formatting styles (usually imported from InDesign), copyfitting, line and page-break adjustment, hyphenation settings, kerning, and similar tasks. Graphics can be imported into stories from InCopy and edited with limited transformations, including scaling and cropping. After saving in InCopy, the content can be refreshed in InDesign. Designers using InDesign can also send layout updates back to InCopy users so everyone works from the latest layouts.

For most groups, a system integrator configures how InCopy and InDesign interact and defines the group's workflow system. That system handles file creation, synchronization (with the parent server), and viewing. Several workflow systems are supported by InCopy and InDesign, including the built‑in system provided by the InCopy® LiveEdit Workflow plug‑ins for small workgroups. Ask the system integrator for details specific to your workflow system.

### About linked (managed) documents

Linked InCopy documents are content files, either text or graphics, placed into an open InDesign document or assignment file. Their content belongs to an InDesign layout and is therefore managed through the InDesign document. The InDesign user creates that connection inside InDesign; InCopy cannot create or manage the link. The link may be established before writing begins, during writing and editing, or after the text is complete. After linking, an InCopy user can view page layouts, styles, and related layout context as they appear in the InDesign document, but cannot modify them.

Linked documents have these additional characteristics:

With a linked InCopy file, nearly all work on the text itself remains available. For instance, you can set text-formatting options, change fonts, and perform editing or copyfitting subject to the design and formatting constraints of the InDesign layout and your workflow system. The text or graphics frames, column layout, threading sequence, and other design elements cannot be changed in InCopy; those items are defined in InDesign.

Your workflow system manages linked content and locks it for access control. Depending on that system, opening a linked story may involve choices such as checking out each InCopy file so only you can edit it. For instructions, consult the workflow system documentation or your system administrator, or check out content in InCopy when the workflow uses the InCopy LiveEdit Workflow plug‑ins.

### Working with multistory files

In linked-document workflows, an InDesign file can contain more than one InCopy story, depending on the workflow system. Multistory files must originate in InDesign, either as assignment files or as InDesign files with linked InCopy content. InCopy cannot create a multistory document. See your workflow system documentation for details.

In Galley and Story views, separate stories appear with story separator bars between them. The bar provides quick access to each story created inside an InDesign document.

A story separator bar shows the story title and an expand and collapse button for hiding or showing that story. Collapsing a story hides its text while leaving the story separator bar visible in the editing area.

The story separator bar

A. Expand and collapse button B. Story name C. Story separator bar

The story separator bar

### More like this

- Sharing content between InCopyand InDesign
- Ways to work with content inInCopy

## Collaboration

Track change feature enhancements

InCopy CS5 and InDesign CS5 both include Track Changes. In InCopy, the Track Changes toolbar uses clearer icons, and the Changes menu adds commands for accepting or rejecting edits in the current story or across every story. Changes can also be accepted or rejected by participant. See Tracking and reviewing changes.

Mini Bridge

Mini Bridge provides part of Adobe Bridge inside InCopy as a panel. It lets you preview files from a local hard drive or server without opening Adobe Bridge or leaving InCopy. You can place files into editable frames by dragging them, or open files directly in InCopy with fewer steps and less time.

Improved Adobe Bridge integration

The File Handling preference now includes a setting for creating page thumbnails beyond only the first page of an InCopy file. Thumbnail generation defaults to 2 pages, and the available choices are 1, 2, 5, 10, or All. Bridge can now show those page previews in its Preview pane. Generating thumbnails for additional pages can increase the time needed to save an InCopy document.

See Using Adobe Bridge with InCopy.

Document installed fonts

When InDesign CS5 packages a document and you include document fonts, InDesign creates a folder called "Document Fonts." Opening an InDesign or InCopy file from the same parent folder as that Document Fonts folder causes those fonts to install automatically for that file. See Document installed fonts.

Buzzword integration

Buzzword is an online text editor for creating and keeping text files on a web server. InCopy CS5 can import text from Buzzword documents and export text back to them. See Import Buzzword documents and Export content to Buzzword.

## Understanding a basic managed-fileworkflow

Use the links below for the detailed instructions and background information.

### Sharing content

The Adobe InCopy LiveEdit Workflow plug-ins let writers and editors build copy in InCopy while designers work on layouts in Adobe InDesign. The workflow uses assignment files as containers for related content, along with locking and notification features that let InCopy and InDesign users share and refresh files over a shared network or by sending compressed packages through email.

With a shared network setup, InDesign users export text and graphics to a shared file-system location so InCopy users can write and edit them. Chosen text frames and graphics frames can be exported into an assignment or as separate InCopy files; after export, they join the managed workflow and remain linked to the InDesign document. These shared items are managed files. When someone works in an assignment file or in the InDesign file on a local server, updates to related layout or content are reported to everyone participating in that document workflow.

The same content file may be open for several InCopy or InDesign users at once, and one assignment file may also be open for multiple InCopy users. Editing, however, is limited to the single user who has checked out the InCopy file. Everyone else can only view it as read-only. A user who checks out a managed InCopy file can share progress by saving to the shared server or sending the file back to the InDesign user, but other users cannot modify it until the file is checked in again. This arrangement lets multiple people reach the same file while protecting each person's work from being overwritten.

Additional details are available in the InCopy LiveEdit Workflow guide (PDF) at www.adobe.com/go/learn_liveedit.

### Ways to work with content in InCopy

In InCopy, content means text flowing through one or more frames, or a graphic that has been imported. The five standard approaches are assignment files, assignment packages, linked InCopy files, InDesign documents with linked InCopy files, and material composed entirely in InCopy.

Open assignment files created in InDesign

An InDesign user can build an assignment file and choose which content is shared. This approach lets related pieces such as headings, body text, graphics, and captions be grouped, then assigned to specific InCopy users for writing or editing. InCopy users open the assignment file and work only on the pieces assigned to them. Live layout view shows how their edits fit the InDesign layout without opening the entire InDesign document. If the layout is changed, the InDesign user must update assignments so InCopy users receive the change notice. These files can be distributed from a server or sent as packaged assignments.

InDesign document (.indd) with assignment file (.icml) composed of three linked content files (.incx). Assignment and its components are listed in Assignments panel and are opened in InCopy.

InDesign document (.indd) with assignment file (.icml) composed of three linked content files (.incx). Assignment and its components are listed in Assignments panel and are opened in InCopy.

Open assignment packages

Assignment packages are useful when designers and writers share a project but do not have a local server in common. In that situation, the InDesign user can create one or more packages and email the compressed files to the assigned InCopy users. Those users open the packages, edit their content, and send the packages back so the InDesign user can update the document.

Open linked InCopy files exported from InDesign

Some workflows have InDesign users export text and graphics as separate files instead of placing them in an assignment file. Separate exports work well for unrelated graphics or independent bodies of text. The tradeoff is that InCopy users cannot see the content in its page-layout context.

InDesign document (.indd) with three linked but unassigned content files (.icml) opened in InCopy

InDesign document (.indd) with three linked but unassigned content files (.icml) opened in InCopy

Open InDesign documents that have linked InCopy files

When InCopy users need every page item in full layout context, they can open and edit an InDesign document directly in InCopy. This method helps with editing and copyfitting when the whole layout matters, or when most stories in a document need work rather than only a small set. After the InCopy user changes stories, the InDesign user can update links to those modified files. If the layout changes, the InCopy user receives notice after the InDesign document is saved.

Compose content entirely in InCopy

InCopy can create content without any connection to an InDesign file. In stand-alone documents, you can enter text, apply fonts and styles, and bring in graphics from other applications such as Adobe Illustrator and Adobe Photoshop to support the text. Tags can also be assigned for later XML use. This method fits editorial workflows where writing happens before design. For stand-alone InCopy documents, you can also set or change the text area, page size, and orientation. If that story is later linked to an InDesign document, the InDesign settings take precedence over the InCopy settings.

### Managed files

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

### Best practices for working with managed files

To keep content current and avoid replacing another person's edits, follow these practices:

Keep assignment files on a server accessible to every team member. If the team cannot use a server, create and distribute assignment packages instead.

Creating an assignment also creates a special folder that stores the assignment file and its content. Use these assignment folders to keep assignment and content files organized. They make shared files easier to manage across the workgroup and help users open the intended files.

In InCopy, open the assignment file rather than a single InCopy story. Doing so lets you view copyfit and layout information in Galley and Layout views. If content is exported without assignment files, that copyfit and layout information is available only by opening the InDesign file.

After opening an assignment file, opening an InDesign document, or checking out content in InDesign or InCopy, show frame edges with ViewÂ > Extras > Show Frame Edges so frame icons are visible when they appear.

In InDesign, when files must be removed from the workflow, for example to meet a production deadline, unlink them or cancel an assignment package.

### Managed-file workflow examples

Workflow management between InCopy and InDesign lets writers and editors compose, revise, expand, and edit documents while designers develop the layout. Common patterns include managing files from a local server, distributing work through email packages, or combining both approaches.

These workflow examples assume a basic InDesign template containing layout geometry, styles, and placeholder text. Layout geometry covers page dimensions plus text frames and graphics frames. InCopy uses those elements to present accurate copyfit information.

### Local server workflow

1.In InDesign, create assignments and add content to them.

This adds exported text frames and graphics frames to the managed workflow, making them available for InCopy users to write or edit.

2.Make the assignment files available to InCopy users.

Place the files on a server that every workflow participant can access.

3.In InCopy, open the assignment file; check out a story or graphic, then edit it.

In InCopy, content assigned to you is listed in the Assignments panel. Saving the file on a local server writes the changes to the file system, and anyone working on the document, whether in the InDesign layout or another managed content file in that document, is notified about the update. Those users can refresh the content to see the newest changes. Until you return it with check-in, the content remains checked out under your name.

4.In InDesign, work on the layout.

InDesign users can continue layout work whether or not the content files are being edited in InCopy, and they do not need to check out the document. Each time the InCopy user saves checked-out content, the InDesign user can update that content in the layout to review the latest revisions.

5.In InCopy, continue working.

After editing is complete, check in the content. Other users can then check it out and work on it. If another user is changing the layout in InDesign at the same time, update the layout geometry as needed while you work.

6.In InDesign, confirm that every content item is checked in.

The managed workflow shows which users have files checked out. Once content files are checked in, InDesign users can check them out and finish the layout if needed.

### Email package workflow

1.In InDesign, create and send assignment packages.

Build assignment packages, assign the contents to the correct InCopy users, and send the packages to those users. To help prevent editing conflicts, the packaged files are checked out automatically.

2.In InCopy, open the assignment package; check out a story or graphic, then edit it.

When an assignment package arrives by email, double-click it to open it in InCopy. Edits to the file are stored only on your local system, and other users do not receive notifications about those changes.

3.In InDesign, work on the layout.

InDesign users can keep editing the document layout regardless of whether content files are packaged, without checking out the document. To update the layout or assignments, send an updated package to the InCopy users.

4.In InCopy, send back the edited package.

When your edits are done, check in the content and send back the modified package. Other users can then check out the content, review the newest revisions, and continue working on the file.

5.In InDesign, confirm that every content item is checked in.

The managed workflow identifies who has checked out each file. Once assignment packages come back, the stories in them are checked in, and InDesign users can check out the files to finish layout work as necessary.

### Enter user identification

Every workflow participant needs a user name. This identity shows who has checked out a given file and exposes that information to the other users. A user name is also needed before a file can be checked out for editing.

Before changing an existing user name, check in any content currently checked out to that name. If the identification is changed during an editing session, your access to already checked-out content is lost because the checkout belongs to the earlier name.

Each application keeps user identification separately, and one person cannot use multiple identifications in the same application.

Note

InCopy Notes and Track Changes also rely on the specified name when identifying who authored a note or tracked edit.

Do either of the following:

Choose FileÂ > User.

From the Assignments panel menu, choose User.

Type a unique name and clickÂ OK.

If this method has not been used to enter a user name, InCopy asks for one before your first workflow action proceeds.

Note

The Color pop-up menu in this dialog box is used for editorial-note and tracked-change identification. Selecting the color now is allowed, but it does not change anything in a managed workflow.

### Workflow icons

Text frames, graphics frames, the Assignments panel, and the story bar in InCopy can display workflow icons. Edit status icons are shown beside managed files in the Links panel and Assignments panel, where they report content status. Frames containing a linked InCopy story can also show icons in Layout view in both InDesign and InCopy. These frame icons identify content status and help distinguish managed content from unmanaged content. The related tool tip provides editing status and ownership. To see frame icons, turn on frame edges in InDesign and InCopy with ViewÂ > Extras > Show Frame Edges.

Note

(InDesign) Frame edges are visible only when the InDesign document window uses Normal Mode. Use the toolbox button for Normal Mode at the lower left.

Icon

Name

Location

Available

Assignments panel (InDesign and InCopy), text frames, and graphics frames

In Use By [name]

Assignments panel, text frames, and graphics frames

Editing

Assignments panel, text frames, and graphics frames

Available And Out Of Date

Text and graphics frames

In Use By [name] And Out Of Date

Text and graphics frames

Editing And Out Of Date

Text and graphics frames

Out Of Date

Assignments panel

Text Content Out Of Date

Assignments panel and text frames

Text Content Up To Date

Assignments panel and text frames

Graphics Content Out Of Date

Assignments panel and graphics frames

Graphics Content Up To Date

Assignments panel and graphics frames

Packaged Content

Assignments panel

| --- | --- | --- |

Note

For the Available, In Use, Editing, Text Content, and Graphics Content icons, the Out Of Date icon signals stale content: the file system has a newer version than the one currently displayed locally.

### More like this

- Export content as separate InCopy files (InDesign)
- Work with stand-alone documents
- Unlink content files (InDesign)
- Tracking and reviewing changes
- Using editorial notes
