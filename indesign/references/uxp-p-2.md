# Page Items, Page Layout Options, Page Number Position, Page Number Style ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PageItems; PageLayoutOptions; PageNumberPosition; PageNumberStyle; PageNumberVariablePreference; PageNumberingOptions; PageOrientation; PagePositions; PageRangeFormat; PageRange; PageReferenceType; PageReference; PageReferences; PageSideOptions; PageTransitionDirectionOptions; PageTransitionDurationOptions; PageTransitionOverrideOptions; PageTransitionTypeOptions.

## PageItems

Use the PageItems collection to work with every page item in a container, such as a document, page, or group, without regard to item type.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Reports how many elements the PageItem contains.
> PageItem **item**( Mixed **index** )
>
> Gets the PageItem identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Accepted values: Long Integer or String. |

> PageItem **itemByName**( String **name** )
>
> Gets the PageItem that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> PageItem **itemByID**( Number **id** )
>
> Gets the PageItem that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> PageItem **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PageItems included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start PageItem, index, or name. Accepted values: PageItem, Long Integer or String. |
| Mixed | to | Range end PageItem, index, or name. Accepted values: PageItem, Long Integer or String. |

> PageItem **firstItem**()
>
> Gets the first PageItem in the collection.
> PageItem **lastItem**()
>
> Gets the last PageItem in the collection.
> PageItem **middleItem**()
>
> Gets the middle PageItem in the collection.
> PageItem **previousItem**( PageItem **obj** )
>
> Gets the PageItem whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | obj | Index of the PageItem that follows the PageItem being requested. |

> PageItem **nextItem**( PageItem **obj** )
>
> Gets the PageItem whose index comes after the supplied PageItem in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | obj | PageItem whose index precedes the PageItem being requested. |

> PageItem **anyItem**()
>
> Gets any PageItem in the collection.
> PageItem **everyItem**()
>
> Gets every PageItem in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the PageItem.
> PageItem **[]**( Number **index** )
>
> Gets the PageItem at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## PageLayoutOptions

Options that control page layout during PDF export.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the default page layout.
> _Read Only_
>
> Number `SINGLE_PAGE` = 1987736432
>
> Uses a single-page layout.
> _Read Only_
>
> Number `SINGLE_PAGE_CONTINUOUS` = 1884508259
>
> Uses a continuous single-page layout.
> _Read Only_
>
> Number `TWO_UP_FACING` = 1884575046
>
> Uses a two-up facing page layout.
> _Read Only_
>
> Number `TWO_UP_FACING_CONTINUOUS` = 1884571235
>
> Uses a continuous two-up facing page layout.
> _Read Only_
>
> Number `TWO_UP_COVER_PAGE` = 1884570448
>
> Uses a two-up cover page layout.
> _Read Only_
>
> Number `TWO_UP_COVER_PAGE_CONTINUOUS` = 1884570467
>
> Uses a continuous two-up cover page layout.

## PageNumberPosition

Options for where page numbers are positioned.

### Class

> _Read Only_
>
> Number `AFTER_ENTRY` = 1634100590
>
> Puts page numbers after entry text.
> _Read Only_
>
> Number `BEFORE_ENTRY` = 1650877806
>
> Puts page numbers before entry text.
> _Read Only_
>
> Number **NONE** = 1852796517
>
> Disables page numbers.

## PageNumberStyle

Available options for page number styling.

### Class

> _Read Only_
>
> Number `UPPER_ROMAN` = 1297247605
>
> Formats page numbers as uppercase Roman numerals.
> _Read Only_
>
> Number `LOWER_ROMAN` = 1297247596
>
> Formats page numbers as lowercase Roman numerals.
> _Read Only_
>
> Number `UPPER_LETTERS` = 1296855669
>
> Formats page numbers with uppercase letters.
> _Read Only_
>
> Number `LOWER_LETTERS` = 1296855660
>
> Formats page numbers with lowercase letters.
> _Read Only_
>
> Number **ARABIC** = 1298231906
>
> Formats page numbers with Arabic numerals.
> _Read Only_
>
> Number **KANJI** = 1296788073
>
> Formats page numbers with Kanji.
> _Read Only_
>
> Number `ARABIC_ALIF_BA_TAH` = 1296130420
>
> Formats page numbers with Arabic Alif Ba Tah.
> _Read Only_
>
> Number `ARABIC_ABJAD` = 1296130410
>
> Formats page numbers with Arabic Abjad.
> _Read Only_
>
> Number `HEBREW_BIBLICAL` = 1296589410
>
> Formats page numbers with Hebrew Biblical.
> _Read Only_
>
> Number `HEBREW_NON_STANDARD` = 1296589422
>
> Formats page numbers with Hebrew Non Standard.
> _Read Only_
>
> Number `SINGLE_LEADING_ZEROS` = 1297312890
>
> Formats Arabic-numeral page numbers as two digits.
> _Read Only_
>
> Number `DOUBLE_LEADING_ZEROS` = 1296329850
>
> Formats Arabic-numeral page numbers as three digits.
> _Read Only_
>
> Number `TRIPLE_LEADING_ZEROS` = 1297378426
>
> Formats Arabic-numeral page numbers as four digits.

