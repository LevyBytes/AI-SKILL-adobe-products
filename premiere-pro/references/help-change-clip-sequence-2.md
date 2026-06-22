# Find Clips In A Sequence, Select Clips, Group Clips, Snap Clips ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Find clips in a sequence; Select clips; Group clips; Snap clips; Enable or disable a clip; Detect edit points using Scene Edit Detection; Remove clips from a sequence.

## Find clips in a sequence

### Locate where clips are used across project sequences in Adobe Premiere and review the timecode for each occurrence.

Check the places and frequency of a clip's use inside the project. This helps avoid unintended duplicate usage and supports consistent edits.

Select Window > Projects, then select your project.

In the Project panel, select the clip you need to inspect.

At the lower-right corner of the clip thumbnail, select the timecode icon.

A prompt lists the clip's timecode positions in every sequence that uses it.

Review each sequence location and timecode where the clip appears.

Review each sequence location and timecode where the clip appears.

Select a timecode in the pop-up.

The Timeline panel moves the playhead to that clip's position in the sequence.

To find how many times a clip has been used:

- In the Project panel, right-click the menu icon.
- Select Metadata Display.
- From the Premiere Pro Project Metadata dropdown, select Video Duration so it appears as a column.

Select OK.

A list shows the clip name plus timecodes for each occurrence, confirming where the clip appears across sequences.

Tip

Open the clip context menu with Right-click (Windows) or Ctrl-click (macOS) in the Timeline panel, then choose Reveal In Project to jump to its Project panel source.

## Select clips

### Select one clip or several clips in the Adobe Premiere timeline, then move, delete, or apply effects with the appropriate selection tool.

Select Window > Timelines, then select your clip.

In the Tools panel, select Selection Tool (V).

With Selection Tool (V), use one of these actions:

- Select one clip.
- Hold the Shift key while selecting each clip to build a multi-clip selection.
- Hold Alt (Windows) or Option (macOS), then select only the clip's audio portion or video portion.

Tip

A linked clip normally selects its audio and video together. To change that behavior, use the top-left Timeline panel Linked Selection icon.

Selected clips are highlighted in the Timeline panel. From there, you can move, delete, or apply effects to them.

## Group clips

### Group or ungroup multiple clips in Adobe Premiere for combined moving, disabling, copying, or deletion.

Hold Shift in the Timeline panel and select two or more clips that should behave as one item.

From the main menu, select Clip > Group. The clips are grouped and move together as a unit.

For one clip inside the group, select Shift-click (Windows) or Option-click (macOS).

To add more clips from within the group, select Shift-click (Windows) or Shift-Option-click (macOS).

For ungrouping, select the group, then choose Clip > Ungroup.

Note

When a linked clip is grouped with other clips, both its audio and video tracks are included. Clip-based commands cannot be applied to a group. You can trim the first clip's head or the last clip's tail, but individual clips inside the group cannot have their In and Out points trimmed separately.

## Snap clips

### Turn on snapping in Adobe Premiere so clips align with other clips, markers, or the playhead while you move them.

At the top-left of the Timeline panel, confirm that the Snap in Timeline (S) icon is highlighted.

Drag a clip edge near another clip's edge, a marker, or the playhead.

Once the clip is near enough, it snaps into alignment automatically and a vertical line indicates the adjusted alignment.

## Enable or disable a clip

### Control playback for clips in an Adobe Premiere sequence when testing alternate edits or improving performance in complex projects.

Disable a clip when you want to try another edit or reduce processing load in a complex project. Disabled clips are absent from the Program Monitor, previews, and exported video, but they remain editable unless their track is locked.

In the Timeline panel, choose the clips whose enabled state you want to change.

Select Clip > Enable. A check mark before Enable means the selected clips are active.

Clear Clip > Enable. Disabled clips display dimmed in the Timeline panel.

Play the sequence to confirm which clips are active and which are temporarily disabled.

## Detect edit points using Scene Edit Detection

### Use Scene Edit Detection in Adobe Premiere to find original cut points in footage with less manual searching.

Scene Edit Detection finds cuts automatically inside a single video file, making it easier to split that file into individual shots for editing. It is especially helpful with a long master clip or compiled footage when each shot needs to be isolated for trimming, effects work, or color correction.

Add your media to Premiere, then place it in the timeline.

From the main menu, choose Clip > Scene Edit Detection, or open that command from the sequence context menu in the Timeline panel.

When the Scene Edit Detection dialog box appears, select one or more of these options:

- Apply a cut at each detected cut point: Premiere inserts an edit point at every scene change it finds.
- Create bin of subclips from each detected cut point: each detected section becomes its own subclip inside a new bin.
- Create clip marker at each detected cut point: places markers at detected changes so you can review them manually.

Select Analyze to run detection and apply the selected actions.

Premiere also applies cuts to linked audio automatically. To avoid that result, separate audio from video before running scene edit detection. Another option is to select the audio clips after the cuts are created, right-click, and select Merge to combine the audio clips.

## Remove clips from a sequence

### Remove individual clips, close gaps, or use ripple delete in Adobe Premiere to keep timeline editing streamlined.

Removing clips is a core sequence-editing action for refining the story and cutting unwanted footage. You can delete a single clip, remove several clips together, or close spaces between clips to keep the timeline continuous. Ripple delete combines the removal and gap-closing steps into one action by deleting selected clips and closing the resulting space automatically.

### Delete clips from the timeline

Select the clip to delete in the sequence. For multiple clips, Shift-click each one or drag a marquee around them.

Press Delete to remove the selected clips.

Once clips are deleted, empty gaps can remain at their former positions in the sequence. Remove those gaps separately, or use ripple delete to remove clips and close the gaps at the same time.

### Remove clips and close gaps with ripple delete

In the sequence, choose the clip or clips marked for deletion.

Select Edit > Ripple Delete.

Apply Ripple Delete to delete the selected clip and close the sequence gap.

Apply Ripple Delete to delete the selected clip and close the sequence gap.

Ripple Delete deletes the selected clips, closes the gaps automatically, and shifts all later clips earlier on the timeline.
