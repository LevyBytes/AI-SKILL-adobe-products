# app.findMenuCommandId()

app.findMenuCommandId(command)

### Description

Each Menu Command in the GUI application carries its own ID number, which then serves as an argument to the app.executeCommand() command. A handful of features absent from the API can be reached no other way.

Worth noting: this method isn't dependable across After Effects language packages, so the usual approach is to discover the command ID number while developing and then invoke it directly by number in production.

For more detail and lists of the IDs people have catalogued, see these sites:

- https://www.provideocoalition.com/after-effects-menu-command-ids/
- https://hyperbrew.co/blog/after-effects-command-ids/

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| command | String | The text of the menu command, exactly as it is shown in the UI. |

### Returns

Integer, the ID number of the menu command.

### Example

```javascript
app.findMenuCommandId("Convert To Bezier Path")
```
