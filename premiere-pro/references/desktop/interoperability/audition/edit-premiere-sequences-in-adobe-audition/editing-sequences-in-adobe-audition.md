# Editing Sequences in Adobe Audition

When a sequence is edited in Audition, Premiere sends the selected sequence with rendered audio to Audition for additional compositing. Audition opens the sequence as a Multitrack session.

Follow these steps to send a Premiere sequence to Audition:

Choose Edit > Edit in Adobe Audition > Sequence to open the Edit in Adobe Audition dialog box.

Use the settings in the Edit in Adobe Audition dialog box to define the transfer, including the content to send and the audio/render settings used for export.

- Name: project name generated for Audition; by default, it uses the sequence name sent to Audition.
- Path: location for the generated project.
- Selection: sets which part of the sequence is exported, based on the selected choice, Entire Sequence or Sequence In/Out.

  - Send through Dynamic Link: streams video from Premiere to Audition without rendering. When Premiere projects are sent to Audition with this choice, Audition can display the video at native resolution.
  - Export DV Preview Video: renders one file containing the sequence video for Audition.
  - None: does not create video, so Audition has no video available.

- Audio Handles: Audio Handles are clip content outside the clip boundaries. For example, if the sequence clip is 10 seconds long and Audio Handles is set to 1 second, the rendered file is 12 seconds long, with 1 second added at the beginning and at the end.

Choose OK. Premiere builds a project limited to the chosen sequence and its audio clips. The sequence audio is extracted and copied to the destination path, which creates a self-contained Premiere project without dependencies on the source project, except when Video: Send Through Dynamic Link was selected.

If the Open in Adobe Audition checkbox was selected, Audition starts and opens the exported sequence automatically.
