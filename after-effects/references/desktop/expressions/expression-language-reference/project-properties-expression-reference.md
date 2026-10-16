# Project properties (expression reference)

Expression method:

- thisProject object thisProject - Stands for the very project the expression lives inside.

Type:

Project object; read-only

- Project fullPath attribute thisProject.fullPath - Holds the OS-specific full file path together with the project's file name. Where the project remains unsaved, an empty string comes back instead.

Type: String; read-only.

- Project bitsPerChannel attribute thisProject.bitsPerChannel - Reports the project's bit depth per channel (bpc), the figure chosen under Project Settings > Color Management. It will be 8, 16, or 32. Mirrors the scripting project attribute app.project.bitsPerChannel.

Type Number; read-only.

- Project linearBlending attribute thisProject.linearBlending - Reflects whether the Blend Colors Using 1.0 gamma option under Project Settings > Color Management is turned on. Mirrors the scripting project attribute app.project.linearBlending.

Type: Boolean; read-only.
