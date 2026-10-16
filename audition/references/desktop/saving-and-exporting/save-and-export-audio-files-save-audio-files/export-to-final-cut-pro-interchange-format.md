# Save and export audio files — Export to Final Cut Pro Interchange format

From Multitrack Editor, use File > Export > FCP XML Interchange Format.

Enter the filename and location.

To save audio markers and Metadata panel information, select Include Markers and Other Metadata.

For easier transfer to another system, select Save Copies of Associated Files to gather the session and source files together. Select Options to change the format and sample type used for exported source files.

The export omits these session elements:

- The second stereo-clip channel. (All clips and tracks become mono.)
- Clips that overlap
- Effects and track EQ.
- Automation envelopes, with the exception of clip volume and mono-to-stereo track panning.
- The mix track, buses, sends, and output routing.
