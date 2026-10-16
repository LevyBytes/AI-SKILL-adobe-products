# AEIO registration and startup

As with every AEGP, the entry point exported in the plug-in's PiPL is called during launch. In that function, the AEIO must supply function pointers for required functions, describe its capabilities, and pass the proper structures to AEGP_RegisterIO().

[AEIO context](context-aeios-aeios.md)
