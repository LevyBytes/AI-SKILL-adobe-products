# Getting started — File system access

Hybrid plugins relax UXP sandbox restrictions, allowing direct file-system access in this form:

```jsx
let entry = "/path/to/target.psd";
document.saveAs.psd(entry);
```

By contrast, a standard UXP plugin accesses the file system this way:

```jsx
let entry = await require("uxp").storage.localFileSystem.getFileForSaving("target.psd");
document.saveAs.psd(entry);
```
