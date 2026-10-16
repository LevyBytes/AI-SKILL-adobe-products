# Importing files with XMP metadata into After Effects

Plenty of formats can supply XMP metadata that After Effects imports, including these:

Camera formats: AVCHD, HDV, P2, XDCAM, XDCAM EX

Image formats: GIF, JPEG, PNG, PostScript, TIFF

Common multimedia container formats: FLV, F4V, QuickTime (MOV), Video for Windows (AVI), Windows Media (ASF, WAV)

Authoring formats: InDesign documents, Photoshop documents (PSD), and other native document formats for Adobe applications

MPEG formats (MP3, MPEG-2, MPEG-4)

SWF

Bring in a file holding XMP metadata and After Effects flashes a “Reading XMP metadata from footage” status message as it pulls the metadata out of the source file.

Among the handiest pieces of metadata on any asset is its unique ID number — a value that sets one asset apart from every other at each stage of the workflow. Thanks to that unique ID, the application can tell a file is the same one it ran into before, even after the filename has been changed. A nice payoff of these unique ID values: each application can use them to look after cached previews and conformed audio files, which heads off extra rendering and conforming.

XMP leans on Globally Unique Identifiers (GUIDs) for its ID values — 16-byte random numbers that are a common way to keep values from colliding.

When a file is imported, After Effects writes XMP ID values into the source file provided the Write XMP IDs To Files On Import preference is turned on in the Disk preferences category. That same preference reaches other Adobe applications too; consult the explanatory text in the Preferences dialog box to learn more. Should a file already carry an XMP ID, After Effects writes nothing new and leaves it untouched. Files made by recent Adobe application releases will usually come with an XMP ID already in place.

By default, the Write XMP IDs To Files On Import preference is switched on.

Note

- All the Write XMP IDs To Files On Import preference governs is whether unique ID values get written to files automatically at import time. It has no say over whether XMP metadata is written to a file in other situations, such as editing metadata in the Metadata panel.
- Since writing the ID counts as a change to the file, a source file's modification date might shift the very first time you import it.
