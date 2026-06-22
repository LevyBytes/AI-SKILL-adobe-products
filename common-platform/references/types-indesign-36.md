# Indesign (part 36)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Exports the object(s) to a file asynchronously.
- @param format Export format, given as an enumeration value or a file extension listed by the Export dialog's Save as type or Format menu.
- @param to Path of the export file.
- @param showingOptions When true, the export options dialog is displayed.
- @param using Export style.
- @param versionComments Comment for this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  asynchronousExportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask

/\*\*

- Applies default XML-preference tags to the object or its parent story.
  \*/
  autoTag(): void

/\*\*

- Finds objects matching the find what value, then replaces them with the change to value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeObject(reverseOrder: boolean): PageItem[]

/\*\*

- Clears object style overrides.
  \*/
  clearObjectStyleOverrides(): void

/\*\*

- Removes transformations from the PageItem, including rotation, scaling, flipping, fitting, and shearing.
  \*/
  clearTransformations(): void

/\*\*

- Adds a duplicate object inside the destination page item.
- @param pageItems Page item objects to place or load.
- @param linkPageItems Whether pageItems are linked in the content placer; true overrides the link stories value.
- @param linkStories Whether stories are linked in the content placer; this applies only to a single story, and pageItem links are also created when more than one item is used.
- @param mapStyles Whether styles are mapped in the content placer.
- @param showingOptions Controls whether the link options dialog is shown.
  \*/
  contentPlace(pageItems: PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): any[]

/\*\*

- Changes the PageItem into another shape.
- @param given New shape for the PageItem.
- @param numberOfSides Side count for the resulting polygon. (Range: 3 to 100)
- @param insetPercentage Inset percentage for the star-style polygon result. (Range: 0.0 to 100.0)
- @param cornerRadius Corner radius assigned to the rectangle result.
  \*/
  convertShape(given: ConvertShapeOptions, numberOfSides: number, insetPercentage: number, cornerRadius: number | string): void

/\*\*

