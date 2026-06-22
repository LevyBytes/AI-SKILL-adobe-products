# Text Direction, Text Editbox, Text Editboxes, Text Editing Preference ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TextDirection — Class; TextEditbox; TextEditboxes; TextEditingPreference; TextExportCharacterSet; TextExportPreference; TextFrameContents; TextFramePreference.

## TextDirection — Class

> _Read Only_
>
> Number `HORIZONTAL_TYPE` = 1702126696
>
> Horizontal direction for text.
> _Read Only_
>
> Number `VERTICAL_TYPE` = 1702126710
>
> Vertical direction for text.
> _Read Only_
>
> Number `MIXED_TYPE` = 1702126701
>
> Mixed direction state for text.
> _Read Only_
>
> Number `UNKNOWN_TYPE` = 1702126709
>
> Unknown direction state for text.

## TextEditbox

A field for entering text.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the TextEditbox.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the TextEditbox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Index position of the TextEditbox inside its containing object.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> String **editContents**
>
> Default value for an editbox control. Note: Set either edit contents or edit value, not both. When both appear, the later one in the script takes effect.
> Number **minWidth**
>
> Width of the control. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property for assigning several properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the TextEditbox.
> TextEditbox **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## TextEditboxes

Collection containing text editboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of objects contained in the collection.

### Methods

> TextEditbox **add**( Object **withProperties** )
>
> Creates a TextEditbox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new TextEditbox. (Optional) |

> Number **count**()
>
> Shows how many elements the TextEditbox contains.
> TextEditbox **item**( Mixed **index** )
>
> Returns the TextEditbox identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> TextEditbox **itemByID**( Number **id** )
>
> Gets the TextEditbox identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> TextEditbox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns TextEditboxes inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | TextEditbox, index, or name at the range start. Can accept: TextEditbox, Long Integer or String. |
| Mixed | to | TextEditbox, index, or name at the range end. Can accept: TextEditbox, Long Integer or String. |

> TextEditbox **firstItem**()
>
> Returns the collection's first TextEditbox.
> TextEditbox **lastItem**()
>
> Returns the collection's last TextEditbox.
> TextEditbox **middleItem**()
>
> Returns the collection's middle TextEditbox.
> TextEditbox **previousItem**( TextEditbox **obj** )
>
> Returns the TextEditbox whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextEditbox | obj | TextEditbox positioned after the desired TextEditbox. |

> TextEditbox **nextItem**( TextEditbox **obj** )
>
> Returns the TextEditbox whose index comes after the specified TextEditbox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextEditbox | obj | TextEditbox positioned before the desired TextEditbox. |

> TextEditbox **anyItem**()
>
> Returns any TextEditbox from the collection.
> TextEditbox **everyItem**()
>
> Returns each TextEditbox in the collection.
> String **toSource**()
>
> Builds source text that, when run, returns the TextEditbox.
> TextEditbox **[]**( Number **index** )
>
> Returns the TextEditbox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TextEditingPreference

Preferences for text editing.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the TextEditingPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Boolean **dragAndDropTextInLayout**
>
> When true, layout pages accept dragged-and-dropped text.
> Boolean **allowDragAndDropTextInStory**
>
> When true, the story editor or galley view accepts dragged-and-dropped text.
> Boolean **tripleClickSelectsLine**
>
> When true, a triple click selects a text line; when false, a triple click selects a paragraph.
> Boolean **smartCutAndPaste**
>
> When true, cutting and pasting text automatically adjusts spacing among words and between words and punctuation marks.
> Boolean **singleClickConvertsFramesToTextFrames**
>
> When true, a single click with the Type tool changes non-text frames into text frames.
> Object **properties**
>
> Property for assigning several properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the TextEditingPreference.
> TextEditingPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## TextExportCharacterSet

Options that choose the character set for exported text files.

### Class

> _Read Only_
>
> Number `DEFAULT_PLATFORM` = 1415865972
>
> Character set used by default on the platform.
> _Read Only_
>
> Number **UTF16** = 1937125686
>
> Unicode UTF16 character set.
> _Read Only_
>
> Number **UTF8** = 1937134904
>
> Unicode UTF8 character set.

## TextExportPreference

Preferences for exporting text.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the TextExportPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> TextExportCharacterSet **characterSet**
>
> Selected character set.
> ImportPlatform **platform**
>
> Platform where the text file will be used.
> Object **properties**
>
> Property for assigning several properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the TextExportPreference.
> TextExportPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## TextFrameContents

Options for the content type in a text frame.

### Class

> _Read Only_
>
> Number `PLACEHOLDER_TEXT` = 1346925688
>
> Uses placeholder text to fill the text frame.
> _Read Only_
>
> Number `PLACEHOLDER_TEXT_ARABIC` = 1346925665
>
> Uses arabic placeholder text to fill the text frame.
> _Read Only_
>
> Number `PLACEHOLDER_TEXT_HEBREW` = 1346925672
>
> Uses hebrew placeholder text to fill the text frame.
> _Read Only_
>
> Number `PLACEHOLDER_TEXT_CYRILLIC` = 1346925667
>
> Uses cyrillic placeholder text to fill the text frame.
> _Read Only_
>
> Number `PLACEHOLDER_TEXT_GREEK` = 1346925671
>
> Uses greek placeholder text to fill the text frame.

