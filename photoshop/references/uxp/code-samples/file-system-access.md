# File System Access

In UXP, a plugin can directly reach only its own plugin folder, its data folder, and a temporary folder. For any other location, the user must grant access explicitly. Details about the available APIs and folders are in [FileSystemProvider](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md).

The [jszip-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/jszip-sample) shows temporary folder access.
