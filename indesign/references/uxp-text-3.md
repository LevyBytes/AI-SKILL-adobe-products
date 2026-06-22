# Text (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for the selected text using the supplied settings.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text used in the thumbnail. |
| Number | pointSize | Font size for the text, measured in points. |
| ColorSpace | space | Color space selection: RGB, CMYK, or LAB. |
| Number | colorValue | Color component values. |
| File | to | Destination path for the exported file. |

> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
>
> Returns true when the text contains local overrides.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style category to inspect. |
| Boolean | charStyleAsOverride | Controls whether character styles count as overrides. (Optional) |

> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
>
> Builds a selected-text thumbnail from the applied style, overrides, and supplied settings.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text used in the thumbnail. |
| Number | pointSize | Font size for the text, measured in points. |
| ColorSpace | space | Color space selection: RGB, CMYK, or LAB. |
| Number | colorValue | Color component values. |
| File | to | Destination path for the exported file. |
| StyleType | charOrParaStyle | Applied style type to use. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outline geometry. Each text line becomes a polygon object. For a converted single letter with no interior spaces or separated pieces, the resulting polygon has just one path. Note: To check whether outline creation is allowed for a font, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, places separate outline object(s) above the text. (Optional) |

> **autoTag**()
>
> Applies default XML preference tags to the object or to its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without replacing its current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to use. |

> **remove**()
>
> Removes the Text.
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
>
> Turns the text into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Character used to begin a new column in the generated table. (Optional) |
| String | rowSeparator | Character used to begin a new row in the generated table. (Optional) |
| Number | numberOfColumns | Column count for the table. Note: Applies only when column and row separators use the same character. (Optional) |

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the Nth design axis for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Nth design-axis value. |

> **changecase**( ChangecaseMode **using** )
>
> Changes the text case.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Text case option. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the Nth design axis for the variable font is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the requested override types.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override types to remove. (Optional) |

> **recompose**()
>
> Recomposes the Text contents.
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
| Boolean | clearingOverrides | When true, clears text attributes before the style is applied. (Optional) |

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
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Use it when to specifies before or after. Allowed values include: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Moves the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Use it when to specifies before or after. Allowed values include: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Finds text matching find what and replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Finds text matching find what and replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching find what and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching find character type and replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, output order is reversed. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Loads the file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed. |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> Note **convertToNote**()
>
> Changes the text into a note.
> HyperlinkTextSource **findHyperlinks**( RangeSortOrder **sortOrder** )
>
> Finds hyperlink sources that intersect the specified text range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RangeSortOrder | sortOrder | Sort order used for the found ranges. (Optional) |

> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a page-item QR Code carrying Plain Text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Allowed values include: Swatch or String. (Optional) |
| String | withProperties | Default property values for the new Text; any preceding inputs may be supplied through this field. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code for a Hyperlink to either a page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Allowed values include: Swatch or String. (Optional) |
| String | withProperties | Default property values for the new Text; any preceding inputs may be supplied through this field. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code for a Text Msg to either a page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number for the Text QR code. (Optional) |
| String | textMessage | Text Message content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Allowed values include: Swatch or String. (Optional) |
| String | withProperties | Default property values for the new Text; any preceding inputs may be supplied through this field. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code for Email data to either a page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address for the QR code. (Optional) |
| String | subject | Email Subject for the QR code. (Optional) |
| String | body | Email Body Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Allowed values include: Swatch or String. (Optional) |
| String | withProperties | Default property values for the new Text; any preceding inputs may be supplied through this field. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name encoded in the QR code. (Optional) |
| String | lastName | Business Card Last Name encoded in the QR code. (Optional) |
| String | jobTitle | Business Card Title encoded in the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number encoded in the QR code. (Optional) |
| String | phone | Business Card Phone Number encoded in the QR code. (Optional) |
| String | email | Business Card Email Address encoded in the QR code. (Optional) |
| String | organisation | Business Card Organisation encoded in the QR code. (Optional) |
| String | streetAddress | Business Card Street Address encoded in the QR code. (Optional) |
| String | city | Business Card City encoded in the QR code. (Optional) |
| String | adrState | Business Card State encoded in the QR code. (Optional) |
| String | country | Business Card Country encoded in the QR code. (Optional) |
| String | postalCode | Business Card Postal Code encoded in the QR code. (Optional) |
| String | website | Business Card URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Allowed values include: Swatch or String. (Optional) |
| String | withProperties | Default property values for the new Text; any preceding inputs may be supplied through this field. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format. Supply an enumeration value, or use an extension listed in the Export dialog's Save as type or Format menu. Allowed values include: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format. Supply an enumeration value, or use an extension listed in the Export dialog's Save as type or Format menu. Allowed values include: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **applyConditions**( Condition **using**, Boolean **removeExisting** )
>
> Applies one or more conditions.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | using | Condition(s) that will be applied. |
| Boolean | removeExisting | When true, removes existing conditions. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Converts bullets and numbering into text.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the Text relative to any objects already selected. (Optional) |

> String **toSource**()
>
> Creates a string that can be executed to return the Text.
> Text **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Allowed values include: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Allowed values include: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
