# Shared (cont. 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_JavaScript_d_ts

/\*\*

- Opens the connection so later reads and writes can occur.
- open() and listen() are alternatives; invoke one or the other, not both.
- @param host Server endpoint, written as a DNS name, IPv4 address, or IPv6 address plus ":" and a port number.
- @param encoding Encoding used by the connection. Common values include "ASCII", "binary", and "UTF-8".
  \*/
  open(host: string, encoding?: string): boolean

/\*\*

- Tests a listening object for a pending inbound connection.
- When a request is found, a new Socket object is returned for that connection. Use that returned object to communicate with the remote computer, then close it and delete the JavaScript object. Returns null when no request is waiting.
  \*/
  poll(): Socket

/\*\*

- Reads no more than the requested count of characters from the connection. CR characters are skipped unless the encoding is "BINARY".
- The result contains up to the intended count, or however many characters arrived before close or timeout.
- @param count Character count to read. If omitted, the connection tries to read every immediately available character and then returns.
  \*/
  read(count?: number): string

/\*\*

- Reads text through the next line feed.
- LF and CRLF endings are both recognized, while CR characters are skipped. The returned value is a string of the line characters.
  \*/
  readln(): string

/\*\*

- Joins all arguments into one string and sends that string over the connection.
- @param text Any number of string values. The arguments are joined to create the string written to the connection. CRLF sequences become LFs unless the encoding is "BINARY".
  \*/
  write(text: string): boolean

/\*\*

- Joins all arguments into one string, adds an LF character, and sends the result over the connection.
- @param text Any number of string values. The arguments are joined to create the string written to the connection. CRLF sequences become LFs unless the encoding is "BINARY".
  \*/
  writeln(text: string): boolean
  }

/\*\*

- Describes a method, property, or method parameter.
  \*/
  interface ReflectionInfo {
  /\*\*
  - Descriptions for method or function arguments.
    \*/
    readonly arguments: ReflectionInfo[]

/\*\*

- Data type value.
  \*/
  readonly dataType: string

/\*\*

- Default value.
  \*/
  readonly defaultValue: any

/\*\*

- Extended description text.
  \*/
  readonly description: string

/\*\*

- Brief description text.
  \*/
  readonly help: string

/\*\*

- True when the class represents a collection class.
  \*/
  readonly isCollection: boolean

/\*\*

- Maximum allowed value.
  \*/
  readonly max: number

/\*\*

- Minimum allowed value.
  \*/
  readonly min: number

/\*\*

- Element name.
  \*/
  readonly name: string

/\*\*

- Class object that owns this element.
  \*/
  readonly parent: Reflection

/\*\*

- Example source code, when available.
  \*/
  readonly sampleCode: string

/\*\*

- File containing example source code. May be null.
  \*/
  readonly sampleFile: File

/\*\*

- Element type value.
- Allowed values: unknown, readonly, readwrite, createonly, method, or parameter.
  \*/
  readonly type: string
  }
  declare const ReflectionInfo: ReflectionInfo

/\*\*

- Describes a class.
  \*/
  interface Reflection {
  /\*\*
  - Extended description text.
    \*/
    readonly description: string

/\*\*

- Brief description text.
  \*/
  readonly help: string

/\*\*

- Array containing method descriptions.
  \*/
  readonly methods: ReflectionInfo[]

/\*\*

- Class name.
  \*/
  readonly name: string

/\*\*

- Array containing property descriptions.
  \*/
  readonly properties: ReflectionInfo[]

/\*\*

- Example source code, when available.
  \*/
  readonly sampleCode: string

/\*\*

- File containing example source code. May be null.
  \*/
  readonly sampleFile: File

/\*\*

- Array containing class method descriptions.
  \*/
  readonly staticMethods: ReflectionInfo[]

/\*\*

- Array containing class property descriptions.
  \*/
  readonly staticProperties: ReflectionInfo[]

/\*\*

- Locates an element description by name.
- @param name Name of the element to locate.
  \*/
  find(name: string): ReflectionInfo

/\*\*

- Serializes this class metadata to OMV-format XML.
  \*/
  toXML(): XML
  }
  declare const Reflection: Reflection

interface QNameConstructor {
readonly prototype: QName

/\*\*

- Constructs a QName object.
- @param uri URI value, supplied as a Namespace object, an existing QName object, or a string. With a Namespace object, the namespace URI becomes the URI and no local name is used. With a QName object, URI and localName are copied from that object. For string input, that value becomes the URI.
- @param name Name portion; relevant only for string URI input.
  \*/
  new (uri: any, name?: string): QName
  (uri: any, name?: string): QName
  }
  declare const QName: QNameConstructor

