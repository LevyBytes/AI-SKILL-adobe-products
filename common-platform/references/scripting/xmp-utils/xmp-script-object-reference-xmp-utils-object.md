# XMPScript object reference — XMPUtils object

XMPUtils supplies static helpers for the XMP Toolkit on top of XMPMeta behavior. It exposes only static functions; instances are not created.

composeArrayItemPath() and related path-composition helpers build path expressions for deeply nested properties, and those paths can then be sent to XMPMeta accessor functions such as xmpmetaobj-getProperty.

xmputils-duplicateSubtree and similar higher-level helpers let scripts modify the tree of metadata held by XMPMeta.
