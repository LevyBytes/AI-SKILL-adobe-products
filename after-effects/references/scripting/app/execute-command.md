# app.executeCommand()

app.executeCommand(id)

### Description

Each Menu Command in the GUI application carries its own ID number, and that number is what you feed this method. A handful of features absent from the API can be reached no other way.

Use the app.findMenuCommandId() method to look up a command's ID number.

For more detail and lists of the IDs people have catalogued, see these sites:

- https://www.provideocoalition.com/after-effects-menu-command-ids/
- https://hyperbrew.co/blog/after-effects-command-ids/

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| id | Integer | The ID number of the command. |

### Returns

None.

### Example

```javascript
// calls the Convert to Bezier Path command
app.executeCommand(4162);
```
