# exportArticleFolio

> String **exportArticleFolio**( File **destination**, Document **portraitDocument**, Document **landscapeDocument**, Mixed **folioMetadata**, Mixed **miniFolioParams** )
>
> Writes the supplied documents as an article folio.

Note: The behavior matches @method(exportMiniFolio), while the returned data differs: @method(exportMiniFolio) yields an array of warning strings, and this method yields an XML structure.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | destination | File path for the output. |
| Document | portraitDocument | InDesign document used for the stack's portrait orientation. |
| Document | landscapeDocument | InDesign document used for the stack's landscape orientation. |
| Mixed | folioMetadata | Optional mini folio meta data; accepts Ordered array containing key:String, value:String. (Optional) |
| Mixed | miniFolioParams | Mini folio export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. (Optional) |
