# File I/O

- `require("uxp").storage.fileTypes.images` contains a list of image types, but it is not meant to enumerate every image type the host supports. The array covers common image types; provide your own array when you need a custom file-type set. (PS-57601)
- [Universal Windows Platform (UWP)](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)
  enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
  and anonymous filepaths can cause access trouble for UXP FSAPI. XD omits this feature to maintain platform compatibility.
- The UXP FSAPI native layer uses [libUV](https://libuv.org/) except for UWP-powered features, including FilePicker and Drag&Drop on Win10 XD.
