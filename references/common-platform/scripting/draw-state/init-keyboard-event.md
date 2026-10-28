# initKeyboardEvent()

eventObj.initKeyboardEvent(eventName, bubble, isCancelable, view, keyID, keyLocation, modifiersList)

### Description

Reinitializes the object so event properties can be changed after construction. The arguments populate the matching properties.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name string. |
| bubble | Boolean | True means the event should fire on ancestors of the target object during bubbling. |
| isCancelable | Boolean | True means the event can be canceled. |
| view | Container or Control object | Object, either a container or a control, that sent the event. |
| keyID | String | Assigns the keyIdentifier value. |
| keyLocation | String | Assigns the keyLocation. value. |
| modifiersList | String | Modifier key names separated by whitespace, such as "Control Alt". |

### Returns

Nothing
