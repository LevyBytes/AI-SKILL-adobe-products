# Introduction, About, Organization, Documentation Conventions ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Introduction; About; Organization; Documentation Conventions; A Note About Coding Style; Version History; What Can I Do With This SDK?; What Plug-Ins Can I Build With This SDK?; Where Do Plug-ins Appear In After Effects?; How Does After Effects Interact With Plug-ins?; SDK Contents; Other Integration Possibilities; Scripting; HTML5 Panels; AERender; Premiere Pro Importers; Mercury Transmit; SDK Audience.

## Introduction

Welcome to the Adobe® After Effects® Software Development Kit!

Expect this text to keep evolving — edits and additions land in it on an ongoing basis. You can always pull the most recent public release of the SDK from: https://www.adobe.io/after-effects/

Should you want further detail, there's a good chance the answer is already waiting on the After Effects SDK forum: After Effects SDK Forum.

Try the search box first, and if nothing turns up, go ahead and submit a fresh question.

## About

### Introduction — About

Over many years this guide has shifted shape repeatedly. It reads partly as a reference work and partly as a tutorial, carrying layer upon layer of detail that has piled up across two-plus decades of building out and polishing the API.

Granted, somewhere a single place has to capture every fiddly corner of the After Effects APIs. But because nobody sane would actually sit down to read a thing like that cover to cover, we've made an effort to keep it lively and engaging.

Whenever we get the chance, we mean to fold in additional diagrams, illustrations, and purdy pickshurs that lay bare the finer points of the API.

Your feedback, as ever, is something we welcome and treasure.

## Organization

### Introduction — Organization

An overview of how you can build atop After Effects lives in What Can I Do With This SDK? — it lays out what plug-ins are and the way they cooperate with the application, walks through the sample projects and how to adapt them, and points out where plug-ins get installed and which resources they draw on.

Turn to Effect Basics for the groundwork on effect plug-ins. That section walks through the function parameters that flow into and back out of an effect plug-in's entry point, and it lays out capability flags, effect parameters, and image buffers.

For the full story on building a finished effect plug-in by way of the numerous callback functions on offer, see Effect Details, which additionally suggests plenty of ways to test that your plug-in holds up reliably.

To handle 32-bit floating point images, the effect plug-in API is extended through SmartFX.

Events dispatched to effect plug-ins, the wiring-in of your own custom interface elements, parameter supervision, and how custom data parameter types lean on Custom UI messaging are all the territory of Effect UI & Events.

For audio effects, look under... Audio.

The After Effects General Plug-in (AEGP) API gets a thorough treatment in AEGPs: the callback functions you're handed, tapping into internal messaging, reaching into the live contents of open projects, and responding to menu commands each get extended coverage.

Specialized 3D-renderer plug-in AEGPs are the subject of Artisans.

AEIOs are the specialized AEGPs responsible for file input and output.

Matters of staying compatible with Premiere Pro — along with other applications that handle only a portion of After Effects plug-ins — are taken up in Premiere Pro & Other Hosts.

## Documentation Conventions

### Introduction — Documentation Conventions

General C/C++ code, along with function and structure names, appears set in Courier; MyStruct and MyFunction();

Anything rendered in blue carries a hyperlink.

Command selectors show up in italics; `PF_C`md_RENDER.

## A Note About Coding Style

### Introduction — A Note About Coding Style

Since the public APIs are what we build our own plug-ins on, the conventions we follow show up all over the SDK. What follows describes the pseudo-neo-post-Hungarian notation we lean on. You're of course free to write your code any way you please. Convinced our in-house coding standards deserve a rethink? Post over at comp.sys.programmer.better.things.to.do.with.your.time, and we'll mull it over carefully just before changing nothing whatsoever.

### Coding Conventions

