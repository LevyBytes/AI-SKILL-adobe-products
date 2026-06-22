# Indesign (part 10)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Provides the central GradientStop entry in this collection.
  \*/
  middleItem(): GradientStop

/\*\*

- Provides the GradientStop positioned after the supplied GradientStop.
- @param obj GradientStop placed before the target GradientStop.
  \*/
  nextItem(obj: GradientStop): GradientStop

/\*\*

- Provides the GradientStop positioned before the supplied index.
- @param obj Index of the GradientStop placed after the target GradientStop.
  \*/
  previousItem(obj: GradientStop): GradientStop

/\*\*

- Builds source text that evaluates back to the GradientStop.
  \*/
  toSource(): string
  }

/\*\*

- Swatch object for color, gradient, tint, or mixed ink data.
  \*/
  declare class Swatch {
  /\*\*
  - EventListeners attached to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events attached to this object.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the Swatch.
  \*/
  readonly id: number

/\*\*

- Swatch index inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued label property.
  \*/
  label: string

/\*\*

- Swatch name.
  \*/
  name: string

/\*\*

- Parent object for the Swatch, either a Application or Document.
  \*/
  readonly parent: any

/\*\*

- ColorGroup membership for the swatch.
  \*/
  readonly parentColorGroup: ColorGroup

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate Swatch.
  \*/
  duplicate(): Swatch

/\*\*

- Gets the label value stored for the supplied key.
- @param key Key selector.
  \*/
  extractLabel(key: string): string

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): Swatch[]

/\*\*

- Stores a label value for the supplied key.
- @param key Key selector.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Combines the specified swatches into this swatch.
- @param with* Swatches selected for merging.
  \*/
  merge(with*: Swatch[] | Swatch | string): Swatch

/\*\*

- Deletes this swatch.
- @param replacingWith Swatch applied where the deleted swatch had been used.
  \*/
  remove(replacingWith: Swatch): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler value.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to the Swatch.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Swatch objects grouped as a collection.
  \*/
  declare class Swatches {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Swatch by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: Swatch

/\*\*

- Chooses any Swatch from the collection.
  \*/
  anyItem(): Swatch

/\*\*

- Reports how many Swatch elements are present.
  \*/
  count(): number

/\*\*

- Provides all Swatch entries from the collection.
  \*/
  everyItem(): Swatch[]

/\*\*

- Provides the first Swatch entry in this collection.
  \*/
  firstItem(): Swatch

/\*\*

- Finds a Swatch by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Swatch

/\*\*

- Finds the Swatch associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): Swatch

/\*\*

- Finds the Swatch associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): Swatch

/\*\*

- Provides Swatches across the requested range.
- @param from Swatch, index, or name that starts the range.
- @param to Swatch, index, or name that ends the range.
  \*/
  itemByRange(from: Swatch | number | string, to: Swatch | number | string): Swatch[]

/\*\*

- Provides the final Swatch entry in this collection.
  \*/
  lastItem(): Swatch

/\*\*

- Provides the central Swatch entry in this collection.
  \*/
  middleItem(): Swatch

/\*\*

- Provides the Swatch positioned after the supplied Swatch.
- @param obj Swatch placed before the target Swatch.
  \*/
  nextItem(obj: Swatch): Swatch

/\*\*

- Provides the Swatch positioned before the supplied index.
- @param obj Index of the Swatch placed after the target Swatch.
  \*/
  previousItem(obj: Swatch): Swatch

/\*\*

- Builds source text that evaluates back to the Swatch.
  \*/
  toSource(): string
  }

/\*\*

- Color swatch object.
  \*/
  declare class Color extends Swatch {
  /\*\*
  - Ink values used to define the color, given per ink as percentages. Note: the color space determines how many values are required and what limits apply. RGB uses three values, each 0 to 255; CMYK uses four values for C, M, Y, and K, each 0 to 100; LAB uses three values for L (Range: 0 to 100), A (Range: -128 to 127), and B (Range: -128 to 127); mixed ink uses one value for every ink in inkList, each 0 to 100.
    \*/
    colorValue: number[]

/\*\*

- ColorModel assigned to the swatch.
  \*/
  model: ColorModel

/\*\*

- ColorSpace assigned to the swatch.
  \*/
  space: ColorSpace
  }

/\*\*

