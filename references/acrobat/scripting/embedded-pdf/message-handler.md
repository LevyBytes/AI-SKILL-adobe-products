# messageHandler

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0.5 | No | No | All | Object | R/W |

Through this property, a script in the web browser's scripting context can register a notification object to be invoked whenever a script inside the PDF calls the Doc hostContainer.postMessage method.

The object held here may expose the methods below.

| Method | Description |
| --- | --- |
| onMessage | When present, this gets invoked as a response to the Doc hostContainer.postMessage method. Delivery of the message happens asynchronously. A single array parameter is handed to the method, carrying the array that went to the postMessage method. |
| onError | When present, this fires in response to an error. It receives both an Error object and a string array matching the message behind the error. Should an error arise while this property is undefined, that error goes undelivered — errors, unlike messages, are not queued. On the Error object the name property is set to one of these strings: - "MessageGeneralError": Some general error happened. - "MessageNotAllowedError": Security reasons caused the operation to fail. - "MessageDocNotDisclosedError": Disclosure to the host container was never configured on the document. The Doc's hostContainer.messageHandler.onDisclose property has to be set up correctly. - "MessageDocRefusedDisclosureError": Going by the URL, the document declined to disclose itself to the host container, since the hostContainer.messageHandler.onDisclose method came back false. |

Whenever these methods run, this resolves to the messageHandler instance on which the method was called. For later use as notification methods, any properties on the messageHandler property whose names start with on are held in reserve.

Should postMessage have already been called on the PDF document before this method got registered, every queued message then flows to the messageHandler object the moment it is set.

Posting order is preserved for message delivery, and occurrence order is preserved for error delivery. Between the two, though — messages versus errors — delivery order bears no relationship.

Any exception a handler method throws is thrown away. While execution sits inside an onMessage or onError handler, neither messages nor errors get delivered.

Note

On the Mac OS platform this property is not implemented.
