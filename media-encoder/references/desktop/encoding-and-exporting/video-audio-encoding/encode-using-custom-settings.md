# Encode using custom settings

For custom-setting encodes, use this sequence:

Place the required items in the Queue panel.

Bring up the Export Settings dialog box with any of these methods:

- In the Queue panel, choose the item's row where Format, Preset, and Output File path appear, then use Edit > Export Settings.
- Right-click the row that contains Format, Preset, and Output File path, and choose Export Settings.
- Choose the Format or Preset name to display the Export Settings dialog box.

Adjust the export options, then choose OK.

After closing the Export Settings dialog box, choose the Start Queue button to start encoding the files.

Note

For best encoding throughput, keep the Encoding panel closed. Use the Queue panel progress bars instead when you need to check how encoding is advancing.

Inside the Export Settings dialog box, these actions are available:

- From the Format menu, pick a video, audio, or still-image format. Review the supported export file formats list.
- From the Preset menu, pick an encoding preset.
- Choose Export Video, Export Audio, Export Captions, or any combination of them.
- Define pre-encoding choices such as cropping and trimming. Review all export settings for the full set.
- Configure XMP metadata export behavior.
- Enable Use Maximum Render Quality or Render At Maximum Bit Depth.
- Enable Use Frame Blending.
- To set the encoded file's name and save location, choose the underlined text beside Output Name in the upper-right area of the Export Settings dialog box, then enter the file name and location. When no filename is supplied, Adobe Media Encoder takes the source video clip filename.

Note

If Format is P2 Movie, Adobe Media Encoder does not use the filename you assign. Those encodes receive a six-character alphanumeric name instead. Output Name is stored in the clip metadata and appears as the clip name in Adobe Premiere.

The encoded file can be saved to a destination folder relative to the folder that contains the source video clip. Confirm the destination folder already exists before using it. If the folder path does not exist, an error explains that encoding cannot proceed because the folder cannot be found.
