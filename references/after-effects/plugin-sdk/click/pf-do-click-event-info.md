# `PF_DoClickEventInfo`

| Member | Purpose |
| --- | --- |
| when | The moment (OS-level) the click happened. |
| screen_point | The click's location in screen coordinates. With Custom Comp UI, the UI Callbacks let you turn these into composition coordinates. The CCU sample project shows how. |
| num_clicks | How many clicks happened. |
| modifiers | Whichever modifier keys, if any, were down at click time. |
| continue_refcon[4] | A four-element array of A_intptr_t the plug-in can use to hold information through a click-drag-drag sequence. |
| send_drag | Flip this flag to TRUE to signal that dragging continues. That turns the following click event, in effect, into a drag event. |
| last_time | Gets set once the drag event finishes (the user let go of the mouse button). |
