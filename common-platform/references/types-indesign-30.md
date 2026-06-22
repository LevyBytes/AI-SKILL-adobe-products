# Indesign (part 30)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Retrieves the collection's middle Behavior.
  \*/
  middleItem(): Behavior

/\*\*

- Retrieves the Behavior that comes immediately after the supplied Behavior in collection order.
- @param obj Behavior positioned immediately before the requested Behavior.
  \*/
  nextItem(obj: Behavior): Behavior

/\*\*

- Retrieves the Behavior immediately before the supplied index.
- @param obj Index for the Behavior positioned immediately after the requested Behavior.
  \*/
  previousItem(obj: Behavior): Behavior

/\*\*

- Builds an executable source string that resolves back to the Behavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a behavior object that moves to the document's first page.
  \*/
  declare class GotoFirstPageBehavior extends Behavior {
  /\*\*
  - Zoom setting.
    \*/
    zoomSetting: GoToZoomOptions
    }

/\*\*

- Holds goto first page behavior objects.
  \*/
  declare class GotoFirstPageBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoFirstPageBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoFirstPageBehavior

/\*\*

- Adds a new GotoFirstPageBehavior.
- @param withProperties Starting property values for the new GotoFirstPageBehavior
  \*/
  add(withProperties: object): GotoFirstPageBehavior

/\*\*

- Retrieves an arbitrary GotoFirstPageBehavior from the collection.
  \*/
  anyItem(): GotoFirstPageBehavior

/\*\*

- Reports how many elements the GotoFirstPageBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoFirstPageBehavior objects in the collection.
  \*/
  everyItem(): GotoFirstPageBehavior[]

/\*\*

- Retrieves the first GotoFirstPageBehavior in collection order.
  \*/
  firstItem(): GotoFirstPageBehavior

/\*\*

- Retrieves GotoFirstPageBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoFirstPageBehavior

/\*\*

- Retrieves GotoFirstPageBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoFirstPageBehavior

/\*\*

- Retrieves GotoFirstPageBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoFirstPageBehavior

/\*\*

- Retrieves GotoFirstPageBehaviors across the supplied range.
- @param from Range start: GotoFirstPageBehavior, index, or name.
- @param to Range end: GotoFirstPageBehavior, index, or name.
  \*/
  itemByRange(from: GotoFirstPageBehavior | number | string, to: GotoFirstPageBehavior | number | string): GotoFirstPageBehavior[]

/\*\*

- Retrieves the final GotoFirstPageBehavior in collection order.
  \*/
  lastItem(): GotoFirstPageBehavior

/\*\*

- Retrieves the collection's middle GotoFirstPageBehavior.
  \*/
  middleItem(): GotoFirstPageBehavior

/\*\*

- Retrieves the GotoFirstPageBehavior that comes immediately after the supplied GotoFirstPageBehavior in collection order.
- @param obj GotoFirstPageBehavior positioned immediately before the requested GotoFirstPageBehavior.
  \*/
  nextItem(obj: GotoFirstPageBehavior): GotoFirstPageBehavior

/\*\*

- Retrieves the GotoFirstPageBehavior immediately before the supplied index.
- @param obj Index for the GotoFirstPageBehavior positioned immediately after the requested GotoFirstPageBehavior.
  \*/
  previousItem(obj: GotoFirstPageBehavior): GotoFirstPageBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoFirstPageBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a behavior object that moves to the document's last page.
  \*/
  declare class GotoLastPageBehavior extends Behavior {
  /\*\*
  - Zoom setting.
    \*/
    zoomSetting: GoToZoomOptions
    }

/\*\*

- Holds goto last page behavior objects.
  \*/
  declare class GotoLastPageBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoLastPageBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoLastPageBehavior

/\*\*

- Adds a new GotoLastPageBehavior.
- @param withProperties Starting property values for the new GotoLastPageBehavior
  \*/
  add(withProperties: object): GotoLastPageBehavior

/\*\*

- Retrieves an arbitrary GotoLastPageBehavior from the collection.
  \*/
  anyItem(): GotoLastPageBehavior

