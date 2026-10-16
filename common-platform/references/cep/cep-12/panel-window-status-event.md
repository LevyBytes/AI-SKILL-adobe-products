# Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Observe the `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; it applies only to PANEL extensions. If the user hides the panel window by clicking "X" or collapsing the window, the observer receives this event with "true" or "false" in the data attribute. The event is not sent when the extension closes.
  Currently, only persistent panel extensions running on Ai can receive this event: when the extension is hidden, the data is "false"; when it is shown, the data is "true".
