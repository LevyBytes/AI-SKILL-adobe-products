# Managing control titles — Title truncation

When the reserved title area cannot show the full string, set truncate to choose how ScriptUI draws the shortened text. With truncate set to middle, ScriptUI removes characters from the center of the string and inserts an ellipsis (...). With the value end, it cuts characters from the end and inserts an ellipsis. If truncate is none or is omitted, ScriptUI cuts from the end without adding an ellipsis character.

This example applies all three settings to one title string:

```javascript
w.btn1 = w.add("iconbutton { title: 'Start 123456 End', image: 'SystemWarningIcon' }");
w.btn2 = w.add("iconbutton { title: 'Start 123456 End', image: 'SystemWarningIcon' }");
w.btn3 = w.add("iconbutton { title: 'Start 123456 End', image: 'SystemWarningIcon' }");
w.btn1.titleLayout = { characters: 8, truncate: 'middle' };
w.btn2.titleLayout = { characters: 8, truncate: 'end' };
w.btn3.titleLayout = { characters: 8, truncate: 'none' };
```
