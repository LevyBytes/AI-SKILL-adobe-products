# What S New In 15 0, What S New In Cc 2017 1 14 2, What S New In Cc 2017 14 1, What S New In Cc 2017 14 0 ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: What's New in 15.0?; What's New in CC 2017.1 (14.2)?; What's New in CC 2017 (14.1)?; What's New in CC 2017 (14.0)?; What's New in CC 2015.3 (13.8)?; What's New in CC 2015 (13.6)?; What's New in CC 2015 (13.5.1)?; What's New in CC 2015 (13.5)?; What's New in CC 2014.1 (13.1)?; What's New in CC 2014 (13.0)?; What's New in CC (12.0)?; What's New in CS6.0.1 (11.0.1)?.

## What's New in 15.0?

### What's New — What's New in 15.0?

Rendering of GPU effects, a capability that Premiere Pro already had, now works in After Effects too. Be aware that any unrecognized effect whose match name carries the "ADBE " prefix gets dropped from GPU rendering, so confirm your own GPU effects ship with a custom match name of your own. Once an effect can render on the GPU, the Effect panel marks it with the GPU badge.

Inside the Premiere Pro SDK, the GPU effect sample projects were revised so they now register themselves as GPU effects within AE, though their render output is still not finished.

There's also a freshly defined entry point that lets effects hand the host basic information at runtime instead of leaning on the older PiPL resources. By going this route, a single binary can register several entry points at once. The first host to handle this entry point is Premiere Pro; After Effects is slated to pick it up in a later release.

To show the new technique, the effect sample projects were updated accordingly, yet they hold onto their PiPL so older builds keep working.

Version 5 is where `AEGP_S`treamSuite now stands, and both `AEGP_G`etExpression() and `AEGP_S`etExpression() gained Unicode handling in that revision.

`PF_A`dvTimeSuite has reached version 4, which introduces `PF_T`imeCountFrames() — a call that hands back the frame's index within the active comp.

For matrix multiplication, the brand-new AEGP Math Suite supplies convenient calls.

Adobe Clean is now the application's font. Earlier on, After Effects drew its UI text in Tahoma under Windows and in Lucida Grande under macOS X. Because this font is proprietary, we are unable to provide it for your own UI to use.

## What's New in CC 2017.1 (14.2)?

### What's New — What's New in CC 2017.1 (14.2)?

- Layer Params can include Masks and Effects

Where an effect takes a layer as input — Set Matte and Displacement Map are examples — it can now reach into that input layer's masks and effects rather than being limited to the layer's source alone. The upshot: there's no longer a reason to pre-compose layers purely so an effect can reference them.

Whenever an effect carries a layer parameter, a fresh menu sits beside the layer selector and lets you decide whether the input layer is taken from its source, its masks, or its effects:

- Source: pulls from the layer's source only; both masks and effects are skipped.
- Masks: pulls from the layer once its masks have been applied, ignoring effects.
- Effects & Masks: pulls from the layer after both its masks and its effects have been applied.

You'll find this control behaves much like the View menu down at the foot of the Layer viewer panel, which lets you draw the layer from various points along the rendering order — its source, its masks, or its separate effects.

Since the user sees this option, the intent is for it to stay invisible to the effect itself. As far as the effect can tell, the input merely carries the upstream effects and masks already folded in, with nothing about the effect altered. If your effect relies on layer params, consider these checks while testing:

- The effect keeps behaving the way it should.
- Driving the layer param's new Source/Mask/Effects control works correctly with the effect.
- Loading legacy projects, or saving down to an earlier project version, leaves the effect intact.
- Verify the effect can't reference itself — that is, it can't feed its own layer's effects back in as input for that same layer.
- Suite Enhancements

Now at version 3, `PF_A`dvTimeSuite ships a reworked `PF_G`etTimeDisplayPref() call built around an updated `PF_T`imeDisplayPrefVersion parameter that copes with higher frame rates. Should the values overflow the range the structure can hold, the earlier version 2 of that call may now hand back an error.

Comp Suite has advanced to version 11 and adds `AEGP_R`eorderCompSelection() for shifting a selection to a given layer index. Pair it with `AEGP_S`etSelection() when you use it.

## What's New in CC 2017 (14.1)?

### What's New — What's New in CC 2017 (14.1)?

AEGP Item Suite and AEGP Render Queue Item Suite gained Unicode support.

## What's New in CC 2017 (14.0)?

### What's New — What's New in CC 2017 (14.0)?

GLator has returned as a sample! Its update demonstrates how to manage an OpenGL context correctly from inside an effect plug-in.