/\*\*

- Reports how many elements the GotoLastPageBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoLastPageBehavior objects in the collection.
  \*/
  everyItem(): GotoLastPageBehavior[]

/\*\*

- Retrieves the first GotoLastPageBehavior in collection order.
  \*/
  firstItem(): GotoLastPageBehavior

/\*\*

- Retrieves GotoLastPageBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoLastPageBehavior

/\*\*

- Retrieves GotoLastPageBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoLastPageBehavior

/\*\*

- Retrieves GotoLastPageBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoLastPageBehavior

/\*\*

- Retrieves GotoLastPageBehaviors across the supplied range.
- @param from Range start: GotoLastPageBehavior, index, or name.
- @param to Range end: GotoLastPageBehavior, index, or name.
  \*/
  itemByRange(from: GotoLastPageBehavior | number | string, to: GotoLastPageBehavior | number | string): GotoLastPageBehavior[]

/\*\*

- Retrieves the final GotoLastPageBehavior in collection order.
  \*/
  lastItem(): GotoLastPageBehavior

/\*\*

- Retrieves the collection's middle GotoLastPageBehavior.
  \*/
  middleItem(): GotoLastPageBehavior

/\*\*

- Retrieves the GotoLastPageBehavior that comes immediately after the supplied GotoLastPageBehavior in collection order.
- @param obj GotoLastPageBehavior positioned immediately before the requested GotoLastPageBehavior.
  \*/
  nextItem(obj: GotoLastPageBehavior): GotoLastPageBehavior

/\*\*

- Retrieves the GotoLastPageBehavior immediately before the supplied index.
- @param obj Index for the GotoLastPageBehavior positioned immediately after the requested GotoLastPageBehavior.
  \*/
  previousItem(obj: GotoLastPageBehavior): GotoLastPageBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoLastPageBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a behavior object that advances to the next document page.
  \*/
  declare class GotoNextPageBehavior extends Behavior {
  /\*\*
  - Zoom setting.
    \*/
    zoomSetting: GoToZoomOptions
    }

/\*\*

- Holds goto next page behavior objects.
  \*/
  declare class GotoNextPageBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoNextPageBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoNextPageBehavior

/\*\*

- Adds a new GotoNextPageBehavior.
- @param withProperties Starting property values for the new GotoNextPageBehavior
  \*/
  add(withProperties: object): GotoNextPageBehavior

/\*\*

- Retrieves an arbitrary GotoNextPageBehavior from the collection.
  \*/
  anyItem(): GotoNextPageBehavior

/\*\*

- Reports how many elements the GotoNextPageBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoNextPageBehavior objects in the collection.
  \*/
  everyItem(): GotoNextPageBehavior[]

/\*\*

- Retrieves the first GotoNextPageBehavior in collection order.
  \*/
  firstItem(): GotoNextPageBehavior

/\*\*

- Retrieves GotoNextPageBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoNextPageBehavior

/\*\*

- Retrieves GotoNextPageBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoNextPageBehavior

/\*\*

- Retrieves GotoNextPageBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoNextPageBehavior

/\*\*

- Retrieves GotoNextPageBehaviors across the supplied range.
- @param from Range start: GotoNextPageBehavior, index, or name.
- @param to Range end: GotoNextPageBehavior, index, or name.
  \*/
  itemByRange(from: GotoNextPageBehavior | number | string, to: GotoNextPageBehavior | number | string): GotoNextPageBehavior[]

/\*\*

- Retrieves the final GotoNextPageBehavior in collection order.
  \*/
  lastItem(): GotoNextPageBehavior

/\*\*

- Retrieves the collection's middle GotoNextPageBehavior.
  \*/
  middleItem(): GotoNextPageBehavior

/\*\*

- Retrieves the GotoNextPageBehavior that comes immediately after the supplied GotoNextPageBehavior in collection order.
- @param obj GotoNextPageBehavior positioned immediately before the requested GotoNextPageBehavior.
  \*/
  nextItem(obj: GotoNextPageBehavior): GotoNextPageBehavior

