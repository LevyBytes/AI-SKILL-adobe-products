# Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Observe `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; this applies only to PANEL extensions. When the user hides the panel window by clicking "X" or collapsing the window, observers receive this event with "true" or "false" in the data attribute. The event is not sent when the extension is closed.
  Currently, only persistent panel extensions running on Ai can receive this event: when the extension is hidden, the event carries "false"; when it is shown, the event carries "true".
