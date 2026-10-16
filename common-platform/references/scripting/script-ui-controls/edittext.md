# edittext

Class Name: EditText

### Description

EditText provides a user-editable text field. It calls onChange when the text changes and the user types ENTER, when the control loses focus, or when notify() is invoked on it. It calls onChanging whenever text changes.

The textselection property holds the text currently selected.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |
| readonly | Boolean | false (the default) permits text input. true blocks editing and leaves the control as a display for the text property contents. |
| noecho | Boolean | false (the default) shows entered text. true suppresses the typed characters, as in password input fields. |
| enterKeySignalsOnChange | Boolean | false (the default) sends onChange after editable text is modified and keyboard focus exits the control, including tabbing away, clicking elsewhere, or typing ENTER. true sends onChange only after editable text is modified and the user types ENTER; other focus changes do not send the event. |
| borderless | Boolean | true omits the control border. Default: false. |
| multiline | Boolean | false (the default) accepts a single text line. true accepts multiple lines and wraps text inside the control width. |
| scrollable | Boolean | (For multiline elements only) true (the default) adds a vertical scrollbar that activates when the element contains more text than the visible area can show. false omits the vertical scrollbar; when text exceeds the visible area, the arrow keys can scroll it up and down. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("edittext"[, bounds, text, {creation_properties}]);
```
