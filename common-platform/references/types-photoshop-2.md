# Photoshop (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Asks the user whether the item should be saved with the file.
  \*/
  ASKWHENSAVING = 3,

/\*\*

- Never saves the item with the file.
  \*/
  NEVERSAVE = 1,
  }

/\*\*

- Pointer used by these tools: Marquee, Lasso, Polygonal Lasso, and Magic Wand; Crop, Slice, Patch Eyedropper, and Pen; Gradient, Line, Paint Bucket, and Magnetic Lasso; Magnetic Pen, Freeform Pen, Measure, and Color Sampler.
- These labels map to the cursor options below.
  \*/
  declare enum PaintingCursors {
  /\*\*
  - Shows cursors as brush shapes that represent the current brush size. Valid only for painting cursors.
  - Very large brushes may not display brush-size cursors.
    \*/
    BRUSHSIZE = 3,

/\*\*

- Shows pointers as cross hairs.
  \*/
  PRECISE = 2,

/\*\*

- Shows pointers as tool icons.
  \*/
  STANDARD = 1,
  }

/\*\*

- Pointer used by these tools: Eraser, Pencil, Paintbrush, and Healing Brush; Rubber Stamp, Pattern Stamp, Smudge, and Blur; Sharpen, Dodge, Burn, and Sponge.
  \*/
  declare enum OtherPaintingCursors {
  /\*\*
  - Shows pointers as cross hairs.
    \*/
    PRECISEOTHER = 2,

/\*\*

- Shows pointers as tool icons.
  \*/
  STANDARDOTHER = 1,
  }

/\*\*

- Grid-square size.
  \*/
  declare enum GridSize {
  /\*\*
  - Uses large grid squares.
    \*/
    LARGE = 4,

/\*\*

- Uses medium grid squares.
  \*/
  MEDIUM = 3,

/\*\*

- Displays no grid.
  \*/
  NONE = 1,

/\*\*

- Uses small grid squares.
  \*/
  SMALL = 2,
  }

/\*\*

- Ruler increment unit.
  \*/
  declare enum Units {
  /\*\*
  - Centimeter unit.
    \*/
    CM = 3,

/\*\*

- Inch unit.
  \*/
  INCHES = 2,

/\*\*

- Millimeter unit.
  \*/
  MM = 4,

/\*\*

- Percentage unit.
  \*/
  PERCENT = 7,

/\*\*

- Pica unit.
  \*/
  PICAS = 6,

/\*\*

- Pixel unit.
  \*/
  PIXELS = 1,

/\*\*

- Point unit.
  \*/
  POINTS = 5,
  }

/\*\*

- Unit used for type measurement.
  \*/
  declare enum TypeUnits {
  /\*\*
  - Millimeters.
    \*/
    MM = 4,

/\*\*

- Pixels.
  \*/
  PIXELS = 1,

/\*\*

- Points.
  \*/
  POINTS = 5,
  }

/\*\*

- Point system type.
  \*/
  declare enum PointType {
  /\*\*
  - Uses 72 points per inch.
    \*/
    POSTSCRIPT = 1,

/\*\*

- Uses 72.27 points per inch.
  \*/
  TRADITIONAL = 2,
  }

/\*\*

- Nonprinting image-grid line style.
  \*/
  declare enum GridLineStyle {
  /\*\*
  - Dashed.
    \*/
    DASHED = 2,

/\*\*

- Dotted.
  \*/
  DOTTED = 3,

/\*\*

- Solid.
  \*/
  SOLID = 1,
  }

/\*\*

- Nonprinting image-guide line style.
  \*/
  declare enum GuideLineStyle {
  /\*\*
  - Dashed.
    \*/
    DASHED = 2,

/\*\*

- Solid.
  \*/
  SOLID = 1,
  }

/\*\*

