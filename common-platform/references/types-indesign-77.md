# Indesign (part 77)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler object or function.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Applies a character style.
- @param using Character style to apply.
  \*/
  applyCharacterStyle(using: CharacterStyle): void

/\*\*

- Applies one or more conditions.
- @param using Condition or conditions to apply.
- @param removeExisting When true, existing conditions are removed.
  \*/
  applyConditions(using: Condition[], removeExisting?: boolean): void

/\*\*

- Applies a paragraph style.
- @param using Paragraph style to apply.
- @param clearingOverrides When true, text attributes are cleared before the style is applied.
  \*/
  applyParagraphStyle(using: ParagraphStyle, clearingOverrides?: boolean): void

/\*\*

- Exports the object or objects to a file asynchronously.
- @param format Export format supplied as an enumeration value, or as an extension shown by the Export dialog's Save as type / Format choices.
- @param to Path for the exported file.
- @param showingOptions When true, the export options dialog is shown.
- @param using Export style to use.
- @param versionComments Comment associated with this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  asynchronousExportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask

/\*\*

- Tags the object or parent story using default tags from XML preference.
  \*/
  autoTag(): void

/\*\*

- Locates glyphs matching the find what value and substitutes the change to value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find what value and substitutes the change to value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find what value and substitutes the change to value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find character type value and substitutes the change character type value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Changes the text case.
- @param using Text case option to use.
  \*/
  changecase(using: ChangecaseMode): void

/\*\*

- Clears selected override types.
- @param overridesToClear Override types that should be cleared.
  \*/
  clearOverrides(overridesToClear?: OverrideType): void

/\*\*

- Changes bullets and numbering into text.
  \*/
  convertBulletsAndNumberingToText(): void

/\*\*

- Changes the text into a note.
  \*/
  convertToNote(): Note

/\*\*

- Changes the text into a table.
- @param columnSeparator Character that begins a new column in the created table.
- @param rowSeparator Character that begins a new row in the created table.
- @param numberOfColumns Column count for the table. Note: valid only when column and row separator characters match.
  \*/
  convertToTable(columnSeparator: string, rowSeparator: string, numberOfColumns?: number): Table

/\*\*

