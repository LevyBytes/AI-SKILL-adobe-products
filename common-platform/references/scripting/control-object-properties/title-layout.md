# titleLayout

controlObj.titleLayout

### Description

Info

Applies only to DropDownList, FlashPlayer, IconButton, Image, or TabbedPanel objects.

For a control that has a title value, this property describes how the text label is placed relative to the element.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| alignment | Array or Numbers | Title position relative to the element as [horizontal_alignment, vertical_alignment]. See alignment for permitted alignment values. Here, fill is invalid for both horizontal and vertical alignment. |
| characters | Number | If 1 or greater, reserves enough title width for the specified number of "X" characters in this element's font. If 0, layout operations calculate title width from the title property value. |
| spacing | Number | 0 or greater. Pixel gap between the title and the element. |
| margins | Array of Numbers, [left, top, right, bottom] | Pixel gap from each element edge to that element's visible content. This replaces the default margins. |
| justify | String | One of "left", "center", or "right"; determines text justification when allocated title width exceeds the actual text width. |
| truncate | String | If "middle" or "end", overlong text loses characters at that location and receives an ellipsis ("...") when the specified title exceeds reserved space. If "none", text that still exceeds the space is shortened at the end without adding an ellipsis character. |

### Type

Object

### type

controlObj.type

### Description

Stores the type name supplied when the element was created.

- For Window objects, the value is one of the type names window, palette, or dialog.
- For controls, the add method that created the control supplies this type.

### Type

String. Read only.

### value

controlObj.value

### Description

Info

Applies only to Checkbox or RadioButton objects.

true indicates selected or set; false indicates neither state.

### Type

Boolean

### value

controlObj.value

### Description

Info

Applies only to Scrollbar or Slider objects.

The indicator's current position. Values outside the minvalue-to-maxvalue range are automatically reset to the nearest boundary.

### Type

Number