- Determines pixel blending behavior in the image.
  \*/
  declare enum BlendMode {
  /\*\*
  - Produces a result color whose luminance comes from the base color and whose hue and saturation come from the blend color. Gray levels remain intact, which helps when coloring monochrome images or tinting color images.
    \*/
    COLORBLEND = 22,

/\*\*

- Reads each channel's color data and increases contrast so the base color darkens toward the blend color. White as the blend color leaves the result unchanged.
  \*/
  COLORBURN = 6,

/\*\*

- Reads channel color data and lowers contrast so the base color brightens toward the blend color. Black as the blend color leaves the result unchanged.
  \*/
  COLORDODGE = 10,

/\*\*

- Compares base and blend colors in each channel, then uses the darker one as the result color. Pixels lighter than the blend color are replaced, while darker pixels stay unchanged.
  \*/
  DARKEN = 4,

/\*\*

- Lighter colors make the result lighter, and darker colors make it darker. A 50% gray blend color leaves the result color unaffected. Reducing fill opacity reduces posterization/thresholding.
  \*/
  DARKERCOLOR = 28,

/\*\*

- In each channel, compares brightness and subtracts the darker side from the lighter side, using either blend minus base or base minus blend. White blending inverts base color values, while black blending changes nothing.
  \*/
  DIFFERENCE = 18,

/\*\*

- Edits or paints every pixel into the result color; the replacement randomly uses either the base color or the blend color according to opacity at that pixel location.
  \*/
  DISSOLVE = 3,

/\*\*

- \*/
  DIVIDE = 30,

/\*\*

- Produces an effect like Difference mode but with reduced contrast. White blending inverts base color values, while black blending changes nothing.
  \*/
  EXCLUSION = 19,

/\*\*

- Multiplies or screens colors according to the blend color, creating an effect like a harsh spotlight. When the blend color, or light source, is lighter than 50% gray, the image becomes lighter as though screened; this helps add highlights. When the blend color is darker than 50% gray, the image becomes darker as though multiplied; this helps add shadows. Painting with pure black or pure white gives pure black or pure white.
  \*/
  HARDLIGHT = 14,

/\*\*

- Lighter colors make the result lighter, and darker colors make it darker. A 50% gray blend color leaves the result color unaffected. Reducing fill opacity reduces posterization/thresholding.
  \*/
  HARDMIX = 26,

/\*\*

- Produces a result color using luminance and saturation from the base color and hue from the blend color.
  \*/
  HUE = 20,

/\*\*

- Compares base and blend colors in each channel, then uses the lighter one as the result color. Pixels darker than the blend color are replaced, while lighter pixels stay unchanged.
  \*/
  LIGHTEN = 8,

/\*\*

- Lighter colors make the result lighter, and darker colors make it darker. A 50% gray blend color leaves the result color unaffected. Reducing fill opacity reduces posterization/thresholding.
  \*/
  LIGHTERCOLOR = 27,

/\*\*

- Reads each channel's color data and decreases brightness so the base color darkens toward the blend color. White as the blend color leaves the result unchanged.
  \*/
  LINEARBURN = 7,

/\*\*

- Reads each channel's color data and increases brightness so the base color brightens toward the blend color. Black as the blend color leaves the result unchanged.
  \*/
  LINEARDODGE = 11,

/\*\*

- Burns or dodges colors by lowering or raising brightness according to the blend color. If the blend color, or light source, is lighter than 50% gray, brightness increases and the image lightens. If it is darker than 50% gray, brightness decreases and the image darkens.
  \*/
  LINEARLIGHT = 16,

/\*\*

- Produces a result color using hue and saturation from the base color and luminance from the blend color. This creates the inverse of Color mode.
  \*/
  LUMINOSITY = 23,

/\*\*

- Reads each channel's color data and multiplies the base color by the blend color, so the result color is always darker. Multiplying with black gives black, while multiplying with white leaves the color unchanged. When painting with a non-black and non-white color, repeated tool strokes make the colors progressively darker. The effect resembles drawing repeatedly over the image with marking pens.
  \*/
  MULTIPLY = 5,

/\*\*

- Edits or paints every pixel into the result color. When working with a bitmapped or indexed-color image, this is called "Threshold".
  \*/
  NORMAL = 2,

/\*\*

- Multiplies or screens colors according to the base color. Patterns or colors are placed over existing pixels while the base color's highlights and shadows are preserved. The base color remains in place and is mixed with the blend color to express the original color's lightness or darkness.
  \*/
  OVERLAY = 12,

/\*\*

- Lets blend modes, advanced blending options, opacity, and fill values on layers inside a set affect layers below that set in the Layers palette.
- Valid only for layer sets. To limit blend modes of layers inside a set, set the layer set's blend mode to Normal.
  \*/
  PASSTHROUGH = 1,

/\*\*

- Replaces colors based on the blend color. For blend colors above 50% gray, the light-source side, pixels darker than that blend are replaced while lighter pixels remain. For blend colors below 50% gray, pixels lighter than that blend are replaced while darker pixels remain. Useful for special effects in an image.
  \*/
  PINLIGHT = 17,

/\*\*

- Produces a result color using luminance and hue from the base color and saturation from the blend color. Painting in an area with no (0) saturation, meaning gray, has no effect.
  \*/
  SATURATION = 21,

/\*\*

- Reads each channel's color data and multiplies the inverse values of the blend and base colors, so the result color is always lighter. Screening with black leaves color unchanged, while screening with white gives white. The effect resembles stacking multiple projected photographic slides.
  \*/
  SCREEN = 9,

/\*\*

- Darkens or lightens colors according to the blend color, with an effect like a diffused spotlight. If the blend color, or light source, is lighter than 50% gray, the image lightens as though dodged. If the blend color is darker than 50% gray, the image darkens as though burned in. Painting with pure black or white creates a clearly darker or lighter area, but not pure black or pure white.
  \*/
  SOFTLIGHT = 13,

/\*\*

- \*/
  SUBTRACT = 29,

/\*\*

- Burns or dodges colors by raising or lowering contrast according to the blend color. If the blend color, or light source, is lighter than 50% gray, lowering contrast lightens the image. If it is darker than 50% gray, raising contrast darkens the image.
  \*/
  VIVIDLIGHT = 15,
  }

