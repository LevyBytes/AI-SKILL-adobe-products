# PF_OutFlag_KEEP_RESOURCE_OPEN

`PF_OutFlag_KEEP_RESOURCE_OPEN`

The plug-in's resources have to be reachable throughout every command. Under `PF_Cmd_GLOBAL_SETUP` the plug-in's resources are always open, but at all other times they're unreachable (apart from during `PF_Cmd_ABOUT` and `PF_Cmd_DO_DIALOG`) unless this flag is set. Set it when you require resource access at any moment beyond `PF_Cmd_GLOBAL_SETUP`.

Note

Our advice is for the plug-in to load and hold the resources it needs in global data, instead of leaving the file's resources open.
