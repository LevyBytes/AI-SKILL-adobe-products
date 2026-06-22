# Indesign (part 32)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Resolves the ViewZoomBehavior positioned just before the supplied index.
- @param obj The index for the ViewZoomBehavior after the one being requested.
  \*/
  previousItem(obj: ViewZoomBehavior): ViewZoomBehavior

/\*\*

- Builds source text that evaluates back to this ViewZoomBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a SoundBehavior object.
  \*/
  declare class SoundBehavior extends Behavior {
  /\*\*
  - Playback mode value.
    \*/
    operation: PlayOperations

/\*\*

- Sound page item reference.
  \*/
  soundItem: Sound
  }

/\*\*

- Collection wrapper for SoundBehavior objects.
  \*/
  declare class SoundBehaviors {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the SoundBehavior at the given index.
- @param index Numeric position.
  \*/
  [index: number]: SoundBehavior

/\*\*

- Adds a SoundBehavior instance.
- @param withProperties Property values assigned to the new SoundBehavior.
  \*/
  add(withProperties: object): SoundBehavior

/\*\*

- Selects an arbitrary SoundBehavior from the collection.
  \*/
  anyItem(): SoundBehavior

/\*\*

- Reports how many SoundBehavior elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all SoundBehavior entries.
  \*/
  everyItem(): SoundBehavior[]

/\*\*

- Gets the leading SoundBehavior in the collection.
  \*/
  firstItem(): SoundBehavior

/\*\*

- Finds a SoundBehavior by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): SoundBehavior

/\*\*

- Finds a SoundBehavior by ID.
- @param id ID value.
  \*/
  itemByID(id: number): SoundBehavior

/\*\*

- Finds a SoundBehavior by name.
- @param name Name value.
  \*/
  itemByName(name: string): SoundBehavior

/\*\*

- Gets SoundBehaviors spanning the from and to endpoints.
- @param from Starting SoundBehavior, index, or name.
- @param to Ending SoundBehavior, index, or name.
  \*/
  itemByRange(from: SoundBehavior | number | string, to: SoundBehavior | number | string): SoundBehavior[]

/\*\*

- Gets the final SoundBehavior in the collection.
  \*/
  lastItem(): SoundBehavior

/\*\*

- Gets the central SoundBehavior in the collection.
  \*/
  middleItem(): SoundBehavior

/\*\*

- Gets the SoundBehavior whose index comes after the supplied SoundBehavior.
- @param obj SoundBehavior before the desired entry.
  \*/
  nextItem(obj: SoundBehavior): SoundBehavior

/\*\*

- Resolves the SoundBehavior positioned just before the supplied index.
- @param obj Index for the SoundBehavior after the requested one.
  \*/
  previousItem(obj: SoundBehavior): SoundBehavior

/\*\*

- Builds source text that evaluates back to this SoundBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Behavior object used to jump to an anchor.
  \*/
  declare class GotoAnchorBehavior extends Behavior {
  /\*\*
  - Anchor target, accepted as a bookmark, hyperlink text destination, or hyperlink page destination.
    \*/
    anchorItem: Bookmark | HyperlinkTextDestination | HyperlinkPageDestination

/\*\*

- Anchor name value.
  \*/
  readonly anchorName: string

/\*\*

- File path value; Mac OS uses colon delimiters.
  \*/
  filePath: string | File

/\*\*

- Zoom option applied during navigation.
  \*/
  zoomSetting: GoToZoomOptions
  }

/\*\*

- Collection wrapper for GotoAnchorBehavior objects.
  \*/
  declare class GotoAnchorBehaviors {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the GotoAnchorBehavior at the given index.
- @param index Numeric position.
  \*/
  [index: number]: GotoAnchorBehavior

/\*\*

- Adds a GotoAnchorBehavior instance.
- @param withProperties Property values assigned to the new GotoAnchorBehavior.
  \*/
  add(withProperties: object): GotoAnchorBehavior

/\*\*

- Selects an arbitrary GotoAnchorBehavior from the collection.
  \*/
  anyItem(): GotoAnchorBehavior

/\*\*

- Reports how many GotoAnchorBehavior elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all GotoAnchorBehavior entries.
  \*/
  everyItem(): GotoAnchorBehavior[]

/\*\*

- Gets the leading GotoAnchorBehavior in the collection.
  \*/
  firstItem(): GotoAnchorBehavior

/\*\*

- Finds a GotoAnchorBehavior by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): GotoAnchorBehavior

