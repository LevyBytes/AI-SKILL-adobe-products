# Export a multitrack mix to Premiere

Premiere and Audition can pass audio directly between sequences and multitrack sessions. Sequence markers show up in Audition, and individual tracks can stay separate to preserve editing flexibility.

Sequences and sessions move between the applications through a shared XML format, exported to a folder with any referenced audio files.

Note

To send only one mixdown file to Premiere, instead of separate tracks, use the linked-session mixdown workflow.

Multiple clips from Audition combined as stems in Premiere

Choose Multitrack > Export to Adobe Premiere.

Enter a name and location for the exported session folder, then configure these options:

Sample Rate

By default, this matches the original sequence's sample rate. Choose a different rate when the file must be resampled for another output medium.

Export each track or bus as a stem

Turns the full timeline duration of each track into one clip and combines multiple clips when needed. Use this option when clips should extend to and align with the sequence start and end points.

Mixdown Session To

Creates one mono, stereo, or 5.1 file from the session.

Open in Adobe Premiere

Opens the sequence in Premiere automatically. Clear this option when the sequence will be edited later or moved to another computer.

Click Export.

After Premiere opens the exported XML file, whether automatically or with File > Import, the Copy Adobe Audition Tracks dialog box appears.

Use the Copy to Active Sequence menu to choose where the exported Audition tracks should start. New tracks are placed below the existing tracks.

Note

Premiere can also send an audio sequence to Audition for editing.
