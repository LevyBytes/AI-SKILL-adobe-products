# Photoshop (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- For vertical type, places the underline on the text's right side.
  \*/
  UNDERLINERIGHT = 2,
  }

/\*\*

- Controls how a new selection combines with an existing one.
  \*/
  declare enum SelectionType {
  /\*\*
  - Removes the new selection area from the current selection.
    \*/
    DIMINISH = 3,

/\*\*

- Adds the new selection area to the current selection.
  \*/
  EXTEND = 2,

/\*\*

- Keeps only the area shared by the current selection and the new one.
  \*/
  INTERSECT = 4,

/\*\*

- Replaces the current selected area.
  \*/
  REPLACE = 1,
  }

/\*\*

- Selects which export option set is used.
  \*/
  declare enum ExportType {
  /\*\*
  - Writes Photoshop paths as Adobe Illustrator files.
    \*/
    ILLUSTRATORPATHS = 1,

/\*\*

- Applies the save for web export settings.
  \*/
  SAVEFORWEB = 2,
  }

/\*\*

- Chooses which paths are exported.
  \*/
  declare enum IllustratorPathType {
  /\*\*
  - Exports every path.
    \*/
    ALLPATHS = 2,

/\*\*

- Exports the bounds of the document.
  \*/
  DOCUMENTBOUNDS = 1,

/\*\*

- Exports a named path. To identify it, use the path name property on the illustrator export options object.
  \*/
  NAMEDPATH = 3,
  }

/\*\*

- Identifies the channel category.
  \*/
  declare enum ChannelType {
  /\*\*
  - Channel associated with the document color model.
    \*/
    COMPONENT = 1,

/\*\*

- Alpha channel where color marks a masked area.
  \*/
  MASKEDAREA = 2,

/\*\*

- Alpha channel where color marks a selected area.
  \*/
  SELECTEDAREA = 3,

/\*\*

- Alpha channel used to hold a spot color.
  \*/
  SPOTCOLOR = 4,
  }

/\*\*

- Chooses the blur method.
  \*/
  declare enum RadialBlurMethod {
  /\*\*
  - Blurs along circular concentric paths using the specified rotation amount.
    \*/
    SPIN = 1,

/\*\*

- Blurs along radial paths, like zooming toward or away from the image.
  \*/
  ZOOM = 2,
  }

/\*\*

- Sets radial blur quality.
  \*/
  declare enum RadialBlurQuality {
  /\*\*
  - Produces the highest quality result.
    \*/
    BEST = 3,

/\*\*

- Produces quick results with grain.
  \*/
  DRAFT = 1,

/\*\*

- Produces a good quality result.
  \*/
  GOOD = 2,
  }

/\*\*

- Sets smart blur quality.
  \*/
  declare enum SmartBlurQuality {
  /\*\*
  - High-quality processing.
    \*/
    HIGH = 3,

/\*\*

- Low-quality processing.
  \*/
  LOW = 1,

/\*\*

- Medium-quality processing.
  \*/
  MEDIUM = 2,
  }

/\*\*

- Chooses how smart blur is applied.
  \*/
  declare enum SmartBlurMode {
  /\*\*
  - Applies blur only along edges where colors transition.
  - At high-contrast transitions, creates black-and-white edges.
    \*/
    EDGEONLY = 2,

/\*\*

- Applies blur across the full image.
  \*/
  NORMAL = 1,

/\*\*

- Applies blur only along edges where colors transition.
- At high-contrast transitions, creates white edges.
  \*/
  OVERLAYEDGE = 3,
  }

/\*\*

- Selects the texture or glass-surface source image for a texturizer or glass filter.
  \*/
  declare enum TextureType {
  /\*\*
  - Makes the image look viewed through glass blocks.
    \*/
    BLOCKS = 1,

/\*\*

- Makes the image look painted on canvas.
  \*/
  CANVAS = 2,

/\*\*

- Uses texture from an open document.
  \*/
  FILE = 5,

/\*\*

- Gives the image a frosted appearance.
  \*/
  FROSTED = 3,

/\*\*

- Makes the image look viewed through many tiny lenses.
  \*/
  TINYLENS = 4,
  }

