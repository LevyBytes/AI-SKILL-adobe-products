# Implementation — Private Data

AEGPs, unlike effects, stay loaded for the whole After Effects session and are never unloaded. Even so, leaning on static and global variables still isn't a smart move.

Every hook function receives a plugin_refconPV where it can stash storage tied to that particular function. Plenty of AEGP Suite functions ask for the aegp_plugin_id; tuck it away in the global_refconPV you're handed — either inside a structure you allocate or as the bare ID.

Wherever you can, lean on these refcons for storage rather than statics and globals. That matters all the more once multi-threading enters the picture.

Reach for global_refconPV to hold your globals (your aegp_plugin_id, for one) and for hook-function-specific storage use refcon.

Watch for a "multiple instances of After Effects" trap: fire up a second, command-line instance and every one of an AEGP's handles gets duplicated. Should that trip you up (and it might), ship code that ties saved handles back to particular instantiations of your plug-in.
