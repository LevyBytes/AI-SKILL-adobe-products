# CSEvent

Here, CSEvent means a CEP Event. The CSEvent (CEP Event) data structure is shown below.

```javascript
/**
 * Class CSEvent.
 * You can use it to dispatch a standard CEP event.
 *
 * @param type	          Event type.
 * @param scope 	  The scope of event, can be "GLOBAL" or "APPLICATION".
 * @param appId 	  The unique identifier of the application that generated the event. Optional.
 * @param extensionId The unique identifier of the extension that generated the event. Optional.
 *
 * @return CSEvent object
 */
function CSEvent(type, scope, appId, extensionId)
{
    this.type = type;
    this.scope = scope;
    this.appId = appId;
    this.extensionId = extensionId;
};
```

Create a `CSEvent` object, then send it with `CSInterface.dispatchEvent`. Its properties are also available inside the callback registered with `CSInterface.addEventListener`. See `addEventListener/dispatchEvent` below for more detail.