/\*\*

- Color blend mode category.
  \*/
  declare enum ColorBlendMode {
  /\*\*
  - Edits or paints only on a layer's transparent area. It works only in layers where transparent pixels locked = false, and is comparable to painting behind transparent areas on acetate.
    \*/
    BEHIND = 24,

/\*\*

- Edits or paints each pixel and turns it transparent. It works only in layers where transparent pixels locked = false.
  \*/
  CLEAR = 25,

/\*\*

- Produces a result color whose luminance comes from the base color and whose hue and saturation come from the blend color. Gray levels remain intact, which helps when coloring monochrome images or tinting color images.
  \*/
  COLOR = 22,

/\*\*

- Reads each channel's color data and increases contrast so the base color darkens toward the blend color. White as the blend color leaves the result unchanged.
  \*/
  COLORBURN = 6,

/\*\*

- Reads channel color data and lowers contrast so the base color brightens toward the blend color. Black as the blend color leaves the result unchanged.
  \*/
  COLORDODGE = 10,

/\*\*

- Compares base and blend colors in each channel, then uses the darker one as the result color. Pixels lighter than the blend color are replaced, while darker pixels stay unchanged.
  \*/
  DARKEN = 4,

/\*\*

- \*/
  DARKERCOLOR = 28,

/\*\*

- In each channel, compares brightness and subtracts the darker side from the lighter side, using either blend minus base or base minus blend. White blending inverts base color values, while black blending changes nothing.
  \*/
  DIFFERENCE = 18,

/\*\*

- Edits or paints every pixel into the result color, which randomly substitutes either the base color or the blend color according to opacity at that pixel location.
  \*/
  DISSOLVE = 3,

/\*\*

- \*/
  DIVIDE = 30,

/\*\*

- Produces an effect like Difference mode but with reduced contrast. White blending inverts base color values, while black blending changes nothing.
  \*/
  EXCLUSION = 19,

/\*\*

- Multiplies or screens colors according to the blend color, creating an effect like a harsh spotlight. When the blend color, or light source, is lighter than 50% gray, the image becomes lighter as though screened; this helps add highlights. When the blend color is darker than 50% gray, the image becomes darker as though multiplied; this helps add shadows. Painting with pure black or pure white gives pure black or pure white.
  \*/
  HARDLIGHT = 14,

/\*\*

- Lighter colors make the result lighter, and darker colors make it darker. A 50% gray blend color leaves the result color unaffected. Reducing fill opacity reduces posterization/thresholding.
  \*/
  HARDMIX = 26,

/\*\*

- Produces a result color using luminance and saturation from the base color and hue from the blend color.
  \*/
  HUE = 20,

/\*\*

- Compares base and blend colors in each channel, then uses the lighter one as the result color. Pixels darker than the blend color are replaced, while lighter pixels stay unchanged.
  \*/
  LIGHTEN = 8,

/\*\*

- \*/
  LIGHTERCOLOR = 27,

/\*\*

- Reads each channel's color data and decreases brightness so the base color darkens toward the blend color. White as the blend color leaves the result unchanged.
  \*/
  LINEARBURN = 7,

/\*\*

- Reads each channel's color data and increases brightness so the base color brightens toward the blend color. Black as the blend color leaves the result unchanged.
  \*/
  LINEARDODGE = 11,

/\*\*

- Burns or dodges colors by lowering or raising brightness according to the blend color. If the blend color, or light source, is lighter than 50% gray, brightness increases and the image lightens. If it is darker than 50% gray, brightness decreases and the image darkens.
  \*/
  LINEARLIGHT = 16,

/\*\*

- Produces a result color using hue and saturation from the base color and luminance from the blend color. This creates the inverse of Color mode.
  \*/
  LUMINOSITY = 23,

/\*\*

- Reads each channel's color data and multiplies the base color by the blend color, so the result color is always darker. Multiplying with black gives black, while multiplying with white leaves the color unchanged. When painting with a non-black and non-white color, repeated tool strokes make the colors progressively darker. The effect resembles drawing repeatedly over the image with marking pens.
  \*/
  MULTIPLY = 5,

/\*\*

- Edits or paints every pixel into the result color. When working with a bitmapped or indexed-color image, this is called "Threshold".
  \*/
  NORMAL = 2,

/\*\*

- Multiplies or screens colors according to the base color. Patterns or colors are placed over existing pixels while the base color's highlights and shadows are preserved. The base color remains in place and is mixed with the blend color to express the original color's lightness or darkness.
  \*/
  OVERLAY = 12,

/\*\*

- Replaces colors based on the blend color. For blend colors above 50% gray, the light-source side, pixels darker than that blend are replaced while lighter pixels remain. For blend colors below 50% gray, pixels lighter than that blend are replaced while darker pixels remain. Useful for special effects in an image.
  \*/
  PINLIGHT = 17,

/\*\*

- Produces a result color using luminance and hue from the base color and saturation from the blend color. Painting in an area with no (0) saturation, meaning gray, has no effect.
  \*/
  SATURATION = 21,

/\*\*

- Reads each channel's color data and multiplies the inverse values of the blend and base colors, so the result color is always lighter. Screening with black leaves color unchanged, while screening with white gives white. The effect resembles stacking multiple projected photographic slides.
  \*/
  SCREEN = 9,

/\*\*

- Darkens or lightens colors according to the blend color, with an effect like a diffused spotlight. If the blend color, or light source, is lighter than 50% gray, the image lightens as though dodged. If the blend color is darker than 50% gray, the image darkens as though burned in. Painting with pure black or white creates a clearly darker or lighter area, but not pure black or pure white.
  \*/
  SOFTLIGHT = 13,

/\*\*

- \*/
  SUBTRACT = 29,

/\*\*

- Burns or dodges colors by raising or lowering contrast according to the blend color. If the blend color, or light source, is lighter than 50% gray, lowering contrast lightens the image. If it is darker than 50% gray, raising contrast darkens the image.
  \*/
  VIVIDLIGHT = 15,
  }

