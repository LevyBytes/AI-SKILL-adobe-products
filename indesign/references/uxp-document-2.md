# Document (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Document — Instance

### Methods

> Font **createMissingFontObject**( String **fontFamily**, String **fontStyleName**, String **postscriptName** )
>
> Creates an object representing a missing font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | fontFamily | Font family name. |
| String | fontStyleName | Font style name. |
| String | postscriptName | Font PostScript name. |

> Mixed **getStyleConflictResolutionStrategy**( StyleType **charOrParaStyle** )
>
> Retrieves the style conflict resolution strategy; returns false when the user cancels.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style type to inspect. (Optional) |

> Boolean **exportForCloudLibrary**( String **jsondata** )
>
> Exports the assets needed by a cloud library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | jsondata | JSON encoded details for the export. |

> TextDirection **getSelectedTextDirection**()
>
> Text direction for the selection.
> Boolean **packageForPrint**( File **to**, Boolean **copyingFonts**, Boolean **copyingLinkedGraphics**, Boolean **copyingProfiles**, Boolean **updatingGraphics**, Boolean **includingHiddenLayers**, Boolean **ignorePreflightErrors**, Boolean **creatingReport**, Boolean **includeIdml**, Boolean **includePdf**, String **pdfStyle**, Boolean **useDocumentHyphenationExceptionsOnly**, String **versionComments**, Boolean **forceSave** )
>
> Creates a print package for the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Folder, alias, or path where packaged files are placed. |
| Boolean | copyingFonts | When true, fonts used in the document are copied into the package folder. |
| Boolean | copyingLinkedGraphics | When true, linked graphics files are copied into the package folder. |
| Boolean | copyingProfiles | When true, color profiles are copied into the package folder. |
| Boolean | updatingGraphics | When true, graphic links are updated to point at the package folder. |
| Boolean | includingHiddenLayers | When true, fonts and links from hidden layers are copied into the package. |
| Boolean | ignorePreflightErrors | When true, preflight errors are ignored and packaging continues. When false, existing errors cancel packaging. |
| Boolean | creatingReport | When true, a package report is created with printing instructions, print settings, font lists, links, required inks, and other details. |
| Boolean | includeIdml | When true, IDML is generated and added to the package folder. (Optional) |
| Boolean | includePdf | When true, PDF is generated and added to the package folder. (Optional) |
| String | pdfStyle | If PDF output is included and a valid style is supplied, that style is used; otherwise the last used PDF preset is used. (Optional) |
| Boolean | useDocumentHyphenationExceptionsOnly | Selecting this option flags the InDesign document so it avoids reflow when opened or edited on another computer with different hyphenation and dictionary settings. (Optional) |
| String | versionComments | Comments attached to the version. (Optional) |
| Boolean | forceSave | When true, a version is forcibly saved. (Optional) |

> PreflightProfile **embed**( Mixed **using** )
>
> Embeds this profile into the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Profile to embed; accepted inputs are String or PreflightProfile. |

