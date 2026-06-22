# Indesign (part 61)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- String-valued property available for arbitrary text.
  \*/
  label: string

/\*\*

- Resolution used for vector objects rasterized during flattening. (Range: 1 to 9600) For details, see raster vector balance.
  \*/
  lineArtAndTextResolution: number

/\*\*

- Name assigned to the FlattenerPreset.
  \*/
  name: string

/\*\*

- Parent object for the FlattenerPreset (a Application).
  \*/
  readonly parent: Application

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- How much vector artwork is rasterized during flattening, given as an enumerator or a percentage from 0 to 100.
  \*/
  rasterVectorBalance: FlattenerLevel | number

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate FlattenerPreset.
  \*/
  duplicate(): FlattenerPreset

/\*\*

- Reads the label value stored for the given key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): FlattenerPreset[]

/\*\*

- Stores a label value under the specified key.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the FlattenerPreset.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces executable source text that returns the FlattenerPreset.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing transparency flattener presets.
  \*/
  declare class FlattenerPresets {
  /\*\*
  - Count of objects in this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the FlattenerPreset at the specified index.
- @param index Index to retrieve.
  \*/
  [index: number]: FlattenerPreset

/\*\*

- Builds a new FlattenerPreset.
- @param withProperties Initial property values for the new FlattenerPreset
  \*/
  add(withProperties: object): FlattenerPreset

/\*\*

- Retrieves any FlattenerPreset from the collection.
  \*/
  anyItem(): FlattenerPreset

/\*\*

- Reports how many elements the FlattenerPreset collection contains.
  \*/
  count(): number

/\*\*

- Retrieves all FlattenerPreset objects in the collection.
  \*/
  everyItem(): FlattenerPreset[]

/\*\*

- Retrieves the first FlattenerPreset in the collection.
  \*/
  firstItem(): FlattenerPreset

/\*\*

- Retrieves the FlattenerPreset identified by index or name.
- @param index Index or name to use.
  \*/
  item(index: number | string): FlattenerPreset

/\*\*

- Retrieves the FlattenerPreset identified by ID.
- @param id ID to use.
  \*/
  itemByID(id: number): FlattenerPreset

/\*\*

- Retrieves the FlattenerPreset identified by name.
- @param name Name to use.
  \*/
  itemByName(name: string): FlattenerPreset

/\*\*

- Retrieves FlattenerPresets from a specified range.
- @param from FlattenerPreset, index, or name that starts the range.
- @param to FlattenerPreset, index, or name that ends the range.
  \*/
  itemByRange(from: FlattenerPreset | number | string, to: FlattenerPreset | number | string): FlattenerPreset[]

/\*\*

- Retrieves the last FlattenerPreset in the collection.
  \*/
  lastItem(): FlattenerPreset

/\*\*

- Retrieves the middle FlattenerPreset in the collection.
  \*/
  middleItem(): FlattenerPreset

/\*\*

- Retrieves the FlattenerPreset whose index comes after the supplied FlattenerPreset in the collection.
- @param obj FlattenerPreset whose index precedes the requested FlattenerPreset.
  \*/
  nextItem(obj: FlattenerPreset): FlattenerPreset

/\*\*

- Retrieves the FlattenerPreset with the index before the supplied index.
- @param obj Index of the FlattenerPreset that follows the requested FlattenerPreset.
  \*/
  previousItem(obj: FlattenerPreset): FlattenerPreset

/\*\*

- Produces executable source text that returns the FlattenerPreset.
  \*/
  toSource(): string
  }

/\*\*