- Generates an Email QR Code for a document or page item.
- @param emailAddress Email Address value encoded in the QR code.
- @param subject Email Subject value encoded in the QR code.
- @param body Email Body Message value encoded in the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial property values for the new Text; these settings may also carry the preceding values.
  \*/
  createEmailQRCode(emailAddress: string, subject: string, body: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Generates a Hyperlink QR Code for a document or page item.
- @param urlLink Hyperlink URL value encoded in the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial property values for the new Text; these settings may also carry the preceding values.
  \*/
  createHyperlinkQRCode(urlLink: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Changes text into outlines. Each text line becomes a polygon object. A single-letter conversion with no internal spaces or detached parts produces a polygon containing one path only. Note: see allow outlines to determine whether a font permits outline creation.
- @param deleteOriginal When true, the original text is deleted; when false, outlines are created as separate object(s) over the text.
  \*/
  createOutlines(deleteOriginal?: boolean): PageItem[]

/\*\*

- Creates a Plain Text QR Code on the page item.
- @param plainText Plain Text value encoded in the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial property values for the new Text; these settings may also carry the preceding values.
  \*/
  createPlainTextQRCode(plainText: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a thumbnail for selected text using the applied style, overrides, and supplied properties.
- @param previewText Sample text to use.
- @param pointSize Font-size value for text, measured in points.
- @param space RGB, CMYK, or LAB color space.
- @param colorValue Color values.
- @param to Path for the exported file.
- @param charOrParaStyle Style type that should be applied.
  \*/
  createStyleThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: File, charOrParaStyle: StyleType): boolean

/\*\*

- Generates a Text Msg QR Code for a document or page item.
- @param cellNumber Text Phone Number value encoded in the QR code.
- @param textMessage Text Message value encoded in the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial property values for the new Text; these settings may also carry the preceding values.
  \*/
  createTextMsgQRCode(cellNumber: string, textMessage: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a thumbnail for selected text with the supplied properties.
- @param previewText Sample text to use.
- @param pointSize Font-size value for text, measured in points.
- @param space RGB, CMYK, or LAB color space.
- @param colorValue Color values.
- @param to Path for the exported file.
  \*/
  createThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: File): boolean

/\*\*

- Creates a Business Card QR Code on a page item, or loads it into the document's placegun.
- @param firstName Business Card First Name value encoded in the QR code.
- @param lastName Business Card Last Name value encoded in the QR code.
- @param jobTitle Business Card Title value encoded in the QR code.
- @param cellPhone Business Card Cell Phone Number value encoded in the QR code.
- @param phone Business Card Phone Number value encoded in the QR code.
- @param email Business Card Email Address value encoded in the QR code.
- @param organisation Business Card Organisation value encoded in the QR code.
- @param streetAddress Business Card Street Address value encoded in the QR code.
- @param city Business Card City value encoded in the QR code.
- @param adrState Business Card State value encoded in the QR code.
- @param country Business Card Country value encoded in the QR code.
- @param postalCode Business Card Postal Code value encoded in the QR code.
- @param website Business Card URL value encoded in the QR code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial property values for the new Text; these settings may also carry the preceding values.
  \*/
  createVCardQRCode(firstName: string, lastName: string, jobTitle: string, cellPhone: string, phone: string, email: string, organisation: string, streetAddress: string, city: string, adrState: string, country: string, postalCode: string, website: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Duplicates the text at the requested location.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: required for destinations relative to another object.
  \*/
  duplicate(to: LocationOptions, reference: Text | Story | Cell | Row | Column | Table | PageItem): Text

/\*\*

- Exports the object or objects to a file.
- @param format Export format supplied as an enumeration value, or as an extension shown by the Export dialog's Save as type / Format choices.
- @param to Path for the exported file.
- @param showingOptions When true, the export options dialog is shown.
- @param using Export style to use.
- @param versionComments Comment associated with this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void

/\*\*

- Locates glyphs matching the find what value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find what value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Locates hyperlink sources that intersect the specified text range.
- @param sortOrder Sort order for the found ranges.
  \*/
  findHyperlinks(sortOrder: RangeSortOrder): HyperlinkTextSource[]

/\*\*

- Locates text matching the find what value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find character type value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Resolves the object specifier and creates an array of object references.
  \*/
  getElements(): Text[]

/\*\*

- When true, the Nth design axis of a variable font is hidden.
- @param nthAxisIndex Design-axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Links the page item to the specified XML element while keeping existing content.
- @param using XML element to associate.
  \*/
  markup(using: XMLElement): void

/\*\*

- Moves the text to the requested location.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: required for destinations relative to another object.
  \*/
  move(to: LocationOptions, reference: Text | Story | Cell | Row | Column | Table | PageItem): Text

/\*\*

- Places the file.
- @param fileName File to place.
- @param showingOptions Whether the import options dialog is displayed.
- @param withProperties Property defaults assigned while placing the object(s).
  \*/
  place(fileName: File, showingOptions?: boolean, withProperties?: object): any[]

/\*\*

- Recomposes this Text.
  \*/
  recompose(): void

/\*\*

- Removes this Text.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Selects the object.
- @param existingSelection Selection status for this Text relative to previously selected objects.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Sets the Nth design axis of a variable font.
- @param nthAxisIndex Design-axis index.
- @param nthAxisValue Value for the Nth design axis.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void

/\*\*

- Jumps to the text range.
  \*/
  showText(): void

/\*\*

- Checks whether text has local overrides.
- @param charOrParaStyle Style type to inspect.
- @param charStyleAsOverride Whether character styles should count as overrides.
  \*/
  textHasOverrides(charOrParaStyle: StyleType, charStyleAsOverride?: boolean): boolean

/\*\*

- Produces a string that can be executed to return the Text.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Text objects collected together.
  \*/
  declare class Texts {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Text at the specified index.
- @param index Index value.
  \*/
  [index: number]: Text

/\*\*

- Retrieves any Text from the collection.
  \*/
  anyItem(): Text

/\*\*

- Displays how many elements are in the Text.
  \*/
  count(): number

/\*\*

- Retrieves every Text from the collection.
  \*/
  everyItem(): Text[]

/\*\*

- Retrieves the first Text in the collection.
  \*/
  firstItem(): Text

/\*\*

- Retrieves the Text at the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Text

/\*\*

- Retrieves Texts within the requested range.
- @param from Text, index, or name at the range start.
- @param to Text, index, or name at the range end.
  \*/
  itemByRange(from: Text | number | string, to: Text | number | string): Text[]

/\*\*

- Retrieves the last Text in the collection.
  \*/
  lastItem(): Text

/\*\*

- Retrieves the middle Text in the collection.
  \*/
  middleItem(): Text

/\*\*

- Retrieves the Text immediately after the supplied Text in collection order.
- @param obj Text positioned just before the desired Text.
  \*/
  nextItem(obj: Text): Text

/\*\*

- Gets the Text positioned immediately before the supplied index.
- @param obj Index for the Text that comes after the wanted Text.
  \*/
  previousItem(obj: Text): Text

/\*\*

- Builds executable source text that resolves back to the Text.
  \*/
  toSource(): string
  }

/\*\*

- One text character.
  \*/
  declare class Character extends Text {}

/\*\*

- Character collection.
  \*/
  declare class Characters {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Character at the supplied index.
- @param index Index value.
  \*/
  [index: number]: Character

/\*\*

- Selects an arbitrary Character from the collection.
  \*/
  anyItem(): Character

/\*\*

- Reports how many elements the Character collection contains.
  \*/
  count(): number

/\*\*

- Gets all Character entries from the collection.
  \*/
  everyItem(): Character[]

/\*\*

- Gets the initial Character in the collection.
  \*/
  firstItem(): Character

/\*\*

- Gets the Character identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Character

/\*\*

- Gets Characters over the supplied range.
- @param from Starting Character, index, or name for the range.
- @param to Ending Character, index, or name for the range.
  \*/
  itemByRange(from: Character | number | string, to: Character | number | string): Character[]

/\*\*

- Gets the final Character in the collection.
  \*/
  lastItem(): Character

/\*\*

- Gets the central Character in the collection.
  \*/
  middleItem(): Character

/\*\*

- Gets the Character positioned after the supplied Character in the collection.
- @param obj Character that precedes the wanted Character.
  \*/
  nextItem(obj: Character): Character

/\*\*

- Gets the Character positioned immediately before the supplied index.
- @param obj Index for the Character that comes after the wanted Character.
  \*/
  previousItem(obj: Character): Character

/\*\*

- Builds executable source text that resolves back to the Character.
  \*/
  toSource(): string
  }

/\*\*

- One word.
  \*/
  declare class Word extends Text {}

/\*\*

- Word collection.
  \*/
  declare class Words {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Word at the supplied index.
- @param index Index value.
  \*/
  [index: number]: Word

/\*\*

- Selects an arbitrary Word from the collection.
  \*/
  anyItem(): Word

/\*\*

- Reports how many elements the Word collection contains.
  \*/
  count(): number

/\*\*

- Gets all Word entries from the collection.
  \*/
  everyItem(): Word[]

/\*\*

- Gets the initial Word in the collection.
  \*/
  firstItem(): Word

/\*\*

- Gets the Word identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Word

/\*\*

- Gets Words over the supplied range.
- @param from Starting Word, index, or name for the range.
- @param to Ending Word, index, or name for the range.
  \*/
  itemByRange(from: Word | number | string, to: Word | number | string): Word[]

/\*\*

- Gets the final Word in the collection.
  \*/
  lastItem(): Word

/\*\*

- Gets the central Word in the collection.
  \*/
  middleItem(): Word

/\*\*

- Gets the Word positioned after the supplied Word in the collection.
- @param obj Word that precedes the wanted Word.
  \*/
  nextItem(obj: Word): Word

/\*\*

- Gets the Word positioned immediately before the supplied index.
- @param obj Index for the Word that comes after the wanted Word.
  \*/
  previousItem(obj: Word): Word

/\*\*

- Builds executable source text that resolves back to the Word.
  \*/
  toSource(): string
  }

/\*\*

- Text line.
  \*/
  declare class Line extends Text {}

/\*\*

- Line collection.
  \*/
  declare class Lines {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Line at the supplied index.
- @param index Index value.
  \*/
  [index: number]: Line

/\*\*

- Selects an arbitrary Line from the collection.
  \*/
  anyItem(): Line

/\*\*

- Reports how many elements the Line collection contains.
  \*/
  count(): number

/\*\*

- Gets all Line entries from the collection.
  \*/
  everyItem(): Line[]

/\*\*

- Gets the initial Line in the collection.
  \*/
  firstItem(): Line

/\*\*

- Gets the Line identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Line

/\*\*

- Gets Lines over the supplied range.
- @param from Starting Line, index, or name for the range.
- @param to Ending Line, index, or name for the range.
  \*/
  itemByRange(from: Line | number | string, to: Line | number | string): Line[]

/\*\*

- Gets the final Line in the collection.
  \*/
  lastItem(): Line

/\*\*

- Gets the central Line in the collection.
  \*/
  middleItem(): Line

/\*\*

- Gets the Line positioned after the supplied Line in the collection.
- @param obj Line that precedes the wanted Line.
  \*/
  nextItem(obj: Line): Line

/\*\*

- Gets the Line positioned immediately before the supplied index.
- @param obj Index for the Line that comes after the wanted Line.
  \*/
  previousItem(obj: Line): Line

/\*\*

- Builds executable source text that resolves back to the Line.
  \*/
  toSource(): string
  }

/\*\*

- Text column.
  \*/
  declare class TextColumn extends Text {}

/\*\*

- TextColumn collection.
  \*/
  declare class TextColumns {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TextColumn at the supplied index.
- @param index Index value.
  \*/
  [index: number]: TextColumn

/\*\*

- Selects an arbitrary TextColumn from the collection.
  \*/
  anyItem(): TextColumn

/\*\*

- Reports how many elements the TextColumn collection contains.
  \*/
  count(): number

/\*\*

- Gets all TextColumn entries from the collection.
  \*/
  everyItem(): TextColumn[]

/\*\*

- Gets the initial TextColumn in the collection.
  \*/
  firstItem(): TextColumn

/\*\*

- Gets the TextColumn identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TextColumn

/\*\*

- Gets TextColumns over the supplied range.
- @param from Starting TextColumn, index, or name for the range.
- @param to Ending TextColumn, index, or name for the range.
  \*/
  itemByRange(from: TextColumn | number | string, to: TextColumn | number | string): TextColumn[]

/\*\*

- Gets the final TextColumn in the collection.
  \*/
  lastItem(): TextColumn

/\*\*

- Gets the central TextColumn in the collection.
  \*/
  middleItem(): TextColumn

/\*\*

- Gets the TextColumn positioned after the supplied TextColumn in the collection.
- @param obj TextColumn that precedes the wanted TextColumn.
  \*/
  nextItem(obj: TextColumn): TextColumn

/\*\*

- Gets the TextColumn positioned immediately before the supplied index.
- @param obj Index for the TextColumn that comes after the wanted TextColumn.
  \*/
  previousItem(obj: TextColumn): TextColumn

/\*\*

- Builds executable source text that resolves back to the TextColumn.
  \*/
  toSource(): string
  }

/\*\*

- Paragraph object.
  \*/
  declare class Paragraph extends Text {
  /\*\*
  - Current bullets or numbering text.
    \*/
    readonly bulletsAndNumberingResultText: string

/\*\*

- Current level-number value.
  \*/
  readonly numberingResultNumber: number
  }

/\*\*

- Paragraph collection.
  \*/
  declare class Paragraphs {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Paragraph at the supplied index.
- @param index Index value.
  \*/
  [index: number]: Paragraph

/\*\*

- Selects an arbitrary Paragraph from the collection.
  \*/
  anyItem(): Paragraph

/\*\*

- Reports how many elements the Paragraph collection contains.
  \*/
  count(): number

/\*\*

- Gets all Paragraph entries from the collection.
  \*/
  everyItem(): Paragraph[]

/\*\*

- Gets the initial Paragraph in the collection.
  \*/
  firstItem(): Paragraph

/\*\*

- Gets the Paragraph identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Paragraph

/\*\*

- Gets Paragraphs over the supplied range.
- @param from Starting Paragraph, index, or name for the range.
- @param to Ending Paragraph, index, or name for the range.
  \*/
  itemByRange(from: Paragraph | number | string, to: Paragraph | number | string): Paragraph[]

/\*\*

- Gets the final Paragraph in the collection.
  \*/
  lastItem(): Paragraph

/\*\*

- Gets the central Paragraph in the collection.
  \*/
  middleItem(): Paragraph
