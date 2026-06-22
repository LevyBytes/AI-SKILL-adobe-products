# Where Installers Should Put Plug Ins, Do I Have To Install The Plug Ins To The Common Folder, Localization, Apple Silicon Support ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Where Installers Should Put Plug-ins; Do I Have To Install The Plug-ins To The Common Folder?; Localization; Apple Silicon Support; How to add Universal Binary Support for your Plugins; Exception Behavior with Apple Silicon Across "C" Functions; Windows on Arm Support; How to add Windows on Arm Support for your Plugins; Exporting Symbols in Effects; Disabling Xcode Symbol Export; Disabling Visual Studio Export; GPU-Accelerated Effect Build Instructions; Mac Setup Instructions; Windows Setup Instructions; Next Steps; Effect Basics; Entry Point; Entry Point Function Parameters.

## Where Installers Should Put Plug-ins

Dropping your plug-ins into the shared location lets Premiere Pro pick them up too, whenever it happens to be installed alongside.

Under Windows, you can read the explicit path to the shared plug-ins folder from this registry key: HKLM\SOFTWARE\Adobe\After Effects\[version]\CommonPluginInstallPath

For Mac, that shared folder lives here: /Library/Application Support/Adobe/Common/Plug-ins/[version]/MediaCore

Across every CC release the version segment stays pinned at 7.0; older releases use CSx instead. A concrete sample: /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/

Steer clear of macOS aliases and Windows shortcuts here — Premiere Pro won't follow either one.

## Do I Have To Install The Plug-ins To The Common Folder?

### Where Installers Should Put Plug-ins — Do I Have To Install The Plug-ins To The Common Folder?

There can be legitimate motivation to scope your plug-in to After Effects alone — say it leans on suites or capabilities that Premiere Pro simply doesn't expose. The shared folder remains our strong recommendation wherever it's workable, yet the AE-only plug-in folder stays on hand for those edge cases.

Under Windows, the explicit path to the app-specific plug-ins folder comes from this registry key: \\`HKEY_LOCAL_MACHINE`\SOFTWARE\Adobe\After Effects\(version)\PluginInstallPath

For macOS, the app-specific plug-ins folder sits at: /Applications/Adobe After Effects [version]/Plug-ins/

At startup, After Effects walks down through its path's subdirectories as far as 10 levels. It will follow macOS aliases along the way, though Windows shortcuts get skipped. Any directory whose name ends in parentheses, or that begins with ¬ on macOS or ~ on Windows, is left unscanned.

However much you wall off AE from Premiere Pro, our integration features give users a way around it anyway — anyone who builds a dynamically linked AE composition containing your effect and drops it into a Premiere Pro sequence will still have your effects on hand.

## Localization

From CC onward, the PF App Suite (Useful Utility Functions) gained `PF_A`ppGetLanguage(), letting a plug-in look up the active language and supply the matching language string.

Parts of the API take Unicode when you hand strings to AE. Elsewhere — naming effect parameters during `PF_C`md\_`PARAM_SETUP`, for instance — a char string is what's expected. AE reads those non-Unicode strings as multi-byte data encoded under the app's active locale. To assemble them on Windows, call WideCharToMultiByte() and pass `CP_OEMCP` as its first argument; on macOS, supply the encoding that GetApplicationTextEncoding() hands back.

Trying out other languages in AE spares you an OS reinstall, but AE itself still has to be reinstalled:

### Windows

- Switch the system locale over to the language you're targeting (control panel > region and language > administrative tab > change system locale)
- Restart machine
- Install AE in the according language.

### MacOS

- Move the language you're targeting to the top of the preferred language list
- Install AE in the according language.

## Apple Silicon Support

Several Adobe products that run natively on Apple Silicon can now host Apple Silicon effect plugins. As an example, effect plugins written for After Effects also show up in Adobe Premiere Pro and Adobe Media Encoder.

Native Apple Silicon builds don't exist for every Adobe product yet; where they do, the only plugins that surface are effect plugins carrying an Apple Silicon implementation. Given how fast these new M1 machines are catching on, adding the Apple Silicon target sooner rather than later is the smart move.