/\*\*

- Chooses the polar distortion conversion.
  \*/
  declare enum PolarConversionType {
  /\*\*
  - Converts the selection from polar coordinates to rectangular coordinates.
    \*/
    POLARTORECTANGULAR = 2,

/\*\*

- Converts the selection from rectangular coordinates to polar coordinates.
  \*/
  RECTANGULARTOPOLAR = 1,
  }

/\*\*

- Specifies undulation size.
  \*/
  declare enum RippleSize {
  /\*\*
  - Large size.
    \*/
    LARGE = 3,

/\*\*

- Medium size.
  \*/
  MEDIUM = 2,

/\*\*

- Small size.
  \*/
  SMALL = 1,
  }

/\*\*

- Controls how undistorted or newly blank areas are handled after a Distort-category filter is applied.
  \*/
  declare enum UndefinedAreas {
  /\*\*
  - Extends edge-pixel colors in the specified direction. If edge pixels differ in color, banding can occur.
    \*/
    REPEATEDGEPIXELS = 2,

/\*\*

- Fills undefined space by pulling content from the image's opposite edge.
  \*/
  WRAPAROUND = 1,
  }

/\*\*

- Chooses how empty space created by offsetting an image or selection is filled.
  \*/
  declare enum OffsetUndefinedAreas {
  /\*\*
  - Extends edge-pixel colors in the specified direction. If edge pixels differ in color, banding can occur.
    \*/
    REPEATEDGEPIXELS = 3,

/\*\*

- For background layers, changes pixels to the background layer color. For nonbackground layers, makes the pixels transparent.
  \*/
  SETTOBACKGROUND = 1,

/\*\*

- Fills undefined space by pulling content from the image's opposite edge.
  \*/
  WRAPAROUND = 2,
  }

/\*\*

- Selects the curve, or stretch shape, used for distortion.
  \*/
  declare enum SpherizeMode {
  /\*\*
  - Distorts the image as though wrapped around a horizontal cylinder.
    \*/
    HORIZONTAL = 2,

/\*\*

- Distorts the image as though wrapped around a sphere.
  \*/
  NORMAL = 1,

/\*\*

- Distorts the image as though wrapped around a vertical cylinder.
  \*/
  VERTICAL = 3,
  }

/\*\*

- Defines how the displacement map is fitted when its dimensions differ from the image.
  \*/
  declare enum DisplacementMapType {
  /\*\*
  - Resizes the map.
    \*/
    STRETCHTOFIT = 1,

/\*\*

- Fills the selection by tiling the map as a repeating pattern.
  \*/
  TILE = 2,
  }

/\*\*

- Identifies the wave form.
  \*/
  declare enum WaveType {
  /\*\*
  - Rolling wave.
    \*/
    SINE = 1,

/\*\*

- Square wave.
  \*/
  SQUARE = 3,

/\*\*

- Triangular wave.
  \*/
  TRIANGULAR = 2,
  }

/\*\*

- Chooses the zigzag method.
  \*/
  declare enum ZigZagType {
  /\*\*
  - Rotates pixels around the selection center.
    \*/
    AROUNDCENTER = 1,

/\*\*

- Moves pixels toward or away from the selection center.
  \*/
  OUTFROMCENTER = 2,

/\*\*

- Moves pixels toward the upper left or lower right.
  \*/
  PONDRIPPLES = 3,
  }

/\*\*

- Selects the distribution used by the Add Noise filter.
  \*/
  declare enum NoiseDistribution {
  /\*\*
  - Places noise color values along a bell-shaped curve for a speckled effect.
    \*/
    GAUSSIAN = 2,

/\*\*

- Places noise color values with random numbers between 0 and plus or minus the specified amount, producing a subtle effect.
  \*/
  UNIFORM = 1,
  }

/\*\*

