# packageForPrint

> Boolean **packageForPrint**( File **to**, Boolean **copyingFonts**, Boolean **copyingLinkedGraphics**, Boolean **copyingProfiles**, Boolean **updatingGraphics**, Boolean **includingHiddenLayers**, Boolean **ignorePreflightErrors**, Boolean **creatingReport**, Boolean **includeIdml**, Boolean **includePdf**, String **pdfStyle**, Boolean **useDocumentHyphenationExceptionsOnly**, String **versionComments**, Boolean **forceSave** )
>
> Builds the package for the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Folder, alias, or path where the packaged files are placed. |
| Boolean | copyingFonts | When true, copies the document's used fonts into the package folder. |
| Boolean | copyingLinkedGraphics | When true, copies linked graphics files into the package folder. |
| Boolean | copyingProfiles | When true, copies color profiles into the package folder. |
| Boolean | updatingGraphics | When true, updates graphics links so they point to the package folder. |
| Boolean | includingHiddenLayers | When true, copies fonts and links from hidden layers into the package. |
| Boolean | ignorePreflightErrors | When true, packaging continues despite preflight errors. When false, existing errors cancel packaging. |
| Boolean | creatingReport | When true, creates a package report containing printing instructions, print settings, fonts, links, required inks, and other details. |
| Boolean | includeIdml | When true, creates IDML and includes it in the package folder. (Optional) |
| Boolean | includePdf | When true, creates PDF and includes it in the package folder. (Optional) |
| String | pdfStyle | When PDF output is included, uses this style for PDF export if valid; otherwise it uses the last used PDF preset. (Optional) |
| Boolean | useDocumentHyphenationExceptionsOnly | When selected, InDesign flags this document so it will not reflow if another person opens or edits it on a computer with different hyphenation and dictionary settings. (Optional) |
| String | versionComments | Comments for the version. (Optional) |
| Boolean | forceSave | When true, forcibly saves a version. (Optional) |
