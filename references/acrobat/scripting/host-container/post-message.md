# postMessage

7.0.5


Fires a message off asynchronously to the message handler belonging to the PDF document’s host container. Delivery hinges on that host container — an &lt;OBJECT&gt; element on an HTML page, say — having signed up for notification by setting its messageHandler property. The onMessage method of the messageHandler receives the message.

Until they go out, messages wait in a queue. Once that queue tops its maximum message count, a parameter error keeps getting thrown until the queue drains some of its backlog.

Parameters

| Parameter | Description |
| --- | --- |
| aMessage | An array of at least one string; the messageHandler property’s onMessage method receives it. |

Example:

```javascript
var aMessage = ["MyMessageName", "Message Body"];
this.hostContainer.postMessage(aMessage);
```
