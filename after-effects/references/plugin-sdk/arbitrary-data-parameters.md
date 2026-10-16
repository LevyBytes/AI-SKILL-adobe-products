# Arbitrary Data Parameters

Certain values simply don't map cleanly onto the parameter types that ship with After Effects. For those cases, register data of the arbitrary type — "arb data" — and let After Effects interpolate it for you. That way the host's interpolation engine and its parameter bookkeeping stay available to you, and there's no need to wedge your data into one of the predefined parameter shapes.

For these custom types we added a dedicated messaging structure. The easiest mental model is to picture its callbacks as the member (and friend) functions of a C++ class. Every selector documented below has to be answered if your plug-in works with arb data.

The selectors below cover lifecycle and storage of your custom structure. Because the user can unload and reload arb data at any moment, you are responsible for supplying flatten and unflatten routines that are safe to write to and read back from disk.
