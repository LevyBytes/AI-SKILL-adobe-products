# Limitations

Playback control for Flash movies has these restrictions:

- Avoid using stopMovie() and playMovie() as a suspend-then-resume or restart mechanism for an SWF file created by Flex(TM).
- For some SWF files made with Flash Authoring, the stopMovie() and playMovie() sequence may be inappropriate, depending on implementation details. The sequence might fail to return the file to its initial state when the rewind argument to playMovie() is true, and might also fail to pause and then continue the file's execution when rewind is false.
- Calling stopMovie() from the player's hosting environment does not affect an SWF file running inside a ScriptUI Flash Player element. An SWF created with Flash Authoring can still be built so that it stops itself in response to user interaction.
- Avoid calling playMovie() while an SWF file is in playback.
