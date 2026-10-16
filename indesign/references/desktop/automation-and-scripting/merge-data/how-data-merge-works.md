# How data merge works

Data merge keeps the layout separate from variable content, which helps you work faster and handle problems when they occur:

- Data source: a file that stores all changeable information in rows and columns. A column is a field, such as a company name or product price, while a row is one full record. These sources are spreadsheet files saved as plain text, and InDesign accepts comma-delimited (CSV), tab-delimited (TXT), or semicolon-delimited files. The first row must provide the field names used by the layout.
- Target document: an InDesign file containing data-field placeholders as well as boilerplate content, text, and other elements that stay identical in every merged document.
- Merged document: the resulting InDesign file, where the boilerplate content from the target document is repeated once for each data-source record.
