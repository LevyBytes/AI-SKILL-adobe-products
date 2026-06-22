# Start Projects, Create New Project, Open Projects, Copy Project ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview of projects; Create new projects; Open projects; Copy projects; Consolidate and archive projects; Move projects to another computer; Delete projects; Edit multiple open projects; Save workspace when editing multiple projects simultaneously; Project locking with multiple open projects; Backward compatibility of projects; Create your own project templates.

## Overview of projects

### Learn the fundamentals for setting up a new project in Adobe Premiere.

### Premiere project file

Information about sequences and assets is kept in a project file (.pproj), including capture settings, transitions, and audio mixing details. While editing, that file tracks your changes. Premiere applies edits non-destructively, so source files are left unchanged. During export, Premiere writes a new file that includes the complete edit.

### Components of a project folder

When a project begins, Premiere creates a folder on the hard disk. The default location stores the project file, a record of project media, and any preview files or conformed audio files produced while editing.

### Project panel

In Edit mode, the Project panel lists the media used by the project along with created sequences. Bins in the Project panel can be used to organize those media items and sequences.

### Name a file

Use these general file-naming practices:

- Avoid special characters such as : ; / \ , . { } [ ] ( ) \* ? < > |! $., because some creative tools, file formats, and operating systems do not support them.
- Keep file names from becoming too long. Certain operating systems limit names to 255 characters.
- Put dates and times in this order: year, month, day, hour, minute, and second. This matters especially when collaborating internationally, because standard date formats are not universal.
- Preserve a stable sort order by adding leading zeros to clip numbers, such as "05" instead of "5."
- When versioning an export for handoff to another department, do not use the word "final."
- Keep the version numbers for sequences or timelines aligned with the exports. If the timeline says "v5," the export should also say "v5." Mismatches make it harder to connect notes on a particular cut to the correct revision.

## Create new projects

### Start a new Premiere project and configure it with settings that fit the workflow.

On the home screen, select New Project.

Enter a name and choose a location for the new project. When using a project template, select it here.

Enter a name and choose a location for the new project. When using a project template, select it here.

Provide the project name, choose where to save the file, and select the project template you want. You can also add a project template stored on your system.

Tip

(Optional) To bypass Import mode and bring media in from the Project panel, select Skip import mode. That choice stays enabled for later projects until you clear it.

Select the Settings icon to open Project Settings, including General, Color, Scratch Disks, and Ingest Settings.

Choose video clips and other media assets for the project. As items are selected, they appear in the Selection Tray at the bottom of the window. Right-click an asset in the tray to remove that item, or clear the whole tray if necessary.

In the Import Settings section of the Import desktop, use these options to organize files:

- Organize Media: organizes project media before editing begins. Create and name a new bin; the media appears there without being copied to a new location.
- Copy media: copies media files from a temporary source, such as a camera card or removable drive. Editing can start while Premiere copies the files in the background. MD5 checksum verification checks that files are not corrupted during copy.
- Create new sequence: reduces setup clicks. Premiere derives sequence settings, including resolution and frame rate, from the first selected asset. If Create new sequence is on, new media is added to the project as a new sequence. If it is off, new media is added in the Project panel.
- Automatic transcription: imports the media and creates a transcript automatically as soon as import finishes. This can save time later if captions are planned.

Select Create to import the media as a sequence in Premiere.

## Open projects

### Open Adobe Premiere projects.

Use File > Open Project. Shortcut: Ctrl + O (Windows), Command + O (macOS).

Navigate to the project file, then select Open.

If the Where Is The File dialog box appears, find the file with the Look In field, or choose one of these options:

- Find: opens Windows Explorer (Windows) or Finder (macOS) search.
- Skip: substitutes a missing file with a temporary offline clip for the current session. After the project is closed and opened again, a dialog asks you to locate the file or skip it another time.
- Skip All: applies the Skip behavior to every missing file, replacing them with temporary offline files.
- Skip Previews: prevents Premiere from looking for preview files already rendered for the project. The project may open faster, but some sequence areas may require rendering for best playback.
- Offline: substitutes a missing file with an offline clip, which is a placeholder preserving all references to the missing file throughout the project. Unlike the temporary offline clip made by Skip, an Offline placeholder remains between sessions, so missing files do not have to be located every time the project opens.
- Offline All: applies the Offline behavior to every missing file, replacing them with persistent offline files.

Caution

Do not delete source files while they are being used as clips in a Premiere project unless they were captured with device control and you intend to recapture them. Once the final movie has been delivered, source files can be deleted.

## Copy projects

### Use Adobe Premiere to copy a project to a different location.

Use the File > Project Manager menu command.

In the Project Manager dialog box, under Sequence, select the check box beside each sequence to include. A Shift-click on any one box selects every box.

Choose Collect Files and Copy to New Location to gather selected-sequence footage and place it in one storage location.

