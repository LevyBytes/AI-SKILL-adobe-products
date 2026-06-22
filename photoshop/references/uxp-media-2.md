# Cpp Pluginsdk, Displayunits, Eventcodes

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Bridging your C++ Plugin with UXP; raw_githubusercontent_com_AdobeDocs_uxp_photoshop_main_src_pages_ps_reference_media_displayunits_md — Display Units; raw_githubusercontent_com_AdobeDocs_uxp_photoshop_main_src_pages_ps_reference_media_eventcodes_md — Event Codes.

## Bridging your C++ Plugin with UXP

When developers want to combine the C++ based plugin SDK with a UXP based plugin, the C++ SDK now provides a way to communicate with the UXP counterpart. On the C++ side, the plugin is identified through the component's plugin name property in the plugin resource; on the UXP side, the identifier comes from the `id` field in `manifest.json`.

### Obtain the Photoshop C++ SDK

First, get the Photoshop SDK from [Adobe Developer](https://developer.adobe.com/photoshop/). Detailed instructions are available under the `C++ SDK` heading.

### PIUXPSuite

PIUXPSuite uses PIActionDescriptors to communicate with UXP plugins. When working with this suite, use the ActionDescriptor suite defined in the SDK's `PIAction.h`. Begin by adding `PIUXPSuite.h` from the Photoshop C++ SDK to your project.

`PIUXPSuite.h` provides these signatures:

```cpp
typedef void (*PIUXPMessageNotifier)(PIActionDescriptor descriptor);
typedef struct PsUXPSuite1
{
    SPAPI SPErr (*SendUXPMessage) (SPPluginRef selfRef, const char* uxpPluginId, PIActionDescriptor descriptor);
    SPAPI SPErr (*AddUXPMessageListener) (SPPluginRef selfRef, PIUXPMessageNotifier notifier);
    SPAPI SPErr (*RemoveUXPMessageListener) (SPPluginRef selfRef);

} PsUXPSuite1;
```

### CSDK to UXP messaging

`PsUXPSuite1.SendUXPMessage` sends a message to a UXP plugin by using the plugin ID from `manifest.json` together with an action descriptor that carries the message.

### Includes and globals

Start by including the required files and declaring globals for the key pointers.

```cpp
// Include these
#include "PIActions.h" // For PIActionDescriptor
#include "PIUXPSuite.h" // For messaging

// Your globals
SPBasicSuite * sSPBasic = NULL; // This is passed to your main function
SPPluginRef gPlugInRef = NULL; // This is passed to your main function
PsUXPSuite1* sUxpProcs = NULL; // You acquire this using sSPBasic
PSActionDescriptorProcs* sDescriptorProcs = NULL; // You acquire this using sSPBasic
```

### Based on Plugin Type...

### Automation Plugins: `AutoPluginMain`

For Automation plugins, use the `AutoPluginMain` entry method. The code below pulls out the plugin reference and basic suite.

```cpp
DLLExport SPAPI SPErr AutoPluginMain(const char* caller, const char* selector, void* message) {

    SPMessageData* basicMessage = (SPMessageData*) message;
    sSPBasic = basicMessage->basic;
    gPlugInRef = basicMessage->self;
    ...
```

### Filter plugins: `PluginMain`

Filter plugins enter through `PluginMain`, where the basic suite and plugin reference are available directly.

```cpp
DLLExport MACPASCAL void PluginMain(const int16 selector,
                                    FilterRecordPtr filterRecord,
                                    intptr_t * data,
                                    int16 * result) {
    sSPBasic = filterRecord->sSPBasic;
    gPlugInRef = filterRecord->plugInRef;
    ...
```

### Acquiring the suites

The next step is acquiring the suites used to create ActionDescriptors and send messages to the chosen UXP plugin.

```cpp
// in your main method
    sSPBasic->AcquireSuite(kPSUXPSuite,
                           kPSUXPSuiteVersion1,
                           (const void**)&sUxpProcs);

    sSPBasic->AcquireSuite(kPSActionDescriptorSuite,
                           kPSActionDescriptorSuiteVersion,
                           (const void**)&sDescriptorProcs);

    PIActionDescriptor desc;
    sDescriptorProcs->Make(&desc);
    sDescriptorProcs->PutString(desc, 'helo', "Hello World!");
    sDescriptorProcs->PutFloat(desc, 'fltp', 0.952);

    const char* UXP_MANIFEST_ID = "com.your.pluginId";
    sUxpProcs->SendUXPMessage(gPlugInRef, UXP_MANIFEST_ID, desc);
}
```

### On your UXP plugin

Register a messaging listener with the `messaging` API group. Descriptors sent from a CSDK plugin to this plugin's ID arrive through this callback.

```js
let callback = (o) => {
    console.log("Message from " + o.pluginId + ":" + o.message);
}

require('photoshop').messaging.addSDKMessagingListener(callback);

...
// You can remove your listener using this API
require('photoshop').messaging.removeSDKMessagingListener(callback);
```

### UXP to CSDK messaging

For messages from a UXP plugin to a C plugin, create a listener inside the CPlugin, then call `AddUXPMessageListener` and `RemoveUXPMessageListener` at the appropriate points.

### Listener Callback

This method handles every message sent to the plugin.

```cpp
void UXPMessageHandler(PIActionDescriptor descriptor) {
    // do something
}
```

### Adding listener

Use this code wherever message listening should begin.

```cpp
sUxpProcs->AddUXPMessageListener(gPlugInRef, UXPMessageHandler);
```

### Removing listener

Use this code to stop receiving messages from UXP plugins.

```cpp
sUxpProcs->RemoveUXPMessageListener(gPlugInRef);
```

> _NOTE_: A plugin can register only one notifier.

### Sending the message from UXP

To send messages to the C Plugin, note the Component Id defined in its resouce `PiPL`. This is the second parameter of `PIComponentProperty`.

Use that Id with the messaging group from the photoshop package to send the message.

```js
let messageContent = {
    status: "ok",
    filter: 416
};
window.require('photoshop').messaging.sendSDKPluginMessage(<YourPluginComponentId>, messageContent);
```

## raw_githubusercontent_com_AdobeDocs_uxp_photoshop_main_src_pages_ps_reference_media_displayunits_md — Display Units

Use `core.getDisplayConfiguration` when you need numeric display details for the monitors currently connected.

The measurement unit is platform-dependent. Windows reports pixels, while Mac reports logical display units that OS X calls "points"; do not confuse those with print points.

For more background on points and logical resolution, see [developer.apple.com](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Explained/Explained.html).

### Examples

The shortened examples below come from a 27" 4k display.

Windows with scale set to 2.

```JSON
{
    "globalBounds": {
        "bottom": 2160,
        "left": 0,
        "right": 3840,
        "top": 0
    },
    "physicalResolution": {
        "horizontal": 163,
        "vertical": 163
    },
    "scaleFactor": 2,
}
```

Mac with Display Options > Use as: 1920x1080.

```JSON
{
    "globalBounds": {
        "bottom": 1080,
        "left": 0,
        "right": 1920,
        "top": 0
    },
    "physicalResolution": {
        "horizontal": 163.00000244801444,
        "vertical": 161.00000241797744
    },
    "scaleFactor": 2,
}
```

On Windows, the reported bounds show the full pixel dimensions, and the pixels-per-inch (ppi) value is the expected 163.
On Mac, `globalBounds` reflects the value chosen in OS Display Options.

After changing "Use as" to 3200x1800, the result becomes:

```JSON
{
    "globalBounds": {
        "bottom": 1800,
        "left": 0,
        "right": 3200,
        "top": 0
    },
    "physicalResolution": {
        "horizontal": 271.0000040700117,
        "vertical": 269.0000040399747
    }
}
```

In that output, "horizontal" now reports 271.

Compare the horizontal point count with the "physicalResolution" value:
`3200 / 271 ~= 11.8`.
That lines up with the earlier calculation, `1920 / 163 ~= 11.8`.

## raw_githubusercontent_com_AdobeDocs_uxp_photoshop_main_src_pages_ps_reference_media_eventcodes_md — Event Codes

The two `addNotificationListener` methods listen to different event groups.

- [`action.addNotificationListener`](uxp-photoshopaction.md) handles Photoshop events that change a document.
- [`core.addNotificationListener`](uxp-media-4.md) handles remaining events, including UI-related and operating-system events.

### Action Events

This table lists action events, their four-character ExtendScript ID codes, and the string event value passed to [`action.addNotificationListener`](uxp-photoshopaction.md).

| Action Event Name | Old Char Code | String Code |
| --- | --- | --- |
| 3D Transform | TdT | 3DTransform |
| Average | Avrg | $Avrg |
| Apply Style | ASty | applyStyle |
| Assert | Asrt | assert |
| Accented Edges | AccE | accentedEdges |
| Add | Add | add |
| Add Noise | AdNs | addNoise |
| Add To | AddT | addTo |
| Align | Algn | align |
| All | All | all |
| Angled Strokes | AngS | angledStrokes |
| Apply Image | AppI | applyImageEvent |
| Bas Relief | BsRl | basRelief |
| Batch | Btch | batch |
| Batch From Droplet | BtcF | batchFromDroplet |
| Blur | Blr | blurEvent |
| Blur More | BlrM | blurMethod |
| Border | Brdr | border |
| Brightness | BrgC | brightnessEvent |
| Canvas Size | CnvS | canvasSize |
| Chalk Charcoal | ChlC | chalkCharcoal |
| Channel Mixer | ChnM | channelMixer |
| Charcoal | Chrc | charcoal |
| Chrome | Chrm | chrome |
| Clear | Cler | clearEvent |
| Close | Cls | close |
| Clouds | Clds | clouds |
| Color Balance | ClrB | colorBalance |
| Color Halftone | ClrH | colorHalftone |
| Color Range | ClrR | colorRange |
| Colored Pencil | ClrP | colorPalette |
| Conte Crayon | CntC | centerCropMarks |
| Contract | Cntc | contract |
| Convert Mode | CnvM | convertMode |
| Copy | copy | copyEvent |
| Copy Effects | CpFX | copyEffects |
| Copy Merged | CpyM | copyMerged |
| Copy To Layer | CpTL | copyToLayer |
| Craquelure | Crql | craquelure |
| Create Droplet | CrtD | createDroplet |
| Crop | Crop | crop |
| Crosshatch | Crsh | crosshatch |
| Crystallize | Crst | crystallize |
| Curves | Crvs | curves |
| Custom | Cstm | custom |
| Cut | cut | cut |
| Cut To Layer | CtTL | cutToLayer |
| Dark Strokes | DrkS | darkStrokes |
| De Interlace | Dntr | deInterlace |
| Define Pattern | DfnP | definePattern |
| Defringe | Dfrg | defringe |
| Delete | Dlt | delete |
| Desaturate | Dstt | desaturate |
| Deselect | Dslc | deselect |
| Despeckle | Dspc | despeckle |
| Difference Clouds | DrfC | $DrfC |
| Diffuse | Dfs | diffuse |
| Diffuse Glow | DfsG | diffuseGlow |
| Disable Layer FX | dlfx | disableLayerFX |
| Displace | Dspl | displace |
| Distribute | Dstr | distort |
| Draw | Draw | draw |
| Dry Brush | DryB | dryBrush |
| Duplicate | Dplc | duplicate |
| Dust And Scratches | DstS | dustAndScratches |
| Emboss | Embs | emboss |
| Equalize | Eqlz | equalize |
| Exchange | Exch | exchange |
| Expand | Expn | expand |
| Export | Expr | export |
| Jumpto | Jpto | $Jpto |
| Extrude | Extr | extrude |
| Facet | Fct | facet |
| Fade | Fade | fade |
| Feather | Fthr | feather |
| Fibers | Fbrs | $Fbrs |
| Film Grain | FlmG | filmGrain |
| Filter | Fltr | filter |
| Find Edges | FndE | findEdges |
| Flatten Image | FltI | flattenImage |
| Flip | Flip | flip |
| Fragment | Frgm | fragment |
| Fresco | Frsc | fresco |
| Gaussian Blur | GsnB | gaussianBlur |
| Get | getd | get |
| Glass | Gls | glass |
| Glowing Edges | GlwE | glowingEdges |
| Gradient | Grdn | gradientClassEvent |
| Gradient Map | GrMp | gradientMapEvent |
| Grain | Grn | grain |
| Graphic Pen | GraP | graphicPen |
| Group | GrpL | groupEvent |
| Grow | Grow | grow |
| Halftone Screen | HlfS | halftoneScreen |
| High Pass | HghP | highPass |
| HSBHSL | HsbP | $HsbP |
| Hue Saturation | HStr | hueSaturation |
| Image Size | ImgS | imageSize |
| Import | Impr | import |
| Ink Outlines | InkO | inkOutlines |
| Intersect | Intr | interfaceIconFrameDimmed |
| Intersect With | IntW | interfaceWhite |
| Inverse | Invs | inverse |
| Invert | Invr | invert |
| Lens Flare | LnsF | lensFlare |
| Levels | Lvls | levels |
| Lighting Effects | LghE | lightingEffects |
| Link | Lnk | link |
| Make | Mk | make |
| Maximum | Mxm | maximum |
| Median | Mdn | median |
| Merge Layers | Mrg2 | mergeLayersNew |
| Merge Layers Old | MrgL | mergeLayers |
| Merge Spot Channel | MSpt | mergeSpotChannel |
| Merge Visible | MrgV | mergeVisible |
| Mezzotint | Mztn | mezzotint |
| Minimum | Mnm | minimum |
| Mosaic | Msc | mosaic |
| Mosaic_PLUGIN | MscT | mosaicPlugin |
| Motion Blur | MtnB | motionBlur |
| Move | move | move |
| NTSCColors | NTSC | NTSC |
| Neon Glow | NGlw | neonGlow |
| Next | Nxt | next |
| Note Paper | NtPr | notePaper |
| Notify | Ntfy | notify |
| Ocean Ripple | OcnR | oceanRipple |
| Offset | Ofst | offset |
| Open | Opn | open |
| Paint | Pnt | paint |
| Paint Daubs | PntD | paintDaubs |
| Palette Knife | PltK | paletteKnife |
| Paste | past | paste |
| Paste Effects | PaFX | pasteEffects |
| Paste Into | PstI | pasteInto |
| Paste Outside | PstO | pasteOutside |
| Patchwork | Ptch | patchwork |
| Photocopy | Phtc | photocopy |
| Pinch | Pnch | pinch |
| Place | Plc | placeEvent |
| Plaster | Plst | plaster |
| Plastic Wrap | PlsW | plasticWrap |
| Play | Ply | play |
| Pointillize | Pntl | pointillize |
| Polar | Plr | polar |
| Poster Edges | PstE | posterEdges |
| Posterize | Pstr | posterization |
| Previous | Prvs | previous |
| Print | Prnt | print |
| Profile To Profile | PrfT | profileToProfile |
| Purge | Prge | purge |
| Quit | quit | quit |
| Radial Blur | RdlB | radialBlur |
| Rasterize | Rstr | rasterize |
| Rasterize Type Sheet | RstT | rasterizeTypeLayer |
| Remove Black Matte | RmvB | removeBlackMatte |
| Remove Layer Mask | RmvL | removeLayerMask |
| Remove White Matte | RmvW | removeWhiteMatte |
| Rename | Rnm | rename |
| Replace Color | RplC | replaceColor |
| Reset | Rset | reset |
| Reticulation | Rtcl | reticulation |
| Revert | Rvrt | revert |
| Ripple | Rple | ripple |
| Rotate | Rtte | rotateEventEnum |
| Rough Pastels | RghP | roughPastels |
| Save | save | save |
| Select | slct | select |
| Selective Color | SlcC | selectiveColor |
| Set | setd | set |
| Sharpen Edges | ShrE | sharpenEdges |
| Sharpen | Shrp | sharpen |
| Sharpen More | ShrM | sharpenMore |
| Shear | Shr | shear |
| Show | Shw | show |
| Similar | Smlr | similar |
| Smart Blur | SmrB | smartBlur |
| Smooth | Smth | smoothness |
| Smudge Stick | SmdS | smudgeStick |
| Solarize | Slrz | solarize |
| Spatter | Spt | spatter |
| Spherize | Sphr | spherize |
| Split Channels | SplC | splitChannels |
| Sponge | Spng | sponge |
| Sprayed Strokes | SprS | separationSetup |
| Stained Glass | StnG | stainedGlass |
| Stamp | Stmp | stamp |
| Stop | Stop | stop |
| Stroke | Strk | stroke |
| Subtract | Sbtr | subtract |
| Subtract From | SbtF | subtractFrom |
| Sumie | Smie | sumie |
| Take Merged Snapshot | TkMr | takeMergedSnapshot |
| Take Snapshot | TkSn | takeSnapshot |
| Texture Fill | TxtF | textureFile |
| Texturizer | Txtz | texturizer |
| Threshold | Thrs | thresholdClassEvent |
| Tiles | Tls | tiles |
| Torn Edges | TrnE | tornEdges |
| Trace Contour | TrcC | traceContour |
| Transform | Trnf | transform |
| Trap | Trap | trap |
| Twirl | Twrl | twirl |
| Underpainting | Undr | underpainting |
| Undo | undo | undoEvent |
| Ungroup | Ungr | ungroup |
| Unlink | Unlk | unlink |
| Unsharp Mask | UnsM | unsharpMask |
| Variations | Vrtn | variations |
| Wait | Wait | wait |
| Water Paper | WtrP | waterPaper |
| Watercolor | Wtrc | watercolor |
| Wave | Wave | wave |
| Wind | Wnd | wind |
| Zig Zag | ZgZg | zigZag |
| Back Light | BacL | $BacL |
| Fill Flash | FilE | $FilE |
| Color Cast | ColE | $ColE |

### Core Events

See [`core.addNotificationListener`](uxp-media-4.md).

| Event Name | Group | String Code |
| --- | --- | --- |
| Activation Changed | OS | activationChanged |
| Display Configuration Changed | OS | displayConfigurationChanged |
| Idle | UI | userIdle |
| Minimize App Window | UI | minimizeAppWindow |
| Panel Visibility Changed | UI | panelVisibilityChanged |
| Workspace Activation Changed | UI | activationChanged |
| Workspace Drag Completed | UI | workspaceDragCompleted |
| Workspace Drag Started | UI | workspaceDragStarted |
| Workspace Layout Completed | UI | workspaceLayoutCompleted |
| Workspace Interactive Resize Begin | UI | interactiveResizeBegin |
| Workspace Interactive Resize End | UI | interactiveResizeEnd |
