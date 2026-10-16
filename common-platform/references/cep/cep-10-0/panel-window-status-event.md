# Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Watch the `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; it applies only to PANEL extensions. When the user hides the panel by clicking "X" or by collapsing the window, observers receive an event whose data attribute is "true" or "false". Closing the extension sends no such event.
  Currently, this limits delivery to persistent panel extensions running on Ai. Hidden extensions send "false"; shown extensions send "true".