Note

Building a Mac Universal binary calls for Xcode 12.2 or newer.

For a deeper look at Universal binaries, head to https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary

There's also an extra signing step needed to load plugins for debugging on macOS 15+. Details are here.

## How to add Universal Binary Support for your Plugins

### Apple Silicon Support — How to add Universal Binary Support for your Plugins

Load your plugin's Xcode project under 12.2 or later and Xcode will set up an Apple Silicon target on its own.

Mac Universal Build

Point After Effects at the main entry point your Apple Silicon builds use.

- Locate the .r resource file belonging to your plugin.

```
#if defined(AE_OS_MAC)
  CodeMacARM64 {"EffectMain"},
  CodeMacIntel64 {"EffectMain"},
#endif
```

- Should you ever need distinct entry points across x64 and ARM, simply hand each a separate entry point name and string.

Produce the Universal binary by building against the Any Mac (Apple Silicon, Intel) Target, or through Product -> Archive.

Provided the Apple Silicon build throws no compile-time errors, that one Universal binary will now serve both Intel and Apple Silicon applications.

## Exception Behavior with Apple Silicon Across "C" Functions

### Apple Silicon Support — Exception Behavior with Apple Silicon Across "C" Functions

Exceptions warrant extra caution on Apple Silicon. Plenty of environments let you throw exceptions that travel up through classic "C" functions without trouble. The practice was poor and its behavior undefined, yet it tended to "work" regardless.

What changes on Apple Silicon is the ABI: instead of undefined behavior, terminate() fires whenever this happens.

Because a plugin's main entry point always follows the extern "C" calling convention, you should enclose that code in a try/catch block so the program isn't terminated. As an illustration:

```
PF_Err EffectMain ( PF_Cmd cmd,
    PF_InData *in_data,
    PF_OutData *out_data,
    PF_ParamDef *params[],
    PF_LayerDef *output )
{
    try
    {
        /* Your code here */
    }
    catch
    {
        /* return most appropriate PF_Err */
    }
}
```

## Windows on Arm Support

A handful of Adobe products that run natively on Windows on Arm can now host Windows on Arm effect plugins. As an example, effect plugins built for After Effects also turn up in Adobe Premiere Pro and Adobe Media Encoder.

Native Windows on Arm builds aren't available for every Adobe product yet; in the ones that are, only effect plugins shipping a Windows on Arm implementation will appear. With these Windows on Arm machines poised for fast uptake, it pays to add the Windows on Arm target early.

Note

To build a Windows on Arm binary, you'll need Visual Studio 17.4 or newer.

For more on bringing Windows on Arm support aboard, head to https://learn.microsoft.com/en-us/windows/arm/add-arm-support

## How to add Windows on Arm Support for your Plugins

### Windows on Arm Support — How to add Windows on Arm Support for your Plugins

Bring up your plugin's Visual Studio solution under release 17.4 or above and pick the ARM64 target.

Visual Studio ARM64 target

Point After Effects at the main entry point your Windows on Arm builds use.

- Locate the .r resource file belonging to your plugin.

```
#if defined(AE_OS_WIN)
  CodeWinARM64 {"EffectMain"},
  CodeWin64X86 {"EffectMain"},
#endif
```

- Should you need separate entry points across Intel and Arm, just hand each its own entry point name and string.

Build the Windows on Arm binary by compiling against the ARM64 target.

Provided no compile-time errors surface in the Windows on Arm build, that binary is ready to run with the native Windows on Arm product.

```

## Exporting Symbols in Effects

Recently the After Effects team learned of a problem where clashing symbols break the C++ One Definition Rule (ODR).

After Effects moved its bundled Boost library up to 1.74 in early 2021. Across the months since, we've turned up several plugins that also rely on Boost but export their symbols in a way that can leave either After Effects or the plugin invoking the wrong Boost build, which produces hangs and crashes for users. We further found that a number of AE SDK samples shipped exporting every symbol by default, and — assuming developers used them as a template for other plugins — that likely fed the issue. The March 2021 SDK includes fixes for these.

What After Effects insists on exporting is just one thing: the plugin's entry point.

The SDK samples carry an example in entry.h:

```