## TextFramePreference

Preferences for text frames.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for TextFramePreference (a Application, Document, TextFrame, EndnoteTextFrame or ObjectStyle).
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Number **textColumnCount**
>
> Column count for the text frame. Note: Depending on use fixed column width, resizing the frame can automatically alter the count.
> Measurement Unit (Number or String)=any **textColumnGutter**
>
> Space separating columns in the text frame.
> Measurement Unit (Number or String)=any **textColumnFixedWidth**
>
> Width assigned to the columns in the text frame.
> Boolean **useFixedColumnWidth**
>
> When true, column width is preserved as the text frame is resized. When false, resizing the text frame also resizes its columns. Note: If true, resizing the frame can change how many columns it contains.
> Mixed **insetSpacing**
>
> Text-to-edge offset for the frame, supplied as one uniform value or as 4 side values [top inset, left inset, bottom inset, right inset]. Return forms: Unit (0 - 8640 points) or Array of 4 Units (0 - 8640 points).
> FirstBaseline **firstBaselineOffset**
>
> Baseline gap to the frame or cell top inset.
> Measurement Unit (Number or String)=any **minimumFirstBaselineOffset**
>
> Smallest allowed baseline-to-frame/cell-top-inset gap.
> VerticalJustification **verticalJustification**
>
> Vertical alignment used for the text content.
> Measurement Unit (Number or String)=any **verticalThreshold**
>
> Maximum vertical space allowed between two paragraphs. Note: This is valid only when vertical justification is justified; the value is added to the paragraph's space before or space after amounts.
> Boolean **ignoreWrap**
>
> When true, text wrap settings for drawn or placed objects are ignored in the text frame.
> Boolean **useFlexibleColumnWidth**
>
> When true, column width is kept within a minimum and maximum range while the text frame is resized. When false, resizing the text frame also resizes its columns. Note: If true, resizing the frame can change how many columns it contains.
> Measurement Unit (Number or String)=any **textColumnMaxWidth**
>
> Largest permitted column width in the text frame. A value of 0 means no upper limit.
> AutoSizingTypeEnum **autoSizingType**
>
> Text frame auto-sizing type. The selected type automatically adjusts the reference value; for example, a height only type changes a top-left reference point to top-center. Set the other auto-sizing attributes before changing auto-sizing type.
> AutoSizingReferenceEnum **autoSizingReferencePoint**
>
> Reference point used for text frame auto sizing. The auto-sizing type value adjusts it to a suitable point; in height only dimension, top left is converted to top center.
> Boolean **useMinimumHeightForAutoSizing**
>
> When true, auto-sizing of the text frame uses the minimum height value.
> Measurement Unit (Number or String)=any **minimumHeightForAutoSizing**
>
> Minimum height used for text frame auto-sizing.
> Boolean **useMinimumWidthForAutoSizing**
>
> When true, auto-sizing of the text frame uses the minimum width value.
> Measurement Unit (Number or String)=any **minimumWidthForAutoSizing**
>
> Minimum width used for text frame auto-sizing.
> Boolean **useNoLineBreaksForAutoSizing**
>
> When true, auto sizing does not introduce line-breaks.
> Boolean **columnRuleOverride**
>
> When true, overrides are enabled for text frame vertical column rule options.
> Number **columnRuleOffset**
>
> Offset for the Text Frame Column Rule.
> Number **columnRuleTopInset**
>
> Top inset for the Text Frame Column Rule.
> Boolean **columnRuleInsetChainOverride**
>
> When true, the inset chain override is enabled.
> Number **columnRuleBottomInset**
>
> Bottom inset for the Text Frame Column Rule.
> Number **columnRuleStrokeWidth**
>
> Width for the Text Frame Column Rule.
> Swatch **columnRuleStrokeColor**
>
> Stroke color for the Text Frame Column Rule.
> StrokeStyle **columnRuleStrokeType**
>
> Stroke type for the Text Frame Column Rule.
> Number **columnRuleStrokeTint**
>
> Stroke tint for the Text Frame Column Rule.
> Boolean **columnRuleOverprintOverride**
>
> When true, the overprint override is enabled.
> Boolean **footnotesEnableOverrides**
>
> When true, overrides are enabled for document footnote options.
> Boolean **footnotesSpanAcrossColumns**
>
> When true, straddling footnotes are enabled.
> Measurement Unit (Number or String)=any **footnotesMinimumSpacing**
>
> Minimum spacing before the first footnote.
> Measurement Unit (Number or String)=any **footnotesSpaceBetween**
>
> Spacing between footnotes.
> Boolean **verticalBalanceColumns**
>
> Vertically justifies balanced content across all columns.
> Object **properties**
>
> Property for assigning several properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the TextFramePreference.
> TextFramePreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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
