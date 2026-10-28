# setPageAction

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | NO | Not available in Reader |

Attaches the action of a document page for a particular trigger.

See also setAction, addScript, the Bookmark object setAction method, and the Field object setAction method.

Note

Any action already defined for the page and trigger you chose will be overwritten by this method.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | The 0-based index of the document page that gains an action. |
| cTrigger | The action's trigger. Values are: Open Close |
| cScript | The JavaScript expression that runs once the trigger fires. |

Example: this makes the application beep the moment the first page opens.

```javascript
this.setPageAction(0, "Open", "app.beep(0);");
```