- Preferences for transparency flattening.
  \*/
  declare class FlattenerPreference extends Preference {
  /\*\*
  - When true, boundaries between vector artwork and rasterized artwork are forced onto object paths.
    \*/
    clipComplexRegions: boolean

/\*\*

- When true, every stroke is converted to an outline, keeping stroke widths unchanged through flattening. Note: thin strokes can look slightly heavier than the original. This applies to all strokes, not just transparency-related strokes.
  \*/
  convertAllStrokesToOutlines: boolean

/\*\*

- When true, text on spreads with transparency becomes outlines and type glyph data is discarded, preserving text stroke width during flattening. Note: small fonts can appear slightly heavier in Acrobat or on low-quality desktop printers, while high-resolution printers or imagesetters keep type quality unaffected.
  \*/
  convertAllTextToOutlines: boolean

/\*\*

- Resolution for gradients rasterized by flattening and for printed or exported drop shadows and feathers. (Range: 0 to 1200) Note: Values above 300 ppi usually add file size and printing time without improving image quality.
  \*/
  gradientAndMeshResolution: number

/\*\*

- Resolution used for vector objects rasterized during flattening. (Range: 1 to 9600) For details, see raster vector balance.
  \*/
  lineArtAndTextResolution: number

/\*\*

- How much vector artwork is rasterized during flattening, given as an enumerator or a percentage from 0 to 100.
  \*/
  rasterVectorBalance: FlattenerLevel | number
  }

/\*\*

- Preference values for transparency.
  \*/
  declare class TransparencyPreference extends Preference {
  /\*\*
  - Color space used when transparent object colors are blended.
    \*/
    blendingSpace: BlendingSpace

/\*\*

- Global light altitude. (Range: 0 to 90)
  \*/
  globalLightAltitude: number

/\*\*

- Global light angle. (Range: -360 to 360)
  \*/
  globalLightAngle: number
  }

/\*\*

- Transparency-related settings.
  \*/
  declare class TransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: BevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: BlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: DirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: DropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: GradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: InnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: InnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: OuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: SatinSetting
  }

/\*\*

- Transparency settings applied to the parent object's stroke.
  \*/
  declare class StrokeTransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: BevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: BlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: DirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: DropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: GradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: InnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: InnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: OuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: SatinSetting
  }

/\*\*

- Transparency settings applied to the parent object's fill.
  \*/
  declare class FillTransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: BevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: BlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: DirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: DropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: GradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: InnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: InnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: OuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: SatinSetting
  }

/\*\*

- Core settings for object blending.
  \*/
  declare class BlendingSetting extends Preference {
  /\*\*
  - BlendMode determining how the base color combines with the BlendingSetting color.
    \*/
    blendMode: BlendMode

/\*\*

- True limits blending to the group; false also blends with objects underneath that group.
  \*/
  isolateBlending: boolean

/\*\*

- True marks the BlendingSetting as a knockout group.
  \*/
  knockoutGroup: boolean

/\*\*

- BlendingSetting fill opacity, expressed as a percentage. (Range: 0 to 100)
  \*/
  opacity: number
  }

/\*\*

