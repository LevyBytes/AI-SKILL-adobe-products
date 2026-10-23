# `AEIO_ModuleInfo``AEIO_ModuleInfo` Members

| Member | Purpose |
| --- | --- |
| sig | A long value that uniquely identifies the plug-in. Many developers choose a distinctly Mac-style four-character code here. Please tell us which sig you use. |
| name | Descriptive name for the AEIO plug-in. |
| flags | `AEIO_ModuleFlags` set. |
| flags2 | `AEIO_ModuleFlags2` set. |
| max_width, max_height | Largest dimensions your format supports. |
| num_filetypes | Count of file types supported by the AEIO. |
| num_extensions | Count of file extensions supported by the AEIO. |
| num_clips | Count of clipboard formats supported by the AEIO. |
| create_kind | macOS four-character code for files created by the AEIO. |
| create_ext | File extension for files created by the AEIO. |
| read_kinds | This 16-element `AEIO_FileKinds` array does not have to be completely filled, but the first [num_filetypes + num_extensions + num_clips] entries must be populated in that order. |
| num_aux_extensions | Count of auxiliary extensions supported by the AEIO. For example, suppose an AEIO imports information from a 3D program that stores scene information in a .123 file and camera information in a .xyz file. The .xyz file is an auxiliary extension: it is associated with .123 files, though it is not required to get the rest of the scene information. |
| aux_ext | File extension for auxiliary file type or types supported by the AEIO. |
