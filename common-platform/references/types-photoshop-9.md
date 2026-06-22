# Photoshop (part 9)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- LayerSets contained inside this LayerSet.
  \*/
  readonly layerSets: LayerSets

/\*\*

- Layers belonging to this LayerSet.
  \*/
  readonly layers: Layers

/\*\*

- Adds a new element.
  \*/
  add(): LayerSet

/\*\*

- Merges this LayerSet.
  \*/
  merge(): ArtLayer
  }

/\*\*

- ArtLayer is a Document object containing image visual elements, equivalent to a layer in Adobe Photoshop.
  \*/
  declare class ArtLayer extends Layer {
  /\*\*
  - Layer interior opacity. Range: 0.0 to 100.0.
    \*/
    fillOpacity: number

/\*\*

- Filter mask density, between 0.0 and 100.0.
  \*/
  filterMaskDensity: number

/\*\*

- Filter mask feather amount, between 0.0 and 250.0.
  \*/
  filterMaskFeather: number

/\*\*

- When true, the layer is clipped to the layer below.
  \*/
  grouped: boolean

/\*\*

- When true, this is the background layer.
  \*/
  isBackgroundLayer: boolean

/\*\*

- Assigns the kind for an empty layer, such as 'text layer'. It is valid only for an empty layer when 'is background layer ' is false. The 'kind ' property can turn a background layer into a normal layer; creating a background layer requires setting 'is background layer' to true.
  \*/
  kind: LayerKind

/\*\*

- Layer mask density, between 0.0 and 100.0.
  \*/
  layerMaskDensity: number

/\*\*

- Layer mask feather amount, between 0.0 and 250.0.
  \*/
  layerMaskFeather: number

/\*\*

- When true, pixels in the layer image are locked against editing.
  \*/
  pixelsLocked: boolean

/\*\*

- When true, pixels in the layer image cannot be moved within the layer.
  \*/
  positionLocked: boolean

/\*\*

- TextItem attached to the layer; valid only when 'kind' is text layer.
  \*/
  readonly textItem: TextItem

/\*\*

- When true, edits are limited to opaque layer areas.
  \*/
  transparentPixelsLocked: boolean

/\*\*

- Vector mask density, between 0.0 and 100.0.
  \*/
  vectorMaskDensity: number

/\*\*

- Vector mask feather amount, between 0.0 and 250.0.
  \*/
  vectorMaskFeather: number

/\*\*

- Adds a new element.
  \*/
  add(): ArtLayer

/\*\*

- Changes brightness and constrast.
- @param brightness Brightness value. Range: -100 to 100.
- @param contrast Contrast value. Range: -100 to 100.
  \*/
  adjustBrightnessContrast(brightness: number, contrast: number): void

/\*\*

- Changes color balance for the layer component channels.
- @param shadows Shadow adjustments; provide three values in the range -100 to 100 for cyan/red, magenta/green, and yellow/blue when the document mode is CMYK or RGB.
- @param midtones Midtone adjustments; provide three values in the range -100 to 100 for cyan/red, magenta/green, and yellow/blue when the document mode is CMYK or RGB.
- @param highlights Highlight adjustments; provide three values in the range -100 to 100 for cyan/red, magenta/green, and yellow/blue when the document mode is CMYK or RGB.
- @param preserveLuminosity When true, keeps luminosity unchanged.
  \*/
  adjustColorBalance(
  shadows?: number[],
  midtones?: number[],
  highlights?: number[],
  preserveLuminosity?: boolean,
  ): void

/\*\*

- Alters the selected channel tonal range with as many as fourteen points.
- @param curveShape Curve points; the point count must be between 2 and 14.
  \*/
  adjustCurves(curveShape: (Point | [number, number])[]): void

/\*\*

- Changes levels for the selected channels.
- @param inputRangeStart Input levels minimum. Range: 0 to 253.
- @param inputRangeEnd Input levels maximum. Range: (input range start + 2) to 253.
- @param inputRangeGamma Input levels gamma. Range: 0.10 to 9.99.
- @param outputRangeStart Output levels minimum. Range: 0 to 253.
- @param outputRangeEnd Output levels upper bound. Range: (output range start + 2) to 253.
  \*/
  adjustLevels(
  inputRangeStart: number,
  inputRangeEnd: number,
  inputRangeGamma: number,
  outputRangeStart: number,
  outputRangeEnd: number,
  ): void

/\*\*

- Runs the add noise filter.
- @param amount Noise strength as a percentage. Range: 0.1 to 400.0.
- @param distribution NoiseDistribution value that selects the noise pattern.
- @param monochromatic When true, changes affect only tonal data and leave colors unchanged.
  \*/
  applyAddNoise(amount: number, distribution: NoiseDistribution, monochromatic: boolean): void

/\*\*

- Runs the average filter.
  \*/
  applyAverage(): void

/\*\*

- Runs the blur filter.
  \*/
  applyBlur(): void

/\*\*

- Runs the blur more filter.
  \*/
  applyBlurMore(): void

/\*\*

- Runs the clouds filter.
  \*/
  applyClouds(): void

/\*\*

- Runs the custom filter.
- @param characteristics Custom-filter kernel data: 25 values ordered left-to-right, top-to-bottom to match the Custom dialog grid in the user interface (Filter > Other > Custom).
- @param scale Divides the summed brightness values from the calculated pixels.
- @param offset Adds this value after the scale calculation.
  \*/
  applyCustomFilter(characteristics: number[], scale: number, offset: number): void

/\*\*

- Runs the de-interlace filter.
- @param eliminateFields Identifies which fields are removed.
- @param createFields Replacement strategy for the removed fields.
  \*/
  applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void

/\*\*

- Runs the despeckle filter.
  \*/
  applyDespeckle(): void

/\*\*

- Runs the difference clouds filter.
  \*/
  applyDifferenceClouds(): void

/\*\*

- Runs the diffuse glow filter.
- @param graininess Graininess value. Range: 0 to 10.
- @param glowAmount Glow intensity. Range: 0 to 20.
- @param clearAmount Clear-area value. Range: 0 to 20.
  \*/
  applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void

/\*\*

- Runs the displace filter.
- @param horizontalScale Horizontal distortion value. Range: -999 to 999.
- @param verticalScale Vertical distortion value. Range: -999 to 999.
- @param displacementType DisplacementMapType choice for the displacement.
- @param undefinedAreas Handling for areas that are not distorted.
- @param displacementMapFile Image-map file used for the distortion.
  \*/
  applyDisplace(
  horizontalScale: number,
  verticalScale: number,
  displacementType: DisplacementMapType,
  undefinedAreas: UndefinedAreas,
  displacementMapFile: File,
  ): void

/\*\*

- Runs the dust and scratches filter.
- @param radius Pixel search radius used to find dissimilar pixels. Range: 1 to 16.
- @param threshold Dissimilarity threshold required before pixels are removed. Range: 0 to 255.
  \*/
  applyDustAndScratches(radius: number, threshold: number): void

/\*\*

- Runs the gaussian blur filter.
- @param radius Width of the blur in pixels. Range: 1.0 to 250.0.
  \*/
  applyGaussianBlur(radius: number): void

/\*\*

- Runs the glass filter.
- @param distortion Distortion strength. Range: 0 to 20.
- @param smoothness Smoothness setting. Range: 1 to 15.
- @param scaling Scaling amount. Range: 50 to 200.
- @param invert When true, flips the texture.
- @param texture TextureType value to use.
- @param textureFile Texture-type source file.
  \*/
  applyGlassEffect(
  distortion: number,
  smoothness: number,
  scaling: number,
  invert?: boolean,
  texture?: TextureType,
  textureFile?: File,
  ): void

/\*\*

- Runs the high pass filter.
- @param radius Radius width, in pixels, where edge detail remains.
  \*/
  applyHighPass(radius: number): void

/\*\*

- Runs the lens blur filter.
- @param source Depth-map source.
- @param focalDistance Depth-map blur focal distance in pixels. RangeL 0 to 255. Only valid when 'source' is transparency or layer mask.
- @param invertDepthMap When true, reverses the depth map.
- @param shape Iris geometry.
- @param radius Iris radius. Range: 0 to 100.
- @param bladeCurvature Iris blade curvature. Range: 0 to 100.
- @param rotation Iris rotation in degrees. Range: 0 to 360.
- @param brightness Specular-highlight brightness. Range: 0 to 100.
- @param threshold Specular-highlight threshold. Range: 0 to 255.
- @param amount Noise amount. Range: 0 to 100.
- @param distribution NoiseDistribution value used for noise.
- @param monochromatic When true, produces monochrome noise.
  \*/
  applyLensBlur(
  source?: DepthMapSource,
  focalDistance?: number,
  invertDepthMap?: boolean,
  shape?: Geometry,
  radius?: number,
  bladeCurvature?: number,
  rotation?: number,
  brightness?: number,
  threshold?: number,
  amount?: number,
  distribution?: NoiseDistribution,
  monochromatic?: boolean,
  ): void

/\*\*

- Runs the lens flare filter.
- @param brightness Flare brightness. Range: 10 to 300.
- @param flareCenter Flare-center location.
- @param lensType LensType value.
  \*/
  applyLensFlare(brightness: number, flareCenter: UnitPoint, lensType: LensType): void

/\*\*

- Runs the maximum filter.
- @param radius Choke area in pixels. Range: 0 to 100.
  \*/
  applyMaximum(radius: number): void

/\*\*

- Runs the median noise filter.
- @param radius Area size used to search for similarly bright pixels. Range: 0 to 100.
  \*/
  applyMedianNoise(radius: number): void

/\*\*

- Runs the minimum filter.
- @param radius Spread area in pixels. Range: 0 to 100.
  \*/
  applyMinimum(radius: number): void

/\*\*

- Runs the motion blur filter.
- @param angle Angle in degrees. Range: -360 to 360.
- @param radius Pixel radius. Range: 1 to 999.
  \*/
  applyMotionBlur(angle: number, radius: number): void

/\*\*

- Runs the NTSC colors filter.
  \*/
  applyNTSC(): void

/\*\*

- Runs the ocean ripple filter.
- @param size Ripple size. Range: 1 to 15.
- @param magnitude Ripple magnitude. Range: 0 to 20.
  \*/
  applyOceanRipple(size: number, magnitude: number): void

/\*\*

- Runs the offset filter.
- @param horizontal Pixel offset that moves the selection horizontally to the right. Range: -6144 to 6144.
- @param vertical Pixel offset that moves the selection vertically downward. Range: -6144 to 6144.
- @param undefinedAreas OffsetUndefinedAreas method for filling the newly empty regions.
  \*/
  applyOffset(
  horizontal: UnitValue | number,
  vertical: UnitValue | number,
  undefinedAreas: OffsetUndefinedAreas,
  ): void

/\*\*

- Runs the pinch filter.
- @param amount Pinch amount. Range: -100 to 100.
  \*/
  applyPinch(amount: number): void

/\*\*

- Runs the polar coordinates filter.
- @param conversion PolarConversionType conversion choice.
  \*/
  applyPolarCoordinates(conversion: PolarConversionType): void

/\*\*

- Runs the radial blur filter.
- @param amount Blur amount. Range: 1 to 100.
- @param blurMethod RadialBlurMethod option.
- @param blurQuality Smooth-versus-grainy quality setting for the blur.
- @param blurCenter Center position as a unit value.
  \*/
  applyRadialBlur(
  amount: number,
  blurMethod: RadialBlurMethod,
  blurQuality: RadialBlurQuality,
  blurCenter?: UnitPoint,
  ): void

/\*\*

- Runs the ripple filter.
- @param amount Ripple amount. Range: -999 to 999.
- @param size RippleSize setting.
  \*/
  applyRipple(amount: number, size: RippleSize): void

/\*\*

- Runs the sharpen filter.
  \*/
  applySharpen(): void

/\*\*

- Runs the sharpen edges filter.
  \*/
  applySharpenEdges(): void

/\*\*

- Runs the sharpen more filter.
  \*/
  applySharpenMore(): void

/\*\*

- Runs the shear filter.
- @param curve Shear curve defined as x,y point pairs, using the format [[x1, y1],[x2, y2]]. Any count of coordinate pairs is allowed.
- @param undefinedAreas Handling for blank regions created by the distortion.
  \*/
  applyShear(curve: any[], undefinedAreas: UndefinedAreas): void

/\*\*

- Runs the smart blur filter.
- @param radius Blur radius. Range: 0 - 1000.
- @param threshold Blur threshold. Range: 0 - 1000.
- @param blurQuality Smooth-versus-grainy quality setting for the blur.
- @param mode SmartBlurMode option.
  \*/
  applySmartBlur(
  radius: number,
  threshold: number,
  blurQuality: SmartBlurQuality,
  mode: SmartBlurMode,
  ): void

/\*\*

- Runs the spherize filter.
- @param amount Distortion amount. Range: -100 to 100.
- @param mode SpherizeMode distortion option.
  \*/
  applySpherize(amount: number, mode: SpherizeMode): void

/\*\*

- Assigns the named style to the layer.
- @param styleName Layer-style name.
  \*/
  applyStyle(styleName: string): void

/\*\*

-
- @param file Style file for application.
  \*/
  applyStyleFile(file: File): void

/\*\*

- Runs the texture fill filter.
- @param textureFile Texture file; it must be a grayscale Photoshop file.
  \*/
  applyTextureFill(textureFile: File): void

/\*\*

- Runs the twirl filter.
- @param angle Twirl angle. Range: -999 to 999.
  \*/
  applyTwirl(angle: number): void

/\*\*

- Runs the unsharp mask filter.
- @param amount Sharpening amount as a percentage. Range: 1 to 500.
- @param radius Radius in pixels. Range: 0.1 to 250.0.
- @param threshold Threshold for contrast. Range: 0 to 255.
  \*/
  applyUnSharpMask(amount: number, radius: number, threshold: number): void

/\*\*

- Runs the wave filter.
- @param generatorNumber Generator count. Range: 1 to 999.
- @param minimumWavelength Minimum wave length. Range: 1 to 998.
- @param maximumWavelength Maximum wave length. Range: 2 to (minimum wavelength + 1)
- @param minimumAmplitude Minimum amplitude. Range: 1 to 998.
- @param maximumAmplitude Maximum amplitude. Range: 2 to (minimum amplitude + 1)
- @param horizontalScale Horizontal scale percentage. Range: 1 to 100.
- @param verticalScale Vertical scale percentage. Range: 1 to 100.
- @param waveType WaveType choice.
- @param undefinedAreas Handling for blank regions created by the distortion.
- @param randomSeed Seed for randomness.
  \*/
  applyWave(
  generatorNumber: number,
  minimumWavelength: number,
  maximumWavelength: number,
  minimumAmplitude: number,
  maximumAmplitude: number,
  horizontalScale: number,
  verticalScale: number,
  waveType: WaveType,
  undefinedAreas: UndefinedAreas,
  randomSeed: number,
  ): void

/\*\*

- Runs the zigzag filter.
- @param amount Zigzag amount. Range: -100 to 100.
- @param ridges Ridge length.
- @param style ZigZagType style.
  \*/
  applyZigZag(amount: number, ridges: number, style: ZigZagType): void

/\*\*

- Automatically adjusts contrast for the selected channels.
  \*/
  autoContrast(): void

/\*\*

- Uses auto levels to adjust the selected channels.
  \*/
  autoLevels(): void

/\*\*

- Clears the layer without placing it on the clipboard.
  \*/
  clear(): void

/\*\*

- Places the layer on the clipboard.
- @param merge When true, the copy includes every visible layer. When false, it copies only from the current layer.
  \*/
  copy(merge?: boolean): void

/\*\*

- Moves the layer to the clipboard.
  \*/
  cut(): void

/\*\*

- Turns a color image into grayscale in the current color mode by giving each pixel equal component-color values.
  \*/
  desaturate(): void

/\*\*

- Rebalances pixel brightness values so the full brightness range is represented more evenly.
  \*/
  equalize(): void

/\*\*

- Reverses layer colors by mapping every channel pixel brightness to its opposite on the 256-step color-values scale.
  \*/
  invert(): void

/\*\*

- Merges this layer into the one below it, removes this layer, and returns the ArtLayer receiving the merge.
  \*/
  merge(): ArtLayer

/\*\*

- Changes a targeted output color channel by mixing existing image channels. output channels = an array of channel specifications; for each component channel, provide adjustment values (-200 to 200), then a 'constant' value (-200 to 200). With monochrome = true, only 1 channel value specification is allowed. Allowed only when 'document mode' = RGB or CMYK. Use four doubles for RGB arrays and five doubles for CMYK arrays.
- @param outputChannels Channel specification list. For each component channel present in the document, include adjustment values followed by a 'constant' value.
- @param monochrome When true, monochrome mixing is used. Note: this allows only one channel value.
  \*/
  mixChannels(outputChannels: any[], monochrome?: boolean): void

/\*\*

- Adjusts layer color balance and temperature as though applying a color filter.
- @param fillColor Fill color to use.
- @param density Filter-effect density as a percentage. Range: 1 to 100.
- @param preserveLuminosity When true, keeps luminosity unchanged.
  \*/
  photoFilter(fillColor?: SolidColor, density?: number, preserveLuminosity?: boolean): void

/\*\*

- Sets the per-channel tonal-level count, then maps pixels to the nearest available level.
- @param levels Tonal-level count. Range: 2 to 255.
  \*/
  posterize(levels: number): void

/\*\*

- Changes targeted layer content into a flat raster image.
- @param target RasterizeType target.
  \*/
  rasterize(target: RasterizeType): void

/\*\*

-
- @param file Destination file for the style.
- @param thumbnail Destination file for the style thumbnail.
- @param thumbnailSize Thumbnail output size.
- @param backgroundValue Gray background value.
  \*/
  saveStyleFile(
  file: File,
  thumbnail?: File,
  thumbnailSize?: number,
  backgroundValue?: number,
  ): void

/\*\*

-
- @param selectionMethod Changes a process-color amount within a specified primary color while leaving the other primary colors alone.
- @param reds 4-value array: cyan, magenta, yellow, black.
- @param yellows 4-value array: cyan, magenta, yellow, black.
- @param greens 4-value array: cyan, magenta, yellow, black.
- @param cyans 4-value array: cyan, magenta, yellow, black.
- @param blues 4-value array: cyan, magenta, yellow, black.
- @param magentas 4-value array: cyan, magenta, yellow, black.
- @param whites 4-value array: cyan, magenta, yellow, black.
- @param neutrals 4-value array: cyan, magenta, yellow, black.
- @param blacks 4-value array: cyan, magenta, yellow, black.
  \*/
  selectiveColor(
  selectionMethod: AdjustmentReference,
  reds?: number[],
  yellows?: number[],
  greens?: number[],
  cyans?: number[],
  blues?: number[],
  magentas?: number[],
  whites?: number[],
  neutrals?: number[],
  blacks?: number[],
  ): void

/\*\*

- Changes tonal range for shadows and highlights.
- @param shadowAmount Shadow amount as a percentage. Range: 0 to 100.
- @param shadowWidth Shadow tonal-width percentage; 0 = narrow and 100 = broad. Range: 0 to 100.
- @param shadowRaduis Shadow radius in pixels. Range: 0 to 2500.
- @param highlightAmount Highlight amount as a percentage. Range: 0 to 100.
- @param highlightWidth Highlight tonal width; 0 = narrow and 100 = broad. Range: 0 to 100.
- @param highlightRaduis Highlight radius in pixels. Range: 0 to 2500.
- @param colorCorrection Color-adjustment amount for the changed image region. Range: -100 to 100.
- @param midtoneContrast Midtone-contrast amount. Range: -100 to 100.
- @param blackClip White clipping fraction. Range: 0.000 to 50.000.
- @param whiteClip Black clipping fraction. Range: 0.000 to 50.000.
  \*/
  shadowHighlight(
  shadowAmount?: number,
  shadowWidth?: number,
  shadowRaduis?: number,
  highlightAmount?: number,
  highlightWidth?: number,
  highlightRaduis?: number,
  colorCorrection?: number,
  midtoneContrast?: number,
  blackClip?: number,
  whiteClip?: number,
  ): void

/\*\*

- Makes grayscale or color images high-contrast B/W by changing pixels above the threshold to white and below it to black.
- @param level Threshold level.
  \*/
  threshold(level: number): void
  }

/\*\*

- Layer object.
- A Layer can include nested layers, named sublayers in the user interface. This object exposes every page item in that specific layer as elements. Scripts can reach page items through either the Layer object or the document object.
  \*/
  declare class Layer {
  /\*\*
  - When true, this layer's contents and settings are locked.
    \*/
    allLocked: boolean

/\*\*

- Compositing mode for an object.
  \*/
  blendMode: BlendMode

/\*\*

- For a Layer that is a layer set, returns the matching layer set object reference.
  \*/
  readonly bounds: UnitRect

/\*\*

- Bounds rectangle for the Layer, excluding effects.
  \*/
  readonly boundsNoEffects: UnitRect

/\*\*

- Unique ID for this layer.
  \*/
  readonly id: number

/\*\*

- Layer index without layer groups, matching Photoshop indexing.
  \*/
  readonly itemIndex: number

/\*\*

- Layers linked with this layer.
  \*/
  readonly linkedLayers: Layer[]
