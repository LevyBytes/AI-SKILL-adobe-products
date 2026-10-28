# AEGP_ExecuteScript

`AEGP_ExecuteScript`

Asks After Effects to run a script. What you pass in can be UTF-8 or the application's current encoding (when platform_encodingB is supplied as TRUE).

Both out arguments may be omitted. Whatever the script's last line evaluates to is what comes back in outResultPH0.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ExecuteScript(
  AEGP_PluginID inPlugin_id,
  const A_char *inScriptZ,
  const A_Boolean platform_encodingB,
  AEGP_MemHandle *outResultPH0,
  AEGP_MemHandle *outErrStringPH0);
```
