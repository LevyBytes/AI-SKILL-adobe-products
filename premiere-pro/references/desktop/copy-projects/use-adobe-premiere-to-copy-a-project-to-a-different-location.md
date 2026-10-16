# Use Adobe Premiere to copy a project to a different location.

Use the File > Project Manager menu command.

In the Project Manager dialog box, under Sequence, select the check box beside each sequence to include. A Shift-click on any one box selects every box.

Choose Collect Files and Copy to New Location to gather selected-sequence footage and place it in one storage location.

Gather the footage and copy it into a single storage location.

Premiere creates a new project file linked to the selected media. After Collect Files And Copy To New Location is selected, these options become available:

- Exclude Unused Clips: tells Project Manager not to include or copy media unused by the original project.
- Include Audio Conform Files: keeps audio conformed in the original project conformed in the copied project. If this is not selected, the new project uses less disk space, but Premiere conforms the audio again when the project is opened.
- Include Preview Files: keeps effects rendered in the original project rendered in the copied project. If this is not selected, the new project needs less disk space, but those effects are not rendered.
- Rename Media Files To Match Clip Names: renames copied footage files so they match the names of captured clips. Use this when captured clips were renamed inside the Project window and the copied footage files should carry the same name. Captured files that are imported, especially files captured with scene detection, may have unclear names, so renaming them from the Project window can help. This option updates the filename of the actual captured footage to reflect the new Project window name, making footage organization simpler. For an MXF file, this option does not change the User Clip Name in the file's XML; it changes the filename of the clip copied for the trimmed project so it matches the clip name shown in the Project panel.

Choose the destination path where Project Manager will save the specified files. Select Browse to choose a location other than the default.

When the copy is made, Project Manager creates "Copied\_[Project Name]" and puts the project, footage files, and other selected files in that folder.

Select OK.
