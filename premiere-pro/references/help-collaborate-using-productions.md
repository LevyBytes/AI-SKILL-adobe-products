# About Productions, Create A Production, Configure Productions Settings, Add Projects To A Production ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About Productions; Create a Production; Configure Productions settings; Build a Production; Move clips and sequences between projects in a Production; Copy clips across projects; Find and edit source clips; How clips, markers, and labels work in a Production; Change project lock status in Production; Collaborate with other teams and team members; Server time and productions; General best practices for using Productions on shared storage; Storage vendors who have tested Productions.

## About Productions

Learn how Productions support efficient team collaboration in Premiere.

Productions gives editors a structure for multi-project organization, asset sharing across projects, and streamlined work whether the editor is working alone or with a team.

Getting Started with Productions in Adobe Premiere.

Productions is a flexible and scalable framework for handling workflows that span multiple projects. With Productions, large and complex jobs can be separated into manageable projects, improving efficiency and collaboration on shared local storage. Assets can move between projects inside a Production without creating duplicate files.

For individual editors, related projects can be grouped to improve organization and efficiency. Large projects such as documentaries, films, and TV can be split into reels or episodes, allowing multiple editors to work in their preferred ways on a shared storage network.

The established Premiere project format is the basic building block for Productions. Productions adds another layer that links the projects and their assets. A project inside a Production keeps the attributes of a .pproj file. Existing Premiere projects can be added to a Production, and, when necessary, removed again for use as self-standing Premiere projects.

Tip

For detailed guidance on long form and episodic workflows with Productions, see the Working with Productions chapter in the Best Practices and Workflow guide. The guide was written by industry experts and Adobe engineers, covers topics from dailies through turnovers, and is meant to help teams use Premiere in a professional workflow.

### Manage multi-project workflows

Productions lets large or complex workflows be split into smaller parts while still using the existing Premiere project format. Productions links those projects into the larger workflow and helps keep both projects and assets orderly and efficient.

### Keep everything organized and synchronized

Cross-project media references let a production reuse assets without making duplicate files. That keeps the separate projects lighter and faster.

In Premiere, the Production panel acts as the control area for multi-project workflows. Projects placed in the Productions folder become part of the production. On both macOS and Windows, disk changes are reflected in Premiere, and changes made in Premiere are written back to disk, keeping the production synchronized.

### Designed for collaboration

With shared local storage, different editors can work in separate projects within the same production. Project Locking prevents someone else from overwriting your edits: colleagues may open your project and copy material from it, but they cannot change it until your edit is complete.

Every project in a Production uses the same settings, including scratch disks. As a result, preview files rendered by one editor are available to everyone who opens that project, which improves playback continuity and saves time across the team.

### Security because you control your media

Productions keeps content under your control. Projects and assets may remain entirely on local storage, and nothing moves to the cloud unless you place it there. If the workflow requires it, you can work without an internet connection.

## Create a Production

### Create a Production and begin collaborating in Adobe Premiere.

Choose File > New > Production.

Enter a name for the production; Premiere also uses that name for the folder on disk.

Set the new Production project's name and storage location in the New Production dialog box.

In that same New Production dialog box, define what the new Production project is called and where it will be stored.

Select the blue path text to choose the location for the production folder. For collaborative work, store the production on shared storage.

Select Create.

### Open a Production

Premiere allows only one production to be open at a time, which differs from stand-alone project files. To open a Production, use one of these methods:

- From the Premiere welcome screen, or while a stand-alone project is open, select File > Open Production.
- Choose a recently used production from the dropdown list.
- Select Open or Browse, go to an existing production folder, and choose it.

## Configure Productions settings

### Get started with Productions and review what matters when configuring settings in Adobe Premiere.

Before working with productions, review these areas:

- Storage strategy
- Preferences setup
- Production settings choices

### Decide on your storage strategy

An individual editor can store project files in any location, including a local disk.

Teams of editors need shared storage. Use the recommended practices for configuring shared storage for productions.

### Set up your preferences

Go to the Edit > Preferences (Windows) or Premiere > Preferences (macOS) dialog box.

In Preferences > Media, turn off these options:

- Write XMP ID to files on import: disable this option.
- Write clip markers to XMP: disable this option.
- Enable clip and XMP metadata linking: disable this option.

In Preferences > Collaboration:

- Enable project locking: leave this checked.
- User Name: enter the name other editors will see when you open a project.

Select Window > Workspaces and turn off Import Workspaces from Projects. This prevents your workspace from changing when projects from other editors are opened.

