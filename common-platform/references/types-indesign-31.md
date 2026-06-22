# Indesign (part 31)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Retrieves MovieBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): MovieBehavior

/\*\*

- Retrieves MovieBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): MovieBehavior

/\*\*

- Retrieves MovieBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): MovieBehavior

/\*\*

- Retrieves MovieBehaviors across the supplied range.
- @param from Range start: MovieBehavior, index, or name.
- @param to Range end: MovieBehavior, index, or name.
  \*/
  itemByRange(from: MovieBehavior | number | string, to: MovieBehavior | number | string): MovieBehavior[]

/\*\*

- Retrieves the final MovieBehavior in collection order.
  \*/
  lastItem(): MovieBehavior

/\*\*

- Retrieves the collection's middle MovieBehavior.
  \*/
  middleItem(): MovieBehavior

/\*\*

- Retrieves the MovieBehavior that comes immediately after the supplied MovieBehavior in collection order.
- @param obj MovieBehavior positioned immediately before the requested MovieBehavior.
  \*/
  nextItem(obj: MovieBehavior): MovieBehavior

/\*\*

- Retrieves the MovieBehavior immediately before the supplied index.
- @param obj Index for the MovieBehavior positioned immediately after the requested MovieBehavior.
  \*/
  previousItem(obj: MovieBehavior): MovieBehavior

/\*\*

- Builds an executable source string that resolves back to the MovieBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a show/hide fields behavior object.
  \*/
  declare class ShowHideFieldsBehavior extends Behavior {
  /\*\*
  - Hidden interactive objects.
    \*/
    fieldsToHide: Button[] | CheckBoxes | ComboBoxes | ListBoxes | RadioButtons | TextBoxes | SignatureFields

/\*\*

- Visible interactive objects.
  \*/
  fieldsToShow: Button[] | CheckBoxes | ComboBoxes | ListBoxes | RadioButtons | TextBoxes | SignatureFields
  }

/\*\*

- Holds show/hide fields behavior objects.
  \*/
  declare class ShowHideFieldsBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves ShowHideFieldsBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: ShowHideFieldsBehavior

/\*\*

- Adds a new ShowHideFieldsBehavior.
- @param withProperties Starting property values for the new ShowHideFieldsBehavior
  \*/
  add(withProperties: object): ShowHideFieldsBehavior

/\*\*

- Retrieves an arbitrary ShowHideFieldsBehavior from the collection.
  \*/
  anyItem(): ShowHideFieldsBehavior

/\*\*

- Reports how many elements the ShowHideFieldsBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all ShowHideFieldsBehavior objects in the collection.
  \*/
  everyItem(): ShowHideFieldsBehavior[]

/\*\*

- Retrieves the first ShowHideFieldsBehavior in collection order.
  \*/
  firstItem(): ShowHideFieldsBehavior

/\*\*

- Retrieves ShowHideFieldsBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ShowHideFieldsBehavior

/\*\*

- Retrieves ShowHideFieldsBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): ShowHideFieldsBehavior

/\*\*

- Retrieves ShowHideFieldsBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): ShowHideFieldsBehavior

/\*\*

- Retrieves ShowHideFieldsBehaviors across the supplied range.
- @param from Range start: ShowHideFieldsBehavior, index, or name.
- @param to Range end: ShowHideFieldsBehavior, index, or name.
  \*/
  itemByRange(from: ShowHideFieldsBehavior | number | string, to: ShowHideFieldsBehavior | number | string): ShowHideFieldsBehavior[]

/\*\*

- Retrieves the final ShowHideFieldsBehavior in collection order.
  \*/
  lastItem(): ShowHideFieldsBehavior

/\*\*

- Retrieves the collection's middle ShowHideFieldsBehavior.
  \*/
  middleItem(): ShowHideFieldsBehavior

/\*\*

