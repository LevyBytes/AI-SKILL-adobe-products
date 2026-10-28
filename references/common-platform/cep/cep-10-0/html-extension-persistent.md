# HTML Extension Persistent

Persistence prevents an HTML extension from reloading when it is closed or hidden. Photoshop has supported persistence since version 14.2. This feature is product-specific and may be absent in some host applications.

InDesign and InCopy support the perisitent feature starting with version 13.1. Use these event names:
Indesign:
com.adobe.InDesignPersistent
com.adobe.InDesignUnPersistent
Incopy:
com.adobe.InCopyPersistent
com.adobe.InCopyUnPersistent

To make an HTML extension persistent in Photoshop:

- Use Photoshop version 14.2 or later
- From the HTML extension, dispatch `com.adobe.PhotoshopPersistent` to Photoshop to request persistence

Sample code:

Load the matching CSInterface library first. InDesign and InCopy use com.adobe.InDesignPersistent and com.adobe.InDesignUnPersistent instead of the Photoshop event names.

```javascript
var csInterface = new CSInterface();
function setPhotoshopPersistence(enabled) {
    var eventName = enabled ? "com.adobe.PhotoshopPersistent"
                            : "com.adobe.PhotoshopUnPersistent";
    var event = new CSEvent(eventName, "APPLICATION");
    event.extensionId = csInterface.getExtensionID();
    csInterface.dispatchEvent(event);
}
setPhotoshopPersistence(true);
// Call setPhotoshopPersistence(false) when persistence is no longer needed.
```
