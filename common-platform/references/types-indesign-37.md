# Indesign (part 37)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Gets the Rectangle identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Rectangle

/\*\*

- Gets the Rectangle identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Rectangle

/\*\*

- Gets the Rectangles covered by the specified range.
- @param from Rectangle, index, or name that starts the range.
- @param to Rectangle, index, or name that ends the range.
  \*/
  itemByRange(from: Rectangle | number | string, to: Rectangle | number | string): Rectangle[]

/\*\*

- Gets the last Rectangle from the collection.
  \*/
  lastItem(): Rectangle

/\*\*

- Gets the middle Rectangle from the collection.
  \*/
  middleItem(): Rectangle

/\*\*

- Gets the Rectangle positioned after the specified Rectangle in the collection.
- @param obj Rectangle preceding the requested Rectangle.
  \*/
  nextItem(obj: Rectangle): Rectangle

/\*\*

- Gets the Rectangle at the index before the specified index.
- @param obj Index of the Rectangle after the requested Rectangle.
  \*/
  previousItem(obj: Rectangle): Rectangle

/\*\*

- Builds executable source text that returns the Rectangle.
  \*/
  toSource(): string
  }

/\*\*

- Straight line defined by two points.
  \*/
  declare class GraphicLine extends SplineItem {}

/\*\*

- Collection containing graphic lines.
  \*/
  declare class GraphicLines {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the GraphicLine at the specified index.
- @param index Index value.
  \*/
  [index: number]: GraphicLine

/\*\*

- Creates one GraphicLine.
- @param layer Layer where the GraphicLine is created.
- @param at Insertion location for the GraphicLine, relative to a reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during GraphicLine creation
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): GraphicLine

/\*\*

- Gets any GraphicLine from the collection.
  \*/
  anyItem(): GraphicLine

/\*\*

- Reports the element count for the GraphicLine.
  \*/
  count(): number

/\*\*

- Gets all GraphicLine entries in the collection.
  \*/
  everyItem(): GraphicLine[]

/\*\*

- Gets the first GraphicLine from the collection.
  \*/
  firstItem(): GraphicLine

/\*\*

- Gets the GraphicLine selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): GraphicLine

/\*\*

- Gets the GraphicLine identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): GraphicLine

/\*\*

- Gets the GraphicLine identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): GraphicLine

/\*\*

- Gets the GraphicLines covered by the specified range.
- @param from GraphicLine, index, or name that starts the range.
- @param to GraphicLine, index, or name that ends the range.
  \*/
  itemByRange(from: GraphicLine | number | string, to: GraphicLine | number | string): GraphicLine[]

/\*\*

- Gets the last GraphicLine from the collection.
  \*/
  lastItem(): GraphicLine

/\*\*

- Gets the middle GraphicLine from the collection.
  \*/
  middleItem(): GraphicLine

/\*\*

- Gets the GraphicLine positioned after the specified GraphicLine in the collection.
- @param obj GraphicLine preceding the requested GraphicLine.
  \*/
  nextItem(obj: GraphicLine): GraphicLine

/\*\*

- Gets the GraphicLine at the index before the specified index.
- @param obj Index of the GraphicLine after the requested GraphicLine.
  \*/
  previousItem(obj: GraphicLine): GraphicLine

/\*\*

- Builds executable source text that returns the GraphicLine.
  \*/
  toSource(): string
  }

/\*\*

