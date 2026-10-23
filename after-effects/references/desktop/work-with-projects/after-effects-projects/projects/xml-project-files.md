# XML project files

In text-based XML project files, a portion of the project data sits as hexadecimal-encoded binary, yet a great deal of it is laid out as human-readable text within string elements. Such a file opens in any text editor, letting you change certain project details without launching the project in After Effects. You can go further and author scripts that, as part of an automated workflow, adjust project information held in XML project files.

Inside an XML project file, these are the project elements open to your edits:

Marker attributes: among them comments, chapter point parameters, and cue point parameters

File paths for source footage items, proxies included

Names and comments on compositions, footage items, layers, and folders

Note

String elements only expose footage item names in XML project files when those names have been customized. Footage item names come automatically from the source file names, and solid color names don't appear in string elements.

A few strings—workspace and view names, for example—do show up as human-readable strings, but any edits you make to them are ignored once After Effects opens the project file.

Note

Steer clear of treating the XML project file format as your main file format. After Effects uses the binary project file (.aep) format as its primary one. Reserve the XML project file format for saving a project copy and for serving as a go-between format in automation workflows.

Tip

Turning an XML project (.aepx) file into a binary project (.aep) file is a matter of choosing File > Save As and typing a filename that ends in .aep without the x. For deeper coverage of how to save projects and keep backups in After Effects, see the related guidance.
