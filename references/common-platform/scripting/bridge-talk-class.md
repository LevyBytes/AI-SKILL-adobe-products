# BridgeTalk class

This class's static properties and methods let a script query basic messaging-system information before any particular message object is created. Static methods can test whether an application is installed, test whether it is already running, and launch it. A callback on the class controls how incoming messages are processed by the application.

Static properties and methods are available through the BridgeTalk class in the global namespace. For example:

```javascript
var thisApp = BridgeTalk.appName;
```

Note

Create a BridgeTalk message object by instantiating the BridgeTalk class; that object is what sends message packets between applications. Dynamic properties and methods exist only on instances.

## Attributes
