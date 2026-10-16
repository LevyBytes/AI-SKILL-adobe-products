# notify()

controlObj.notify([event])

### Description

Issues a notification message that imitates the chosen user interaction event.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| event | String | Optional. Name of the control event handler to invoke. One of: - "onClick" - "onChange" - "onChanging" By default, this imitates onChange for an EditText control, and onClick where that event is supported. |

### Returns

Nothing
