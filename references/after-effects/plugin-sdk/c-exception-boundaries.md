# C++ exception boundaries

Catch every exception your plug-in's own code throws inside the plug-in itself. Any exception that didn't come from your plug-in's code should be passed along to After Effects.

The APIs in After Effects assume plug-ins written in C and aren't built to expect exceptions. Throw one from inside a plug-in and After Effects crashes on the spot.

In the effect samples, a firewall surrounds the switch statement within the main() function, while the AEGPs enclose their function hooks in try/catch blocks.

## See also

- [Application](../scripting/application-object.md)
