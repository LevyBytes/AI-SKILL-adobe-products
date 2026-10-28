# orientation

windowOrContainerObj.orientation

### Description

Specifies how elements are arranged inside this container.

The container's layout manager interprets this value.

The default LayoutManager object accepts these case-insensitive values:

- row
- column
- stack

Default orientation is tied to container type: Window and Panel default to column, while Group defaults to row.

The container orientation determines which values are valid for alignChildren and for child alignment properties.

### Type

String
