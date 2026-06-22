# Indesign (part 66)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Builds executable source text that resolves back to the PreflightRule.
  \*/
  toSource(): string
  }

/\*\*

- Preflight rule data object object.
  \*/
  declare class RuleDataObject {
  /\*\*
  - Data type.
    \*/
    readonly dataType: RuleDataType

/\*\*

- Value held by this data object. Can return: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects.
  \*/
  dataValue: any

/\*\*

- Collection object for event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection object for events.
  \*/
  readonly events: Events

/\*\*

- ID assigned to this rule data object.
  \*/
  readonly id: string

/\*\*

- Position of the RuleDataObject inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name of the RuleDataObject.
  \*/
  readonly name: string

/\*\*

- Parent object for the RuleDataObject (a PreflightProfileRule or PreflightRuleInstance).
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning multiple properties in one call.
  \*/
  properties: object

/\*\*

- Attaches an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): RuleDataObject[]

/\*\*

- Deletes this RuleDataObject.
  \*/
  remove(): void

/\*\*

- Detaches the event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the RuleDataObject.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for prefight rule data objects.
  \*/
  declare class RuleDataObjects {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a RuleDataObject by the specified index.
- @param index Index value.
  \*/
  [index: number]: RuleDataObject

/\*\*

- Adds new preflight rule data to a preflight profile rule.
- @param name Rule data name to add.
- @param dataType Data type.
- @param dataValue Data value. Can accept: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects.
- @param withProperties Starting property values for the new RuleDataObject
  \*/
  add(name: string, dataType: RuleDataType, dataValue: any, withProperties: object): RuleDataObject

/\*\*

- Gets an arbitrary RuleDataObject from the collection.
  \*/
  anyItem(): RuleDataObject

/\*\*

- Counts elements in the RuleDataObject.
  \*/
  count(): number

/\*\*

- Gets all RuleDataObject objects from the collection.
  \*/
  everyItem(): RuleDataObject[]

/\*\*

- Gets the first RuleDataObject from the collection.
  \*/
  firstItem(): RuleDataObject

/\*\*

- Looks up a RuleDataObject by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): RuleDataObject

/\*\*

- Finds a RuleDataObject by ID.
- @param id ID value.
  \*/
  itemByID(id: number): RuleDataObject

/\*\*

- Finds a RuleDataObject by name.
- @param name Name value.
  \*/
  itemByName(name: string): RuleDataObject

/\*\*

- Gets the RuleDataObjects entries inside the requested range.
- @param from Starting RuleDataObject, index, or name for the range.
- @param to Ending RuleDataObject, index, or name for the range.
  \*/
  itemByRange(from: RuleDataObject | number | string, to: RuleDataObject | number | string): RuleDataObject[]

/\*\*

- Gets the last RuleDataObject from the collection.
  \*/
  lastItem(): RuleDataObject

/\*\*

- Gets the middle RuleDataObject from the collection.
  \*/
  middleItem(): RuleDataObject

/\*\*

- Gets the RuleDataObject positioned after the supplied RuleDataObject in the collection.
- @param obj RuleDataObject positioned immediately before the requested RuleDataObject.
  \*/
  nextItem(obj: RuleDataObject): RuleDataObject

/\*\*

- Gets the RuleDataObject positioned before the specified index.
- @param obj Index for the RuleDataObject positioned after the requested RuleDataObject.
  \*/
  previousItem(obj: RuleDataObject): RuleDataObject

/\*\*

- Builds executable source text that resolves back to the RuleDataObject.
  \*/
  toSource(): string
  }

/\*\*

- Preflight rule instance object.
  \*/
  declare class PreflightRuleInstance extends PreflightProfileRule {}

/\*\*

- Collection object for preflight rule instances.
  \*/
  declare class PreflightRuleInstances {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a PreflightRuleInstance by the specified index.
- @param index Index value.
  \*/
  [index: number]: PreflightRuleInstance

/\*\*

- Creates and adds a preflight rule on the profile.
- @param id Rule ID to add.
- @param withProperties Starting property values for the new PreflightRuleInstance
  \*/
  add(id: string, withProperties: object): any

/\*\*

- Gets an arbitrary PreflightRuleInstance from the collection.
  \*/
  anyItem(): PreflightRuleInstance

/\*\*

- Counts elements in the PreflightRuleInstance.
  \*/
  count(): number

/\*\*

- Gets all PreflightRuleInstance objects from the collection.
  \*/
  everyItem(): PreflightRuleInstance[]

/\*\*

- Gets the first PreflightRuleInstance from the collection.
  \*/
  firstItem(): PreflightRuleInstance

/\*\*

- Looks up a PreflightRuleInstance by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): PreflightRuleInstance

/\*\*

- Finds a PreflightRuleInstance by ID.
- @param id ID value.
  \*/
  itemByID(id: number): PreflightRuleInstance

/\*\*

- Finds a PreflightRuleInstance by name.
- @param name Name value.
  \*/
  itemByName(name: string): PreflightRuleInstance

/\*\*

