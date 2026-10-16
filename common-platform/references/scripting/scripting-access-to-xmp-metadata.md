# Scripting Access to XMP Metadata

XMPScript, the XMP ExtendScript API, gives JavaScript scripts access to the Adobe XMP Core and XMP Files libraries. This chapter documents the JavaScript objects used with XMP, including their properties and methods.

This chapter does not attempt to explain XMP metadata technology in full. For deeper detail about XMP metadata, consult the XMP Specification at Adobe Developer Center.

Adobe Bridge CS5 includes the XMP library in its libraries folder. Scripts need to load that library at run time before using the API; Adobe Bridge does not load it automatically at startup. The XMPScript API is separate from the Adobe Bridge DOM. It can be used on its own to read and write metadata in supported formats, or alongside the Adobe Bridge API to change metadata reached through the Adobe Bridge DOM's Thumbnail object.

Note

Adobe Bridge can place script-file metadata inside a script by wrapping XML in special tags within a comment block. That mechanism is separate from file and thumbnail metadata access. See the Adobe Bridge JavaScript Guide for details.
