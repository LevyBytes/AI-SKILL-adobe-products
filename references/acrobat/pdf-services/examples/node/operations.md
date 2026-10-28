# PDF Services operations: Node.js

Open when choosing the job, parameter and result classes for a PDF Services operation in Node.js. Use them in the shared [call pattern](call-pattern.cjs); each example's setup page links Adobe's complete sample.

Every class imports from `@adobe/pdfservices-node-sdk`.

| Example | Job | Parameters and options | Result | Result read |
| --- | --- | --- | --- | --- |
| [autotag-pdf](autotag-pdf/autotag-pdf-setup.md) | `AutotagPDFJob` |  | `AutotagPDFResult` | `taggedPDF` |
| [autotag-pdf-parameterised](autotag-pdf-parameterised/autotag-pdf-parameterised-setup.md) | `AutotagPDFJob` | `AutotagPDFParams` | `AutotagPDFResult` | `report`, `taggedPDF` |
| [combine-pdf](combine-pdf/combine-pdf-setup.md) | `CombinePDFJob` | `CombinePDFParams` | `CombinePDFResult` | `asset` |
| [combine-pdf-with-page-ranges](combine-pdf-with-page-ranges/combine-pdf-with-page-ranges-setup.md) | `CombinePDFJob` | `CombinePDFParams`, `PageRanges` | `CombinePDFResult` | `asset` |
| [compress-pdf](compress-pdf/compress-pdf-setup.md) | `CompressPDFJob` |  | `CompressPDFResult` | `asset` |
| [compress-pdf-with-options](compress-pdf-with-options/compress-pdf-with-options-setup.md) | `CompressPDFJob` | `CompressPDFParams`, `CompressionLevel` | `CompressPDFResult` | `asset` |
| [create-pdf-from-docx](create-pdf-from-docx/create-pdf-from-docx-setup.md) | `CreatePDFJob` |  | `CreatePDFResult` | `asset` |
| [create-pdf-from-docx-with-options](create-pdf-from-docx-with-options/create-pdf-from-docx-with-options-setup.md) | `CreatePDFJob` | `CreatePDFParams`, `DocumentLanguage` | `CreatePDFResult` | `asset` |
| [delete-pdf-pages](delete-pdf-pages/delete-pdf-pages-setup.md) | `DeletePagesJob` | `DeletePagesParams`, `PageRanges` | `DeletePagesResult` | `asset` |
| [dynamic-html-to-pdf](dynamic-html-to-pdf/dynamic-html-to-pdf-setup.md) | `HTMLToPDFJob` | `HTMLToPDFParams`, `PageLayout` | `HTMLToPDFResult` | `asset` |
| [electronic-seal](electronic-seal/electronic-seal-setup.md) | `PDFElectronicSealJob` | `CSCAuthContext`, `CSCCredential`, `DocumentLevelPermission`, `FieldLocation`, `FieldOptions`, `PDFElectronicSealParams` | `PDFElectronicSealResult` | `asset` |
| [electronic-seal-with-appearance-options](electronic-seal-with-appearance-options/electronic-seal-with-appearance-options-setup.md) | `PDFElectronicSealJob` | `AppearanceItem`, `AppearanceOptions`, `CSCAuthContext`, `CSCCredential`, `DocumentLevelPermission`, `FieldLocation`, `FieldOptions`, `PDFElectronicSealParams` | `PDFElectronicSealResult` | `asset` |
| [electronic-seal-with-stamp-authority](electronic-seal-with-stamp-authority/electronic-seal-with-stamp-authority-setup.md) | `PDFElectronicSealJob` | `CSCAuthContext`, `CSCCredential`, `DocumentLevelPermission`, `FieldLocation`, `FieldOptions`, `PDFElectronicSealParams`, `RFC3161TSAOptions`, `TSABasicAuthCredentials` | `PDFElectronicSealResult` | `asset` |
| [export-brochure-docx](export-brochure-docx/export-brochure-docx-setup.md) | `ExportPDFJob` | `ExportPDFParams`, `ExportPDFTargetFormat` | `ExportPDFResult` | `asset` |
| [extract-figure-table-renditions](extract-figure-table-renditions/extract-renditions-setup.md) | `ExtractPDFJob` | `ExtractElementType`, `ExtractPDFParams`, `ExtractRenditionsElementType` | `ExtractPDFResult` | `resource` |
| [extract-table-renditions](extract-table-renditions/extract-text-table-info-with-tables-renditions-from-pdf-setup.md) | `ExtractPDFJob` | `ExtractElementType`, `ExtractPDFParams`, `ExtractRenditionsElementType` | `ExtractPDFResult` | `resource` |
| [extract-table-structure](extract-table-structure/extract-text-table-info-with-tables-structure-from-pdf-setup.md) | `ExtractPDFJob` | `ExtractElementType`, `ExtractPDFParams`, `ExtractRenditionsElementType`, `TableStructureType` | `ExtractPDFResult` | `resource` |
| [extract-text-info-from-pdf](extract-text-info-from-pdf/extract-text-info-from-pdf-setup.md) | `ExtractPDFJob` | `ExtractElementType`, `ExtractPDFParams` | `ExtractPDFResult` | `resource` |
| [extract-text-table-info-from-pdf](extract-text-table-info-from-pdf/extract-text-table-info-from-pdf-setup.md) | `ExtractPDFJob` | `ExtractElementType`, `ExtractPDFParams` | `ExtractPDFResult` | `resource` |
| [extract-text-table-info-with-char-bounds-from-pdf](extract-text-table-info-with-char-bounds-from-pdf/extract-text-table-info-with-char-bounds-from-pdf-setup.md) | `ExtractPDFJob` | `ExtractElementType`, `ExtractPDFParams` | `ExtractPDFResult` | `resource` |
| [extract-text-table-info-with-styling-info-from-pdf](extract-text-table-info-with-styling-info-from-pdf/extract-text-table-info-with-styling-info-from-pdf-setup.md) | `ExtractPDFJob` | `ExtractElementType`, `ExtractPDFParams` | `ExtractPDFResult` | `resource` |
| [get-pdf-properties](get-pdf-properties/get-pdf-properties-setup.md) | `PDFPropertiesJob` | `PDFPropertiesParams` | `PDFPropertiesResult` | `pdfProperties` |
| [html-to-pdf-from-url](html-to-pdf-from-url/html-to-pdf-from-url-setup.md) | `HTMLToPDFJob` | `HTMLToPDFParams`, `PageLayout` | `HTMLToPDFResult` | `asset` |
| [html-with-inline-css-to-pdf](html-with-inline-css-to-pdf/html-with-inline-css-to-pdf-setup.md) | `HTMLToPDFJob` | `HTMLToPDFParams`, `PageLayout` | `HTMLToPDFResult` | `asset` |
| [insert-pdf-pages](insert-pdf-pages/insert-pdf-pages-setup.md) | `InsertPagesJob` | `InsertPagesParams`, `PageRanges` | `InsertPagesResult` | `asset` |
| [linearize-pdf](linearize-pdf/linearize-pdf-setup.md) | `LinearizePDFJob` |  | `LinearizePDFResult` | `asset` |
| [merge-customer-data](merge-customer-data/merge-customer-data-setup.md) | `DocumentMergeJob` | `DocumentMergeParams`, `OutputFormat` | `DocumentMergeResult` | `asset` |
| [merge-customer-fragments](merge-customer-fragments/merge-customer-fragments-setup.md) | `DocumentMergeJob` | `DocumentMergeParams`, `OutputFormat` | `DocumentMergeResult` | `asset` |
| [merge-document-to-docx-fragments](merge-document-to-docx-fragments/merge-document-to-docx-fragments-setup.md) | `DocumentMergeJob` | `DocumentMergeParams`, `OutputFormat` | `DocumentMergeResult` | `asset` |
| [merge-document-to-pdf](merge-document-to-pdf/merge-document-to-pdf-setup.md) | `DocumentMergeJob` | `DocumentMergeParams`, `OutputFormat` | `DocumentMergeResult` | `asset` |
| [ocr-pdf](ocr-pdf/ocr-pdf-setup.md) | `OCRJob` |  | `OCRResult` | `asset` |
| [ocr-pdf-with-options](ocr-pdf-with-options/ocr-pdf-with-options-setup.md) | `OCRJob` | `OCRParams`, `OCRSupportedLocale`, `OCRSupportedType` | `OCRResult` | `asset` |
| [pdf-watermark](pdf-watermark/pdf-watermark-setup.md) | `PDFWatermarkJob` |  | `PDFWatermarkResult` | `asset` |
| [pdf-watermark-with-options](pdf-watermark-with-options/pdf-watermark-with-options-setup.md) | `PDFWatermarkJob` | `PDFWatermarkParams`, `PageRanges`, `WatermarkAppearance` | `PDFWatermarkResult` | `asset` |
| [protect-pdf](protect-pdf/protect-pdf-setup.md) | `ProtectPDFJob` | `EncryptionAlgorithm`, `ProtectPDFParams` | `ProtectPDFResult` | `asset` |
| [protect-pdf-with-owner-password](protect-pdf-with-owner-password/protect-pdf-with-owner-password-setup.md) | `ProtectPDFJob` | `ContentEncryption`, `EncryptionAlgorithm`, `Permission`, `Permissions`, `ProtectPDFParams` | `ProtectPDFResult` | `asset` |
| [remove-protection](remove-protection/remove-protection-setup.md) | `RemoveProtectionJob` | `RemoveProtectionParams` | `RemoveProtectionResult` | `asset` |
| [reorder-pdf-pages](reorder-pdf-pages/reorder-pdf-pages-setup.md) | `ReorderPagesJob` | `PageRanges`, `ReorderPagesParams` | `ReorderPagesResult` | `asset` |
| [replace-pdf-pages](replace-pdf-pages/replace-pdf-pages-setup.md) | `ReplacePagesJob` | `PageRanges`, `ReplacePagesParams` | `InsertPagesResult` | `asset` |
| [rotate-pdf-pages](rotate-pdf-pages/rotate-pdf-pages-setup.md) | `RotatePagesJob` | `Angle`, `PageRanges`, `RotatePagesParams` | `RotatePagesResult` | `asset` |
| [split-pdf-by-number-of-pages](split-pdf-by-number-of-pages/split-pdf-by-number-of-pages-setup.md) | `SplitPDFJob` | `SplitPDFParams` | `SplitPDFResult` | `assets` |
| [split-pdf-by-page-ranges](split-pdf-by-page-ranges/split-pdf-by-page-ranges-setup.md) | `SplitPDFJob` | `PageRanges`, `SplitPDFParams` | `SplitPDFResult` | `assets` |
| [split-pdf-into-number-of-files](split-pdf-into-number-of-files/split-pdf-into-number-of-files-setup.md) | `SplitPDFJob` | `SplitPDFParams` | `SplitPDFResult` | `assets` |
| [static-html-to-pdf](static-html-to-pdf/static-html-to-pdf-setup.md) | `HTMLToPDFJob` | `HTMLToPDFParams`, `PageLayout` | `HTMLToPDFResult` | `asset` |
| [watermark-selected-ranges](watermark-selected-ranges/watermark-selected-ranges-setup.md) | `PDFWatermarkJob` | `PDFWatermarkParams`, `PageRanges`, `WatermarkAppearance` | `PDFWatermarkResult` | `asset` |