#ifdef `AE_OS_WIN`
#define DllExport **declspec( dllexport )
#elif defined `AE_OS_MAC`
#define DllExport **attribute\_\_ ((visibility ("default")))
#endif

```

which then gets attached to the entry point function, as in:

```

extern "C" DllExport
`PF_E`rr PluginDataEntryFunction(
`PF_P`luginDataPtr inPtr,
`PF_P`luginDataCB inPluginDataCallBackPtr,
SPBasicSuite* inSPBasicSuitePtr,
const char* inHostName,
const char\* inHostVersion)
{
`PF_E`rr result = `PF_E`rr\_`INVALID_CALLBACK`;

    result = `PF_REGISTER_EFFECT`(
        inPtr,
        inPluginDataCallBackPtr,
        "ColorGrid", // Name
        "ADBE ColorGrid", // Match Name
        "Sample Plug-ins", // Category
        `AE_RESERVED_INFO`); // Reserved Info

    return result;

}

```

## Disabling Xcode Symbol Export

### Exporting Symbols in Effects — Disabling Xcode Symbol Export

Turning off symbol export in Xcode:

1. Open the Apple Clang - Code Generation section within your project's Build settings.
2. Set the Symbols Hidden By Default to YES

Apple Clang Symbols

When particular symbols still have to be public, apply __attribute__((visibility("default"))) in code.

Apple's Xcode documentation covers more https://help.apple.com/xcode/mac/11.4/#/itcaec37c2a6 (excerpt below):

Symbols Hidden by Default (GCC_SYMBOLS_PRIVATE_EXTERN)

When enabled, all symbols are declared private extern unless explicitly marked to be exported using attribute((visibility("default"))) in code. If not enabled, all symbols are exported unless explicitly marked as private extern.

## Disabling Visual Studio Export

### Exporting Symbols in Effects — Disabling Visual Studio Export

Out of the box, Visual Studio builds switch symbol exports off. Getting symbols exported means either providing a module definition file or applying the __declspec(dllexport) keyword inside the function definition.

Microsoft's Visual Studio documentation covers more https://docs.microsoft.com/en-us/cpp/build/exporting-from-a-dll?view=msvc-160 (excerpt below):

You can export functions from a DLL using two methods:

1. Create a module definition (.def) file and use the .def file when building the DLL. Use this approach if you want to export functions from your DLL by ordinal rather than by name.
2. Use the keyword __declspec(dllexport) in the function's definition.

When exporting functions with either method, make sure to use the __stdcall calling convention.

## GPU-Accelerated Effect Build Instructions

Version 16.0 introduced the AE GPU SDK, shipping an SDK_Invert_ProcAmp sample effect alongside it to show the APIs in action.

Building that SDK_Invert_ProcAmp sample means setting up a few dependencies beforehand.

## Mac Setup Instructions

### GPU-Accelerated Effect Build Instructions — Mac Setup Instructions

Because the SDK_Invert_ProcAmp plugin leans on Boost to handle GPU kernel files, Boost has to be present on your machine. Either grab it through homebrew or pull a direct download from boost.org.

  - The most current install walkthrough comes straight from Boost here: Getting Started with Boost

  - A homebrew install lands somewhere along the lines of: /usr/local/Cellar/boost/1.67.0_1/include/boost
  - From the direct download, expect a path more like: /usr/local/include/boost

3. Bring up the SDK_Invert_ProcAmp project in Xcode and head to Settings -> Locations -> Custom Paths
  - Name: BOOST_BASE_PATH
  - Display Name: BOOST
  - Path: [Your Boost installation path]

5. Should python errors crop up during the build, confirm that python is installed for bash rather than zsh. If python3 is already in place for bash yet the "python command not found" error persists, open Project Settings -> Build Rules and try swapping the "python" keyword for "python3"

## Windows Setup Instructions

### GPU-Accelerated Effect Build Instructions — Windows Setup Instructions

- Extract the boost package and execute the bundled bootstrap.bat
  - Next, run .\b2 to compile Boost
  - Then run .\b2 install --prefix=C:\Boost

  - Stick to whichever CUDA version your AE build relies on.
  - AE 25.4 uses CUDA 12.8.

3. Install the latest DirectX Compiler from https://github.com/microsoft/DirectXShaderCompiler/releases
    - (example: C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.8)

    - (example: C:\Boost\include\boost-1_88)

    - (example: C:\dxc_2023_08_14)

### Deployment instructions (DirectX):

Alongside the binary, the generated DirectXAssets folder needs copying as well, since the effect relies on it. At runtime the application pulls in those assets.

For DirectX rendering, PF_OutFlag2_SUPPORTS_DIRECTX_RENDERING must be among the Global Flags, with the matching value written into the PiPL resource file. Leave that flag out and the effect drops back to its CPU implementation.

### CUDA Runtime API vs. Driver API:

Utilize CUDA Driver API

Sticking strictly to the CUDA Driver API is our strong advice for the best compatibility. The driver API — unlike the runtime API — keeps working with drivers down the road. Bear in mind that the CUDA Runtime API exists to wrap up and automate some of the bookkeeping that the Driver APIs leave exposed for you to manage, so moving from the Runtime API to the Driver API may bring fresh steps and code to write.

Alternative 1: Statically Link to CUDA Runtime

When you do need the CUDA Runtime API, linking the CUDA Runtime statically — cudart_static.lib — is our recommendation. That route holds up against future driver releases.

Alternative 2: Dynamically Link to CUDA Runtime

This path works as well, though compatibility snags are more likely. For it to keep pace with future drivers, a compatible CUDA Runtime DLL has to exist on each user's system. As things stand, After Effects bundles a copy of the CUDA Runtime DLL matching the CUDA SDK version we recommend, though that could shift later. If dynamic linking to the CUDA Runtime is unavoidable, ship a CUDA Runtime DLL copy with your plugin and reach for dlopen/LoadLibrary to load the runtimes you want explicitly. The CUDA Compatibility section of NVIDIA's GPU Management and Deployment guide has the fuller story: https://docs.nvidia.com/deploy/cuda-compatibility/

## Next Steps

At this stage you grasp what plug-ins are, the work they can carry out, and the way After Effects talks to them.

The basics of effects plug-ins come next.

## Effect Basics

Everything you need to grasp how a basic effect plug-in operates is laid out in this chapter.

Every effect plug-in rests on these fundamentals.

Wrap up this chapter and the fun part awaits — pushing pixels around!

## Entry Point

Every exchange between After Effects and an effect plug-in gets kicked off by After Effects, and the whole thing runs through the host (After Effects) invoking one single entry point function.

That entry point function has to carry this signature across all effect plug-ins:

```

