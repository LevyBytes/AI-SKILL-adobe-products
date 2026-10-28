# HI-DPI display

The CEP JavaScript library includes APIs for detecting HI-DPI display availability on Mac.

- `CSInterface.getScaleFactor()` Call this to read the scale factor for the display where the calling extension window is located.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` Call this to register an event handler that runs when the calling extension window moves from a HI-DPI display to a non-HI-DPI display, or back.

```js
window.scaleFactorHandler = function () {
  var scaleFactor = CSLibrary.getScaleFactor();
  if (scaleFactor === 2) {
    imgSrc = "../img/PS_AppIcon_r.png";
  } else {
    imgSrc = "../img/PS_AppIcon.png";
  }
  document.getElementById("image").src = imgSrc;
};

CSLibrary.setScaleFactorChangedHandler(window.scaleFactorHandler);
```

CEP 5.2 already supports HiDPI on Windows.
