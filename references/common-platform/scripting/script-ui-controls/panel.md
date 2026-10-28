# panel

Class Name: Panel

### Description

This is a container for other control types and may include a frame.

Containers expose extra child-management properties; see Container Attributes. Hiding a panel also hides its children. Showing it again displays only those children whose own hidden state does not suppress them.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| text | String | Optional. Supplies the text shown in the panel border. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |
| borderStyle | String | Specifies the panel border drawing style. Default: etched. Values: - black - etched - gray - raised - sunken - topDivider: draws only the panel's top horizontal line.<br><br>Warning<br><br>topDivider is not officially documented and was identified through research. Add details if you have better information about it. |
| subPanelCoordinates | Boolean | When true, the panel automatically shifts child positions for compatibility with Photoshop CS. The default is false; in that state the panel leaves child positions unchanged, even when automatic adjustment is active on the parent window. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("panel"[, bounds, text, {creation_properties}]);
```
