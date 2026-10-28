# RadioButton

RadioButton controls let the user choose one option from a set.

- Set text to provide the identifying label displayed beside the clickable button.
- When a RadioButton is chosen, value is true. Platforms render the state in their own style, such as an empty or filled dot.

Create related RadioButton elements consecutively to make a group. Setting any one button's value to true changes all other buttons in that group to false. When the group is created, set one member's state to true:

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.alertBtnsPnl = dlg.add( "panel", undefined, "Button alignment" );
dlg.alertBtnsPnl.alignLeftRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Left" );
dlg.alertBtnsPnl.alignCenterRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Center" );
dlg.alertBtnsPnl.alignRightRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Right" );
dlg.alertBtnsPnl.alignCenterRb.value = true;
dlg.show();
```
