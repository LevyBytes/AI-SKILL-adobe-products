# editnumber

Class Name: EditNumber

Note

This feature was introduced in Photoshop 20.0 (CC 2019) and may be unavailable in other hosts.

### Description

EditNumber provides an editable text field for decimal-number entry. Fractional values are allowed.

It calls onChange after text changes and the user types ENTER, after focus leaves the control, or after notify() is invoked on it.

It calls onChanging for any text change.

The textselection property holds the text currently selected.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| minValue | Number | Optional. Minimum accepted numeric input value. |
| maxValue | Number | Optional. Maximum accepted numeric input value. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |
| readonly | Boolean | Optional. false (the default) permits text input. true blocks editing and leaves the control as a display for the text property contents. |
| noecho | Boolean | Optional. false (the default) shows entered text. true suppresses the typed characters, as in password input fields. |
| enterKeySignalsOnChange | Boolean | Optional. false (the default) sends onChange after editable text is modified and keyboard focus exits the control, including tabbing away, clicking elsewhere, or typing ENTER. true sends onChange only after editable text is modified and the user types ENTER; other focus changes do not send the event. |
| borderless | Boolean | Optional. true omits the control border. Default: false. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("editnumber"[, bounds, text, minValue, maxValue, {creation_properties}]);
```