/\*\*

- Finds a GotoAnchorBehavior by ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoAnchorBehavior

/\*\*

- Finds a GotoAnchorBehavior by name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoAnchorBehavior

/\*\*

- Gets GotoAnchorBehaviors spanning the from and to endpoints.
- @param from Starting GotoAnchorBehavior, index, or name.
- @param to Ending GotoAnchorBehavior, index, or name.
  \*/
  itemByRange(from: GotoAnchorBehavior | number | string, to: GotoAnchorBehavior | number | string): GotoAnchorBehavior[]

/\*\*

- Gets the final GotoAnchorBehavior in the collection.
  \*/
  lastItem(): GotoAnchorBehavior

/\*\*

- Gets the central GotoAnchorBehavior in the collection.
  \*/
  middleItem(): GotoAnchorBehavior

/\*\*

- Gets the GotoAnchorBehavior whose index comes after the supplied GotoAnchorBehavior.
- @param obj GotoAnchorBehavior before the desired entry.
  \*/
  nextItem(obj: GotoAnchorBehavior): GotoAnchorBehavior

/\*\*

- Resolves the GotoAnchorBehavior positioned just before the supplied index.
- @param obj Index for the GotoAnchorBehavior after the requested one.
  \*/
  previousItem(obj: GotoAnchorBehavior): GotoAnchorBehavior

/\*\*

- Builds source text that evaluates back to this GotoAnchorBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Behavior object used to jump to a document page.
  \*/
  declare class GotoPageBehavior extends Behavior {
  /\*\*
  - Destination page number, expressed as an index where 1 identifies the first page.
    \*/
    pageNumber: number

/\*\*

- Zoom option applied during navigation.
  \*/
  zoomSetting: GoToZoomOptions
  }

/\*\*

- Collection wrapper for GotoPageBehavior objects.
  \*/
  declare class GotoPageBehaviors {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the GotoPageBehavior at the given index.
- @param index Numeric position.
  \*/
  [index: number]: GotoPageBehavior

/\*\*

- Adds a GotoPageBehavior instance.
- @param withProperties Property values assigned to the new GotoPageBehavior.
  \*/
  add(withProperties: object): GotoPageBehavior

/\*\*

- Selects an arbitrary GotoPageBehavior from the collection.
  \*/
  anyItem(): GotoPageBehavior

/\*\*

- Reports how many GotoPageBehavior elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all GotoPageBehavior entries.
  \*/
  everyItem(): GotoPageBehavior[]

/\*\*

- Gets the leading GotoPageBehavior in the collection.
  \*/
  firstItem(): GotoPageBehavior

/\*\*

- Finds a GotoPageBehavior by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): GotoPageBehavior

/\*\*

- Finds a GotoPageBehavior by ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoPageBehavior

/\*\*

- Finds a GotoPageBehavior by name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoPageBehavior

/\*\*

- Gets GotoPageBehaviors spanning the from and to endpoints.
- @param from Starting GotoPageBehavior, index, or name.
- @param to Ending GotoPageBehavior, index, or name.
  \*/
  itemByRange(from: GotoPageBehavior | number | string, to: GotoPageBehavior | number | string): GotoPageBehavior[]

/\*\*

- Gets the final GotoPageBehavior in the collection.
  \*/
  lastItem(): GotoPageBehavior

/\*\*

- Gets the central GotoPageBehavior in the collection.
  \*/
  middleItem(): GotoPageBehavior

/\*\*

- Gets the GotoPageBehavior whose index comes after the supplied GotoPageBehavior.
- @param obj GotoPageBehavior before the desired entry.
  \*/
  nextItem(obj: GotoPageBehavior): GotoPageBehavior

/\*\*

- Resolves the GotoPageBehavior positioned just before the supplied index.
- @param obj Index for the GotoPageBehavior after the requested one.
  \*/
  previousItem(obj: GotoPageBehavior): GotoPageBehavior

/\*\*

- Builds source text that evaluates back to this GotoPageBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Behavior object that clears document form fields.
  \*/
  declare class ClearFormBehavior extends Behavior {}

/\*\*

