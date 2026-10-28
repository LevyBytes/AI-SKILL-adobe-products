# Mix audio data when pasting

Mix Paste combines clipboard audio data with the current waveform.

In the Editor panel, put the Playhead at the point where mixing should begin. You can instead select audio data that should be replaced.

Run Edit > Mix Paste.

Configure these options, and click OK.

Copied and Existing Audio

Changes the percentage volume for both copied audio and existing audio.

Invert Copied Audio

Flips the phase of the copied audio, which can increase or reduce phase cancellation when the existing audio contains similar material.

Crossfade

Adds a crossfade at the start and end of the pasted audio to make transitions smoother. Enter the fade length in milliseconds.

Paste Type | Audition CC

Choose the paste type from these options:

Insert

Adds audio at the current cursor position or selection. Audition places the audio at the cursor and pushes any existing data to the end of the inserted material.

Overlap (Mix)

Blends audio with the current waveform at the selected volume level. If the pasted audio exceeds the length of the current waveform, Audition lengthens the current waveform so the pasted audio fits.

Overwrite

Begins overdubbing at the cursor position, replacing subsequent existing material for as long as the incoming audio lasts. For example, when 5 seconds of material is pasted, the 5 seconds immediately after the cursor are replaced.

Modulate

Combines the audio with the current waveform as a modulation effect. This resembles overlapping, but sample by sample the two waveform values are multiplied together instead of added.

From Clipboard

Uses audio data from the active internal clipboard.

From File

Uses audio data from a file. Click Browse to locate the file.

Loop Paste

Repeats the pasted audio data for the specified number of times. When the audio is longer than the current selection, Audition automatically extends the current selection to fit it.
