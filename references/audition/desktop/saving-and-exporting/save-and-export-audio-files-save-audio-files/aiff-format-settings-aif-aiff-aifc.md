# Save and export audio files - AIFF format settings (_aif, _.aiff, \*.aifc)

On Mac OS, AIFF is the standard format for uncompressed audio files.

- Sample Type (available only for 32-bit files): chooses the audio bit depth. Greater bit depths increase dynamic range and lower distortion, but they also require larger files and more processing time. Integer settings clip audio beyond the amplitude range allowed by the chosen bit depth. Floating Point settings use a little more storage while preserving much more dynamic range. Choose 32-bit Floating Point when the file will be processed repeatedly and you want to discard as little amplitude data as possible.
- Byte Order (available only for 16-bit files): sets the numerical order for bytes of data. Use Little-Endian for Intel processor systems and Big-Endian for PowerPC processor systems.

Note

To add Author metadata to an AIFF file, enter it in Dublin Core: Creator on the XMP tab of the Metadata panel.
