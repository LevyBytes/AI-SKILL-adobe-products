# Text Style Range (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Update a variable font's Nth design axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Nth design-axis value. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when a variable font's Nth design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Build a thumbnail from the selected text using the supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text to render. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color component values. |
| File | to | Export file path. |

> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
>
> Returns true when the text contains local overrides.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style category to inspect. |
| Boolean | charStyleAsOverride | When enabled, character styles are treated as overrides. (Optional) |

> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
>
> Build a thumbnail for selected text from its applied style, overrides, and supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text to render. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color component values. |
| File | to | Export file path. |
| StyleType | charOrParaStyle | Applied style type to use. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outlines. The conversion makes each text line into a polygon object. If the converted text consists of one letter with no internal spaces and no detached parts, the polygon has just one path. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, creates separate outline object(s) above the text. (Optional) |

> **autoTag**()
>
> Applies default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Connects the page item to the specified XML element without discarding existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> **remove**()
>
> Removes the TextStyleRange.
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
>
> Changes the text into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Character that marks a new column in the generated table. (Optional) |
| String | rowSeparator | Character that marks a new row in the generated table. (Optional) |
| Number | numberOfColumns | Column count for the table. Note: Applies only when the column and row separator characters are identical. (Optional) |

> **changecase**( ChangecaseMode **using** )
>
> Changes the text case.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Desired text case option. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the requested override types.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override types to remove. (Optional) |

> **recompose**()
>
> Recomposes the text contained in the TextStyleRange.
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
| Boolean | clearingOverrides | When true, clears text attributes before the style is applied. (Optional) |

> **applyCharacterStyle**( CharacterStyle **using** )
>
> Applies a character style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | using | Character style to apply. |

> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Copies the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object; required for before/after placement. Accepted values: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object; required for before/after placement. Accepted values: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value, then replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Adds the file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Controls whether the import options dialog appears. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> Note **convertToNote**()
>
> Changes the text into a note.
> HyperlinkTextSource **findHyperlinks**( RangeSortOrder **sortOrder** )
>
> Locates hyperlink sources that intersect the specified text range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RangeSortOrder | sortOrder | Ordering to use for found ranges. (Optional) |

> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item, creates a Plain Text QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property defaults for the new TextStyleRange; these inputs may also be provided through the properties object. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item or document, creates a Hyperlink QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property defaults for the new TextStyleRange; these inputs may also be provided through the properties object. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item or document, creates a Text Msg QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number for the QR code. (Optional) |
| String | textMessage | Text Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property defaults for the new TextStyleRange; these inputs may also be provided through the properties object. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item or document, creates an Email QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address for the QR code. (Optional) |
| String | subject | Email Subject for the QR code. (Optional) |
| String | body | Email Body Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property defaults for the new TextStyleRange; these inputs may also be provided through the properties object. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it onto the document's placegun.

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
| String | withProperties | Property defaults for the new TextStyleRange; these inputs may also be provided through the properties object. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given either as an enumeration value or as an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given either as an enumeration value or as an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> **applyConditions**( Condition **using**, Boolean **removeExisting** )
>
> Applies one or more conditions.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | using | Condition(s) to apply. |
| Boolean | removeExisting | When true, removes existing conditions. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Turns bullets and numbering into editable text.
> **select**( SelectionOptions **existingSelection** )
>
> Makes the object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the TextStyleRange relative to objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that can be executed to return the TextStyleRange.
> TextStyleRange **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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
> Unregisters an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
