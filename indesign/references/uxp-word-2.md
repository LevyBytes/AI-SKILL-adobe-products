# Word (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the Nth design axis for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |
| Number | nthAxisValue | Value assigned to the nth design axis. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the variable font's Nth design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for selected text from the supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text to display. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color component values. |
| File | to | Destination path for the exported file. |

> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
>
> Returns true when the text includes local overrides.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style type to inspect. |
| Boolean | charStyleAsOverride | Whether character styles should count as overrides. (Optional) |

> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
>
> Builds a thumbnail for selected text from the applied style, overrides, and supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text to display. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color component values. |
| File | to | Destination path for the exported file. |
| StyleType | charOrParaStyle | Applied style type to use. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. Each text line becomes a polygon object. When converted text is a single letter with no internal spaces or detached parts, that polygon contains only one path. Note: check allow outlines to determine whether a font permits outline creation.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True deletes the source text; false creates separate outline object(s) above the text. (Optional) |

> **autoTag**()
>
> Applies default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Connects the page item to the specified XML element while keeping current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> **remove**()
>
> Removes the Word.
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
>
> Changes the text into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Character that begins a new column in the created table. (Optional) |
| String | rowSeparator | Character that begins a new row in the created table. (Optional) |
| Number | numberOfColumns | Column count for the table. Note: valid only when the column and row separator characters match. (Optional) |

> **changecase**( ChangecaseMode **using** )
>
> Changes the text case.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Text case option. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the selected override types.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override types to remove. (Optional) |

> **recompose**()
>
> Runs composition again for the Word text.
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
| Boolean | clearingOverrides | True clears text attributes before the style is applied. (Optional) |

> **applyCharacterStyle**( CharacterStyle **using** )
>
> Applies a character style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | using | Character style to apply. |

> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Copies the text to the specified location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location evaluated relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: required when the to parameter specifies before or after. Accepts: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the text to the specified location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location evaluated relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: required when the to parameter specifies before or after. Accepts: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces matches with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces matches with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value, then replaces matches with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value, then replaces matches with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When enabled, reports matches from end to start. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the file into place.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File selected for placement. |
| Boolean | showingOptions | Whether to display the import options dialog. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> Note **convertToNote**()
>
> Turns the text into a note.
> HyperlinkTextSource **findHyperlinks**( RangeSortOrder **sortOrder** )
>
> Returns hyperlink sources that intersect the specified text range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RangeSortOrder | sortOrder | Ordering applied to the found ranges. (Optional) |

> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain text embedded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property values for the new Word. You may supply the same parameters through properties as well. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property values for the new Word. You may supply the same parameters through properties as well. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number for the Text Msg QR code. (Optional) |
| String | textMessage | Message text for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property values for the new Word. You may supply the same parameters through properties as well. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property values for the new Word. You may supply the same parameters through properties as well. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to the page item or loads it on the document's placegun.

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
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property values for the new Word. You may supply the same parameters through properties as well. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> **applyConditions**( Condition **using**, Boolean **removeExisting** )
>
> Applies one or more conditions.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | using | Condition or conditions to apply. |
| Boolean | removeExisting | True removes existing conditions. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Converts bullets and numbering into text.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the Word relative to objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that can be executed to return the Word.
> Word **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets this object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