/\*\*

- Layer content category to rasterize.
  \*/
  declare enum RasterizeType {
  /\*\*
  - Converts every vector element on the layer to pixels.
    \*/
    ENTIRELAYER = 5,

/\*\*

- Converts a shape layer's fill to pixels while keeping the vector mask intact.
  \*/
  FILLCONTENT = 3,

/\*\*

- Converts a shape layer's vector mask into a layer mask.
  \*/
  LAYERCLIPPINGPATH = 4,

/\*\*

- Converts the selected layers to pixels.
  \*/
  LINKEDLAYERS = 6,

/\*\*

- Converts a shape layer to pixels.
  \*/
  SHAPE = 2,

/\*\*

- Converts type on a type layer to pixels, without converting other vector data on that layer.
  \*/
  TEXTCONTENTS = 1,
  }

/\*\*

- Placement of paragraph text inside the bounding box.
  \*/
  declare enum Justification {
  /\*\*
  - Centers text on each line.
    \*/
    CENTER = 2,

/\*\*

- Justifies every line except the final one; the final line is centered.
  \*/
  CENTERJUSTIFIED = 5,

/\*\*

- Justifies all lines, with the last line forced justified.
  \*/
  FULLYJUSTIFIED = 7,

/\*\*

- Aligns left edges and leaves the right edge ragged.
  \*/
  LEFT = 1,

/\*\*

- Justifies every line except the final one; the final line aligns left.
  \*/
  LEFTJUSTIFIED = 4,

/\*\*

- Aligns right edges and leaves the left edge ragged.
  \*/
  RIGHT = 3,

/\*\*

- Justifies every line except the final one; the final line aligns right.
  \*/
  RIGHTJUSTIFIED = 6,
  }

