# Signature support for Emerging PAdES ETSI ESI standard

A multi-part standard from the European Telecommunications Standards Institute (ETSI) lays out a set of profiles for PAdES — Advanced Electronic Signatures aimed at Portable Document Format (PDF) files. Further detail is at: http://www.etsi.org/website/newsandevents/200909_electronicsignature.aspx

Part of the standard is a "timestamp the document" feature that drops an invisible timestamp signature onto a document. A matching JavaScript Doc method now ships in this release to accomplish the same thing. On top of that, the release adds a Doc method for applying an invisible certification (the menu-item equivalent already existed in Acrobat, and JavaScript now reaches it too). Each of these methods accepts the identical parameters to field.signatureSign, only operating at the Doc level. They may run solely within a batch, console, or application initialization event.
