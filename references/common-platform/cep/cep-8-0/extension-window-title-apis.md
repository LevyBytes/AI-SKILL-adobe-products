# Extension window title APIs

(Since 6.1)
CEP 6.1 adds two APIs for setting and reading extension-window titles. Modal and modeless extensions can use them in all Adobe products; for panel extensions, support covers Audition, Animate (Flash Pro), Illustrator, InCopy, InDesign, and Photoshop:

```js
CSInterface.prototype.setWindowTitle = function (title) {
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function () {
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```