- Settings for drop shadow effects.
  \*/
  declare class DropShadowSetting extends Preference {
  /\*\*
  - Angle used to cast the shadow
    \*/
    angle: number

/\*\*

- BlendMode used by the drop shadow effect.
  \*/
  blendMode: BlendMode

/\*\*

- Distance separating the item from its shadow
  \*/
  distance: number | string

/\*\*

- Drop shadow color. Use either an array of color values or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
  \*/
  effectColor: Swatch

/\*\*

- When true, the drop shadow accounts for other non-shadow effects.
  \*/
  honorOtherEffects: boolean

/\*\*

- When true, the layer knocks out the drop shadow.
  \*/
  knockedOut: boolean

/\*\*

- Shadow mode value.
  \*/
  mode: ShadowMode

/\*\*

- Noise added to the shadow, as a percentage. (Range: 0 to 100)
  \*/
  noise: number

/\*\*

- Drop shadow opacity as a percentage. (Range: 0 to 100)
  \*/
  opacity: number

/\*\*

- Blur radius for the drop shadow, in pixels. (Allowed range by unit: points 0 to 144; picas 0p0 to 12p0; inches 0 to 2; mm 0 to 50.08; cm 0 to 5.08; ciceros 0c0 to 11c3.128.)
  \*/
  size: number | string

/\*\*

- Percentage of blur width used to expand the drop shadow footprint and shrink the blur radius. (Range: 0 to 100)
  \*/
  spread: number

/\*\*

- When true, the global light angle is used.
  \*/
  useGlobalLight: boolean

/\*\*

- Horizontal offset for the drop shadow. Unit-specific limits: points -1000 to 1000; picas -83p4 to 83p4; inches -13.8889 to 13.8889; mm -352.778 to 352.778; cm -35.277 to 35.277; ciceros -78c2.389 to 78c2.389.
  \*/
  xOffset: number | string

/\*\*

- Vertical offset for the drop shadow. (Unit-specific limits: points -1000 to 1000; picas -83p4 to 83p4; inches -13.8889 to 13.8889; mm -352.778 to 352.778; cm -35.277 to 35.277; ciceros -78c2.389 to 78c2.389)
  \*/
  yOffset: number | string
  }

/\*\*

- Settings for feather effects.
  \*/
  declare class FeatherSetting extends Preference {
  /\*\*
  - Amount used to choke the feather, as a percentage of feather width. (Range: 0 to 100)
    \*/
    chokeAmount: number

/\*\*

- Corner effect used by the feather.
  \*/
  cornerType: FeatherCornerType

/\*\*

- Feather mode value.
  \*/
  mode: FeatherMode

/\*\*

- Noise added to the feather, as a percentage. (Range: 0 to 100)
  \*/
  noise: number

/\*\*

- Feather width. (Unit-specific limits: points 0 to 1000; picas 0 to 83p4; inches 0 to 13.8889; mm 0 to 352.778; cm 0 to 35.277; ciceros 0 to 78c2.389.)
  \*/
  width: number | string
  }

/\*\*

- Settings for inner shadow effects.
  \*/
  declare class InnerShadowSetting extends Preference {
  /\*\*
  - Angle used to cast the inner shadow. (Range: -360 to 360)
    \*/
    angle: number

/\*\*

- When true, the inner shadow effect is active.
  \*/
  applied: boolean

/\*\*

- BlendMode used by the inner shadow effect.
  \*/
  blendMode: BlendMode

/\*\*

- Inner shadow choke, measured as a percent of shadow size. (Range: 0 to 100)
  \*/
  chokeAmount: number

/\*\*

- Distance separating the InnerShadowSetting from the shadow.
  \*/
  distance: number | string

/\*\*

- Inner shadow color. Use either an array of color values or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
  \*/
  effectColor: Swatch

/\*\*

- Noise amount added to the shadow, as a percentage. (Range: 0 to 100)
  \*/
  noise: number

/\*\*

- Inner shadow opacity expressed as a percentage. (Range: 0 to 100)
  \*/
  opacity: number

/\*\*

- Size value for the inner shadow.
  \*/
  size: number | string

/\*\*

- When true, the global light angle is used.
  \*/
  useGlobalLight: boolean

/\*\*

- Horizontal shadow offset
  \*/
  xOffset: number | string

/\*\*

- Vertical shadow offset
  \*/
  yOffset: number | string
  }

/\*\*

- Settings for outer glow effects.
  \*/
  declare class OuterGlowSetting extends Preference {
  /\*\*
  - When true, the outer glow effect is active.
    \*/
    applied: boolean

/\*\*

- BlendMode used by the outer glow effect.
  \*/
  blendMode: BlendMode

/\*\*

- Outer glow color. Use either an array of color values or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
  \*/
  effectColor: Swatch

/\*\*

- Noise added to the outer glow, as a percentage. (Range: 0 to 100)
  \*/
  noise: number

/\*\*

- Outer glow opacity expressed as a percentage. (Range: 0 to 100)
  \*/
  opacity: number

/\*\*

- Size value for the outer glow.
  \*/
  size: number | string

/\*\*

- Spread amount, as a percentage of outer glow size. (Range: 0 to 100)
  \*/
  spread: number

/\*\*

- Technique used by the outer glow.
  \*/
  technique: GlowTechnique
  }

