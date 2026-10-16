# PreferencesFileHandling

Preferences for file handling, including save behavior, compatibility choices, and recent-file handling.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| askBeforeSavingLayeredTIFF | _boolean_ | R W | 24.0 | When true, prompts the user to confirm layer-preservation options while saving TIFF files. |
| imagePreviews | [_SavePreview_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#savepreview) | R W | 24.0 | Mode used for preview behavior during file saves. |
| maximizeCompatibility | [_MaximizeCompatibility_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#maximizecompatibility) | R W | 24.0 | Behavior for deciding whether compatibility should be maximized when Adobe Photoshop (PSD) files are opened. |
| recentFileListMaximum | _number_ | R W | 24.0 | Maximum recent-file list length [0,100]. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesFileHandling"_. |
| useLowerCaseExtension | _boolean_ | R W | 24.0 | When true, file extensions are written in lowercase. |
