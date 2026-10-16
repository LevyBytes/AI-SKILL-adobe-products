# Set and Get the title of the extension windows

(Since 6.1)
CEP 6.1 adds two APIs for setting and reading extension window titles. They cover modal and modeless extensions across Adobe products; panel usage is available in Photoshop, InDesign, InCopy, Illustrator, Animate (Flash Pro), and Audition:

```javascript
CSInterface.prototype.setWindowTitle = function(title){
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function(){
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```