/\*\*

- Retrieves the GotoNextPageBehavior immediately before the supplied index.
- @param obj Index for the GotoNextPageBehavior positioned immediately after the requested GotoNextPageBehavior.
  \*/
  previousItem(obj: GotoNextPageBehavior): GotoNextPageBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoNextPageBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a behavior object that moves back to the previous document page.
  \*/
  declare class GotoPreviousPageBehavior extends Behavior {
  /\*\*
  - Zoom setting.
    \*/
    zoomSetting: GoToZoomOptions
    }

/\*\*

- Holds goto previous page behavior objects.
  \*/
  declare class GotoPreviousPageBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoPreviousPageBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoPreviousPageBehavior

/\*\*

- Adds a new GotoPreviousPageBehavior.
- @param withProperties Starting property values for the new GotoPreviousPageBehavior
  \*/
  add(withProperties: object): GotoPreviousPageBehavior

/\*\*

- Retrieves an arbitrary GotoPreviousPageBehavior from the collection.
  \*/
  anyItem(): GotoPreviousPageBehavior

/\*\*

- Reports how many elements the GotoPreviousPageBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoPreviousPageBehavior objects in the collection.
  \*/
  everyItem(): GotoPreviousPageBehavior[]

/\*\*

- Retrieves the first GotoPreviousPageBehavior in collection order.
  \*/
  firstItem(): GotoPreviousPageBehavior

/\*\*

- Retrieves GotoPreviousPageBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoPreviousPageBehavior

/\*\*

- Retrieves GotoPreviousPageBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoPreviousPageBehavior

/\*\*

- Retrieves GotoPreviousPageBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoPreviousPageBehavior

/\*\*

- Retrieves GotoPreviousPageBehaviors across the supplied range.
- @param from Range start: GotoPreviousPageBehavior, index, or name.
- @param to Range end: GotoPreviousPageBehavior, index, or name.
  \*/
  itemByRange(from: GotoPreviousPageBehavior | number | string, to: GotoPreviousPageBehavior | number | string): GotoPreviousPageBehavior[]

/\*\*

- Retrieves the final GotoPreviousPageBehavior in collection order.
  \*/
  lastItem(): GotoPreviousPageBehavior

/\*\*

- Retrieves the collection's middle GotoPreviousPageBehavior.
  \*/
  middleItem(): GotoPreviousPageBehavior

/\*\*

- Retrieves the GotoPreviousPageBehavior that comes immediately after the supplied GotoPreviousPageBehavior in collection order.
- @param obj GotoPreviousPageBehavior positioned immediately before the requested GotoPreviousPageBehavior.
  \*/
  nextItem(obj: GotoPreviousPageBehavior): GotoPreviousPageBehavior

/\*\*

- Retrieves the GotoPreviousPageBehavior immediately before the supplied index.
- @param obj Index for the GotoPreviousPageBehavior positioned immediately after the requested GotoPreviousPageBehavior.
  \*/
  previousItem(obj: GotoPreviousPageBehavior): GotoPreviousPageBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoPreviousPageBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a behavior object that advances to the next view.
  \*/
  declare class GotoNextViewBehavior extends Behavior {
  /\*\*
  - Zoom setting.
    \*/
    zoomSetting: GoToZoomOptions
    }

/\*\*

- Holds goto next view behavior objects.
  \*/
  declare class GotoNextViewBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoNextViewBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoNextViewBehavior

/\*\*

- Adds a new GotoNextViewBehavior.
- @param withProperties Starting property values for the new GotoNextViewBehavior
  \*/
  add(withProperties: object): GotoNextViewBehavior

/\*\*

- Retrieves an arbitrary GotoNextViewBehavior from the collection.
  \*/
  anyItem(): GotoNextViewBehavior

/\*\*

- Reports how many elements the GotoNextViewBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoNextViewBehavior objects in the collection.
  \*/
  everyItem(): GotoNextViewBehavior[]

/\*\*

