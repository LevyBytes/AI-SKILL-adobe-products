# Sharing Content, Stand Alone Documents

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Sharing content — Exporting content from InDesign; Stand-alone documents — Work with stand-alone documents.

## Sharing content — Exporting content from InDesign

Moving content from InDesign to InCopy creates a managed link between the apps. InDesign text frames, graphics frames, and their contents can be exported to InCopy in either of these ways:

Create a container file (_.icma), called an assignment, and place related document items in it, such as the text and graphics for one story, so the group can be handled together. Content inside assignments is exported as _.icml files.

Use Edit > InCopy > Export menu commands to export text and graphics frames individually, including placeholder frames. The exported items are saved as \*.icml files.

After export, small icons appear at the upper-left corner of exported frames in both InDesign and InCopy, and also in the Assignments panel. The Links panel shows a link to the exported file. These icons report managed-frame status and distinguish managed frames from frames outside the workflow. The Assignments panel lists all exported content. Content exported with the Export menu commands is listed under Unassigned InCopy Content in the Assignments panel. Both approaches create a controlled connection between InCopy content and an InDesign document, but assignment files are the primary approach.

Exported content becomes available for users to check out while retaining its link to the original InDesign document. That link is created from InDesign; InCopy cannot create it.

After export, InCopy users can view the page layouts, styles, and other design context as it appears in the InDesign document, but they cannot change those elements.

Note

InCopy can also be used to create text or anchored graphics that are later placed in InDesign.

### Sharing content — Assignments panel overview

Assignment work centers on the Assignments panel (Window > Assignments in InCopy, Window > Editorial > Assignments in InDesign). This panel lists files exported from the active InDesign document, and status icons show each file's state. Its panel menu includes commands for import versions and file management between InCopy and InDesign. When an assignment is opened in InCopy, both the assignment name and its contents are shown in the Assignments panel. Double-clicking text or graphics frames in the panel selects them in the document window.

Note

Content exported to InCopy or added to an assignment also appears in the Links panel. Some workflow tasks, including check-out and check-in, can be done there, but the Assignments panel is the preferred panel for these tasks.

InDesign Assignments panel

A. InCopy content names B. InDesign document name C. Assignment Out Of Date status D. Available And Text Up To Date status E. In Use And Text Out Of Date status F. Editing And Text Up To Date status G. Unassigned content H. User name I. Update Content button J. Check Out/Check In Selection button K. New Assignment button L. Delete Selected Assignments/Remove button

InDesign Assignments panel InCopy Assignments panel

A. InCopy content names B. Assignment Out Of Date status C. Assignment name D. Available And Text Up To Date status E. In Use And Text Out Of Date status F. Editing And Text Up To Date status G. User name H. Update Design button I. Update Content button J. Check Out/Check In Selection button

InCopy Assignments panel

### Sharing content — Assignment files

Within InDesign, assignment files serve as containers for groups of page items. For instance, you could gather a story's headline, byline, body text, graphics, and captions, then assign that set to one InCopy user. Placing those items in an assignment lets InCopy users reach just the content they are responsible for. Assignment files (\*.icma) are visible in the file system, the InCopy story bar, and status messages. Creation is limited to InDesign users, and opening is limited to InCopy users.

By default, creating an assignment also creates a folder next to the InDesign document. This folder contains the \*.icma assignment files plus a content subfolder for exported InCopy story files in .icml format that belong to images or other resources. After the assignment exists, put the project folder somewhere all users can access, or create and distribute an assignment package. When content has already been exported before it is added to an assignment, the disk files are not moved into the assignment file's content folder.

Assignment files include the following:

References to associated page items, including placeholder frames. With these elements, an InCopy user can open one file in InCopy and edit multiple page items.

The assignment preserves graphics transformations, including moving, scaling, rotating, and shearing.

Page geometry that lets InCopy users view the frame layout and the content they are editing without opening the full InDesign file.

A document-level color code for frames assigned to the assignment.

Illustration of page in InCopy showing page geometry and color coding

Illustration of page in InCopy showing page geometry and color coding

### Sharing content — Create assignments and add content (InDesign)

Only InDesign users are able to create assignments and place content in them. Several creation paths are available, and the right one depends on whether content is ready when the assignment is made.

Create empty assignment files. From an InDesign document, create a set of blank assignments that can serve as templates for later content.

Create an assignment while adding content to it.

Add content to an existing assignment file. Add linked content, meaning text and graphics already exported as InCopy content, or add selected page items so they become linked InCopy content. If selected frames already include InCopy content files and none belongs to an assignment, they can be added to a new or existing assignment file.

By default, newly created assignment folders are saved beside the InDesign document. You can place that folder on a server, or create and send a package.

Note

If InCopy users should not place and fit graphics, leave graphics frames out of the assignment.

### Sharing content — Create empty assignment files (InDesign)

After saving the InDesign document, open the Assignments panel menu and choose New Assignment. Then use the New Assignment dialog box to set assignment file options, and click OK.

### Sharing content — Simultaneously create assignments and add content (InDesign)

