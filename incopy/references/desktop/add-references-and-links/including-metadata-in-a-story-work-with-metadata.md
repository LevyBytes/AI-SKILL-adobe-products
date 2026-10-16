# Including metadata in a story — Work with metadata

Metadata consists of standardized file details, including author name, resolution, color space, copyright, and keywords. Those details help streamline workflows and file organization.

About the XMP standard

Adobe Bridge, Adobe Illustrator, Adobe InDesign, and Adobe Photoshop use the Extensible Metadata Platform (XMP) standard as the basis for metadata. XMP is XML-based. Usually the data is written into the file itself; when that is not possible, it is written to a separate sidecar file. XMP lets Adobe applications and publishing workflows exchange metadata. For example, save one file's metadata as a template, then import that metadata into other files.

Metadata stored in formats such as Exif, IPTC (IIM), GPS, and TIFF is synchronized with XMP and described through it, making the information easier to view and manage. XMP also supports communication and storage for other applications and features, including version comments that Adobe Bridge can search.

Normally, metadata travels with the file when the file format changes, such as PSD to JPG. Files placed into an Adobe document or project keep their metadata too.

Note

The XMP Software Development Kit can be used to customize metadata creation, processing, and interchange. One example is adding fields to the File Info dialog box with the XMP SDK. The Adobe website has additional information about XMP and the XMP SDK.

Working with metadata in Adobe Bridge and Adobe Creative Suite components

Adobe Bridge relies on XMP metadata for many features used to organize, search, and track files and versions. You can work with metadata in Adobe Bridge either in the Metadata panel or in the File Info dialog box (InDesign) or Content File Info dialog box (InCopy).

Sometimes the same metadata property is shown in more than one view. A field might appear as Author in one place and Creator in another, but both names map to the same property. Workflow-specific customizations do not break the XMP standardization of those views.
