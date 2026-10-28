# Export AAF files

Build and share AAF files in Adobe Premiere for ongoing media interchange with professional editing and audio applications.

Advanced Authoring Format (AAF) is a multimedia container for moving digital media and metadata across platforms and applications. Authoring applications such as Avid Media Composer can read and write AAF files according to the AAF support they implement.

On Windows (Intel and Arm), embedded AAF exports over 2 GB are unsupported and fail. For larger AAF files, choose separate audio rather than embedded audio.

Note

- Premiere exports AAF files that work with Avid Media Composer and Avid Pro Tools, but other AAF importers have not been tested.
- Transitions are placed only between two clips, never at the opening or closing edge of a clip. A clip must be at least the transition's full length.
- A clip with transitions on both the In and Out points must have enough duration for both transitions together.
- In Premiere clip and sequence names, do not use special characters, accented characters, or symbols that may interfere with XML file parsing, including /, >, <, ®, and ü.
- AAF files exported from Premiere and then brought into Avid Media Composer do not relink to source footage automatically. Relinking requires the Batch Import option in Avid Media Composer.
- Merged clips cannot be included in AAF export; unmerge them before exporting.

Open File > Export > AAF to reach the AAF Export Settings dialog box.

Set the export options to match the needs of the destination application and workflow.

In the AAF Export Settings dialog box, choose export options for video, audio, and format preferences.

Choose OK to apply the settings.

Choose a save location, type a filename for the AAF file, and select Save.

Tip

For Avid Media Composer, choose Use tape sources when present only so the export links to original media and keeps audio channelization intact. For Avid Pro Tools, choose Enable Breakout to Mono. Depending on the workflow or the audio mixer's request, you can also set Files, Separate Audio, Format, and Render and Handle Frames. Broadcast Wave keeps iXML metadata.
