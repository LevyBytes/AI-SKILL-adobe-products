# Story Windows

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A collection containing StoryWindow objects.

## Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> Number **count**()
>
> Shows how many elements the StoryWindow collection contains.
> StoryWindow **item**( Mixed **index** )
>
> Gets the StoryWindow identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> StoryWindow **itemByName**( String **name** )
>
> Gets the StoryWindow with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> StoryWindow **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets StoryWindows inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a StoryWindow, index, or name. Accepts: StoryWindow, Long Integer or String. |
| Mixed | to | Range end, supplied as a StoryWindow, index, or name. Accepts: StoryWindow, Long Integer or String. |

> StoryWindow **firstItem**()
>
> Gets the collection's first StoryWindow.
> StoryWindow **lastItem**()
>
> Gets the collection's last StoryWindow.
> StoryWindow **middleItem**()
>
> Gets the StoryWindow in the middle of the collection.
> StoryWindow **previousItem**( StoryWindow **obj** )
>
> Gets the StoryWindow whose index precedes the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StoryWindow | obj | StoryWindow index after the desired StoryWindow. |

> StoryWindow **nextItem**( StoryWindow **obj** )
>
> Gets the StoryWindow whose index comes after the specified StoryWindow in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StoryWindow | obj | StoryWindow positioned before the desired StoryWindow. |

> StoryWindow **anyItem**()
>
> Gets any StoryWindow from the collection.
> StoryWindow **everyItem**()
>
> Gets all StoryWindow objects in the collection.
> String **toSource**()
>
> Produces executable source text that evaluates back to the StoryWindow.
> StoryWindow **[]**( Number **index** )
>
> Gets the StoryWindow at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
