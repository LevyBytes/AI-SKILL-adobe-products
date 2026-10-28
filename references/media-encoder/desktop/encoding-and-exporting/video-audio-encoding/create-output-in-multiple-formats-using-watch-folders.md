# Create output in multiple formats using watch folders

Watch folders can produce several outputs from a single action. For instance, each time a video asset is transcoded, you might need both an AVI movie and a JPEG thumbnail image.

To create these files through one user action, use these steps:

Create a folder in File Explorer (Windows) or Finder (macOS) named My_WatchFolder.

Create a watch folder by choosing the Add Folder button > Add Encoding Folder, then browse to the folder you just made: My_Watchfolder.

- Choose Format, then choose MPEG4 as the format from the dropdown menu.
- Choose Preset, then choose the desired setting from the Preset dropdown menu.

- Choose the Output Folder to define where the generated output should be saved.

Create another watch folder item that points to My_Watchfolder, matching Step 2.

- Choose Format, then choose AVI as the format from the dropdown menu.
- Choose Preset, then choose the desired setting from the Preset dropdown menu.
- Choose Output Folder, then set the location where the output should be generated.

Create a third watch folder item that also points to My_Watchfolder, following the same pattern as Step 2 and Step 3.

- Choose Format, then choose JPEG as the format from the dropdown menu.
- Choose Preset, then choose the desired setting from the Preset dropdown menu.
- Choose Output Folder, then choose the location where the output should be generated.

Drag the source file into My_WatchFolder, then choose the Start Queue button. Encoding begins automatically.

After processing finishes, each file appears in its assigned output location.
