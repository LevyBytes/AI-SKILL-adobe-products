# Layer (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

A document object that holds image visual content, matching the Photoshop layer concept.

Access a document's layers from the [Document.layers](https://raw.githubusercontent.com/ps-reference/classes/document.md#layers) collection.

For group layers, read children through [Layer.layers](https://raw.githubusercontent.com/ps-reference/classes/layer.md#layers).

```javascript
group.layers.forEach((layer) => {
  layer.visible = true;
});
```

## Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| allLocked | _boolean_ | R W | 22.5 | A true value blocks edits to this layer's pixels and properties. |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#blendmode) | R W | 22.5 | Layer blend mode. **_Fixes in Photoshop 24.2:_** - _Passing a blend mode that does not exist now throws an error_ - _An impossible combination of document color mode, bit depth, and blend mode also throws instead of failing silently_ - _Before this version, setting blend mode on a background layer could convert it to a regular layer as a side effect and change its ID. Now an error is thrown because those side effects are not expected_ |
| bounds | [_Bounds_](https://raw.githubusercontent.com/ps-reference/objects/bounds.md) | R | 22.5 | Layer bounds with effects included. |
| boundsNoEffects | [_Bounds_](https://raw.githubusercontent.com/ps-reference/objects/bounds.md) | R | 22.5 | Layer bounds without effects. |
| document | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 23.0 | Document containing this layer. |
| fillOpacity | _number_ | R W | 23.0 | Layer fill opacity, as a percentage. |
| filterMaskDensity | _number_ | R W | 23.0 | Filter-mask density, as a percentage. |
| filterMaskFeather | _number_ | R W | 23.0 | Filter-mask feather value from 0.0 to 1000.0. |
| id | _number_ | R | 22.5 | Layer ID usable in batchPlay calls. |
| isBackgroundLayer | _boolean_ | R | 22.5 | True for the special Background layer. |
| isClippingMask | _boolean_ | R W | 23.0 | Whether this layer acts as a clipping mask; releasing it also releases layers stacked above it. |
| kind | [_LayerKind_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#layerkind) | R | 22.5 | Layer kind. |
| layerMaskDensity | _number_ | R W | 23.0 | Layer-mask density, as a percentage. |
| layerMaskFeather | _number_ | R W | 23.0 | Layer-mask feather value from 0.0 to 1000.0. |
| layers | [_Layers_](https://raw.githubusercontent.com/ps-reference/classes/layers.md) | R | 23.0 | Child layers contained in the group. |
| linkedLayers | [_Layers_](https://raw.githubusercontent.com/ps-reference/classes/layers.md) | R | 22.5 | Linked layer collection. See [Layer.link](https://raw.githubusercontent.com/ps-reference/classes/layer.md#link) |
| locked | _boolean_ | R | 22.5 | True when at least one layer property is locked. |
| name | _string_ | R W | 22.5 | Layer name. |
| opacity | _number_ | R W | 22.5 | Master layer opacity, in percent. |
| parent | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) | R | 22.5 | Group layer containing this layer. Returns null when the layer sits at the document's top level. |
| pixelsLocked | _boolean_ | R W | 22.5 | When true, pixel edits on this layer are blocked. |
| positionLocked | _boolean_ | R W | 22.5 | When true, the layer cannot be moved. |
| textItem | [_TextItem_](https://raw.githubusercontent.com/ps-reference/classes/textitem.md) | R | 24.2 | Text-related properties and methods for Layers whose `kind` equals `LayerKind.TEXT` |
| transparentPixelsLocked | _boolean_ | R W | 22.5 | When true, transparent pixels cannot be edited |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Layer"_. |
| vectorMaskDensity | _number_ | R W | 23.0 | Vector-mask density, as a percentage. |
| vectorMaskFeather | _number_ | R W | 23.0 | Vector-mask feather value from 0.0 to 1000.0. |
| visible | _boolean_ | R W | 22.5 | True if displayed. |

## Methods

### applyAddNoise

23.5

**async** : _Promise_`<void>`

Executes Add Noise.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Noise percentage to apply [0.1,400]. |
| `distribution` | [_NoiseDistribution_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#noisedistribution) | Distribution method used. |
| `monochromatic` | _boolean_ | When true, adds black-and-white noise. |

### applyAverage

23.5

**async** : _Promise_`<void>`

Executes Average.

Unsupported color modes: Indexed Color, Bitmap

### applyBlur

23.5

**async** : _Promise_`<void>`

Executes Blur.

Unsupported color modes: Indexed Color, Bitmap

### applyBlurMore

23.5

**async** : _Promise_`<void>`

Executes Blur More.

Unsupported color modes: Indexed Color, Bitmap

### applyClouds

23.5

**async** : _Promise_`<void>`

Executes Clouds.

Unsupported color modes: Indexed Color, Bitmap

### applyCustomFilter

23.5

**async** : _Promise_`<void>`

Executes Custom.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `characteristics` | _number_[] | Square matrix (5 x 5) used for the filter calculation. |
| `scale` | _number_ | Divisor applied to the summed pixel values included in the calculation |
| `offset` | _number_ | Value added after the scale calculation completes. |

### applyDeInterlace

23.5

**async** : _Promise_`<void>`

Executes De-Interlace.

Unsupported color modes: Indexed Color, Bitmap, CMYK 8 bits, CMYK 16 bits, Duotone 8 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eliminateFields` | [_EliminateFields_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#eliminatefields) | Choose EVENFIELDS or ODDFIELDS as the field order to eliminate. |
| `createFields` | [_CreateFields_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#createfields) | Use DUPLICATION or INTERPOLATION when creating fields. |

### applyDespeckle

23.5

**async** : _Promise_`<void>`

Executes Despeckle.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

### applyDifferenceClouds

23.5

**async** : _Promise_`<void>`

Executes Difference Clouds.

Unsupported color modes: Indexed Color, Bitmap, Lab 8 bits, Lab 16 bits

### applyDiffuseGlow

23.5

**async** : _Promise_`<void>`

Executes Diffuse Glow.

Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `graininess` | _number_ | Grain amount [0,10]. |
| `glowAmount` | _number_ | Glow amount [0,20]. |
| `clearAmount` | _number_ | Clear amount [0,20]. |

### applyDisplace

23.5

**async** : _Promise_`<void>`

Executes Displace with supplied horizontal and vertical scales,
mapping type, handling for unchanged areas, and the distortion-image-map path.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontalScale` | _number_ | Width-direction scale amount [-999,999]. |
| `verticalScale` | _number_ | Height-direction scale amount [-999,999]. |
| `displacementType` | [_DisplacementMapType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#displacementmaptype) | How the displacement map is fit when its size differs from the image. |
| `undefinedAreas` | [_UndefinedAreas_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#undefinedareas) | How undistorted or blank regions are handled after a Distort-category filter is applied. |
| `displacementMapFile` | File | Distortion image map path. |

### applyDustAndScratches

23.5

**async** : _Promise_`<void>`

Executes Dust & Scratches.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | Pixel-radius value [1,100]. |
| `threshold` | _number_ | Smaller values make the effect stronger [0,255]. |

### applyGaussianBlur

23.5

**async** : _Promise_`<void>`

Executes Gaussian Blur.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | Pixel-radius value [0.1,250]. |

### applyGlassEffect

23.5

**async** : _Promise_`<void>`

Executes Glass.

Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `distortion` | _number_ | - | Adjust how strongly the glass distorts the image [0,20]. |
| `smoothness` | _number_ | - | Adjust glass smoothness [1,15]. |
| `scaling` | _number_ | - | Percentage used for scaling [50,200]. |
| `invert` | _boolean_ | false | Glass inversion flag (default: false). |
| `texture` | [_TextureType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#texturetype) | - | Glass texture type. Ignored when "textureFile" is supplied. (default: TextureType.CANVAS) |
| `textureFile?` | File | - | Optional glass-distortion mapping file. |

### applyHighPass

23.5

**async** : _Promise_`<void>`

Executes High Pass.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | High-pass pixel width [0.1,1000]. |

### applyImage

24.5

**async** : _Promise_`<void>`

Use applyImage to blend a source image layer and channel with this target layer.
Pixels in this layer are modified.
The operation corresponds to Image > Apply Image on the document. For details and examples, see the ApplyImageOptions object.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `applyImageOptions` | [_ApplyImageOptions_](https://raw.githubusercontent.com/ps-reference/objects/options/applyimageoptions.md) | Options object supplied to applyImage. |

### applyLensBlur

23.5

**async** : _Promise_`<void>`

Executes Lens Blur.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `source` | [_DepthMapSource_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#depthmapsource) | - | Depth-map source (default: `DepthMapSource.NONE`) |
| `focalDistance` | _number_ | 0 | Depth-map blur focal distance [0,255] (default: `0`). |
| `invertDepthMask` | _boolean_ | false | Inverts the depth map when true (default: `false`) |
| `shape` | [_Geometry_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#geometry) | - | Iris shape (default: `Geometry.HEXAGON`) |
| `radius` | _number_ | 15 | Iris radius [0,100] (default: 15) |
| `bladeCurvature` | _number_ | 0 | Iris blade curvature [0,100] (default: `0`) |
| `rotation` | _number_ | 0 | Iris rotation [0,360] (default: `0`) |
| `brightness` | _number_ | 0 | Specular-highlight brightness [0,100] (default: `0`) |
| `threshold` | _number_ | 0 | Specular-highlight threshold [0,255] (default: `0`) |
| `amount` | _number_ | 0 | Noise amount [0,100] (default: `0`) |
| `distribution` | [_NoiseDistribution_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#noisedistribution) | - | Noise distribution value (default: `NoiseDistribution.UNIFORM`) |
| `monochromatic` | _boolean_ | false | Monochromatic-noise flag (default: `false`) |

### applyLensFlare

23.5

**async** : _Promise_`<void>`

Executes Lens Flare.

Supported color modes: RGB 8 bits, RGB 16 bits, RGB 32 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `brightness` | _number_ | Brightness percentage applied [10,300]. |
| `flareCenter` | _object_ | Flare center as `{x: number, y: number}`. |
| `flareCenter.x` | _number_ | Horizontal pixel coordinate. |
| `flareCenter.y` | _number_ | Vertical pixel coordinate. |
| `lensType` | [_LensType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#lenstype) | Lens type for producing the result (default: `LensType.ZOOMLENS`). |

### applyMaximum

23.5

_Promise_`<void>`

Executes Maximum.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | Filter radius in pixels. Use an integer from [1,500] with `SQUARENESS`, or a float from [0.2,500] with `ROUNDNESS`. |
| `preserveShape` | [_PreserveShape_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#preserveshape) | Corner-preservation choice (default: `PreserveShape.SQUARENESS`) |

### applyMedianNoise

23.5

_Promise_`<void>`

Executes Median.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | Pixel-radius value [1,500] |

### applyMinimum

23.5

_Promise_`<void>`

Executes Minimum.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | Filter radius in pixels. Use an integer from [1,500] with `SQUARENESS`, or a float from [0.2,500] with `ROUNDNESS`. |
| `preserveShape` | [_PreserveShape_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#preserveshape) | Corner-preservation choice (default: `PreserveShape.SQUARENESS`) |

### applyMotionBlur

23.5

_Promise_`<void>`

Executes Motion Blur.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angle` | _number_ | Angle, in degrees, at which to apply the blur effect [-360,360] |
| `distance` | _number_ | Blur amount [1,2000] |

### applyNTSC

23.5

_Promise_`<void>`

Executes NTSC Colors.

Supported color modes: RGB 8 bits, RGB 16 bits, RGB 32 bits

### applyOceanRipple

23.5

_Promise_`<void>`

Executes Ocean Ripple.

Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `size` | _number_ | Ripple size [1,15] |
| `magnitude` | _number_ | Magnitude for the ripple [1,20] |

### applyOffset

23.5

_Promise_`<void>`

Executes Offset.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontal` | _number_ | Horizontal offset [-2 \* doc.width, 2 \* doc.width] |
| `vertical` | _number_ | Vertical offset [-2 \* doc.height, 2 \* doc.height] |
| `undefinedAreas` | [_OffsetUndefinedAreas_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#offsetundefinedareas) | Method that fills blank offset areas (default: `OffsetUndefinedAreas.WRAPAROUND`). |

### applyPinch

23.5

**async** : _Promise_`<void>`

Executes Pinch.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Pinch amount. Negative values expand; positive values contract. [-100,100] |

### applyPolarCoordinates

23.5

**async** : _Promise_`<void>`

Executes Polar Coordinates.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `conversion` | [_PolarConversionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#polarconversiontype) | Selected conversion mode. |

### applyRipple

23.5

**async** : _Promise_`<void>`

Executes Ripple.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Ripple amount. [-999,999] |
| `size` | [_RippleSize_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#ripplesize) | Ripple size setting. |

### applySharpen

23.5

**async** : _Promise_`<void>`

Executes Sharpen.

Unsupported color modes: Indexed Color, Bitmap

### applySharpenEdges

23.5

**async** : _Promise_`<void>`

Executes Sharpen Edges.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

### applySharpenMore

23.5

**async** : _Promise_`<void>`

Executes Sharpen More.

Unsupported color modes: Indexed Color, Bitmap

### applyShear

23.5

**async** : _Promise_`<void>`

Executes Shear.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `curve` | \{ `x`: _number_ ; `y`: _number_ }[] | Shear curve specified as coordinate-point objects with x and y properties, for example [\{x:-20, y:1}, \{x:30, y:128}]. More than 2 coordinate objects may be supplied. For the "x" coordinate, use the range [-63,64]; for "y", use [1,128]. To show the curve correctly in the dialog UI, keep the first point at 0 on the "y" axis, keep the last point at 128 on the "y" axis, and sort points by ascending "y" value. |
| `undefinedArea` | [_UndefinedAreas_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#undefinedareas) | Treatment for distortion-created blank regions. |

### applySmartBlur

24.0

**async** : _Promise_`<void>`

Executes Smart Blur.

Supported color modes: RGB 8 bits, CMYK 8 bits, Duotone 8 bits,

Grayscale 8 bits, Lab 8 bits, Multichannel 8 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | Blur radius [0.1,100]. |
| `threshold` | _number_ | Blur threshold [0.1,100]. |
| `blurQuality` | [_SmartBlurQuality_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#smartblurquality) | Blurred-image smoothness/graininess. |
| `mode` | [_SmartBlurMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#smartblurmode) | Smart Blur mode setting. |

### applySpherize

24.0

**async** : _Promise_`<void>`

Executes Spherize.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Distortion amount [-100,100]. |
| `mode` | [_SpherizeMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#spherizemode) | Chosen distortion setting. |

### applyTwirl

23.5

**async** : _Promise_`<void>`

Executes Twirl.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angle` | _number_ | Twirl amount, in degrees [-999,999] |

### applyUnSharpMask

24.0

**async** : _Promise_`<void>`

Executes Unsharp Mask.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Sharpening amount as a whole-number percentage [1,500]. |
| `radius` | _number_ | Radius in pixels [0.1,1000]. |
| `threshold` | _number_ | Contrast threshold [0,255]. |

### applyWave

24.0

**async** : _Promise_`<void>`

Executes Wave.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

## See also

- [Unsupported](uxp-unsupported.md)