- Identifies the lens type.
  \*/
  declare enum LensType {
  /\*\*
  - Movie Prime lens.
    \*/
    MOVIEPRIME = 5,

/\*\*

- 105mm Prime lens.
  \*/
  PRIME105 = 3,

/\*\*

- 35mm Prime lens.
  \*/
  PRIME35 = 2,

/\*\*

- 50-300mm Zoom lens.
  \*/
  ZOOMLENS = 1,
  }

/\*\*

- Specifies which fields are eliminated.
  \*/
  declare enum EliminateFields {
  /\*\*
  - Removes even interlaced lines from a video image.
    \*/
    EVENFIELDS = 2,

/\*\*

- Removes odd interlaced lines from a video image.
  \*/
  ODDFIELDS = 1,
  }

/\*\*

- Chooses how eliminated fields are replaced.
  \*/
  declare enum CreateFields {
  /\*\*
  - Copies existing pixels.
    \*/
    DUPLICATION = 1,

/\*\*

- Assigns color values to new Photoshop-created pixels using values from existing image pixels.
  \*/
  INTERPOLATION = 2,
  }

/\*\*

- Defines the image pixel dimensions.
  \*/
  declare enum PhotoCDSize {
  /\*\*
  - 1024x1536 image size.
    \*/
    EXTRALARGE = 5,

/\*\*

- 512x768 image size.
  \*/
  LARGE = 4,

/\*\*

- 2048x3072 image size.
  \*/
  MAXIMUM = 6,

/\*\*

- 256x384 image size.
  \*/
  MEDIUM = 3,

/\*\*

- 64x96 image size.
  \*/
  MINIMUM = 1,

/\*\*

- 128x192 image size.
  \*/
  SMALL = 2,
  }

/\*\*

- Lists available channel bit depths.
  \*/
  declare enum BitsPerChannelType {
  /\*\*
  - 8-bit channel depth.
    \*/
    EIGHT = 8,

/\*\*

- 1-bit channel depth.
  \*/
  ONE = 1,

/\*\*

- 16-bit channel depth.
  \*/
  SIXTEEN = 16,

/\*\*

- 32-bit channel depth.
  \*/
  THIRTYTWO = 32,
  }

/\*\*

- Lists pixel-depth choices for compressed PICT files.
  \*/
  declare enum PICTBitsPerPixels {
  /\*\*
  - 8-bit pixel depth.
    \*/
    EIGHT = 8,

/\*\*

- 4-bit pixel depth.
  \*/
  FOUR = 4,

/\*\*

- 16-bit pixel depth.
  \*/
  SIXTEEN = 16,

/\*\*

- 32-bit pixel depth.
  \*/
  THIRTYTWO = 32,

/\*\*

- 2-bit pixel depth.
  \*/
  TWO = 2,
  }

/\*\*

- Lists bit-depth choices for Targa image saves.
  \*/
  declare enum TargaBitsPerPixels {
  /\*\*
  - 16-bit pixel depth.
    \*/
    SIXTEEN = 16,

/\*\*

- 32-bit pixel depth.
  \*/
  THIRTYTWO = 32,

/\*\*

- 24-bit pixel depth.
  \*/
  TWENTYFOUR = 24,
  }

/\*\*

- Identifies an object's descriptor value type.
  \*/
  declare enum DescValueType {
  /\*\*
  - Alias value.
    \*/
    ALIASTYPE = 11,

/\*\*

- Boolean value.
  \*/
  BOOLEANTYPE = 5,

/\*\*

- Class value.
  \*/
  CLASSTYPE = 10,

/\*\*

- Double value.
  \*/
  DOUBLETYPE = 2,

/\*\*

- Enumeration value.
  \*/
  ENUMERATEDTYPE = 8,

/\*\*

- Integer value.
  \*/
  INTEGERTYPE = 1,

/\*\*

- \*/
  LARGEINTEGERTYPE = 13,

/\*\*

- Action list value.
  \*/
  LISTTYPE = 6,

/\*\*

- Object value.
  \*/
  OBJECTTYPE = 7,

/\*\*

- Raw value.
  \*/
  RAWTYPE = 12,

/\*\*

- Reference value.
  \*/
  REFERENCETYPE = 9,

/\*\*

- String value.
  \*/
  STRINGTYPE = 4,

/\*\*

- Unit value stored as a double.
  \*/
  UNITDOUBLE = 3,
  }

