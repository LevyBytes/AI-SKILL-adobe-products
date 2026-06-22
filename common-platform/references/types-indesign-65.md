# Indesign (part 65)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- TOC style name used to generate the epub TOC.
  \*/
  tocStyleName: string
  }

/\*\*

- EPub export preview application settings.
  \*/
  declare class EPubExportPreviewAppPreference extends Preference {
  /\*\*
  - When true, opens the document in a viewer after export.
    \*/
    viewDocumentAfterExport: boolean

/\*\*

- Adds a preview application preference
- @param applicationPath Full path for the application being added.
- @param selectedForReflowableEpub Whether the app is selected for Reflowable ePub export.
- @param selectedForFixedLayoutEpub Whether the app is selected for Fixed Layout ePub export.
- @param withProperties Starting property values for EPubExportPreviewAppPreference.
  \*/
  addApplication(applicationPath: string, selectedForReflowableEpub: boolean, selectedForFixedLayoutEpub: boolean, withProperties: object): void

/\*\*

- Gets the application at the given index.
- @param indexOfApp Application index whose information should be returned.
- @param withProperties Starting property values for EPubExportPreviewAppPreference.
  \*/
  getApplicationAtIndex(indexOfApp: boolean, withProperties: object): any

/\*\*

- Count of applications added for ePub Preview.
  \*/
  getApplicationCount(): number

/\*\*

- Removes the application at the specified index.
- @param indexOfApp Application index to remove.
- @param withProperties Starting property values for EPubExportPreviewAppPreference.
  \*/
  removeApplication(indexOfApp: number, withProperties: object): void
  }

/\*\*

- HTML FXL export preference settings.
  \*/
  declare class HTMLFXLExportPreference extends Preference {
  /\*\*
  - EPub page range.
    \*/
    epubPageRange: string

/\*\*

- EPub page range format.
  \*/
  epubPageRangeFormat: PageRangeFormat
  }

/\*\*

- Publish export preference settings.
  \*/
  declare class PublishExportPreference extends Preference {
  /\*\*
  - File path for the epub cover image.
    \*/
    coverImageFile: string

/\*\*

- Cover page setting.
  \*/
  coverPage: string

/\*\*

- GIF conversion color palette. This applies only when image conversion is not JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette

/\*\*

- File format for converted images. Requires copy optimized images or copy formatted images to be true.
  \*/
  imageConversion: ImageConversion

/\*\*

- Export resolution setting
  \*/
  imageExportResolution: ImageResolution

/\*\*

- JPEG conversion quality. This setting is unavailable when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality

/\*\*

- Publish cover option.
  \*/
  publishCover: PublishCoverEnum

/\*\*

- Publish description.
  \*/
  publishDescription: string

/\*\*

- File name.
  \*/
  publishFileName: string

/\*\*

- Publish format setting.
  \*/
  publishFormat: PublishFormatEnum

/\*\*

- Publish page range.
  \*/
  publishPageRange: string

/\*\*

- Publish page range format.
  \*/
  publishPageRangeFormat: PageRangeFormat

/\*\*

- Whether a PDF is uploaded during publishing.
  \*/
  publishPdf: boolean
  }

/\*\*

- Options controlling a linked story.
  \*/
  declare class LinkedStoryOption extends Preference {
  /\*\*
  - When true, linked story creation or update applies style mappings.
    \*/
    applyStyleMappings: boolean

/\*\*

- When true, story creation or update removes forced line breaks.
  \*/
  removeForcedLineBreaks: boolean

/\*\*

- When true, the linked story updates during save.
  \*/
  updateWhileSaving: boolean

/\*\*

- When true, shows a warning if updating the link would override local edits.
  \*/
  warnOnUpdateOfEditedStory: boolean
  }

/\*\*