/\*\*

- Settings for inner glow effects.
  \*/
  declare class InnerGlowSetting extends Preference {
  /\*\*
  - When true, the inner glow effect is active.
    \*/
    applied: boolean

/\*\*

- BlendMode used by the inner glow effect.
  \*/
  blendMode: BlendMode

/\*\*

- Inner glow color. Use either an array of color values or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
  \*/
  effectColor: Swatch

/\*\*

- Noise added to the inner glow, as a percentage. (Range: 0 to 100)
  \*/
  noise: number

/\*\*

- Inner glow opacity expressed as a percentage. (Range: 0 to 100)
  \*/
  opacity: number

/\*\*

- Size value for the inner glow.
  \*/
  size: number | string

/\*\*

- Light source used by the inner glow effect.
  \*/
  source: InnerGlowSource

/\*\*

- Spread amount, as a percentage of inner glow size. (Range: 0 to 100)
  \*/
  spread: number

/\*\*

- Technique used by the inner glow.
  \*/
  technique: GlowTechnique
  }

/\*\*

- Settings for bevel and emboss effects.
  \*/
  declare class BevelAndEmbossSetting extends Preference {
  /\*\*
  - Light source altitude. (Range: 0 to 90)
    \*/
    altitude: number

/\*\*

- Light source angle. (Range: -180 to 180)
  \*/
  angle: number

/\*\*

- When true, the bevel or emboss effect is active.
  \*/
  applied: boolean

/\*\*

- Bevel or emboss depth as a percentage. (Range: 0 to 1000)
  \*/
  depth: number

/\*\*

- Direction used by the bevel or emboss.
  \*/
  direction: BevelAndEmbossDirection

/\*\*

- BlendMode for the effect highlight portion.
  \*/
  highlightBlendMode: BlendMode

/\*\*

- Highlight portion color. Use an array of color values, a hex value, a color library color, or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127; HSB uses [H,S,B], where H is 0 to 360 and S and B are percentages from 0 to 100.
  \*/
  highlightColor: Swatch

/\*\*

- Highlight portion opacity, expressed as a percentage. (Range: 0 to 100)
  \*/
  highlightOpacity: number

/\*\*

- BlendMode for the effect shadow portion.
  \*/
  shadowBlendMode: BlendMode

/\*\*

- Shadow portion color. Use an array of color values, a hex value, a color library color, or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127; HSB uses [H,S,B], where H is 0 to 360 and S and B are percentages from 0 to 100.
  \*/
  shadowColor: Swatch

/\*\*

- Shadow portion opacity, expressed as a percentage. (Range: 0 to 100)
  \*/
  shadowOpacity: number

/\*\*

- Size value for the bevel or emboss.
  \*/
  size: number | string

/\*\*

- Softening amount, in pixels.
  \*/
  soften: number | string

/\*\*

- Bevel or emboss style.
  \*/
  style: BevelAndEmbossStyle

/\*\*

- Edging technique used for the bevel or emboss.
  \*/
  technique: BevelAndEmbossTechnique

/\*\*

- When true, the global light source is used.
  \*/
  useGlobalLight: boolean
  }

/\*\*

- Settings for satin effects.
  \*/
  declare class SatinSetting extends Preference {
  /\*\*
  - Satin effect light angle. (Range: -360 to 360)
    \*/
    angle: number

/\*\*

- When true, the satin effect is applied.
  \*/
  applied: boolean

/\*\*

- BlendMode used by the satin effect.
  \*/
  blendMode: BlendMode

/\*\*

- Pixel distance between SatinSetting and the satin effect.
  \*/
  distance: number | string
