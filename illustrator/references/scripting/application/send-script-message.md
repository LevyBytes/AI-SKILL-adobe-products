# Application.sendScriptMessage()

app.sendScriptMessage(pluginName, messageSelector, inputString)

### Description

Sends a command message defined by a plug-in to that plug-in with the supplied input arguments, then returns the result string defined by the plug-in.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pluginName | String | Plug-in that receives the message |
| messageSelector | String | Message selector sent to the plugin |
| inputString | String | Data supplied to the command |

### Returns

String
