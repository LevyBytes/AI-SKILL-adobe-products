# Prototype

Photoshop DOM APIs are built deliberately so they can accommodate expectations Photoshop may impose while a command is being [batchPlayed](batch-play.md).

Although Photoshop has a broad feature set and the goal is to expose it through the approachable DOM, some capabilities may still be unavailable when you are writing plug-ins.

Your Photoshop scripting style may also need extra properties or methods beyond the DOM classes that ship by default.

Prototypes provide the extension point here; see the [MDN reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes). JavaScript uses prototypes to determine which methods and properties an object inherits. By attaching properties to a prototype, every instance of that object receives them.

At plugin startup, at launch, or from a library loaded before your code, you can extend the prototypes of the available classes.

These prototypes are available to plug-in developers:

- [app.Photoshop](host-api/application/photoshop.md)
- [app.Document](document/reference-index.md)
- [app.Layer](layer/reference-index.md)
- [app.ActionSet](host-api/action-set/reference-index.md)
- [app.Action](host-api/action/reference-index.md)

For example, you might add a new method to [Document](document/reference-index.md) that renames every layer by placing '\_' at the beginning. Run this during plug-in initialization.

```javascript
require("photoshop").app.Document.prototype.prependLodash = function () {
  // `this` will be the instance of Document you're calling the method on
  this.layers.forEach((l) => {
    l.name = "_" + l.name;
  });
};
```

After that, call the method on any document instance where you want it applied:

```javascript
require("photoshop").app.activeDocument.prependLodash(); // All layers in the document will be renamed
```
