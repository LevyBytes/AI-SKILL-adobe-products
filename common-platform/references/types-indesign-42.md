# Indesign (part 42)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Link creation timestamp.
  \*/
  readonly date: Date

/\*\*

- True means the linked object changed in this document while its source file remains unsaved.
  \*/
  readonly edited: boolean

/\*\*

- Version Cue editing state for the file.
  \*/
  readonly editingState: EditingState

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- File path, colon-delimited on Mac OS.
  \*/
  readonly filePath: string | File

/\*\*

- Unique Link ID.
  \*/
  readonly id: number

/\*\*

- Position of this link inside the links collection.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- URI for the linked resource.
  \*/
  readonly linkResourceURI: string

/\*\*

- File type for the linked object.
  \*/
  readonly linkType: string

/\*\*

- XMP metadata for the link source file.
  \*/
  readonly linkXmp: LinkMetadata

/\*\*

- Links collection.
  \*/
  readonly links: Links

/\*\*

- Link name.
  \*/
  readonly name: string

/\*\*

- True means a full-resolution source-file link is required; false means the object is embedded.
  \*/
  readonly needed: boolean

/\*\*

- Object represented by the link.
  \*/
  readonly parent: Story | Graphic | Movie | Sound

/\*\*

- Preferences-object collection.
  \*/
  readonly preferences: Preferences

/\*\*

- Batch assignment property for multiple settings.
  \*/
  properties: object

/\*\*

- Rendition data for the link resource.
  \*/
  readonly renditionData: LinkResourceRenditionType

/\*\*

- Link file size.
  \*/
  readonly size: number

/\*\*

- Current link status.
  \*/
  readonly status: LinkStatus

/\*\*

- Version Cue version state for the file.
  \*/
  readonly versionState: VersionState

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Checks the item in to Version Cue.
- @param versionComments Comment text for this version
- @param forceSave Force a version save
  \*/
  checkIn(versionComments: string, forceSave?: boolean): void

/\*\*

- Copies the link file into the requested location.
- @param to File or folder destination for the copied file.
- @param versionComments Comment text for this version.
- @param forceSave True forces a version save.
  \*/
  copyLink(to: File, versionComments: string, forceSave?: boolean): void

/\*\*

- Opens the link source file with that file type's default editor.
  \*/
  editOriginal(): void

/\*\*

- Reads the label value stored for the given key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the specifier into object-reference array form.
  \*/
  getElements(): Link[]

/\*\*

- Opens the link source file in InDesign when handling SharedContent links.
  \*/
  goToSource(): void

/\*\*

- Writes a keyed label value.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Experimental: initializes the link again with a new uri
- @param linkResourceURI Resource URI used for relinking.
  \*/
  reinitLink(linkResourceURI: string): void

/\*\*

- Redirects the link to another source file.
- @param to Full path name for the replacement source file.
  \*/
  relink(to: File | string): void

/\*\*

- Experimental: points the text-fragment link at another uri
- @param linkResourceURI Resource URI used as the relink target.
- @param name Tag name for the key.
  \*/
  relinkTextFragmentLink(linkResourceURI: string, name: string): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Experimental: downloads the original asset and substitutes it for the FPO.
  \*/
  replaceWithOriginal(): void

/\*\*

- Opens Adobe Bridge with the link source file selected.
  \*/
  revealInBridge(): void

/\*\*

- Opens the system file browser at the source-file folder and selects that link file.
  \*/
  revealInSystem(): void

/\*\*

- Selects this link.
  \*/
  show(): void

/\*\*

- Builds source text that evaluates back to this Link.
  \*/
  toSource(): string

/\*\*

- Provides this object's specifier.
  \*/
  toSpecifier(): string

/\*\*

- Extracts the source file from embedding. Without a folder, the original source file is linked; with a folder, the file is copied there and that copy becomes the link target.
- @param to Folder destination for the unembedded file copy.
- @param versionComments Comment text for this version.
- @param forceSave True forces a version save.
  \*/
  unembed(to: File, versionComments: string, forceSave?: boolean): void

