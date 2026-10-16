# Control objects — Control types and creation parameters

These keywords may be used in string literals as the add method's type specifier on Window and container (Panel and Group) objects. Class names may appear in resource specifications to define controls inside a container element, such as Window, Panel, or Group.

Every control type, containers included, has an optional creation parameter name for assigning a unique object name.

## Control objects — Control types and creation parameters

Containers expose extra child-management properties; see Container Attributes. Hiding a panel also hides its children. Showing it again displays only those children whose own hidden state does not suppress them.

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

Add a tab to tabbed panel t in window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.t.add("tab"[, bounds, text, {creation_properties}]);
```