Gather the footage and copy it into a single storage location.

Gather the footage and copy it into a single storage location.

Premiere creates a new project file linked to the selected media. After Collect Files And Copy To New Location is selected, these options become available:

- Exclude Unused Clips: tells Project Manager not to include or copy media unused by the original project.
- Include Audio Conform Files: keeps audio conformed in the original project conformed in the copied project. If this is not selected, the new project uses less disk space, but Premiere conforms the audio again when the project is opened.
- Include Preview Files: keeps effects rendered in the original project rendered in the copied project. If this is not selected, the new project needs less disk space, but those effects are not rendered.
- Rename Media Files To Match Clip Names: renames copied footage files so they match the names of captured clips. Use this when captured clips were renamed inside the Project window and the copied footage files should carry the same name. Captured files that are imported, especially files captured with scene detection, may have unclear names, so renaming them from the Project window can help. This option updates the filename of the actual captured footage to reflect the new Project window name, making footage organization simpler. For an MXF file, this option does not change the User Clip Name in the file's XML; it changes the filename of the clip copied for the trimmed project so it matches the clip name shown in the Project panel.

Choose the destination path where Project Manager will save the specified files. Select Browse to choose a location other than the default.

When the copy is made, Project Manager creates "Copied\_[Project Name]" and puts the project, footage files, and other selected files in that folder.

Select OK.

## Consolidate and archive projects

### Archive and consolidate an Adobe Premiere project so required media is organized and stored efficiently.

Project Manager supports media and project management, especially for large projects containing many clips and different media formats. Large projects can be archived by transcoding all relevant files in projects and sequences to an intermediate or mezzanine codec.

Several Project Manager options consolidate relevant files into a mezzanine codec according to user-defined preferences. During consolidation, Project Manager copies only the source-footage portions used in sequences and creates a trimmed project automatically.

Choose File > Project Manager.

In the Project Manager window, use the Sequence section to check the sequences to include. Hold Shift and click any checkbox to select all boxes.

Select Consolidate and Transcode to gather used media into one codec for easier archiving.

Consolidate and archive the project by choosing sequences, setting options, and saving it.

Consolidate and archive the project by choosing sequences, setting options, and saving it.

These consolidation options are available:

- Source: chooses whether settings are matched from the Sequence, Individual Clips, or a specific Preset.
- Format: chooses the desired format, such as MXF OP1a or QuickTime.
- Preset: chooses a preset that corresponds to the selected format.

Choose these additional settings:

- Exclude Unused Clips: omits media not used in the selected sequences.
- Include Handles: keeps 0 to 999 extra frames on each clip side, before the In point and after the Out point.
- Rename Media Files to Match Clip Names: renames copied media files so they correspond to clip names in the project.

Select Browse to choose where the consolidated project will be saved. Check the Disk Space estimate for adequate storage, then select OK to start consolidation and archiving.

## Move projects to another computer

### Move an Adobe Premiere project to another computer by consolidating files and preserving the structure for editing continuity.

Select File > Project Manager.

In the Project Manager window, use the Sequence section to check the sequences to include. A Shift-click on any one box selects all boxes.

Choose Collect Files and Copy to New Location when all files should be copied.

Select Consolidate and Transcode to convert files into one codec for compatibility.

These consolidation options can be set:

- Check Exclude Unused Clips to leave out unused media.
- Specify Handles for extra frames at clip edges.

Select Browse to choose a save location for the project and files.

Select OK to consolidate the project. Move the saved folder to the new computer while keeping the file structure intact.

## Delete projects

### Delete an Adobe Premiere project.

On the computer or storage device, find the project file (.prproj).

Use the context menu on the project file, select Delete, or move it to the trash.

To remove the project permanently, empty the trash or recycle bin.

Deleting the project file does not remove the media files associated with it. Remove those files manually if needed.

## Edit multiple open projects

### Working with multiple projects in Adobe Premiere.

Premiere can keep more than one project open at the same time. Use that setup when you need to copy elements or assets from one project into another.

While a project is already open, either open another existing Premiere project or create a new one.

To see every currently open project, choose Window > Projects. Premiere lists the open projects together with their related panels.

Move media or sequences between projects by dragging them from one project to another. Dragging creates a copy in the destination project; the item remains in the original location.

## Save workspace when editing multiple projects simultaneously

### Custom workspaces help you switch quickly among Adobe Premiere projects.

For each open project, arrange panels, windows, and tools in the layout that fits your work.

After the layout is ready, choose Window > Workspaces > Save as New Workspace. Enter a workspace name, then select OK.

When several projects are open, switch to the project and layout you want by selecting its workspace from Window > Workspaces.

To restore the saved default layout when needed, choose Window > Workspaces > Reset to Saved Layout.

## Project locking with multiple open projects

