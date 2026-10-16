# AEGP_SetExpression

`AEGP_SetExpression`

Assigns the text of the expression. From suite version 5 onward (shipped in 15.0 and later), Unicode is now supported.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetExpression(
  AEGP_PluginID      aegp_plugin_id,
  AEGP_StreamRefH    streamH,
  const A_UTF16Char*  expressionP);
```
