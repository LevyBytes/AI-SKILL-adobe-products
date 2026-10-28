# Change the field order of a clip

Convert interlaced clips to non-interlaced clips, or set field order so footage matches the project.

Review these points before changing a clip's field order:

- If the right field order is unclear, check the camera documentation or inspect metadata from the source footage.
- Field-order changes can alter image quality, so preview the clip and confirm that the result improves the picture.

Import the source footage into Premiere.

In the Project panel, use right-click on Windows or Control-click on macOS for the selected clip or clips.

From the context menu, choose Modify > Interpret Footage.

In the Interpret Footage dialog box, go to the Field Order section. Use Field Order from File shows whether Premiere reads the clip as interlaced or non-interlaced.

With Upper Field First enabled, Premiere interprets the clip as upper-field-first instead of relying on metadata.

If Upper Field First is turned on, Premiere treats the media as upper-field-first and ignores the stored metadata for that decision.

To revise the field order, open the Conform to dropdown menu and choose one of these settings:

- No Fields (Progressive Scan): Select this to convert an interlaced clip into a non-interlaced clip.
- Upper Field First: Use this for odd-numbered lines.
- Lower Field First: Use this for even-numbered lines.

Select OK to save the change.
