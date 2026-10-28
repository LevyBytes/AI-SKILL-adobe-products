# Dialog handlers and description

Dialog box handlers

A dialog box handler fires when its particular dialog box event takes place. Every handler is optional, and each one receives a Dialog object usable for reading or writing values in the dialog box. The table below lists the handlers that are supported.

| Dialog box handler | Description |
| --- | --- |
| initialize | Invoked as the dialog box undergoes its setup. |
| validate | Fires when a field changes, to judge whether the new value passes (return true) or fails (return false). |
| commit | Runs once the dialog box's OK button gets clicked. |
| destroy | Invoked as the dialog box is being torn down. |
| ItemID | Fires when the dialog box element ItemID changes. With a text box that means when the text box loses focus; with other controls it means when the selection changes. Where ItemID is not a JavaScript identifier, wrap the name in double quotes as the method is defined — see the example just below. |

A dialog item ID that is not a JavaScript identifier must be quoted as an object-property key, for example `"bt:1"`. The key `butn` can be written as `butn` or `"butn"`. Assign each key your event-handler function; the handler receives the dialog object.

description property

An object literal is what the description property holds, its properties spelling out the dialog. An elements property on it names the dialog box's elements, and any of those elements may in turn carry its own elements property describing subelements.

Listed in the following table are the dialog properties found at the root level of the description property.

| Property | Type | Description |
| --- | --- | --- |
| name | String | The dialog box's title bar, which ought to be localized. |
| first_tab | String | The ItemID of the dialog box item that should come first in the tab order. That same dialog box item is also active when the dialog box opens. Setting up a tabbing order requires this property. See the next_tab property defined below. |
| width | Numeric | The dialog box width in pixels. With no width given, the combined width of the contents applies. |
| height | Numeric | The dialog box height in pixels. With no height given, the combined height of the contents applies. |
| char_width | Numeric | The dialog box width in characters. With no width given, the combined width of the contents applies. |
| char_height | Numeric | The dialog box height in characters. With no height given, the combined height of the contents applies. |
| align_children | String | How every descendant is aligned. It must be one of these values:<br><br>"align_left": Left aligned<br><br>"align_center": Center aligned<br><br>"align_right": Right aligned<br><br>"align_top": Top aligned<br><br>"align_fill": Align to fill the parent's width; may widen objects.<br><br>"align_distribute": Distribute the contents over the parent's width.<br><br>"align_row": Distribute the contents over the parent's width with a consistent baseline.<br><br>"align_offscreen": Align items one on top of another. |
| elements | Array | An array of object literals describing the dialog box elements held inside this dialog (see elements property). |

Related: [app.execDialog](exec-dialog.md).
