# Changelog (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Photoshop API Changelog — Photoshop 24.4 (April 2023)

### Imaging API update

[Imaging API](uxp-media-3.md) has left Prerelease. In the Beta build, load it under the module name "imaging".
Access used to go through `require("photoshop").imaging_beta`; the current module is `require("photoshop").imaging`.

### Improvements and Fixes

- Windows performance improved, with the largest benefit on medium and small images.
- Crashes caused by invalid `targetBounds` were fixed.

### UXP v7.0 Integration

> #### New
>
> - UXP Plugins now support Web Components. Additional HTML elements and methods were added for that feature.
>   - Classes
>     - [HTMLSlotElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
>     - [HTMLTemplateElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
>   - Methods
>     - [Element.assignedSlot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#assignedslot--htmlslotelement)
>     - [Element.slot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#slot--string)
>     - [Element.attachShadow](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#attachshadowinit)
>     - [Element.shadowRoot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#shadowroot--shadowroot)
>     - [CustomElementRegistry.upgrade](uxp-html-dom.md)
>     - [CustomElementRegistry.whenDefined](uxp-html-dom.md)
> - Adobe SWC support is provided through [Spectrum Web Components (Beta)](uxp-api-2.md).
> - The JS API set gained these additions
>   - Properties
>     - [HTMLElement.lang](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#lang--string)
>   - Classes added to the global scope
>     - [TreeWalker](uxp-html-dom-2.md)
>     - [NodeFilter](uxp-html-dom-2.md)
>   - Methods
>     - [Element.hasAttributes](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#hasattributes)
>     - [Element.getAttributeNames](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#getattributenames)
>     - [Event.composed](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-events/Event.md#composed--boolean)
>     - [Event.composedPath](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-events/Event.md#composedpath)
>     - [DocumentFragment.append](uxp-html-dom.md)
>     - [DocumentFragment.querySelector](uxp-html-dom.md)
>     - [DocumentFragment.querySelectorAll](uxp-html-dom.md)
> - React 16 support gained these focus events
>   - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
>   - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
> - Basic shape and styling work is covered by HTML [2D Canvas Support](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md).
> - Alerts
>   - [alert()](uxp-html-dom.md)
>   - [prompt()](uxp-html-dom-2.md)
>   - [confirm()](uxp-html-dom.md)
> - In [ReadableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md), [pipeThrough](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#pipeThroughtransform-options) and [tee](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#tee) are supported. More information is in [Streams](uxp-global-members-2.md)
> - [ImageBlob](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/image-blob/index.md) displays uncompressed image buffer data inside UXP
>
> #### Changed
>
> - [HTMLVideoElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md): `preload` now defaults to 'metadata'
> - [FS API](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/fs/index.md): `file://` is no longer required

## Photoshop API Changelog — Photoshop 24.2 (February 2023)

### Imaging API Beta

[Imaging API](uxp-media-3.md) introduces direct pixel access for documents. Developers who need to get or set pixels should use the [dedicated page](uxp-media-3.md). Treat the Beta marker seriously: this capability is still early, and feedback is requested to shape it as it matures.

### Text support

UXP DOM now includes a broader set of text APIs for developers, with a more consistent surface. Rather than matching ExtendScript one-for-one, UXP DOM uses a more modern and direct design while still carrying forward the older capabilities and adding coverage for features that were not available before.

- [Document.createTextLayer](uxp-document.md) was added so developers can create a text layer inside a document. It takes a [TextLayerCreateOptions](uxp-objects.md) object for initial text, styling, and related settings.
- For Text Layer text operations, `textItem` is the main entry point. It exposes these properties and methods directly:
  - contents
  - isParagraphText
  - isPointText
  - orientation
  - textClickPoint
  - convertToParagraphText()
  - convertToPointText()
  - convertToShape()
  - createWorkPath()
- Character palette capabilities in Photoshop are collected under `textItem.characterStyle`:
  - alternateLigatures
  - antiAliasMethod
  - autoKerning
  - baseline
  - baselineShift
  - capitalization
  - characterAlignment
  - color
  - fauxBold
  - fauxItalic
  - font
  - fractionalWidths
  - fractions
  - horizontalScale
  - kashidas
  - horizontalDiacriticPosition
  - verticalDiacriticPosition
  - language
  - leading
  - ligatures
  - middleEasternDigitsType
  - middleEasternTextDirection
  - noBreak
  - ordinals
  - size
  - strikeThrough
  - stylisticAlternates
  - swash
  - titlingAlternates
  - tracking
  - useAutoLeading
  - verticalScale
  - reset()
- Paragraph palette capabilities in Photoshop are collected under `textItem.paragraphStyle`:
  - firstLineIndent
  - hyphenation
  - hyphenationFeatures
  - justification
  - justificationFeatures
  - layoutMode
  - kashidaWidth
  - kinsoku
  - mojikumi
  - leftIndent
  - rightIndent
  - spaceAfter
  - spaceBefore
  - reset()
- Warp text dialog capabilities in Photoshop are collected under `textItem.warpStyle`:
  - style
  - direction
  - bend
  - horizontalDistortion
  - verticalDistortion
  - reset()

### Other fixes

- `solidColor.cmyk` no longer reports `undefined` for the `yellow` color, and the setter now works.
- `SolidColor` now validates ranges across every color mode and component, preventing invalid values and fixing invalid hex code input.
- A setter was added for `app.backgroundColor`, allowing it to be changed.
- `app.backgroundColor` and `app.foregroundColor` no longer fail when the selected color is not RGB.\*
- RGB32 is currently unsupported. When RGB 32 bit per channel data is obtained, Photoshop converts it automatically to the closest supported RGB 16 bit per channel form.

### UXP v6.5 Integration

> #### New
>
> - [UXP Hybrid plugins](uxp-guides-4.md)
> - Scripts may require unrestricted relative paths
> - [getEntryWithUrl](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md#getentrywithurlurl) in LocalFileProvider

## Photoshop API Changelog — Photoshop 24.1 (December 2022)

### app.getColorProfiles

The Imaging API needs color profiles, so `app` now includes a method that returns profile names. At present, the available profile set covers RGB and Gray only.

### CountItems support

Photoshop now exposes the CountItems DOM API.

- [CountItems collection](uxp-classes.md) follows the same Document-level collection pattern used elsewhere in the API. CountItems also provides:
  - `typename`, `length`, `parent`.
  - `add()`, `removeAll()`, `getAll()`, `createGroup()`, `renameActiveGroup()`, `removeGroupByIndex()`, `toggleActiveGroupVisibility()`, `activateGroupByIndex()`, `setActiveMarkerSize()`, `setActiveLabelSize()`, `setActiveColor()`.

### Other fixes

### Layer blend modes now throw errors in more cases

- A value is passed that does not belong to [Constants.blendMode](uxp-constants.md).
- A blend mode is passed that the document's color mode or bit depth cannot use. Earlier, this would fail without an error.
- The Background layer is targeted for a blend mode change. Previously, that operation promoted Background into a normal layer and created a new layer ID. That automatic promotion is not a desirable side effect here, and the UI does not offer this action.

- [CountItem class](uxp-classes.md) implements:
  - `typename`, `parent`, `itemIndex`, `groupIndex`, `position`
  - `move()`, `remove()`
  -

### UXP v6.4 Integration

> #### New
>
> - [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) for panels
> - [Path Module APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/Path/index.md) support
> - Scripts can use fsapi with unrestricted localFileSystem access
>
> #### Bugs Fixes
>
> - PluginManifest parsing / Load Plugin errors not logged in UDT
> - Error shown in UDT APP logs on Plugin UnLoad
> - UXP script : file session tokens are not getting created
> - Error message and stack are empty in case of reject("error string") executed in script
> - [Win only]-Volume is being muted automatically for 3rd video in the tutorial while opening the video in Theatre mode
> - After closing the theatre mode, videos are overlapping while scrolling up and down in DP
> - Provide an API to programmatically close dialog in pop-out/theatre mode.
> - Plugin Data folder shouldn't be created for scripts
> - Crash on exit
> - script.setResult("kSuccess") not working
> - Resource Leaks in Window Dialog on UWP
> - Privilege plugin fail to add in XD in certain cases
> - Fixed mouse/keyboard events within Webview in XD v55 and Win 10.

## Photoshop API Changelog — Photoshop 24.0 (October 2022)

### Preferences

An API was added for changing selected Photoshop [preferences](uxp-classes-4.md). The first group contains 38 preferences, with more planned later.

### ColorSamplers support

Photoshop now exposes the ColorSampler DOM API.

- [ColorSamplers collection](uxp-classes.md) follows the same Document-level collection pattern used elsewhere in the API. ColorSamplers also includes these methods:
  - `colorSamplers.add()`
  - `colorSamplers.removeAll()`
- [ColorSamplers class](uxp-classes.md) implements:
  - `typename`: String
  - `parent`: [Document](uxp-document.md)
  - `position`: `{x: number, y: number}`
  - `color`: [SolidColor](uxp-classes-5.md)
  - `move({x: number, y: number})`
  - `remove()`
- [Document](uxp-document.md) now implements `sampleColor()`, which samples an `{x, y}` position immediately and returns a [SolidColor](uxp-classes-5.md) object without making a [ColorSampler](uxp-classes.md) first.

### Layer Comps support

- [Document.layerComps](uxp-document.md) was added, giving layer comp workflows APIs similar to ExtendScript.
- [LayerComps collection](uxp-classes-3.md)
  - Methods added for Layer Comp: `add()`, `removeAll()`, `getByName()`
  - Use [`LayerComps.add()`](uxp-classes-3.md) to create layer comps in the document. Their constructors are available on the [app](uxp-classes-4.md) object.
- [LayerComp class](uxp-classes-3.md)
  - Properties added for Layer Comp: `name`, `comment`, `selected`, `appearance`, `position`, `visibility`, `childComp`.
  - Methods added for Layer Comp: `apply()`, `recapture()`, `remove()`, `resetLayerComp()`, `duplicate()`

### Guide fixes

- [Guide.coordinate](uxp-classes-2.md) fixes the coordinate getter for document resolutions other than 72 PPI
- [Guide.coordinate](uxp-classes-2.md) fixes the coordinate setter for document resolutions other than 72 PPI
- [Guides.add](uxp-classes-2.md) fixes coordinates when creating a guide at document resolutions other than 72 PPI
- [Guides.add](uxp-classes-2.md) now returns an existing guide instead of an invalid nonexistent instance after guide creation.

### Known Issues and Workarounds

- A new [Known Issues and Workarounds](uxp-ps-reference.md) page was introduced to capture common problems reported by the developer community. New items will be summarized in this changelog.
- A note was added for increased error throwing from `batchPlay`, especially with the `move` command.

### Layer Filter Methods

- [Layer.applySmartBlur(radius: number, threshold: number, blurQuality: Constants.SmartBlurQuality, mode: Constants.SmartBlurMode)](uxp-layer.md) Executes Smart Blur.
- [Layer.applySpherize(amount: number, mode: Constants.SpherizeMode)](uxp-layer.md) Executes Spherize.
- [Layer.applyUnSharpMask(amount: number, radius: number, threshold: number)](uxp-layer.md) Executes Unsharp Mask.
- [Layer.applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: Constants.WaveType, undefinedAreas: Constants.UndefinedAreas, randomSeed: number)](uxp-layer.md) Executes Wave.
- [Layer.applyZigZag(amount: number, ridges: number, style: Constants.ZigZagType)](uxp-layer.md) Executes ZigZag.

### Other

- Added color mode validation across all filters
- Lens Flare coordinates were fixed
- File arguments for filters were fixed

## Photoshop API Changelog — Photoshop 23.5 (August 2022)

### UXP Scripting

Files ending in .psjs execute through UXP.

- [Overview](uxp-scripting.md)
- [Quickstart Guide](uxp-scripting.md)
- [Ps UXP Scripting](uxp-uxpscripting.md)

### Layer Filter methods

- [Layer.applyAddNoise(amount: number, distribution: Constants.NoiseDistribution, monochromatic: boolean)](uxp-layer.md) Executes Add Noise.
- [Layer.applyAverage()](uxp-layer.md) Executes Average.
- [Layer.applyBlur()](uxp-layer.md) Executes Blur.
- [Layer.applyBlurMore()](uxp-layer.md) Executes Blur More.
- [Layer.applyClouds()](uxp-layer.md) Executes Clouds.
- [Layer.applyCustomFilter(characteristics: number[], scale: number, offset: number)](../classes/layer.md#applycustomfilter) Executes Custom.
- [Layer.applyDeInterlace(eliminateFields: Constants.EliminateFields, createFields: Constants.CreateFields)](uxp-layer.md) Executes De-Interlace.
- [Layer.applyDespeckle()](uxp-layer.md) Executes Despeckle.
- [Layer.applyDifferenceClouds()](uxp-layer.md) Executes Difference Clouds.
- [Layer.applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number)](uxp-layer.md) Executes Diffuse Glow.
- [Layer.applyDisplace(horizontalScale: number, verticalScale: number, displacementType: Constants.DisplacementMapType, undefinedAreas: Constants.UndefinedAreas, displacementMapFile: File)](uxp-layer.md) Executes Displace.
- [Layer.applyDustAndScratches(radius: number, threshold: number)](uxp-layer.md) Executes Dust and Scratches.
- [Layer.applyGaussianBlur(radius: number)](uxp-layer.md) Executes Gaussian Blur.
- [Layer.applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert: boolean, texture: Constants.TextureType, textureFile?: File)](uxp-layer.md) Executes Glass.
- [Layer.applyHighPass(radius: number)](uxp-layer.md) Executes High Pass.
- [Layer.applyLensBlur(source: Constants.DepthMapSource, focalDistance: number, invertDepthMask: boolean, shape: Constants.Geometry, radius: number, bladeCurvature: number, rotation: number, brightness: number, threshold: number, amount: number, distribution: Constants.NoiseDistribution, monochromatic: boolean)](uxp-layer.md) Executes Lens Blur.
- [Layer.applyLensFlare(brightness: number, flareCenter: \{x: number, y: number}, lensType: Constants.LensType)](uxp-layer.md) Executes Lens Flare.
- [Layer.applyMaximum(radius: number, preserveShape: Constants.PreserveShape)](uxp-layer.md) Executes Maximum.
- [Layer.applyMinimum(radius: number, preserveShape: Constants.PreserveShape)](uxp-layer.md) Executes Minimum.
- [Layer.applyMedianNoise(radius: number)](uxp-layer.md) Executes Median Noise.
- [Layer.applyMotionBlur(angle: number, distance: number)](uxp-layer.md) Executes Motion Blur.
- [Layer.applyNTSC()](uxp-layer.md) Executes NTSC.
- [Layer.applyOceanRipple(size: number, magnitude: number)](uxp-layer.md) Executes Ocean Ripple.
- [Layer.applyOffset(horizontal: number, vertical: number, undefinedAreas: Constants.OffsetUndefinedAreas)](uxp-layer.md) Executes Offset.
- [Layer.applyTwirl(angle: number)](uxp-layer.md) Executes Twirl.
- [Layer.applyPinch(amount: number)](uxp-layer.md) Executes Pinch.
- [Layer.applyPolarCoordinates(conversion: Constants.PolarConversionType)](uxp-layer.md) Executes Polar Coordinates.
- [Layer.applyRipple(amount: number, size: Constants.RippleSize)](uxp-layer.md) Executes Ripple.
- [Layer.applySharpen()](uxp-layer.md) Executes Sharpen.
- [Layer.applySharpenEdges()](uxp-layer.md) Executes Sharpen Edges.
- [Layer.applySharpenMore()](uxp-layer.md) Executes Sharpen More.
- [Layer.applyShear(curve: \{x: number, y: number}[], undefinedArea: Constants.UndefinedAreas)](../classes/layer.md#applyshear) Executes Shear.

## Photoshop API Changelog — Photoshop 23.4 (July 2022)

### convertUnits method on the Photoshop Application object

- [Application.convertUnits](uxp-classes-4.md) translates UXP API pixel values into other units. For example, use it when converting a document's width from pixels to inches.

## Photoshop API Changelog — Photoshop 23.3 (April 2022)

### Paths support

- Document.pathItems property was added, providing ExtendScript-like APIs for path work.
- `Document.pathItems` exposes the [PathItems](uxp-classes-3.md) collection class, which contains [PathItem](uxp-classes-3.md) objects.
- `PathItem.subPathItems` exposes the [SubPathItems](uxp-classes-6.md) collection class, which contains [SubPathItem](uxp-classes-6.md) objects.
- `SubPathItem.pathPoints` exposes the [PathPoints](uxp-classes-3.md) collection class, which contains [PathPoint](uxp-classes-3.md) objects.
- Use [`PathItems.add`](uxp-classes-3.md) to create document paths by supplying `PathPointInfo` and `SubPathInfo` objects. The constructors are on the [app](uxp-classes-4.md) object.

### Load on Launch support

Plugin manifests can now be configured so the plugin loads when the app launches. Details are in [Photoshop Manifest](uxp-misc.md).

### batchPlay development helper: Copy as Javascript

The Photoshop Actions panel can now help build plugins. Record valid actions, then have Photoshop generate readable, valid batchPlay for a UXP plugin. See "Accepted action descriptors" in the [batchPlay documentation](uxp-media.md).

### Core event: "userIdle"

Photoshop generates this event after detecting that a user has become idle while Photoshop is the foreground application. A plugin sets the idle-second count and can then decide to run process-intensive tasks in batches. See [photoshopCore](uxp-media-4.md).

### Interactive Mode for executeAsModal

When a plugin is inside a Modal Execution scope, `interactiveMode` can be requested in certain situations to allow user interaction instead of showing a UI-blocking progress bar. See [Interactive Mode](uxp-executeasmodal.md).

## Photoshop API Changelog — Photoshop 23.2 (February 2022)

- Core Module: `setExecutionMode()`
- Core Module: `getPluginInfo()`

## Photoshop API Changelog — Photoshop 23.1 (December 2022)

- Core Module: `batchPlaySync()`
- Core Module: `validateReference()`
- Core Module: `isModal()`
- Core Module: `getCPUInfo()`
- Core Module: `getGPUInfo()`

## See also

- [Photoshop Actions](api-photoshop-actions.md)
- [Known Issues](uxp-known-issues.md)