| Type | Suffix | Example |
| --- | --- | --- |
| Handle | H | fooH |
| pointer (to) | P | fooP |
| Boolean | B | visibleB |
| Float | F | degreesF |
| Long | L | offsetL |
| unsigned long | Lu | countLu |
| short | S | indexS |
| char | C | digitC |
| unsigned char | Cu | redCu |
| function pointer | \_func | sample_func |
| time value | T | durationT |
| char\* (NULL-terminated C string) | Z | nameZ |
| rectangle | R | boundsR |
| fixed rectangle | FiR | boundsFiR |
| float rectangle | FR | boundsFR |
| ratio | Rt | scale_factorRt |
| void\* | PV | refconPV |
| optional parameter (must be passed, can be NULL) | 0 | extra_flags0 |

## Version History

| Revision Date | Documentor | Notes |
| --- | --- | --- |
| 8 Sep 2025 | Pablo Colapinto | 25.6 SDK Release - AE SDK supports building effects for Windows on Arm Natively. Please see the Windows on Arm Support section for more information. |
| 24 Feb 2025 | Sean Jenkin | 25.2 SDK Release - `AEGP_G`etLayerObjectType can now return `AEGP_O`bjectType_3`D_MODEL` if the object type is a 3D model |
| 5 May 2023 | Jason Bartell | Update Color Settings suite to `AEGP_C`olorSettingsSuite5 with new OCIO calls, and added URL property to the PiPL. See `AEGP_C`olorSettingsSuite5 and PiPL Resources respectively for more details. |
| 18 October 2022 | Field Kuang | Update layer suite to `AEGP_L`ayerSuite9 with 3 new Track Matte methods. See `AEGP_L`ayerSuite9 for more details |
| 26 October 2021 | Sean Jenkin | After Effects 2022 (22.0) release. Updates the maxiumum threads for `PF_I`terate. |
| 31 March 2021 | Sean Jenkin | Updated Multi-Frame Rendering documentation for sequence_data changes and Compute Cache system. Added information for supporting Universal Mac binaries for Apple Silicon effect plugins. |
| 1 June 2020 | Field Kuang | Multi-Frame Rendering is now supported in AE Beta builds. See Multi-Frame Rendering in AE for more details. |
| 1 November 2018 | Bruce Bullis | 16.0 release |
| 10 November 2017 | Zac Lam | 15.0 release |
| 12 May 2017 | Zac Lam | CC 2017.1 (14.2) release |
| 2 November 2016 | Zac Lam | CC 2017 (14.0) release. |
| 21 July 2015 | Zac Lam | CC 2015 (13.5) release. |
| 12 June 2014 | Zac Lam | CC 2014 (13.0) release. Corrections for accuracy. Removed old version references. |
| 15 July 2013 | Zac Lam | CC (12.0) release. API version changes, misc small clarifications, more details in AEIOs. |
| 26 April 2012 | Zac Lam | CS6 (11.0) release. Big reorganization of the AEGPs and Artisans. Many additions throughout. |
| 2 May 2011 | Zac Lam | CS5.5 (10.5) release. |
| 28 April 2010 | Zac Lam | CS5 (10.0) release. 64-bit porting info. Drawbot. |
| 4 May 2009 | Zac Lam | CS4 (9.0) release. Complete reorganization of first three chapters. Fleshed out documentation on Premiere Pro. |
| 1 July 2007 | Bruce Bullis | CS3 (8.0) release. |
| 4 April 2006 | Bruce Bullis | Updated to reference new development system requirements and Xcode-specific issues. Some editing. |
| 1 December 2005 | Bruce Bullis | Updated for 7.0. Added SmartFX documentation. Noted current suite version numbers throughout. Numerous editorial changes. Documented many new AEGP suite functions. |
| 4 April 2004 | Bruce Bullis | Updated for 6.5. Expanded and corrected all documentation. Added documentation of all new AEGP functions. |
| 20 July 2003 | Bruce Bullis | Major overhauls for After Effects 6.0. Added documentation for all new (and some old) suites, and many supporting details for effects. |
| 4 March 2002 | Bruce Bullis | Updated Mac OS X details, expanded AEIO and AEGP documentation. |
| 1 December 2001 | Bruce Bullis | 5.5 release. Added information on new outflags, PiPL changes, and additions and changes to the AEGP API. Numerous clarifications and edits. |
| 2 February 2001 | Bruce Bullis | 5.0 release. Entire document edited and reformatted. Sections on 16 bit-per-channel color and parameter supervision, as well as the entire AEGP chapter, have all substantially expanded. |
| 9 September 1999 | Bruce Bullis | Revised for 4.1; added General plug-ins and AEGP information. Added information on new selectors, resize handle. |
| 1 January 1999 | Bruce Bullis | Version 4.0 SDK Release 1 - Added information on new global flags, custom data types, utilization of PICA suites, CustomUI messaging and parameter supervision, new callbacks. many editorial changes. |
| 1 May 1998 | Bruce Bullis | Version 3.1 SDK Release 6 - Editorial changes only |
| 17 April 1997 | Brian Andrews | Version 3.1 SDK Release 3 - First public release (really a pre-release) of the SDK for Windows development. |
| 13 Nov. 1996 | Brian Andrews | Version 3.1 SDK Release 2 - Minor updates. |
| 21 June 1996 | Brian Andrews | Version 3.1 - Final 3.x release. |
| 5 March 1996 | Brian Andrews | Version 3.0 - Preliminary release for the After Effects developer kitchen. |
| August 1994 | Dave Herbstman Dan Wilk | Version 2.0.1 - Added support for PowerPC. |
| January 1994 | Dan Wilk | Version 2.0 - Updates. |
| January 1993 | Russell Belfer | Version 1.0 - Initial SDK release. |

