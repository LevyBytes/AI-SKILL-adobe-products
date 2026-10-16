# Renaming files during ingest

Ingest-time file renaming uses renaming presets that append chosen strings to the output file name.

Note

Files inside complex folder structures, such as P2, are not renamed.

For rename-on-ingest behavior, enable 'Rename files' in the File Rename section. To create a file-naming preset, use this sequence:

1. Use the downward arrow icon beside the renaming-preset list, then choose New Preset.
2. Use "+" to insert an element into the custom naming preset.
3. Custom Text: type the characters appended to the output file name, such as a company name, project name, or separator.
4. Date: choose 'Ingest Date' when the queue-add date should be used. Choose 'Creation Date' when the date should come from the source-file timestamp.
5. Time: choose 'Ingest Time' when the queue-add time should be used. Choose 'Creation Time' when the time should come from the source-file timestamp.
6. File Name: inserts the source file name, without its extension, as part of the new output name.

To insert more elements, click the "+" button again. Click Save, enter a preset name, and make sure that name has no spaces.

To edit file renaming presets, follow these steps:

1. Choose the preset from the menu.
2. Use the downward icon beside the menu, then select
3. Change the values as needed, then click Save.
4. For a differently named copy, select Save As and enter a new preset name.
5. To return to the File Rename panel without saving edits, click "x".
6. To remove a preset, click the Trash icon.

Collaborative workflows often benefit from consistent naming rules. Send the preset file to share renaming presets with other users. To find the presets on your computer, use the downward icon beside the Preset menu, then select Show in Explorer or Show in Finder. To import one, use the downward arrow beside the Preset menu, then select Import Preset. Choose the presets to import and click Open. File Rename presets are stored as .PLRP files at these locations:

- Windows: C:\Users\\Documents\Adobe\Adobe Media Encoder\10.0\Presets\Rename\
- Mac: HD/Users//Documents/Adobe/Adobe Media Encoder/10.0/Presets/Rename/