/\*\*

- Qualified XML name made from a URI and local name.
  \*/
  interface QName {
  /\*\*
  - Local-name portion of the qualified name.
    \*/
    readonly localName: string

/\*\*

- URI portion of the qualified name.
  \*/
  readonly uri: string
  }

interface NamespaceConstructor {
readonly prototype: Namespace

/\*\*

- Constructs a Namespace object.
- @param prefix URI prefix, supplied as an existing Namespace object, QName object, or string. If the value is a Namespace or QName object, its URI and prefix are copied. For string input, the string becomes the prefix and uri must also be provided.
- @param uri URI value for string prefix input.
  \*/
  new (prefix: any, uri?: string): Namespace
  (prefix: any, uri?: string): Namespace
  }
  declare const Namespace: NamespaceConstructor

/\*\*

- XML namespace object.
  \*/
  interface Namespace {
  /\*\*
  - Named prefix value.
    \*/
    readonly prefix: string

/\*\*

- URI value.
  \*/
  readonly uri: string
  }

interface XMLConstructor {
readonly prototype: XML

/\*\*

- Parses text into XML and throws when the XML is invalid.
- @param text Source text.
  \*/
  new (text: string): XML
  (text: string): XML

/\*\*

- Controls whether XML comments are parsed (false) or skipped (true).
  \*/
  ignoreComments: boolean

/\*\*

- Controls whether XML processing instructions are parsed (false) or skipped (true).
  \*/
  ignoreProcessingInstructions: boolean

/\*\*

- Controls whether whitespace is parsed (false) or skipped (true).
  \*/
  ignoreWhitespace: boolean

/\*\*

- Number of spaces used for indentation in pretty-printed XML.
  \*/
  prettyIndent: number

/\*\*

- True causes XML to be pretty-printed during string conversion.
  \*/
  prettyPrinting: boolean

/\*\*

- Returns an object with default XML parsing and printing settings.
  \*/
  defaultSettings(): object

/\*\*

- Applies XML parsing and printing settings from an object returned by settings().
- @param obj Object containing the settings to apply.
  \*/
  setSettings(obj: object): void

/\*\*

- Returns an object with the current XML parsing and printing settings.
  \*/
  settings(): object
  }
  declare const XML: XMLConstructor

/\*\*