/\*\*

- Identifies the form of an action reference object.
  \*/
  declare enum ReferenceFormType {
  /\*\*
  - Class form.
    \*/
    CLASSTYPE = 7,

/\*\*

- Enumerated form.
  \*/
  ENUMERATED = 5,

/\*\*

- Identifier form.
  \*/
  IDENTIFIER = 3,

/\*\*

- Index form.
  \*/
  INDEX = 2,

/\*\*

- Name form.
  \*/
  NAME = 1,

/\*\*

- Offset form.
  \*/
  OFFSET = 4,

/\*\*

- Property form.
  \*/
  PROPERTY = 6,
  }

/\*\*

- Specifies channel depth, also called pixel depth or color depth. The selected number acts as an exponent of 2; for example, EIGHT maps to 2^8 possible values, which is 256.
  \*/
  declare enum BMPDepthType {
  /\*\*
  - Advanced bit-depth specification A1 R5 G5 B5.
    \*/
    `BMP_A1R5G5B5` = 61,

/\*\*

- Advanced bit-depth specification A4 R4 G4 B4.
  \*/
  `BMP_A4R4G4B4` = 64,

/\*\*

- Advanced bit-depth specification A8 R8 G8 B8, equivalent to normal 32 bit mode.
  \*/
  `BMP_A8R8G8B8` = 67,

/\*\*

- Advanced bit-depth specification R5 G6 B5.
  \*/
  `BMP_R5G6B5` = 62,

/\*\*

- Advanced bit-depth specification R8 G8 B8, equivalent to normal 24 bit mode.
  \*/
  `BMP_R8G8B8` = 65,

/\*\*

- Advanced bit-depth specification X1 R5 G5 B5, equivalent to normal 16 bit mode.
  \*/
  `BMP_X1R5G5B5` = 60,

/\*\*

- Advanced bit-depth specification X4 R4 G4 B4.
  \*/
  `BMP_X4R4G4B4` = 63,

/\*\*

- Advanced bit-depth specification X8 R8 G8 B8.
  \*/
  `BMP_X8R8G8B8` = 66,

/\*\*

- 8-bit depth.
  \*/
  EIGHT = 8,

/\*\*

- 4-bit depth.
  \*/
  FOUR = 4,

/\*\*

- 1-bit depth.
  \*/
  ONE = 1,

/\*\*

- 16-bit depth.
  \*/
  SIXTEEN = 16,

/\*\*

- 32-bit depth.
  \*/
  THIRTYTWO = 32,

/\*\*

- 24-bit depth.
  \*/
  TWENTYFOUR = 24,
  }

/\*\*

- Records the document copyright state.
  \*/
  declare enum CopyrightedType {
  /\*\*
  - Marks the document as copyrighted.
    \*/
    COPYRIGHTEDWORK = 1,

/\*\*

- Marks the document as public domain.
  \*/
  PUBLICDOMAIN = 2,

/\*\*

- Leaves the copyright state unspecified.
  \*/
  UNMARKED = 3,
  }

/\*\*

- Selects the quality mode for converting an image to bitmap mode.
  \*/
  declare enum BitmapConversionType {
  /\*\*
  - Simulates printing a grayscale image through a custom halftone screen. This option can apply an image texture, such as wood grain. A pattern must be defined before this option is used.
    \*/
    CUSTOMPATTERN = 5,

/\*\*

- Uses a random pattern that is often less visible than pattern dither. The dither is spread through neighboring pixels. When this algorithm is chosen, provide a dither percentage to control how much dithering affects the image.
- Visible seams can appear across slice boundaries. Linking slices spreads the dither pattern through all linked slices and removes those seams.
  \*/
  DIFFUSIONDITHER = 3,

/\*\*

- 50% threshold conversion.
  \*/
  HALFTHRESHOLD = 1,

/\*\*

- Converts a grayscale image to simulated halftone dots.
  \*/
  HALFTONESCREEN = 4,

/\*\*

- Uses a square pattern similar to halftone screening to set pixel values.
  \*/
  PATTERNDITHER = 2,
  }

