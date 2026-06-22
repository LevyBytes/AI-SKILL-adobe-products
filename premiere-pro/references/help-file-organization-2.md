# Relink Offline Media Automatically, Manually Locate And Relink Offline Media, Consolidate Duplicate Folders, Freeze A Frame For A Portion Of A Clip Using Time Remapping ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Relink media in Premiere; Manually locate and relink offline media; Consolidate duplicate folders; Freeze a frame for a portion of a clip using Time Remapping; Navigate timelines with Sequence Index.

## Relink media in Premiere

### How Adobe Premiere finds and reconnects offline media automatically by using historical paths, search logic, and cross-platform matching.

When media becomes offline, Premiere follows a structured multi-step process to find and relink files. That process supports common workflows such as moving projects between drives, reorganizing folders, or changing operating systems. Knowing the relinking logic can reduce missing-media problems and make troubleshooting more efficient.

### How Premiere locates missing media

Premiere uses two primary approaches when attempting to reconnect media:

- Historical path tracking
- Automated search logic

### Historical path tracking

Premiere checks file paths formerly tied to the media before starting a wider search.

- Current file path
- As many as two previous paths

- Current path
- No limit on historical paths

Standalone projects keep up to three path slots for each media file. Whenever relinked media is moved, the newest path takes the place of the oldest stored path.

After step 3, moving the media back to Media 1 lets Premiere find it automatically because Media 1 remains in the "History 2" slot. If the media returns to Media 1 after step 4, historical path tracking will not find it automatically because Media 1 has already rotated out of the stored history.

### The two-pass search logic

When historical paths do not find the media, Premiere runs an automated search using the project file location as the starting point.

Two-pass search process:

- Pass 1: Searches the folder that contains the project file, along with its subfolders.
- Pass 2: Moves one level upward and searches the full containing folder, including adjacent folders.

This search pattern handles typical project layouts, whether media sits beside the project file or inside organized subfolders.

When both passes fail, Premiere displays the Link Media dialog box so relinking can be done manually.

If media is not found inside the project folder, Premiere widens the search to the parent folder, here 'Sample project,' which can find files kept in neighboring folders such as 02_Media.

When media is missing from the project folder, Premiere expands to the parent folder, here 'Sample project,' allowing adjacent folders such as 02_Media to be searched.

### Cross-platform relinking

Relinking can work across operating systems, so projects may move between macOS and Windows while keeping media links intact when the folder structure stays consistent. Premiere compares the current project path with the last known media path to identify a shared root folder, then searches inside that structure for the media.

Note

On Windows network storage, map a drive letter to the media location instead of using Universal Naming Convention (UNC) paths. For collaboration, including Productions workflows, each Windows computer should map the media location with the same drive letter.

### Required manual relinking

Automatic relinking can fail in these situations:

- Renamed files or folders: If filenames or folder names are changed after import.
- Significant changes to folder structure: If media is relocated outside the project directory tree and outside the tree directly above it.
- Changed file formats (for example, .mov to .mp4): If media has been transcoded, disable File Extension in the Match File Properties area of the linking dialog box so the replacement files can link.
- Unmounted external drives: If media is stored on an external drive that is not connected.

For these cases, reconnect files manually with the Link Media dialog box.

### Relinking considerations for Productions

Productions in Premiere gives multi-project workflows a flexible and scalable organizing structure. With Productions, large complex workflows can be split into manageable projects, supporting overall efficiency and collaboration through shared local storage.

Files can be shared between projects within a Production without making duplicates. Editors can organize related projects together for better efficiency. Large projects, such as documentaries, films, and TV work, can be divided into reels or episodes, while multiple editors collaborate on shared storage using their preferred workflows.

Productions users should avoid storing media inside the production folder, meaning the folder containing the .prodset file, or inside any of its subfolders. That storage pattern can create performance problems. Learn more about using Productions, including settings configuration, offline dailies management, and workflow navigation through final delivery.

## Manually locate and relink offline media

### Manually locate and reconnect media that Premiere cannot relink automatically.

To find files with the computer's file browser, clear Use Media Browser to locate files in the Link Media dialog box.

