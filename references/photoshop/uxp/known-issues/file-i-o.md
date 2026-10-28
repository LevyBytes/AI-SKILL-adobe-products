# File I/O

- `require("uxp").storage.fileTypes.images` is not meant to list every host-supported image type. The array contains several common image formats instead. Pass your own array when you need a particular set of file types. (PS-57601)
- [Universal Windows Platform (UWP)](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide) enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions), and UXP FSAPI can run into access problems with anonymous filepaths. For cross-platform compatibility, XD does not support this feature.
- The native UXP FSAPI layer uses [libUV](https://libuv.org/), except for UWP-powered features such as FilePicker and Drag&Drop on Win10 XD.