/\*\*

- Edge-smoothing method that softens color transitions between edge pixels and background pixels.
  \*/
  declare enum AntiAlias {
  /\*\*
  - Makes type look somewhat sharp.
    \*/
    CRISP = 3,

/\*\*

- Applies no anti-aliasing.
  \*/
  NONE = 1,

/\*\*

- Makes type look sharpest.
  \*/
  SHARP = 2,

/\*\*

- Makes type look smoother.
  \*/
  SMOOTH = 5,

/\*\*

- Makes type look heavier.
  \*/
  STRONG = 4,
  }

/\*\*

- Capitalization option.
  \*/
  declare enum Case {
  /\*\*
  - Sets all letters to uppercase.
    \*/
    ALLCAPS = 2,

/\*\*

- Allows both uppercase and lowercase letters.
  \*/
  NORMAL = 1,

/\*\*

- Formats lowercase letters as small caps.
  \*/
  SMALLCAPS = 3,
  }

/\*\*

- Language selection.
  \*/
  declare enum Language {
  /\*\*
  - Brazillian Portuguese language.
    \*/
    BRAZILLIANPORTUGUESE = 13,

/\*\*

- Canadian French language.
  \*/
  CANADIANFRENCH = 4,

/\*\*

- Danish language.
  \*/
  DANISH = 17,

/\*\*

- Dutch language.
  \*/
  DUTCH = 16,

/\*\*

- British English locale.
  \*/
  ENGLISHUK = 2,

/\*\*

- American English locale.
  \*/
  ENGLISHUSA = 1,

/\*\*

- Finnish language.
  \*/
  FINNISH = 5,

/\*\*

- French language.
  \*/
  FRENCH = 3,

/\*\*

- German language.
  \*/
  GERMAN = 6,

/\*\*

- Italian language.
  \*/
  ITALIAN = 9,

/\*\*

- Norwegian language.
  \*/
  NORWEGIAN = 10,

/\*\*

- Nynorsk Norwegian locale.
  \*/
  NYNORSKNORWEGIAN = 11,

/\*\*

- Older German spelling.
  \*/
  OLDGERMAN = 7,

/\*\*

- Portuguese language setting.
  \*/
  PORTUGUESE = 12,

/\*\*

- Spanish language setting.
  \*/
  SPANISH = 14,

/\*\*

- Swedish language setting.
  \*/
  SWEDISH = 15,

/\*\*

- Swiss German locale.
  \*/
  SWISSGERMAN = 8,
  }

/\*\*