### Choose your Production settings

Production settings apply to every project stored in the Productions folder. During collaboration in a production, each editor works with the same shared settings for that production. To open them, select File > Production Settings.

### General settings

The renderer setting is shared by all systems working in the production. If a system cannot exactly match the renderer chosen in the production settings, Premiere chooses the closest renderer available.

### Color settings

These Color settings define Premiere's behind-the-scenes color handling. They affect image brightness interpretation, color-processing accuracy, and the Program Monitor preview. Together, they help the editing view match common display standards such as broadcast or HDR, while making color adjustments, LUTs, and effects behave predictably. In practice, this panel establishes the baseline rules for color accuracy, brightness, and preview consistency across the whole project.

### Scratch disk settings

For all scratch disk settings, the default value is Same as Production. This means the folder containing the production folder also contains the scratch disk folders. When editorial teams use shared storage, the scratch disk folders should be in a shared location visible to all edit systems.

Media referenced through Motion Graphics Templates or Creative Cloud Libraries is available to every edit system only when the scratch disk setting points to a shared location.

Note

To recover a file from Auto Save, go to the scratch disk location for Auto Save. Find the project file whose name matches the project you need. There is always one copy of the project file with no username or timestamp in the filename, and that copy is always the most recent Auto Save. Older project copies include a timestamp and the username appended as ProjectName-YYYY-MM-`DD_HH`-MM-SS-UserName.prproj. That naming pattern identifies earlier Auto Save versions.

### Ingest settings

Productions keep ingest settings turned off. You can still create proxy files: select clips, then use the context menu to choose Proxy > Create Proxies or Attach Proxies.

## Build a Production

### Ways to build a Production in Adobe Premiere include creating new projects, bringing in existing projects, and organizing the production structure.

A production can grow through several actions: create files or folders, add new projects inside a production, and move or rename projects and folders.

### Create projects in a production

From the Production panel settings menu, choose New Project.

Enter a project name, then select OK.

### Add existing projects to a production

In the Production panel, right-click, or open the Production panel menu; choose Add Project to Production, then pick a project from disk.

Premiere copies the project into the production. If needed, Premiere updates the project version and verifies that the production does not already contain a duplicate project.

Note

Project files can be added through Windows Explorer or Finder, but only do this when you know the file was created by the same Premiere Pro version. Also confirm that it is not duplicating a project already present in the production.

Productions supersede the older Shared Projects workflow, but the two workflows differ in important ways. Adobe recommends completing any current work that uses Shared Projects instead of trying to migrate it into a production.

### Create folders in a production

From the Production panel menu, choose New Folder, or use the context menu and choose New Folder.

Enter a folder name, then click OK.

### Move and rename projects and folders

- Projects can be moved or renamed when they are open in read/write mode (green pen icon) or when they are closed and do not show a red lock.
- Folders can be moved and renamed only when every project inside them is either in Open read/write mode or closed without a red lock.

## Move clips and sequences between projects in a Production

### Moving clips and sequences between projects is part of a Production workflow.

Open the Production panel with Window > Production.

Confirm that the source project and destination project are both listed in the Production panel and have read/write status.

In the source project's Project panel, find the clip or sequence you intend to move.

Drag that item from the Project panel to the destination project's name in the Production panel.

To place a clip in another project, drop it in the Production workspace.

To put a clip in a different project, drop it in the Production workspace.

Release the item on the target project.

After the move, the item is placed at the root level of the new project, and that project's Project panel becomes active automatically.

## Copy clips across projects

### In Adobe Premiere, Production projects can use beginner-friendly steps to copy clips or sequences and move those duplicates between projects.

In the Project panel, select the clip or sequence that should be copied.

Choose Edit > Duplicate to make a duplicate inside the current project.

Move the duplicated item by dragging it into another project in the Production panel.

Copy one sequence from a project, then paste that sequence into a different project.

In a Production, hold Ctrl (Windows) or Command (macOS) while dragging the item from one project to another.

## Find and edit source clips

### In an Adobe Premiere Production, you can find where a clip comes from and reconnect it when the original project is not located right away.

In the timeline, right-click the clip and choose Reveal In Project to locate its source.

Premiere automatically opens the source project, and if it does not find the clip at once, it searches the other open projects.

Open the source clip in the Source Monitor by double-clicking it in the Project panel.

Open Effect Controls by choosing Window > Effect Controls.