## What Can I Do With This SDK?

The API documented in this SDK is what developers reach for when authoring plug-ins. Through such plug-ins you can broaden what After Effects (and any other host that honors the After Effects API) is able to do. A plug-in can also serve as a bridge, connecting After Effects to a separate application.

## What Plug-Ins Can I Build With This SDK?

### What Can I Do With This SDK? — What Plug-Ins Can I Build With This SDK?

Applied to the video or audio of a composition, effect plug-ins process that image and/or sound data. Brightness and Contast, Hue/Saturation, Gaussian Blur, and Warp Stabilizer are a few of the effects that ship built in. To let users tune the result, an effect can expose its own parameter controls, and the values of those parameters are free to change across time; an effect may also pull from other layers and parameters at various moments while computing its output. A common misconception is that every plug-in is an effect — in reality, effects are only one of the plug-in categories After Effects relies on.

For a quickstart video that walks through building an effect on macOS, head to adobe.ly/2sjMDwM

Nearly any piece of an After Effects project or its preferences is within reach of After Effects General Plug-ins (AEGPs), which can both read and alter it. Such plug-ins are able to insert menu items, register ('hook') themselves so they receive After Effects' internal commands and fire those commands off, and contribute fresh panels that dock and resize inside the After Effects interface. Markers and keyframes are theirs to manipulate, the render queue is theirs to manage, and they can even execute scripts. The AAF importer and the SWF exporter are a couple of the AEGPs that come built in, and Automatic Duck Pro Import AE counts as another widely recognized one.

Support for additional media file types is what After Effects Input/Output (AEIO) plug-ins deliver. The Premiere Pro Importers API covers comparable ground and is the better choice in many situations, unless your case calls for a custom setup dialog that specifies interpretation settings. Alongside the AEGP API, AEIOs draw on a handful of APIs that are particular to AEIOs. Photoshop format plug-ins and filters, together with Foreign Project Format (FPF) plug-ins, remain functional in After Effects, yet those APIs were deprecated long ago in favor of the AEIO API.

To support broadcast-quality monitoring and tape playback, BlitHook plug-ins route video out to external hardware. A good place to begin is the EMP sample project. From After Effects CC 2014 onward, Mercury Transmit is the API to reach for.