- Gets the PreflightRuleInstances entries inside the requested range.
- @param from Starting PreflightRuleInstance, index, or name for the range.
- @param to Ending PreflightRuleInstance, index, or name for the range.
  \*/
  itemByRange(from: PreflightRuleInstance | number | string, to: PreflightRuleInstance | number | string): PreflightRuleInstance[]

/\*\*

- Gets the last PreflightRuleInstance from the collection.
  \*/
  lastItem(): PreflightRuleInstance

/\*\*

- Gets the middle PreflightRuleInstance from the collection.
  \*/
  middleItem(): PreflightRuleInstance

/\*\*

- Gets the PreflightRuleInstance positioned after the supplied PreflightRuleInstance in the collection.
- @param obj PreflightRuleInstance positioned immediately before the requested PreflightRuleInstance.
  \*/
  nextItem(obj: PreflightRuleInstance): PreflightRuleInstance

/\*\*

- Gets the PreflightRuleInstance positioned before the specified index.
- @param obj Index for the PreflightRuleInstance positioned after the requested PreflightRuleInstance.
  \*/
  previousItem(obj: PreflightRuleInstance): PreflightRuleInstance

/\*\*

- Builds executable source text that resolves back to the PreflightRuleInstance.
  \*/
  toSource(): string
  }

/\*\*

- Preflight profile object.
  \*/
  declare class PreflightProfile {
  /\*\*
  - Description text for the PreflightProfile.
    \*/
    description: string

/\*\*

- Collection object for event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection object for events.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the PreflightProfile.
  \*/
  readonly id: number

/\*\*

- Position of the PreflightProfile inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued label property.
  \*/
  label: string

/\*\*

- Name of the PreflightProfile.
  \*/
  name: string

/\*\*

- Parent object for the PreflightProfile (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Collection object for preflight profile rules.
  \*/
  readonly preflightProfileRules: PreflightProfileRules

/\*\*

- Collection object for preflight rule instances.
  \*/
  readonly preflightRuleInstances: PreflightRuleInstances

/\*\*

- Property bag for assigning multiple properties in one call.
  \*/
  properties: object

/\*\*

- Attaches an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate of this PreflightProfile.
  \*/
  duplicate(): PreflightProfile

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): PreflightProfile[]

/\*\*

- Stores the specified value under the specified label key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this PreflightProfile.
  \*/
  remove(): void

/\*\*

- Detaches the event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Writes this preflight profile to a InDesign preflight profile file.
- @param to Destination preflight profile file.
  \*/
  save(to: File): void

/\*\*

- Builds executable source text that resolves back to the PreflightProfile.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string

/\*\*

- Unembeds this profile.
  \*/
  unembed(): void

/\*\*

- Updates this preflight profile by copying another profile.
- @param using Source preflight profile to copy.
  \*/
  update(using: string | PreflightProfile): void
  }

/\*\*

- Collection object for preflight profiles.
  \*/
  declare class PreflightProfiles {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a PreflightProfile by the specified index.
- @param index Index value.
  \*/
  [index: number]: PreflightProfile

/\*\*

- Constructs a new PreflightProfile.
- @param withProperties Starting property values for the new PreflightProfile
  \*/
  add(withProperties: object): PreflightProfile

/\*\*

- Gets an arbitrary PreflightProfile from the collection.
  \*/
  anyItem(): PreflightProfile

/\*\*

- Counts elements in the PreflightProfile.
  \*/
  count(): number

/\*\*

- Gets all PreflightProfile objects from the collection.
  \*/
  everyItem(): PreflightProfile[]

/\*\*

- Gets the first PreflightProfile from the collection.
  \*/
  firstItem(): PreflightProfile

/\*\*

- Looks up a PreflightProfile by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): PreflightProfile

/\*\*

- Finds a PreflightProfile by ID.
- @param id ID value.
  \*/
  itemByID(id: number): PreflightProfile

/\*\*

- Finds a PreflightProfile by name.
- @param name Name value.
  \*/
  itemByName(name: string): PreflightProfile

/\*\*

- Gets the PreflightProfiles entries inside the requested range.
- @param from Starting PreflightProfile, index, or name for the range.
- @param to Ending PreflightProfile, index, or name for the range.
  \*/
  itemByRange(from: PreflightProfile | number | string, to: PreflightProfile | number | string): PreflightProfile[]

/\*\*

- Gets the last PreflightProfile from the collection.
  \*/
  lastItem(): PreflightProfile

/\*\*

- Gets the middle PreflightProfile from the collection.
  \*/
  middleItem(): PreflightProfile

/\*\*

- Gets the PreflightProfile positioned after the supplied PreflightProfile in the collection.
- @param obj PreflightProfile positioned immediately before the requested PreflightProfile.
  \*/
  nextItem(obj: PreflightProfile): PreflightProfile

/\*\*

- Gets the PreflightProfile positioned before the specified index.
- @param obj Index for the PreflightProfile positioned after the requested PreflightProfile.
  \*/
  previousItem(obj: PreflightProfile): PreflightProfile

/\*\*

- Builds executable source text that resolves back to the PreflightProfile.
  \*/
  toSource(): string
  }

/\*\*

