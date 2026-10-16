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

For example, send the `com.adobe.PhotoshopLoseFocus` event when a CEP extension needs to return mouse focus to Photoshop:

```javascript
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.PhotoshopLoseFocus", "APPLICATION");
event.extensionId = csInterface.getExtensionID();
csInterface.dispatchEvent(event);
```

Photoshop 17.0 removes `com.adobe.PhotoshopCallback`; adding a listener makes every CS Extension receive the event. Beginning with the Photoshop CC 2015 June release, developers can avoid that broadcast problem with this alternative:

```javascript
csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + gExtensionID, PhotoshopCallbackUnique);
```
