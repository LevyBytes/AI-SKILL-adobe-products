# General panel options

Reach for this panel when you need to pin a PDF to a particular Acrobat version and to set the related file and device behavior.

Compatibility: Determines which PDF compatibility level applies. Picking the newest release (here, version 1.7) pulls in every recent feature and capability. When the PDFs are headed for a broad audience, drop to an older level so that everyone can still open and print them.

Object Level Compression: Squeezes structural data — things like bookmarks, accessibility data, and objects that can't otherwise be compressed — which conceals it and renders it unusable in Acrobat 5.0 or Reader 5.0. With Tags, only the structural information gets compressed. With Off, no compression is applied at all.

Auto-Rotate Pages: Turns pages automatically to follow the direction in which the text runs.

Note

When Process DSC Comments is turned on in the Advanced panel and %%Viewing Orientation comments are present, those comments win when page orientation is decided.

Collectively by File: Spins every page to agree with whichever text orientation dominates the document.

Individually: Spins each page to match the text orientation found on that particular page.

Off: Keeps pages from rotating at all.

Binding: Controls whether the PDF reads with binding on the left edge or the right edge. What you choose for Binding shapes how pages appear in Two-Up Continuous view and how the thumbnails sit beside one another.

Resolution: Applies to PostScript files so they can mimic resolutions tied to the destination printer. Accepts anything from 72 to 4000. Stick with the default unless you intend to print the PDF on a specific printer while reproducing the resolution that the original PostScript file declared.

Note

Pushing the resolution value higher grows the file and can add a little to how long certain files take to process.

Pages: Determines which pages get converted into the PDF.

Embed thumbnails: Bakes a thumbnail preview of every page into the PDF, which makes the file larger. Leave it off when the audience runs Acrobat 5.0 or newer to view and print. Those versions build thumbnails on the fly whenever you open the Pages panel of a PDF.

Optimize for fast web view: Reorganizes the file so web servers can serve it faster, one page at a time (byte serving). It also compresses text and line art, which overrides whatever compression you set on the Images panel.

Default Page Size: Sets the page dimensions to fall back on when the original file names none. EPS files supply a bounding box size rather than a page size.
