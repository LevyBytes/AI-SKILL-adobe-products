# Character (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Updates a variable font design axis selected by ordinal index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Value assigned to that design axis. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the indexed variable-font design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for selected text using the supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text for the thumbnail. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | Color space, either RGB, CMYK, or LAB. |
| Number | colorValue | Values for the color. |
| File | to | Export-file path. |

> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
>
> Returns true when the text contains local overrides.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style type to inspect. |
| Boolean | charStyleAsOverride | Controls whether character styles are treated as overrides. (Optional) |

> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
>
> Creates a thumbnail for selected text from its applied style, overrides, and the supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text for the thumbnail. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | Color space, either RGB, CMYK, or LAB. |
| Number | colorValue | Values for the color. |
| File | to | Export-file path. |
| StyleType | charOrParaStyle | Applied style type used for the thumbnail. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. Each text line becomes a polygon object. If the converted text is one letter without internal spaces or separated parts, the resulting polygon has a single path. Note: Check allow outlines to determine whether a font permits outline creation.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, places separate outline object(s) above the text. (Optional) |

> **autoTag**()
>
> Applies the default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Connects the page item to the specified XML element without discarding current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> **remove**()
>
> Removes the Character.
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
>
> Changes the text into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Character that begins a new column in the generated table. (Optional) |
| String | rowSeparator | Character that begins a new row in the generated table. (Optional) |
| Number | numberOfColumns | Column count for the table. Note: Applies only when the column and row separator characters match. (Optional) |

> **changecase**( ChangecaseMode **using** )
>
> Changes the text case.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Text-case option. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the requested override types.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override types to remove. (Optional) |

> **recompose**()
>
> Recomposes the text contained in the Character.
> **showText**()
>
> Navigates to the text range.
> **applyParagraphStyle**( ParagraphStyle **using**, Boolean **clearingOverrides** )
>
> Applies a paragraph style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | using | Paragraph style that will be applied. |
| Boolean | clearingOverrides | When true, removes existing text attributes before the style is applied. (Optional) |

> **applyCharacterStyle**( CharacterStyle **using** )
>
> Applies a character style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | using | Character style that will be applied. |

> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Copies the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Required when the to parameter uses before or after. Can accept: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Required when the to parameter uses before or after. Can accept: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Finds text that satisfies the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Finds text satisfying the find what value, then swaps it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value, then replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, outputs matches from the end toward the start. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Adds the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File selected for placement. |
| Boolean | showingOptions | Controls whether the import options dialog appears. (Optional) |
| Object | withProperties | Starting values for properties on the placed object(s). (Optional) |

> Note **convertToNote**()
>
> Converts the text into a note.
> HyperlinkTextSource **findHyperlinks**( RangeSortOrder **sortOrder** )
>
> Locates hyperlink sources that intersect the specified text range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RangeSortOrder | sortOrder | Sort order used for the located ranges. (Optional) |

> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to this page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Character. The preceding parameters can also be supplied as properties. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Character. The preceding parameters can also be supplied as properties. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number encoded by the Text QR code. (Optional) |
| String | textMessage | Message text encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Character. The preceding parameters can also be supplied as properties. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded by the QR code. (Optional) |
| String | subject | Email Subject encoded by the QR code. (Optional) |
| String | body | Email Body Message encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Character. The preceding parameters can also be supplied as properties. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to the page item or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First Name value for the Business Card QR code. (Optional) |
| String | lastName | Last Name value for the Business Card QR code. (Optional) |
| String | jobTitle | Title value for the Business Card QR code. (Optional) |
| String | cellPhone | Cell Phone Number value for the Business Card QR code. (Optional) |
| String | phone | Phone Number value for the Business Card QR code. (Optional) |
| String | email | Email Address value for the Business Card QR code. (Optional) |
| String | organisation | Organisation value for the Business Card QR code. (Optional) |
| String | streetAddress | Street Address value for the Business Card QR code. (Optional) |
| String | city | City value for the Business Card QR code. (Optional) |
| String | adrState | State value for the Business Card QR code. (Optional) |
| String | country | Country value for the Business Card QR code. (Optional) |
| String | postalCode | Postal Code value for the Business Card QR code. (Optional) |
| String | website | URL value for the Business Card QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Character. The preceding parameters can also be supplied as properties. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, either an ExportFormat enumerator or a file extension. In the Export dialog, the extension is listed under Save as type or Format. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, either an ExportFormat enumerator or a file extension. In the Export dialog, the extension is listed under Save as type or Format. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> **applyConditions**( Condition **using**, Boolean **removeExisting** )
>
> Applies one or more conditions.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | using | Condition(s) that will be applied. |
| Boolean | removeExisting | When true, removes conditions already present. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Converts bullets and numbering into text.
> **select**( SelectionOptions **existingSelection** )
>
> Makes this object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the Character relative to objects already selected. (Optional) |

> String **toSource**()
>
> Produces a string that returns the Character when executed.
> Character **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
