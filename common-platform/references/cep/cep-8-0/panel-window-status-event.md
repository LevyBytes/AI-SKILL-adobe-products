# Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Observe `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; this applies only to PANEL extensions. If the user hides the panel by clicking "X" or collapsing the window, observers receive this event with "true" or "false" in the data attribute. Closing the extension does not send the event.
  Currently, only panel extensions that are persistent and running on Ai can receive it. When the extension is hidden, the event carries "false"; when it is shown, the event carries "true".