Select the Locate button in the Link Media dialog box to do this.

The Locate File dialog opens at the closest existing directory, showing up to three levels. If an exact match is unavailable, the displayed directory is based on where the file should have been or on the same directory location used in the previous session.

Within the Locate File dialog, select Search to look for a file manually. The Last Path value can make it faster and easier to identify the exact missing file.

To narrow search results, the Locate File dialog also offers advanced filter options, such as showing particular file types and enabling Display Only Exact Name Matches.

Note

The Path field is editable. When needed, copy all or part of the Last Path string into the File Path field. This can quickly reveal the path for the missing file.

## Consolidate duplicate folders

### Consolidate duplicate folders in Adobe Premiere to simplify project organization.

Duplicate media and folders with identical names can be consolidated. Bins with identical names are consolidated only when they share the same hierarchy level.

Select Edit > Consolidate Duplicates to consolidate duplicated clips across the entire project.

Select Consolidate Duplicates to remove duplicated clips and consolidate duplicate media and folders with matching names.

Use Consolidate Duplicates to remove duplicate clips while merging duplicate media and folders that share the same name.

## Freeze a frame for a portion of a clip using Time Remapping

### Use Time Remapping in Adobe Premiere to hold one frame within a Timeline clip.

Freezing a frame inside a clip pauses the action without splitting the clip. It can emphasize a moment, support text placed over a still shot, add a dramatic beat, or create a stylized speed ramp effect.

Time Remapping lets you create the hold segment directly in the timeline. Rather than making a separate still frame, you use speed keyframes to control the freeze, which keeps the edit flexible and non-destructive.

In the Timeline panel, find the clip you want to change.

Select the Show Clip Keyframes button (the badge) on the clip, then select Time Remapping > Speed.

Move the playhead to the frame where the freeze should start.

To add a speed keyframe, Ctrl+click (Windows) or Command-click (macOS) the rubber band (speed line) running across the clip.

Drag the keyframe downward until the speed reads 0%. This freezes the clip at that frame.

To lengthen the hold, Ctrl+Alt-drag (Windows) or Option+Command-drag (macOS) the keyframe horizontally. The rubber band's flat part marks the frozen section of the clip. The frame remains frozen for the duration of that 0% flat segment.

## Navigate timelines with Sequence Index

Use a searchable spreadsheet-like view in Adobe Premiere to find clips, effects, and problem areas inside layered, multi-track sequences.

Sequence Index represents the timeline as an interactive table that can be sorted, with each clip presented as a row you can search. For troubleshooting and quality-control passes, it reduces manual timeline inspection by exposing offline media, flash frames, transitions, and effects.

Turn to Sequence Index for dense multi-track edits where manually hunting down a given clip, effect, or technical issue would take too much time.

In the panel, sequence assets appear in a spreadsheet-style interface. You can search columns, filter for conditions such as offline status or flash frames, and move straight to a timeline item. Columns can be rearranged around the details that matter most for your workflow, and filtered results can be exported for documentation or team handoffs.

### Configure and export the Sequence Index

Open the panel from Window > Sequence Index.

In the Sequence Index panel, search by clip name or by another attribute with the search field.

Select the filter icon to open options including offline media, flash frames, transitions, and effects.

Apply the filters so only the clips or attributes intended for export remain visible.

Use label color, media type, effects, or clip status as filters in Sequence Index when you need to isolate items quickly in a crowded timeline.

Use label color, media type, effects, or clip status as filters in Sequence Index when you need to isolate items quickly in a crowded timeline.

In the Sequence Index panel, select the export icon.

Set the destination and file name for the CSV file.

Export Sequence Index to CSV by selecting the columns to include and the save location.

Export Sequence Index to CSV by selecting the columns to include and the save location.

Select OK to export the filtered results.

Entries for flash frames use red text in Sequence Index, so you can spot them without reviewing the full timeline. Selecting a flash frame row sends the playhead to that position, letting you confirm whether the gap needs a fix.

Tip

Drag column headers into the order that fits your workflow priorities. The custom column layout is retained between sessions.