`PF_E`rr main (
`PF_C`md cmd,
`PF_I`nData *in_data,
`PF_O`utData *out_data,
`PF_P`aramDef *params[],
`PF_L`ayerDef *output,
void \*extra)

```

Here the entry point function goes by "main", yet whatever you declare in PiPL Resources can stand in for that name.

Ahead of every call into the entry point function, After Effects refreshes PF_InData together with the plug-in's parameter array PF_ParamDef[] (with the noted exceptions).

Once the plug-in returns from its call, After Effects inspects PF_OutData for any changes and, where it makes sense, draws on the PF_LayerDef the effect produced.

### Implementation — Entry Point

```

`A_E`rr `AEGP_P`luginInitFuncPrototype(
struct SPBasicSuite *pica_basicP,
A_long major_versionL,
A_long minor_versionL,
`AEGP_P`luginID aegp_plugin_id,
`AEGP_G`lobalRefcon *global_refconP)

```

Exported through the PiPL Resources, the plug-in's entry point fires only one time at launch; every other call destined for the AEGP lands on the functions it registered.

That stands in sharp contrast to the effect plug-in design, where one shared entry point carries all communication.

Since load order among plug-ins isn't fixed, grabbing suites that After Effects doesn't itself provide during your entry point function is never wise. Hold off until the right hook function(s) instead.

When an AEGP has to act differently or cope with differing behavior, the AEGP API Versions let it tell one After Effects version apart from another.

Those remaining functions get registered as callback hooks. Any AEGP that contributes menu items has to register an UpdateMenuHook function (its signature is laid out in AE_GeneralPlug.h) that After Effects can invoke to decide whether to enable them. By the same token, plug-ins that handle commands register a CommandHook — just one for the lot.

## Entry Point Function Parameters

### Entry Point — Entry Point Function Parameters

Argument

Purpose

cmd

Through the Command Selectors, After Effects signals to the plug-in which action to perform.

in_data

Details on the application's state plus the data the plug-in has been directed to operate on. It also hands over pointers to a range of interface and image manipulation functions.

out_data

Relay information back to After Effects by populating fields inside out_data.

params

The plug-in's parameters as they stand at the moment given in in_data> current_time. The input image — a PF_EffectWorld / PF_LayerDef the effect is meant to process — sits at params[0]. These hold good only during specific selectors (noted within the selector descriptions). Parameters get a thorough treatment here: PF_ParamDef.

output

The image the effect plug-in renders and returns to After Effects. Good only during specific selectors.

extra

What the extra parameter holds shifts according to the command issued or, with PF_Cmd_EVENT, the event type. Its main role is event handling and Parameter Supervision.

| --- | --- |

## Command Selectors

Put plainly, commands are what After Effects is asking your effect to carry out.

A few selectors demand a response; the bulk are optional — though keep in mind we didn't add them on a whim...

Every command selector it dispatches carries, for the effect to receive, the following: PF_InData holds details from After Effects; PF_ParamDef[] (an array describing the parameters, with the input layer among them) holds the input and parameter values; and callbacks plus function suites are made reachable too.

Back to After Effects they return data in PF_OutData and, where it fits, render their output into a PF_LayerDef, which also goes by PF_EffectWorld.

When events occur, event-specific details reach them through PF_EventExtra.

## Calling Sequence

### Command Selectors — Calling Sequence

Just the opening handful of command selectors can be counted on; from there, what the user does drives the rest of the calling sequence.

On first being applied, a plug-in gets PF_Cmd_GLOBAL_SETUP, followed by PF_Cmd_PARAM_SETUP. PF_Cmd_SEQUENCE_SETUP arrives every time the user attaches the effect to a layer.

For every frame a basic non-SmartFX effect renders, After Effects fires PF_Cmd_FRAME_SETUP, next PF_Cmd_RENDER, and then PF_Cmd_FRAME_SETDOWN.

PF_Cmd_RENDER is something every effect plug-in has to handle

With SmartFX, any number of PF_Cmd_SMART_PRE_RENDER calls can precede the lone PF_Cmd_SMART_RENDER that follows.

On exit — when the user strips out an effect or shuts the project — PF_Cmd_SEQUENCE_SETDOWN goes out. PF_Cmd_SEQUENCE_RESETUP fires when a project loads or when the layer it's attached to changes. When After Effects writes the project out to disk, PF_Cmd_SEQUENCE_FLATTEN is sent.

PF_Cmd_ABOUT goes out once the user picks About... from the Effect Controls Window (ECW).

After Effects sends PF_Cmd_GLOBAL_SETDOWN as it shuts down, or when the final instance of the effect goes away. Don't lean on this message to tell when your plug-in is leaving memory; rely on OS-specific entry points instead.

As with every AEGP, the entry point exported in the plug-in's PiPL is called during launch. In that function, the AEIO must supply function pointers for required functions, describe its capabilities, and pass the proper structures to AEGP_RegisterIO().
```

## See also

- [Application](script-application.md)
