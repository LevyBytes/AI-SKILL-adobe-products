# AEGP_NewMemHandle

`AEGP_NewMemHandle`

Create a new memory handle. This memory is guaranteed to be 16-byte aligned.

plugin_id is the ID passed in through the main Entry Point, or alternatively what you obtained from AEGP_RegisterWithAEGP() (from AEGP_UtilitySuite6).

Use whatZ to identify the memory you are asking for. After Effects uses the string to display any related error messages.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewMemHandle(
  AEGP_PluginID plugin_id,
  const A_char *whatZ,
  AEGP_MemSize size,
  AEGP_MemFlag flags,
  AEGP_MemHandle *memPH);
```
