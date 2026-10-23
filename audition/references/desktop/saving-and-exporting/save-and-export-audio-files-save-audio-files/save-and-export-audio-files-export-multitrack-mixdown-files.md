# Save and export audio files - Export multitrack mixdown files

When a session mix is complete, export either the full session or a selected section in common audio formats. The exported result uses the volume, pan, and effects state currently routed through the mix track.

For a fast mix of particular audio clips into one track, choose Multitrack > Bounce to New Track.

When only part of the session should be exported, choose the Time Selection Tool on the toolbar and mark the required range.

Choose File > Export > Multitrack Mixdown, then pick the command that matches whether the export should contain a selected range, the whole session, or several clips:

- Time Selection
- Entire Session
- Selected Clips

Another route is Multitrack > Mixdown Session to New File; this sends the mixdown to Waveform Editor, so the remaining steps are unnecessary.

Enter a filename, then set the destination and file format.

Configure these options:

- Sample Type: shows the sample rate and bit depth. To revise those values, select Change.
- New Sample Type: shows the sample type that every file in the panel will have after conversion is applied.
- Format Settings: summarizes compression and storage behavior for the data; to edit it, select Change.
- Mixdown Options: controls whether tracks become separate files, or whether mono, stereo, and 5.1 mixdowns are output at the same time. To revise these and related settings, select Change.
- Include markers and other metadata: writes audio markers and Metadata panel information into the saved files.
- Open files after export: enables Audition to open the files after conversion completes.

Note

In Waveform Editor, choose Edit > Edit Original to reopen the multitrack session that produced a mixdown file. Embedded metadata must be present in the file for this command to work.
