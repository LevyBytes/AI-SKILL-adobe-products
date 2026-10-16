# Document.packageForPrint

Community declaration reference: InDesign/2023.

Packages the document.
@param to Folder, alias, or path that receives the packaged files.
@param copyingFonts True copies document fonts into the package folder.
@param copyingLinkedGraphics True copies linked graphics files into the package folder.
@param copyingProfiles True copies color profiles into the package folder.
@param updatingGraphics True updates graphics links so they point into the package folder.
@param includingHiddenLayers True includes fonts and links from hidden layers in the package.
@param ignorePreflightErrors True skips preflight errors and continues packaging; false cancels packaging when errors are present.
@param creatingReport True creates a package report with printing instructions, print settings, font lists, link lists, required inks, and related details.
@param includeIdml True generates IDML and includes it in the package folder.
@param includePdf True generates PDF and includes it in the package folder.
@param pdfStyle When PDF inclusion is requested, a valid value here selects the PDF export style; otherwise the last used PDF preset is used.
@param useDocumentHyphenationExceptionsOnly When selected, InDesign flags this document so opening or editing it on another computer with different hyphenation and dictionary settings will not reflow it.
@param versionComments Comments saved with the version.
@param forceSave True forces a version save.

```typescript
declare class Document {
    packageForPrint(to: File, copyingFonts: boolean, copyingLinkedGraphics: boolean, copyingProfiles: boolean, updatingGraphics: boolean, includingHiddenLayers: boolean, ignorePreflightErrors: boolean, creatingReport: boolean, includeIdml: boolean, includePdf: boolean, pdfStyle: string, useDocumentHyphenationExceptionsOnly: boolean, versionComments: string, forceSave?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