- Para style mapping object.
  \*/
  declare class ParaStyleMapping {
  /\*\*
  - Destination style name property.
    \*/
    destinationStyleName: string

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Index of the ParaStyleMapping inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Mapping rule type.
  \*/
  mappingRuleType: MapType

/\*\*

- Parent object for the ParaStyleMapping (a Application, Document, Story or XmlStory).
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning several properties at once.
  \*/
  properties: object

/\*\*

- Source style name property.
  \*/
  sourceStyleName: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier to an object-reference array.
  \*/
  getElements(): ParaStyleMapping[]

/\*\*

- Removes this style mapping.
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

- Creates an executable string that returns the ParaStyleMapping.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for para style mappings.
  \*/
  declare class ParaStyleMappings {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the ParaStyleMapping addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: ParaStyleMapping

/\*\*

- Creates a style mapping.
- @param sourceStyleName Source style name.
- @param destinationStyleName Destination style name.
- @param mappingRuleType Mapping type
- @param withProperties Starting property values for ParaStyleMapping.
  \*/
  add(sourceStyleName: string, destinationStyleName: string, mappingRuleType: MapType, withProperties: object): ParaStyleMapping

/\*\*

- Gets any ParaStyleMapping from the collection.
  \*/
  anyItem(): ParaStyleMapping

/\*\*

- Reports the element count for the ParaStyleMapping.
  \*/
  count(): number

/\*\*

- Gets every ParaStyleMapping in the collection.
  \*/
  everyItem(): ParaStyleMapping[]

/\*\*

- Gets the first ParaStyleMapping in the collection.
  \*/
  firstItem(): ParaStyleMapping

/\*\*

- Gets the ParaStyleMapping addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ParaStyleMapping

/\*\*

- Gets the ParaStyleMappings included in the specified range.
- @param from Starting ParaStyleMapping, index, or name for the range.
- @param to Ending ParaStyleMapping, index, or name for the range.
  \*/
  itemByRange(from: ParaStyleMapping | number | string, to: ParaStyleMapping | number | string): ParaStyleMapping[]

/\*\*

- Gets the last ParaStyleMapping in the collection.
  \*/
  lastItem(): ParaStyleMapping

/\*\*

- Gets the middle ParaStyleMapping in the collection.
  \*/
  middleItem(): ParaStyleMapping

/\*\*

- Gets the collection item after the specified ParaStyleMapping.
- @param obj ParaStyleMapping positioned before the desired ParaStyleMapping.
  \*/
  nextItem(obj: ParaStyleMapping): ParaStyleMapping

/\*\*

- Gets the ParaStyleMapping before the specified index.
- @param obj Index of the ParaStyleMapping after the desired ParaStyleMapping.
  \*/
  previousItem(obj: ParaStyleMapping): ParaStyleMapping

/\*\*

- Creates an executable string that returns the ParaStyleMapping.
  \*/
  toSource(): string
  }

/\*\*

- Cell style mapping object.
  \*/
  declare class CellStyleMapping {
  /\*\*
  - Destination style name property.
    \*/
    destinationStyleName: string

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Index of the CellStyleMapping inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Mapping rule type.
  \*/
  mappingRuleType: MapType

/\*\*

- Parent object for the CellStyleMapping (a Application, Document, Story or XmlStory).
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning several properties at once.
  \*/
  properties: object

/\*\*

- Source style name property.
  \*/
  sourceStyleName: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier to an object-reference array.
  \*/
  getElements(): CellStyleMapping[]

/\*\*

- Removes this style mapping.
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

- Creates an executable string that returns the CellStyleMapping.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for cell style mappings.
  \*/
  declare class CellStyleMappings {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the CellStyleMapping addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: CellStyleMapping

/\*\*

- Creates a style mapping.
- @param sourceStyleName Source style name.
- @param destinationStyleName Destination style name.
- @param mappingRuleType Mapping type
- @param withProperties Starting property values for CellStyleMapping.
  \*/
  add(sourceStyleName: string, destinationStyleName: string, mappingRuleType: MapType, withProperties: object): CellStyleMapping

/\*\*

- Gets any CellStyleMapping from the collection.
  \*/
  anyItem(): CellStyleMapping

/\*\*

- Reports the element count for the CellStyleMapping.
  \*/
  count(): number

/\*\*

- Gets every CellStyleMapping in the collection.
  \*/
  everyItem(): CellStyleMapping[]

/\*\*

- Gets the first CellStyleMapping in the collection.
  \*/
  firstItem(): CellStyleMapping

/\*\*

- Gets the CellStyleMapping addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): CellStyleMapping

/\*\*

- Gets the CellStyleMappings included in the specified range.
- @param from Starting CellStyleMapping, index, or name for the range.
- @param to Ending CellStyleMapping, index, or name for the range.
  \*/
  itemByRange(from: CellStyleMapping | number | string, to: CellStyleMapping | number | string): CellStyleMapping[]

/\*\*

- Gets the last CellStyleMapping in the collection.
  \*/
  lastItem(): CellStyleMapping

/\*\*

- Gets the middle CellStyleMapping in the collection.
  \*/
  middleItem(): CellStyleMapping

/\*\*

- Gets the collection item after the specified CellStyleMapping.
- @param obj CellStyleMapping positioned before the desired CellStyleMapping.
  \*/
  nextItem(obj: CellStyleMapping): CellStyleMapping

/\*\*

- Gets the CellStyleMapping before the specified index.
- @param obj Index of the CellStyleMapping after the desired CellStyleMapping.
  \*/
  previousItem(obj: CellStyleMapping): CellStyleMapping

/\*\*

- Creates an executable string that returns the CellStyleMapping.
  \*/
  toSource(): string
  }

/\*\*

- Char style mapping object.
  \*/
  declare class CharStyleMapping {
  /\*\*
  - Destination style name property.
    \*/
    destinationStyleName: string

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Index of the CharStyleMapping inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Mapping rule type.
  \*/
  mappingRuleType: MapType

/\*\*

- Parent object for the CharStyleMapping (a Application, Document, Story or XmlStory).
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning several properties at once.
  \*/
  properties: object

/\*\*

- Source style name property.
  \*/
  sourceStyleName: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier to an object-reference array.
  \*/
  getElements(): CharStyleMapping[]

/\*\*

- Removes this style mapping.
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

- Creates an executable string that returns the CharStyleMapping.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for char style mappings.
  \*/
  declare class CharStyleMappings {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the CharStyleMapping addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: CharStyleMapping

/\*\*

- Creates a style mapping.
- @param sourceStyleName Source style name.
- @param destinationStyleName Destination style name.
- @param mappingRuleType Mapping type
- @param withProperties Starting property values for CharStyleMapping.
  \*/
  add(sourceStyleName: string, destinationStyleName: string, mappingRuleType: MapType, withProperties: object): CharStyleMapping

/\*\*

- Gets any CharStyleMapping from the collection.
  \*/
  anyItem(): CharStyleMapping

/\*\*

- Reports the element count for the CharStyleMapping.
  \*/
  count(): number

/\*\*

- Gets every CharStyleMapping in the collection.
  \*/
  everyItem(): CharStyleMapping[]

/\*\*

- Gets the first CharStyleMapping in the collection.
  \*/
  firstItem(): CharStyleMapping

/\*\*

- Gets the CharStyleMapping addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): CharStyleMapping

/\*\*

- Gets the CharStyleMappings included in the specified range.
- @param from Starting CharStyleMapping, index, or name for the range.
- @param to Ending CharStyleMapping, index, or name for the range.
  \*/
  itemByRange(from: CharStyleMapping | number | string, to: CharStyleMapping | number | string): CharStyleMapping[]

/\*\*

- Gets the last CharStyleMapping in the collection.
  \*/
  lastItem(): CharStyleMapping

/\*\*

- Gets the middle CharStyleMapping in the collection.
  \*/
  middleItem(): CharStyleMapping

/\*\*

- Gets the collection item after the specified CharStyleMapping.
- @param obj CharStyleMapping positioned before the desired CharStyleMapping.
  \*/
  nextItem(obj: CharStyleMapping): CharStyleMapping

/\*\*

- Gets the CharStyleMapping before the specified index.
- @param obj Index of the CharStyleMapping after the desired CharStyleMapping.
  \*/
  previousItem(obj: CharStyleMapping): CharStyleMapping

/\*\*

- Creates an executable string that returns the CharStyleMapping.
  \*/
  toSource(): string
  }

/\*\*

- Table style mapping object.
  \*/
  declare class TableStyleMapping {
  /\*\*
  - Destination style name property.
    \*/
    destinationStyleName: string

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Index of the TableStyleMapping inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Mapping rule type.
  \*/
  mappingRuleType: MapType

/\*\*

- Parent object for the TableStyleMapping (a Application, Document, Story or XmlStory).
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning several properties at once.
  \*/
  properties: object

/\*\*

- Source style name property.
  \*/
  sourceStyleName: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier to an object-reference array.
  \*/
  getElements(): TableStyleMapping[]

/\*\*

- Removes this style mapping.
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

- Creates an executable string that returns the TableStyleMapping.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for table style mappings.
  \*/
  declare class TableStyleMappings {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TableStyleMapping addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: TableStyleMapping

/\*\*

- Creates a style mapping.
- @param sourceStyleName Source style name.
- @param destinationStyleName Destination style name.
- @param mappingRuleType Mapping type
- @param withProperties Starting property values for TableStyleMapping.
  \*/
  add(sourceStyleName: string, destinationStyleName: string, mappingRuleType: MapType, withProperties: object): TableStyleMapping

/\*\*

- Gets any TableStyleMapping from the collection.
  \*/
  anyItem(): TableStyleMapping

/\*\*

- Reports the element count for the TableStyleMapping.
  \*/
  count(): number

/\*\*

- Gets every TableStyleMapping in the collection.
  \*/
  everyItem(): TableStyleMapping[]

/\*\*

- Gets the first TableStyleMapping in the collection.
  \*/
  firstItem(): TableStyleMapping

/\*\*

- Gets the TableStyleMapping addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): TableStyleMapping

/\*\*

- Gets the TableStyleMappings included in the specified range.
- @param from Starting TableStyleMapping, index, or name for the range.
- @param to Ending TableStyleMapping, index, or name for the range.
  \*/
  itemByRange(from: TableStyleMapping | number | string, to: TableStyleMapping | number | string): TableStyleMapping[]

/\*\*

- Gets the last TableStyleMapping in the collection.
  \*/
  lastItem(): TableStyleMapping

/\*\*

- Gets the middle TableStyleMapping in the collection.
  \*/
  middleItem(): TableStyleMapping

/\*\*

- Gets the collection item after the specified TableStyleMapping.
- @param obj TableStyleMapping positioned before the desired TableStyleMapping.
  \*/
  nextItem(obj: TableStyleMapping): TableStyleMapping

/\*\*

- Gets the TableStyleMapping before the specified index.
- @param obj Index of the TableStyleMapping after the desired TableStyleMapping.
  \*/
  previousItem(obj: TableStyleMapping): TableStyleMapping

/\*\*

- Creates an executable string that returns the TableStyleMapping.
  \*/
  toSource(): string
  }

/\*\*

- Options controlling a linked Page Item.
  \*/
  declare class LinkedPageItemOption extends Preference {
  /\*\*
  - When true, update preserves appearance edits.
    \*/
    preserveAppearance: boolean

/\*\*

- When true, update preserves frame content edits.
  \*/
  preserveFrameContent: boolean

/\*\*

- When true, update preserves interactivity edits.
  \*/
  preserveInteractivity: boolean

/\*\*

- When true, update preserves text wrap, hyperLinks, text frame options, and object export settings.
  \*/
  preserveOthers: boolean

/\*\*

- When true, update preserves size and shape edits.
  \*/
  preserveSizeAndShape: boolean

/\*\*

- When true, the linked Page Item updates during save.
  \*/
  updateLinkWhileSaving: boolean

/\*\*

- When true, shows a warning if updating the link would override local edits.
  \*/
  warnOnUpdateOfEditedPageItem: boolean
  }

/\*\*

- Preflight rule object
  \*/
  declare class PreflightRule {
  /\*\*
  - PreflightRule description.
    \*/
    readonly description: string

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- When true, the preflight rule has full support.
  \*/
  fullFeature: boolean

/\*\*

- Rule ID for this rule.
  \*/
  readonly id: string

/\*\*

- Index of the PreflightRule inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- PreflightRule name.
  \*/
  readonly name: string

/\*\*

- Parent object for the PreflightRule (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bag for assigning several properties at once.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier to an object-reference array.
  \*/
  getElements(): PreflightRule[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates an executable string that returns the PreflightRule.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for preflight rules.
  \*/
  declare class PreflightRules {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the PreflightRule addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: PreflightRule

/\*\*

- Gets any PreflightRule from the collection.
  \*/
  anyItem(): PreflightRule

/\*\*

- Reports the element count for the PreflightRule.
  \*/
  count(): number

/\*\*

- Gets every PreflightRule in the collection.
  \*/
  everyItem(): PreflightRule[]

/\*\*

- Gets the first PreflightRule in the collection.
  \*/
  firstItem(): PreflightRule

/\*\*

- Gets the PreflightRule addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): PreflightRule

/\*\*

- Gets the PreflightRule addressed by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): PreflightRule

/\*\*

- Gets the PreflightRule addressed by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): PreflightRule

/\*\*

- Gets the PreflightRules included in the specified range.
- @param from Starting PreflightRule, index, or name for the range.
- @param to Ending PreflightRule, index, or name for the range.
  \*/
  itemByRange(from: PreflightRule | number | string, to: PreflightRule | number | string): PreflightRule[]

/\*\*

- Gets the last PreflightRule in the collection.
  \*/
  lastItem(): PreflightRule

/\*\*

- Gets the middle PreflightRule in the collection.
  \*/
  middleItem(): PreflightRule

/\*\*

- Gets the collection item after the specified PreflightRule.
- @param obj PreflightRule positioned before the desired PreflightRule.
  \*/
  nextItem(obj: PreflightRule): PreflightRule

/\*\*

- Gets the PreflightRule before the specified index.
- @param obj Index of the PreflightRule after the desired PreflightRule.
  \*/
  previousItem(obj: PreflightRule): PreflightRule
