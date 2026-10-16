# PiPL Resources

More than twenty years back, Plug-In Property Lists — PiPLs — got their start in Adobe Photoshop; they're resources that report a plug-in's basic behavior without the plug-in having to run. Inside After Effects, `PF_Cmd_GLOBAL_SETUP` (see Global Selectors) together with dynamic outflags have mostly taken over from PiPLs. Still, for archaeological reasons, whatever behaviors get declared during `PF_Cmd_GLOBAL_SETUP` have to line up with the PiPL.

For the sake of working across platforms, do as the samples do and keep one .r file serving both the macOS and Windows builds of your plug-in. The byte order of PiPL properties has to be macOS-specific at all times. Over on Windows, a PiPL gets compiled by running a .r file through pipltool.exe, which turns the .r file into a binary .rc file. Every Windows sample project ships with custom build steps that produce a .rc file out of a cross-platform .r file by way of our cnvtpipl.exe command line utility. Build off an existing sample plug-in and that build step will land correctly.

| PiPL Property | Purpose |
| --- | --- |
| Kind | Plug-in type. AEEffect for an Effect. |
| Name | The name shown to users, which can run as long as 47 characters. |
| Category | Which category the effect falls under in the menus and on the Effects and Presets panel |
| Entry Point (one for each platform) | The PiPL is what exports your plug-in's entry point on both Windows and macOS. A plug-in covering several platforms has to declare a separate entry point per platform in the PiPL. You won't need a Windows .def file or hand-written exports unless you're also nominating some additional OS-specific entry point. Handling the export of each sample's entry point function falls to the macros in entry.h (over in the \SDKExamplesHeaders directory). Every sample project's entry point function is EffectMain() for effects or EntryPointFunc() for AEGPs. |
| `AE_PiPL_Version` | Unused |
| `AE_Effect_Spec_Version` | SDK version the effect was built with |
| `AE_Effect_Version` | The version of the effect |
| `AE_Effect_Info_Flags` | Unused |
| `AE_Effect_Global_OutFlags` | Must match the out_flags set in GlobalSetup |
| `AE_Effect_Global_OutFlags_2` | Must match the out_flags2 set in GlobalSetup |
| `AE_Effect_Match_Name` | A fixed, one-of-a-kind identifier — distinct from a plug-in's display name, which can shift on the fly. |
| `AE_Reserved_Info` | Unused. |
| `AE_Effect_Support_URL` | New in AE 23.5! The effect's URL, surfaced in the Effects Manager. Clicking it lets someone dig up more detail on the effect or track down a newer release. |