- Polygon object. It covers shapes other than rectangles, ellipses, or graphic lines. When one is added, InDesign builds a regular polygon from the active polygon preferences settings.
  \*/
  declare class Polygon extends SplineItem {
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

- Collection containing polygons.
  \*/
  declare class Polygons {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Polygon at the specified index.
- @param index Index value.
  \*/
  [index: number]: Polygon

/\*\*

- Creates one Polygon..
- @param layer Layer where the Polygon is created.
- @param numberOfSides Side count assigned to the Polygon. (Range: 3 to 100)
- @param insetPercentage Star inset percentage used on the Polygon.
- @param at Insertion location for the Polygon, relative to a reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during Polygon creation
  \*/
  add(layer: Layer, numberOfSides: number, insetPercentage: number, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Polygon

/\*\*

- Gets any Polygon from the collection.
  \*/
  anyItem(): Polygon

/\*\*

- Reports the element count for the Polygon.
  \*/
  count(): number

/\*\*

- Gets all Polygon entries in the collection.
  \*/
  everyItem(): Polygon[]

/\*\*

- Gets the first Polygon from the collection.
  \*/
  firstItem(): Polygon

/\*\*

- Gets the Polygon selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Polygon

/\*\*

- Gets the Polygon identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Polygon

/\*\*

- Gets the Polygon identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Polygon

/\*\*

- Gets the Polygons covered by the specified range.
- @param from Polygon, index, or name that starts the range.
- @param to Polygon, index, or name that ends the range.
  \*/
  itemByRange(from: Polygon | number | string, to: Polygon | number | string): Polygon[]

/\*\*

- Gets the last Polygon from the collection.
  \*/
  lastItem(): Polygon

/\*\*

- Gets the middle Polygon from the collection.
  \*/
  middleItem(): Polygon

/\*\*

- Gets the Polygon positioned after the specified Polygon in the collection.
- @param obj Polygon preceding the requested Polygon.
  \*/
  nextItem(obj: Polygon): Polygon

/\*\*

- Gets the Polygon at the index before the specified index.
- @param obj Index of the Polygon after the requested Polygon.
  \*/
  previousItem(obj: Polygon): Polygon

/\*\*

- Builds executable source text that returns the Polygon.
  \*/
  toSource(): string
  }

/\*\*

- Group object.
  \*/
  declare class Group extends PageItem {
  /\*\*
  - Settings for anchored objects.
    \*/
    readonly anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Collection of group items that also belong to an article.
  \*/
  readonly articleChildren: ArticleChildren

/\*\*

- Collection containing buttons.
  \*/
  readonly buttons: Buttons

/\*\*

- Collection containing checkboxes.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- Collection containing comboboxes.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Collection containing endnote text frames.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Collection containing form fields.
  \*/
  readonly formFields: FormFields

/\*\*

- Collection containing graphic lines.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Collection containing groups.
  \*/
  readonly groups: Groups

/\*\*

- Collection containing listboxes.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Collection containing multi-state objects.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Options used when exporting the object
  \*/
  readonly objectExportOptions: ObjectExportOption

/\*\*

- Collection containing ellipses.
  \*/
  readonly ovals: Ovals

/\*\*

- Collection containing polygons.
  \*/
  readonly polygons: Polygons

/\*\*

- Collection containing radio buttons.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Collection containing signature fields.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Spline items collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Collection containing text boxes.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Collection containing text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Moves the Group forward one level within its layer.
  \*/
  bringForward(): void

/\*\*

- Moves the Group to its layer front, or ahead of a specific item.
- @param reference Reference object before which to place the object (must have same parent)
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Moves the Group back one level within its layer.
  \*/
  sendBackward(): void

/\*\*

- Moves the Group to its layer back, or behind a specific item (must have same parent).
- @param reference Reference object behind which to place the object
  \*/
  sendToBack(reference: PageItem): void

/\*\*

- Breaks the group apart.
  \*/
  ungroup(): void
  }

/\*\*

- Collection containing groups.
  \*/
  declare class Groups {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Group at the specified index.
- @param index Index value.
  \*/
  [index: number]: Group

/\*\*

- Creates one Group..
- @param groupItems Objects that will be grouped.
- @param layer Layer where the Group is created.
- @param at Insertion location for the Group, relative to a reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during Group creation
  \*/
  add(groupItems: PageItem[], layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Group

/\*\*

- Gets any Group from the collection.
  \*/
  anyItem(): Group

/\*\*

- Reports the element count for the Group.
  \*/
  count(): number

/\*\*

- Gets all Group entries in the collection.
  \*/
  everyItem(): Group[]

/\*\*

- Gets the first Group from the collection.
  \*/
  firstItem(): Group

/\*\*

- Gets the Group selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Group

/\*\*

- Gets the Group identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Group

/\*\*

- Gets the Group identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Group

/\*\*

- Gets the Groups covered by the specified range.
- @param from Group, index, or name that starts the range.
- @param to Group, index, or name that ends the range.
  \*/
  itemByRange(from: Group | number | string, to: Group | number | string): Group[]

/\*\*

- Gets the last Group from the collection.
  \*/
  lastItem(): Group

/\*\*

- Gets the middle Group from the collection.
  \*/
  middleItem(): Group

/\*\*

- Gets the Group positioned after the specified Group in the collection.
- @param obj Group preceding the requested Group.
  \*/
  nextItem(obj: Group): Group

/\*\*

- Gets the Group at the index before the specified index.
- @param obj Index of the Group after the requested Group.
  \*/
  previousItem(obj: Group): Group

/\*\*

- Builds executable source text that returns the Group.
  \*/
  toSource(): string
  }

/\*\*

- Imported bitmap image using a bitmap format such as TIFF, JPEG, or GIF.
  \*/
  declare class Image extends Graphic {
  /\*\*
  - Native resolution for a placed graphic.
    \*/
    readonly actualPpi: number[]

/\*\*

- Settings for the clipping path.
  \*/
  readonly clippingPath: ClippingPathSettings

/\*\*

- Graphic resolution after resizing.
  \*/
  readonly effectivePpi: number[]

/\*\*

- Settings for graphic layer options.
  \*/
  readonly graphicLayerOptions: GraphicLayerOption

/\*\*

- Image I/O preference properties used to control image import preferences.
  \*/
  readonly imageIOPreferences: ImageIOPreference

/\*\*

- Rendering intent override used for the image.
  \*/
  imageRenderingIntent: RenderingIntent

/\*\*

- Color profile value.
  \*/
  profile: Profile | string

/\*\*

- List containing valid RGB profiles.
  \*/
  readonly profileList: string[]

/\*\*

- Color space value.
  \*/
  readonly space: string
  }

/\*\*

- Collection of bitmap images across bitmap formats such as TIFF, JPEG, or GIF.
  \*/
  declare class Images {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Image at the specified index.
- @param index Index value.
  \*/
  [index: number]: Image

/\*\*

- Gets any Image from the collection.
  \*/
  anyItem(): Image

/\*\*

- Reports the element count for the Image.
  \*/
  count(): number

/\*\*

- Gets all Image entries in the collection.
  \*/
  everyItem(): Image[]

/\*\*

- Gets the first Image from the collection.
  \*/
  firstItem(): Image

/\*\*

- Gets the Image selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Image

/\*\*

- Gets the Image identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Image

/\*\*

- Gets the Image identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Image

/\*\*

- Gets the Images covered by the specified range.
- @param from Image, index, or name that starts the range.
- @param to Image, index, or name that ends the range.
  \*/
  itemByRange(from: Image | number | string, to: Image | number | string): Image[]

/\*\*

- Gets the last Image from the collection.
  \*/
  lastItem(): Image

/\*\*

- Gets the middle Image from the collection.
  \*/
  middleItem(): Image

/\*\*

- Gets the Image positioned after the specified Image in the collection.
- @param obj Image preceding the requested Image.
  \*/
  nextItem(obj: Image): Image

/\*\*

- Gets the Image at the index before the specified index.
- @param obj Index of the Image after the requested Image.
  \*/
  previousItem(obj: Image): Image

/\*\*

- Builds executable source text that returns the Image.
  \*/
  toSource(): string
  }

/\*\*

- Placed EPS file.
  \*/
  declare class EPS extends Graphic {
  /\*\*
  - Native resolution for a placed graphic.
    \*/
    readonly actualPpi: number[]

/\*\*

- Settings for the clipping path.
  \*/
  readonly clippingPath: ClippingPathSettings

/\*\*

- Color profile policy applied to CMYK content in a placed vector.
  \*/
  cmykVectorPolicy: PlacedVectorProfilePolicy

/\*\*

- Graphic resolution after resizing.
  \*/
  readonly effectivePpi: number[]

/\*\*

- Color profile policy applied to grayscale content in a placed vector.
  \*/
  grayVectorPolicy: PlacedVectorProfilePolicy

/\*\*

- Color profile policy applied to RGB content in a placed vector.
  \*/
  rgbVectorPolicy: PlacedVectorProfilePolicy

/\*\*

- Color space value.
  \*/
  readonly space: string
  }

/\*\*

- Collection containing EPS files.
  \*/
  declare class EPSs {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the EPS at the specified index.
- @param index Index value.
  \*/
  [index: number]: EPS

/\*\*

- Gets any EPS from the collection.
  \*/
  anyItem(): EPS

/\*\*

- Reports the element count for the EPS.
  \*/
  count(): number

/\*\*

- Gets all EPS entries in the collection.
  \*/
  everyItem(): EPS[]

/\*\*

- Gets the first EPS from the collection.
  \*/
  firstItem(): EPS

/\*\*

- Gets the EPS selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): EPS

/\*\*

- Gets the EPS identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): EPS

/\*\*

- Gets the EPS identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): EPS

/\*\*

- Gets the EPSs covered by the specified range.
- @param from EPS, index, or name that starts the range.
- @param to EPS, index, or name that ends the range.
  \*/
  itemByRange(from: EPS | number | string, to: EPS | number | string): EPS[]

/\*\*

- Gets the last EPS from the collection.
  \*/
  lastItem(): EPS

/\*\*

- Gets the middle EPS from the collection.
  \*/
  middleItem(): EPS

/\*\*

- Gets the EPS positioned after the specified EPS in the collection.
- @param obj EPS preceding the requested EPS.
  \*/
  nextItem(obj: EPS): EPS

/\*\*

- Gets the EPS at the index before the specified index.
- @param obj Index of the EPS after the requested EPS.
  \*/
  previousItem(obj: EPS): EPS

/\*\*

- Builds executable source text that returns the EPS.
  \*/
  toSource(): string
  }

