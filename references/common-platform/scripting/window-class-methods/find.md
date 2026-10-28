# find()

Window.find(resourceName)

Window.find(type, title)

### Description

Use this method to locate an existing window. That can include windows already created by a script and windows created by the application, when the application supports that case.

Warning

Not every ScriptUI implementation supports this method.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| resourceName | String | Predefined resource name available to JavaScript in the current application. |
| type | String | Optional. Window type (see Window object constructor), used when multiple windows share the same title. Can be null or the empty string. |
| title | Strign | Title text for the window. |

### Returns

Returns the Window object found or generated from the resource; returns null when no matching window or resource exists.