/\*\*

- Defines the dot shape, or ink-deposit shape, used in the halftone screen.
  \*/
  declare enum BitmapHalfToneType {
  /\*\*
  - Cross shape.
    \*/
    CROSS = 6,

/\*\*

- Diamond shape.
  \*/
  DIAMOND = 2,

/\*\*

- Ellipse shape.
  \*/
  ELLIPSE = 3,

/\*\*

- Line shape.
  \*/
  LINE = 4,

/\*\*

- Round shape.
  \*/
  ROUND = 1,

/\*\*

- Square shape.
  \*/
  SQUARE = 5,
  }

/\*\*

- Selects the matte color.
  \*/
  declare enum MatteType {
  /\*\*
  - Uses the current background color.
    \*/
    BACKGROUND = 3,

/\*\*

- Black matte.
  \*/
  BLACK = 5,

/\*\*

- Uses the current foreground color.
  \*/
  FOREGROUND = 2,

/\*\*

- Gray matte.
  \*/
  NETSCAPE = 7,

/\*\*

- No matte color.
  \*/
  NONE = 1,

/\*\*

- 50% gray matte.
  \*/
  SEMIGRAY = 6,

/\*\*

- White matte.
  \*/
  WHITE = 4,
  }

/\*\*

- Chooses how selective color adjustment specifications are interpreted.
  \*/
  declare enum AdjustmentReference {
  /\*\*
  - Percentage of the whole.
    \*/
    ABSOLUTE = 2,

/\*\*

- Percentage of the current color amount.
  \*/
  RELATIVE = 1,
  }

/\*\*

- Specifies the color profile used.
  \*/
  declare enum OpenDocumentMode {
  /\*\*
  - CMYK profile.
    \*/
    CMYK = 3,

/\*\*

- Grayscale profile.
  \*/
  GRAYSCALE = 1,

/\*\*

- Lab profile.
  \*/
  LAB = 4,

/\*\*

- RGB profile.
  \*/
  RGB = 2,
  }

/\*\*

- Specifies the color profile used.
  \*/
  declare enum NewDocumentMode {
  /\*\*
  - Bitmap profile.
    \*/
    BITMAP = 5,

/\*\*

- CMYK profile.
  \*/
  CMYK = 3,

/\*\*

- Grayscale profile.
  \*/
  GRAYSCALE = 1,

/\*\*

- Lab profile.
  \*/
  LAB = 4,

/\*\*

- RGB profile.
  \*/
  RGB = 2,
  }

/\*\*

- Deprecated entry.
  \*/
  declare enum PhotoCDColorSpace {
  /\*\*
  - Lab color, 16 bits per channel.
    \*/
    LAB16 = 4,

/\*\*

- Lab color, 8 bits per channel.
  \*/
  LAB8 = 3,

/\*\*

- RGB color, 16 bits per channel.
  \*/
  RGB16 = 2,

/\*\*

- RGB color, 8 bits per channel.
  \*/
  RGB8 = 1,
  }

/\*\*

- Sets where path or selection-boundary strokes are placed.
  \*/
  declare enum StrokeLocation {
  /\*\*
  - Places the border at the center of the selection or layer boundaries.
    \*/
    CENTER = 2,

/\*\*

- Places the border inside the selection or layer boundaries.
  \*/
  INSIDE = 1,

/\*\*

- Places the border outside the selection or layer boundaries.
  \*/
  OUTSIDE = 3,
  }

/\*\*

- Lists color models.
  \*/
  declare enum ColorModel {
  /\*\*
  - CMYK model.
    \*/
    CMYK = 3,

/\*\*

- Grayscale model.
  \*/
  GRAYSCALE = 1,

/\*\*

- HSB model.
  \*/
  HSB = 5,

/\*\*

- Lab model.
  \*/
  LAB = 4,

/\*\*

- Color model has not been assigned yet.
  \*/
  NONE = 50,

/\*\*

- RGB model.
  \*/
  RGB = 2,
  }

