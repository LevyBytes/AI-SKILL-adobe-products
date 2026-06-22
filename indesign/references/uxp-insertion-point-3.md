# Insertion Point (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> Endnote **createEndnote**()
>
> Adds an endnote, building both its reference marker and endnote text range internally.
> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the variable font's Nth design axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Nth design-axis value. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Indicates whether the variable font's Nth design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> Link **createTextFragmentLink**( String **linkResourceURI**, String **name** )
>
> Experimental: fetches text fragment content from url, places it at the insertion point, and links it.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | linkResourceURI | URI used for the link resource. |
| String | name | Key tag name. (Optional) |

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for the selected text using the supplied settings.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text content. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color values. |
| File | to | Export file path. |

> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
>
> Reports whether local overrides exist on the text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style type to inspect. |
| Boolean | charStyleAsOverride | Determines whether character styles count as overrides. (Optional) |

> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
>
> Makes a thumbnail for selected text from its applied style, overrides, and supplied settings.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text content. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color values. |
| File | to | Export file path. |
| StyleType | charOrParaStyle | Applied style type to use. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. Every text line becomes a polygon object. If the converted text is one letter without interior spaces or detached pieces, that polygon has a single path only. Note: use allow outlines to check whether outlines can be created for a font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text; when false, leaves the text in place and puts separate outline object(s) above it. (Optional) |

> **autoTag**()
>
> Applies default XML preference tags to the object or to its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without replacing the current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> **remove**()
>
> Deletes this InsertionPoint.
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
>
> Changes the text into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Character that opens a new column in the created table. (Optional) |
| String | rowSeparator | Character that opens a new row in the created table. (Optional) |
| Number | numberOfColumns | Column count for the table. Note: only applies when column and row separator characters match. (Optional) |

> **changecase**( ChangecaseMode **using** )
>
> Changes the text case.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Text case setting. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the selected override categories.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override categories to remove. (Optional) |

> **recompose**()
>
> Reflows the text at this InsertionPoint.
> **showText**()
>
> Moves the view to the text range.
> **applyParagraphStyle**( ParagraphStyle **using**, Boolean **clearingOverrides** )
>
> Applies a paragraph style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | using | Paragraph style to apply. |
| Boolean | clearingOverrides | When true, removes text attributes before applying the style. (Optional) |

> **applyCharacterStyle**( CharacterStyle **using** )
>
> Applies a character style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | using | Character style to apply. |

> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Copies the text into the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: required when the to parameter is before or after. Accepts Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: required when the to parameter is before or after. Accepts Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Finds text matching the find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Finds text that matches find what and substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Finds GREP text matching the find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Finds GREP text matching find what and substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching the find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs that match find what and substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching find character type and substitutes the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches from last to first. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed. |
| Boolean | showingOptions | Controls whether the import options dialog appears. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> Note **convertToNote**()
>
> Changes the text into a note.
> HyperlinkTextSource **findHyperlinks**( RangeSortOrder **sortOrder** )
>
> Finds hyperlink sources intersecting the specified text range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RangeSortOrder | sortOrder | Sort order applied to the found ranges. (Optional) |

> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code with Plain Text data to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text payload for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic; accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new InsertionPoint; the same parameters may be supplied through withProperties. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Hyperlink QR Code on a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL payload for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic; accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new InsertionPoint; the same parameters may be supplied through withProperties. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Text Msg QR Code on a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number payload for the QR code. (Optional) |
| String | textMessage | Text Message payload for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic; accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new InsertionPoint; the same parameters may be supplied through withProperties. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates an Email QR Code on a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address payload for the QR code. (Optional) |
| String | subject | Email Subject payload for the QR code. (Optional) |
| String | body | Email Body Message payload for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic; accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new InsertionPoint; the same parameters may be supplied through withProperties. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name payload for the QR code. (Optional) |
| String | lastName | Business Card Last Name payload for the QR code. (Optional) |
| String | jobTitle | Business Card Title payload for the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number payload for the QR code. (Optional) |
| String | phone | Business Card Phone Number payload for the QR code. (Optional) |
| String | email | Business Card Email Address payload for the QR code. (Optional) |
| String | organisation | Business Card Organisation payload for the QR code. (Optional) |
| String | streetAddress | Business Card Street Address payload for the QR code. (Optional) |
| String | city | Business Card City payload for the QR code. (Optional) |
| String | adrState | Business Card State payload for the QR code. (Optional) |
| String | country | Business Card Country payload for the QR code. (Optional) |
| String | postalCode | Business Card Postal Code payload for the QR code. (Optional) |
| String | website | Business Card URL payload for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic; accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new InsertionPoint; the same parameters may be supplied through withProperties. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format. Use an enumeration value or an extension shown by the Export dialog's Save as type or Format menu. Accepts ExportFormat enumerator or String. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file as a background task.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format. Use an enumeration value or an extension shown by the Export dialog's Save as type or Format menu. Accepts ExportFormat enumerator or String. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **applyConditions**( Condition **using**, Boolean **removeExisting** )
>
> Applies one or more conditions.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | using | Condition(s) to apply. |
| Boolean | removeExisting | When true, removes current conditions. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Changes bullets and numbering into text.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the InsertionPoint relative to objects already selected. (Optional) |

> String **toSource**()
>
> Produces a string that returns the InsertionPoint when executed.
> InsertionPoint **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
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
