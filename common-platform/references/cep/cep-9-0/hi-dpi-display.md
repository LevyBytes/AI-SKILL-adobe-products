# HI-DPI display

On Mac, the CEP JavaScript library exposes APIs that let an extension detect whether HI-DPI display support is available.

- `CSInterface.getScaleFactor()` Call this to obtain the display scale factor for the screen that currently contains the extension window.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` Register a handler with this API so it runs after the extension window crosses from a HI-DPI display to a non-HI-DPI display, or the reverse.

```javascript
var csInterface = new CSInterface();
window.scaleFactorHandler = function(){
var imgSrc;
var scaleFactor = csInterface.getScaleFactor();
if (scaleFactor === 2){
imgSrc = "../img/PS_AppIcon_r.png"
} else {
imgSrc = "../img/PS_AppIcon.png"
}
document.getElementById("image").src = imgSrc;
}

csInterface.setScaleFactorChangedHandler(window.scaleFactorHandler);
```

CEP 5.2 already included HiDPI support on Windows.