- Color objects grouped as a collection.
  \*/
  declare class Colors {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Color by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: Color

/\*\*

- Constructs a Color.
- @param withProperties Starting property values for the Color being created
  \*/
  add(withProperties: object): Color

/\*\*

- Chooses any Color from the collection.
  \*/
  anyItem(): Color

/\*\*

- Reports how many Color elements are present.
  \*/
  count(): number

/\*\*

- Provides all Color entries from the collection.
  \*/
  everyItem(): Color[]

/\*\*

- Provides the first Color entry in this collection.
  \*/
  firstItem(): Color

/\*\*

- Finds a Color by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Color

/\*\*

- Finds the Color associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): Color

/\*\*

- Finds the Color associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): Color

/\*\*

- Provides Colors across the requested range.
- @param from Color, index, or name that starts the range.
- @param to Color, index, or name that ends the range.
  \*/
  itemByRange(from: Color | number | string, to: Color | number | string): Color[]

/\*\*

- Provides the final Color entry in this collection.
  \*/
  lastItem(): Color

/\*\*

- Provides the central Color entry in this collection.
  \*/
  middleItem(): Color

/\*\*

- Provides the Color positioned after the supplied Color.
- @param obj Color placed before the target Color.
  \*/
  nextItem(obj: Color): Color

/\*\*

- Provides the Color positioned before the supplied index.
- @param obj Index of the Color placed after the target Color.
  \*/
  previousItem(obj: Color): Color

/\*\*

- Builds source text that evaluates back to the Color.
  \*/
  toSource(): string
  }

/\*\*

- Tint swatch object.
  \*/
  declare class Tint extends Color {
  /\*\*
  - Base Color used by the tint.
    \*/
    readonly baseColor: Color

/\*\*

- Base-color percentage for the tint. (Range: 0 to 100)
  \*/
  tintValue: number
  }

/\*\*

- Tint objects grouped as a collection.
  \*/
  declare class Tints {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Tint by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: Tint

/\*\*

- Constructs a tint swatch.
- @param baseColor Color used as the tint basis.
- @param withProperties Starting property values for the Tint being created
  \*/
  add(baseColor: Color, withProperties: object): Tint

/\*\*

- Chooses any Tint from the collection.
  \*/
  anyItem(): Tint

/\*\*

- Reports how many Tint elements are present.
  \*/
  count(): number

/\*\*

- Provides all Tint entries from the collection.
  \*/
  everyItem(): Tint[]

/\*\*

- Provides the first Tint entry in this collection.
  \*/
  firstItem(): Tint

/\*\*

- Finds a Tint by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Tint

/\*\*

- Finds the Tint associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): Tint

/\*\*

- Finds the Tint associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): Tint

/\*\*

- Provides Tints across the requested range.
- @param from Tint, index, or name that starts the range.
- @param to Tint, index, or name that ends the range.
  \*/
  itemByRange(from: Tint | number | string, to: Tint | number | string): Tint[]

/\*\*

- Provides the final Tint entry in this collection.
  \*/
  lastItem(): Tint

/\*\*

- Provides the central Tint entry in this collection.
  \*/
  middleItem(): Tint

/\*\*

- Provides the Tint positioned after the supplied Tint.
- @param obj Tint placed before the target Tint.
  \*/
  nextItem(obj: Tint): Tint

/\*\*

- Provides the Tint positioned before the supplied index.
- @param obj Index of the Tint placed after the target Tint.
  \*/
  previousItem(obj: Tint): Tint

/\*\*

- Builds source text that evaluates back to the Tint.
  \*/
  toSource(): string
  }

/\*\*

- ColorGroup object.
  \*/
  declare class ColorGroup {
  /\*\*
  - ColorGroupSwatches owned by this color group.
    \*/
    readonly colorGroupSwatches: ColorGroupSwatches

/\*\*

- EventListeners attached to this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events attached to this object.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the ColorGroup.
  \*/
  readonly id: number

/\*\*

- ColorGroup index inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued label property.
  \*/
  label: string

/\*\*

- ColorGroup name.
  \*/
  name: string

/\*\*

- Parent object for the ColorGroup, either a Application or Document.
  \*/
  readonly parent: any

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate ColorGroup.
  \*/
  duplicate(): ColorGroup

/\*\*

- Gets the label value stored for the supplied key.
- @param key Key selector.
  \*/
  extractLabel(key: string): string

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): ColorGroup[]

