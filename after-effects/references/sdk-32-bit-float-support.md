# 32 Bit Float Support, Pf Checkout Param And Pixel Formats, Plug Ins Reloaded, Effects Presets ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: 32-Bit Float Support; `PF_CHECKOUT_PARAM` and Pixel Formats; Plug-Ins... Reloaded; Effects Presets; Custom ECW UI Over A Standard Data Type; Premiere Elements; Unsupported Features; But... Why'd You LOAD It If You Can't RUN It?!; Other Hosts; Reality Sandwich.

## 32-Bit Float Support

### Bigger Differences — 32-Bit Float Support

Premiere Pro does not support After Effects 16-bit rendering or SmartFX. To render at 32-bit in Premiere Pro, declare support for one of the 32-bit pixel formats described in the previous section, then implement 32-bit rendering for `PF_C`md_RENDER. This approach can support multiple render depths. The SDK Noise sample project demonstrates the pattern.

Depending on the clip or clips receiving the effect, 32-bit processing is not always required to preserve source-input quality. Settings are available, however, to force 32-bit rendering when effects need finer processing granularity and more headroom. For timeline previewing, go to Settings>Sequence Settings> Video Previews>Maximum Bit Depth. For file export, use Export Settings>Video>Basic Settings>Render at Maximum Depth.

## `PF_CHECKOUT_PARAM` and Pixel Formats

### Bigger Differences — `PF_CHECKOUT_PARAM` and Pixel Formats

Before CS6, `PF_CHECKOUT_PARAM`() always returned 8-bit ARGB buffers, regardless of the pixel format being used for rendering. Beginning in CS6, an effect can opt in to receive checked-out frames in the render request's format, such as 32-bit float, YUV, and so on.

Plug-ins may ask for this behavior, while existing plug-ins continue to receive 8-bit ARGB frames. Use EffectWantsCheckedOutFramesToMatch RenderPixelFormat() from the PF Utility Suite defined in PrSDKAESupport.h. Make the call during `PF_C`md\_`GLOBAL_SETUP`, the same selector where an effect would advertise support beyond 8-bit RGB with AddSupportedPixelFormat().

## Plug-Ins... Reloaded

On its first launch, Premiere Pro loads every plug-in, reads the PiPL, and sends `PF_C`md\_`GLOBAL_SETUP` to determine plug-in capabilities. To speed later application launches, it stores some of those capabilities in the plug-in cache, which is the registry on Windows and a Property List file on macOS. On the next launch, cached information is used wherever possible instead of loading the plug-ins.

While debugging, holding Shift during Premiere Pro launch forces all plug-ins to reload.

If your effect must reload every time, caching can be disabled. From the Premiere Pro SDK headers, use the PF Cache On Load Suite in `AE_C`acheOnLoadSuite.h, then call `PF_S`etNoCacheOnLoad() during `PF_C`md\_`GLOBAL_SETUP`. For that function's second parameter, pass a non-zero value when the effect should appear in the UI. Pass zero when loading failed but Premiere Pro should try loading it again on the next relaunch.

## Effects Presets

Premiere Pro handles presets differently than After Effects.

From the Premiere Pro SDK Guide:

Effect presets are shown in the Presets bin in the Effects panel and apply like Effects with chosen parameter settings and keyframes. Create effect presets this way:

1. Apply a filter to a clip
2. Set the filter parameters, adding keyframes if desired
3. Right-click the filter name in the Effect Controls panel, then select "Save Preset..."
4. If desired, use right-click in the Effects panel and choose "New Presets Bin" to create preset bins
5. Arrange the presets inside the preset folders
6. Select the bins and/or presets you want to export, right-click, and choose "Export Preset"

Install presets in the Plug-ins directory. Once placed there, they are read-only, and users cannot move them to another folder or rename them. User-created presets remain modifiable.

On Windows Vista, these live in the user's hidden AppData folder, for example C:/Users/[user name]/AppData/Roaming/AdobePremiere Pro/[version]/Effect Presets and Custom Items.prfpset.

On macOS, they are in the user folder, at ~/Library/Application Support/Adobe/Premiere Pro/[version]/Effect Presets and Custom Items.prfpset.

## Custom ECW UI Over A Standard Data Type

Although this is logged as bug #1235407, the workaround is simple: create two separate parameters, then use parameter supervision so the custom UI controls the slider param.

## Premiere Elements

Premiere Elements, unlike Premiere Pro, shows visual icons for each effect. Provide icons for your effects; otherwise an empty black icon appears, and Premiere Elements 8 can behave even worse.

Use 60x45 PNG files for the icons, placed here:

/[Program Files]/Adobe/Adobe Premiere Elements [version]/Plug-in/Common/Effect/Previews/

The filename should use the effect's match name from the PiPL Resources, prefixed with "AE." If the match name was "MatchName", the filename should be "AE.MatchName.png"

## Unsupported Features

Premiere Pro is currently known not to support these After Effects API features:

(If you want a feature marked with a "-" bullet, email Premiere Pro API Engineering with the feature request. Numbers beginning with 'F' are feature request numbers; the remaining numbers are bug numbers)

- F7233 - extent_hint support
- F7835 - Multiple PiPLs in a single plug-in
- F7836 - AEGP support
- F7517 - Audio support - if a plug-in sets `PF_O`utFlag*`I_USE_AUDIO` in `PF_C`md*`GLOBAL_SETUP`, it will not be loaded at all
- F9355 - Support `PF_P`aramFlag\_`COLLAPSE_TWIRLY`
- PF World Transform Suite
- PF AE Channel Suite
- AE's implementation of high bit color depth support
- SmartFX
- 3D support
- `PF_SUBPIXEL_SAMPLE`(), `PF_GET_PIXEL_DATA16`()

## But... Why'd You LOAD It If You Can't RUN It?!

### Unsupported Features — But... Why'd You LOAD It If You Can't RUN It?!

Premiere Pro tries to load AEGP plug-ins. To detect this and avoid problematic behavior, the command hook function can access a suite supplied only by After Effects; `AEGP_C`anvasSuite is a good candidate.

If that suite is missing, return an error. Premiere Pro will put the plug-in on its "don't load these" list.

## Other Hosts

For third-party hosts, Adobe policy remains:

Quote

Adobe neither supports nor recommends building Adobe-compatible third-party hosts. A partially functional host may be possible through reverse engineering from the plug-in API specification, but we do not recommend that work and will not support you in doing it.

## Reality Sandwich

### Other Hosts — Reality Sandwich

We understand that developers can grow their market by making plug-ins work in as many hosts as possible.

SmartFX API introduced a substantial gap between the After Effects API and the implementations available elsewhere in the plug-in hosting ecosystem.

We will help other hosts support newer features where we can. If third party hosts create problems, refer those hosts to us when they need assistance.

## See also

- [Application](script-application.md)