### Project locking limits edit access to one user at a time so collaborators do not overwrite each other's work.

### About project locking

With shared local storage, editors can contribute to different projects within the same production. When a project is opened for editing, project locking immediately locks it, preventing other users from overwriting your changes. Teammates may still open the project and copy content from it, but editing stays unavailable to them until you finish your changes.

### Several projects open at once

When multiple projects are open, Premiere permits active editing in only one project at a time. Attempts to edit another project leave that project locked for editing until the current project is closed or deactivated.

### Several collaborators editing the same project

When editors on different machines work with the same project, project locking blocks one person's updates from replacing another person's changes. This is especially useful for team workflows. Every project in Production uses the same settings, including scratch disks, so preview files rendered by one editor can be available to other editors using that project, supporting smoother playback and reducing time spent rendering again.

## Backward compatibility of projects

### Adobe Premiere keeps project compatibility within a major release family.

Project files can move forward and backward inside a single major release. Inside the 15.x family, a Premiere v15.x project opens and saves in any Premiere 15.x release; Dynamic Link with After Effects 18.x versions is covered too.

### Opening a project from a previous version in Premiere 15.x

Opening a project made in an earlier release causes Premiere 15.x to preserve the original project and generate a separate 15.x project file.

Use the Convert Project dialog box when converting a project created in an earlier version of Premiere.

For a project authored in an older Premiere release, the Convert Project dialog box is the conversion path.

### Opening a 15.x project in a previous version of Premiere

After a project has been opened in the newest Premiere version, return it to a previous version by saving the project as XML and importing that XML into the older version.

Review how Adobe keeps compatibility within major release versions of Premiere.

## Create your own project templates

### Project templates help you understand a repeatable Premiere workflow and adapt sample elements.

Video production often has many moving parts. Planning the workflow before editorial work begins makes projects easier to manage and scale. Using Premiere projects as templates provides that structure. The template can save a small amount of setup time at the start, and it saves more time during production by standardizing the pipeline and reducing avoidable mistakes.

Templates can contain ordinary bins for media organization, but they can also hold much more. A Premiere project may store colored labels, effects, timeline layouts, bins (media folders), search bins, track names, and other reusable structure. Save those elements, adjust them for the job, and reuse them in later projects.

### How do project templates help you create faster?

Project templates help newer users understand Premiere while guiding the editorial process. Experienced editors can use them as flexible planning tools that make work faster to finish. For editorial teams, templates keep media and timeline organization consistent, which makes collaboration simpler.

### Organize your project before you start

Projects frequently change after editing begins, so templates should leave room for growth. A shared group of standardized bins helps keep the project organized.

Search bins can be included in templates to automatically show media that matches criteria you define. For example, a search bin that displays every music clip in the project removes the need to browse through other bins to locate music.

Anything that can live inside a Premiere project can also be included in a template:

- Pre-built sequences: Use pre-named tracks, editable titles, motion graphics, music, and adjustment layers to start from a prepared timeline.
- Raw Video Footage: Include animation files if needed, and apply master clip effects ahead of time.
- Graphics: Add common logos, backplates, visuals used across projects, or a broader collection of approved graphics.
- Music and SFX: Provide an organized audio library with multiple clips available for selection.
- After Effects Compositions: When After Effects is installed on the same system, these compositions remain editable and their changes update automatically in Premiere. A project can still include the compositions even if After Effects is not installed.
- Titles: Add recurring subject or member names, or build title templates that use your organization's required font and in-house colors.
- Stock elements: Include Adobe Stock video and photos that your organization has licensed.
- Exports bin: Put sequences here before export so versions of exported media files are easier to track.
- Notes: Import text files into Premiere Pro projects the same way you import media files.

Download the sample template project and change it to match your workflow. Store the template somewhere on your system. Then create a renamed copy and place that copy on your media drive, the storage location used for media during editing.

- The main folder includes a Premiere project plus folders that correspond to the bins in the Premiere project. Each folder is empty except for a text file that explains its intended use.
- Numbering keeps the folders in the same order, while leaving enough gaps to add other folders where needed.
- Put reusable material into these folders. For different project types, make separate templates and fill their folders with repeated items such as intros, audio, graphics, and similar assets.
- Opening the project in Premiere shows the organized bins in the Project panel.

A view of project template files in the Project panel.

A view of project template files in the Project panel.

- You can use the template without changes. In Windows or macOS, copy your source media into the 10 Raw footage folder. Then, in Premiere, open that bin and import the footage. This provides a running start with the timeline, audio setup, and media bins already prepared.

### Find media faster with Search bins

Search bins pair normal search behavior with a dynamic search that updates continuously. They are useful for automatically gathering specific media types or clips with particular metadata. For instance, a search bin can show clips whose names contain "BTS", making behind-the-scenes material easier to find.

To create a Search bin, choose File > New > Search bin.

