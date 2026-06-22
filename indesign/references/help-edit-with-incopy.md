# About Assignment Files, Set User Identification, Set Up Assignment Packages, Create And Manage Assignments ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About assignment files between InDesign and InCopy; Set user identification; Set up assignment packages for InCopy workflows; Create and manage assignments; Relink or unlink assignment files; Open and update managed content; Check in and check out content; Save managed layout changes; Workflow icons for managed files.

## About assignment files between InDesign and InCopy

Assignment files help organize content and support collaboration between Adobe InDesign and InCopy.

Export content one item at a time or collect related items, such as story text and graphics, into assignments. Assignment files link InDesign with InCopy so designers and editors can share one document while layout control remains with the design side.

### How assignments work

From an InDesign document, designers export chosen text or graphics, producing linked InCopy story files (.icml) that editors update in InCopy. These files stay synchronized with the original InDesign document, so multiple contributors can change content without altering layout control.

Assignment files can be created only by InDesign users; InCopy users open and edit assigned content. InCopy users see the content assigned to them plus enough layout context to judge how it fits in the design.

### What assignment files contain

Assignment files (.icma) act as containers for organizing content for collaborative editing. When an assignment is created in InDesign, a folder is created next to the InDesign document. That folder holds the assignment file and a content subfolder containing exported InCopy story files (.icml).

Every assignment file includes:

- Links to page items: points to assigned text frames, graphic frames, and placeholder frames.
- Transformation data: records graphics changes, including scaling, rotation, or repositioning.
- Page geometry: describes layout so the frame positions make sense within the overall design.
- Visual indicators: color highlights identify assigned frames in InDesign and InCopy.

### Assignment file options in InDesign

While creating or editing an assignment, several settings define assignment appearance and how InCopy users see document context.

- Assignment Name

The Assignments panel uses this name to identify the assignment. The name has to comply with file-naming rules for your operating system.

- Assigned to

This is the user name responsible for the assignment. It appears in parentheses beside the assignment name; it is informational only and does not set permissions.

- Color

Sets highlight color for frames in the assignment and for the assignment name in the Assignments panel. Color helps separate assigned frames from unassigned frames.

- Location for Assignment File

Sets the storage location for the assignment folder. Unless changed, it is placed beside the InDesign document.

- Placeholder Frames

Shows assignment frames plus empty placeholder shapes for other page frames. This option is fastest, but layout detail is minimal.

Note

Use View > Structure > Show Tagged Frames to turn assigned-frame color coding on or off. The display cannot show assigned frames together with XML-tagged frames.

- Assigned Spreads

Shows assigned frames and full content from other frames on the same spread. Content outside the assignment remains visible but cannot be edited.

- All Spreads

Adds every document page to the assignment file. It gives the most layout context, but performance can drop because additional content loads.

- Linked Image Files when Packaging

Includes copies of linked images while creating an assignment package. InCopy users can see images, but package size grows.

## Set user identification

In Adobe InDesign, set a username so managed workflows can record editing activity and permit content checkouts.

Managed content requires every participant to have a username; this identifies who currently has content checked out and enables editing. Before changing your name, check in anything you have checked out, because otherwise editing access may be lost. Each application stores a single user identification for each user.

Choose File > User.

Type a unique username.

Select OK.

Note

- When a workflow command is used before a username is set, InDesign prompts you for one.
- InCopy Notes and Track Changes also rely on the specified name when labeling a note author or a tracked change author.
- In the User dialog box, the color menu affects only notes and tracked changes; managed workflows do not use it.

## Set up assignment packages for InCopy workflows

Use assignments in Adobe InDesign to organize material and share it with InCopy users.

Assignment packages allow InDesign and InCopy users to work together when no shared server is available. InDesign users build packages with grouped content, send those packages to InCopy users for edits, and then import the returned updates. Opening and editing the packages requires InCopy to be installed.

