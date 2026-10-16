# File I/O

- `require("uxp").storage.fileTypes.images` is not meant to enumerate every image type a host can support. The array contains common image formats instead. Pass your own array when you need specific file types. (PS-57601)
- [Universal Windows Platform (UWP)](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)
  uses strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
  and UXP FSAPI can run into access problems with anonymous filepaths. For cross-platform compatibility, XD does not support this feature.
- UXP FSAPI's native layer is based on [libUV](https://libuv.org/), except for UWP powered features such as FilePicker and Drag&Drop on Win10 XD.