- Creates an Email QR Code on the page item or document.
- @param emailAddress Email Address for the QR code.
- @param subject Email Subject for the QR code.
- @param body Email Body Message for the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.
  \*/
  createEmailQRCode(emailAddress: string, subject: string, body: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a Hyperlink QR Code on the page item or document.
- @param urlLink Hyperlink URL for the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.
  \*/
  createHyperlinkQRCode(urlLink: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a Plain Text QR Code on the page item.
- @param plainText Plain Text for the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.
  \*/
  createPlainTextQRCode(plainText: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a Text Msg QR Code on the page item or document.
- @param cellNumber Text Phone Number for the QR code.
- @param textMessage Text Message for the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.
  \*/
  createTextMsgQRCode(cellNumber: string, textMessage: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a Business Card QR Code on the page item or loads it on the document's placegun.
- @param firstName Business Card First Name for the QR code.
- @param lastName Business Card Last Name for the QR code.
- @param jobTitle Business Card Title for the QR code.
- @param cellPhone Business Card Cell Phone Number for the QR code.
- @param phone Business Card Phone Number for the QR code.
- @param email Business Card Email Address for the QR code.
- @param organisation Business Card Organisation for the QR code.
- @param streetAddress Business Card Street Address for the QR code.
- @param city Business Card City for the QR code.
- @param adrState Business Card State for the QR code.
- @param country Business Card Country for the QR code.
- @param postalCode Business Card Postal Code for the QR code.
- @param website Business Card URL for the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.
  \*/
  createVCardQRCode(firstName: string, lastName: string, jobTitle: string, cellPhone: string, phone: string, email: string, organisation: string, streetAddress: string, city: string, adrState: string, country: string, postalCode: string, website: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Separates an overridden master page item from the master page.
  \*/
  detach(): void

/\*\*

- Copies the PageItem to a specified location or offset.
- @param to Location for the new PageItem, expressed as coordinates in the format [x, y].
- @param by Offset applied from where the original PageItem sits.
  \*/
  duplicate(to: [number | string, number | string] | Spread | Page | Layer, by: (number | string)[]): PageItem

/\*\*

- Exports the object(s) into a file.
- @param format Export format, given as an enumeration value or a file extension listed by the Export dialog's Save as type or Format menu.
- @param to Path of the export file.
- @param showingOptions When true, the export options dialog is displayed.
- @param using Export style.
- @param versionComments Comment for this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void

/\*\*

- Gets the label value stored for the given key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Finds objects whose values match find what.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  findObject(reverseOrder: boolean): PageItem[]

/\*\*

- Applies the chosen fit option to frame content.
- @param given Fit option selected.
  \*/
  fit(given: FitOptions): void

/\*\*

- Flips the PageItem.
- @param given Axis used to flip the PageItem.
- @param around Point serving as the PageItem flip pivot.
  \*/
  flipItem(given: Flip, around: [number | string, number | string] | AnchorPoint): void

/\*\*

- Produces an array containing the resolved object references.
  \*/
  getElements(): PageItem[]

/\*\*

- Stores a label value under the specified key.
- @param key Key receiving the value.
- @param value Value to save.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Links the page item to the specified XML element while keeping existing content.
- @param using XML element to associate.
  \*/
  markup(using: XMLElement): void

/\*\*

- Moves the PageItem to another location. Note: either the 'to' parameter or the 'by' parameter is required; when both exist, only the to value is used.
- @param to New PageItem location, in the format (x, y).
- @param by Measurement-unit movement amount from the PageItem's current position, using (x, y) format.
  \*/
  move(to: [number | string, number | string] | Spread | Page | Layer, by: (number | string)[]): void

/\*\*

- Creates a document-page object by overriding a master page item.
- @param destinationPage Document page holding the master page item being overridden.
  \*/
  override(destinationPage: Page): any

/\*\*

- Places a file.
- @param fileName File to place.
- @param showingOptions Controls whether the import options dialog is shown.
- @param withProperties Starting property values for the placed object(s).
  \*/
  place(fileName: File, showingOptions?: boolean, withProperties?: object): any[]

/\*\*

- Inserts XML content into the specified object. Note: existing content is replaced.
- @param using XML element whose content should be placed.
  \*/
  placeXML(using: XMLElement): void

/\*\*

- Applies an item's scaling to its content when possible.
- @param to Scale factors left on the item; default is {1.0, 1.0}.
  \*/
  redefineScaling(to: number[]): void

/\*\*

- Moves the page item's bounding box.
- @param in\_ Bounding box to resize. Accepted forms include a CoordinateSpaces enumerator or an Ordered array whose entries are coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
- @param opposingCorners Opposing corners for the new bounding box in the selected coordinate space.
  \*/
  reframe(in\_: any, opposingCorners: any[]): void

/\*\*

- Removes the PageItem.
  \*/
  remove(): void

/\*\*

- Detaches an event listener.
- @param eventType Event type already registered.
- @param handler Handler already registered.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Clears an override from a master page item that had been overridden.
  \*/
  removeOverride(): void

/\*\*

- Resizes the page item.
- @param in\_ Bounding box being resized. Accepted forms include a CoordinateSpaces enumerator, a BoundingBoxLimits enumerator, or an Ordered array whose entries are coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
- @param from Transform origin; valid forms are, for bounding-box-relative input, anchor | {anchor | {x,y}, bounds kind [, coordinate space]}; for coordinate-space-relative input, {x,y} | {{x,y}[, coordinate space]}; for layout-window-ruler input, {{x,y}, page index | bounds kind}. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
- @param by How the supplied values affect current dimensions.
- @param values Width and height inputs. Valid dimension forms are {x, y [, coordinate space]}, {x, resize constraint [, coordinate space]}, or {resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space only selects measurement units for x and y; it is not used for the 'current dimensions times' resize method).
- @param resizeIndividually When false and multiple page items are targeted, new dimensions are achieved by moving individual items instead of resizing them.
- @param consideringRulerUnits When true, a ruler location is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.
  \*/
  resize(in\_: any, from: any, by: ResizeMethods, values: number[] | ResizeConstraints | CoordinateSpaces, resizeIndividually?: boolean, consideringRulerUnits?: boolean): void

/\*\*

- Resolves a requested location into coordinates within a chosen coordinate system.
- @param location Requested location. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
- @param in\_ Coordinate space used for the result.
- @param consideringRulerUnits When true, a ruler location is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.
  \*/
  resolve(location: any, in\_: CoordinateSpaces, consideringRulerUnits?: boolean): any

/\*\*

- Selects this object.
- @param existingSelection How this PageItem selection relates to objects already selected.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Stores the object in the selected library.
- @param using Library that will store the object.
- @param withProperties Starting property values for the new PageItem.
  \*/
  store(using: Library, withProperties: object): Asset

/\*\*

- Builds a string which, when run, resolves back to this PageItem.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Applies a transform to the page item.
- @param in\_ Coordinate space used for the operation.
- @param from Temporary transformation origin. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
- @param withMatrix Transformation matrix.
- @param replacingCurrent Components of the transform to consider. Supplying this optional parameter replaces the target's current transform components with new values.Without this parameter, the supplied matrix is concatenated with the target's existing transform so both effects combine.
- @param consideringRulerUnits When true, a ruler based origin is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.
  \*/
  transform(in\_: CoordinateSpaces, from: any, withMatrix: [number, number, number, number, number, number] | TransformationMatrix, replacingCurrent: MatrixContent | MatrixContent[] | number, consideringRulerUnits?: boolean): void

/\*\*

- Reapplies to the PageItem the most recent transformation performed on any object. Included transformations are moving, rotating, shearing, scaling, and flipping.
  \*/
  transformAgain(): string[]

/\*\*

- Reapplies to the PageItem the most recent transformation performed on any PageItem. Included transformations are moving, rotating, shearing, scaling, and flipping.
  \*/
  transformAgainIndividually(): string[]

/\*\*

- Reapplies to the PageItem the most recent transform-operation sequence used on one object or on grouped objects simultaneously. Included transformations are moving, rotating, shearing, scaling, and flipping.
  \*/
  transformSequenceAgain(): string[]

/\*\*

- Reapplies to the PageItem the most recent transformation sequence used on one object or on grouped objects simultaneously. Included transformations are moving, rotating, shearing, scaling, and flipping.
  \*/
  transformSequenceAgainIndividually(): string[]

/\*\*

- Gets this page item's transformation values.
- @param in* Coordinate space used for the lookup.
  \*/
  transformValuesOf(in*: CoordinateSpaces): TransformationMatrix[]
  }

/\*\*

- Collection type for page items; it can process every page item in a container such as a document, page, or group without regard to type.
  \*/
  declare class PageItems {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the PageItem at the given index.
- @param index Index to access.
  \*/
  [index: number]: PageItem

/\*\*

- Gets any PageItem from the collection.
  \*/
  anyItem(): PageItem

/\*\*

- Shows how many elements the PageItem contains.
  \*/
  count(): number

/\*\*

- Gets all PageItem entries in the collection.
  \*/
  everyItem(): PageItem[]

/\*\*

- Gets the first PageItem in this collection.
  \*/
  firstItem(): PageItem

/\*\*

- Gets the PageItem by index or by name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): PageItem

/\*\*

- Gets the PageItem with the given ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): PageItem

/\*\*

- Gets the PageItem with the given name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): PageItem

/\*\*

- Gets PageItems across a specified range.
- @param from PageItem, index, or name that starts the range.
- @param to PageItem, index, or name that ends the range.
  \*/
  itemByRange(from: PageItem | number | string, to: PageItem | number | string): PageItem[]

/\*\*

- Gets the final PageItem in this collection.
  \*/
  lastItem(): PageItem

/\*\*

- Gets the middle PageItem in this collection.
  \*/
  middleItem(): PageItem

/\*\*

- Gets the PageItem positioned immediately after the supplied PageItem.
- @param obj PageItem whose following neighbor is wanted.
  \*/
  nextItem(obj: PageItem): PageItem

/\*\*

- Gets the PageItem positioned immediately before the supplied index.
- @param obj Index belonging to the PageItem that follows the wanted one.
  \*/
  previousItem(obj: PageItem): PageItem

/\*\*

- Builds a string which, when run, resolves back to this PageItem.
  \*/
  toSource(): string
  }

/\*\*

- Ellipse type.
  \*/
  declare class Oval extends SplineItem {
  /\*\*
  - Frame fitting option used for placed or pasted content. It can be applied to a frame, object style, document, or application.
    \*/
    readonly frameFittingOptions: FrameFittingOption

/\*\*

- Export options for the InCopy INCX document format.
  \*/
  readonly incopyExportOptions: InCopyExportOption

/\*\*

- Title assigned to this InCopy story.
  \*/
  storyTitle: string

/\*\*

- Clears frame fitting options and restores the starting state.
  \*/
  clearFrameFittingOptions(): void
  }

/\*\*

- Collection containing ellipses.
  \*/
  declare class Ovals {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Oval at the specified index.
- @param index Index value.
  \*/
  [index: number]: Oval

/\*\*

- Creates one Oval.
- @param layer Layer where the Oval is created.
- @param at Insertion location for the Oval, relative to a reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during Oval creation
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Oval

/\*\*

- Gets any Oval from the collection.
  \*/
  anyItem(): Oval

/\*\*

- Reports the element count for the Oval.
  \*/
  count(): number

/\*\*

- Gets all Oval entries in the collection.
  \*/
  everyItem(): Oval[]

/\*\*

- Gets the first Oval from the collection.
  \*/
  firstItem(): Oval

/\*\*

- Gets the Oval selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Oval

/\*\*

- Gets the Oval identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Oval

/\*\*

- Gets the Oval identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Oval

/\*\*

- Gets the Ovals covered by the specified range.
- @param from Oval, index, or name that starts the range.
- @param to Oval, index, or name that ends the range.
  \*/
  itemByRange(from: Oval | number | string, to: Oval | number | string): Oval[]

/\*\*

- Gets the last Oval from the collection.
  \*/
  lastItem(): Oval

/\*\*

- Gets the middle Oval from the collection.
  \*/
  middleItem(): Oval

/\*\*

- Gets the Oval positioned after the specified Oval in the collection.
- @param obj Oval preceding the requested Oval.
  \*/
  nextItem(obj: Oval): Oval

/\*\*

- Gets the Oval at the index before the specified index.
- @param obj Index of the Oval after the requested Oval.
  \*/
  previousItem(obj: Oval): Oval

/\*\*

- Builds executable source text that returns the Oval.
  \*/
  toSource(): string
  }

/\*\*

- Rectangle object.
  \*/
  declare class Rectangle extends SplineItem {
  /\*\*
  - Frame fitting option used for placed or pasted content; it can apply at the frame, object style, document, or application level.
    \*/
    readonly frameFittingOptions: FrameFittingOption

/\*\*

- Options used when exporting the InCopy INCX document format.
  \*/
  readonly incopyExportOptions: InCopyExportOption

/\*\*

- Title assigned to this InCopy story.
  \*/
  storyTitle: string

/\*\*

- Clears frame fitting options and restores the starting state.
  \*/
  clearFrameFittingOptions(): void
  }

/\*\*

- Collection containing rectangles.
  \*/
  declare class Rectangles {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Rectangle at the specified index.
- @param index Index value.
  \*/
  [index: number]: Rectangle

/\*\*

- Creates one Rectangle.
- @param layer Layer where the Rectangle is created.
- @param at Insertion location for the Rectangle, relative to a reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during Rectangle creation
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Rectangle

/\*\*

- Gets any Rectangle from the collection.
  \*/
  anyItem(): Rectangle

/\*\*

- Reports the element count for the Rectangle.
  \*/
  count(): number

/\*\*

- Gets all Rectangle entries in the collection.
  \*/
  everyItem(): Rectangle[]

/\*\*

- Gets the first Rectangle from the collection.
  \*/
  firstItem(): Rectangle

/\*\*

- Gets the Rectangle selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Rectangle
