# Class Inheritance in After Effects

This matters to a script developer because so much of the After Effects scripting environment is built this way.

You can spot it as a user in After Effects layers: every layer lives in the timeline and carries a Name, Index, and Label Color, yet certain layer types own properties others lack — Audio layers, for example, can't be enabled or disabled, and Camera and Light layers can't take effects. All of them share the base "Layer" traits while each is a subclass with properties of its own.

After Effects scripting carries the same idea. A great many API-accessible elements sit inside class hierarchies that inherit and sharpen properties and methods. That lets the After Effects developers reuse existing structures when building new API-accessible components, and it lets script developers lean on that same hierarchy to drive the After Effects DOM.

Reusing the earlier example, the Layer object (itself a subclass of the PropertyGroup object) is the base class for the AVLayer object, the CameraLayer object, and the LightLayer object. So CameraLayer takes on everything from Layer, which takes on everything from PropertyGroup, which in turn takes on everything from PropertyBase.

That's the reason the name property never appears on the Layer page even though layer.name still works in your script — name comes down from PropertyBase.name.

Warning

A handful of specific cases strip properties and methods out during inheritance rather than adding them. Those are flagged on the object page they apply to.
