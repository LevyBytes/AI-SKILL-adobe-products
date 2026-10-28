# app.scheduleTask()

app.scheduleTask(stringToExecute, delay, repeat)

### Description

Queues the given JavaScript to run after a delay.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| stringToExecute | String | A string containing JavaScript to be executed. |
| delay | Float | A number of milliseconds to wait before executing the JavaScript. |
| repeat | Boolean | When true, execute the script repeatedly, with the specified delay between each execution. When false, the script is executed only once. |

### Returns

Integer, a unique identifier for this task, which can be used to cancel it with app.cancelTask().
