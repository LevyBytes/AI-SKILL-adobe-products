# Create Overlay Settings, Overlay Settings Reference, Import Export Or Delete Overlay Settings

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create overlay settings; Overlay settings reference; Import, export, or delete overlay settings.

## Create overlay settings

### Configure monitor metadata displays in Adobe Premiere so timecodes, markers, and edit indicators are visible during playback.

Overlay settings determine which metadata appears on the Source Monitor and Program Monitor, helping you follow timecodes, markers, and edit points without leaving the workspace.

The same overlay settings apply to Source Monitor and Program Monitor when they are in Composite Video display mode. You can choose which metadata fields are visible, decide where they appear, and save the configuration as presets for fast layout changes. As you scrub through clips or sequences, overlays stay aligned with the playhead position and update automatically.

Before setting overlays, confirm that the monitor uses Composite Video display mode because overlays are not shown in other display modes.

### Configure overlay display options

In the Program Monitor or Source Monitor, open the wrench icon.

Turn overlay display on by choosing Overlays.

Open the Overlay Settings dialog box through Overlay Settings > Settings.

From the available choices, pick metadata fields such as Source Timecode, Sequence Timecode, or Marker comments.

To show a field as an overlay, choose metadata such as Source Timecode, Sequence Timecode, or Clip Name.

To show a field as an overlay, choose metadata such as Source Timecode, Sequence Timecode, or Clip Name.

Set overlay readability from the Text Size dropdown.

Use the Opacity slider to make the overlay more or less prominent over the footage.

Turn on Enable overlays during playback when overlays should remain visible while footage plays.

Turn on Enable overlays for transmit when overlays should appear on an external monitor.

Tip

For multi-camera sequences, Multi-Camera View mode can show as many as two metadata properties at the same time when those properties are selected in the Overlay Settings dialog box.

### Save overlay settings as presets

Set up the overlay appearance you want in the Overlay Settings dialog box.

At the top of the dialog box, choose the Save Preset icon.

Type a clear name for the preset.

Choose Save to store the preset.

Saved presets are available from the Preset dropdown menu in the Overlay Settings dialog box and from Overlay Settings > Settings in the Program Monitor menu.

## Overlay settings reference

### Review every overlay setting available for showing metadata in the Source Monitor and Program Monitor in Adobe Premiere.

Use these settings when refining monitor overlays or diagnosing metadata display problems. This reference helps confirm which overlay types exist, change display attributes, and set preset-related values.

### Available overlay metadata types

Source Monitor and Program Monitor overlays can show the metadata types listed below:

### Safe margin settings

Action safe and title safe areas mark the visible boundaries used for television playback.

### Multi-Camera View limitations

In Multi-Camera View mode, only two metadata properties chosen in the Overlay Settings dialog can appear in the overlay display. For example, Camera Name and Source Timecode can be visible together, while any further metadata types stay outside that display.

### Preset file format

Overlay presets use the .olp filename extension. Each preset retains the complete overlay setup: selected metadata fields, text size, opacity, and placement configuration.

Note

Overlays appear only while the monitor uses Composite Video display mode. Other display modes do not show overlays.

## Import, export, or delete overlay settings

### Use preset files in Adobe Premiere to save, share, and maintain custom overlay configurations across projects.

Overlay presets retain customized monitor overlay settings, such as metadata field selections, positioning, text size, and opacity preferences. Export presets to give configurations to teammates or keep a backup copy. Import presets when saved configurations need to be applied to new projects. Delete presets that are no longer needed so the workspace stays organized. Overlay preset files use the .olp extension and can reside anywhere on your system.

Before working with overlay presets, first configure overlay settings by choosing the wrench icon in the Program Monitor or Source Monitor, then choosing Overlays > Settings.

### Import an overlay preset

In the Overlay Settings dialog, choose the Import Preset icon.

Browse to the location of the .olp preset file you want to import.

Choose the preset file.

Choose Open.

After import, the preset is listed in the Preset dropdown list and can be used right away.

### Export an overlay preset

In the Overlay Settings dialog box, pick the preset to export from the Preset dropdown list.

Choose the Export Preset icon.

Type a name for the preset file.

Use the Export Overlay Preset dialog to save the overlay configuration as a preset.

Use the Export Overlay Preset dialog to save the overlay configuration as a preset.

Browse to the location where the preset should be saved.

Choose Save.

The saved preset becomes an .olp file suitable for sharing or archiving.

### Delete an overlay preset

In the Overlay Settings dialog box, choose the preset to remove from the Preset dropdown list.

Choose the Delete Preset icon.

When prompted, confirm the deletion.

Note

Deleting a preset permanently removes it from Premiere. To use that preset later, import it again from a saved .olp file.