/\*\*

- Controls when a JavaScript debugger should appear.
  \*/
  declare enum JavaScriptExecutionMode {
  /\*\*
  - Opens the JavaScript debugger when the script's first line runs.
    \*/
    BEFORERUNNING = 3,

/\*\*

- Keeps the JavaScript debugger hidden. Runtime errors are handled by throwing JavaScript exceptions.
  \*/
  NEVER = 1,

/\*\*

- Opens the JavaScript debugger when a runtime error occurs.
  \*/
  ONRUNTIMEERROR = 2,
  }

/\*\*

- Selects the source color space for printing.
  \*/
  declare enum SourceSpaceType {
  /\*\*
  - Document color space.
    \*/
    DOCUMENT = 1,

/\*\*

- Proof color space.
  \*/
  PROOF = 2,
  }

/\*\*

- Identifies art-layer types.
  \*/
  declare enum LayerKind {
  /\*\*
  - Black-and-white adjustment.
    \*/
    BLACKANDWHITE = 22,

/\*\*

- Brightness/contrast adjustment.
  \*/
  BRIGHTNESSCONTRAST = 9,

/\*\*

- Channel mixer adjustment.
  \*/
  CHANNELMIXER = 12,

/\*\*

- Color balance adjustment.
  \*/
  COLORBALANCE = 8,

/\*\*

- Color lookup adjustment.
  \*/
  COLORLOOKUP = 24,

/\*\*

- Curves adjustment.
  \*/
  CURVES = 7,

/\*\*

- Exposure adjustment.
  \*/
  EXPOSURE = 19,

/\*\*

- Gradient fill content.
  \*/
  GRADIENTFILL = 4,

/\*\*

- Gradient map adjustment.
  \*/
  GRADIENTMAP = 13,

/\*\*

- Hue/saturation adjustment.
  \*/
  HUESATURATION = 10,

/\*\*

- Inversion adjustment.
  \*/
  INVERSION = 14,

/\*\*

- 3D content layer.
  \*/
  LAYER3D = 20,

/\*\*

- Levels adjustment.
  \*/
  LEVELS = 6,

/\*\*

- Normal art layer.
  \*/
  NORMAL = 1,

/\*\*

- Pattern fill content.
  \*/
  PATTERNFILL = 5,

/\*\*

- Photo filter adjustment.
  \*/
  PHOTOFILTER = 18,

/\*\*

- Posterize adjustment.
  \*/
  POSTERIZE = 16,

/\*\*

- Selective color adjustment.
  \*/
  SELECTIVECOLOR = 11,

/\*\*

- Smart object content.
  \*/
  SMARTOBJECT = 17,

/\*\*

- Solid color fill.
  \*/
  SOLIDFILL = 3,

/\*\*

- Text content.
  \*/
  TEXT = 2,

/\*\*

- Threshold adjustment.
  \*/
  THRESHOLD = 15,

/\*\*

- Vibrance adjustment.
  \*/
  VIBRANCE = 23,

/\*\*

- Video content.
  \*/
  VIDEO = 21,
  }

/\*\*

