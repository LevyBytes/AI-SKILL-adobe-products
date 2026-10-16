# subitems

controlObj.subitems

### Description

Info

For ListItem objects only.

In a multi-column ListBox parent, ListItem.text and ListItem.image describe the first-column label, while this property supplies labels for the row's remaining columns.

This property contains an array of JavaScript objects. Its length is one less than the number of columns. Each member defines a label in the matching column, with the first member (subitems[0]) defining the label in the second column.

### Properties

Each object has two properties; you may provide either one or both:

| Property | Type | Description |
| --- | --- | --- |
| text | String | A localizable display string used for this label. |
| image | Image | An Image object used for this label. |

### Type

Array
