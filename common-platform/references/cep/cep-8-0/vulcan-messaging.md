# Listen for and Dispatch Vulcan message

To send and receive Vulcan messages, use `addMessageListener`, `removeMessageListener`, `dispatchMessage`, and `getPayload`. The definitions follow, with additional detail available in Vulcan.js.

Documented signatures (call contract, not a function implementation):

`Vulcan.prototype.addMessageListener = function(type, callback, obj)`

`Vulcan.prototype.removeMessageListener = function(type, callback, obj)`

`Vulcan.prototype.dispatchMessage = function(vulcanMessage)`

`Vulcan.prototype.getPayload = function(vulcanMessage)`

Registers a message listener callback function for a Vulcan message.

@param type            The message type.
@param callback        The callback function that handles the message.
                       Takes one argument, the message object.
@param obj             Optional, the object containing the callback method, if any.
                       Default is null.

Removes a registered message listener callback function for a Vulcan message.

@param type            The message type.
@param callback        The callback function that was registered.
                       Takes one argument, the message object.
@param obj             Optional, the object containing the callback method, if any.
                       Default is null.

Dispatches a Vulcan message.

@param vulcanMessage   The message object.

Retrieves the message payload of a Vulcan message for the registered message listener callback function.

@param vulcanMessage   The message object.
@return                A string containing the message payload.

The following JavaScript example demonstrates how to use these APIs.

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

`getEndPoints` and `getSelfEndPoint` support point-to-point Vulcan messages. The definitions appear below; see Vulcan.js for details.

Documented signatures (call contract, not a function implementation):

`Vulcan.prototype.getEndPoints = function()`

`Vulcan.prototype.getSelfEndPoint = function()`

Gets all available endpoints of the running Vulcan-enabled applications.

Since 7.0.0

@return                The array of all available endpoints.
An example endpoint string:
&lt;endPoint&gt;
  &lt;appId&gt;PHXS&lt;/appId&gt;
  &lt;appVersion&gt;16.1.0&lt;/appVersion&gt;
&lt;/endPoint&gt;

Gets the endpoint for itself.

Since 7.0.0

@return                The endpoint string for itself.

Use this sequence to send a point-to-point Vulcan message:

- Retrieve all available endpoints.
- Choose the destination endpoint, then read `appId` and `appVersion` from it.
- Create the Vulcan message with the destination `appId` and `appVersion`.
- Dispatch the Vulcan message.

```js
var endPointList = VulcanInterface.getEndPoints();
var destIndex = 0;
var appId = GetValueByKey(endPointList[destIndex], "appId");
var appVersion = GetValueByKey(endPointList[destIndex], "appVersion");
var message = new VulcanMessage(VulcanMessage.TYPE_PREFIX + "test", appId, appVersion);
message.setPayload("blablabla...");
VulcanInterface.dispatchMessage(message);
```
