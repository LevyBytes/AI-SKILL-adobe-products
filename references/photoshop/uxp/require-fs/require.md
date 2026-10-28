# require('fs')

FSAPI is UXP's Node.js-style file system API.
Compared with [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md)-based [File](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md) and [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md) classes, FSAPI methods can reach a local file or folder directly by path or file descriptor.
The scheme determines where a native filesystem path begins.
For the path parameter, UXP accepts plugin-scoped schemes such as "plugin:", "plugin-data:", and "plugin-temp:", plus the native "file:" scheme.

Note:

1. When an FSAPI path parameter omits a scheme, FSAPI treats the path as if it used the "file:" scheme.

2. [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform) applies restrictive [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions), and anonymous filepaths can therefore cause UXP FSAPI access problems. For cross-platform compatibility, XD does not support this feature.

3. Except for UWP-powered features such as FilePicker and Drag&Drop on Win10 XD, UXP FSAPI's native layer is built on [libUV](https://libuv.org/).
