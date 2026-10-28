# AEGP_NewFootage

`AEGP_NewFootage`

Creates a new footage item. The file path is a NULL-terminated UTF-16 string with platform separators.

Note that footage filenames with colons are not allowed, since colons are used as path separators in the HFS+ file system.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewFootage(
  AEGP_PluginID                         aegp_plugin_id,
  const A_UTF16Char                     *pathZ,
  const AEGP_FootageLayerKey            *layer_infoP0,
  const AEGP_FileSequenceImportOptions  *sequence_optionsP0,
  AEGP_InterpretationStyle              interp_style,
  void                                  *reserved,
  AEGP_FootageH                         *footagePH);
```

Note the optional params. If allow_interpretation_dialogB is FALSE, After Effects will guess the alpha interpretation.

```cpp
typedef struct {
  A_long               layer_idL;
  A_long               layer_indexL;
  char                 *nameAC;
  AEGP_LayerDrawStyle  draw_style;
} AEGP_FootageLayerKey;
```

`AEGP_LayerDrawStyle` can be: - `AEGP_LayerDrawStyle_LAYER_BOUNDS` - `AEGP_LayerDrawStyle_DOCUMENT_BOUNDS` `AEGP_InterpretationStyle` can be: - `AEGP_InterpretationStyle_NO_DIALOG_GUESS` Will guess alpha interpretation even if file contains unknown alpha interpretation and user pref says to ask user. - `AEGP_InterpretationStyle_DIALOG_OK` Optionally can show a dialog. - `AEGP_InterpretationStyle_NO_DIALOG_NO_GUESS` Used for replace footage implementation.
