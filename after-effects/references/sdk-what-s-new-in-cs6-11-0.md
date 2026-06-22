# What S New In Cs6 11 0, And What Was New Before Cs6, Play, Plan ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: What's New in CS6 (11.0)?; ...and what was new before CS6?; Play!; Plan!; Hack!; Steal!; Test!; Blame!; Developers Matter; Sample Projects; Sample Project Descriptions; Building The Sample Projects; Debugging Plug-ins; Deleting Preferences; Compatibility Across Multiple Versions?; API Versions; Third-party Plug-in Hosts?; PiPL Resources.

## What's New in CS6 (11.0)?

### What's New — What's New in CS6 (11.0)?

A handful of refinements went into smoother parameter UI handling. The `PF_PUI_INVISIBLE` parameter UI flag now works in After Effects, which comes in handy if your plug-in calls for hidden parameters that still affect rendering. These days, when a plug-in disables a parameter through `PF_U`pdateParamUI, we record that state in the UI flags so the plug-in can later inspect the flag and learn whether it's disabled. There's also a new flag, `PF_P`aramFlag\_`SKIP_REVEAL_WHEN_UNHIDDEN`, that lets a parameter be unhidden without twirling any parents open and without scrolling it into view within the Effect Controls panel and the Timeline panel.

Effects that paint a watermark over the output while the plug-in runs in trial mode can now report to After Effects whether watermark rendering mode is on or off, by way of the new `PF_O`utFlag2\_`OUTPUT_IS_WATERMARKED`.

With the arrival of the Global Performance Cache, you now have to instruct After Effects to throw away old cached frames whenever you change how your effect renders.

We took out `PF_H`asParamChanged and `PF_H`aveInputsChangedOverTimeSpan, supplying `PF_A`reStatesIdentical in their place.

Effects offering custom UI can now be sent `PF_E`vent\_`MOUSE_EXITED`, alerting them that the mouse left the layer or comp panel. `PF_P`aramUtilsSuite has reached version 3.

`PF_GET_PLATFORM_DATA` now carries new selectors for retrieving the wide character path of the executable and the resource file: `PF_P`latData*`EXE_FILE_PATH_W` and `PF_P`latData*`RES_FILE_PATH_W`. Their earlier non-wide counterparts are now deprecated.

A central theme of AE CS6 is 3D. A new `AEGP_L`ayerFlag\_`ENVIRONMENT_LAYER` has been introduced. Numerous new layer streams were added as well.

On top of that, `AEGP_L`ayerStream*`SPECULAR_COEFF` was renamed `AEGP_L`ayerStream*`SPECULAR_INTENSITY`, `AEGP_L`ayerStream*`SHININESS_COEFF` became `AEGP_L`ayerStream*`SPECULAR_SHININESS`, and `AEGP_L`ayerStream\_`METAL_COEFF` was shortened to just `AEGP_L`ayerStream_METAL.

A fresh suite, `AEGP_R`enderQueueMonitorSuite, hands a render queue manager everything it needs to work out what's going on at any moment in a render.

AEGP Mask Suite is now version 6 and supplies functions for reading and writing the mask feather falloff type. AEGP Mask Outline Suite has reached version 3 and opens up access to read and write mask outline feather information.

Effects that hinge on masks gain a new flag, `PF_O`utFlag2\_`DEPENDS_ON_UNREFERENCED_MASKS`.

AEGP Composition Suite has moved to version 9. Both `AEGP_C`reateTextLayerInComp and

`AEGP_C`reateBoxTextLayerInComp now take a new parameter, select_new_layerB.

AEGP Render Suite is now version 3 and adds a new function for obtaining the GUID of a render receipt.

Lastly, we've introduced two new read-only Dynamic Stream flags: `AEGP_D`ynStreamFlag*`SHOWN_WHEN_EMPTY` and `AEGP_D`ynStreamFlag*`SKIP_REVEAL_WHEN_UNHIDDEN`.

For effects operating inside Premiere Pro CS6, we've added the means to obtain 32-bit float and YUV frames out of `PF_CHECKOUT_PARAM`.

## ...and what was new before CS6?

