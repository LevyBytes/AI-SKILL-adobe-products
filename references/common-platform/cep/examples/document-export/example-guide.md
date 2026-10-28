# CEP document export example

Use this legacy CEP/ExtendScript example with a compatible Photoshop, Illustrator or InDesign host. The retained manifest declares CSXS 7.0 and the original host-version requirements; it is not a UXP plugin or a promise of support in every current host version.

Keep the files in their shown relative layout. Add the matching CEP `CSInterface.js` library at `client/js/lib/CSInterface.js` before loading the extension. Its source is the Adobe CEP Resources repository. The host entrypoint includes three sibling JSX helpers.

- **Save original** calls the active document's native `save()` method. It updates that saved document; first use the application's Save As command for an unnamed document.
- **PDF**, **JPG** and **PNG** export beside the original using the corresponding filename extension. The example refuses to overwrite an existing destination or the original document.
- Illustrator uses PDF save options or JPEG/PNG8 export options. Its image export API appends the extension, so the helper passes an extension-free export base. PDF optimization, JPEG blur2/matte/quality100 and PNG matte match the source example.
- Photoshop saves PDF/JPEG/PNG copies. The PDF preserves the color profile and web optimization; JPEG uses baseline format, no matte and quality1; PNG is non-interlaced.
- For the separate Photoshop Save for Web branch, call `exportFile("web-jpg")` in the host. It uses JPEG quality60 and includes the profile. It is not selected by Save original.
- InDesign uses the documented PDF_TYPE, JPG and PNG_FORMAT export formats.

The panel passes a JSON-quoted format string to the host. The host returns an explicit success path or error text. No undefined format is treated as a successful export.

The Adobe source and these adapted example files retain their Apache 2.0 notices. Test host behavior on copies of documents before adopting the example in an extension.
