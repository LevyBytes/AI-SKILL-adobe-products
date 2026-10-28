# packageForPrint

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
