# Indesign (part 9)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Builds source text that evaluates back to this BookContent.
  \*/
  toSource(): string
  }

/\*\*

- Ink object.
  \*/
  declare class Ink {
  /\*\*
  - Ink object that this ink maps to.
    \*/
    aliasInkName: string

/\*\*

- Ink angle. (Range: 0 to 360)
  \*/
  angle: number

/\*\*

- Converts spot inks into process inks.
  \*/
  convertToProcess: boolean

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Ink frequency. (Range: 1 to 500)
  \*/
  frequency: number

/\*\*

- Unique ID assigned to the Ink.
  \*/
  readonly id: number

/\*\*

- Position of the Ink inside its containing object.
  \*/
  readonly index: number

/\*\*

- Ink trapping type.
  \*/
  inkType: InkTypes

/\*\*

- When true, this ink is a process ink.
  \*/
  readonly isProcessInk: boolean

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label storage.
  \*/
  label: string

/\*\*

- Ink name.
  \*/
  readonly name: string

/\*\*

- Ink neutral density. (Range: 0.001 to 10.0)
  \*/
  neutralDensity: number

/\*\*

- Parent object for the Ink (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- When true, this ink is printed. Only valid when printing separations.
  \*/
  printInk: boolean

/\*\*

- Object used to assign several properties in one operation.
  \*/
  properties: object

/\*\*

- Ink solidity value. (Range: 0.0 to 1.0)
  \*/
  readonly solidity: number

/\*\*

- Ink position within the trapping sequence.
  \*/
  trapOrder: number

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): Ink[]

/\*\*

- Stores a label value under the specified key.
- @param key Key to set.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to this Ink.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing inks.
  \*/
  declare class Inks {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the Ink at the specified index.
- @param index Requested index.
  \*/
  [index: number]: Ink

/\*\*

- Gets an arbitrary Ink from the collection.
  \*/
  anyItem(): Ink

/\*\*

- Shows how many elements the Ink collection contains.
  \*/
  count(): number

/\*\*

- Gets all Ink objects in this collection.
  \*/
  everyItem(): Ink[]

/\*\*

- Gets the initial Ink in the collection.
  \*/
  firstItem(): Ink

/\*\*

- Gets the Ink matching the provided index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): Ink

/\*\*

- Gets the Ink matching the provided ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): Ink

/\*\*

- Gets the Ink whose name matches the argument.
- @param name Name to resolve.
  \*/
  itemByName(name: string): Ink

/\*\*

- Gets Inks contained in the supplied range.
- @param from Ink, index, or name that starts the range.
- @param to Ink, index, or name that ends the range.
  \*/
  itemByRange(from: Ink | number | string, to: Ink | number | string): Ink[]

/\*\*

- Gets the final Ink in the collection.
  \*/
  lastItem(): Ink

/\*\*

- Gets the central Ink from this collection.
  \*/
  middleItem(): Ink

/\*\*

- Gets the Ink positioned after the supplied Ink in this collection.
- @param obj Ink located just before the target Ink.
  \*/
  nextItem(obj: Ink): Ink

/\*\*

- Gets the Ink immediately before the supplied index.
- @param obj Index for the Ink that comes after the target Ink.
  \*/
  previousItem(obj: Ink): Ink

/\*\*

- Builds source text that evaluates back to this Ink.
  \*/
  toSource(): string
  }

/\*\*

