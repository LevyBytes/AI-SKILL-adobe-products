# getModifierState()

eventObj.getModifierState(keyIdentifier)

### Description

Gets the modifier keys currently active for this event.

Note

For script-wide modifier-key checks (alt/ctrl/meta/shift) outside event handling, consult Keyboard state object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIdentifier | String | String containing one modifier-key identifier, selected from: - Alt - CapsLock - Control - Meta - NumLock - Scroll - Shift |

### Returns

Boolean. true means the specified modifier was active at event time; otherwise false.

### getModifierState()

eventObj.getModifierState(keyIdentifier)

### Description

Gets the modifier keys currently active for this event.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIdentifier | String | String containing one modifier-key identifier, selected from: - "Alt" - "CapsLock" - "Control" - "Meta" - "NumLock" - "Scroll" - "Shift" |

### Returns

Boolean. true means the specified modifier was active at event time; otherwise false.
