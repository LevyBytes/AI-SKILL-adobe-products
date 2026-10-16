# Common properties

Most user-interface element types, including windows, containers, and controls, share many properties. Some properties have slightly different meanings depending on the object type. The table below summarizes which object types use each property. `Yes` reproduces an applicability mark in the source table; an empty cell has no source mark.

| Property | Window | Panel | TabbedPanel | Tab | Group | Button | Checkbox | DropDownList | EditText | FlashPlayer | IconButton | Image | ListBox | ListItem | ProgressBar | RadioButton | Scrollbar | Slider | StaticText | TreeView |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| active | Yes |  |  |  |  | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  |  | Yes | Yes | Yes | Yes | Yes |
| alignChildren | Yes | Yes | Yes | Yes | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| alignment | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| bounds | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| cancelElement | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| characters |  | Yes | Yes | Yes | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| checked |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |  |  |  |
| children | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| columns |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |  |  |  |  |
| defaultElement | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| enabled | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| expanded |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |  |  |  |
| frameBounds | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| frameLocation | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| frameSize | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| graphics | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| helpTip | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| icon |  |  |  |  |  |  |  |  |  |  | Yes | Yes |  | Yes |  |  |  |  |  |  |
| image |  |  |  |  |  |  |  |  |  |  | Yes | Yes |  | Yes |  |  |  |  |  |  |
| index |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |  |  |  |
| items |  |  |  |  |  |  |  | Yes |  |  |  |  | Yes |  |  |  |  |  |  | Yes |
| itemSize |  |  |  |  |  |  |  | Yes |  |  |  |  | Yes |  |  |  |  |  |  | Yes |
| jumpdelta |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |
| justify |  |  |  |  |  | Yes | Yes |  | Yes |  |  |  |  |  |  | Yes |  |  | Yes |  |
| layout | Yes | Yes | Yes | Yes | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| location | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| margins | Yes | Yes | Yes | Yes | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| maximumSize | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| maxvalue |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  | Yes | Yes |  |  |
| minimumSize | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| minvalue |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  | Yes | Yes |  |  |
| orientation | Yes | Yes | Yes | Yes | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| parent | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| preferredSize | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| properties | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| resizeable | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| selected |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |  |  |  |
| selection |  |  | Yes |  |  |  |  | Yes |  |  |  |  | Yes |  |  |  |  |  |  | Yes |
| shortcutKey | Yes |  |  |  |  | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  |  | Yes | Yes | Yes | Yes | Yes |
| size | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| spacing | Yes | Yes | Yes | Yes | Yes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| stepdelta |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |
| subitems |  |  |  |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |  |  |  |
| text | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes |  | Yes |  |  | Yes | Yes | Yes |  | Yes | Yes |  |
| textselection |  |  |  |  |  |  |  | Yes | Yes |  |  |  |  |  |  |  |  |  |  |  |
| title |  |  |  |  |  |  |  |  |  |  | Yes |  |  |  |  |  |  |  |  |  |
| titleLayout |  |  | Yes |  |  |  |  | Yes |  | Yes | Yes | Yes |  |  |  |  |  |  |  |  |
| type | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| value |  |  |  |  |  |  | Yes |  |  |  | Yes |  |  |  | Yes | Yes | Yes | Yes |  |  |
| visible | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| window | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
| windowBounds | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes | Yes | Yes | Yes |