/\*\*

- Stores a label value for the supplied key.
- @param key Key selector.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this ColorGroup.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler value.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to the ColorGroup.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Separates a color group into individual members.
  \*/
  ungroup(): void
  }

/\*\*

- ColorGroup objects grouped as a collection.
  \*/
  declare class ColorGroups {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a ColorGroup by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: ColorGroup

/\*\*

- Constructs a ColorGroup.
- @param name Color group name value.
- @param swatchList Swatches added to the color group.
- @param withProperties Starting property values for the ColorGroup being created
  \*/
  add(name: string, swatchList: Swatch[], withProperties: object): ColorGroup

/\*\*

- Chooses any ColorGroup from the collection.
  \*/
  anyItem(): ColorGroup

/\*\*

- Reports how many ColorGroup elements are present.
  \*/
  count(): number

/\*\*

- Provides all ColorGroup entries from the collection.
  \*/
  everyItem(): ColorGroup[]

/\*\*

- Provides the first ColorGroup entry in this collection.
  \*/
  firstItem(): ColorGroup

/\*\*

- Finds a ColorGroup by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): ColorGroup

/\*\*

- Finds the ColorGroup associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): ColorGroup

/\*\*

- Finds the ColorGroup associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): ColorGroup

/\*\*

- Provides ColorGroups across the requested range.
- @param from ColorGroup, index, or name that starts the range.
- @param to ColorGroup, index, or name that ends the range.
  \*/
  itemByRange(from: ColorGroup | number | string, to: ColorGroup | number | string): ColorGroup[]

/\*\*

- Provides the final ColorGroup entry in this collection.
  \*/
  lastItem(): ColorGroup

/\*\*

- Provides the central ColorGroup entry in this collection.
  \*/
  middleItem(): ColorGroup

/\*\*

- Provides the ColorGroup positioned after the supplied ColorGroup.
- @param obj ColorGroup placed before the target ColorGroup.
  \*/
  nextItem(obj: ColorGroup): ColorGroup

/\*\*

- Provides the ColorGroup positioned before the supplied index.
- @param obj Index of the ColorGroup placed after the target ColorGroup.
  \*/
  previousItem(obj: ColorGroup): ColorGroup

/\*\*

- Builds source text that evaluates back to the ColorGroup.
  \*/
  toSource(): string
  }

/\*\*

- ColorGroupSwatch object.
  \*/
  declare class ColorGroupSwatch {
  /\*\*
  - EventListeners attached to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events attached to this object.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the ColorGroupSwatch.
  \*/
  readonly id: number

/\*\*

- ColorGroupSwatch index inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent ColorGroup for this ColorGroupSwatch.
  \*/
  readonly parent: ColorGroup

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Referenced underlying swatch item.
  \*/
  readonly swatchItemRef: Swatch

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): ColorGroupSwatch[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler value.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to the ColorGroupSwatch.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- ColorGroupSwatch objects grouped as a collection.
  \*/
  declare class ColorGroupSwatches {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a ColorGroupSwatch by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: ColorGroupSwatch

/\*\*

- Adds a color group swatch.
- @param swatchItemRef Swatch to place in the color group.
- @param withProperties Starting property values for the ColorGroupSwatch being created
  \*/
  add(swatchItemRef: Swatch, withProperties: object): ColorGroupSwatch

/\*\*

- Chooses any ColorGroupSwatch from the collection.
  \*/
  anyItem(): ColorGroupSwatch

/\*\*

- Reports how many ColorGroupSwatch elements are present.
  \*/
  count(): number

/\*\*

- Provides all ColorGroupSwatch entries from the collection.
  \*/
  everyItem(): ColorGroupSwatch[]

/\*\*

- Provides the first ColorGroupSwatch entry in this collection.
  \*/
  firstItem(): ColorGroupSwatch

/\*\*

- Finds a ColorGroupSwatch by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): ColorGroupSwatch

/\*\*

- Finds the ColorGroupSwatch associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): ColorGroupSwatch

/\*\*

- Provides ColorGroupSwatches across the requested range.
- @param from ColorGroupSwatch, index, or name that starts the range.
- @param to ColorGroupSwatch, index, or name that ends the range.
  \*/
  itemByRange(from: ColorGroupSwatch | number | string, to: ColorGroupSwatch | number | string): ColorGroupSwatch[]

