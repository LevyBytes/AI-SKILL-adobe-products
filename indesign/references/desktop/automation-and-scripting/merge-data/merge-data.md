# Merge Data

Covers: Automation and scripting; Data merging overview; Merge data; Data source files overview; Set up target documents; Add QR codes to merged documents; Add and edit data fields; Update, remove, or replace data source files; Preview records in the target document; Edit data field placeholders; Set content placement options; Merge records.

### Merge data

Data merging overview

Merge data

Data source files overview

Set up target documents

Add QR codes to merged documents

Add and edit data fields

Update, remove, or replace data source files

Preview records in the target document

Edit data field placeholders

Set content placement options

Merge records

## Merge data

Adobe InDesign can merge data to build personalized documents from a single design.

With date merge in InDesign, a spreadsheet can be connected to a template so many customized pieces, such as letters or labels, are created with less manual work. Add placeholders for names, addresses, or images, check the record preview, and InDesign generates the variations. This turns one layout into hundreds of custom versions with only a few actions.

Before starting

- Create the data source file with a spreadsheet format that InDesign supports.
- In row one, add column headers, for example Company_Name, Address, City, State, Postal_Code.
- For image fields, start the column name with an @ symbol, for example @Photo, and enter each image's full file path.
- Store the file as one of these supported formats: comma-delimited (CSV), tab-delimited (TXT), or semicolon-delimited text.

Open an existing target document or create a new one.

Choose Window > Utilities > Data Merge to display the Data Merge panel.

Choose Data Source.

Insert text placeholders:

- With the Type  tool, click inside a text frame.
- Choose a field name in the Data Merge panel to place it at the cursor.
- Apply character and paragraph styles to the placeholder text. The merged content uses that formatting.

Insert image placeholders:

- Draw a graphics frame with the Rectangle Frame  tool.
- Place an image field from the Data Merge panel inside the frame.
- Create placeholders for every text field and image field you need.

Preview the merged data:

- Enable Preview in the Data Merge panel to inspect how records will appear.
- Use the navigation arrows to step through records.
- Refine text frames, image frames, or layout spacing.
- Disable Preview to go back to the placeholder view.

Set content placement options:

- Choose Content Placement Options in the Data Merge panel.
- Set image fitting behavior and turn on removal of blank lines for empty fields.
- Choose OK to keep the settings.

Create the merged document:

- Choose Create Merged Document in the Data Merge panel.
- Choose All Records or enter a range in the Records tab.
- Choose Single Record for full-page designs, or Multiple Records for items such as labels or cards.
- If Multiple Records is used, define margins, spacing, and whether rows or columns come first.
- In the Options tab, confirm the image fitting choices and enable Remove Blank Lines For Empty Fields when optional fields are present in the data.
- Choose OK to create the merged document.

Tip

To avoid making an intermediate InDesign file, choose Export to PDF from the Data Merge panel menu. The PDF is generated more efficiently because static layout elements are reused.
