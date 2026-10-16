# AEGP_RegisterIO

`AEGP_RegisterIO`

Register your AEIO plug-in. See AEIOs for more details.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterIO (
  AEGP_PluginID              aegp_plugin_id,
  AEGP_IORefcon              aegp_refconP,
  const AEIO_ModuleInfo      *io_infoP,
  const AEIO_FunctionBlock4  *aeio_fcn_blockP);
```