- Collection wrapper for ClearFormBehavior objects.
  \*/
  declare class ClearFormBehaviors {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the ClearFormBehavior at the given index.
- @param index Numeric position.
  \*/
  [index: number]: ClearFormBehavior

/\*\*

- Adds a ClearFormBehavior instance.
- @param withProperties Property values assigned to the new ClearFormBehavior.
  \*/
  add(withProperties: object): ClearFormBehavior

/\*\*

- Selects an arbitrary ClearFormBehavior from the collection.
  \*/
  anyItem(): ClearFormBehavior

/\*\*

- Reports how many ClearFormBehavior elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all ClearFormBehavior entries.
  \*/
  everyItem(): ClearFormBehavior[]

/\*\*

- Gets the leading ClearFormBehavior in the collection.
  \*/
  firstItem(): ClearFormBehavior

/\*\*

- Finds a ClearFormBehavior by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): ClearFormBehavior

/\*\*

- Finds a ClearFormBehavior by ID.
- @param id ID value.
  \*/
  itemByID(id: number): ClearFormBehavior

/\*\*

- Finds a ClearFormBehavior by name.
- @param name Name value.
  \*/
  itemByName(name: string): ClearFormBehavior

/\*\*

- Gets ClearFormBehaviors spanning the from and to endpoints.
- @param from Starting ClearFormBehavior, index, or name.
- @param to Ending ClearFormBehavior, index, or name.
  \*/
  itemByRange(from: ClearFormBehavior | number | string, to: ClearFormBehavior | number | string): ClearFormBehavior[]

/\*\*

- Gets the final ClearFormBehavior in the collection.
  \*/
  lastItem(): ClearFormBehavior

/\*\*

- Gets the central ClearFormBehavior in the collection.
  \*/
  middleItem(): ClearFormBehavior

/\*\*

- Gets the ClearFormBehavior whose index comes after the supplied ClearFormBehavior.
- @param obj ClearFormBehavior before the desired entry.
  \*/
  nextItem(obj: ClearFormBehavior): ClearFormBehavior

/\*\*

- Resolves the ClearFormBehavior positioned just before the supplied index.
- @param obj Index for the ClearFormBehavior after the requested one.
  \*/
  previousItem(obj: ClearFormBehavior): ClearFormBehavior

/\*\*

- Builds source text that evaluates back to this ClearFormBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Behavior object that starts document printing.
  \*/
  declare class PrintFormBehavior extends Behavior {}

/\*\*

- Collection wrapper for PrintFormBehavior objects.
  \*/
  declare class PrintFormBehaviors {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the PrintFormBehavior at the given index.
- @param index Numeric position.
  \*/
  [index: number]: PrintFormBehavior

/\*\*

- Adds a PrintFormBehavior instance.
- @param withProperties Property values assigned to the new PrintFormBehavior.
  \*/
  add(withProperties: object): PrintFormBehavior

/\*\*

- Selects an arbitrary PrintFormBehavior from the collection.
  \*/
  anyItem(): PrintFormBehavior

/\*\*

- Reports how many PrintFormBehavior elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all PrintFormBehavior entries.
  \*/
  everyItem(): PrintFormBehavior[]

/\*\*

- Gets the leading PrintFormBehavior in the collection.
  \*/
  firstItem(): PrintFormBehavior

/\*\*

- Finds a PrintFormBehavior by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): PrintFormBehavior

/\*\*

- Finds a PrintFormBehavior by ID.
- @param id ID value.
  \*/
  itemByID(id: number): PrintFormBehavior

/\*\*

- Finds a PrintFormBehavior by name.
- @param name Name value.
  \*/
  itemByName(name: string): PrintFormBehavior

/\*\*

- Gets PrintFormBehaviors spanning the from and to endpoints.
- @param from Starting PrintFormBehavior, index, or name.
- @param to Ending PrintFormBehavior, index, or name.
  \*/
  itemByRange(from: PrintFormBehavior | number | string, to: PrintFormBehavior | number | string): PrintFormBehavior[]

/\*\*

- Gets the final PrintFormBehavior in the collection.
  \*/
  lastItem(): PrintFormBehavior

/\*\*

- Gets the central PrintFormBehavior in the collection.
  \*/
  middleItem(): PrintFormBehavior

/\*\*

- Gets the PrintFormBehavior whose index comes after the supplied PrintFormBehavior.
- @param obj PrintFormBehavior before the desired entry.
  \*/
  nextItem(obj: PrintFormBehavior): PrintFormBehavior

/\*\*

- Resolves the PrintFormBehavior positioned just before the supplied index.
- @param obj Index for the PrintFormBehavior after the requested one.
  \*/
  previousItem(obj: PrintFormBehavior): PrintFormBehavior