## PageNumberVariablePreference

Preferences that govern a page number variable.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Parent object for PageNumberVariablePreference, returned as a TextVariable.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> String **textBefore**
>
> Text placed before the variable value. (Limit: 128 characters)
> VariableNumberingStyles **format**
>
> Numbering style used for the variable.
> String **textAfter**
>
> Text placed after the variable value. (Limit: 128 characters)
> VariableScopes **scope**
>
> Page range or scope included by the variable.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that, when run, recreates the PageNumberVariablePreference.
> PageNumberVariablePreference **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PageNumberingOptions

Page numbering choices.

### Class

> _Read Only_
>
> Number **SECTION** = 1935897710
>
> Uses the section's page numbering specifications.
> _Read Only_
>
> Number **ABSOLUTE** = 1096971116
>
> Applies sequential numbering across every page in the document.

## PageOrientation

Page orientation choices.

### Class

> _Read Only_
>
> Number **LANDSCAPE** = 2003395685
>
> Landscape.
> _Read Only_
>
> Number **PORTRAIT** = 1751738216
>
> Portrait.

## PagePositions

Choices that place the page on paper or film.

### Class

> _Read Only_
>
> Number `UPPER_LEFT` = 1668183118
>
> Positions the page at the upper-left corner.
> _Read Only_
>
> Number `CENTER_HORIZONTALLY` = 1668183112
>
> Aligns the page to the horizontal center.
> _Read Only_
>
> Number `CENTER_VERTICALLY` = 1668183126
>
> Aligns the page to the vertical center.
> _Read Only_
>
> Number **CENTERED** = 1668183106
>
> Aligns the page at both horizontal and vertical centers.

## PageRangeFormat

Choices controlling export page range format.

### Class

> _Read Only_
>
> Number `EXPORT_ALL_PAGES` = 1700883568
>
> exports every page.
> _Read Only_
>
> Number `EXPORT_PAGE_RANGE` = 1700951410
>
> exports page ranges.

## PageRange

Page range choices.

### Class

> _Read Only_
>
> Number `ALL_PAGES` = 1886547553
>
> Print or export the full document page set.
> _Read Only_
>
> Number `SELECTED_ITEMS` = 1886547571
>
> Export the document's selected items.

## PageReferenceType

Choices for page references in an index.

### Class

> _Read Only_
>
> Number `CURRENT_PAGE` = 1668444263
>
> Page where the index entry appears.
> _Read Only_
>
> Number `TO_NEXT_STYLE_CHANGE` = 1953395555
>
> Page span beginning at the index entry's page and ending at the page with the next paragraph style change.
> _Read Only_
>
> Number `TO_NEXT_USE_OF_STYLE` = 1953396083
>
> Page span beginning at the index entry's page and ending at the page where the specified paragraph style next appears. When no paragraph style is provided, the paragraph style from the index entry paragraph is used.
> _Read Only_
>
> Number `TO_END_OF_STORY` = 1701802868
>
> Final page in the story that contains the index entry.
> _Read Only_
>
> Number `TO_END_OF_DOCUMENT` = 1701799011
>
> Final page in the document.
> _Read Only_
>
> Number `TO_END_OF_SECTION` = 1701802851
>
> Final page in the numbered section that contains the index entry.
> _Read Only_
>
> Number `FOR_NEXT_N_PARAGRAPHS` = 1718513778
>
> Page span from the page containing the index entry through the page containing the nth full paragraph after the index entry's paragraph, where n is the included paragraph count.
> _Read Only_
>
> Number `FOR_NEXT_N_PAGES` = 1718513767
>
> Page span from the page containing the inedex entry through the nth page after that page, where n is the included page count.
> _Read Only_
>
> Number `SUPPRESS_PAGE_NUMBERS` = 1852863079
>
> Disables page numbers for the index topic.

## PageReference

Index topic page reference.

### Instance

