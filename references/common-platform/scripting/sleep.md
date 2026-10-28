# $.sleep()

$.sleep(milliseconds)

### Description

Pauses the calling thread for the requested millisecond count.

While sleeping, the function checks every 100 milliseconds whether the sleep should end. This may occur because of a break request or an expired script timeout.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| milliseconds | Number | Number of milliseconds to wait. |

### Returns

Nothing