Rendering the output of 3D layers falls to Artisans, which assume the job of 3D rendering away from After Effects — though After Effects keeps handling every 2D layer itself. Like AEIOs, Artisans lean on the AEGP API plus a set of APIs specific to Artisans.

None of the integrations above fit what you have in mind? Plenty of flexibility remains in After Effects, and a number of other routes exist for hooking into it. See: Other Integration Possibilities.

## Where Do Plug-ins Appear In After Effects?

### What Can I Do With This SDK? — Where Do Plug-ins Appear In After Effects?

Within whichever effect category their PiPL names, effects plug-ins show up under the Effect menu as well as in the Effects & Presets panel. After one is applied, the Effect Controls panel (ECP) is where that effect's parameter controls — sliders, pop-ups, and so on — become visible.

Any After Effects menu can receive items from After Effects General Plug-ins (AEGPs), and they can list extra panels in the Window menu too. There's no visible distinction between these menu items and the ones After Effects supplies on its own.

Depending on what kind of importer it is, an AEIO or a Photoshop Format plug-in may surface under File > Import, or within the Import File dialog under the Files of type drop-down. The render queue may likewise list AEIOs and Format plug-ins among the output formats it offers.

After Effects loads and uses BlitHook plug-ins on its own, yet none of them shows up in a menu or dialog. Optionally, such a plug-in can supply a menu item that launches its own custom settings dialog, registering and refreshing that item by way of the AEGP API.

For updating the menu, it can register with `AEGP_R`egisterUpdateMenuHook() so After Effects calls it, and it can dim or enable the menu item through `AEGP_E`nableCommand()/DisableCommand().

Within the Composition Settings dialog, the Advanced tab carries a Rendering Plug-in drop-down, and that is where Artisans appear.

## How Does After Effects Interact With Plug-ins?

### What Can I Do With This SDK? — How Does After Effects Interact With Plug-ins?

Authored in C or C++, plug-ins take the form of bundle packages under macOS and DLLs under Windows. On either platform a Plug-in Property List (PiPL Resources) resource has to be present inside them. For After Effects to load and run them, the plug-ins have to sit in one of a small number of designated folders.

When it comes to effects plug-ins, After Effects dispatches command selectors — together with the relevant information — to the plug-in Entry Point that the effect's PiPL Resources resource names. These selectors arrive in reaction to what the user does: applying the effect, altering parameters, scrubbing the timeline's frames, and rendering each set off its own distinct sequence of selectors.

Each sequence gets its own effect instance from After Effects, with input data and settings unique to it. Global data is shared across every instance, and within a sequence data can be shared among all of that sequence's frames. Applying an effect does not make After Effects crunch all the image data right away; it calls an effect only at the point its output is actually needed.

The entry point function of an After Effects General Plug-in (AEGP) fires while the application starts up, and that is when it registers for whatever messaging it requires. After that, user actions drive any further calls to the AEGP, arising as the plug-in responds to UI events or menu commands. Some plug-ins, depending on their feature set, also have to answer OS-specific entry points for thread management and UI work.

With BlitHook plug-ins, frames get pushed at the moment they show in the Composition panel. A user can kick off a RAM preview over a stretch of the timeline, which renders that stretch into RAM and then plays the whole thing back at full speed.

## SDK Contents

### What Can I Do With This SDK? — SDK Contents

Inside the SDK you'll find the headers that define the After Effects APIs, sample projects that show off integration features, and this SDK Guide itself.

Compiling against the SDK header files is what exposes the assorted After Effects functionality for the plug-in to call.

## Other Integration Possibilities

This SDK lays out most of the ways you can integrate with After Effects, but a few additional avenues shouldn't be ignored either.

## Scripting

### Other Integration Possibilities — Scripting

As a fairly light and agile route to automating After Effects tasks, scripting fits the bill. For UI integration, ScriptUI offers one path — letting you build custom dialogs and panels (HTML5 Panels are worth a look as well). Scripting can also work hand in hand with plug-in development whenever some capability is surfaced through scripting but not through the C APIs covered in this document.

