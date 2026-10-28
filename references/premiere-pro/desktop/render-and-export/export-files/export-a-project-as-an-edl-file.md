# Export a project as an EDL file

Export a Premiere project as an Edit Decision List (EDL) for exchange with other editing systems.

Keep these points in mind when working with EDL files:

- EDLs are most reliable with straightforward projects, preferably one video track, two stereo audio tracks, and no nested sequences. Common items such as transitions, frame holds, and speed changes usually translate well.
- Before editing starts, capture and log all footage with accurate timecode. The capture device, such as a capture card or FireWire port, must support timecode-based control.
- Give every videotape its own reel number and time-code it before filming begins.
- During EDL export, each clip receives a comment containing its name as shown in the timeline. Click the wrench icon in the Timeline panel, then toggle Show Source Clip Name and Label to choose whether the source clip name or timeline name appears.

Open the project you want to export.

Click inside the Timelines panel to make it active.

Go to File > Export > EDL.

In the EDL Export Settings (CMX 3600) dialog box, choose the video and audio tracks to include.

Enable the 32-character names option when clip or tape names are longer than eight characters.

Select OK.

Configure the sequence and export it as a CMX 3600 EDL file for handoff to other editing systems.

Create a CMX 3600 EDL file with your chosen sequence settings for use in another editing system.

Specify where the EDL file should be saved and what it should be called.

Select Save to finish the export.

Note

Standard EDLs can use merged clips, but the receiving app will not show them as merged. Video and audio arrive as separate clips with their original timecodes, and EDLs handle them the same way as any paired audio and video occupying the same timeline position.