- Lists transition types for PDF presentations.
  \*/
  declare enum TransitionType {
  /\*\*
  - Changes images with horizontal stripes, like Venetian blinds.
    \*/
    BLINDSHORIZONTAL = 1,

/\*\*

- Changes images with vertical stripes.
  \*/
  BLINDSVERTICAL = 2,

/\*\*

- Changes images with a shrinking box shape.
  \*/
  BOXIN = 4,

/\*\*

- Changes images with an expanding box shape.
  \*/
  BOXOUT = 5,

/\*\*

- Dissolves one image into the next.
  \*/
  DISSOLVE = 3,

/\*\*

- Dissolves images from top to bottom.
  \*/
  GLITTERDOWN = 6,

/\*\*

- Dissolves images from left to right.
  \*/
  GLITTERRIGHT = 7,

/\*\*

- Dissolves images from top-left to bottom-right.
  \*/
  GLITTERRIGHTDOWN = 8,

/\*\*

- Changes images without a visible transition.
  \*/
  NONE = 9,

/\*\*

- Changes images with random transition effects.
  \*/
  RANDOM = 10,

/\*\*

- Rolls the new images in from the screen's top and bottom.
  \*/
  SPLITHORIZONTALIN = 11,

/\*\*

- Spreads the new image from the screen center toward the top and bottom.
  \*/
  SPLITHORIZONTALOUT = 12,

/\*\*

- Rolls the new image in from the screen's left and right edges.
  \*/
  SPLITVERTICALIN = 13,

/\*\*

- Rolls the new image out from the screen center toward the left and right edges.
  \*/
  SPLITVERTICALOUT = 14,

/\*\*

- Rolls the new image in from the top of the screen.
  \*/
  WIPEDOWN = 15,

/\*\*

- Rolls the new image in from the right side of the screen.
  \*/
  WIPELEFT = 16,

/\*\*

- Rolls the new image in from the left side of the screen.
  \*/
  WIPERIGHT = 17,

/\*\*

- Rolls the new image in from the bottom of the screen.
  \*/
  WIPEUP = 18,
  }

/\*\*

- Font options for text used in web photo galleries.
  \*/
  declare enum GalleryFontType {
  /\*\*
  - Arial typeface.
    \*/
    ARIAL = 1,

/\*\*

- Courier New typeface.
  \*/
  COURIERNEW = 2,

/\*\*

- Helvetica typeface.
  \*/
  HELVETICA = 3,

/\*\*

- Times New Roman typeface.
  \*/
  TIMESNEWROMAN = 4,
  }

/\*\*

- DEPRECATED. Defines image constraints.
  \*/
  declare enum GalleryConstrainType {
  /\*\*
  - Constrains both image height and image width.
    \*/
    CONSTRAINBOTH = 3,

/\*\*

- Constrains image height.
  \*/
  CONSTRAINHEIGHT = 2,

/\*\*

- Constrains image width.
  \*/
  CONSTRAINWIDTH = 1,
  }

/\*\*

- DEPRECATED. Lists web photo gallery thumbnail-size types.
  \*/
  declare enum GalleryThumbSizeType {
  /\*\*
  - Custom thumbnail size.
    \*/
    CUSTOM = 4,

/\*\*

- Large thumbnail size.
  \*/
  LARGE = 3,

/\*\*

- Medium thumbnail size.
  \*/
  MEDIUM = 2,

/\*\*

- Small thumbnail size.
  \*/
  SMALL = 1,
  }

/\*\*

- DEPRECATED. Lists web photo gallery security types.
  \*/
  declare enum GallerySecurityType {
  /\*\*
  - Caption security option.
    \*/
    CAPTION = 5,

/\*\*

- Copyright security option.
  \*/
  COPYRIGHT = 4,

/\*\*

- Credit security option.
  \*/
  CREDIT = 6,

/\*\*

- Custom text security option.
  \*/
  CUSTOMTEXT = 2,

/\*\*

- Filename security option.
  \*/
  FILENAME = 3,

/\*\*

- No security option.
  \*/
  NONE = 1,

/\*\*

- Title security option.
  \*/
  TITLE = 7,
  }

/\*\*

- Identifies the role of text in a Picture Package.
  \*/
  declare enum PicturePackageTextType {
  /\*\*
  - Caption text.
    \*/
    CAPTION = 5,

/\*\*

- Copyright text.
  \*/
  COPYRIGHT = 4,

/\*\*

- Credit text.
  \*/
  CREDIT = 6,

/\*\*

- Filename text.
  \*/
  FILENAME = 3,

/\*\*

- No text.
  \*/
  NONE = 1,

/\*\*

- Origin text.
  \*/
  ORIGIN = 7,

/\*\*

- User-defined text.
  \*/
  USER = 2,
  }