In InDesign, build and save a document that contains one or more text frames, graphics frames, or placeholder items. Select the text and graphics frames to include. Then use one of these commands:

Use the Assignments panel menu to choose Add To Assignment; after that, select New.

As another route, choose Edit > InCopy > Add [option] To Assignment > New.

Use the New Assignment dialog box to set assignment file options, then click OK.

The assignment file that is created contains the frames selected in the document window.

### Sharing content — Add content to existing assignments (InDesign)

Save the InDesign document, then select the text and graphics frames to add. Use one of these methods:

Use the Assignments panel menu: choose Add To Assignment, then select the assignment.

Move content into an existing assignment by dragging it from the Unassigned InCopy Content section of the Assignments panel.

Use the Selection tool to select page items, then drag those items onto an Assignment that already exists in the Assignments panel.

Another route is Edit > InCopy > Add [option] To Assignment; after choosing it, select the assignment.

Make the content files available to InCopy users by choosing Update All Assignments from the Assignments panel menu.

Note

Content can be added only to assignments in the same document. The same content can still be imported into multiple documents and added to an assignment in each document.

### Sharing content — Assignment file options (InDesign)

When creating or changing an assignment file, these options are available:

Assignment Name

Sets the assignment's unique identifier in the Assignments panel, such as "Ocean article." The name must follow the operating system's file-naming rules.

Assigned To

Sets the unique identifier for the user assigned to the files. In the Assignments panel, the user's name appears in parentheses after the assignment name. This field is informational only; entering a name does not give the user extra rights or permissions.

Color

Shows colors that can mark the current assignment's frames in the document window and its assignment names in the Assignments panel. The color coding separates frames in one assignment from frames in another, and also separates them from unassigned frames. Use View > Extras > Show/Hide Assigned Frames to show or hide this color coding. In InCopy, color coding appears only in Layout view.

Note

If assigned-frame display does not toggle as expected, the frames may be tagged for XML and View > Structure > Show Tagged Frames may be turned on. Assigned frames and tagged frames cannot be shown at the same time.

Change

Click the Change button to choose where the assignments folder is stored. By default, InDesign creates the assignments folder in the same location as the InDesign file.

Placeholder Frames

Allows InCopy users to view the text and graphics frames in the assignment, along with boxes or other shapes standing in for all other frames on those InDesign pages. Every frame and placeholder matches the size, shape, and location of its InDesign original. Placeholder frames are empty shapes and do not display any content from the InDesign document. Placeholder Frames gives the least fidelity and the fastest performance. In InCopy, placeholder frames appear only in Layout view. InCopy users cannot check out or edit placeholder frames.

Assigned Spreads

Allows InCopy users to view every assigned frame, plus the full contents of other frames on the same spread that are not included in the assignment. In InCopy, content in frames outside an assignment cannot be edited and appears only in Layout view.

All Spreads

Exports all content from the InDesign document into the assignment file. This setting offers the greatest fidelity and also the slowest performance, because the assignment file shows the design and layout for every page, including pages unrelated to the section being edited.

Linked Image Files When Packaging

Adds copies of linked images to the assignment package. Turning on this option lets InCopy users access images, but it makes the package larger. InCopy users can include images when returning a package.

### Sharing content — Export content as separate InCopy files (InDesign)

If a workgroup wants separate files instead of assignments, InCopy content can be exported without an assignment file. Rather than producing one assignment file that points to multiple content files and includes layout data, this approach creates an individual .icml file for each selected text or graphics frame. To view the editing context, also open the related InDesign document (.indd).

Adapt the InDesign document to match the workflow. For example, to collect all editor comments in one file, create a dedicated layer for those comments, then export all content on that layer.

Note

For a faster separate-file export, select frames with the Selection tool and drag them into Unassigned InCopy Content in the Assignments panel.

In InDesign, create a document containing one or more text frames, graphics frames, or placeholder items. Then do one of the following:

Select the text or graphics frame for a single story, or Shift-click to select several frames.

Click inside a story to place an insertion point, or select text within a text frame.

Use Edit > InCopy > Export, then choose an option:

Selection

Exports the selected text and graphics frames.

Layer

Exports the selected layer's content.

All Stories

Exports stories that have not yet been exported.

All Graphics

Exports graphics that have not yet been exported.

All Graphics And Stories

Exports stories and graphics that have not yet been exported.

Note

After exporting all document content, if you later add more text or graphics frames to that document, save time by running Export > All Stories, Export > All Graphics, or Export > All Graphics And Stories again. InDesign exports only the new content.

Enter a file name and location, then click Save.

The name you enter is used as the prefix for each exported content file in the file system. For multiple exported text frames, InDesign automatically adds the opening characters of the text to that prefix; for example, "mystory-Upcoming cycling events.icml." Graphics-frame exports use names such as "mystory-graphic," "mystory-graphic-1," and so on. The file system, the InCopy story bar, and status messages all show the file name.

Save the InDesign file when InDesign prompts you.

At this point, the InCopy content is managed and available for other workflow users to check out and edit.

Shared content is listed in the Links panel in the same way as imported graphics. If a shared file is moved manually, update its link through the Links panel.

