# Apple Silicon Support - How to add Universal Binary Support for your Plugins

Load your plugin's Xcode project under 12.2 or later and Xcode will set up an Apple Silicon target on its own.

Mac Universal Build

Point After Effects at the main entry point your Apple Silicon builds use.

- Locate the .r resource file belonging to your plugin.

PiPL resource entries for the SDK resource compiler; insert them in the effect’s PiPL property list. This is resource syntax, not a C++ translation unit.

```text
#if defined(AE_OS_MAC)
  CodeMacARM64 {"EffectMain"},
  CodeMacIntel64 {"EffectMain"},
#endif
```

- Should you ever need distinct entry points across x64 and ARM, simply hand each a separate entry point name and string.

Produce the Universal binary by building against the Any Mac (Apple Silicon, Intel) Target, or through Product -> Archive.

Provided the Apple Silicon build throws no compile-time errors, that one Universal binary will now serve both Intel and Apple Silicon applications.