- Boxes XML in an object.
  \*/
  interface XML {
  /\*\*
  - Adds a namespace declaration to the node and returns this XML object.
  - @param namespace Namespace to add.
    \*/
    addNamespace(namespace: Namespace): XML

/\*\*

- Adds the supplied XML as a child of this XML and returns this XML object.
- When the argument is not XML, a new XML element is created with the argument as text. That new XML element uses the same name as the last element in the original XML.
- @param child Child XML to add.
  \*/
  appendChild(child: XML): XML

/\*\*

- Returns a list of all attribute elements matching the supplied name.
- @param name Attribute name to search for.
  \*/
  attribute(name: string): XML

/\*\*

- Returns a list containing every attribute element.
  \*/
  attributes(): XML

/\*\*

- Returns a list of this XML object's children that match the supplied element name.
- When the argument is numeric, it is used as an index into the children array.
- @param name Child element name or child index.
  \*/
  child(name: string): XML

/\*\*

- Returns the ordinal position number of this XML object in its parent context.
  \*/
  childIndex(): number

/\*\*

- Returns an XML object containing this XML object's properties in order.
  \*/
  children(): XML

/\*\*

- Returns an XML object containing this XML object's properties that are XML comments.
  \*/
  comments(): XML

/\*\*

- Tests whether the supplied XML object is contained in this XML object.
- @param xml XML value to search for.
  \*/
  contains(xml: XML): boolean

/\*\*

- Creates a duplicate of this XML object.
  \*/
  copy(): XML

/\*\*

- Returns all XML-valued descendants of this XML object with the supplied name.
- When name is omitted, all descendants of this XML object are returned.
- @param name Descendant name to locate.
  \*/
  descendants(name?: string): XML

/\*\*

- Returns XML child elements with the supplied name, or all child XML elements.
- @param name Element name. When omitted, every child that is an XML element is returned.
  \*/
  elements(name?: string): XML

/\*\*

- Indicates whether this XML object has complex content.
- Complex content applies when an XML object represents an element with child elements. XML objects that represent attributes, comments, processing instructions, or text nodes lack complex content. Attributes, comments, processing instructions, and text nodes inside an XML object do not affect this determination.
  \*/
  hasComplexContent(): boolean

/\*\*

- Indicates whether this XML object has simple content.
- Simple content applies when the XML object is a text node, an attribute node, or an XML element without child elements. XML objects that represent comments and processing instructions do not have simple content. Attributes, comments, processing instructions, and text nodes inside an XML object do not affect this determination.
  \*/
  hasSimpleContent(): boolean

/\*\*

- Returns an array of Namespace objects representing the valid namespaces currently in scope for this element.
- The final entry in the returned array is the default namespace.
  \*/
  inScopeNamespaces(): Namespace[]

/\*\*

- Inserts child2 immediately after child1 within this XML object, returning this object.
- With child1 set to null, child2 goes at the front of the child list. If child1 is absent, the object is left unchanged.
- @param child1 Reference child. When null, child2 is placed before every child in this XML object.
- @param child2 XML value to insert.
  \*/
  insertChildAfter(child1: XML, child2: XML): void

/\*\*

- Inserts child2 immediately before child1 within this XML object, returning this object.
- With child1 set to null, child2 goes at the end of the child list. If child1 is absent, the object is left unchanged.
- @param child1 Reference child. When null, child2 is placed after every child in this XML object.
- @param child2 XML value to insert.
  \*/
  insertChildBefore(child1: XML, child2: XML): void

/\*\*

- Returns how many elements are in an XML list. For a non-list XML object, the value is 1.
  \*/
  length(): number

/\*\*

- Returns this XML object's local name.
- The value matches the element name except when that name has a namespace prefix. For example, an element named "ns:tag" returns "tag".
  \*/
  localName(): string

/\*\*

- Returns a QName object with the element URI and local name.
  \*/
  name(): QName

/\*\*

- Returns a Namespace object for the current element's namespace URI.
  \*/
  namespace(): Namespace

/\*\*

- Returns an array with all namespace declarations for this XML object.
  \*/
  namespaceDeclarations(): Namespace[]

/\*\*

- Returns the kind of this XML object as one of "element", "attribute", "comment", "processing-instruction", or "text".
  \*/
  nodeKind(): string

/\*\*

- Normalizes text nodes in this XML object and all descendants by merging adjacent text nodes and removing empty text nodes. Returns this XML object.
  \*/
  normalize(): XML

/\*\*

- Returns this XML object's parent object.
- The root object returned by the XML constructor has no parent, so null is returned. The E4X standard does not specify behavior when this XML object is a list whose elements have different parents.
  \*/
  parent(): XML

/\*\*

- Inserts the supplied child before this object's existing XML properties, then returns this XML object.
- @param child XML value to insert.
  \*/
  prependChild(child: XML): XML

/\*\*

- Returns processing-instruction nodes.
- When a name is supplied, matching processing-instructions are collected. Without a name, the returned XML list contains every child of this XML object that is a processing-instruction, regardless of name.
- @param name Processing-instruction name to return.
  \*/
  processingInstructions(name?: string): XML

/\*\*

- Removes the supplied namespace from this XML and returns this XML object.
- @param namespace Namespace to remove.
  \*/
  removeNamespace(namespace: Namespace): XML

/\*\*

- Replaces matching XML property values on this XML object and returns this XML object.
- This method behaves like assignment.
- @param name Property name. It may be numeric, an XML element-set name, or the wildcard "\*". If this XML object has no property matching the name, the method returns without changing it.
- @param value Replacement XML value. It may be an XML object, an XML list, or any value that toString() can convert to a String.
  \*/
  replace(name: string, value: XML): XML

/\*\*

- Assigns a new value to each XML-valued property on this object, then returns this XML object.
- @param value New value, either a single XML object or an XML list.
  \*/
  setChildren(value: XML): XML

/\*\*

- Changes this XML object's local name to a string built from the supplied name.
- The local name is the portion after a colon character, or the complete name when no colon is present.
- @param name Name to set.
  \*/
  setLocalName(name: string): void

/\*\*

- Applies the supplied QName object as this XML object's name.
- @param name QName to apply.
  \*/
  setName(name: QName): void

/\*\*

- Applies a namespace to this XML element.
- When the namespace is not already declared above this element in the tree, a declaration is added.
- @param namespace Namespace to set.
  \*/
  setNamespace(namespace: Namespace): void

/\*\*

- Returns an XML list of this XML object's properties that represent XML text nodes.
  \*/
  text(): XML

/\*\*

- Returns this object as a string.
- For text and attribute nodes, the result is the node's text value. For other elements, it is the result of toXMLString(). If this XML object is a list, the result joins the toString() output from each element.
  \*/
  toString(): string

/\*\*

- Returns this XML object as an XML-encoded string.
- The start tag, attributes, and end tag are always included, independent of content. This is useful when the default XML-to-string conversion rules are not wanted. The global XML.prettyPrint and XML.prettyIndent settings are interpreted.
  \*/
  toXMLString(): string

/\*\*

- Evaluates the supplied XPath expression according to the W3C XPath recommendation, with this XML object as the context node.
- @param expr XPath expression to use.
  \*/
  xpath(expr: string): XML
  }