> _Read Only_
>
> Text **sourceText**
>
> Hyperlinked text or insertion point.
> _Read Only_
>
> Number **id**
>
> Unique ID for the PageReference.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Topic **parent**
>
> Parent object for PageReference, returned as a Topic.
> _Read Only_
>
> Number **index**
>
> Position of the PageReference within its container.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> PageReferenceType **pageReferenceType**
>
> Choices for page references in an index.
> Mixed **pageReferenceLimit**
>
> Paragraph style, paragraph count, or page count that determines the final page of a page range. Note: Use this only for page reference types based on the next paragraph-style use, paragraph count, or page count. . Can return: ParagraphStyle or Long Integer.
> CharacterStyle **pageNumberStyleOverride**
>
> Character style used for page numbers.
> String **label**
>
> String value assignable to this property.
> String **name**
>
> Name of the PageReference; this aliases the PageReference's label property.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **remove**()
>
> Removes the PageReference.
> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Builds a string that, when run, recreates the PageReference.
> PageReference **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PageReferences

Collection containing index page references.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of collection entries.

### Methods

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

> Number **count**()
>
> Shows the number of elements in the PageReference.
> PageReference **item**( Mixed **index** )
>
> Gets the PageReference identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup index or object name. Can accept: Long Integer or String. |

> PageReference **itemByName**( String **name** )
>
> Gets the PageReference with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> PageReference **itemByID**( Number **id** )
>
> Gets the PageReference with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> PageReference **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PageReferences inside the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PageReference, index, or name that starts the range. Can accept: PageReference, Long Integer or String. |
| Mixed | to | PageReference, index, or name that ends the range. Can accept: PageReference, Long Integer or String. |

> PageReference **firstItem**()
>
> Gets the first PageReference in the collection.
> PageReference **lastItem**()
>
> Gets the last PageReference in the collection.
> PageReference **middleItem**()
>
> Gets the middle PageReference in the collection.
> PageReference **previousItem**( PageReference **obj** )
>
> Gets the PageReference whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageReference | obj | PageReference whose position comes after the desired PageReference. |

> PageReference **nextItem**( PageReference **obj** )
>
> Gets the collection item immediately after the specified PageReference.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageReference | obj | PageReference whose index comes before the desired PageReference. |

> PageReference **anyItem**()
>
> Gets any PageReference in the collection.
> PageReference **everyItem**()
>
> Gets every PageReference in the collection.
> String **toSource**()
>
> Builds a string that, when run, recreates the PageReference.
> PageReference **[]**( Number **index** )
>
> Gets the PageReference at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## PageSideOptions

Choices for binding-spine placement.

### Class

> _Read Only_
>
> Number `RIGHT_HAND` = 1919382632
>
> Page appears on the right side of the binding spine within the spread.
> _Read Only_
>
> Number `LEFT_HAND` = 1818653800
>
> Page appears on the left side of the binding spine within the spread.
> _Read Only_
>
> Number `SINGLE_SIDED` = 1970496888
>
> Page is single-sided.

## PageTransitionDirectionOptions

Page transition direction choices.

### Class

> _Read Only_
>
> Number `NOT_APPLICABLE` = 1886670401
>
> No direction is used for this value.
> _Read Only_
>
> Number **DOWN** = 1181971556
>
> Direction runs from top toward bottom.
> _Read Only_
>
> Number `RIGHT_TO_LEFT` = 1920232546
>
> Direction runs from right toward left.
> _Read Only_
>
> Number `LEFT_DOWN` = 1886669892
>
> Direction moves left and downward.
> _Read Only_
>
> Number `LEFT_UP` = 1886669909
>
> Direction moves left and upward.
> _Read Only_
>
> Number `LEFT_TO_RIGHT` = 1819570786
>
> Direction runs from left toward right.
> _Read Only_
>
> Number `RIGHT_DOWN` = 1886671428
>
> Direction moves right and downward.
> _Read Only_
>
> Number `RIGHT_UP` = 1886671445
>
> Direction moves right and upward.
> _Read Only_
>
> Number **UP** = 1181971566
>
> Direction runs from bottom toward top.
> _Read Only_
>
> Number **IN** = 1768824864
>
> Direction moves inward.
> _Read Only_
>
> Number **OUT** = 1886670708
>
> Direction moves outward.
> _Read Only_
>
> Number **HORIZONTAL** = 1752134266
>
> Direction is horizontal.
> _Read Only_
>
> Number **VERTICAL** = 1986359924
>
> Direction is vertical.
> _Read Only_
>
> Number `HORIZONTAL_IN` = 1886668873
>
> Horizontal movement goes inward.
> _Read Only_
>
> Number `HORIZONTAL_OUT` = 1886668879
>
> Horizontal movement goes outward.
> _Read Only_
>
> Number `VERTICAL_IN` = 1886672457
>
> Vertical movement goes inward.
> _Read Only_
>
> Number `VERTICAL_OUT` = 1886672463
>
> Vertical movement goes outward.

