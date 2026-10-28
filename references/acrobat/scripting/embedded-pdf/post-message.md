# postMessage

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0.5 | No | No | All |

Fires a message asynchronously at the PDF document's message handler — but only once the PDF has revealed itself, which it does when the onDisclosed method on the messageHandler property of its HostContainer object yields true.

That message reaches the onMessage method of the messageHandler.

Where the PDF document withholds disclosure to the host container, an error reaches the onError method of the messageHandler property at some point once postMessage has already returned. And if the PDF has not yet registered for events by setting the Doc hostContainer.messageHandler property, those events wait in a queue until the PDF sets it.

Messages land in a queue and stay there until delivered. Once the queue grows past a ceiling, an error keeps being thrown until enough queued messages have gone out.

Parameters

| Parameter | Description |
| --- | --- |
| aMessage | A string array, one or more entries, destined for onMessage. |

Note

On the Mac OS platform this method is not implemented.