- Identifies the text object category.
  \*/
  declare enum TextType {
  /\*\*
  - Text constrained to wrap inside a bounding box.
    \*/
    PARAGRAPHTEXT = 2,

/\*\*

- Text placed without automatic wrapping.
  \*/
  POINTTEXT = 1,
  }

/\*\*

- Specifies the text warp style.
  \*/
  declare enum WarpStyle {
  /\*\*
  - Warps type into an arc shape.
    \*/
    ARC = 2,

/\*\*

- Shapes the text as an arch.
  \*/
  ARCH = 5,

/\*\*

- Makes the lower or left side of the text carry the stronger warp.
  \*/
  ARCLOWER = 3,

/\*\*

- Makes the upper or right side of the text carry the stronger warp.
  \*/
  ARCUPPER = 4,

/\*\*

- Pushes text outward along both vertical or horizontal edges.
  \*/
  BULGE = 6,

/\*\*

- Forms the warped text into a fish shape.
  \*/
  FISH = 11,

/\*\*

- Bulges text near the center while compressing the sides, like a fisheye view.
  \*/
  FISHEYE = 13,

/\*\*

- Gives the text a waving-flag form.
  \*/
  FLAG = 9,

/\*\*

- Inflates the text.
  \*/
  INFLATE = 14,

/\*\*

- Applies no warp.
  \*/
  NONE = 1,

/\*\*

- Bends text into an undulating upward pattern.
  \*/
  RISE = 12,

/\*\*

- Bends text downward or rightward into a fan-shaped shell.
  \*/
  SHELLLOWER = 7,

/\*\*

- Bends text upward or leftward into a fan-shaped shell.
  \*/
  SHELLUPPER = 8,

/\*\*

- Compresses the text.
  \*/
  SQUEEZE = 15,

/\*\*

- Twists the text.
  \*/
  TWIST = 16,

/\*\*

- Warps text into a wave form.
  \*/
  WAVE = 10,
  }

/\*\*

- Specifies the composer used for text.
  \*/
  declare enum TextComposer {
  /\*\*
  - Reviews candidate line breaks across a span of lines, so earlier lines can be adjusted to avoid poor breaks later in the paragraph. The result is typically steadier spacing with fewer hyphens.
  - The Adobe Every-line composer finds possible breakpoints, scores them, and applies weighted penalties under these rules: even letter and word spacing receives the highest priority; candidate breakpoints are judged by how far they move away from ideal spacing; hyphenation is avoided where possible; breakpoints that need hyphens receive heavier penalties than breaks with uneven spacing; stronger breakpoints are chosen ahead of weaker ones.
    \*/
    ADOBEEVERYLINE = 2,

/\*\*

- Composes type with the older one-line-at-a-time method. Use it when you want direct control over individual line breaks.
- Breakpoint selection follows these rules: adjusted word spacing is preferred over hyphenation; hyphenation is preferred over adjusted letter spacing; when spacing must change, compression is favored before expansion.
  \*/
  ADOBESINGLELINE = 1,
  }

/\*\*

- Selects the kerning method for characters.
  \*/
  declare enum AutoKernType {
  /\*\*
  - Permits manual kerning.
    \*/
    MANUAL = 1,

/\*\*

- Applies kern pairs containing spacing data for particular letter pairs.
  \*/
  METRICS = 2,

/\*\*

- Spaces adjacent characters according to their shapes.
  \*/
  OPTICAL = 3,
  }

/\*\*

- Defines the strikethrough style.
  \*/
  declare enum StrikeThruType {
  /\*\*
  - For vertical type, places the strikethrough through the em box.
    \*/
    STRIKEBOX = 3,

/\*\*

- For vertical type, places the strikethrough through the text height.
  \*/
  STRIKEHEIGHT = 2,

/\*\*

- Disables strikethrough.
  \*/
  STRIKEOFF = 1,
  }

/\*\*

- Defines the underline style.
  \*/
  declare enum UnderlineType {
  /\*\*
  - For vertical type, places the underline on the text's left side.
    \*/
    UNDERLINELEFT = 3,

/\*\*

- Disables underline.
  \*/
  UNDERLINEOFF = 1,
