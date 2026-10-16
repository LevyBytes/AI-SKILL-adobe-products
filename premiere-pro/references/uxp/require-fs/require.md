# require('fs')

UXP includes FSAPI, a Node.js style file system API.
Compared with the [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md), [File](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md), or [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md) classes,
these methods can reach a local file or folder directly when given a path or file descriptor.
The scheme determines where a native filesystem path begins.
For the path parameter, UXP accepts plugin-specific storage schemes such as "plugin:", "plugin-data:",
and "plugin-temp:", plus the native "file:" scheme.

Note:

1. When a FSAPI method receives a path parameter with no scheme, UXP treats the path as using the "file:" scheme.

2. [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform)
   enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
   and UXP FSAPI can run into access issues with anonymous filepaths. For cross-platform compatibility, XD does not support this feature.

3. Except for UWP powered features such as FilePicker and Drag&Drop on Win10 XD, the native layer of UXP FSAPI builds on [libUV](https://libuv.org/).