Shared content in InDesign can be managed through assignment files that collect related items, or by exporting separate InCopy files. Assignments are the preferred route because they keep related content together and include layout context.

### Create and distribute assignment packages

In the Assignments panel, select the assignment you want to package.

Open the Assignments panel menu, then select Package for InCopy. Packaging is available only for checked-in content.

Choose where to save the ICAP package file, and then select Save.

Send the ICAP file to the assigned InCopy user by email or file transfer.

Note

- To cancel an assignment package, select the package and choose Cancel Package from the Assignments panel menu. Confirm with OK.
- While content is packaged, it is checked out to the InCopy user, so InDesign cannot edit it until the package comes back.

### Open and edit returned packages

File locking in the managed workflow prevents users from overwriting one another. Checked-out content can be edited by only one user at a time.

To open the returned package (IDAP file) in InDesign, select File > Open.

Inspect the updated content in the document. The layout reflects the changes right away.

When edits are needed, select the assignment in the Assignments panel, then choose Check Out from the panel menu.

After editing, choose Check In from the panel menu. When View > Extras > Show Frame Edges makes frame edges visible, status appears both in the Assignments panel and on frame icons.

## Create and manage assignments

In Adobe InDesign, assignment packages help organize content and share it with InCopy users.

Create assignments when content needs to be grouped for collaboration with InCopy users. Creating an assignment makes InDesign generate an assignment file (ICMA) plus a content folder that contains exported InCopy story files (ICML); these can be shared from a network location or delivered as an assignment package.

Save the InDesign document to capture the current changes.

Choose the text frames, graphics frames, or other content for the assignment.

Open Window > Editorial > Assignments.

Use the panel menu icon and choose New Assignment.

Provide the assignment name, choose the assigned user, and configure assignment options in the New Assignment dialog box.

Select OK.

To place more content in existing assignment files, select additional frames in the document and drag them onto the assignment name in the Assignments panel, or choose Add to Assignment from the panel menu.

### Move content between assignments

Save the InDesign document.

In the Assignments panel, use the arrow to the left of the assignment name to show what it contains.

Choose an item within an assignment.

Use one of these actions:

- Drag content from the source assignment to the target assignment.
- For an existing assignment, choose Add to Assignment from the Assignments panel menu, then select the desired assignment.
- For a new assignment created during the move, choose Add to Assignment > New from the Assignments panel menu, then configure options in the New Assignment dialog box.

When the assignment list is short, dragging content items between assignments or into the Unassigned InCopy Content section is quicker than menu-based commands.

Select Update All Assignments from the Assignments panel menu.

### Delete assignments

Deleting an assignment removes it from both storage and the document, while its content is reassigned to Unassigned InCopy Content.

Choose one or multiple assignments in the Assignments panel.

From the panel menu, select Delete Assignment.

Note

When an InCopy user has an assignment open during deletion from InDesign, an alert tells them the assignment has been deleted. The content files themselves remain in place, so updates can continue without losing changes.

## Relink or unlink assignment files

In Adobe InDesign, missing assignments can be reconnected, or content can be removed from managed workflows when necessary.

When an assignment file is moved or deleted, InDesign no longer has a valid link. You can restore the connection by recreating the assignment, assigning a new location, or unlinking it so the content is embedded and removed from the workflow.

Assignments connect InDesign content to InCopy. If that connection breaks, synchronization pauses until the assignment is relinked or removed.

### Recreate in original location

Open the InDesign document that contains the missing assignments.

Select Window > Assignments.

Select the missing assignment; it remains listed in the Assignments panel.

From the Assignments panel menu, choose Update Selected Assignments.

To recreate every missing assignment file at once, use Update All Assignments from the panel menu.

### Relocate to new location

Select Window > Assignments.

In the Assignments panel, select the assignment you want to relocate.

You may instead open the Assignment Options dialog box by double-clicking the assignment name, select Change, and provide the new location.

