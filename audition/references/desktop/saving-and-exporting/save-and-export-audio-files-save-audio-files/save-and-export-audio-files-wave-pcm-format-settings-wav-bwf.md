# Save and export audio files - Wave PCM format settings (.wav, .bwf)

Wave PCM is the standard uncompressed audio format for Windows. Broadcast Wave metadata can be included in Windows PCM files.

- Sample Type (available only for 32-bit files): chooses the audio bit depth. Greater bit depths increase dynamic range and lower distortion, but they also require larger files and more processing time. Integer settings clip audio beyond the amplitude range allowed by the chosen bit depth. Floating Point settings use a little more storage while preserving much more dynamic range.

- 4GB Plus Support: saves files larger than 4GB by using either RF64 format, which matches the current European Broadcasting Union standard, or Multiple Data Chunks format for legacy Audition releases.

Note

- Compatibility with earlier Adobe Audition releases is why the nonstandard 16.8 and 24.0 Floating Point choices remain available. (Audition 1.0 used 16.8 internally. 24.0 was an optional setting in that release.)
- For compatibility with many applications, choose RF64 format for files larger than 4GB.
