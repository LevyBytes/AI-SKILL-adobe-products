# Checkbox

A Checkbox gives the user a true/false choice.

- Set text to provide the identifying label displayed beside the clickable box.
- Clicking toggles selection on or off; the selected state is shown with a checkmark. Its value is true in the checked state and false otherwise.

During Checkbox creation, the value property can establish the starting checked state and displayed look.

```javascript
// Add a checkbox to control the buttons that dismiss an alert box
dlg.hasBtnsCb = dlg.add( "checkbox", undefined, "Should there be alert buttons?" );
dlg.hasBtnsCb.value = true;
```