/\*\*

- Embeds the source file into the document.
  \*/
  unlink(): void

/\*\*

- Refreshes the link when its source file changed.
  \*/
  update(): Link
  }

/\*\*

- Links collection type.
  \*/
  declare class Links {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Link by index.
- @param index Index value.
  \*/
  [index: number]: Link

/\*\*

- Supplies any Link from this collection.
  \*/
  anyItem(): Link

/\*\*

- Reports how many elements the Link contains.
  \*/
  count(): number

/\*\*

- Supplies all Link entries from the collection.
  \*/
  everyItem(): Link[]

/\*\*

- Supplies the collection's initial Link.
  \*/
  firstItem(): Link

/\*\*

- Locates a Link by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Link

/\*\*

- Locates a Link by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Link

/\*\*

- Locates a Link by name.
- @param name Name value.
  \*/
  itemByName(name: string): Link

/\*\*

- Supplies Links from the requested range.
- @param from Link, index, or name that starts the range.
- @param to Link, index, or name that ends the range.
  \*/
  itemByRange(from: Link | number | string, to: Link | number | string): Link[]

/\*\*

- Supplies the final Link in the collection.
  \*/
  lastItem(): Link

/\*\*

- Supplies the central Link in the collection.
  \*/
  middleItem(): Link

/\*\*

- Gets the Link positioned after the given Link.
- @param obj Link immediately before the desired one.
  \*/
  nextItem(obj: Link): Link

/\*\*

- Gets the Link positioned before the given index.
- @param obj Index of the Link that comes after the desired one.
  \*/
  previousItem(obj: Link): Link

/\*\*

- Builds source text that evaluates back to this Link.
  \*/
  toSource(): string
  }

/\*\*

