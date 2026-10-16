# onChange

Runs after the user completes a change in one of these control types:

- DropDownList
- EditNumber
- EditText
- ListBox
- Scrollbar
- Slider
  TreeView

For controls of type EditNumber or EditText, it runs only once editing is complete, such as after focus leaves the control or the user types ENTER.

- The creation parameter enterKeySignalsOnChange controls the exact behavior; see the EditText description.

- For a Slider or Scrollbar, it runs once the user is done dragging the position marker or has clicked the control.
  - This can occur when a script directly sets the property, when a selected item is removed from the list, or when the user changes the selection.
