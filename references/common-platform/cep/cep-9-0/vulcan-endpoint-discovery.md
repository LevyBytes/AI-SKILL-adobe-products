# CEP Vulcan endpoint discovery

For point-to-point Vulcan messages, use `getEndPoints` and `getSelfEndPoint`. The API definitions are listed below; see Vulcan.js for details.

```text
/**
 * Gets all available endpoints of the running Vulcan-enabled applications.
 *
 * Since 7.0.0
 *
 * @return                The array of all available endpoints.
 * An example endpoint string:
 * <endPoint>
 *   <appId>PHXS</appId>
 *   <appVersion>16.1.0</appVersion>
 * </endPoint>
 */
```

Signature: `Vulcan.prototype.getEndPoints = function()`.

```text
/**
 * Gets the endpoint for itself.
 *
 * Since 7.0.0
 *
 * @return                The endpoint string for itself.
 */
```

Signature: `Vulcan.prototype.getSelfEndPoint = function()`.

To send a point-to-point Vulcan message:

- Retrieve all available endpoints.
- Choose the destination endpoint and read appId and appVersion from it.
- Create a Vulcan message using the destination `appId` and `appVersion`.
- Dispatch the Vulcan message.

```javascript
// Supply GetValueByKey to read an XML endpoint value by its tag name.
var endPointList = VulcanInterface.getEndPoints();
if (!endPointList.length) throw new Error("No Vulcan endpoint is available");
var destIndex = 0;
var appId = GetValueByKey(endPointList[destIndex], "appId");
var appVersion = GetValueByKey(endPointList[destIndex], "appVersion");
var message = new VulcanMessage(VulcanMessage.TYPE_PREFIX + "test", appId, appVersion);
message.setPayload("blablabla...");
VulcanInterface.dispatchMessage(message);
```

Related: [CEP Vulcan messages and listeners](vulcan-messaging.md).
