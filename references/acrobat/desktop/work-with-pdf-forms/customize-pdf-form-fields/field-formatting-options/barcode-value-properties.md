# Barcode value properties

Only Barcode field properties carry the Value tab, which puts forward these choices:

- Encode using: Lets you pick how the data is encoded. The choices cover:
- XML: Lays the data out in standard XFDF format and spins up a JavaScript script on its own.
- Tab Delimited: Stores fields as tab-delimited values, handy for packing more into the barcode or for dropping the data into database or spreadsheet tables. A JavaScript script is produced automatically.
- Pick: Brings up a dialog box where you choose which user data fields the barcode encodes.
- Include field names: Comes into play only with tab-delimited encoding. Writes the field names as the opening line of the barcode contents, with their values written underneath.
- Custom calculation script: Shows the default script. Choose Edit to bring up the JavaScript Editor for your own calculation scripts.
  - Shows the path leading to the PDF form.
  - Lets you edit the URL pointing at the published form.
  - Helps rebuild a digital copy of the finished form by joining the form template with the data a user supplied.
  - Keeps the link intact between the form template and the barcode data files.
