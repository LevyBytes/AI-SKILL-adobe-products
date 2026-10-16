# Copy, transcode, or archive project

Use Project Manager in Adobe Premiere to copy, transcode, or archive projects for later access.

Select File > Project Manager.

In the Project Manager window, go to the Sequence section and enable the checkboxes for the sequences to include. To include everything, hold Shift and select any checkbox.

Use this workflow to copy, transcode, or archive Adobe Premiere projects so they stay protected and available.

Project Manager can copy, transcode, or archive Adobe Premiere projects for secure storage and future access.

You can copy or transcode a project by choosing one of these options:

- Consolidate and Transcode: gathers the footage used by the selected sequences and encodes it with one codec for archiving.
- Match: aligns the newly created media with sequence settings, individual clip settings, or presets.
- Sequence: applies the frame size, frame rate, field type, and pixel aspect ratio from the selected sequence, and transcodes clips that match to those settings.

Clips that do not match those settings are copied only, without transcoding.

- Individual Clips: applies each clip's frame size, frame rate, field type, and pixel aspect ratio from the sequence, then transcodes clips with their own settings.
- When the source cannot be matched, the clip is copied only and is not transcoded. One example is a clip with an attribute unsupported by the selected format or preset.
- Preset: applies the frame size, frame rate, field type, and pixel aspect ratio from the chosen preset, and transcodes every clip to those settings.

If the sources cannot be matched, the clips are copied only and are not transcoded.

- Format: available formats include MXF OP1a files; MXF OP1a files in DNXHD format is another choice; QuickTime format is also available.
- Preset: the selected format determines which preset options appear.

Premiere creates a new project file that links to selected media according to these options:

- Exclude Unused Clips: tells Project Manager to leave out media that was not used in the original project, so it is not included or copied.
- Include Handles: sets how many extra frames to keep before the In point and after the Out point for each transcoded clip. You can enter a value from 0 to 999 frames.

For example, with a value of 30, Premiere keeps 30 frames before the In point and 30 frames after the Out point. Handles provide extra frames for small edit adjustments in the new project.

- Include Audio Conform Files: keeps audio that was conformed in the original project conformed in the new project. If this is not selected, the new project uses less disk space, but Premiere conforms the audio again when the project opens. This option appears only when Collect Files and Copy to New Location is selected.
- Convert Image Sequences to Clips: tells Project Manager to turn a still-image sequence into one video clip, where each still image becomes one video frame. Choosing this option often improves playback performance.
- Include Preview Files: keeps effects rendered in the original project rendered in the new project. If this is not selected, the new project uses less disk space, but the effects are no longer rendered. This option appears only when Collect Files and Copy to New Location is selected.
- Rename Media Files to Match Clip Names: renames copied footage files so they use the same names as the captured clips. Choose this when captured clips were renamed inside the Project window and the copied footage files should carry matching names. Imported captured files, especially files captured with scene detection, may have unclear names, so you may prefer to rename them inside the Project window. This option updates the actual captured-footage filename so it reflects the new name shown in the project window, making footage organization much simpler. For an MXF file, this does not change the User Clip Name in the file's XML; it changes the filename of the copied clip for the trimmed project so it matches the clip name displayed in the project panel.
- Convert After Effects Compositions to Clips: turns any After Effects compositions in the project into flattened video clips.
- If the project includes dynamically linked After Effects compositions, choosing this option flattens each composition into a video clip. The benefit is that those converted video clips can play back on systems without After Effects installed.

Choose the destination path where Project Manager will save the specified files. Select Browse if you want to pick a location other than the default.

When copying a project, Project Manager makes a folder named "Copied\_[Project Name]" and places the project, footage files, and other selected files inside it.

Disk Space compares the current project's file size with the estimated size for the copied or consolidated files. Select Calculate to refresh the estimate.

After setting your preferences, select OK.
