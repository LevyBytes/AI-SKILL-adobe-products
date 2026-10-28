# Extension-window title APIs

(Since 6.1)
CEP 6.1 added APIs for reading and changing extension-window titles. Modal and modeless extensions can use them in all Adobe products; Photoshop, InDesign, InCopy, Illustrator, Animate (Flash Pro), and Audition also support them for panel extensions:

```javascript
CSInterface.prototype.setWindowTitle = function(title){
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function(){
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```
