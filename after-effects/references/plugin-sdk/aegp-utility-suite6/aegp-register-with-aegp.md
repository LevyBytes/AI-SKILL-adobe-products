# AEGP_RegisterWithAEGP

`AEGP_RegisterWithAEGP`

Hands back an AEGP_PluginID that effect plug-ins can then pass to many functions across the AEGP API.

An effect should make this call just once, during PF_Cmd_GLOBAL_SETUP, and keep the AEGP_PluginID for use later on.

The first parameter accepts any value, while the plug-in's match name belongs in the second.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterWithAEGP(
  AEGP_GlobalRefcon  global_refcon,
  const A_char       *plugin_nameZ,
  AEGP_PluginID      *plugin_id);
```
