# Photoshop

Photoshop defines these product-specific events:

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

For instance, a CEP extension can return mouse focus to Photoshop by sending `com.adobe.PhotoshopLoseFocus`:

```js
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.PhotoshopLoseFocus", "APPLICATION");
event.extensionId = csInterface.getExtensionID();
csInterface.dispatchEvent(event);
```

`com.adobe.PhotoshopCallback` is removed in Photoshop 17.0 because registering a listener causes all CS Extensions to receive the event. Beginning with the Photoshop CC 2015 June release, developers can use the following alternative to avoid the broadcast problem:

```js
csInterface.addEventListener(
  "com.adobe.PhotoshopJSONCallback" + gExtensionID,
  PhotoshopCallbackUnique,
);
```