- Retrieves the ShowHideFieldsBehavior that comes immediately after the supplied ShowHideFieldsBehavior in collection order.
- @param obj ShowHideFieldsBehavior positioned immediately before the requested ShowHideFieldsBehavior.
  \*/
  nextItem(obj: ShowHideFieldsBehavior): ShowHideFieldsBehavior

/\*\*

- Retrieves the ShowHideFieldsBehavior immediately before the supplied index.
- @param obj Index for the ShowHideFieldsBehavior positioned immediately after the requested ShowHideFieldsBehavior.
  \*/
  previousItem(obj: ShowHideFieldsBehavior): ShowHideFieldsBehavior

/\*\*

- Builds an executable source string that resolves back to the ShowHideFieldsBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents an animation behavior.
  \*/
  declare class AnimationBehavior extends Behavior {
  /\*\*
  - Animation page item.
    \*/
    animatedPageItem: PageItem

/\*\*

- When true, roll off after a rollover event automatically plays the animation backward.
  \*/
  autoReverseOnRollOff: boolean

/\*\*

- Playback mode.
  \*/
  operation: AnimationPlayOperations
  }

/\*\*

- Holds animation behaviors.
  \*/
  declare class AnimationBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves AnimationBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: AnimationBehavior

/\*\*

- Adds a new AnimationBehavior.
- @param withProperties Starting property values for the new AnimationBehavior
  \*/
  add(withProperties: object): AnimationBehavior

/\*\*

- Retrieves an arbitrary AnimationBehavior from the collection.
  \*/
  anyItem(): AnimationBehavior

/\*\*

- Reports how many elements the AnimationBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all AnimationBehavior objects in the collection.
  \*/
  everyItem(): AnimationBehavior[]

/\*\*

- Retrieves the first AnimationBehavior in collection order.
  \*/
  firstItem(): AnimationBehavior

/\*\*

- Retrieves AnimationBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): AnimationBehavior

/\*\*

- Retrieves AnimationBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): AnimationBehavior

/\*\*

- Retrieves AnimationBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): AnimationBehavior

/\*\*

- Retrieves AnimationBehaviors across the supplied range.
- @param from Range start: AnimationBehavior, index, or name.
- @param to Range end: AnimationBehavior, index, or name.
  \*/
  itemByRange(from: AnimationBehavior | number | string, to: AnimationBehavior | number | string): AnimationBehavior[]

/\*\*

- Retrieves the final AnimationBehavior in collection order.
  \*/
  lastItem(): AnimationBehavior

/\*\*

- Retrieves the collection's middle AnimationBehavior.
  \*/
  middleItem(): AnimationBehavior

/\*\*

- Retrieves the AnimationBehavior that comes immediately after the supplied AnimationBehavior in collection order.
- @param obj AnimationBehavior positioned immediately before the requested AnimationBehavior.
  \*/
  nextItem(obj: AnimationBehavior): AnimationBehavior

/\*\*

- Retrieves the AnimationBehavior immediately before the supplied index.
- @param obj Index for the AnimationBehavior positioned immediately after the requested AnimationBehavior.
  \*/
  previousItem(obj: AnimationBehavior): AnimationBehavior

/\*\*

- Builds an executable source string that resolves back to the AnimationBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents an open file behavior object.
  \*/
  declare class OpenFileBehavior extends Behavior {
  /\*\*
  - File path, using colon delimiters on Mac OS.
    \*/
    filePath: string | File
    }

/\*\*

- Holds open file behavior objects.
  \*/
  declare class OpenFileBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves OpenFileBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: OpenFileBehavior

/\*\*

- Adds a new OpenFileBehavior.
- @param withProperties Starting property values for the new OpenFileBehavior
  \*/
  add(withProperties: object): OpenFileBehavior

/\*\*

- Retrieves an arbitrary OpenFileBehavior from the collection.
  \*/
  anyItem(): OpenFileBehavior

/\*\*

- Reports how many elements the OpenFileBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all OpenFileBehavior objects in the collection.
  \*/
  everyItem(): OpenFileBehavior[]

