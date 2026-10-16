# Data Types

Where it can, After Effects hands plug-ins opaque data types and supplies accessor functions to work on them. Video frames, for instance, ride along as the opaque `AEGP_WorldH`. Directly poking at the underlying structure might occasionally be faster, but keeping the data types opaque lets us rework our implementation without forcing you to recompile (and reship) your plug-ins.
