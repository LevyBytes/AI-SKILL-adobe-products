# Export and thin XMP metadata

Metadata is descriptive information attached to a media file. It can include details such as creation date, file format, and timeline markers. From the Metadata Export dialog box, choose which XMP metadata is included with exported media.

To open Metadata Export, select the Metadata button at the lower-right of the Export Settings dialog.

Use the Metadata Export dialog box to control how metadata is included in or customized for the export.

Use the Metadata Export dialog box to control how metadata is included in or customized for the export. Note

The Metadata category in the Preferences dialog box offers many of these same operations. Changes made there do not affect selected items already in the encoding queue, but templates and rules can later be assigned from Metadata Export.

For related guidance, see working with metadata in Premiere.

In the Export Options menu, choose how XMP metadata is stored with the exported file:

- Embed in Output File: stores XMP metadata inside the exported file.
- Create Sidecar File: writes XMP metadata to its own file beside the exported file.
- Embed in Output File and Create Sidecar File: puts XMP metadata inside the exported file and also writes a separate sidecar file.
- Minimum required: includes only the essential metadata required for basic playback and identification.
- Off: exports no source XMP metadata. Basic metadata about the exported file, including export settings and start timecode, is still exported even when None is selected.

Note

For formats that cannot embed XMP data, the Embed In Output File option is unavailable.

An export template determines which XMP metadata is written to the output file. For example, a template can include selected XMP metadata from source files and add contact or rights-management information to every output file.

Any fields not explicitly enabled by the current template are filtered out. Internal properties filled automatically by the creator application are the only exceptions; those are always included and cannot be edited.

To make a custom export template, select New beside the Export Template menu. In the Export Template Editor dialog box, enable individual fields or categories. Use the search field near the top of that dialog box to locate particular fields. Give the export template a descriptive name.

To modify a custom export template, choose it from the Export Template menu and select Edit.

Once an export template is applied, you can still type manual values that add specific XMP metadata to the currently selected encoding queue items.

Some fields cannot be edited or removed from output because the creator application writes them automatically. For example, Adobe Media Encoder accurately describes the output file by setting Format in the Dublin Core schema and Video Frame Rate in the Dynamic Media schema; those fields are not user-editable. Values supplied by the current export template also appear as uneditable. To change them, edit the template or apply a different one.

Fields with no data from either the template or manual entry are omitted from exported XMP metadata. Empty fields are skipped in the final output.

### More like this

- Encode and export video and audio with Media Encoder (related workflow)
- Create custom presets for Media Encoder
