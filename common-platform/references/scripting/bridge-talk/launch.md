# BridgeTalk.launch()

BridgeTalk.launch(specifier[, where])

### Description

Starts the specified application on the local computer. You do not have to launch an application explicitly before sending it a message; a message sent to an application that is not running starts it automatically.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| specifier | Application specifiers | A specifier for the target application |
| where | Unknown. | Optional. If the value "background" is specified, the application's main window is not brought to the front of the screen. |

### Returns

Boolean. true if the application had already launched, false if this call launched it.
