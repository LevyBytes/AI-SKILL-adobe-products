# XMPScript object reference — XMPMeta object

The core services of the XMP Toolkit are exposed through this class. Its functions let code create and query metadata properties in an XMP namespace. Static functions on the class also handle namespace and alias creation and lookup.

The class has one static property for XMP version information; its instances have no JavaScript properties. Each object wraps a set of metadata properties, and the object functions provide access to them.

With suitable path expressions, the generic getProperty(), setProperty(), and deleteProperty() functions work across all property types. For convenience, the object also includes functions targeted to particular property kinds, such as arrays.
