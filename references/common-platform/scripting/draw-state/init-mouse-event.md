# initMouseEvent()

```javascript
eventObj.initMouseEvent(
    eventName,
    bubble,
    isCancelable,
    view,
    detail,
    screenX,
    screenY,
    clientX,
    clientY,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    button,
    relatedTarge
)
```

### Description

Reinitializes the object so event properties can be changed after construction. The arguments populate the matching properties.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name string. |
| bubble | Boolean | True means the event should fire on ancestors of the target object during bubbling. |
| isCancelable | Boolean | True means the event can be canceled. |
| view | Container or Control object | Object, either a container or a control, that sent the event. |
| detail | Number | Assigns the single-double click value for the click event. |
| screenX, screenY | Number | Assigns event coordinates relative to the screen. |
| clientX, clientY | Number | Assigns event coordinates measured from the target object. The origin sits inside any border decorations at the upper-left corner of the control or window. |
| ctrlKey, altKey, metaKey | Boolean | Assigns the modifier key states. |
| button | Number | Assigns the mouse button. |
| relatedTarget | Object | Optional. For mouseover or mouseout, assigns any related target. |

### Returns

Nothing
