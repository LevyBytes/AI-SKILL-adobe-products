# Known limitations

- Missing fonts in layers are not detected automatically by the API. To avoid replacement when fonts may be absent, include an `href` to the font in `options.fonts`. For more information about supplying custom fonts, see [Font handling](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/edit-text/index.md#font-handling).
- Verify that the input file is a PSD containing at least one text layer.
- Some text attributes, including tracking, leading, and kerning, do not preserve their original values.