ExtendScript, which builds on JavaScript, is the language After Effects scripts are written in. Bundled with After Effects is the ExtendScript ToolKit, a handy environment for authoring and trying out scripts of your own. To safeguard intellectual property, scripts can be compiled down into .jsxbin binary files.

Over on the Adobe I/O website you can reach the After Effects Scripting Guide and turn up a link to the scripting forums, at: https://www.adobe.io/apis/creativecloud/aftereffects.html

Running scripts from the command line is another way to drive After Effects. From within your script you're able to open the project and fire script actions against it. As one example, the statement below runs a script straight from the command line:

```
AfterFX -s "app.quit()"
```

Or, to run a .jsx script that finishes with a quit, use this statement instead:

```
AfterFX -r path_to_jsx_script
```

Feedback to the console on Windows comes by way of AfterFX.com, since AfterFX.com is the command line application.

## HTML5 Panels

### Other Integration Possibilities — HTML5 Panels

Starting with CC 2014, HTML5 panels are something After Effects supports. To reach them inside After Effects, go to Window > Extensions > (your panel name). Just like every other After Effects panel, these can dock and resize. The pieces behind them are HTML5, After Effects Scripting, and JavaScript. Download the After Effects Panel SDK from Adobe I/O, whose site lives at: https://www.adobe.io/apis/creativecloud/aftereffects.html

## AERender

### Other Integration Possibilities — AERender

Tightly bound up with scripting is aerender's command line interface. Although automated renders are what aerender is mainly built for, it can run any string of scripting commands from the command line. For an overview, the After Effects help docs cover it at this address: https://helpx.adobe.com/after-effects/using/automated-rendering-network-rendering.html

## Premiere Pro Importers

### Other Integration Possibilities — Premiere Pro Importers

Across the bulk of Adobe Creative Cloud applications — Premiere Pro, Media Encoder, Prelude, and Audition among them — Premiere Pro importers handle bringing media in. Given that wider reach, we suggest writing a Premiere Pro importer unless what you need is the very specific After Effects integration that only this SDK's AEIO API provides. Here is where to get the Premiere Pro SDK: https://www.adobe.io/apis/creativecloud/premierepro.html

A priority system is one edge MediaCore importer plug-ins hold over AEIOs: whichever importer ranks highest takes the first shot at a file, and should that importer not handle the file in question, the next one down in priority gets its turn to attempt the import, continuing on down the line.

## Mercury Transmit

### Other Integration Possibilities — Mercury Transmit

For pushing video out to output hardware for broadcast-quality monitoring, Mercury Transmit plug-ins are the tool. Most of the Adobe Creative Cloud applications back transmitters, Premiere Pro, After Effects, Prelude, and Character Animator included. Documentation for the Mercury Transmit API sits inside the Premiere Pro SDK, which you can obtain at: https://www.adobe.io/apis/creativecloud/premierepro.html

## SDK Audience

Writing After Effects plug-ins demands solid C/C++ skills on your part. Questions tied specifically to the After Effects API are ones we'll assist with, but teaching you your IDE or the fundamentals of programming is beyond what we can offer.

A user-level familiarity with After Effects, plus the basics of motion graphics vocabulary, is taken for granted in this SDK guide. Lacking that, grab a quality instructional title — the Adobe After Effects Classroom in a Book is one solid option among many on the market. Doing so will get you up to speed on the

groundwork you'll need — alpha channels, pixel aspect ratio, interlacing, color spaces, and more — as it applies to After Effects.

## Development Requirements

### SDK Audience — Development Requirements

After Effects system requirements are published at this URL: https://helpx.adobe.com/after-effects/system-requirements.html

Across macOS 10.15/11.0, the samples in the SDK were validated on two Xcode versions — 11.3.1, and 12.4 to cover universal binaries on Apple Silicon — and on Windows 10 they were validated with Microsoft Visual Studio 2019.

## What's New