- Trap preset object.
  \*/
  declare class TrapPreset {
  /\*\*
  - Minimum black-ink percentage required before the black width setting applies. (Range: 0 to 100)
    \*/
    blackColorThreshold: number

/\*\*

- Neutral density value at or above which an ink counts as black. (Range: .001 to 10)
  \*/
  blackDensity: number

/\*\*

- Black width. (Allowed ranges by unit: points 0.0 to 8.0; picas 0p0 to 0p8; inches 0 to 0.1111; mm 0 to 2.822; cm 0 to .2822; ciceros 0c0 to 0c7.507)
  \*/
  blackWidth: number | string

/\*\*

- Percentage degree for using components of neighboring colors to reduce the trap color. (Range: 0 to 100) Note: 0% creates a trap whose neutral density matches the darker color's neutral density.
  \*/
  colorReduction: number

/\*\*

- Default trapping width for all colors other than solid-black cases. (Allowed ranges by unit: points 0.0 to 8.0; picas 0p0 to 0p8; inches 0 to 0.1111; mm 0 to 2.822; cm 0 to .2822; ciceros 0c0 to 0c7.507)
  \*/
  defaultTrapWidth: number | string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the TrapPreset.
  \*/
  readonly id: number

/\*\*

- Trap placement between vector objects and bitmap images.
  \*/
  imagePlacement: TrapImagePlacementTypes

/\*\*

- When true, trapping is enabled along boundaries where bitmap images overlap or touch.
  \*/
  imagesToImages: boolean

/\*\*

- Position of the TrapPreset inside its containing object.
  \*/
  readonly index: number

/\*\*

- When true, trapping is enabled among colors inside individual bitmap images.
  \*/
  internalImages: boolean

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label storage.
  \*/
  label: string

/\*\*

- TrapPreset name.
  \*/
  name: string

/\*\*

- When true, vector objects are forced to overlap bitmap images.
  \*/
  objectsToImages: boolean

/\*\*

- When true, one-bit images trap against neighboring objects.
  \*/
  oneBitImages: boolean

/\*\*

- Parent object for the TrapPreset (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Object used to assign several properties in one operation.
  \*/
  properties: object

/\*\*

- Percentage difference between neighboring colors' neutral densities where the trap moves from the darker side of an edge toward the centerline. (Range: 0 to 100)
  \*/
  slidingTrapThreshold: number

/\*\*

- Percentage amount by which components of neighboring colors must differ before creating a trap. (Range: 1 to 100)
  \*/
  stepThreshold: number

/\*\*

- Shape used where three-way traps intersect.
  \*/
  trapEnd: TrapEndTypes

/\*\*

- Join type for the trap preset.
  \*/
  trapJoin: EndJoin

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a copy of the TrapPreset.
  \*/
  duplicate(): TrapPreset

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): TrapPreset[]

/\*\*

- Stores a label value under the specified key.
- @param key Key to set.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes the trap preset.
- @param replacingWith Trap preset to use instead of the deleted preset.
  \*/
  remove(replacingWith: TrapPreset): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to the TrapPreset.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- TrapPreset objects grouped as a collection.
  \*/
  declare class TrapPresets {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a TrapPreset by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: TrapPreset

/\*\*

- Constructs a TrapPreset.
- @param withProperties Starting property values for the TrapPreset being created
  \*/
  add(withProperties: object): TrapPreset

/\*\*

- Chooses any TrapPreset from the collection.
  \*/
  anyItem(): TrapPreset

/\*\*

- Reports how many TrapPreset elements are present.
  \*/
  count(): number

/\*\*

- Provides all TrapPreset entries from the collection.
  \*/
  everyItem(): TrapPreset[]

/\*\*

- Provides the first TrapPreset entry in this collection.
  \*/
  firstItem(): TrapPreset

/\*\*

- Finds a TrapPreset by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TrapPreset

/\*\*

- Finds the TrapPreset associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): TrapPreset

/\*\*

- Finds the TrapPreset associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): TrapPreset

/\*\*

- Provides TrapPresets across the requested range.
- @param from TrapPreset, index, or name that starts the range.
- @param to TrapPreset, index, or name that ends the range.
  \*/
  itemByRange(from: TrapPreset | number | string, to: TrapPreset | number | string): TrapPreset[]

/\*\*

- Provides the final TrapPreset entry in this collection.
  \*/
  lastItem(): TrapPreset

/\*\*

- Provides the central TrapPreset entry in this collection.
  \*/
  middleItem(): TrapPreset

/\*\*

- Provides the TrapPreset positioned after the supplied TrapPreset.
- @param obj TrapPreset placed before the target TrapPreset.
  \*/
  nextItem(obj: TrapPreset): TrapPreset

/\*\*

- Provides the TrapPreset positioned before the supplied index.
- @param obj Index of the TrapPreset placed after the target TrapPreset.
  \*/
  previousItem(obj: TrapPreset): TrapPreset

/\*\*

- Builds source text that evaluates back to the TrapPreset.
  \*/
  toSource(): string
  }

/\*\*

