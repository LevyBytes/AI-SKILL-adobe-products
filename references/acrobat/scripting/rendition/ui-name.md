# uiName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R |

Gives the Rendition's name, taken from the N entry of its dictionary inside the PDF file.

Example: Run the snippet below from within a Rendition action.

```javascript
console.println('Preparing to play "'
    + event.action.rendition.uiName + '"');
```

See the event object for a description of event.action.rendition.
