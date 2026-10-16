# setFocus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Moves the keyboard focus onto the screen annotation. Whenever it is safe, the focus is assigned synchronously — that is, before setFocus hands control back. When a synchronous assignment is unsafe (say, the property is altered from inside an on event method), the outcome hinges on bAllowAsync:

When true, the focus gets assigned asynchronously while the application is idle.

When false or left out, nothing changes about the focus.

What comes back is true if the work happened synchronously, and false if it had to be put off and handled asynchronously instead.

Parameters

| Parameter | Description |
| --- | --- |
| bAllowAsync | (optional) A Boolean value that determines the behavior of setFocus when it is not safe to set the focus synchronously. If true, the focus will be set asynchronously during idle time. If false or omitted, the focus remains unchanged. The default is false. |

Returns

Boolean