/\*\*

- Placed PDF file.
  \*/
  declare class PDF extends Graphic {
  /\*\*
  - Settings for the clipping path.
    \*/
    readonly clippingPath: ClippingPathSettings

/\*\*

- Color profile policy applied to CMYK content in a placed vector.
  \*/
  cmykVectorPolicy: PlacedVectorProfilePolicy

/\*\*

- Settings for graphic layer options.
  \*/
  readonly graphicLayerOptions: GraphicLayerOption

/\*\*

- Color profile policy applied to grayscale content in a placed vector.
  \*/
  grayVectorPolicy: PlacedVectorProfilePolicy

/\*\*

- Settings for PDF attributes.
  \*/
  readonly pdfAttributes: PDFAttribute

/\*\*

- Color profile policy applied to RGB content in a placed vector.
  \*/
  rgbVectorPolicy: PlacedVectorProfilePolicy
  }

/\*\*

- Collection containing PDF files.
  \*/
  declare class PDFs {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the PDF at the specified index.
- @param index Index value.
  \*/
  [index: number]: PDF

/\*\*

- Gets any PDF from the collection.
  \*/
  anyItem(): PDF

/\*\*

- Reports the element count for the PDF.
  \*/
  count(): number

/\*\*

- Gets all PDF entries in the collection.
  \*/
  everyItem(): PDF[]

/\*\*

- Gets the first PDF from the collection.
  \*/
  firstItem(): PDF

/\*\*

- Gets the PDF selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): PDF

