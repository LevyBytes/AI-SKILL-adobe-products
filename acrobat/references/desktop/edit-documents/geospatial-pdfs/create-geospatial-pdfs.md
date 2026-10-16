# Create geospatial PDFs

This walks through building a geospatial PDF out of GeoTIFF and JPEG 2000 source files in Acrobat.

Both GeoTIFF and JPEG 2000 are raster formats, and you can bring them in either as fresh documents or as added layers on a document you already have open. The geospatial coordinates baked into those files carry over, so the PDF you end up with still holds its spatial data. That embedded geospatial information is what later lets you measure features, pin down locations, and review mapped content inside Acrobat.

Before you begin

Confirm first that your GeoTIFF or JPEG 2000 file actually carries valid geospatial metadata. Acrobat relies on that information when it builds, within the PDF itself, the references that make it geospatial.

From the Home view, select Create.

Pick Single file, and after that choose Select a file.

When the dialog box appears, browse to your GeoTIFF or JPEG 2000 file and pick it.

Tip

If you want several JPEG 2000 files at once, go to Menu > Create > PDF from File, pick the files, and select Open — Acrobat will combine them into a single multi-page PDF.

Select Open, then select Create, and Acrobat will load the file as a geospatially enabled PDF.
