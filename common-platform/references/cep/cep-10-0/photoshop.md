# Photoshop

Photoshop defines these specific events:

- com.adobe.PhotoshopPersistent
- com.adobe.PhotoshopUnPersistent
- com.adobe.PhotoshopWorkspaceSet
- com.adobe.PhotoshopWorkspaceGet
- com.adobe.PhotoshopWorkspaceAware
- com.adobe.PhotoshopWorkspaceData
- com.adobe.PhotoshopWorkspaceRequest
- com.adobe.PhotoshopRegisterEvent
- com.adobe.PhotoshopUnRegisterEvent
- com.adobe.PhotoshopLoseFocus
- com.adobe.PhotoshopQueryDockingState

For example, sending the `com.adobe.PhotoshopLoseFocus` event lets a CEP extension return mouse focus to Photoshop:

```javascript
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.PhotoshopLoseFocus", "APPLICATION");
event.extensionId = csInterface.getExtensionID();
csInterface.dispatchEvent(event);
```

`com.adobe.PhotoshopCallback` will be removed in Photoshop 17.0 because adding a listener causes every CS Extension to receive the event. As of Photoshop CC 2015 June release, developers can use this replacement to avoid the broadcast problem:

```javascript
csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + gExtensionID, PhotoshopCallbackUnique);
```
