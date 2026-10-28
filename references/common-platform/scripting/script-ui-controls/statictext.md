# statictext

Class Name: StaticText

### Description

This text field is read-only for users.

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
| multiline | Boolean | false (the default) displays a single line of text. true displays multiple lines and wraps the text inside the control's width. |
| scrolling truncate | Boolean String | false (the default) disallows scrolling the displayed text. true enables vertical scrollbar scrolling, which also treats multiline as true. Truncate behaviour, one of: - middle - end - none If middle or end, ellipsis replacement occurs after characters are removed from that part of text when the specified title exceeds reserved space. If none, overlong text is shortened at the end without adding an ellipsis character. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("statictext"[, bounds, text, {creation_properties}]);
```
