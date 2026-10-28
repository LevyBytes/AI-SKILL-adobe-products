# disclosed

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.05 | No | Yes | All | Boolean | R/W |

Controls whether JavaScript scripts running in other documents may reach this document.

Before they return its Doc, the app.openDoc and app.activeDocs methods consult the document's disclosed property.

Note

You may set the disclosed property only during batch, console, Page/Open and Doc/Open events. For background on JavaScript events, see the event object. See also Privileged context.

Example 1: To disclose a document to others, drop the code at the document's top level (either at the document level or as a page open action):

```javascript
this.disclosed = true;
```

Example 2: The code below can run inside an Execute JavaScript Batch Sequence to disclose every selected document.

```javascript
this.addScript("Disclosed", "this.disclosed = true;");
```
