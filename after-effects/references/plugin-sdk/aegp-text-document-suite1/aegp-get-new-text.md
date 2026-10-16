# AEGP_GetNewText

`AEGP_GetNewText`

Fetches the UTF-16, NULL-terminated string in use by the AEGP_TextDocumentH.

Note: After Effects allocates the AEGP_MemHandle, so your plug-in is responsible for releasing it with AEGP_FreeMemHandle when finished.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewText(
  AEGP_PluginID       id,
  AEGP_TextDocumentH  text_docH,
  AEGP_MemHandle      *unicodePH);
```