- Retrieves the first GotoNextViewBehavior in collection order.
  \*/
  firstItem(): GotoNextViewBehavior

/\*\*

- Retrieves GotoNextViewBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoNextViewBehavior

/\*\*

- Retrieves GotoNextViewBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoNextViewBehavior

/\*\*

- Retrieves GotoNextViewBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoNextViewBehavior

/\*\*

- Retrieves GotoNextViewBehaviors across the supplied range.
- @param from Range start: GotoNextViewBehavior, index, or name.
- @param to Range end: GotoNextViewBehavior, index, or name.
  \*/
  itemByRange(from: GotoNextViewBehavior | number | string, to: GotoNextViewBehavior | number | string): GotoNextViewBehavior[]

/\*\*

- Retrieves the final GotoNextViewBehavior in collection order.
  \*/
  lastItem(): GotoNextViewBehavior

/\*\*

- Retrieves the collection's middle GotoNextViewBehavior.
  \*/
  middleItem(): GotoNextViewBehavior

/\*\*

- Retrieves the GotoNextViewBehavior that comes immediately after the supplied GotoNextViewBehavior in collection order.
- @param obj GotoNextViewBehavior positioned immediately before the requested GotoNextViewBehavior.
  \*/
  nextItem(obj: GotoNextViewBehavior): GotoNextViewBehavior

/\*\*

- Retrieves the GotoNextViewBehavior immediately before the supplied index.
- @param obj Index for the GotoNextViewBehavior positioned immediately after the requested GotoNextViewBehavior.
  \*/
  previousItem(obj: GotoNextViewBehavior): GotoNextViewBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoNextViewBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a behavior object that moves back to the previous view.
  \*/
  declare class GotoPreviousViewBehavior extends Behavior {
  /\*\*
  - Zoom setting.
    \*/
    zoomSetting: GoToZoomOptions
    }

/\*\*

- Holds goto previous view behavior objects.
  \*/
  declare class GotoPreviousViewBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoPreviousViewBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoPreviousViewBehavior

/\*\*

- Adds a new GotoPreviousViewBehavior.
- @param withProperties Starting property values for the new GotoPreviousViewBehavior
  \*/
  add(withProperties: object): GotoPreviousViewBehavior

/\*\*

- Retrieves an arbitrary GotoPreviousViewBehavior from the collection.
  \*/
  anyItem(): GotoPreviousViewBehavior

/\*\*

- Reports how many elements the GotoPreviousViewBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoPreviousViewBehavior objects in the collection.
  \*/
  everyItem(): GotoPreviousViewBehavior[]

/\*\*

- Retrieves the first GotoPreviousViewBehavior in collection order.
  \*/
  firstItem(): GotoPreviousViewBehavior

/\*\*

- Retrieves GotoPreviousViewBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoPreviousViewBehavior

/\*\*

- Retrieves GotoPreviousViewBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoPreviousViewBehavior

/\*\*

- Retrieves GotoPreviousViewBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoPreviousViewBehavior

/\*\*

- Retrieves GotoPreviousViewBehaviors across the supplied range.
- @param from Range start: GotoPreviousViewBehavior, index, or name.
- @param to Range end: GotoPreviousViewBehavior, index, or name.
  \*/
  itemByRange(from: GotoPreviousViewBehavior | number | string, to: GotoPreviousViewBehavior | number | string): GotoPreviousViewBehavior[]

/\*\*

- Retrieves the final GotoPreviousViewBehavior in collection order.
  \*/
  lastItem(): GotoPreviousViewBehavior

/\*\*

- Retrieves the collection's middle GotoPreviousViewBehavior.
  \*/
  middleItem(): GotoPreviousViewBehavior

/\*\*

- Retrieves the GotoPreviousViewBehavior that comes immediately after the supplied GotoPreviousViewBehavior in collection order.
- @param obj GotoPreviousViewBehavior positioned immediately before the requested GotoPreviousViewBehavior.
  \*/
  nextItem(obj: GotoPreviousViewBehavior): GotoPreviousViewBehavior

/\*\*