/\*\*

- XML list object.
- In this implementation, XMLList is equivalent to XML. The constructor accepts an XML list, while all other behavior matches XML.
  \*/
  interface XMLList {}
  declare const XMLList: XMLList
  type UnitNameAbbrev =
  | "in"
  | "ft"
  | "yd"
  | "mi"
  | "mm"
  | "cm"
  | "m"
  | "km"
  | "pt"
  | "pc"
  | "tpt"
  | "tpc"
  | "ci"
  | "px"
  | "%"

type UnitName =
| UnitNameAbbrev
| "inch"
| "inches"
| "foot"
| "feet"
| "yard"
| "yards"
| "mile"
| "miles"
| "millimeter"
| "millimeters"
| "centimeter"
| "centimeters"
| "meter"
| "meters"
| "kilometer"
| "kilometers"
| "point"
| "points"
| "pica"
| "picas"
| "traditional point"
| "traditional points"
| "traditional pica"
| "traditional picas"
| "cicero"
| "ciceros"
| "pixel"
| "pixels"
| "percent"
| "percent"

interface UnitValueConstructor {
readonly prototype: UnitValue

/\*\*

- Builds UnitValue.
  \*/
  new (value: string | number | UnitValue, unitName?: UnitName): UnitValue
  (value: string | number | UnitValue, unitName?: UnitName): UnitValue

/\*\*

- Base unit used by every conversion.
  \*/
  baseUnit: UnitValue
  }
  declare const UnitValue: UnitValueConstructor

/\*\*

- Models a measurement as a value combined with a unit.
- This object is not provided by every application.
  \*/
  interface UnitValue {
  /\*\*
  - Base unit.
    \*/
    baseUnit: UnitValue

/\*\*

- Unit name.
  \*/
  readonly type: UnitNameAbbrev | "?"

/\*\*

- Numeric value.
  \*/
  value: number

/\*\*

- Returns this instance expressed in another unit.
- @param unitName Unit name.
  \*/
  as(unitName: UnitNameAbbrev): UnitValue

/\*\*

- Converts this instance into another unit.
- @param unitName Unit name.
  \*/
  convert(unitName: UnitNameAbbrev): boolean
  }

/\*\*

- Provided for TypeScript compatibility only.
  \*/
  interface CallableFunction extends Function {}

interface NewableFunction extends Function {}

interface IArguments {
[index: number]: any
length: number
callee: Function
}

/\*\*

- T with each property made optional.
  \*/
  type Partial<T> = { [P in keyof T]?: T[P] }

/\*\*

- T with each property made readonly.
  \*/
  type Readonly<T> = { readonly [P in keyof T]: T[P] }

/\*\*

- Pick properties K from T.
  \*/
  type Pick<T, K extends keyof T> = { [P in K]: T[P] }

/\*\*

- Record mapping from K to T.
  \*/
  type Record<K extends string, T> = { [P in K]: T }

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_PlugPlugExternalObject_d_ts

/// <reference path="JavaScript.d.ts" />

interface ExternalObjectConstructor {
readonly prototype: ExternalObject

/\*\*

- Builds ExternalObject.
  \*/
  new (lib: string): ExternalObject
  (lib: string): ExternalObject
  }
  declare const ExternalObject: ExternalObjectConstructor

