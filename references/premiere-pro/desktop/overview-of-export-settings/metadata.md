# Metadata

Metadata is descriptive information attached to a media file. Examples include creation date, file format, and timeline markers.

An export template controls which XMP metadata Premiere writes into the output file. For instance, a template can include selected XMP metadata from source files and add contact information plus rights-management information to each output file.

Fields that the current template does not explicitly enable are filtered out. Internal properties automatically filled with data by the creator application are the only exceptions; they are always included and cannot be edited.

To build a custom export template, choose New beside the Export Template menu. In the Export Template Editor dialog box, enable individual fields or full categories. Locate fields with the search field at the top of the Export Template Editor dialog box. Give the export template a descriptive name.

To revise an existing custom export template, choose it from the Export Template menu and select Edit.

After applying an export template, you may still enter manual values, which adds selected XMP metadata to the current encoding queue items.

Some fields cannot be edited and cannot be removed from output, including fields written automatically by the creator application. Premiere, for example, fills in the Dublin Core schema Format field and the Dynamic Media schema Video Frame Rate field to describe the output file accurately, and those fields are not user-editable. Values supplied by the current export template also appear as not editable; use a different template or change the template to alter them.

Any field with no data, whether from the template or manual entry, is left out of the exported XMP metadata. Empty fields are not written into the output file.

To open the Metadata Export dialog box, choose the Metadata dialog button in the Metadata section.
