# Modified in Acrobat 8.0

| Object or method | Change |
| --- | --- |
| app.openDoc | Added `cDest`. |
| Doc.addAnnot | Changed default `author` values. |
| Doc.addRecipientListCryptFilter | Added an Acrobat 7.0 note. |
| Doc.getLegalWarnings | Stops marking the document dirty; return value changed. |
| Doc.importTextData | Requires a console or batch event. |
| FDF.addEmbeddedFile | Updated `nSaveOption` description for version 8. |
| Field.buttonImportIcon | Requires a console or batch event. |
| FullScreen.escapeExits | Can be set to `false` only in console or batch events. |
| LoginParameters | Changed wording for `cURI` and `cUserId`. |
| submitForm | `cPassword` cannot create password-encrypted FDF in 8.0. Using it for that submission throws `ESErrorInvalidArgs` and prevents submission. |

For exact member descriptions and notes, consult [Acrobat 8.0 API changes](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJSChanges.html#acrobat-8-0-changes).