- MixedInk swatch object.
  \*/
  declare class MixedInk extends Swatch {
  /\*\*
  - MixedInkGroup used as the basis for this mixed ink swatch.
    \*/
    readonly baseColor: MixedInkGroup

/\*\*

- Component Ink entries.
  \*/
  readonly inkList: Ink[]

/\*\*

- Tint-percentage array aligned to the inks in inkList. Note: provide one value per ink.
  \*/
  inkPercentages: number[]

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

- MixedInk objects grouped as a collection.
  \*/
  declare class MixedInks {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a MixedInk by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: MixedInk

/\*\*

- Constructs a mixed ink swatch.
- @param inkList Inks included in the mixture. Note: include at least two process inks and one spot ink.
- @param inkPercentages Percent value assigned to each ink in inkList. (Range: 0 to 100 for each ink)
- @param withProperties Starting property values for the MixedInk being created
  \*/
  add(inkList: Ink[] | MixedInkGroup, inkPercentages: number[], withProperties: object): MixedInk

/\*\*

- Chooses any MixedInk from the collection.
  \*/
  anyItem(): MixedInk

/\*\*

- Reports how many MixedInk elements are present.
  \*/
  count(): number

/\*\*

- Provides all MixedInk entries from the collection.
  \*/
  everyItem(): MixedInk[]

/\*\*

- Provides the first MixedInk entry in this collection.
  \*/
  firstItem(): MixedInk

/\*\*

- Finds a MixedInk by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): MixedInk

/\*\*

- Finds the MixedInk associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): MixedInk

/\*\*

- Finds the MixedInk associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): MixedInk

/\*\*

- Provides MixedInks across the requested range.
- @param from MixedInk, index, or name that starts the range.
- @param to MixedInk, index, or name that ends the range.
  \*/
  itemByRange(from: MixedInk | number | string, to: MixedInk | number | string): MixedInk[]

/\*\*

- Provides the final MixedInk entry in this collection.
  \*/
  lastItem(): MixedInk

/\*\*

- Provides the central MixedInk entry in this collection.
  \*/
  middleItem(): MixedInk

/\*\*

- Provides the MixedInk positioned after the supplied MixedInk.
- @param obj MixedInk placed before the target MixedInk.
  \*/
  nextItem(obj: MixedInk): MixedInk

/\*\*

- Provides the MixedInk positioned before the supplied index.
- @param obj Index of the MixedInk placed after the target MixedInk.
  \*/
  previousItem(obj: MixedInk): MixedInk

/\*\*

- Builds source text that evaluates back to the MixedInk.
  \*/
  toSource(): string
  }

/\*\*

- MixedInkGroup swatch object.
  \*/
  declare class MixedInkGroup extends Swatch {
  /\*\*
  - Component Ink entries.
    \*/
    readonly inkList: Ink[]

/\*\*

- ColorModel assigned to the group.
  \*/
  model: ColorModel
  }

/\*\*

- MixedInkGroup objects grouped as a collection.
  \*/
  declare class MixedInkGroups {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a MixedInkGroup by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: MixedInkGroup

/\*\*

- Constructs a mixed ink group.
- @param inkList Inks included in the mix.
- @param inkPercentages Percent value for each ink in inkList. (Range: 0 to 100 for each ink)
- @param repeatValues Repetition count for each ink in inkList. (Range: 0 to 100 for each ink)
- @param incrementValues Percent increment applied per repetition for each ink. (Range: 0 to 100) Note: cumulative percentage for a single ink cannot be greater than 100.)
- @param withProperties Starting property values for the MixedInkGroup being created
  \*/
  add(inkList: Ink[], inkPercentages: number[], repeatValues: number[], incrementValues: number[], withProperties: object): MixedInkGroup

/\*\*

- Chooses any MixedInkGroup from the collection.
  \*/
  anyItem(): MixedInkGroup

/\*\*

- Reports how many MixedInkGroup elements are present.
  \*/
  count(): number

/\*\*

- Provides all MixedInkGroup entries from the collection.
  \*/
  everyItem(): MixedInkGroup[]

/\*\*

- Provides the first MixedInkGroup entry in this collection.
  \*/
  firstItem(): MixedInkGroup

/\*\*

- Finds a MixedInkGroup by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): MixedInkGroup

/\*\*

- Finds the MixedInkGroup associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): MixedInkGroup

/\*\*

- Finds the MixedInkGroup associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): MixedInkGroup

/\*\*

- Provides MixedInkGroups across the requested range.
- @param from MixedInkGroup, index, or name that starts the range.
- @param to MixedInkGroup, index, or name that ends the range.
  \*/
  itemByRange(from: MixedInkGroup | number | string, to: MixedInkGroup | number | string): MixedInkGroup[]

/\*\*

- Provides the final MixedInkGroup entry in this collection.
  \*/
  lastItem(): MixedInkGroup

/\*\*

- Provides the central MixedInkGroup entry in this collection.
  \*/
  middleItem(): MixedInkGroup

/\*\*

- Provides the MixedInkGroup positioned after the supplied MixedInkGroup.
- @param obj MixedInkGroup placed before the target MixedInkGroup.
  \*/
  nextItem(obj: MixedInkGroup): MixedInkGroup

/\*\*

