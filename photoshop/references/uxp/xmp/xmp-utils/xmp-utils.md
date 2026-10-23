# require('uxp').xmp.XMPUtils - XMPUtils()

XMPUtils supplies static-only helper routines for the XMP Toolkit on top of the [XMPMeta object](../xmp-meta/reference-index.md). You do not instantiate this class.

Functions for building paths, including composeArrayItemPath(), assemble expressions for deeply nested properties. Those expressions can be passed to accessor routines on the [XMPMeta object](../xmp-meta/reference-index.md), including xmpmetaobj-getProperty.

For operations on whole metadata branches, helpers such as xmputils-duplicateSubtree work against the tree held by an [XMPMeta object](../xmp-meta/reference-index.md).
