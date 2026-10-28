# AEGP_GetPluginPaths

`AEGP_GetPluginPaths`

New in CC. Gives back one of the paths tied to the plug-in:

- AEGP_GetPathTypes_PLUGIN - (Not Implemented) Where the plug-in itself resides.

- AEGP_GetPathTypes_USER_PLUGIN - The per-suite spot for plug-ins belonging to a single user.

- AEGP_GetPathTypes_ALLUSER_PLUGIN - The per-suite spot for plug-ins every user shares.

- AEGP_GetPathTypes_APP - Where After Effects' .exe or .app sits. Not tied to any plug-in.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetPluginPaths(
  AEGP_PluginID aegp_plugin_id,
  AEGP_GetPathTypes path_type,
  AEGP_MemHandle *unicode_pathPH);
```

|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
