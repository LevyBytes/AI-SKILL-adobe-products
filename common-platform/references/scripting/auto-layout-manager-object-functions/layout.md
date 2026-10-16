# layout()

windowObj.layout.layout( recalculate )

### Description

Runs automatic layout for the managed container. Child element sizes and positions are adjusted from the placement and alignment property values on the parent and its children.

The first time the window is displayed, this method is invoked automatically. Afterward, scripts call it explicitly when parent or child size or position changes require a layout update.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| recalculate | Boolean | Optional. If true, tells the layout manager to compute this container's size again, including child containers. Default: false. |

### Returns

Nothing
