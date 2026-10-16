# HTML Extension Persistent

Persistent mode keeps an HTML extension from being reloaded after it is closed or hidden. Photoshop has offered persistence since version 14.2. This capability is product-specific, so some host applications may not provide it.

InDesign and InCopy provide persistence starting with version 13.1. Use these event names:
Indesign and Incopy:
com.adobe.InDesignPersistent
com.adobe.InDesignUnPersistent

Photoshop persistence setup:

- Use Photoshop version 14.2 or later
- From the HTML extension, dispatch `com.adobe.PhotoshopPersistent` to Photoshop to request persistence

Sample code:

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

Load the matching CSInterface library first. InDesign and InCopy use com.adobe.InDesignPersistent and com.adobe.InDesignUnPersistent instead of the Photoshop event names.