- Provides the MixedInkGroup positioned before the supplied index.
- @param obj Index of the MixedInkGroup placed after the target MixedInkGroup.
  \*/
  previousItem(obj: MixedInkGroup): MixedInkGroup

/\*\*

- Builds source text that evaluates back to the MixedInkGroup.
  \*/
  toSource(): string
  }

/\*\*

- Gradient swatch object.
  \*/
  declare class Gradient extends Swatch {
  /\*\*
  - GradientStops owned by the gradient.
    \*/
    readonly gradientStops: GradientStops

/\*\*

- GradientType value for the gradient.
  \*/
  type: GradientType
  }

/\*\*

- Gradient objects grouped as a collection.
  \*/
  declare class Gradients {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Gradient by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: Gradient

/\*\*

- Constructs a Gradient.
- @param withProperties Starting property values for the Gradient being created
  \*/
  add(withProperties: object): Gradient

/\*\*

- Chooses any Gradient from the collection.
  \*/
  anyItem(): Gradient

/\*\*

- Reports how many Gradient elements are present.
  \*/
  count(): number

/\*\*

- Provides all Gradient entries from the collection.
  \*/
  everyItem(): Gradient[]

/\*\*

- Provides the first Gradient entry in this collection.
  \*/
  firstItem(): Gradient

/\*\*

- Finds a Gradient by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Gradient

/\*\*

- Finds the Gradient associated with the supplied ID.
- @param id ID selector.
  \*/
  itemByID(id: number): Gradient

/\*\*

- Finds the Gradient associated with the supplied name.
- @param name Name selector.
  \*/
  itemByName(name: string): Gradient

/\*\*

- Provides Gradients across the requested range.
- @param from Gradient, index, or name that starts the range.
- @param to Gradient, index, or name that ends the range.
  \*/
  itemByRange(from: Gradient | number | string, to: Gradient | number | string): Gradient[]

/\*\*

- Provides the final Gradient entry in this collection.
  \*/
  lastItem(): Gradient

/\*\*

- Provides the central Gradient entry in this collection.
  \*/
  middleItem(): Gradient

/\*\*

- Provides the Gradient positioned after the supplied Gradient.
- @param obj Gradient placed before the target Gradient.
  \*/
  nextItem(obj: Gradient): Gradient

/\*\*

- Provides the Gradient positioned before the supplied index.
- @param obj Index of the Gradient placed after the target Gradient.
  \*/
  previousItem(obj: Gradient): Gradient

/\*\*

- Builds source text that evaluates back to the Gradient.
  \*/
  toSource(): string
  }

/\*\*

- GradientStop entry within a gradient.
  \*/
  declare class GradientStop {
  /\*\*
  - EventListeners attached to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events attached to this object.
  \*/
  readonly events: Events

/\*\*

- GradientStop index inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Starting location for this gradient stop, expressed as a percentage of gradient length. (Range: 0 to 100).
  \*/
  location: number

/\*\*

- Midpoint for this gradient stop, expressed as a percentage of gradient length. (Range: 13 to 87)
  \*/
  midpoint: number

/\*\*

- Parent Gradient for this GradientStop.
  \*/
  readonly parent: Gradient

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Swatch applied to the gradient stop: color, gradient, tint, or mixed ink.
  \*/
  stopColor: MixedInk | Color

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
  getElements(): GradientStop[]

/\*\*

- Deletes this GradientStop.
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

- Builds source text that evaluates back to the GradientStop.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- GradientStop objects grouped as a collection.
  \*/
  declare class GradientStops {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a GradientStop by the supplied index.
- @param index Index selector.
  \*/
  [index: number]: GradientStop

/\*\*

- Constructs a GradientStop.
- @param withProperties Starting property values for the GradientStop being created
  \*/
  add(withProperties: object): GradientStop

/\*\*

- Chooses any GradientStop from the collection.
  \*/
  anyItem(): GradientStop

/\*\*

- Reports how many GradientStop elements are present.
  \*/
  count(): number

/\*\*

- Provides all GradientStop entries from the collection.
  \*/
  everyItem(): GradientStop[]

/\*\*

- Provides the first GradientStop entry in this collection.
  \*/
  firstItem(): GradientStop

/\*\*

- Finds a GradientStop by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): GradientStop

/\*\*

- Provides GradientStops across the requested range.
- @param from GradientStop, index, or name that starts the range.
- @param to GradientStop, index, or name that ends the range.
  \*/
  itemByRange(from: GradientStop | number | string, to: GradientStop | number | string): GradientStop[]

/\*\*

- Provides the final GradientStop entry in this collection.
  \*/
  lastItem(): GradientStop