Enter the search criteria in the Create Search Bin dialog box. You can define two criteria based on selected metadata types.

Select OK, and Premiere adds the new search bin to the Project panel.

To change the configuration later, right-click a search bin and choose Edit Search Bin.

Use these criteria when creating or customizing search bins:

### General

- All Sequences: Search for sequence items by using Media type as the sequence criterion.
- Favorites: Use Favorite set to True; this is a Boolean value.
- Hidden: Use Hidden set to True. This can reveal project elements that have been hidden, such as raw audio after synchronization with video or older sequence versions.
- Exported Sequences: Duplicate a sequence before export and add "Export" to one copy as a best practice. This search bin finds sequences whose names include Export.

### Editorial

Search bins can help locate footage.

- Documentary style: Find items where Interview appears in the Name field or Description.
- Documentary style: Find B-roll by checking for b-roll or broll in any information, covering cases where the dash is added or omitted.
- Narration: Find items where any information includes the word Narration.
- Voice Overs (VO): Find items where any information includes the word VO.
- Shot motion: Find items whose Name or Description individually contains pan, tilt, or zoom.
- Shot type: Find items whose Name or Description individually contains CU, MS, or WS.

### Utility

Search bins can also help analyze media.

- Offline: Find items whose Status is set to Offline.
- In the User Directory: Locate every file stored in the user's home directory. On macOS and Windows, a file on the desktop, download, or another user-specific folder is usually in the wrong location. This search bin surfaces that media quickly so it can be found and moved.
- Adobe After Effects projects: Find imported media that uses the .aep After Effects project extension.
- Find Render and Replace media: Render and Replace can improve performance, especially with Adobe After Effects compositions in Premiere. Use this search bin to locate media with "\_Render" in the filename.
- All the Stills: Find media whose type is Image.
- File Type: Find each occurrence of 12 common file types.

### Organize timelines

Starting from a sequence with named tracks keeps editorial organization clearer and more logical. It also makes audio work and sequence navigation easier.

When several editors contribute to one project, standardized and organized tracks make sharing the work much easier.

### Typical timeline track categories

- Video tracks: Use Main, B-Roll, Graphics, VFX, and Alternate versions as names.
- Audio tracks: Use Dialog, VO, SFX, Ambience, and Music as names.
- Audio submixes: Submix tracks do not hold clips. Instead, audio from other tracks can be routed to a submix, where effects are applied. This lets one set of effect controls process a group of tracks.
- Adjustment layers: A prebuilt "Look" on an adjustment layer lets editors view footage with a color treatment during editorial work, and the layer can be toggled off or on.

### Timelines in the example template

In the example project template, all sequences already use a preview file format that matches the sequence size and is set to ProRes422. This codec enables fast rendering for export.

The example template supplies these five timelines:

1. One 1080p 23.976-fps timeline with named tracks, plus a track containing an adjustment layer with a LUT applied.
2. A social media timeline prepared at Square Resolution (1080x1080).
3. A social media timeline prepared for vertical orientation (1080x1920).
4. One timeline places a Hard Limiter effect and the Loudness Radar effect on the master track.
5. One timeline contains four submixes: Dialog, SFX, Ambience, and Music.

### Track-Based audio effects

Track-based audio effects support advanced audio mixing directly inside a Premiere project.

In the example project template, the primary track already has two effects applied: a Hard Limiter and a Loudness Radar.

To stop audio from going above -1 dB, the Hard Limiter acts as a compressor.

The Loudness Meter shows levels using the CALM Act (US) and EBU R128 loudness-monitoring recommendations. That makes it important for broadcast audio monitoring.

### Multichannel output sequences

For multilingual delivery, it can help to create an additional audio mix type called an M&E, meaning Music and Effects only, with dialogue omitted.

When planning an M&E mix, keep dialog tracks organized separately so they are easier to mute selectively.

Multichannel output is already configured in this sample timeline. In the Audio Track Mixer below, each track type, including Dialog and SFX, is routed to the matching submix.

A view of the project's multichannel master with its submixes.

A view of the project's multichannel master with its submixes.

The final output contains five stereo tracks (10 channels.)

The complete mix occupies the first stereo track. Each later track pair carries only the corresponding submix output on its own channel pair.

During export, configure output for 10 channels this way:

Start by creating a sequence whose output is multichannel.

Add submixes, then route tracks to the matching submixes. Named tracks help a lot here.

At export time, configure 10 output channels on the Audio tab.

Final master channel layout:

- Tracks 1 and 2 - Full Stereo mix
- Tracks 3 and 4 - Only the dialog mix
- Tracks 5 and 6 - Only the SFX mix
- Tracks 7 and 8 - Only the ambience mix
- Tracks 9 and 10 - Only the music mix

## See also

- [Organize Media](help-organize-media.md)