## PageTransitionDurationOptions

Duration choices for page transitions.

### Class

> _Read Only_
>
> Number **FAST** = 1180791668
>
> Fast timing.
> _Read Only_
>
> Number **MEDIUM** = 1701727588
>
> Medium timing.
> _Read Only_
>
> Number **SLOW** = 1886671692
>
> Slow timing.

## PageTransitionOverrideOptions

Override value that selects the page transition used during export.

### Class

> _Read Only_
>
> Number `FROM_DOCUMENT` = 1718764655
>
> Uses the page transition defined by the document.
> _Read Only_
>
> Number **NONE** = 1852796517
>
> Applies no page transition.
> _Read Only_
>
> Number `BLINDS_TRANSITION` = 1886667372
>
> Uses the Blinds page transition.
> _Read Only_
>
> Number `BOX_TRANSITION` = 1886667384
>
> Uses the Blinds page transition.
> _Read Only_
>
> Number `COMB_TRANSITION` = 1886667618
>
> Uses the Comb page transition.
> _Read Only_
>
> Number `COVER_TRANSITION` = 1886667638
>
> Uses the Cover page transition.
> _Read Only_
>
> Number `DISSOLVE_TRANSITION` = 1886667891
>
> Uses the Dissolve page transition.
> _Read Only_
>
> Number `FADE_TRANSITION` = 1886668388
>
> Uses the Fade page transition.
> _Read Only_
>
> Number `PAGE_TURN_TRANSITION` = 1886670932
>
> Uses the Page Turn page transition (SWF only).
> _Read Only_
>
> Number `PUSH_TRANSITION` = 1886670963
>
> Uses the Push page transition.
> _Read Only_
>
> Number `SPLIT_TRANSITION` = 1886671728
>
> Uses the Split page transition.
> _Read Only_
>
> Number `UNCOVER_TRANSITION` = 1886672227
>
> Uses the Uncover page transition.
> _Read Only_
>
> Number `WIPE_TRANSITION` = 1886672752
>
> Uses the Wipe page transition.
> _Read Only_
>
> Number `ZOOM_IN_TRANSITION` = 1886673481
>
> Uses the Zoom In page transition.
> _Read Only_
>
> Number `ZOOM_OUT_TRANSITION` = 1886673487
>
> Uses the Zoom Out page transition.

## PageTransitionTypeOptions

Available kinds of page transition.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Applies no page transition.
> _Read Only_
>
> Number `BLINDS_TRANSITION` = 1886667372
>
> Uses the Blinds page transition.
> _Read Only_
>
> Number `BOX_TRANSITION` = 1886667384
>
> Uses the Blinds page transition.
> _Read Only_
>
> Number `COMB_TRANSITION` = 1886667618
>
> Uses the Comb page transition.
> _Read Only_
>
> Number `COVER_TRANSITION` = 1886667638
>
> Uses the Cover page transition.
> _Read Only_
>
> Number `DISSOLVE_TRANSITION` = 1886667891
>
> Uses the Dissolve page transition.
> _Read Only_
>
> Number `FADE_TRANSITION` = 1886668388
>
> Uses the Fade page transition.
> _Read Only_
>
> Number `PUSH_TRANSITION` = 1886670963
>
> Uses the Push page transition.
> _Read Only_
>
> Number `SPLIT_TRANSITION` = 1886671728
>
> Uses the Split page transition.
> _Read Only_
>
> Number `UNCOVER_TRANSITION` = 1886672227
>
> Uses the Uncover page transition.
> _Read Only_
>
> Number `WIPE_TRANSITION` = 1886672752
>
> Uses the Wipe page transition.
> _Read Only_
>
> Number `ZOOM_IN_TRANSITION` = 1886673481
>
> Uses the Zoom In page transition.
> _Read Only_
>
> Number `ZOOM_OUT_TRANSITION` = 1886673487
>
> Uses the Zoom Out page transition.

## PageViewOptions

Page-view choices for the Pages Panel.

### Class

> _Read Only_
>
> Number **HORIZONTALLY** = 1752396907
>
> Pages are laid out in horizontal rows.
> _Read Only_
>
> Number **VERTICALLY** = 1987211127
>
> Pages are laid out as one vertical column.
> _Read Only_
>
> Number `BY_ALTERNATE_LAYOUT` = 1987277931
>
> Pages are laid out in vertical columns grouped by alternate layout.