### What's New — ...and what was new before CS6?

To dig back this far into history, consult outdated copies of the SDK (we don't supply them; anyone wanting you to build for ancient software had better hand over the SDK themselves).

## Play!

### How To Start Creating Plug-ins — Play!

Ahead of writing any code, put in a solid chunk of time experimenting with After Effects and the Sample Projects. Compile the plug-ins into the correct folder. Drop plenty of breakpoints and read through the entertaining, useful comments.

There's a quickstart video covering how to build an effect (on macOS): quickstart video

## Plan!

### How To Start Creating Plug-ins — Plan!

Get a firm handle on what your plug-in is meant to accomplish.

## Hack!

### How To Start Creating Plug-ins — Hack!

Once you've played around with the samples, pick the one whose behavior is closest to your intended result. You'll feel a pull toward building everything yourself from nothing — resist that pull! When you're writing effects, lean on the Skeleton template project. Splicing your own code into a project that already exists spares you the pain of rebuilding projects by hand, and that includes those finicky custom build steps Windows needs for generating PiPL resources.

## Steal!

### How To Start Creating Plug-ins — Steal!

Turning the Skeleton sample into your own project starts by duplicating the whole \Skeleton folder and renaming the copy to something such as \WhizBang. Open your preferred text editor and run a search across \WhizBang*.* — and yes, that sweep should cover the .NET and Xcode project files too — looking for every instance of Skeleton and SKELETON, then swap those for WhizBang and WHIZBANG.

With that done, what you've got compiles, launches, answers the usual commands, copes with 8- and 16-bpc color, leans on our `AEGP_S`uiteHandler utility code, and reacts to 3D light and camera data. See? Not painful at all.

Anyone building an AEGP is best served beginning with Projector for support around creating After Effects projects, Easy Cheese when the goal is a keyframe assistant, IO for handling media file formats, and Persisto to cover a basic menu command plus reading and writing preferences.

## Test!

### How To Start Creating Plug-ins — Test!

Even just to make testing easier, keep around a project where your effect is already applied and every parameter is keyframed to weird values. Pair those plug-in-stressing projects with whatever your development environment hands you, and shipping code you've actually tested is within reach.

## Blame!

### How To Start Creating Plug-ins — Blame!

Encounter behavior that strikes you as broken? Try to make it happen again in one of the sample projects you haven't altered. Knowing whether your own edits created the bug or whether it was lurking there all along can spare you hours of hunting.

## Developers Matter

### How To Start Creating Plug-ins — Developers Matter

It's outside developers who push the API and SDK forward and broaden what they cover. The things you ship let After Effects pull off feats we never imagined. Every bit of your work pushes After Effects further; don't stop! The SDK gets a lot of effort from us, and feedback and remarks from you are always welcome. Nearly every API tweak we ship traces back to a suggestion from a developer like you. Give us feedback

## Sample Projects

For every kind of plug-in the current API supports there's a sample or two, plus projects built to demonstrate specific ideas.

Across the sample projects, simplicity was the priority in how the code is written. Flashy code might earn top marks in a programming course, but it does little to teach you how the API's features actually work.

Building the sample projects is covered just past this point, so don't stop reading!

## Sample Project Descriptions

### Sample Projects — Sample Project Descriptions

Project

Description

AEGPs

An AEGP plugs straight into the menus of After Effects along with other spots in its interface. Exactly where a given AEGP turns up in the UI is spelled out further down.

Artie

Rendering of every 3D layer within a given composition gets handed over to Artie the Artisan. The same API powers our own internal 3D renderers, so it carries a great deal of complexity and reveals plenty of unspoken detail about how the After Effects rendering pipeline operates. There's no reason to touch this sample unless you have a strong motive for swapping out how After Effects does 3D rendering. Artisans appear in Composition > Composition Settings, in the 3D Renderer tab, in the Renderer drop-down.

Easy Cheese

Living on the Animation > Keyframe Assistant submenu, this keyframer demonstrates how to work with assorted keyframe attributes — and does so in a way that bears an eerie resemblance to our shipping plug-in, Easy Ease...

FBIO

Puts the After Effects Input/Output (AEIO) API through its paces. It resembles the IO sample but works with the frame-based .ffk file format.

Note

A Premiere Pro Importers is the route we'd point you to these days instead.

Grabba

Pulls frames — formatted however the plug-in asks for them — out of any composition in the project.

IO

Puts the After Effects Input/Output (AEIO) API through its paces. It works with the made-up .fak file format and fields every After Effects request to pull data out of or write data into such files.

Note

For new work, the path we suggest now is a Premiere Pro Importers.

Mangler

A keyframer that, much like our own, illustrates how an ADM palette is used.

Panelator

Builds a panel you can dock right alongside the standard ones.

Note

Going this route to build a panel is considerably more effort than the HTML5 Panel SDK demands.

We recommend starting with that SDK instead.

Persisto

Demonstrates reading data from and writing data to the After Effects preferences file.

ProjDumper

Writes out a text file that represents every element within an After Effects project.

Projector

Brings in the (made-up) .sdk file format and builds a project through AEGP API calls. Any time you're stuck on how to read or write some attribute of a project element, this is the first place to look.

Note

A handful of paths are hardcoded inside Projector.h. Fail to point them at real media on disk and you WILL hit errors when this plug-in runs. The fix is yours, not ours; change them!

QueueBert

Say it "Cue-BARE!" — QueueBert works over every facet of render queue items along with the output modules tied to them.

Streamie

Works on streams of both the dynamic and the fixed variety.

Sweetie

By way of the PICA (or "Suite Pea") API, Sweetie hands other plug-ins a function Suite. Should you be building several plug-ins that all draw on one image processing library, a suite like this is how you'd expose that library's functionality.

Text Twiddler

Works over text layers along with what's inside them.

Effects

Every effect shows up both in the Effect menu and on the Effects & Presets panel.

Checkout

At a time you specify, this pulls a frame of input from a different layer out of After Effects' frame cache. For any effect that takes layer parameters, this matters a great deal. Premiere Pro compatible.

Convolutrix

Puts our image convolution callbacks to work. Premiere Pro compatible.

Gamma Table

Demonstrates handling sequence data and puts our iteration callbacks to use. Out of nostalgia we've left this one sample in C; thanks to its dependence on version 3.x API features, it also runs in plenty of third-party plug-in hosts.

Paramarama

Puts oddball param types — the ones the other sample leaves out — through their paces. Premiere Pro compatible.

PathMaster

Demonstrates how an effect reaches paths.

Portable

Demonstrates spotting and adapting to a number of different plug-in hosts. Premiere Pro compatible.

Resizer

Resizer does just what its name says to the output buffer — it resizes it. That comes in handy for effects such as glows and drop shadows, which would otherwise get clipped at the layer's edges without a larger output buffer. Premiere Pro compatible.

SDK Backwards

Plays a layer's audio in reverse and blends it with a sine wave you can keyframe.

SDK Noise

Premiere Pro compatible; it shows off 32-bit and YUV rendering in Premiere Pro.

Shifter

Slides an image about inside the output buffer while putting our subpixel sampling and transform_world functions through their paces.

SmartyPants

Demonstrates the SmartFX API, which support for floating point pixels requires.

Transformer

Puts our image transformation callbacks through their paces.

Effect Template

Skeleton

When you set out to build an effect, Skeleton is where you begin. Premiere Pro compatible.

Effects with Custom UI

CCU

Builds a custom interface inside the composition and layer windows, with support for pixel aspect ratio and downsample ratios. Premiere Pro compatible.

ColorGrid

Demonstrates working with arbitrary data type parameters. It also sports a tidy custom UI. Premiere Pro compatible.

Custom ECW UI

Puts a thoroughly dull custom interface into the effect controls window and demonstrates reacting to a wide range of UI events.

Histogrid

New for CC 2015 (13.5). It illustrates how, in CC 2015 and later, custom UI can reach asynchronously-rendered upstream frames for lightweight processing. The effect derives a sampled 10x10 color grid from the upstream frame and shows a preview of it. At render time a finer grid is computed and applied to alter the output image, producing a blend of a color grid with the original image.

Supervisor

Demonstrates steering parameters — their values and their UI alike — according to what other parameters hold. Premiere Pro compatible.

BlitHook

EMP

External Monitor Preview. Treat this as your jumping-off point for adding the ability to push video out from the composition panel to video hardware.

| --- | --- |

## Building The Sample Projects

### Sample Projects — Building The Sample Projects

The sample projects have all been rolled up into one master project that sits in the SDK's Examples folder. On macOS that's Buildall.xcodeproj; on Windows it's BuildAll.sln.

Within your IDE, point your project's output folder at After Effects' plug-in folder.

When developing on macOS, the path we suggest is: ~/Library/Application Support/Adobe/Common/Plug-ins/[version]/MediaCore/

Across every CC version the version is fixed at 7.0; for releases before that it's CSx.

for example: ~/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/

or: ~/Library/Application Support/Adobe/Common/Plug-ins/CS6/MediaCore/

and on Windows the path to use is: [Program Files]\Adobe\Common\Plug-ins\[version]\MediaCore\

for example: C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\

or: C:\Program Files\Adobe\Common\Plug-ins\CS6\MediaCore\

Keep in mind this Windows path is a development-only suggestion. For Windows installers, follow the rules given here: Where Installers Should Put Plug-ins.

Xcode lets you fix this path one time for your projects under Xcode File > Project Settings > Advanced. Beneath Build Location pick Custom: Absolute and enter the path.

For convenience in Visual Studio, we've set the output path of every sample project through the environment variable `AE_PLUGIN_BUILD_DIR`, which you'll need to define as a user environment variable on your machine. Under Windows 7, right-click My Computer > Properties > and from the left sidebar pick Advanced System Settings. When the new dialog opens, press the Environment Variables button. Within the User variables section, add a New variable called `AE_PLUGIN_BUILD_DIR` carrying the path described above. So the variable takes effect, log out of Windows and back in.

You can instead assign the output path per project inside Visual Studio: right-click a project in the Solution Explorer, pick Properties, then under Configuration Properties > Linker > General set the Output File.

If compiling the plug-ins turns up a link error along the lines of:

"Cannot open file "[MediaCore plug-ins path]plugin.prm", be sure you started Visual Studio with administrator rights. Locate devenv.exe in your Visual Studio install, right-click it, go to Properties > Compatibility > Privilege Level, and tick "Run this program as an administrator".

## Debugging Plug-ins

Running the samples under your debugger is the surest route to understanding how After Effects and plug-ins talk to one another. Time well spent in your compiler's debugger alongside a sample project that mirrors your own plug-in can really reward you.

With the plug-in now building straight into the plug-ins folder as described earlier, here's the procedure for designating After Effects as the program that launches when you debug:

### Windows

1. Within the Solution Explorer panel of your Visual Studio solution, pick out the project you intend to debug
2. Right-click that project and pick Set as StartUp Project
3. Give it another right-click and pick Properties
4. Head to Configuration Properties > Debugging > Command and supply the path to the host application's executable that the plug-ins run inside (After Effects or Premiere Pro, perhaps)
5. At that point either press Play, or start the app and whenever you like choose Debug > Attach to Process...

### macOS

1. Within Xcode's Project Navigator, pick out the xcodeproj you intend to debug
2. Pick Product > Scheme > Edit Scheme...
3. On the Info tab beneath Run, set Executable to the host application the plug-ins run inside (After Effects or Premiere Pro, perhaps)
4. At that point either press Play to build and launch the current scheme, or start the app and whenever you like choose Debug > Attach to Process.

### Signing requirments and loading unsigned plug-ins

Unsigned plugins won't load on macOS versions 15 and up. While you're developing, get around that hurdle by wiring ad-hoc signing in as one more build step:

codesign --force --deep --sign - /path/to/plugin.dylib

Note: Yes, that trailing '-' after '--sign' is important.

Once release time comes, leave the plug-in package untouched after signing — altering it voids the signature and stops the plug-in from loading.

## Deleting Preferences

### Debugging Plug-ins — Deleting Preferences

As you build a plug-in, it may hand configuration data over to After Effects, which then keeps that data in its preferences file.

Holding Ctrl-Alt-Shift / Cmd-Opt-Shift while After Effects launches wipes the preferences and brings the app back up fresh.

Under Windows, you'll find the preferences at: [user folder]\AppData\Roaming\Adobe\After Effects\[version]\Adobe After Effects [version]-x64 Prefs.txt

Under macOS, their location is: ~/Library/Preferences/Adobe/After Effects/[version]/Adobe After Effects [version]-x64 Prefs

## Compatibility Across Multiple Versions?

As a rule, build your plug-ins against the newest After Effects SDK headers, which puts the latest suites and API capabilities within their reach. Once a fresh After Effects version ships, you typically won't have to put out a new build unless you want to tap functionality the new SDK has opened up. That said, never declare compatibility with a new After Effects version until you've actually tested your plug-in in it.

Test your plug-in carefully in every After Effects version it claims to support. Should you need a block of code that runs only under particular After Effects versions, you can always read the API version from `PF_I`nData.version for effects, or from the major and minor_versionL handed to your AEGP at the Entry Point.

When even finer version checks are needed, a plug-in can fire off a script with `AEGP_E`xecuteScript (`AEGP_U`tilitySuite6) that reads one of these attributes:

```
app.version - e.g. 11.0.1x12
app.buildNumber - e.g. 12.
```

## API Versions

### Compatibility Across Multiple Versions? — API Versions

| Release | Effect API Version | AEGP API Version |
| --- | --- | --- |
| 22.0 | 13.27 |  |
| 18.2 | 13.25 |  |
| 18.0 | 13.24 |  |
| 17.7 | 13.23 |  |
| 17.6 | 13.22 |  |
| 17.5 | 13.21 |  |
| 17.3 | 13.20 |  |
| 17.1 | 13.19 |  |
| 17.0 | 13.18 |  |
| 16.1 | 13.17 |  |
| 16.0 | 13.16 |  |
| 15.0 | 13.15 |  |
| CC 2017.1 (14.2) | 13.14 |  |
| CC 2017 (14.0) | 13.13 | 114.0 |
| CC 2015.3 (13.8) | 13.11 | 113.8 |
| CC 2015 (13.7) | 13.10 | 113.7 |
| CC 2015 (13.6) | 13.10 |  |
| CC 2015 (13.5, 13.5.1) | 13.9 | 113.5 |
| CC 2014 (13.0-13.2) | 13.7 | 113 |
| CC (12.2) | 13.6 | 112.2 |
| CC (12.1) | 13.5 | 112.1 |
| CC (12.0) | 13.4 | 112.0 |
| CS6.0.1 (11.0.1) | 13.3 | 111.0 |
| CS6 (11.0) | 13.2 | 111.0 |
| CS5.5 (10.5) | 13.1 | 17.0 |
| CS5 (10.0) | 13.0 | 17.0 |
| CS4 (9.0) | 12.14 | 16.24 |
| CS3 (8.0) | 12.13 | 16.24 |
| 7.0 | 12.12 |  |
| 6.5, 6.0 | 12.10 (Check for the presence of updated AEGP suites, should you need to differentiate between 6.0 and 6.5.) |  |
| 5.0 | 12.5 |  |
| 4.1 | 12.2 |  |
| 3.1 | 11.6 |  |

## Third-party Plug-in Hosts?

To keep working with hosts that only partly implement the API, some developers steer clear of the newest features in each After Effects release. Telling host applications apart is a matter of reading `PF_I`nData>appl_id. The appl_id After Effects reports is 'FXTC'.

For Premiere Pro it's 'PrMr'. At the time of writing, SmartFX and our AEGP functions have no support from any third party host.

The Premiere Pro & Other Hosts section is also worth a look.

## PiPL Resources

More than twenty years back, Plug-In Property Lists — PiPLs — got their start in Adobe Photoshop; they're resources that report a plug-in's basic behavior without the plug-in having to run. Inside After Effects, `PF_C`md*`GLOBAL_SETUP` (see Global Selectors) together with dynamic outflags have mostly taken over from PiPLs. Still, for archaeological reasons, whatever behaviors get declared during `PF_C`md*`GLOBAL_SETUP` have to line up with the PiPL.

For the sake of working across platforms, do as the samples do and keep one .r file serving both the macOS and Windows builds of your plug-in. The byte order of PiPL properties has to be macOS-specific at all times. Over on Windows, a PiPL gets compiled by running a .r file through pipltool.exe, which turns the .r file into a binary .rc file. Every Windows sample project ships with custom build steps that produce a .rc file out of a cross-platform .r file by way of our cnvtpipl.exe command line utility. Build off an existing sample plug-in and that build step will land correctly.

PiPL Property

Purpose

Kind

Plug-in type. AEEffect for an Effect.

Name

The name shown to users, which can run as long as 47 characters.

Category

Which category the effect falls under in the menus and on the Effects and Presets panel

Entry Point (one for each platform)

The PiPL is what exports your plug-in's entry point on both Windows and macOS. A plug-in covering several platforms has to declare a separate entry point per platform in the PiPL. You won't need a Windows .def file or hand-written exports unless you're also nominating some additional OS-specific entry point. Handling the export of each sample's entry point function falls to the macros in entry.h (over in the \SDKExamplesHeaders directory). Every sample project's entry point function is EffectMain() for effects or EntryPointFunc() for AEGPs.

`AE_P`i`PL_V`ersion

Unused

`AE_E`ffect_Spec_Version

SDK version the effect was built with

`AE_E`ffect_Version

The version of the effect

`AE_E`ffect_Info_Flags

Unused

`AE_E`ffect_Global_OutFlags

Must match the out_flags set in GlobalSetup

`AE_E`ffect_Global_OutFlags_2

Must match the out_flags2 set in GlobalSetup

`AE_E`ffect_Match_Name

A fixed, one-of-a-kind identifier — distinct from a plug-in's display name, which can shift on the fly.

`AE_R`eserved_Info

Unused.

`AE_E`ffect_Support_URL

New in AE 23.5! The effect's URL, surfaced in the Effects Manager. Clicking it lets someone dig up more detail on the effect or track down a newer release.

| --- | --- |

## PiPL Resources And Microsoft Visual Studio

### PiPL Resources — PiPL Resources And Microsoft Visual Studio

Pairing resources out of Microsoft Visual Studio .NET with the ones pipltool generates,

## include the output of the custom build steps into the Microsoft-generated .rc file.

```
// in file WhizBang.rc, generated by .NET.
#include "WhizBang_PiPL_temp.rc" // pipltool.exe's output
```

When you adapt a sample plug-in, rename whatever pipltool.exe produces to something along the lines of WhizBang_PiPL_temp.rc; leave it alone and every build will clobber the Microsoft resources, which is not good.

## Multiple PiPLs

### include the output of the custom build steps into the Microsoft-generated .rc file. — Multiple PiPLs

You can pack several plug-ins — AEGPs and effects both — into one file using multiple PiPLs, though it isn't advised. When a single file holds PiPLs for AEGPs as well as effects, the AEGPs have to come first!

Pointing multiple PiPLs at multiple effects inside one .dll or code fragment isn't supported by any other host — Premiere Pro included. And when one plug-in needs an update, do you honestly want to put out a fresh build of every plug-in you make? Our advice is a single PiPL and a single plug-in for each code fragment.

## Why Do I Need To Know All This?

### include the output of the custom build steps into the Microsoft-generated .rc file. — Why Do I Need To Know All This?

You don't; After Effects does. Take our advice and base your projects on the SDK samples, and you can just edit the .r file that holds your PiPL definition(s) — your plug-in's resources then refresh themselves automagically on your next build. Feel the love. Tinker with the custom build steps, on the other hand, and feel the pain.

## Exceptions

Catch every exception your plug-in's own code throws inside the plug-in itself. Any exception that didn't come from your plug-in's code should be passed along to After Effects.

The APIs in After Effects assume plug-ins written in C and aren't built to expect exceptions. Throw one from inside a plug-in and After Effects crashes on the spot.

In the effect samples, a firewall surrounds the switch statement within the main() function, while the AEGPs enclose their function hooks in try/catch blocks.

## See also

- [Application](script-application.md)