/\*\*

- Builds source text that evaluates back to this PrintFormBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Behavior object used to submit the document.
  \*/
  declare class SubmitFormBehavior extends Behavior {
  /\*\*
  - URL string.
    \*/
    url: string
    }

/\*\*

- Collection wrapper for SubmitFormBehavior objects.
  \*/
  declare class SubmitFormBehaviors {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the SubmitFormBehavior at the given index.
- @param index Numeric position.
  \*/
  [index: number]: SubmitFormBehavior

/\*\*

- Adds a SubmitFormBehavior instance.
- @param withProperties Property values assigned to the new SubmitFormBehavior.
  \*/
  add(withProperties: object): SubmitFormBehavior

/\*\*

- Selects an arbitrary SubmitFormBehavior from the collection.
  \*/
  anyItem(): SubmitFormBehavior

/\*\*

- Reports how many SubmitFormBehavior elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all SubmitFormBehavior entries.
  \*/
  everyItem(): SubmitFormBehavior[]

/\*\*

- Gets the leading SubmitFormBehavior in the collection.
  \*/
  firstItem(): SubmitFormBehavior

/\*\*

- Finds a SubmitFormBehavior by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): SubmitFormBehavior

/\*\*

- Finds a SubmitFormBehavior by ID.
- @param id ID value.
  \*/
  itemByID(id: number): SubmitFormBehavior

/\*\*

- Finds a SubmitFormBehavior by name.
- @param name Name value.
  \*/
  itemByName(name: string): SubmitFormBehavior

/\*\*

- Gets SubmitFormBehaviors spanning the from and to endpoints.
- @param from Starting SubmitFormBehavior, index, or name.
- @param to Ending SubmitFormBehavior, index, or name.
  \*/
  itemByRange(from: SubmitFormBehavior | number | string, to: SubmitFormBehavior | number | string): SubmitFormBehavior[]

/\*\*

- Gets the final SubmitFormBehavior in the collection.
  \*/
  lastItem(): SubmitFormBehavior

/\*\*

- Gets the central SubmitFormBehavior in the collection.
  \*/
  middleItem(): SubmitFormBehavior

/\*\*

- Gets the SubmitFormBehavior whose index comes after the supplied SubmitFormBehavior.
- @param obj SubmitFormBehavior before the desired entry.
  \*/
  nextItem(obj: SubmitFormBehavior): SubmitFormBehavior

/\*\*

- Resolves the SubmitFormBehavior positioned just before the supplied index.
- @param obj Index for the SubmitFormBehavior after the requested one.
  \*/
  previousItem(obj: SubmitFormBehavior): SubmitFormBehavior

/\*\*

- Builds source text that evaluates back to this SubmitFormBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Settings for timing.
  \*/
  declare class TimingSetting extends Preference {
  /\*\*
  - TimingLists collection reference.
    \*/
    readonly timingLists: TimingLists

/\*\*

- Spread dynamic targets that have not been assigned.
  \*/
  readonly unassignedDynamicTargets: object[]
  }

/\*\*

