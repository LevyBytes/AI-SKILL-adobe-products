# AEGP_GetUniqueCommand

`AEGP_GetUniqueCommand`

Obtain a unique command identifier. Use the Register Suite to register a handler for the command.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetUniqueCommand(
  AEGP_Command  *unique_commandP);
```

Note: On occasion After Effects will send command 0 (zero), so don't use that as part of your command handling logic.