Note

After export, the Available icon appears on the text frame in InDesign and InCopy, and in the Assignments panel in InCopy. The word [Editing] appears in the InCopy story bar.

### More like this

- Workflow icons
- Placing InCopy files in InDesign documents
- Relink missing assignment files (InDesign)
- Best practices for working with managed files

## Stand-alone documents — Work with stand-alone documents

An InCopy document with no associated InDesign document is a stand-alone document. For stand-alone documents, you can configure and change text area, page size, and orientation. If the story is later linked to an InDesign document, however, the InDesign settings take precedence over the settings chosen in InCopy.

Note

Save Preset can store document settings for reuse. When making a new document, select the preset from the Document Preset menu and click OK instead of changing each setting again. In an editorial workgroup, these saved presets can be shared with teammates. (See Define custom document presets.)

### Stand-alone documents — Create a stand-alone document

Choose File > New. For a document without facing pages on each spread, turn off Facing Pages. In the Text Area menu, choose Frame Grid when the document needs a grid for Japanese character composition; choose Text Frame when it needs a plain text frame. (See About frame grids in InCopy documents.) In the Text Area section, enter values for Width and Depth. The text dimensions supply line-break accuracy without relying on InDesign copyfit data. Set the text direction to horizontal or vertical.

This setting can be changed later with Type > Writing Direction > Horizontal or Vertical.

Under Grid Attributes, set frame grid characteristics, including vertical scaling, horizontal scaling, character aki, and line aki. For related details, see Document setup options for frame grids. When you create a plain text frame, these grid attributes are hidden. Choose a page size from the list, or type Width and Height values. Page size means the final trimmed size after bleeds or outside-page marks are removed. Click OK.

### Stand-alone documents — Open a stand-alone document

An InCopy content file (.icml) created in InCopy or exported from InDesign can be opened in InCopy. These InCopy content files do not display page geometry from the InDesign layout when opened in InCopy. You can also open documents saved by earlier InCopy versions, as well as InCopy template files (.icmt).

Open Microsoft Word files or text files directly in InCopy, then save them in Text Only (.TXT) or Rich Text Format (.RTF).

Use File > Open, select the document, and click Open.

You can also choose File > Open Recent and pick one of your recently saved documents. To set how many recent documents appear, choose Edit > Preferences > File Handling (Windows), or InCopy > Preferences > File Handling, then enter a value for Number Of Recent Items To Display.

### Stand-alone documents — Change document layout

From any view of a stand-alone document, choose File > Document Setup. In the dialog box that opens, select the basic layout options. Click OK.

### Stand-alone documents — Define custom document presets

Custom document settings can be created and shared with the workgroup, which saves time and keeps similar documents consistent.

Choose File > Document Presets > Define. Then use one of these methods:

To create a new preset, click New and enter a preset name.

To build from an existing preset, select a preset in the list and click Edit.

For a different settings set, click Load, open a document settings file (.icst), and click Edit.

In the dialog box, choose the basic layout options. (See Work with stand-alone documents for option descriptions.) Click OK twice.

Note

A document preset can be saved as a separate file and distributed to other users. Use the Save and Load buttons in the Document Presets dialog box to save and load document preset files.

### Stand-alone documents — Linking InCopy files to InDesign

After you connect a stand-alone InCopy story to an InDesign document, formatting from InDesign takes precedence over the story's own layout and design settings.

InDesign can establish that relationship between InCopy files and InDesign layouts in several ways; the common workflow is to place an InCopy (.icml) file into an InDesign layout.

### Stand-alone documents — Using Adobe Bridge with InCopy

Adobe Bridge runs on multiple platforms and ships with AdobeCreative Suite components. It is used to find, arrange, and browse assets for print, web, video, and audio work. You can launch Adobe Bridge from any Creative Suitecomponent except Adobe Acrobat, then use it with Adobe asset types as well as non-Adobe files.

From Adobe Bridge, you can:

Manage image, footage, and audio files: In Adobe Bridge, preview, find, sort, and process files without launching the separate authoring apps. You can edit file metadata there and place files into documents, projects, or compositions.

In Adobe Bridge, inspect links from an InDesign or InCopy document as thumbnails without opening the document itself.

Run automated work, including batch commands.

Keep color settings synchronized among color-managed Creative Suite components.

Open a live web conference for desktop sharing and document review.

### Stand-alone documents — Browse for files by using Adobe Bridge

Adobe Bridge helps organize, browse, and locate assets for print, web, and mobile content.

Open the Adobe Bridge Browser by choosing File >Browse In Bridge, or use the Adobe Bridge icon on the application bar.

### Stand-alone documents — Scripting in InCopy

Scripting can automate routine work or add larger custom capabilities. A script may handle a common repeated action, while a more ambitious one can behave like a new feature. You can write scripts yourself or run scripts written by others. In InCopy, run them from the Scripts panel (Window > Utilities > Scripts).

For scripting details, use Adobe's InCopy Scripting Guide.

### More like this

- Save documents
- Place (import) text
- Working with managed files
