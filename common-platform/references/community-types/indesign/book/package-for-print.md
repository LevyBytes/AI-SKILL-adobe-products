# Book.packageForPrint

Community declaration reference: InDesign/2023.

Builds a print package for the document.
@param to Folder, alias, or path where packaged files are placed.
@param copyingFonts When true, fonts used in the document are copied into the package folder.
@param copyingLinkedGraphics When true, linked graphics files are copied into the package folder.
@param copyingProfiles When true, color profiles are copied into the package folder.
@param updatingGraphics When true, graphics links are updated to point to the package folder.
@param includingHiddenLayers When true, fonts and links from hidden layers are copied into the package.
@param ignorePreflightErrors When true, preflight errors are ignored and packaging continues. When false, packaging is canceled if errors are present.
@param creatingReport When true, a package report is created with printing instructions, print settings, font lists, links, required inks, and other information.
@param includeIdml When true, IDML is generated and included in the package folder.
@param includePdf When true, PDF is generated and included in the package folder.
@param pdfStyle When specified and PDF inclusion is enabled, this style is used for PDF export if valid; otherwise the last used PDF preset is used.
@param useDocumentHyphenationExceptionsOnly When selected, InDesign marks the document so it will not reflow when opened or edited on another computer with different hyphenation and dictionary settings.
@param versionComments Comments attached to the version.
@param forceSave When true, saves a version forcibly.

```typescript
declare class Book {
    packageForPrint(to: File, copyingFonts: boolean, copyingLinkedGraphics: boolean, copyingProfiles: boolean, updatingGraphics: boolean, includingHiddenLayers: boolean, ignorePreflightErrors: boolean, creatingReport: boolean, includeIdml: boolean, includePdf: boolean, pdfStyle: string, useDocumentHyphenationExceptionsOnly: boolean, versionComments: string, forceSave?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
