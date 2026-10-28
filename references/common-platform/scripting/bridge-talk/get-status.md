# BridgeTalk.getStatus()

BridgeTalk.getStatus(targetSpec)

### Description

Gets an application's processing status.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| targetSpec | Application specifiers | Optional. A specifier for the target application. If not supplied, returns the processing status of the current application. |

### Returns

String, one of:

- BUSY: The application is busy at the moment but is not processing messages. For example, this state applies while a modal dialog is displayed.
- IDLE: The application is idle and checks messages on a regular basis.
- PUMPING: Message processing is underway.
- ISNOTRUNNING: Installed, but not currently running.
- ISNOTINSTALLED: No installation is present.
- UNDEFINED: Running, but not answering ping requests. This can happen with a CS2 application that uses an older messaging-framework version.