Once the source clip's project is open in read-write mode, use the Effect Controls panel to add, revise, or delete source clip effects.

Selecting a sequence clip shows source clip effects in the Source tab, but editing remains unavailable there. The Program Monitor still renders those visual results, and Global FX Mute bypasses them in the timeline. To add, modify, or remove source clip effects, right-click the clip, choose Reveal In Project, and open the source clip.

### Reassociate missing source clips

Use Edit > Reassociate Source Clips when the source clip is still missing and must be reconnected.

Browse to the project file that includes the missing source clip, then select it.

Premiere examines the selected project and reconnects clips that match.

## How clips, markers, and labels work in a Production

### This section explains Production behavior for clips, markers, and labels, including how Adobe Premiere references media, propagates marker changes, and treats label colors.

### Clips in a Production

Productions use a defined clip-reference approach that controls clip behavior across projects.

- This clip-referencing model differs from the behavior in other project types.
- In the model, clips reside in a media project, while a timeline project holds a sequence assembled from those clips.
- Editing media-project clips into a sequence does not make additional source clips. The timeline project contains only the sequence.
- Even after all 100 clips are cut into the sequence, the timeline project still displays a single item. Sequence clips point back to the original source clips in the media project.
- Moving sequences between projects does not create duplicate clips under this model.
- The model is available only inside a Production.
- In a standalone, non-Production project, every sequence clip must have a matching source clip in that same project.

One way to understand the model is to picture a Production with two projects: a Media Project that stores the clips, plus a timeline project that builds a sequence from them.

A Production can split source clips and sequences into separate projects.

A Production can keep source clips and sequences in different projects.

### Markers in a Production

Because a sequence can use source clips stored in another project, marker behavior is tied to read/write access on both projects. If the source-clip project and the sequence project are both open with read and write access, adding a clip-level marker on either instance also shows it on the other instance.

When a marker is added in a sequence while the source-clip project is not open in read and write mode, that marker remains only in the sequence at first. After both projects are opened again in read and write mode, the marker syncs to the source clip and then back.

### Labels in a Production

After a source clip is edited into a sequence, it brings along the label color from its project. After that point, the label color is separate. Updating the sequence label color does not change the project label, and editing the project label does not change the sequence.

Separate instances of the same clip within a sequence also do not update each other.

### Multi-camera source sequences

Within Productions, Multi-camera source sequences (multicams) are treated the same way as standard source clips. To edit a multicam, set the project that contains it to read/write mode. Press Cmd (macOS) or Ctrl (Windows), then double-click a multicam clip to open its source project and show it in the timeline for editing.

## Change project lock status in Production

### Manage a project's lock status by switching among the three available locking states.

### Project lock status

Projects shown in the Production panel use one of three states:

### Open, Read/Write

In this state, a project shows a solid icon with a green pen, which means you are the only editor who can change it. Other editors may open the project, but they can view it only. The user name set in Preferences > Collaboration appears beside this project in the Project Locked column. The Production panel allows this project to be moved or renamed.

### Open, Read Only

For this state, the project uses a solid icon and may also display a red lock. Either way, you can only view the project and cannot change it. A red lock indicates that another editor has the project open Read/Write; that editor's name appears beside that project. Open Timeline or Project panels from these projects show a lock icon in the panel tab. Projects in this state cannot be moved or renamed. Cmd/Ctrl while double-clicking a project opens it in read-only mode.

### Closed

In this state, a project has an outlined icon and may also display a red lock. Either way, the project is closed on your computer and does not consume memory or processing power. When a red lock appears, the editor currently working on the project is named next to it. Closed projects can be moved or renamed only when no red lock icon is present.

### Change a project lock status

Click the green pencil icon or red lock icon in the Project panel.

Another option is to right-click the project in the Production panel and choose Read/Write or Read/Only mode.

When a project is read-only, or when another editor has locked it and it is read-only for you, you can still open it for these tasks:

- Open clips and sequences in the Source Monitor
- Mark In/Out points and edit from the Source Monitor
- Use the timeline and Program Monitor to play sequences
- Export media plus XML, AAF, EDL, etc.
- Copy project items into an open Read/Write project

Premiere notifies you if another editor saves changes to a read-only project that you have open. If you are working in a Read-Only project and the editor with write access saves new changes, Premiere shows a notification. In the Production panel, the project name changes to italics. In the Project panel, a yellow triangle appears beside the project. These signals mean that your open copy is no longer the latest project version. Someone else has changed the project. Someone else has changed the project.

