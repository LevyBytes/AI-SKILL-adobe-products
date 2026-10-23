# Defining behavior with event callbacks and listeners - Simulating user events

Scripts can imitate user actions by calling notify on a window or control to send an event notification directly. Using notify, a script can generate window-control events as though the user had clicked buttons, typed text, or moved the window. If the element has an event-handler callback, notify calls it.

notify accepts an optional argument naming the event to simulate. When a control can produce only one event type, a notification without an event name uses that sole default event.

Controls that generate the onClick event:

- Button
- Checkbox
- IconButton
- RadioButton

Controls that generate the onChange event:

- DropDownList
- EditNumber
- EditText
- ListBox
- Scrollbar
- Slider
- TreeView

Controls that generate the onChanging event:

- EditNumber
- EditText
- Scrollbar
- Slider

In ListBox, double-clicking an item generates onDoubleClick.

For RadioButton and Checkbox controls, the boolean value property changes automatically when the user clicks. A notify() call that simulates a click changes value in the same way a real user click would.

For example, if hasBtnsCb currently has value true, this code switches it to false:

```javascript
if ( dlg.hasBtnsCb.value == true ) {
    dlg.hasBtnsCb.notify(); // dlg.hasBtnsCb.value is now `false`
}
```