/\*\*

- Provides the final ColorGroupSwatch entry in this collection.
  \*/
  lastItem(): ColorGroupSwatch

/\*\*

- Provides the central ColorGroupSwatch entry in this collection.
  \*/
  middleItem(): ColorGroupSwatch

/\*\*

- Provides the ColorGroupSwatch positioned after the supplied ColorGroupSwatch.
- @param obj ColorGroupSwatch placed before the target ColorGroupSwatch.
  \*/
  nextItem(obj: ColorGroupSwatch): ColorGroupSwatch

/\*\*

- Provides the ColorGroupSwatch positioned before the supplied index.
- @param obj Index of the ColorGroupSwatch placed after the target ColorGroupSwatch.
  \*/
  previousItem(obj: ColorGroupSwatch): ColorGroupSwatch

/\*\*

- Builds source text that evaluates back to the ColorGroupSwatch.
  \*/
  toSource(): string
  }

/\*\*

- OpacityGradientStop object.
  \*/
  declare class OpacityGradientStop {
  /\*\*
  - EventListeners attached to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events attached to this object.
  \*/
  readonly events: Events

/\*\*

- OpacityGradientStop index inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Opacity-gradient-stop location, as a percentage of OpacityGradientStop size. (Range: 0 to 100)
  \*/
  location: number

/\*\*

- Opacity-gradient-stop midpoint, as a percentage of OpacityGradientStop size. (Range: 13 to 87)
  \*/
  midpoint: number

/\*\*

- Opacity value for the opacity gradient stop, expressed as a percentage. (Range: 0 to 100)
  \*/
  opacity: number

/\*\*

- Parent object for the OpacityGradientStop, either GradientFeatherSetting or FindChangeGradientFeatherSetting.
  \*/
  readonly parent: any

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): OpacityGradientStop[]

/\*\*

- Deletes this OpacityGradientStop.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler value.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to the OpacityGradientStop.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- OpacityGradientStop objects grouped as a collection.
  \*/
  declare class OpacityGradientStops {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a OpacityGradientStop by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: OpacityGradientStop

/\*\*

- Constructs a OpacityGradientStop.
- @param withProperties Starting property values for the OpacityGradientStop being created
  \*/
  add(withProperties: object): OpacityGradientStop

/\*\*

- Chooses any OpacityGradientStop from the collection.
  \*/
  anyItem(): OpacityGradientStop

/\*\*

- Reports how many OpacityGradientStop elements are present.
  \*/
  count(): number

/\*\*

- Provides all OpacityGradientStop entries from the collection.
  \*/
  everyItem(): OpacityGradientStop[]

/\*\*

- Provides the first OpacityGradientStop entry in this collection.
  \*/
  firstItem(): OpacityGradientStop

/\*\*

- Finds a OpacityGradientStop by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): OpacityGradientStop

/\*\*

- Provides OpacityGradientStops across the requested range.
- @param from OpacityGradientStop, index, or name that starts the range.
- @param to OpacityGradientStop, index, or name that ends the range.
  \*/
  itemByRange(from: OpacityGradientStop | number | string, to: OpacityGradientStop | number | string): OpacityGradientStop[]

/\*\*

- Provides the final OpacityGradientStop entry in this collection.
  \*/
  lastItem(): OpacityGradientStop

/\*\*

- Provides the central OpacityGradientStop entry in this collection.
  \*/
  middleItem(): OpacityGradientStop

/\*\*

- Provides the OpacityGradientStop positioned after the supplied OpacityGradientStop.
- @param obj OpacityGradientStop placed before the target OpacityGradientStop.
  \*/
  nextItem(obj: OpacityGradientStop): OpacityGradientStop

/\*\*

- Provides the OpacityGradientStop positioned before the supplied index.
- @param obj Index of the OpacityGradientStop placed after the target OpacityGradientStop.
  \*/
  previousItem(obj: OpacityGradientStop): OpacityGradientStop

/\*\*

- Builds source text that evaluates back to the OpacityGradientStop.
  \*/
  toSource(): string
  }

/\*\*

- Object capable of containing a data merge text field.
  \*/
  declare class DataMergeTextPlaceholder {
  /\*\*
  - EventListeners attached to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events attached to this object.
  \*/
  readonly events: Events
