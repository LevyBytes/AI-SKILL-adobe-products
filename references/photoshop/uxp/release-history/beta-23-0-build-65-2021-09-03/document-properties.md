# Document Properties

- Document.bitsPerChannel (read-write): Bits per color channel (type Constants.BitsPerChannelType)
- Document.cloudDocument (read only): Whether this document is stored in Adobe Creative Cloud (type boolean)
- Document.cloudWorkAreaDirectory (read only): Local directory used for this cloud document (type string)
- Document.histogram (read only): Histogram with the pixel count at each color intensity level for the composite channel. The array has 256 members.
- Document.name (read only): Document name (type string)
- Document.path (read only): Full file system path for this document, or the identifier when it is a cloud document (type string)
- Document.quickMaskMode (read-write): Quick Mask mode state. A true value means Quick Mask mode is active in the app (type boolean)
- Document.saved (read only): True when the document has been saved after the most recent change (type boolean)
