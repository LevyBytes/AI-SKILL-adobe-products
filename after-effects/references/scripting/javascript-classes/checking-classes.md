# Checking Classes

In Javascript you would normally reach for instanceof to test whether some element is the object type you expect.

Bear in mind you have to test against the narrowest class there is; an AE Text Layer returns true only for layer instanceof TextLayer, and false for every parent class (layer instanceof AVLayer, layer instanceof Layer, and so on).

All that said, some API elements serve purely as base classes for others; they hold inherited properties and methods, but no DOM element is precisely that type.

Run object instanceof {class} against one of these and AE will either throw an error saying {class} is undefined or hand back false, depending on the way the class was implemented. Which base-only classes show which behaviour is documented in the list below.
