# CEP Vulcan messages and listeners

Use `addMessageListener`, `removeMessageListener`, `dispatchMessage`, and `getPayload` to listen for Vulcan messages and send them. The definitions below show the API surface; Vulcan.js has the fuller reference.

```text
/**
 * Registers a message listener callback function for a Vulcan message.
 *
 * @param type            The message type.
 * @param callback        The callback function that handles the message.
 *                        Takes one argument, the message object.
 * @param obj             Optional, the object containing the callback method, if any.
 *                        Default is null.
 */
```

Signature: `Vulcan.prototype.addMessageListener = function(type, callback, obj)`.

```text
/**
 * Removes a registered message listener callback function for a Vulcan message.
 *
 * @param type            The message type.
 * @param callback        The callback function that was registered.
 *                        Takes one argument, the message object.
 * @param obj             Optional, the object containing the callback method, if any.
 *                        Default is null.
 */
```

Signature: `Vulcan.prototype.removeMessageListener = function(type, callback, obj)`.

```text
/**
 * Dispatches a Vulcan message.
 *
 * @param vulcanMessage   The message object.
 */
```

Signature: `Vulcan.prototype.dispatchMessage = function(vulcanMessage)`.

```text
/**
 * Retrieves the message payload of a Vulcan message for the registered message listener callback function.
 *
 * @param vulcanMessage   The message object.
 * @return                A string containing the message payload.
 */
```

Signature: `Vulcan.prototype.getPayload = function(vulcanMessage)`.

This JavaScript sample demonstrates those APIs.

```javascript
function observeTestVulcanMessage(onPayload) {
    var message = new VulcanMessage(VulcanMessage.TYPE_PREFIX + "test");
    message.setPayload("To be or not to be that is a question!");
    var callback = function (received) {
        onPayload(VulcanInterface.getPayload(received));
    };
    VulcanInterface.addMessageListener(message.type, callback);
    VulcanInterface.dispatchMessage(message);
    return function stopObserving() {
        VulcanInterface.removeMessageListener(message.type, callback);
    };
}
```

Load the CEP Vulcan library. Pass a callback that handles payload strings; call the returned function when the listener is no longer needed.

Related references:

- [CEP Vulcan endpoint discovery](vulcan-endpoint-discovery.md)
