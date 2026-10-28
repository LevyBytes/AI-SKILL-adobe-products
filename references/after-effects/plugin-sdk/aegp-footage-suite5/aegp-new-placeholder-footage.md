# AEGP_NewPlaceholderFootage

`AEGP_NewPlaceholderFootage`

Deprecated. Adds a new placeholder footage item to the project.

If footage has gone missing, running this function forces the user to hunt down each absent file one by one, even when every one of them sits in the same folder.

Undo-able.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewPlaceholderFootage(
  AEGP_PluginID  plugin_id,
  const A_char   *nameZ,
  A_long         width,
  A_long         height,
  const A_Time   *durationPT,
  AEGP_FootageH  *footagePH);
```
