# HI-DPI display

The CEP JavaScript library includes APIs for detecting whether a HI-DPI display is available on macOS.

- `CSInterface.getScaleFactor()` Use this function to read the display scale factor for the screen that contains the calling extension window.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` Use this function to register an event handler for moves from a HI-DPI display to a non-HI-DPI display, or the reverse.

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

CEP 5.2 already supports HiDPI on Windows.