- Represents a timing list.
  \*/
  declare class TimingList {
  /\*\*
  - EventListeners collection reference.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events collection reference.
  \*/
  readonly events: Events

/\*\*

- Position of this TimingList inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for this TimingList, a TimingSetting.
  \*/
  readonly parent: TimingSetting

/\*\*

- Lets multiple properties be set together.
  \*/
  properties: object

/\*\*

- TimingGroups collection reference.
  \*/
  readonly timingGroups: TimingGroups

/\*\*

- Trigger event value.
  \*/
  readonly triggerEvent: DynamicTriggerEvents

/\*\*

- Attaches an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into object reference entries.
  \*/
  getElements(): TimingList[]

/\*\*

- Deletes this TimingList.
  \*/
  remove(): void

/\*\*

- Detaches an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to this TimingList.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for timing lists.
  \*/
  declare class TimingLists {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the TimingList at the given index.
- @param index Numeric position.
  \*/
  [index: number]: TimingList

/\*\*

- Adds an event-triggered TimingList object.
- @param triggerEvent Trigger Event selector.
- @param withProperties Property values assigned to the new TimingList.
  \*/
  add(triggerEvent: DynamicTriggerEvents, withProperties: object): TimingList

/\*\*

- Selects an arbitrary TimingList from the collection.
  \*/
  anyItem(): TimingList

/\*\*

- Reports how many TimingList elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all TimingList entries.
  \*/
  everyItem(): TimingList[]

/\*\*

- Gets the leading TimingList in the collection.
  \*/
  firstItem(): TimingList

/\*\*

- Finds a TimingList by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TimingList

/\*\*

- Gets TimingLists spanning the from and to endpoints.
- @param from Starting TimingList, index, or name.
- @param to Ending TimingList, index, or name.
  \*/
  itemByRange(from: TimingList | number | string, to: TimingList | number | string): TimingList[]

/\*\*

- Gets the final TimingList in the collection.
  \*/
  lastItem(): TimingList

/\*\*

- Gets the central TimingList in the collection.
  \*/
  middleItem(): TimingList

/\*\*

- Gets the TimingList whose index comes after the supplied TimingList.
- @param obj TimingList before the desired entry.
  \*/
  nextItem(obj: TimingList): TimingList

/\*\*

- Resolves the TimingList positioned just before the supplied index.
- @param obj Index for the TimingList after the requested one.
  \*/
  previousItem(obj: TimingList): TimingList

/\*\*

- Builds source text that evaluates back to this TimingList.
  \*/
  toSource(): string
  }

/\*\*

- Represents a timing group.
  \*/
  declare class TimingGroup {
  /\*\*
  - EventListeners collection reference.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events collection reference.
  \*/
  readonly events: Events

/\*\*

- Position of this TimingGroup inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for this TimingGroup, a TimingList.
  \*/
  readonly parent: TimingList

/\*\*

- Timing-list placement for this timing group.
  \*/
  placement: number

/\*\*

- Number of plays for this timing group.
  \*/
  plays: number

/\*\*

- True when this timing group loops.
  \*/
  playsLoop: boolean

/\*\*

- Lets multiple properties be set together.
  \*/
  properties: object

/\*\*

- TimingTargets collection reference.
  \*/
  readonly timingTargets: TimingTargets

/\*\*

- Attaches an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into object reference entries.
  \*/
  getElements(): TimingGroup[]

/\*\*

- Moves the timing group or target to the requested location.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: required when to targets a before or after position. .
  \*/
  move(to: LocationOptions, reference: TimingGroup | TimingTarget | TimingList): TimingGroup

/\*\*

- Deletes this TimingGroup.
  \*/
  remove(): void

/\*\*

- Detaches an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to this TimingGroup.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string

/\*\*

- Separates every target in the group into its own group within this timing list.
  \*/
  unlink(): void
  }

/\*\*

- Collection wrapper for timing data objects.
  \*/
  declare class TimingGroups {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the TimingGroup at the given index.
- @param index Numeric position.
  \*/
  [index: number]: TimingGroup

/\*\*

- Adds a TimingGroup.
- @param dynamicTarget Page item target for an animation, media item, or mso.
- @param delaySeconds Delay time in seconds for a target.
- @param withProperties Property seed values for a TimingGroup being created.
  \*/
  add(dynamicTarget: PageItem | Graphic | Behavior | MediaItem, delaySeconds?: number, withProperties?: object): TimingGroup

/\*\*

- Selects an arbitrary TimingGroup from the collection.
  \*/
  anyItem(): TimingGroup

/\*\*

- Reports how many TimingGroup elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all TimingGroup entries.
  \*/
  everyItem(): TimingGroup[]

/\*\*

- Gets the leading TimingGroup in the collection.
  \*/
  firstItem(): TimingGroup

/\*\*

- Finds a TimingGroup by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TimingGroup

/\*\*

- Gets TimingGroups spanning the from and to endpoints.
- @param from Starting TimingGroup, index, or name.
- @param to Ending TimingGroup, index, or name.
  \*/
  itemByRange(from: TimingGroup | number | string, to: TimingGroup | number | string): TimingGroup[]

/\*\*

- Gets the final TimingGroup in the collection.
  \*/
  lastItem(): TimingGroup

/\*\*

- Gets the central TimingGroup in the collection.
  \*/
  middleItem(): TimingGroup

/\*\*

- Gets the TimingGroup whose index comes after the supplied TimingGroup.
- @param obj TimingGroup before the desired entry.
  \*/
  nextItem(obj: TimingGroup): TimingGroup

/\*\*

- Resolves the TimingGroup positioned just before the supplied index.
- @param obj Index for the TimingGroup after the requested one.
  \*/
  previousItem(obj: TimingGroup): TimingGroup