- Experimental http link connection manager.
  \*/
  declare class HttpLinkConnectionManagerObject {
  /\*\*
  - Event-listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Position of this HttpLinkConnectionManagerObject inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent of this HttpLinkConnectionManagerObject, an Application.
  \*/
  readonly parent: Application

/\*\*

- Batch assignment property for multiple settings.
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

- Resolves the specifier into object-reference array form.
  \*/
  getElements(): HttpLinkConnectionManagerObject[]

/\*\*

- Experimental: creates a url connection for the supplied server address
- @param serverurl Server URL used for the connection
- @param jsonData JSON data
  \*/
  httpConnect(serverurl: string, jsonData: string): void

/\*\*

- Experimental: tests whether the supplied server URL is connected.
- @param serverurl Server URL to test
  \*/
  isConnected(serverurl: string): boolean

/\*\*

- Experimental: logs out from the supplied URL
- @param serverurl Server URL used for logout
  \*/
  logout(serverurl: string): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to this HttpLinkConnectionManagerObject.
  \*/
  toSource(): string

/\*\*

- Provides this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Link-source file MetaData properties.
  \*/
  declare class LinkMetadata extends Preference {
  /\*\*
  - Document author.
    \*/
    readonly author: string

/\*\*

- URL for the file containing the linked copyright statement.
  \*/
  readonly copyrightInfoURL: string

/\*\*

- Copyright notice text.
  \*/
  readonly copyrightNotice: string

/\*\*

- Document copyright status.
  \*/
  readonly copyrightStatus: CopyrightStatus

/\*\*

- Document creation date.
  \*/
  readonly creationDate: Date

/\*\*

- Application name used to create the document.
  \*/
  readonly creator: string

/\*\*

- LinkMetadata description text.
  \*/
  readonly description: string

/\*\*

- Document title.
  \*/
  readonly documentTitle: string

/\*\*

- Document format.
  \*/
  readonly format: string

/\*\*

- Job name.
  \*/
  readonly jobName: string

/\*\*

- Keywords attached to the document.
  \*/
  readonly keywords: string[]

/\*\*

- Document's latest modification date.
  \*/
  readonly modificationDate: Date

/\*\*

- Asset-management server location for the document.
  \*/
  readonly serverURL: string

/\*\*

- Counts items inside the container.
- @param namespace Container namespace.
- @param path Container path.
  \*/
  countContainer(namespace: string, path: string): number

/\*\*

- Reads the XMP property value at the supplied path.
- @param namespace Property namespace.
- @param path Requested path.
  \*/
  getProperty(namespace: string, path: string): string
  }

/\*\*

- Object style definition.
  \*/
  declare class ObjectStyle {
  /\*\*
  - Anchored-object settings.
    \*/
    anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Paragraph style assigned to the text.
  \*/
  appliedParagraphStyle: ParagraphStyle | string

/\*\*

- True applies paragraph styles through Next Paragraph Style settings, starting from the Next Paragraph Style on the associated object style's paragraph style, when one exists.
  \*/
  applyNextParagraphStyle: boolean

/\*\*

- Arrowhead alignment used by the ObjectStyle.
  \*/
  arrowHeadAlignment: ArrowHeadAlignmentEnum

/\*\*

- Base style for this style.
  \*/
  basedOn: ObjectStyle | string

/\*\*

- Baseline frame-grid option settings.
  \*/
  baselineFrameGridOptions: BaselineFrameGridOption

/\*\*

- Shape used for the bottom left corner of rectangular shapes.
  \*/
  bottomLeftCornerOption: CornerOptions

/\*\*

- Radius, in measurement units, for the bottom-left rectangular corner effect
  \*/
  bottomLeftCornerRadius: number | string

/\*\*

- Shape used for the bottom right corner of rectangular shapes.
  \*/
  bottomRightCornerOption: CornerOptions

/\*\*

- Radius, in measurement units, for the bottom-right rectangular corner effect
  \*/
  bottomRightCornerRadius: number | string

/\*\*

- Settings that enable content effects.
  \*/
  readonly contentEffectsEnablingSettings: ObjectStyleContentEffectsCategorySettings

/\*\*

- Content transparency settings for the ObjectStyle.
  \*/
  readonly contentTransparencySettings: ContentTransparencySetting

/\*\*

- Emits CSS
  \*/
  emitCss: boolean

/\*\*

- True makes the object style apply anchored-object settings.
  \*/
  enableAnchoredObjectOptions: boolean

/\*\*

- True makes the object style apply epub tag and class settings.
  \*/
  enableExportTagging: boolean

/\*\*

- True makes the object style apply fill settings.
  \*/
  enableFill: boolean

/\*\*

- True makes the object style apply frame fitting options.
  \*/
  enableFrameFittingOptions: boolean

/\*\*

- True makes the object style apply alt text export options.
  \*/
  enableObjectExportAltTextOptions: boolean

/\*\*

- True makes the object style apply epub export options.
  \*/
  enableObjectExportEpubOptions: boolean

/\*\*

- True makes the object style apply tagged pdf export options.
  \*/
  enableObjectExportTaggedPdfOptions: boolean

/\*\*

- True makes the object style apply a paragraph style.
  \*/
  enableParagraphStyle: boolean

/\*\*

- True makes the object style apply story options.
  \*/
  enableStoryOptions: boolean

/\*\*

- True makes the object style apply stroke settings.
  \*/
  enableStroke: boolean

/\*\*

- True makes the object style apply stroke and corner settings.
  \*/
  enableStrokeAndCornerOptions: boolean

/\*\*

- True makes the object style apply auto-sizing options for text frames.
  \*/
  enableTextFrameAutoSizingOptions: boolean

/\*\*

- True makes the object style apply baseline options for text frames.
  \*/
  enableTextFrameBaselineOptions: boolean

/\*\*

- Enables the object style category for text frame column rule options
  \*/
  enableTextFrameColumnRuleOptions: boolean

/\*\*

- Enables the object style category for text frame footnote options
  \*/
  enableTextFrameFootnoteOptions: boolean

/\*\*

- True makes the object style apply general text frame options.
  \*/
  enableTextFrameGeneralOptions: boolean

/\*\*

- True makes the object style apply text wrap, contour, and non-printing settings.
  \*/
  enableTextWrapAndOthers: boolean

/\*\*

- True enables the Dimension and Position attributes
  \*/
  enableTransformAttributes: boolean

/\*\*

- End shape for an open path.
  \*/
  endCap: EndCap

/\*\*

- Corner join used by the ObjectStyle.
  \*/
  endJoin: EndJoin

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Swatch applied to the ObjectStyle fill; it may be a color, gradient, tint, or mixed ink. .
  \*/
  fillColor: Swatch | string

/\*\*

- Settings that enable fill effects.
  \*/
  readonly fillEffectsEnablingSettings: ObjectStyleFillEffectsCategorySettings

/\*\*

- Tint percentage for the ObjectStyle fill color. Use 0 to 100 for a tint percent; use -1 for inherited or overridden values.
  \*/
  fillTint: number

/\*\*

- Transparency settings for the ObjectStyle fill.
  \*/
  readonly fillTransparencySettings: FillTransparencySetting

/\*\*

- Frame-fitting option for placed or pasted content. This applies to frames, object styles, documents, or the application.
  \*/
  frameFittingOptions: FrameFittingOption

/\*\*

- Swatch applied to the gap in a dashed, dotted, or striped stroke; valid swatches include color, gradient, tint, or mixed ink. See stroke type for details.
  \*/
  gapColor: Swatch

/\*\*

- Gap-color tint expressed as a percentage. Use 0 to 100 for a tint percent; use -1 for inherited or overridden values.
  \*/
  gapTint: number

/\*\*

- Linear-gradient angle for the ObjectStyle fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Linear-gradient angle for the ObjectStyle stroke. (Range: -180 to 180)
  \*/
  gradientStrokeAngle: number

/\*\*

- Unique ObjectStyle ID.
  \*/
  readonly id: number

/\*\*

- True generates a class attribute for the style
  \*/
  includeClass: boolean

/\*\*

- Position of this ObjectStyle inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- Start-of-path arrowhead scaling. (Range: 1 to 1000)
  \*/
  leftArrowHeadScale: number

/\*\*

- Arrowhead assigned to the start of the path.
  \*/
  leftLineEnd: ArrowHead

/\*\*

- Ratio limit between stroke width and miter length before a pointed miter join changes into a squared-off bevel join.
  \*/
  miterLimit: number

/\*\*

- ObjectStyle name.
  \*/
  name: string

/\*\*

- True prevents the ObjectStyle from printing.
  \*/
  nonprinting: boolean

/\*\*

- Settings that enable object effects.
  \*/
  readonly objectEffectsEnablingSettings: ObjectStyleObjectEffectsCategorySettings

/\*\*

- Export options for the object
  \*/
  readonly objectExportOptions: ObjectExportOption

/\*\*

- Object style export tag-map collection.
  \*/
  readonly objectStyleExportTagMaps: ObjectStyleExportTagMaps

/\*\*

- True overprints underlying objects with the ObjectStyle fill color; false knocks out underlying colors.
  \*/
  overprintFill: boolean

/\*\*

- True overprints underlying colors with the gap color; false knocks out those colors.
  \*/
  overprintGap: boolean

/\*\*

- True overprints underlying objects with the ObjectStyle stroke color; false knocks out theunderlying colors.
  \*/
  overprintStroke: boolean

/\*\*

- Parent of the ObjectStyle, either a Document, Application or ObjectStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Preferences-object collection.
  \*/
  readonly preferences: Preferences

/\*\*

- Batch assignment property for multiple settings.
  \*/
  properties: object

/\*\*

- End-of-path arrowhead scaling. (Range: 1 to 1000)
  \*/
  rightArrowHeadScale: number

/\*\*

- Arrowhead assignment at path end.
  \*/
  rightLineEnd: ArrowHead

/\*\*

- Story preferences.
  \*/
  storyPreferences: StoryPreference

/\*\*

- Stroke alignment used by the ObjectStyle.
  \*/
  strokeAlignment: StrokeAlignment

/\*\*

- Swatch applied to the ObjectStyle stroke; it may be a color, gradient, tint, or mixed ink.
  \*/
  strokeColor: Swatch | string

/\*\*

- Settings that enable stroke effects.
  \*/
  readonly strokeEffectsEnablingSettings: ObjectStyleStrokeEffectsCategorySettings

/\*\*

- Tint percentage for the object's stroke color. Use 0 to 100 for a tint percent; use -1 for inherited or overridden values.
  \*/
  strokeTint: number

/\*\*

- Stroke transparency settings.
  \*/
  readonly strokeTransparencySettings: StrokeTransparencySetting

/\*\*

- Name of the stroke style to apply.
  \*/
  strokeType: StrokeStyle | string

/\*\*

- Stroke weight, in points, applied to the ObjectStyle.
  \*/
  strokeWeight: number | string

/\*\*

- Text-frame preference settings.
  \*/
  textFramePreferences: TextFramePreference

/\*\*

- Text-wrap preference properties defining default wrapping behavior around objects.
  \*/
  textWrapPreferences: TextWrapPreference

/\*\*

- Shape for the top left corner of rectangular shapes and for every corner of non-rectangular shapes. Note: a corner option differs from an end join because a radius can be set for the corner option, while rounded or beveled end-join appearance depends on stroke weight.
  \*/
  topLeftCornerOption: CornerOptions

/\*\*

- Radius, in measurement units, for the top-left corner effect on rectangular and non-rectangular shapes
  \*/
  topLeftCornerRadius: number | string

/\*\*

- Shape used for the top right corner of rectangular shapes
  \*/
  topRightCornerOption: CornerOptions

/\*\*

- Radius, in measurement units, for the top-right rectangular corner effect
  \*/
  topRightCornerRadius: number | string

/\*\*

- Layout attribute options applied to any page item.
  \*/
  transformAttributeOptions: TransformAttributeOption

/\*\*

- Transparency settings.
  \*/
  readonly transparencySettings: TransparencySetting

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate ObjectStyle.
  \*/
  duplicate(): ObjectStyle

/\*\*

- Reads the label value stored for the given key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the specifier into object-reference array form.
  \*/
  getElements(): ObjectStyle[]

/\*\*

- Writes a keyed label value.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Moves the ObjectStyle into the requested placement.
- @param to Destination placement inside the container or relative to another object.
- @param reference Reference object used for before or after placements.
  \*/
  move(to: LocationOptions, reference: ObjectStyle | ObjectStyleGroup | Document | Application): ObjectStyle

/\*\*

- Deletes this style.
- @param replacingWith Style to use instead of the deleted style.
  \*/
  remove(replacingWith: ObjectStyle): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Sets the requested dimension attribute state to enabled or disabled
- @param whichAttributes Dimension attributes to enable or disable.
- @param attributeState State to assign; true enables the attributes and false disables them
  \*/
  setDimensionAttributeState(whichAttributes: DimensionAttributes, attributeState: boolean): boolean

/\*\*

- Sets the requested position attribute state to enabled or disabled
- @param whichAttributes Position attributes to enable or disable.
- @param attributeState State to assign; true enables the attributes and false disables them
  \*/
  setPositionAttributeState(whichAttributes: PositionAttributes, attributeState: boolean): boolean

/\*\*

- Builds source text that evaluates back to this ObjectStyle.
  \*/
  toSource(): string

/\*\*

- Provides this object's specifier.
  \*/
  toSpecifier(): string
  }