Choose Change Assignment Location from the panel menu.

When the dialog box opens, browse to the destination and specify a filename.

Select Save.

### Unlink content files

Select Window > Links.

In the Links panel, select the content file whose extension is .icml or .incx.

From the Links panel menu, choose Unlink.

Approve the prompt.

Tip

The Unlink command embeds the content inside the document and removes the disk link to the InCopy file. When used on a file you have checked out, it removes that file from the workflow and deletes the lock file. To restore the link immediately, select Edit > Undo Unlink.

## Open and update managed content

In Adobe InDesign, open shared files and synchronize changes used in collaborative workflows.

Shared content keeps collaborators' files in sync while layout and linked content are controlled from within the document. Check status and apply updates through the Assignments panel and Links panel.

### Open shared content

Select File > Open.

Select an InDesign file (INDD) that contains assignments, then select Open.

Check the Assignments panel (Window > Assignments) for available content.

### Update assignment files

Select Window > Assignments.

In the Assignments panel, do one of the following:

- Specific assignments: Choose the assignments, then use Update Selected Assignments from the panel menu.
- Outdated assignments: Use Update Out-of-Date Assignments from the panel menu.
- All assignments: Use Update All Assignments from the panel menu.

### Update content

Use the Assignments panel to find out-of-date icons, then update content so it matches the current file-system version. Updating neither requires check-in or check-out nor grants editing rights, but problems can occur if someone has removed a lock.

Choose File > Open, choose the document, and open it.

Select OK when prompted.

Select Window > Links.

In the Links panel, select the text or graphics frames.

Select Update Link from the panel menu.

## Check in and check out content

In Adobe InDesign managed workflows, lock content for exclusive editing and then release it for others.

Checking out content creates a lock file (IDLK), which gives you sole editing control and blocks other users from changing it. Checking in saves the content for shared access and releases that lock.

Only content files, not InDesign documents, are eligible for check-out. Exporting a text or graphics frame checks it in automatically. Status icons show editing activity, and the Assignments panel identifies the person working on each item.

### Check out content

Choose the text or graphics frames in the layout.

Use Edit > InCopy > Check Out.

If an update prompt appears, select OK.

### Check in content

Choose the content in the layout.

Use Edit > InCopy > Check In.

As another route, choose the files in the Assignments panel, then use Check Out or Check In from the panel menu.

Alert

Do not manually delete lock files (IDLK) from the file system. If lock files are removed while content is checked out, multiple users may be able to edit at the same time, which can cause lost work.

## Save managed layout changes

In Adobe InDesign, save assignment updates so layout changes are shared with InCopy users editing content.

As you work on content you have checked out, you can save your changes and update the file copy.

### Save checked-out content

Choose content frames in the layout.

Use Edit > InCopy > Save Content.

File > Save writes the InDesign document together with every checked-out content file. Assignment files do not update automatically, and InCopy files may be shown as out of date.

### Save document with new name

Select File > Save As.

Provide a different name and destination, then select Save.

The saved document keeps its links to the current InCopy files. Assignments can seem absent until they are refreshed.

### Save document copy

Select File > Save a Copy.

Set the copy's name and destination, then select Save.

A duplicate document is produced while retaining links to the current InCopy files.

Note

Once content has been saved, InCopy users can refresh local copies to view your newest edits. The content stays checked out under your name until you check it in with Edit > InCopy > Check In.

## Workflow icons for managed files

Use icon status and placement in Adobe InDesign to track whether collaborative content is available, owned, or current.

In frame overlays and panel indicators, InDesign reports edit state, owner, and currency. These signals appear on frames in Layout view, in the story bar, and within the Assignments and Links panels; hover to see details. To display frame icons, show frame edges and work in Normal mode.

Note

When Available, In Use, Editing, Text content, or Graphics content shows the Out-of-date icon indicator, the file system contains a newer version than the one displayed locally. Update the content so the local view matches the newest server version.
