# HI-DPI display

The CEP JavaScript library includes macOS APIs for detecting whether a HI-DPI display is available.

- `CSInterface.getScaleFactor()` returns the scale factor for the display that contains the calling extension window.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` registers an event handler that runs when the calling extension window moves from a HI-DPI display to a non-HI-DPI display, or back again.

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