/\*\*

- Retrieves the first OpenFileBehavior in collection order.
  \*/
  firstItem(): OpenFileBehavior

/\*\*

- Retrieves OpenFileBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): OpenFileBehavior

/\*\*

- Retrieves OpenFileBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): OpenFileBehavior

/\*\*

- Retrieves OpenFileBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): OpenFileBehavior

/\*\*

- Retrieves OpenFileBehaviors across the supplied range.
- @param from Range start: OpenFileBehavior, index, or name.
- @param to Range end: OpenFileBehavior, index, or name.
  \*/
  itemByRange(from: OpenFileBehavior | number | string, to: OpenFileBehavior | number | string): OpenFileBehavior[]

/\*\*

- Retrieves the final OpenFileBehavior in collection order.
  \*/
  lastItem(): OpenFileBehavior

/\*\*

- Retrieves the collection's middle OpenFileBehavior.
  \*/
  middleItem(): OpenFileBehavior

/\*\*

- Retrieves the OpenFileBehavior that comes immediately after the supplied OpenFileBehavior in collection order.
- @param obj OpenFileBehavior positioned immediately before the requested OpenFileBehavior.
  \*/
  nextItem(obj: OpenFileBehavior): OpenFileBehavior

/\*\*

- Retrieves the OpenFileBehavior immediately before the supplied index.
- @param obj Index for the OpenFileBehavior positioned immediately after the requested OpenFileBehavior.
  \*/
  previousItem(obj: OpenFileBehavior): OpenFileBehavior

/\*\*

- Builds an executable source string that resolves back to the OpenFileBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a goto next state behavior.
  \*/
  declare class GotoNextStateBehavior extends Behavior {
  /\*\*
  - Associated multi-state object page item.
    \*/
    associatedMultiStateObject: MultiStateObject

/\*\*

- When true, navigation wraps to the next or previous state.
  \*/
  loopsToNextOrPrevious: boolean
  }

/\*\*

- Holds goto next state behaviors.
  \*/
  declare class GotoNextStateBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoNextStateBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoNextStateBehavior

/\*\*

- Adds a new GotoNextStateBehavior.
- @param withProperties Starting property values for the new GotoNextStateBehavior
  \*/
  add(withProperties: object): GotoNextStateBehavior

/\*\*

- Retrieves an arbitrary GotoNextStateBehavior from the collection.
  \*/
  anyItem(): GotoNextStateBehavior

/\*\*

- Reports how many elements the GotoNextStateBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoNextStateBehavior objects in the collection.
  \*/
  everyItem(): GotoNextStateBehavior[]

/\*\*

- Retrieves the first GotoNextStateBehavior in collection order.
  \*/
  firstItem(): GotoNextStateBehavior

/\*\*

- Retrieves GotoNextStateBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoNextStateBehavior

/\*\*

- Retrieves GotoNextStateBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoNextStateBehavior

/\*\*

- Retrieves GotoNextStateBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoNextStateBehavior

/\*\*

- Retrieves GotoNextStateBehaviors across the supplied range.
- @param from Range start: GotoNextStateBehavior, index, or name.
- @param to Range end: GotoNextStateBehavior, index, or name.
  \*/
  itemByRange(from: GotoNextStateBehavior | number | string, to: GotoNextStateBehavior | number | string): GotoNextStateBehavior[]

/\*\*

- Retrieves the final GotoNextStateBehavior in collection order.
  \*/
  lastItem(): GotoNextStateBehavior

/\*\*

- Retrieves the collection's middle GotoNextStateBehavior.
  \*/
  middleItem(): GotoNextStateBehavior

/\*\*

- Retrieves the GotoNextStateBehavior that comes immediately after the supplied GotoNextStateBehavior in collection order.
- @param obj GotoNextStateBehavior positioned immediately before the requested GotoNextStateBehavior.
  \*/
  nextItem(obj: GotoNextStateBehavior): GotoNextStateBehavior

