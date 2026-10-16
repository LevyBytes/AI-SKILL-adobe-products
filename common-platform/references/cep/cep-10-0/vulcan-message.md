# Vulcan message

In JavaScript, a Vulcan message uses this structure.

```javascript
/**
 * @class VulcanMessage
 * Message type for sending messages between host applications.
 * A message of this type can be sent to the designated destination
 * when appId and appVersion are provided and valid. Otherwise,
 * the message is broadcast to all running Vulcan-enabled applications.
 *
 * To send a message between extensions running within one
 * application, use the <code>CSEvent</code> type in CSInterface.js.
 *
 * @param type            The message type.
 * @param appId           The peer appId.
 * @param appVersion      The peer appVersion.
 *
 */
function VulcanMessage(type, appId, appVersion)
{
    this.type = type;
    this.scope = VulcanMessage.SCOPE_SUITE;
    this.appId = requiredParamsValid(appId) ? appId : VulcanMessage.DEFAULT_APP_ID;
	this.appVersion = requiredParamsValid(appVersion) ? appVersion : VulcanMessage.DEFAULT_APP_VERSION;
    this.data = VulcanMessage.DEFAULT_DATA;
}

VulcanMessage.TYPE_PREFIX    = "vulcan.SuiteMessage.";
VulcanMessage.SCOPE_SUITE    = "GLOBAL";
VulcanMessage.DEFAULT_APP_ID = "UNKNOWN";
VulcanMessage.DEFAULT_APP_VERSION = "UNKNOWN";
VulcanMessage.DEFAULT_DATA = "<data><payload></payload></data>";
VulcanMessage.dataTemplate = "<data>{0}</data>";
VulcanMessage.payloadTemplate = "<payload>{0}</payload>";
```