/\*\*

- Gets the PDF identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): PDF

/\*\*

- Gets the PDF identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): PDF

/\*\*

- Gets the PDFs covered by the specified range.
- @param from PDF, index, or name that starts the range.
- @param to PDF, index, or name that ends the range.
  \*/
  itemByRange(from: PDF | number | string, to: PDF | number | string): PDF[]

/\*\*

- Gets the last PDF from the collection.
  \*/
  lastItem(): PDF

/\*\*

- Gets the middle PDF from the collection.
  \*/
  middleItem(): PDF

/\*\*

- Gets the PDF positioned after the specified PDF in the collection.
- @param obj PDF preceding the requested PDF.
  \*/
  nextItem(obj: PDF): PDF

/\*\*

- Gets the PDF at the index before the specified index.
- @param obj Index of the PDF after the requested PDF.
  \*/
  previousItem(obj: PDF): PDF

/\*\*

- Builds executable source text that returns the PDF.
  \*/
  toSource(): string
  }

/\*\*

- Placed WMF graphic.
  \*/
  declare class WMF extends Graphic {
  /\*\*
  - Settings for the clipping path.
    \*/
    readonly clippingPath: ClippingPathSettings
    }

/\*\*

- Collection containing WMF graphics.
  \*/
  declare class WMFs {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the WMF at the specified index.
- @param index Index value.
  \*/
  [index: number]: WMF

/\*\*

- Gets any WMF from the collection.
  \*/
  anyItem(): WMF

/\*\*

- Reports the element count for the WMF.
  \*/
  count(): number

/\*\*

- Gets all WMF entries in the collection.
  \*/
  everyItem(): WMF[]

/\*\*

- Gets the first WMF from the collection.
  \*/
  firstItem(): WMF

/\*\*

- Gets the WMF selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): WMF

/\*\*

- Gets the WMF identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): WMF

/\*\*

- Gets the WMF identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): WMF

/\*\*

- Gets the WMFs covered by the specified range.
- @param from WMF, index, or name that starts the range.
- @param to WMF, index, or name that ends the range.
  \*/
  itemByRange(from: WMF | number | string, to: WMF | number | string): WMF[]

/\*\*

- Gets the last WMF from the collection.
  \*/
  lastItem(): WMF

/\*\*

- Gets the middle WMF from the collection.
  \*/
  middleItem(): WMF

/\*\*

- Gets the WMF positioned after the specified WMF in the collection.
- @param obj WMF preceding the requested WMF.
  \*/
  nextItem(obj: WMF): WMF

/\*\*

- Gets the WMF at the index before the specified index.
- @param obj Index of the WMF after the requested WMF.
  \*/
  previousItem(obj: WMF): WMF

/\*\*

- Builds executable source text that returns the WMF.
  \*/
  toSource(): string
  }

/\*\*

- Placed PICT graphic.
  \*/
  declare class PICT extends Graphic {
  /\*\*
  - Settings for the clipping path.
    \*/
    readonly clippingPath: ClippingPathSettings
    }