/\*\*

- Retrieves the GotoNextStateBehavior immediately before the supplied index.
- @param obj Index for the GotoNextStateBehavior positioned immediately after the requested GotoNextStateBehavior.
  \*/
  previousItem(obj: GotoNextStateBehavior): GotoNextStateBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoNextStateBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a goto previous state behavior.
  \*/
  declare class GotoPreviousStateBehavior extends Behavior {
  /\*\*
  - Associated multi-state object page item.
    \*/
    associatedMultiStateObject: MultiStateObject

/\*\*

- When true, navigation wraps to the next or previous state.
  \*/
  loopsToNextOrPrevious: boolean
  }

/\*\*

- Holds goto previous state behaviors.
  \*/
  declare class GotoPreviousStateBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoPreviousStateBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoPreviousStateBehavior

/\*\*

- Adds a new GotoPreviousStateBehavior.
- @param withProperties Starting property values for the new GotoPreviousStateBehavior
  \*/
  add(withProperties: object): GotoPreviousStateBehavior

/\*\*

- Retrieves an arbitrary GotoPreviousStateBehavior from the collection.
  \*/
  anyItem(): GotoPreviousStateBehavior

/\*\*

- Reports how many elements the GotoPreviousStateBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoPreviousStateBehavior objects in the collection.
  \*/
  everyItem(): GotoPreviousStateBehavior[]

/\*\*

- Retrieves the first GotoPreviousStateBehavior in collection order.
  \*/
  firstItem(): GotoPreviousStateBehavior

/\*\*

- Retrieves GotoPreviousStateBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoPreviousStateBehavior

/\*\*

- Retrieves GotoPreviousStateBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoPreviousStateBehavior

/\*\*

- Retrieves GotoPreviousStateBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoPreviousStateBehavior

/\*\*

- Retrieves GotoPreviousStateBehaviors across the supplied range.
- @param from Range start: GotoPreviousStateBehavior, index, or name.
- @param to Range end: GotoPreviousStateBehavior, index, or name.
  \*/
  itemByRange(from: GotoPreviousStateBehavior | number | string, to: GotoPreviousStateBehavior | number | string): GotoPreviousStateBehavior[]

/\*\*

- Retrieves the final GotoPreviousStateBehavior in collection order.
  \*/
  lastItem(): GotoPreviousStateBehavior

/\*\*

- Retrieves the collection's middle GotoPreviousStateBehavior.
  \*/
  middleItem(): GotoPreviousStateBehavior

/\*\*

- Retrieves the GotoPreviousStateBehavior that comes immediately after the supplied GotoPreviousStateBehavior in collection order.
- @param obj GotoPreviousStateBehavior positioned immediately before the requested GotoPreviousStateBehavior.
  \*/
  nextItem(obj: GotoPreviousStateBehavior): GotoPreviousStateBehavior

/\*\*

- Retrieves the GotoPreviousStateBehavior immediately before the supplied index.
- @param obj Index for the GotoPreviousStateBehavior positioned immediately after the requested GotoPreviousStateBehavior.
  \*/
  previousItem(obj: GotoPreviousStateBehavior): GotoPreviousStateBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoPreviousStateBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a goto state behavior.
  \*/
  declare class GotoStateBehavior extends Behavior {
  /\*\*
  - Associated multi-state object page item.
    \*/
    associatedMultiStateObject: MultiStateObject

/\*\*

- When true, rollover roll off returns automatically to the previous state.
  \*/
  goBackOnRollOff: boolean

/\*\*

- State name inside the associated multi-state object.
  \*/
  stateName: string
  }

/\*\*

- Holds goto state behaviors.
  \*/
  declare class GotoStateBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoStateBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoStateBehavior

/\*\*

- Adds a new GotoStateBehavior.
- @param withProperties Starting property values for the new GotoStateBehavior
  \*/
  add(withProperties: object): GotoStateBehavior

/\*\*

