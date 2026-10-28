# Changes Across Versions - Acrobat X changes

Use these release-specific changes when adapting scripts or plug-ins to Acrobat X:

- Select language features supported by the target runtime. [JavaScript 1.8 support](new-java-script-version.md).
- Adjust named menus and extension-button placement. [Menu restructuring](impact-of-acrobat-menu-restructuring-on-java-script-apis.md).
- Read a local file with optional Base64 encoding. [util.readFileIntoStream](new-util-method.md).
- Update code using removed search properties. [search property changes](changes-to-search-object.md).
- Remove obsolete query word-option constants. [SearchExecuteQuery options](changes-to-search-execute-query.md).
- Handle a legacy availability check that always returns false. [SearchIsLegacySearchAvailable](function-search-is-legacy-search-available-deprecated.md).
- Choose Acrobat 9 or 10 PDF optimizer targets. [PDFOptPDFVersion additions](enhancements-to-pdf-opt-pdf-version.md).
- Review attachment-safety errors, output conversions and signing additions. [Doc enhancements](enhancements-to-doc-object.md).
- Run document signatures only in supported event contexts. [PAdES signature support](signature-support-for-emerging-p-ad-es-etsi-esi-standard.md).
- Avoid the removed database interface. [ADBC support removal](adbc-support-removed-from-documentation.md).

Use the [JavaScript API reference](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/index.html) and Developing Acrobat Applications Using JavaScript for complete contracts.
