# PF_GET_PLATFORM_DATA

`PF_GET_PLATFORM_DATA`

Retrieves platform-specific data. For plug-ins loaded with localized resource files, PF_PlatData_RES_FILE_PATH will point to the external file, not the plug-in file.

Use PF_PlatData_EXE_FILE_PATH if you want the path of your plug-in.

Starting in CS6, use PF_PlatData_EXE_FILE_PATH_W and PF_PlatData_RES_FILE_PATH_W instead of the old non-wide calls.

```cpp
PF_Err PF_GET_PLATFORM_DATA (
  PF_PlatDataID  which,
  void           *ppData);
```

`PF_PlatDataID` can have the following values: - `PF_PlatData_MAIN_WND` - `PF_PlatData_EXE_FILE_PATH_DEPRECATED` - `PF_PlatData_RES_FILE_PATH_DEPRECATED` - `PF_PlatData_RES_REFNUM` // macOS - `PF_PlatData_RES_DLLINSTANCE` // Win - `PF_PlatData_BUNDLE_REF` - `PF_PlatData_EXE_FILE_PATH_W` // new CS6 - `PF_PlatData_RES_FILE_PATH_W` // new CS6
