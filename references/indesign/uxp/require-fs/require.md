# require('fs')

UXP supplies FSAPI, a Node.js style file system API.
Unlike [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md)-based [File](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md) and [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md) classes, these methods can reach local files or folders directly through a path or file descriptor.
The scheme determines where a native filesystem path begins.
For the path parameter, UXP recognizes plugin storage schemes such as "plugin:", "plugin-data:", and "plugin-temp:", along with the native "file:" scheme.

Note:

1. When an FSAPI method receives a path parameter without an explicit scheme, it treats that path as using the "file:" scheme.

2. [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform) enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions), and anonymous filepaths may cause access problems for UXP FSAPI. For cross-platform compatibility, XD does not support this feature.

3. Except for UWP-powered features such as FilePicker and Drag&Drop on Win10 XD, the native UXP FSAPI layer is based on [libUV](https://libuv.org/).
