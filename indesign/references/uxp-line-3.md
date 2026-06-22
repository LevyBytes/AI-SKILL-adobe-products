# Line (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Assigns the value for the specified Nth design axis in a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Nth design-axis value. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the variable font hides the Nth design axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for selected text from the supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text. |
| Number | pointSize | Text point size. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color value data. |
| File | to | Export-file path. |

> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
>
> Reports whether local overrides are present in the text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style type to inspect. |
| Boolean | charStyleAsOverride | Controls whether character styles count as overrides. (Optional) |

> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
>
> Creates a thumbnail for selected text from the applied style, overrides, and supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text. |
| Number | pointSize | Text point size. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color value data. |
| File | to | Export-file path. |
| StyleType | charOrParaStyle | Applied style type to use. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outline geometry. Each text line becomes a polygon object. For a single letter with no internal spaces or detached pieces, the resulting polygon has one path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the original text. When false, puts separate outline object(s) above the text. (Optional) |

> **autoTag**()
>
> Applies the default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Connects the page item to the specified XML element and keeps existing content intact.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> **remove**()
>
> Removes the Line.
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
>
> Changes the text into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Character used to start a new column in the new table. (Optional) |
| String | rowSeparator | Character used to begin a row in the new table. (Optional) |
| Number | numberOfColumns | Column count for the table. Note: Valid only when column and row separator characters match. (Optional) |

> **changecase**( ChangecaseMode **using** )
>
> Applies the requested case setting to the text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Text case option. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the requested override categories.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override categories to remove. (Optional) |

> **recompose**()
>
> Reflows the text in the Line.
> **showText**()
>
> Navigates to the text range.
> **applyParagraphStyle**( ParagraphStyle **using**, Boolean **clearingOverrides** )
>
> Applies a paragraph style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | using | Paragraph style to apply. |
| Boolean | clearingOverrides | When true, removes current text attributes before the style is applied. (Optional) |

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
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Object used as the reference. Note: Needed when the to parameter uses before or after. Accepts: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Object used as the reference. Note: Needed when the to parameter uses before or after. Accepts: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value, then substitutes the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches last-to-first. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Controls whether the import options dialog is shown. (Optional) |
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
| RangeSortOrder | sortOrder | Sort order for the found ranges. (Optional) |

> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Line. Property-form input is also allowed. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Line. Property-form input is also allowed. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number for the QR code. (Optional) |
| String | textMessage | Text Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Line. Property-form input is also allowed. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address for the QR code. (Optional) |
| String | subject | Email Subject for the QR code. (Optional) |
| String | body | Email Body Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Line. Property-form input is also allowed. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to the page item or loads it on the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name for the QR code. (Optional) |
| String | lastName | Business Card Last Name for the QR code. (Optional) |
| String | jobTitle | Business Card Title for the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number for the QR code. (Optional) |
| String | phone | Business Card Phone Number for the QR code. (Optional) |
| String | email | Business Card Email Address for the QR code. (Optional) |
| String | organisation | Business Card Organisation for the QR code. (Optional) |
| String | streetAddress | Business Card Street Address for the QR code. (Optional) |
| String | city | Business Card City for the QR code. (Optional) |
| String | adrState | Business Card State for the QR code. (Optional) |
| String | country | Business Card Country for the QR code. (Optional) |
| String | postalCode | Business Card Postal Code for the QR code. (Optional) |
| String | website | Business Card URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Line. Property-form input is also allowed. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension listed by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension listed by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **applyConditions**( Condition **using**, Boolean **removeExisting** )
>
> Applies one or more conditions.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | using | Condition(s) to apply. |
| Boolean | removeExisting | When true, clears existing conditions. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Changes bullets and numbering into text.
> **select**( SelectionOptions **existingSelection** )
>
> Makes the object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the Line relative to objects already selected. (Optional) |

> String **toSource**()
>
> Produces a string that, when run, returns the Line.
> Line **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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
