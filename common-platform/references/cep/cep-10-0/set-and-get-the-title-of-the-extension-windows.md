# Set and Get the title of the extension windows

(Since 6.1)
CEP 6.1 adds two APIs for reading and setting extension window titles. Modal and modeless extensions can use them in all Adobe products; panel extension support covers Photoshop, InDesign, InCopy, Illustrator, Animate (Flash Pro), and Audition:

```javascript
CSInterface.prototype.setWindowTitle = function(title){
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function(){
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```
