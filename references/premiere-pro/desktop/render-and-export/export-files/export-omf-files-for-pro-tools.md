# Export OMF files for Pro Tools

Export OMF files to move audio from Adobe Premiere into Pro Tools for final editing.

The OMF format carries clip-based audio, keyframes, transitions, and metadata from a sequence into Pro Tools. Depending on the post-production workflow, an OMF export can contain full audio files or trimmed segments with handles.

Note

OMF files exported from Premiere are officially supported only for ProTools. Premiere does not import OMF files.

In the Timeline, choose the sequence for export.

Select File > Export > OMF to open the OMF Export Settings dialog.

Use the OMF Export Settings dialog to adjust audio options before handing the sequence to Pro Tools.

Prepare the sequence for Pro Tools by customizing audio settings in the OMF Export Settings dialog.

In OMF Title, enter a name, then choose the Sample Rate and Bits Per Sample needed for the Pro Tools session.

Under Files, choose Embedded Audio to place all audio in one OMF file, or Separate Audio to write individual audio files to a folder.

Under Render, choose Copy Complete Audio Files when full clips are needed, or choose Trim Audio Files to include only used portions and set the desired number of Handle Frames.

Select OK, then save the OMF file.

To finish session setup, open Pro Tools and import the OMF with DigiTranslator.
