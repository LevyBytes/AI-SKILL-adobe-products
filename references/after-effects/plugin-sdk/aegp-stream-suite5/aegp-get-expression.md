# AEGP_GetExpression

`AEGP_GetExpression`

Fetches the text of the expression. From suite version 5 onward (shipped in 15.0 and later), Unicode is now supported.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetExpression(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  AEGP_MemHandle   *unicodeHZ);
```