interface ExternalObject {
/\*\*

- Set true to emit status details to standard output (the
- JavaScript Console in the ExtendScript Toolkit). Set false to disable
- logging. The default value is false.
  \*/
  log: boolean

/\*\*

- Alternate search paths for shared library files, stored as a single
- string containing multiple path specifications separated by semicolons
- (;). Paths may be absolute or relative to Folder.startup.
  \*/
  searchFolders: string

/\*\*

- Library version as reported by ESGetVersion().
  \*/
  version: number

/\*\*

- Checks whether a compiled C/C++ library is discoverable without loading it. When logging is enabled, the
- searched paths are printed to the JavaScript Console in the ExtendScript Toolkit.
- Returns true when the library is found; otherwise returns false.
- @param spec Compiled-library file specification; path information may be included or omitted.
  \*/
  search(spec: string): boolean

/\*\*

- Explicitly shuts down the ExternalObject dynamic library represented by this instance.
- Forcing external-library shutdown can help when the host application's shutdown sequence would otherwise
- terminate external libraries in the wrong order.
  \*/
  terminate(): undefined
  }

interface CSXSEventConstructor {
readonly prototype: CSXSEvent

/\*\*

- Builds CSXSEvent.
  \*/
  new (type?: string, scope?: string, data?: string): CSXSEvent
  (type?: string, scope?: string, data?: string): CSXSEvent
  }
  declare const CSXSEvent: CSXSEventConstructor

interface CSXSEvent {
/\*\*

- Gets the unique identifier of the application that dispatched this event.
  \*/
  readonly appId: string

/\*\*

- Gets or sets this event's payload.
  \*/
  data: string

/\*\*

- Gets the unique identifier of the extension that dispatched this event.
  \*/
  readonly extensionId: string

/\*\*

- Gets this event's scope.
  \*/
  scope: string

/\*\*

- Gets this event's type.
  \*/
  type: string

/\*\*

- Dispatches the event.
  \*/
  dispatch(): void
  }

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_ScriptUI_d_ts

/// <reference path="JavaScript.d.ts" />

declare enum \_Alignment {
TOP = 1,
BOTTOM = 2,
LEFT = 3,
RIGHT = 4,
FILL = 5,
CENTER = 6,
}

declare enum \_FontStyle {
REGULAR,
BOLD,
ITALIC,
BOLDITALIC,
}

declare const enum \_BrushOrPenType {
`SOLID_COLOR`,
`THEME_COLOR`,
}

type \_Bounds = Bounds
type \_Dimension = Dimension

type \_Margins = Margins | number

type \_AlignmentProperty =
| "left"
| "right"
| "fill"
| "center"
| "top"
| "bottom"
| "fill"
| "center"
| ["left" | "right" | "fill" | "center", "top" | "bottom" | "fill" | "center"]
| [
_Alignment.LEFT | _Alignment.RIGHT | _Alignment.FILL | _Alignment.CENTER,
_Alignment.TOP | _Alignment.BOTTOM | _Alignment.FILL | _Alignment.CENTER,
]

type \_AlignmentPropertyTitleLayout =
| ["left" | "right" | "center", "top" | "bottom" | "center"]
| [
_Alignment.LEFT | _Alignment.RIGHT | _Alignment.CENTER,
_Alignment.TOP | _Alignment.BOTTOM | _Alignment.CENTER,
]

type \_Justify = "left" | "center" | "right"

type \_Orientation = "row" | "column" | "stack"

type \_Truncate = "middle" | "end" | "none"

/\*\*

- Global, non-instantiable class that centralizes ScriptUI information.
  \*/
  declare class ScriptUI {
  /\*\*
  - Groups enum values for alignment and alignChildren.
  - Values: TOP, BOTTOM, LEFT, RIGHT, FILL, CENTER
    \*/
    static readonly Alignment: typeof \_Alignment

/\*\*

- Groups the enum values usable as the style argument for ScriptUI.newFont().
- Predefined styles are REGULAR, BOLD, ITALIC, BOLDITALIC.
  \*/
  static readonly FontStyle: typeof \_FontStyle

/\*\*

- Font constants supplied by the host application.
  \*/
  static readonly applicationFonts: object

/\*\*

- Object whose properties name the compatibility modes that the host application supports.
- If ScriptUI.compatibility.su1PanelCoordinates is present, the application supports backward compatibility with the Panel element coordinate system from ScriptUI version 1.
  \*/
  static readonly compatibility: object

/\*\*

- String that contains ScriptUI module's internal version number.
  \*/
  static readonly coreVersion: string

/\*\*

- Object whose properties describe the environment where ScriptUI runs.
  \*/
  static readonly environment: Environment

/\*\*

- Object whose properties and methods expose objects used by the ScriptUI event system.
- It includes createEvent(), a function for creating event objects to simulate a user-interaction event.
  \*/
  static readonly events: Events
