# Changes Across Versions - Acrobat 9.0 changes

On Mac OS, the user JavaScript folder moved. Locate it with `app.getPath("user", "javascript")` in the debugger console, then move user scripts there.

- `util.crackURL` parses IPv6 URLs and adds `nURLType` to its returned object.
- Field properties `display` and `hidden` no longer require forms rights in Reader.
- `app.loadPolicyFile` specifies a cross-domain policy file; `Doc.applyRedactions` applies redaction marks.
- `PrintParams.DuplexType` sets duplex mode and `PrintParams.NumCopies` sets the copy count; both were introduced in version 8 but undocumented. `printerName` gains Mac OS support; its empty-string printer-selection description changed.
- `Doc.nocache`, introduced in 7.0, becomes undefined and is removed from the documentation. Since 8.0, leaving a PDF browser page quickly exits Acrobat or Reader and discards temporary data; returning loses the form data.
- `info.Authors` accepts a semicolon-delimited list of authors.

## PDF portfolios

Acrobat 9.0 introduced these APIs for PDF portfolios, also called portable collections or PDF packages:

| Owner | API |
| --- | --- |
| [app](app.md) | Method: `newCollection`. |
| [Doc](doc-portfolio-collection.md) | Property: `collection`. |
| [Data](data.md) | Methods: `getFieldValue`, `setFieldValue`. |
| [Collection](collection.md) | Properties: `fields`, `initialDoc`, `initialView`; methods: `addField`, `getField`, `removeField`. |
| [collectionField](collection-field.md) | Properties: `name`, `order`, `readOnly`, `sort`, `text`, `type`. |

## Rich media in Acrobat 9.0

Acrobat 6.0 (and Later) Compatible Media uses an operating-system player. Acrobat 9.0 introduced native cross-platform playback of embedded or streamed FLV and SWF content without a separate player or codec. Its rich-media annotations superseded that older media model in the 9.0 release; use those annotations for multimedia assets targeting Acrobat 9.0.

| Owner | API |
| --- | --- |
| [Doc](doc-rich-media-annotations.md) | Methods: `getAnnotRichMedia`, `getAnnotsRichMedia`. |
| [AnnotRichMedia](annot-rich-media.md) | Properties: `activated`, `context3D`, `name`, `page`, `rect`, `subtype`; method: `callAS`. |
