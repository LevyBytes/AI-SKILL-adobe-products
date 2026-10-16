# XMPScript object reference — XMPFile object

This class maps to the File Handler component in the Adobe XMP Toolkit and gives scripts convenient I/O access to a file's main, document-level XMP.

For formats that can embed XMP metadata under the XMP Specification, the File Handler supports direct handling. It can insert XMP when none is present, grow existing XMP beyond the available padding, and reconcile XMP against other metadata formats.

For unsupported formats, the XMP Toolkit includes the Packet Scanner as a fallback. That scanner can reach every file format in a more limited way by scanning the whole file dump. It can update a file, but it cannot enlarge the packet or reconcile other metadata formats.

Retrieving thumbnails is not currently supported by the XMPScript API.

Note

Embedded file metadata can also be reached through the Adobe Bridge Metadata object. That object adds thumbnail and preview support, plus coverage for more file formats, including PDF and Camera Raw.

Consult Adobe Bridge JavaScript Guide; also see the separate Adobe Bridge JavaScript Reference document.
