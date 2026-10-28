# Link clip data to XMP metadata

Use Adobe Premiere linking to sync clip information automatically into file metadata.

Linking ties clip data stored in the project file to XMP metadata embedded in the source files. With that connection in place, applications such as Adobe Bridge and other Adobe video tools can read the clip information. Use links only when clip-specific data should synchronize with the source file. If a workflow has multiple clip instances referencing one source file, leave fields unlinked to avoid conflicts over shared data.

Managing information is easier when clip data and file metadata are kept distinct. Inside the Premiere project file, clip data describes individual clip instances; subclips, for example, can have unique In and Out points while still referencing the same source file. File metadata is embedded in source files and is available across Adobe applications.

After you link a clip data field, Premiere copies any information entered in that field to the matching XMP metadata field. The synchronization starts when the link is created and applies to later edits. Clip data that was entered before the link was made is not copied.

Most linked fields use the same names for clip data and XMP metadata. There are two exceptions: the Name field connects to Title in the Dublin Core schema, and Log Note connects to Log Comment in the Dynamic Media schema.
