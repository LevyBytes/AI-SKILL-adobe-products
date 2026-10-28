# Understanding link relationships

InDesign handles placed files through two relationship types: linked and embedded. A linked file stays separate from the document and is referenced through a file path to the original source. This keeps document size under control and lets the same graphic appear in multiple places without copying its file data. During export or printing, InDesign uses the original file to produce full-resolution output.

Embedded files work differently: their full-resolution data is copied into the document. The file becomes self-contained, but the document size increases. Bitmap images of 48K or smaller are embedded automatically by InDesign, although they still show in the Links panel so versions can be tracked.