- Retrieves the GotoPreviousViewBehavior immediately before the supplied index.
- @param obj Index for the GotoPreviousViewBehavior positioned immediately after the requested GotoPreviousViewBehavior.
  \*/
  previousItem(obj: GotoPreviousViewBehavior): GotoPreviousViewBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoPreviousViewBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a behavior object that opens a URL.
  \*/
  declare class GotoURLBehavior extends Behavior {
  /\*\*
  - URL.
    \*/
    url: string
    }

/\*\*

- Holds goto URL behavior objects.
  \*/
  declare class GotoURLBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves GotoURLBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: GotoURLBehavior

/\*\*

- Adds a new GotoURLBehavior.
- @param withProperties Starting property values for the new GotoURLBehavior
  \*/
  add(withProperties: object): GotoURLBehavior

/\*\*

- Retrieves an arbitrary GotoURLBehavior from the collection.
  \*/
  anyItem(): GotoURLBehavior

/\*\*

- Reports how many elements the GotoURLBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all GotoURLBehavior objects in the collection.
  \*/
  everyItem(): GotoURLBehavior[]

/\*\*

- Retrieves the first GotoURLBehavior in collection order.
  \*/
  firstItem(): GotoURLBehavior

/\*\*

- Retrieves GotoURLBehavior by the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GotoURLBehavior

/\*\*

- Retrieves GotoURLBehavior by the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): GotoURLBehavior

/\*\*

- Retrieves GotoURLBehavior by the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): GotoURLBehavior

/\*\*

- Retrieves GotoURLBehaviors across the supplied range.
- @param from Range start: GotoURLBehavior, index, or name.
- @param to Range end: GotoURLBehavior, index, or name.
  \*/
  itemByRange(from: GotoURLBehavior | number | string, to: GotoURLBehavior | number | string): GotoURLBehavior[]

/\*\*

- Retrieves the final GotoURLBehavior in collection order.
  \*/
  lastItem(): GotoURLBehavior

/\*\*

- Retrieves the collection's middle GotoURLBehavior.
  \*/
  middleItem(): GotoURLBehavior

/\*\*

- Retrieves the GotoURLBehavior that comes immediately after the supplied GotoURLBehavior in collection order.
- @param obj GotoURLBehavior positioned immediately before the requested GotoURLBehavior.
  \*/
  nextItem(obj: GotoURLBehavior): GotoURLBehavior

/\*\*

- Retrieves the GotoURLBehavior immediately before the supplied index.
- @param obj Index for the GotoURLBehavior positioned immediately after the requested GotoURLBehavior.
  \*/
  previousItem(obj: GotoURLBehavior): GotoURLBehavior

/\*\*

- Builds an executable source string that resolves back to the GotoURLBehavior.
  \*/
  toSource(): string
  }

/\*\*

- Represents a movie behavior object.
  \*/
  declare class MovieBehavior extends Behavior {
  /\*\*
  - Movie page item.
    \*/
    movieItem: Movie

/\*\*

- Navigation point id used as the playback start. All operations except Play From Navigation Point ignore this property.
  \*/
  navigationPointID: number

/\*\*

- Playback mode.
  \*/
  operation: MoviePlayOperations
  }

/\*\*

- Holds movie behavior objects.
  \*/
  declare class MovieBehaviors {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves MovieBehavior by the supplied index.
- @param index Index value.
  \*/
  [index: number]: MovieBehavior

/\*\*

- Adds a new MovieBehavior.
- @param withProperties Starting property values for the new MovieBehavior
  \*/
  add(withProperties: object): MovieBehavior

/\*\*

- Retrieves an arbitrary MovieBehavior from the collection.
  \*/
  anyItem(): MovieBehavior

/\*\*

- Reports how many elements the MovieBehavior contains.
  \*/
  count(): number

/\*\*

- Retrieves all MovieBehavior objects in the collection.
  \*/
  everyItem(): MovieBehavior[]

/\*\*

- Retrieves the first MovieBehavior in collection order.
  \*/
  firstItem(): MovieBehavior
