# Dialog element properties

elements property

A dialog box elements property names an object literal carrying the following set of properties.

| Property | Type | Description |
| --- | --- | --- |
| name | String | The shown name of the dialog box element, which ought to be localized. The "edit_text" type ignores this property. |
| item_id | String | This dialog box's ItemID, a unique 4-character string. |
| type | String | What kind of dialog box element this is. It must be one of these strings:<br><br>button" - A push button.<br><br>check_box" - A check box.<br><br>radio" - A radio button.<br><br>list_box" - A list box.<br><br>hier_list_box" - A hierarchical list box.<br><br>static_text" - A static text box.<br><br>edit_text" - An editable text box.<br><br>popup" - A pop-up control.<br><br>ok" - An OK button.<br><br>ok_cancel" - An OK and Cancel Button.<br><br>ok_cancel_other" - An OK, Cancel, and Other button.<br><br>view" - A container for a set controls.<br><br>cluster" - A frame for a set of controls.<br><br>gap" - A place holder. |
| next_tab | String | The ItemID of the next dialog box item in the tab order. Tabbing skips over any dialog box item that is not targeted by a next_tab (or first_tab) property. The tab order should close into a circular linked list. |
| width | Numeric | Gives the element width in pixels. With no width given, the combined width of the contents applies. |
| height | Numeric | Gives the element height in pixels. With no height given, the combined height of the contents applies. |
| char_width | Numeric | Gives the element width in characters. With no width given, the combined width of the contents applies. |
| char_height | Numeric | Gives the element height in characters. With no height given, the combined height of the contents applies. |
| font | String | Which font this element uses. It must be one of these strings:<br><br>default" - Default font<br><br>dialog" - Dialog box font<br><br>palette" - Palette (small) Font |
| bold | Boolean | Marks whether the font is bold. |
| italic | Boolean | Marks whether the font is italic. |
| alignment | String | Sets how this element is aligned. It must be one of these values:<br><br>align_left": Left aligned<br><br>align_center": Center aligned<br><br>align_right": Right aligned<br><br>align_top": Top aligned<br><br>align_fill": Align to fill the parent's width; may widen objects.<br><br>align_distribute": Distribute the contents over the parent's width.<br><br>align_row": Distribute the contents over the parent's width with a consistent baseline.<br><br>align_offscreen": Align items one on top of another. |
| align_children | String | Sets how every descendant is aligned. The possible values match those for alignment. |
| elements | Array | An array of object literals describing this dialog box element's subelements. Its properties match the ones laid out in this table. |

| Element type | Property | Type | Description |
| --- | --- | --- | --- |
| static_text | multiline | Boolean | When true, this static text element runs to multiple lines. On Mac OS the height property has to reach at least 49 for the up/down buttons to show, the ones that let users scroll through the whole box content. |
| edit_text | multiline | Boolean | When true, this edit text element runs to multiple lines. |
| edit_text | readonly | Boolean | When true, this text element is read only. Setting password to true makes this property irrelevant. |
| edit_text | password | Boolean | When true, this text element acts as a password field. |
| edit_text | PopupEdit | Boolean | When true, this is a pop-up edit text element. |
| edit_text | SpinEdit | Boolean | When true, this is a spin edit text element. |
| radio | group_id | String | The name of the group this radio button is part of. |
| ok, ok_cancel,\| ok_cancel_other | ok_name | String | The name for the OK button. |
| ok, ok_cancel,\| ok_cancel_other | cancel_name | String | The name for the cancel button. |
| ok, ok_cancel,\| ok_cancel_other | other_name | String | The name for the other button. |

Related: [app.execDialog](exec-dialog.md).
