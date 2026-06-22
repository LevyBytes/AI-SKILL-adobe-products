# Paragraph (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Assigns the chosen value to an Nth design axis on a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Position number for the design axis. |
| Number | nthAxisValue | Value assigned to the Nth design axis. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the variable font's Nth design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Position number for the design axis. |

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for the selected text using the supplied property values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text displayed in the preview. |
| Number | pointSize | Font size for the text, measured in points. |
| ColorSpace | space | Color model to use: RGB, CMYK, or LAB. |
| Number | colorValue | Color component values. |
| File | to | Destination path for the exported file. |

> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
>
> Reports whether local formatting overrides are present on the text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style category inspected by the call. |
| Boolean | charStyleAsOverride | Controls whether character styles count as overrides. (Optional) |

> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
>
> Builds a thumbnail from the selected text, including its applied style and local overrides, with the supplied property values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text displayed in the preview. |
| Number | pointSize | Font size for the text, measured in points. |
| ColorSpace | space | Color model to use: RGB, CMYK, or LAB. |
| Number | colorValue | Color component values. |
| File | to | Destination path for the exported file. |
| StyleType | charOrParaStyle | Applied style category used for the thumbnail. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outline artwork. A polygon object is created for each text line. If the converted text consists of one letter without interior gaps or separate pieces, that polygon has one path only. Note: check allow outlines to learn whether a font permits outline creation.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True removes the source text; false leaves the text in place and adds the outline object(s) above it. (Optional) |

> **autoTag**()
>
> Applies default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Connects the page item to the designated XML element without replacing current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element used for the association. |

> **remove**()
>
> Removes the Paragraph.
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
>
> Changes the text content into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Character that begins a new column in the generated table. (Optional) |
| String | rowSeparator | Character that begins a new row in the generated table. (Optional) |
| Number | numberOfColumns | Column count for the table. Note: valid only when identical characters are used for row and column separators. (Optional) |

> **changecase**( ChangecaseMode **using** )
>
> Changes the capitalization mode for the text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Case-conversion choice for the text. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the selected override categories.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override categories to remove. (Optional) |

> **recompose**()
>
> Runs composition again for the text in the Paragraph.
> **showText**()
>
> Navigates to the text range.
> **applyParagraphStyle**( ParagraphStyle **using**, Boolean **clearingOverrides** )
>
> Applies the chosen paragraph style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | using | Paragraph style used by the operation. |
| Boolean | clearingOverrides | When true, existing text attributes are removed before the style is applied. (Optional) |

> **applyCharacterStyle**( CharacterStyle **using** )
>
> Applies the chosen character style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | using | Character style used by the operation. |

> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Copies the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object, or inside the containing object. |
| Mixed | reference | Object used as the location reference. Note: use it when the to parameter is before or after. Accepts: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Transfers the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object, or inside the containing object. |
| Mixed | reference | Object used as the location reference. Note: use it when the to parameter is before or after. Accepts: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches for text that satisfies the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Searches for text satisfying the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value, then substitutes the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the order of returned matches. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the file into the layout.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File selected for placement. |
| Boolean | showingOptions | Controls display of the import options dialog. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> Note **convertToNote**()
>
> Changes the text into a note.
> HyperlinkTextSource **findHyperlinks**( RangeSortOrder **sortOrder** )
>
> Locates hyperlink sources that overlap the specified text range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RangeSortOrder | sortOrder | Ordering applied to the located ranges. (Optional) |

> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code containing Plain Text content to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializers for the new Paragraph; object-property form can carry the same inputs. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializers for the new Paragraph; object-property form can carry the same inputs. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number encoded for the Text QR code. (Optional) |
| String | textMessage | Message body encoded for the Text QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializers for the new Paragraph; object-property form can carry the same inputs. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializers for the new Paragraph; object-property form can carry the same inputs. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item, or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First Name field for the Business Card QR code. (Optional) |
| String | lastName | Last Name field for the Business Card QR code. (Optional) |
| String | jobTitle | Title field for the Business Card QR code. (Optional) |
| String | cellPhone | Cell Phone Number field for the Business Card QR code. (Optional) |
| String | phone | Phone Number field for the Business Card QR code. (Optional) |
| String | email | Email Address field for the Business Card QR code. (Optional) |
| String | organisation | Organisation field for the Business Card QR code. (Optional) |
| String | streetAddress | Street Address field for the Business Card QR code. (Optional) |
| String | city | City field for the Business Card QR code. (Optional) |
| String | adrState | State field for the Business Card QR code. (Optional) |
| String | country | Country field for the Business Card QR code. (Optional) |
| String | postalCode | Postal Code field for the Business Card QR code. (Optional) |
| String | website | URL field for the Business Card QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializers for the new Paragraph; object-property form can carry the same inputs. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension shown by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | True opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style applied to the operation. (Optional) |
| String | versionComments | Comment stored with this version. (Optional) |
| Boolean | forceSave | Forces a saved version when true. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension shown by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | True opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style applied to the operation. (Optional) |
| String | versionComments | Comment stored with this version. (Optional) |
| Boolean | forceSave | Forces a saved version when true. (Optional) |

> **applyConditions**( Condition **using**, Boolean **removeExisting** )
>
> Applies one or more conditions.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | using | Condition or conditions applied by the call. |
| Boolean | removeExisting | True clears currently assigned conditions first. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Changes bullets and numbering into regular text.
> **select**( SelectionOptions **existingSelection** )
>
> Makes the object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How the Paragraph selection relates to objects already selected. (Optional) |

> String **toSource**()
>
> Produces a string that can be executed to return the Paragraph.
> Paragraph **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
