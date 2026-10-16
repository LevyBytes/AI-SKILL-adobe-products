# Windows on Arm Support — How to add Windows on Arm Support for your Plugins

Bring up your plugin's Visual Studio solution under release 17.4 or above and pick the ARM64 target.

Visual Studio ARM64 target

Point After Effects at the main entry point your Windows on Arm builds use.

- Locate the .r resource file belonging to your plugin.

PiPL resource entries for the SDK resource compiler; insert them in the effect’s PiPL property list. This is resource syntax, not a C++ translation unit.

```text
#if defined(AE_OS_WIN)
  CodeWinARM64 {"EffectMain"},
  CodeWin64X86 {"EffectMain"},
#endif
```

- Should you need separate entry points across Intel and Arm, just hand each its own entry point name and string.

Build the Windows on Arm binary by compiling against the ARM64 target.

Provided no compile-time errors surface in the Windows on Arm build, that binary is ready to run with the native Windows on Arm product.