## What's New in CC 2015.3 (13.8)?

### What's New — What's New in CC 2015.3 (13.8)?

Premiere Pro now honors `PF_O`utFlag\_`I_AM_OBSOLETE`. On top of that, custom effect UI running in Premiere Pro now drives high DPI screens, Retina Displays among them.

## What's New in CC 2015 (13.6)?

### What's New — What's New in CC 2015 (13.6)?

There's a new AEGP Item View Suite, giving you a route to obtain the playback time tied to an item view. For this release, only the composition scenario has been built out. What comes back should be the view's playback time during playback, and otherwise the present (needle) time.

`AEGP_R`enderNewItemSoundData() was overhauled and now behaves much like it did in 13.2.

## What's New in CC 2015 (13.5.1)?

### What's New — What's New in CC 2015 (13.5.1)?

Some audio APIs that 13.5 broke through its threading changes are repaired in this release. Under 13.5, invoking `AEGP_R`enderNewItemSoundData() from the UI thread produced `A_E`rr_GENERIC. Calling it on the UI thread now works again.

So that a deadlock is avoided, `AEGP_R`enderNewItemSoundData() now hands back silence — but only within `PF_C`md\_`UPDATE_PARAMS_UI`. In that particular spot it no longer acts the way it once did, yet everywhere else it keeps functioning correctly.

## What's New in CC 2015 (13.5)?

### What's New — What's New in CC 2015 (13.5)?

- Separate UI and Render Threads

A sweeping architectural overhaul lands in this After Effects release: the UI (main) thread is now split apart from the render thread. Selectors like `PF_C`md*RENDER, `PF_C`md*`SMART_PRERENDER`, and `PF_C`md*`SMART_RENDER` originate from the render thread and go out to effect plug-ins. From the UI thread come selectors such as `PF_C`md*`SEQUENCE_SETUP`, `PF_C`md*`USER_CHANGED_PARAM`, `PF_C`md*`DO_DIALOG`, and `PF_EVENT_DRAW`. As for `PF_C`md\_`SEQUENCE_RESETUP`, it is

dispatched from both the render and UI threads.

The point of all this is sharper responsiveness and snappier interaction. That said, the reworked design carries fresh requirements and can upset assumptions that current plug-ins had counted on. A few of the bigger shifts follow:

1. The render thread can no longer alter the project (indeed, it now keeps its own private copy of it)
2. Modified sequence data cannot be handed from rendering back up to the UI thread for custom UI refreshes
3. As a rule, lengthy work — like rendering frames synchronously — should no longer happen on the UI thread

Wondering whether your plug-in is impacted? Probe for these symptoms:

1. Rendering fails to refresh once a UI parameter changes, because it leans on sequence_data that might not currently be copied across to render
2. Rendering fails to refresh while you click or drag inside the Composition Window (for much the same reasons)
3. Custom Effect UI fails to refresh because it leans on sequence_data produced in render (which the UI can no longer reach, since it lives in a separate project, the render project can't be mutated, and the cache holds frames rendered earlier)
4. Errors warning you that an operation on the render thread (or the UI thread) isn't expected

Broadly, any computation meant to stick around or drive the UI will now need to be pulled out of the UI thread instead of being pushed in from the render thread. Handling these situations may call for the new

13.5 APIs or for approaches that differ from earlier releases.

- The Need For More Efficient Sequence Data Handling

`PF_O`utFlag2\_`SUPPORTS_GET_FLATTENED_SEQUENCE_DATA`

`PF_C`md\_`GET_FLATTENED_SEQUENCE_DATA`

Through version 13.2, every act of serializing or flattening sequence_data meant tearing down and rebuilding whatever data structures were involved. From 13.5 onward, that serializing/flattening fires off even more frequently as an effect is edited. The reason? To keep the UI thread and the render thread in sync, AE has to serialize/flatten project edits before shipping them between the two.

To streamline this, 13.5 lets AE issue `PF_C`md*`GET_FLATTENED_SEQUENCE_DATA` to ask for sequence data without forcing the present data to first be deallocated and reallocated. What sets this selector apart from `PF_C`md*`SEQUENCE_FLATTEN` is that it returns a copy of the proper flattened state while leaving intact the original structure(s) the effect is presently working with. The PathMaster sample project carries a code example for this.

In time this will be mandatory for plug-ins rebuilt to be thread-safe (refer to `PF_O`utFlag2*`AE13_5_THREADSAFE` further down). The long-serving `PF_C`md*`SEQUENCE_FLATTEN` is destined to lose support in later versions.

- `PF_O`utFlag\_`FORCE_RERENDER` Changes

When you can, we suggest setting off rerenders with one of these: GuidMixInPtr() (covered in the section that follows), arb data, or `PF_C`hangeFlag\_`CHANGED_VALUE`. Each of these lets cached frames be reused following an Undo.

Note: From 14.0 on, applying `PF_C`hangeFlag\_`CHANGED_VALUE` to layer or path params won't kick off a rerender. As an alternative, you can set the value through `AEGP_S`treamSuite-

`AEGP_S`etStreamValue().

`FORCE_RERENDER` remains necessary in cases where sequence_data has to be copied across from the UI thread to the render project/effect clone so the two stay aligned.

Whether or not the render request draws on the cache, `FORCE_RERENDER` is what triggers this. Deprecating `FORCE_RERENDER` becomes possible once the complete set of APIs for managing render state is in place.

`FORCE_RERENDER` no longer functions in every case it once did, since it has to bring the UI's copy of sequence_data into sync with the render thread's copy.

`FORCE_RERENDER` does its job when set during `PF_C`md*`USER_CHANGED_PARAM`. It functions in CLICK and DRAG events as well, but solely when `PF_C`md*`GET_FLATTENED_SEQUENCE_DATA` has been implemented. That implementation is needed to keep flattening — and the loss of UI state — from happening partway through mouse operations. Lacking `GET_FLATTENED`, the revised `FORCE_RERENDER` behavior stays switched off.

- GUIDs for Cached Frames

`PF_O`utFlag2\_`I_MIX_GUID_DEPENDENCIES`

GuidMixInPtr()

SmartFX is the only consumer of this. Reach for it whenever custom UI or `PF_C`md*`DO_DIALOG` alters sequence data, or whenever the render outcome hinges on something else that wasn't accounted for and a rerender might be called for. While `PF_C`md*`SMART_PRERENDER` runs, the effect may invoke GuidMixInPtr() to fold any extra render-affecting state into our internal GUID for the cached frame. That GUID lets AE judge whether the frame is already on hand or still has to be rendered. The SmartyPants sample project holds an example.

Compared with the older approaches `PF_O`utFlag*`FORCE_RERENDER` and `PF_C`md*`DO_DIALOG` — which would evict the frame from the cache because the host had no idea what else the plug-in was folding into the render — this is a step up. It can also stand in for `PF_O`utFlag2\_`OUTPUT_IS_WATERMARKED`.

- Request Frames Asynchronously Without Blocking the UI

`PF_O`utFlag2\_`CUSTOM_UI_ASYNC_MANAGER`

`PF_G`etContextAsyncManager() `AEGP_C`heckoutOrRender_ItemFrame_AsyncManager() `AEGP_C`heckoutOrRender_LayerFrame_AsyncManager()

In situations where renders like these used to fire as a side-effect or get cancelled implicitly

(custom UI histogram drawing being one), and where the plug-in itself has a murky view of lifetime, turn to the fresh "Async Manager," which can juggle several concurrent async requests for effect Custom UI and will play nicely with other AE UI behavior on its own.

Note: For passive drawing scenarios, fetching frames asynchronously is the preferred path — but not when a user's action is going to change the project state. When you are (1) reacting to a particular user click AND 2) you must update the project because of it, the synchronous `AEGP_R`enderAndCheckoutLayerFrame() is the recommended choice.

The SDK's new HistoGrid sample illustrates fully asynchronous custom UI DRAW event handling on the UI thread for cases where one or more frame renders are required — for instance, computing histograms displayed in the effect pane. Do note one known bug: drag-changing an upstream param may leave the histogram draw stale until the mouse passes over it.

- Get Rendered Output of an Effect from its UI

Keyers, or effects that plot histograms of already-processed video, can grab the `AEGP_L`ayerRenderOptionsH they require by way of the new `AEGP_N`ewFromDownstreamOfEffect() in `AEGP_L`ayerRenderOptionsSuite. Calls to this function are permitted from the UI thread only.

- AEGP Usage on Render Thread

We've made validation stricter around AEGP calls that could be used unsafely (from the wrong thread, say, or to mutate project state during render). Code that runs into such cases may now surface new errors. To illustrate, every one of the calls listed here will fail with an error once issued on the render thread:

suites.UtilitySuite5()->`AEGP_S`tartUndoGroup() suites.StreamSuite2()->`AEGP_G`etStreamName() suites.StreamSuite2()->`AEGP_S`etExpressionState() suites.StreamSuite2()->`AEGP_S`etExpression() suites.StreamSuite2()->`AEGP_G`etNewLayerStream() suites.StreamSuite2()->`AEGP_D`isposeStream() suites.EffectSuite3()->`AEGP_D`isposeEffect() suites.UtilitySuite5()->`AEGP_E`ndUndoGroup()

The fix is to relocate those calls onto the UI thread. Selectors meant for passive UI updates — `PF_EVENT_DRAW` among them — are not the place to mutate project state.

`AEGP_R`egisterWithAEGP() offers another illustration of the tighter rules. The docs have always stated that this function has to be called during `PF_C`md\_`GLOBAL_SETUP`. Even so, earlier versions let plug-ins call it at other moments with no ill effect. That ends in 13.5! Invoking this function at any other time can trigger crashes!

- `PF_C`md\_`SEQUENCE_RESETUP` Called on UI or Render Thread?

A `PF_I`nFlag*`PROJECT_IS_RENDER_ONLY` flag now exists, valid solely within `PF_C`md*`SEQUENCE_RESETUP`, and it reports whether the effect instance exists purely for rendering. When that's the case, treat the project as strictly read-only, and you won't be handed UI-related selectors for that effect instance. You can lean on this to skip any UI-only setup that render has no use for. When the flag is false, set up the UI as you normally would. Don't repurpose this to dodge error reporting in render; render errors should still be reported the usual way through the existing SDK mechanisms.

- Changes to Avoid Deadlocks

It came to light during development that certain call patterns could deadlock. Safeguards have been put in to head this off. These instances arise within `PF_C`md\_`UPDATE_PARAMS_UI` when specific calls are used, owing to deprecated synchronous behavior those calls exhibit in the UI:

Within `PF_C`md*`UPDATE_PARAMS_UI` alone, `PF_PARAM_CHECKOUT`() applied to layer parameters carries on as it did before, except it hands back a black frame of matching size and so on rather than genuinely rendered pixels. Any code that relied on this to detect whether parameters are enabled or disabled should keep working as before. Code that used it to fetch analysis frames and the like outside of `PF_C`md*`UPDATE_PARAMS_UI` will likewise behave as before.

Within `PF_C`md\_`UPDATE_PARAMS_UI` alone, `PF_G`etCurrentState() will now hand back a random GUID. In this context it no longer behaves as it once did, though everywhere else it carries on working correctly.

The cases above ought to be uncommon, but get in touch with us about workarounds if this does affect you.

- Deprecated

`AEGP_R`enderAndCheckoutFrame() (when on the UI Thread). As a rule this call shouldn't be made on the UI thread, since synchronous renders stall interactivity.

There's no problem using it on the render thread. The lone scenario where it might still earn its keep on the UI thread is something like a UI button needing a frame to compute a parameter that then updates the AE project.

Take, for instance, an "Auto Color" button that grabs a frame and then tweaks effect params based on it.

We've built a beta of a progress dialog for this blocking operation should it run slowly, but using this call on the UI thread ought to be confined to such special cases. That dialog's design isn't finalized.

- Flag for Thread-Safe Effects

`PF_O`utFlag2\_`AE13_5_THREADSAFE`

Plug-ins that have been updated for threading should set this flag to signal to AE that the plug-in is meant to be safe across the UI thread <> Render thread boundary.

What this flag conveys to AE is that separate threads operating on separate AE project copies may sit inside the effect simultaneously, just never touching the same instance. Multiple render threads aren't in play yet, but this will prove handy in releases to come.

- Effects Past Version 7 Now Supported (the MAJOR version ceiling rises to 127)

Effects past version 7 will report correctly under 13.5 provided they're built against the current SDK headers. You can run these recompiled effects in AE builds older than 13.5, but the version number internally wraps modulo 8 (for example, AE will internally read effect version 8 as version 0).

This can influence the version that older AE shows in error dialog displays and can influence usage reporting.

Because the move to 64-bit rendered many older plug-ins unloadable in AE, it's improbable that this wrapping would clash ambiguously with plug-ins actually in use today (barring plug-ins that have shot up in version number across the past few years).

That said, building against an older SDK while using a version of 8 or higher makes the plug-in report a wrong version to AE, which then clashes with the PiPL version check for the effect — the one carrying the higher bits set. That scenario isn't supported.

When you build against an older SDK, keep the effect version pinned at 7 or lower. Lifting the version ceiling was done by tacking 4 new, more-significant bits onto the version that only AE 13.5 and up "sees." These added high bits don't sit contiguously with the original, preexisting MAJOR version bits — simply disregard the bits in between. In hexadecimal or binary, the new version layout reads as follows.

0x 3C38 0000

^^ original MAJOR version bits as a hex mask 0-7

^^ new HIGH bits extending the original MAJOR version bits 8-127

0b 0011 1100 0011 1000 0000 0000 0000 0000

^^ ^ original MAJOR version bits as a hex mask 0-7

^^ ^^ ignore / do not use

^^ ^^ new HIGH bits extend the original MAJOR version bits 8-127.

In AE builds older than 13.5, these bits go ignored.

- New Installer Hints for macOS

On macOS X, a new plist file gives developers the default-location paths for plug-ins, scripts, and presets (matching what the Windows registry holds): /Library/Preferences/ com.Adobe.After Effects.paths.plist

Those plist values let you point your installers or scripts at where files get written, the same way you'd rely on the paths keys in the Windows registry: `HKEY_LOCAL_MACHINESOFTWAREA`dobeAfter Effects13.5

- Work In Progress

`AEGP_R`enderAndCheckoutLayerFrame_Async() `AEGP_C`ancelAsyncRequest()

These APIs are still being developed and shouldn't be put to use just yet.

## What's New in CC 2014.1 (13.1)?

### What's New — What's New in CC 2014.1 (13.1)?

`PF_C`reateNewAppProgressDialog()

The dialog stays closed unless a sluggish render is detected. (a 2-second timeout).

## What's New in CC 2014 (13.0)?

### What's New — What's New in CC 2014 (13.0)?

From CC 2014 onward, After Effects will respect a change to custom UI height that was made via `PF_U`pdateParamUI.

AEGP Effect Suite has reached version 4 and brings new functions for handling effect masks. `AEGP_R`enderSuite now sits at version 4 with a new function, `AEGP_R`enderAndCheckoutLayerFrame, that permits checking out a frame of the current

layer with effects applied outside of render time. That's handy for any operation needing the frame — say, when a button gets clicked and a brief wait during rendering is tolerable.

Note

Because it isn't asynchronous, it won't address the broader case where custom UI has to draw from the frame.

You spell out the layer render options through the new `AEGP_L`ayerRenderOptionsSuite.

Support for Mercury Transmit plug-ins and HTML5 Panels is now in place.

## What's New in CC (12.0)?

### What's New — What's New in CC (12.0)?

Effect names are now allowed up to 47 characters, raised from the prior limit of 31.

We introduced the `PF_A`ngleParamSuite, which offers a route to read floating point values from angle parameters. Version 5 of PF App Suite brings `PF_A`ppGetLanguage for querying the active language — letting a plug-in pick the right language string — plus several fresh `PF_A`pp_ColorType enum values covering new elements whose colors can be queried.

AEGP Persistent Data Suite has climbed to version 4, where `AEGP_G`etApplicationBlob gains an added parameter for choosing among several distinct application blobs. New functions also arrive for getting and setting time and ARGB values.

AEGP Composition Suite is now version 10, adding new functions that check or change whether layer names or source names appear, and whether the blend modes column shows. There are also new functions for reading and writing the Motion Blur Adaptive Sample Limit.

AEGP Layer Suite has moved to version 8 and adds new functions for setting and getting a layer's sampling quality. `AEGP_C`anvasSuite is now at version 8 as well. Its new `AEGP_M`apCompToLayerTime function deals with time remapping across collapsed or nested comps, which `AEGP_C`onvertCompToLayerTime does not.

`AEGP_U`tilitySuite has reached version 6 with a new Unicode-aware function, `AEGP_R`eportInfoUnicode. A further new function, `AEGP_G`etPluginPaths, surfaces some handy paths tied to the plug-in and to the After Effects executable itself.

`AEGP_N`ewPlaceholderFootageWithPath had its behavior revised so that file_type should now be set properly; otherwise a warning shows up.

`AEGP_I`nsertMenuCommand is now able to drop menu items into the File>New submenu.

`AEGP_IOI`nSuite has advanced to version 5, adding new functions to get, set, and clear the native start time, and to get and set footage's drop-frame setting.

## What's New in CS6.0.1 (11.0.1)?

### What's New — What's New in CS6.0.1 (11.0.1)?

As of 11.0.1, the AE effect API version was bumped to 13.3.

That lets effects tell 11.0 and 11.0.1 apart.

A bug exists in 11.0 involving the Global Performance Cache whenever a SmartFX effect sets both `PF_O`utFlag2*`AUTOMATIC_WIDE_TIME_INPUT` & `PF_O`utFlag*`NON_PARAM_VARY`.

Invoking checkout*layer during `PF_C`md*`SMART_PRE_RENDER` returns empty rects in `PF_C`heckoutResult.

Getting around it is as easy as repeating the call. Under 11.0.1 the workaround is no longer required.
