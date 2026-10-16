# radiobutton

Class Name: RadioButton

### Description

This dual-state control belongs to a radiobutton group, which permits a single selected member. value true shows the selected state; value false leaves the control empty. A click, or a notify() call, invokes onClick.

Create every radiobutton in a group consecutively, without creating other element types between them. A group can have only one selected radiobutton at once; selecting a different one clears the previous selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| text | String | Optional. Provides the text shown in the control. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("radiobutton"[, bounds, text, {creation_properties}]);
```