Building your very first After Effects plug-in? Then it's fine to bypass the What's New section and jump straight ahead to How To Start Creating Plug-ins.

## What's New in the 25.6 SDK

### What's New — What's New in the 25.6 SDK

### Windows on Arm Support

- Native compilation of effects for Windows on Arm is now possible with the AE SDK. As a company, Adobe is advancing native support throughout many of our products, and you can already get beta releases of natively-built Windows on Arm versions of Premiere Pro, After Effects, and Adobe Media Encoder. Because those native builds will only run effects that were themselves compiled natively, updating your effects for Windows on Arm support soon really matters. Please see the Windows on Arm Support section for more information.

## What's New in the 25.2 SDK

### What's New — What's New in the 25.2 SDK

Within `AEGP_L`ayerSuite9, a 3D model object type now causes `AEGP_G`etLayerObjectType to give back `AEGP_O`bjectType_3`D_MODEL`.

## What's New in After Effects 2022

### What's New — What's New in After Effects 2022

The first complete public build carrying Multi-Frame Rendering support arrived with After Effects 2022. Released back in October 2021, the matching AE Effects SDK brought a single change that raises the ceiling on how many `PF_I`terate threads are allowed.

## What's New in the After Effects SDK in March 2021

### What's New — What's New in the After Effects SDK in March 2021

### Multi-Frame Rendering Changes

1. For the `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING` flag, the final behavior has landed. Once you set this flag to signal Multi-Frame Rendering support, it also forces whatever lives in sequence_data to be const/read-only during Render time, and getting at sequence_data now goes through a suite, `PF_E`ffectSequenceDataSuite1.
2. Should your plugin be impossible to update for the new sequence*data behavior, a fresh flag — `PF_O`utFlag2*`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` — can now be set next to `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING`. For effects carrying this flag, After Effects can't grant as much rendering concurrency and the performance gains that come with it (which is what the \_SLOWER part of the name signals).
3. The Compute Cache (once called the 3-way checkout cache) is a newly available suite. As either a stand-in for or an addition to sequence_data, it hands plugins a thread-safe cache so multiple render threads can compute and cache whatever data they need to render frames.

Because of all this, keeping Multi-Frame Rendering compatibility with AE Beta builds going forward means you have to move to the March 2021 SDK and compile against it. Beginning with AE 22.0x6 (which shipped on June 29th 2021), any plugin built against the June 2020 SDK will stop supporting Multi-Frame Rendering, regardless of whether `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING` is set.

Fuller detail lives in the Multi-Frame Rendering in AE section.

### Apple Silicon Support

- Native compilation of effects for Apple Silicon is now possible with the AE SDK. After Effects itself doesn't run on Apple Silicon yet, but as a company Adobe is advancing native support throughout many of our products. Native versions of applications like Premiere Pro now exist, and features such as Motion Graphic Templates may load your effects inside Premiere Pro. Since only natively compiled effects will function when the native build of Premiere Pro is running, updating your effects for Apple Silicon support soon really matters. For the full rundown, turn to the Apple Silicon Support section.

### Exporting Symbols from Effects

- On MacOS, the SDK samples have been changed so they no longer export symbols by default. The Exporting Symbols in Effects section spells this out further.

### Downloading the March 2021 SDK

The SDK is available for download through the Adobe Developer Console, located at https://adobe.io/after-effects/

### After Effects Beta Builds

Getting hold of the AE host-side changes for this SDK means downloading a fresh After Effects beta build through the Creative Cloud Desktop App. The March 2021 SDK is supported by builds 18.2x11 and up.

## What's New in After Effects Beta builds after June 2020

### What's New — What's New in After Effects Beta builds after June 2020

At present, only Beta builds of AE carry Multi-Frame rendering support. See Multi-Frame Rendering in AE for more details.

## What's New in CC 2019 (16.0)?

### What's New — What's New in CC 2019 (16.0)?

The way GPU effects get processed has been reworked. Refer to "GPU Effects Changes" for the specifics.