Tip

- To view the new changes, right-click the project in the Production panel and choose Refresh.
- To update every project in a production, choose File > Refresh All Projects.

## Collaborate with other teams and team members

### Broadcast productions can collaborate more smoothly by using team workflows, virtualized setups, and faster review and approval practices.

Production teams seeking worldwide talent need low-latency, fast methods for sharing media, projects, and active sessions across locations. Collaborative workflows are now essential. Basic screen-sharing is often not enough, and file uploads for feedback can slow everything down. Modern productions need collaboration across the full creative process, not only during review and approval.

### Collaboration and the creative process

Adobe Team Projects is included with Creative Cloud Teams and Enterprise accounts and lets several users work in the same Premiere or After Effects project from anywhere in the world. Whenever one user changes the project, it can be synchronized so collaborators can accept or reject that change. As broadcasters move toward virtualized Adobe workflows, this approach matters. For example, a Team Project can be configured so editors work either on-premise or on a cloud-based Virtual Machine. Using the cloud instance, a user anywhere in the globe can assemble a rough-cut story and then share it with an on-premises facility for local finishing. This makes on-location editing possible, helping projects finish faster and lowering editorial overhead. When paired with technologies such as NDI video streaming and smart cloud architecture, the result is an over-the-shoulder collaborative experience that works no matter where users are located.

### Review and approval

Earlier review workflows often meant exporting media, posting it to a private channel platform, for example YouTube, and then spending a lot of time trading email messages while making small changes.

That pattern commonly caused misunderstandings and delayed projects. Review and approval tools available on the Adobe Exchange can shorten the time needed to review and approve a project. Users can now review in fine detail, which improves collaboration and adds new functions to Adobe workflows. They can work directly in Premiere or in third-party applications, adding comments and annotations to shots, scenes, and broader artistic choices. By integrating an audit trail of comments, Premiere becomes a collaboration platform where team members, editors, and other contributors can work together as the project develops.

## Server time and productions

### Why synchronized clocks matter for Productions in Adobe Premiere

Follow these practices so time values stay dependable while you work with Productions:

- When teams collaborate with productions, treat the file system's reported file timestamps as the source of truth.
- Configure the shared storage system's date and time controls instead of leaving them unchecked.
- Confirm that each editing system clock lines up with the storage server clock.
- For the simplest accuracy path, configure the server to communicate with an NTP time server.
- If an NTP time server cannot be used, enter the server time manually.
- Review the server clock regularly so drift is caught before it causes trouble.
- Keep clock offsets under a few minutes to reduce the chance of unexpected behavior in Premiere.

## General best practices for using Productions on shared storage

### Shared-storage practices for Adobe Premiere Productions

Use these core practices when Premiere Productions are stored on shared storage:

- Network Attached Storage (NAS) Connections: NAS hardware can expose storage through several protocols. For shared storage access, choose SMB instead of AFP or NFS.

  - On macOS, use an identical volume name on every system.
  - On Windows, assign the share to the same drive letter on every system.

- Proprietary shared storage systems: Productions can operate on storage platforms that use proprietary file systems or client applications when those platforms refresh the file system in a way Premiere understands. Confirm compatibility with the storage provider.
- Scratch disks: Shared storage is acceptable for scratch disks such as Auto Save, Preview Files, and similar files. By default, a Production stores scratch disks next to the Production folder; you can change that location in Production settings.
- Media cache files and database: Leave Media Cache Files and Media Cache Database in the default location on the system boot drive, or put them on a separate fast directly attached SSD for each workstation. Adobe support guidance excludes shared-storage placement for those cache files.

  - Minimum: for Productions, provide 1Gbps per workstation.
  - Recommended: use 10Gbps or faster when frame sizes exceed HD, Productions are larger, or several users work at the same time. Increase storage and network capacity as the concurrent user count grows.

- Consumer file syncing services: A Production can be stored in services such as Dropbox or Google Drive, but those services are not recommended as a replacement for shared storage. Production collaboration is not built around that type of service.

## Storage vendors who have tested Productions

### Tested shared-storage technology partners for Productions in Adobe Premiere

These Adobe technology partners have tested and qualified storage systems for reliable use with Productions in Premiere:

### Technology partner webinar recordings

Use these partner materials when you need more detail on Productions workflow options.

- EditShare - Production, Group Editing, and Remote Workflows with Premiere (webinar recording)
- Also review Keycode Media - Adobe Productions for Premiere (webinar recording)