- Retrieves an arbitrary GotoStateBehavior from the collection.
  \*/
  anyItem(): GotoStateBehavior

/\*\*

- Reports how many elements the GotoStateBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoStateBehavior objects in the collection.
  \*/
  everyItem(): GotoStateBehavior[]

/\*\*

- Retrieves the first GotoStateBehavior in collection order.
  \*/
  firstItem(): GotoStateBehavior

/\*\*

- Retrieves GotoStateBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoStateBehavior

/\*\*

- Retrieves GotoStateBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoStateBehavior

/\*\*

- Retrieves GotoStateBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoStateBehavior

/\*\*

- Retrieves GotoStateBehaviors across the supplied range.
- @param from Range start: GotoStateBehavior, index, or name.
- @param to Range end: GotoStateBehavior, index, or name.
  \*/
  itemByRange(from: GotoStateBehavior | number | string, to: GotoStateBehavior | number | string): GotoStateBehavior[]

/\*\*

- Retrieves the final GotoStateBehavior in collection order.
  \*/
  lastItem(): GotoStateBehavior

/\*\*

- Retrieves the collection's middle GotoStateBehavior.
  \*/
  middleItem(): GotoStateBehavior

/\*\*

- Retrieves the GotoStateBehavior that comes immediately after the supplied GotoStateBehavior in collection order.
- @param obj GotoStateBehavior positioned immediately before the requested GotoStateBehavior.
  \*/
  nextItem(obj: GotoStateBehavior): GotoStateBehavior

/\*\*

- Retrieves the GotoStateBehavior immediately before the supplied index.
- @param obj Index for the GotoStateBehavior positioned immediately after the requested GotoStateBehavior.
  \*/
  previousItem(obj: GotoStateBehavior): GotoStateBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoStateBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a view zoom behavior object.
  \*/
  declare class ViewZoomBehavior extends Behavior {
  /\*\*
  - View zoom style.
    \*/
    viewZoomStyle: ViewZoomStyle
    }

/\*\*

- Holds view zoom behavior objects.
  \*/
  declare class ViewZoomBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves ViewZoomBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: ViewZoomBehavior

/\*\*

- Adds a new ViewZoomBehavior.
- @param withProperties Starting property values for the new ViewZoomBehavior
  \*/
  add(withProperties: object): ViewZoomBehavior

/\*\*

- Retrieves an arbitrary ViewZoomBehavior from the collection.
  \*/
  anyItem(): ViewZoomBehavior

/\*\*

- Reports how many elements the ViewZoomBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all ViewZoomBehavior objects in the collection.
  \*/
  everyItem(): ViewZoomBehavior[]

/\*\*

- Retrieves the first ViewZoomBehavior in collection order.
  \*/
  firstItem(): ViewZoomBehavior

/\*\*

- Retrieves ViewZoomBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ViewZoomBehavior

/\*\*

- Retrieves ViewZoomBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): ViewZoomBehavior

/\*\*

- Retrieves ViewZoomBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): ViewZoomBehavior

/\*\*

- Retrieves ViewZoomBehaviors across the supplied range.
- @param from Range start: ViewZoomBehavior, index, or name.
- @param to Range end: ViewZoomBehavior, index, or name.
  \*/
  itemByRange(from: ViewZoomBehavior | number | string, to: ViewZoomBehavior | number | string): ViewZoomBehavior[]

/\*\*

- Retrieves the final ViewZoomBehavior in collection order.
  \*/
  lastItem(): ViewZoomBehavior

/\*\*

- Retrieves the collection's middle ViewZoomBehavior.
  \*/
  middleItem(): ViewZoomBehavior

/\*\*

- Retrieves the ViewZoomBehavior that comes immediately after the supplied ViewZoomBehavior in collection order.
- @param obj ViewZoomBehavior positioned immediately before the requested ViewZoomBehavior.
  \*/
  nextItem(obj: ViewZoomBehavior): ViewZoomBehavior