- Active preflight process object.
  \*/
  declare class PreflightProcess {
  /\*\*
  - Aggregated process results. Can return: Ordered array containing documentName:String, profileName:String, results:Array of Ordered array containing parentNodeID:Long Integer, errorName:String, pageNumber:String, errorInfo:String, errorDetail:Array of Ordered array containing label:String, description:String.
    \*/
    readonly aggregatedResults: any

/\*\*

- Preflight profile used by the process.
  \*/
  readonly appliedProfile: PreflightProfile

/\*\*

- Description text for the PreflightProcess.
  \*/
  readonly description: string

/\*\*

- Collection object for event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection object for events.
  \*/
  readonly events: Events

/\*\*

- Position of the PreflightProcess inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for the PreflightProcess (a Application).
  \*/
  readonly parent: Application

/\*\*

- String description of every element visited by the process.
  \*/
  readonly processInventory: string

/\*\*

- Large string containing the process results.
  \*/
  readonly processResults: string

/\*\*

- Property bag for assigning multiple properties in one call.
  \*/
  properties: object

/\*\*

- Document inspected by the process.
  \*/
  readonly targetObject: Document

/\*\*

- Attaches an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): PreflightProcess[]

/\*\*

- Deletes this PreflightProcess.
  \*/
  remove(): void

/\*\*

- Detaches the event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Writes a report for the completed preflight process.
- @param to Destination preflight report file.
- @param autoOpen When true, open the report after creating it.
  \*/
  saveReport(to: File, autoOpen?: boolean): void

/\*\*

- Builds executable source text that resolves back to the PreflightProcess.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string

/\*\*

- Blocks until the process finishes, with an optional maximum wait. Other processes do not receive cycles during this interval.
- @param waitTime Maximum wait time, in seconds; when omitted, wait until completion regardless of duration.
  \*/
  waitForProcess(waitTime: number): boolean
  }

/\*\*

- Collection object for preflight processes.
  \*/
  declare class PreflightProcesses {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a PreflightProcess by the specified index.
- @param index Index value.
  \*/
  [index: number]: PreflightProcess

/\*\*

- Creates and adds a preflight process.
- @param targetObject Document for the process to inspect.
- @param appliedProfile Preflight profile to use.
- @param preflightOptions Preflight options to use.
- @param withProperties Starting property values for the new PreflightProcess
  \*/
  add(targetObject: Document, appliedProfile: PreflightProfile, preflightOptions: PreflightOption, withProperties: object): PreflightProcess

/\*\*

- Gets an arbitrary PreflightProcess from the collection.
  \*/
  anyItem(): PreflightProcess

/\*\*

- Counts elements in the PreflightProcess.
  \*/
  count(): number

/\*\*

- Gets all PreflightProcess objects from the collection.
  \*/
  everyItem(): PreflightProcess[]

/\*\*

- Gets the first PreflightProcess from the collection.
  \*/
  firstItem(): PreflightProcess

/\*\*

- Looks up a PreflightProcess by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): PreflightProcess

/\*\*

- Gets the PreflightProcesses entries inside the requested range.
- @param from Starting PreflightProcess, index, or name for the range.
- @param to Ending PreflightProcess, index, or name for the range.
  \*/
  itemByRange(from: PreflightProcess | number | string, to: PreflightProcess | number | string): PreflightProcess[]

/\*\*

- Gets the last PreflightProcess from the collection.
  \*/
  lastItem(): PreflightProcess

/\*\*

- Gets the middle PreflightProcess from the collection.
  \*/
  middleItem(): PreflightProcess

/\*\*

- Gets the PreflightProcess positioned after the supplied PreflightProcess in the collection.
- @param obj PreflightProcess positioned immediately before the requested PreflightProcess.
  \*/
  nextItem(obj: PreflightProcess): PreflightProcess

/\*\*

- Gets the PreflightProcess positioned before the specified index.
- @param obj Index for the PreflightProcess positioned after the requested PreflightProcess.
  \*/
  previousItem(obj: PreflightProcess): PreflightProcess

/\*\*

- Builds executable source text that resolves back to the PreflightProcess.
  \*/
  toSource(): string
  }

/\*\*

- Preflight profile rule object.
  \*/
  declare class PreflightProfileRule {
  /\*\*
  - Description text for the PreflightProfileRule.
    \*/
    readonly description: string

/\*\*

- Collection object for event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection object for events.
  \*/
  readonly events: Events

/\*\*

- Specifies whether the preflight rule is disabled or reports feedback as error, warning, or information.
  \*/
  flag: PreflightRuleFlag

/\*\*

- Rule ID associated with this rule.
  \*/
  readonly id: string

/\*\*

- Position of the PreflightProfileRule inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued label property.
  \*/
  label: string

/\*\*

- Name of the PreflightProfileRule.
  \*/
  readonly name: string

/\*\*

- Parent object for the PreflightProfileRule (a PreflightProfile).
  \*/
  readonly parent: PreflightProfile

/\*\*

- Property bag for assigning multiple properties in one call.
  \*/
  properties: object

/\*\*

- Collection object for prefight rule data objects.
  \*/
  readonly ruleDataObjects: RuleDataObjects

/\*\*

- Attaches an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