> **adjustLayout**( Object **adoptTo**, Page **affectedPages** )
>
> Changes the existing layout for new page size, bleed, and margin values. The first argument is a plain object whose key/value pairs identify affected properties. Allowed keys are width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal numbers in Pt units or strings that carry measurement values such as '1 in'. Only properties that require updates need to be supplied. When individual pages are handled instead of the whole document, bleed changes do not apply. E.g. - app.activeDocument.adjustLayout(\{width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout(\{rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout(\{width:'400px', leftMargin: '10px'})

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | adoptTo | Object containing the change values; details are in the function definition. |
| Page | affectedPages | Page collection to modify (optional). Calling this function from Page makes this argument ineffective. (Optional) |

> Mixed **getAlternateLayoutsForFolio**( Boolean **resolveMaster** )
>
> Returns an array of structs with details about alternate layouts.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | resolveMaster | Resolves the layout policy when the setting is "use master"; default is true. (Optional) |

> **mapStylesToXMLTags**()
>
> Automatically tags the document using the style-to-tag mappings.
> **mapXMLTagsToStyles**()
>
> Automatically applies styles to the document using tag-to-style mappings.
> **importDtd**( File **from** )
>
> Imports a DTD for validation use.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | DTD file path. |

> **importXML**( File **from** )
>
> Imports XML from the provided file into an InDesign document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | XML file. |

> **deleteUnusedTags**()
>
> Removes XML markup tags that are not in use.
> **loadXMLTags**( File **from** )
>
> Reads XML markup tags from the selected file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File path for the stored tags. |

> **saveXMLTags**( File **to**, String **versionComments**, Boolean **forceSave** )
>
> Saves the tag set to an external file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Full path to the file where the tags are saved. |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | Force a version save. (Optional) |

> **changeComposer**()
>
> Changes the composer to optyca.
> **revertToProject**( Boolean **forceRevert** )
>
> Reverts the document to its Version Cue version.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | forceRevert | Force a revert back to the project version. (Optional) |

> VersionCueSyncStatus **synchronizeWithVersionCue**( SyncConflictResolution **syncConflictResolution**, String **versionComments** )
>
> Syncs the file against the Version Cue project.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SyncConflictResolution | syncConflictResolution | Conflict resolution method used during synchronization. (Optional) |
| String | versionComments | Comments describing the version. (Optional) |

> **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Checks in to Version Cue.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | Force a version save. (Optional) |

> Story **createTOC**( TOCStyle **using**, Boolean **replacing**, Book **fromBook**, Measurement Unit (Number or String)=any **placePoint**, Boolean **includeOverset**, Layer **destinationLayer** )
>
> Builds a table of contents.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TOCStyle | using | TOC style used to define the table of contents content, title, and format. |
| Boolean | replacing | When true, the existing TOC is replaced. (Optional) |
| Book | fromBook | Book whose documents are included in the TOC. (Optional) |
| Measurement Unit (Number or String)=any | placePoint | Point for placing the TOC story, expressed as page coordinates in the format [x, y]. (Optional) |
| Boolean | includeOverset | When true, overset text TOC entries are included in the TOC. (Optional) |
| Layer | destinationLayer | Layer where the TOC is placed. (Optional) |

> **importStyles**( ImportFormat **format**, File **from**, GlobalClashResolutionStrategy **globalStrategy** )
>
> Brings in the specified styles.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ImportFormat | format | Style types to import. |
| File | from | File containing the styles to import. |
| GlobalClashResolutionStrategy | globalStrategy | Resolution strategy for imported styles whose names match existing styles. (Optional) |

> **recompose**()
>
> Runs recomposition for Document text.
> **exportStrokeStyles**( File **to**, StrokeStyle **strokeStyleList**, String **versionComments**, Boolean **forceSave** )
>
> Writes stroke styles or presets out.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | File where the data is saved. |
| StrokeStyle | strokeStyleList | Stroke styles list to save. |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | Force a version save. (Optional) |

> Number **findColor**()
>
> Locates color entries that match the find what value.
> Number **changeColor**()
>
> Locates color entries matching the find what value, then applies the change to value.
> Text **findText**( Boolean **reverseOrder** )
>
> Searches text for the current find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then applies the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches text for the current find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then applies the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches glyphs for the current find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value, then applies the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Searches objects for the current find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value, then applies the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches text for the current find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value, then applies the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results are returned in reverse order. (Optional) |

> **placeAndLink**( Story **parentStory**, Boolean **showingOptions** )
>
> Deprecated: call ContentPlacerObject load method instead. Original Description: Uses place and link story menu item behavior, then loads the place gun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | parentStory | Story used as the source for place and link. |
| Boolean | showingOptions | Whether to display the link options dialog. (Optional) |

> **print**( Boolean **printDialog**, Mixed **using** )
>
> Sends the Document(s) to print.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | printDialog | Controls whether the print dialog is invoked. (Optional) |
| Mixed | using | Printer preset selection; accepted values are PrinterPresetTypes enumerator or PrinterPreset. (Optional) |

> **printBooklet**( Boolean **printBookletDialog**, Mixed **using** )
>
> Prints the Booklet using the current document plus the document's Booklet and Print settings.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | printBookletDialog | Controls whether the print booklet dialog is invoked. (Optional) |
| Mixed | using | Printer preset selection; accepted values are PrinterPresetTypes enumerator or PrinterPreset. (Optional) |

> **importPdfComments**( File **from**, Object **withProperties** )
>
> Imports comments from PDF.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | PDF File whose comments are imported. |
| Object | withProperties | Initial property values for the new Document. (Optional) |

> **placeCloudAsset**( String **jsondata** )
>
> Adds a cloud asset to the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | jsondata | Metadata JSON for the cloud asset. |

> **place**( Mixed **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Follows the place menu item behavior to place one or more files. Current preferences decide whether the place gun is loaded or the selected object is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | fileName | Files to place; File or Array of Files are accepted. |
| Boolean | showingOptions | Controls whether the import options dialog is displayed. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> **loadMasters**( File **from**, GlobalClashResolutionStrategyForMasterPage **globalStrategyForMasterPage** )
>
> Loads masterpages from an InDesign file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | InDesign file from which masters are loaded. |
| GlobalClashResolutionStrategyForMasterPage | globalStrategyForMasterPage | Global clash resolution strategy used when loading master pages. (Optional) |

> **createAlternateLayout**( Spread **spreadItems**, String **name**, Measurement Unit (Number or String)=any **width**, Measurement Unit (Number or String)=any **height**, Boolean **createTextStyles**, Boolean **linkTextStories**, LayoutRuleOptions **layoutRule** )
>
> Builds an alternate layout from the supplied spreads list.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Spread | spreadItems | Spreads used to create the alternate layout. |
| String | name | Alternate layout name. Note: the duplicated spreads use this as the named layout for the new section. |
| Measurement Unit (Number or String)=any | width | Width for created pages. |
| Measurement Unit (Number or String)=any | height | Height for created pages. |
| Boolean | createTextStyles | Controls creation of new text styles. |
| Boolean | linkTextStories | Controls creation of linked text for duplicated text stories. |
| LayoutRuleOptions | layoutRule | Page layout rule to apply. |

> **deleteAlternateLayout**( String **name** )
>
> Removes an alternate layout.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Alternate layout name to remove. |

> **importFormats**( File **from** )
>
> Imports cross reference formats from the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File whose formats are imported. |

> **updateCrossReferences**()
>
> Refreshes the document text sources used by cross references.
> **align**( PageItem **alignDistributeItems**, AlignOptions **alignOption**, AlignDistributeBounds **alignDistributeBounds**, PageItem **reference** )
>
> Lines up page items.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | alignDistributeItems | Page items being aligned or distributed. |
| AlignOptions | alignOption | Alignment mode to use. |
| AlignDistributeBounds | alignDistributeBounds | Boundary area used for aligning or distributing page items. (Optional) |
| PageItem | reference | Reference or key object used as the relative target for alignment or distribution. Needed when 'key object' is the chosen 'align distribute bounds' value; supply this page item as the reference. (Optional) |

> **distribute**( PageItem **alignDistributeItems**, DistributeOptions **distributeOption**, AlignDistributeBounds **alignDistributeBounds**, Boolean **useDistributeMeasurement**, Measurement Unit (Number or String)=any **absoluteDistributeMeasurement**, PageItem **reference** )
>
> Spreads page items apart.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | alignDistributeItems | Page items being aligned or distributed. |
| DistributeOptions | distributeOption | Distribution mode to use. |
| AlignDistributeBounds | alignDistributeBounds | Boundary area used for aligning or distributing page items. (Optional) |
| Boolean | useDistributeMeasurement | When true, spaces page items apart; with this enabled, the bounds setting is disregarded. (Optional) |
| Measurement Unit (Number or String)=any | absoluteDistributeMeasurement | Distance value applied while distributing page items. Needed when 'key object' is the chosen 'align distribute bounds' value. (Optional) |
| PageItem | reference | Reference or key object used as the relative target for alignment or distribution. Needed when 'key object' is the chosen 'align distribute bounds' value; supply this page item as the reference. (Optional) |

> **clearFrameFittingOptions**()
>
> Clears frame fitting options and restores the original state.
> **resetAllMultiStateObjects**()
>
> Sends every multi-state object back to its first state.
> **resetAllButtons**()
>
> Returns every button to its Normal state.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Places a QR Code carrying Plain Text on the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Document; earlier parameter values may be included in this property set. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Places a QR Code carrying a Hyperlink on the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Document; earlier parameter values may be included in this property set. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Places a QR Code carrying a Text Msg on the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number encoded by the QR code. (Optional) |
| String | textMessage | Text Message encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Document; earlier parameter values may be included in this property set. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Places a QR Code carrying Email data on the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded by the QR code. (Optional) |
| String | subject | Email Subject encoded by the QR code. (Optional) |
| String | body | Email Body Message encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Document; earlier parameter values may be included in this property set. (Optional) |
