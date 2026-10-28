# PropertyGroup object

app.project.item(index).layer(index).propertyGroupSpec

### Description

A PropertyGroup object stands for a collection of properties. Inside it you can find Property objects alongside further PropertyGroup objects. Nesting these groups builds a parent-child hierarchy that runs from a Layer object at the root all the way down to one Property object — the mask feather of the third mask, say. Walking that hierarchy is done through PropertyBase methods and attributes; see PropertyBase.propertyGroup(). To see how properties and property groups get accessed, refer to PropertyBase object.

Info

Since PropertyGroup descends from PropertyBase, every method and attribute of PropertyBase is on hand when you work with PropertyGroup, on top of the ones listed here.

Info

PropertyGroup also serves as the base class behind Layer and MaskPropertyGroup. That means its attributes and methods are available whenever you handle layer or mask groups.
