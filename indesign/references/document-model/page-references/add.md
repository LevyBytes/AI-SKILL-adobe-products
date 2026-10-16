# add

> PageReference **add**( Text **source**, PageReferenceType **pageReferenceType**, Mixed **pageReferenceLimit**, CharacterStyle **pageNumberStyleOverride**, Object **withProperties** )
>
> Creates a page reference.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Text | source | Text or insertion point targeted by the page reference. |
| PageReferenceType | pageReferenceType | Page number for an index page reference, or the final page in an index page reference range. (Optional) |
| Mixed | pageReferenceLimit | Paragraph style, paragraph count, or page count that determines the final page of a page range. Valid only for page reference types based on the next paragraph-style use, paragraph count, or page count. . Can accept: ParagraphStyle or Long Integer. (Optional) |
| CharacterStyle | pageNumberStyleOverride | Override style for the page number. (Optional) |
| Object | withProperties | Starting property values for the new PageReference (Optional) |
