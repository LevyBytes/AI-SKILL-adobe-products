# Merge Data

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Automation and scripting; Data merging overview; Merge data; Data source files overview; Set up target documents; Add QR codes to merged documents; Add and edit data fields; Update, remove, or replace data source files; Preview records in the target document; Edit data field placeholders; Set content placement options; Merge records.

## Automation and scripting

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

### Document automation

Link and update content across documents

Automate workflows with scripts

Structure and tag documents for XML

Automated workflows overview

Import XML data into InDesign

## Data merging overview

In Adobe InDesign, data merging uses spreadsheet information together with one layout to produce many customized documents from that shared design.

Data Merge in Adobe InDesign joins a document to a data file (CSV or TXT), producing multiple personalized versions from the same layout. It works for letters, envelopes, labels, and similar pieces where the design stays consistent while text or images vary. The same workflow is also commonly called mail merge.

### How data merge works

Data merge keeps the layout separate from variable content, which helps you work faster and handle problems when they occur:

- Data source: a file that stores all changeable information in rows and columns. A column is a field, such as a company name or product price, while a row is one full record. These sources are spreadsheet files saved as plain text, and InDesign accepts comma-delimited (CSV), tab-delimited (TXT), or semicolon-delimited files. The first row must provide the field names used by the layout.
- Target document: an InDesign file containing data-field placeholders as well as boilerplate content, text, and other elements that stay identical in every merged document.
- Merged document: the resulting InDesign file, where the boilerplate content from the target document is repeated once for each data-source record.

### Data Merge panel

Open the Data Merge panel from Window > Utilities. The panel lists every data field with its name and type. After data fields are placed in the document, it also lists the page numbers where those fields occur.

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

## Data source files overview

Data source files supply Adobe InDesign with the variable information used to create personalized documents through data merge.

A data source file holds the values that InDesign reads during a data merge. It often comes from a spreadsheet or database, though it can also be built in InDesign or a text editor. Each row is one complete record, and each column is a field such as a company name or address. InDesign uses that structure to fill the document with different information for each generated version.

### Structure and format requirements

Save data source files in one of these text formats: comma-delimited (CSV), tab-delimited (TXT), or semicolon-delimited. Within those files, paragraph breaks mark separate records, while commas, tabs, or semicolons divide the fields. Text can be included, and so can file paths that refer to images stored on disk.

### Fields and records

Every row is a complete record, with delimiters separating the fields. When a comma or quotation mark needs to be part of a field value, wrap that text in quotation marks. A field cannot contain a line break. If content needs multiple lines, split it into separate fields such as <<Address1>> and <<Address2>>.

### Blank lines during merge

When merging, choose Remove Blank Lines For Empty Fields (Window > Utilities > Data Merge > Content Placement Options) to suppress empty lines. InDesign removes a line only when it is entirely empty; even one space keeps the line from being deleted.

### Text data considerations

In a comma-delimited file, text containing a comma or quotation mark must be enclosed in quotation marks, such as “Brady, Hunt, and Baxter, Inc.”. Without those quotation marks, InDesign reads each name as its own field.

## Set up target documents

Adobe InDesign target documents can be prepared with placeholder fields so variable data from source files can be merged into them.

After the data source is ready, configure the target document and add its data fields. The target document holds the placeholder text and graphics that appear in every output. After a data source is selected, its fields can be inserted, and during the merge InDesign creates a new document where the placeholders are replaced with your data. Data fields may be placed on either a parent page or a document page.

### Select and load the data source

Before fields are inserted, choose a data source in the Data Merge panel. A target document can be connected to only one data source.

Create a new target document, or open the document that will serve as the target.

Open the Data Merge panel (Window > Utilities > Data Merge).

Choose the Data Source from the Data Merge panel menu.

Enable Show Import Options if you want direct control over file interpretation. InDesign normally detects the delimiter and encoding correctly, but these settings can be changed when the automatic result is wrong.

Find the data source file and choose Open.

If Show Import Options is enabled, adjust the delimiter and encoding settings.

Check that the field names appear in the Data Merge panel. If an error appears or the fields are incorrect, revise the source file, then save it using comma-, tab-, or semicolon-delimited text.

Whenever the data source changes, update it so the target document shows the latest data.

### Insert text data fields

Create a text frame on either a document page or a parent page.

Put the insertion point in the text frame, or select existing text that should be replaced by a data field.

In the Data Merge panel, choose the text field name to insert.

Apply character and paragraph formatting to the placeholder text as needed. The formatting applied there is carried into every merged record.

Repeat the process for more text fields, placing punctuation, spaces, and static text between placeholders.

Text field placeholders use double angle brackets, such as <<Name>>, and take on the current text formatting. Insert them through the Data Merge panel instead of typing the field name manually.

### Insert image data fields

Image data fields create image placeholders that draw images from the data source during a merge.

Choose Window > Utilities > Data Merge.

Based on the placeholder's position in the layout, place it with one of these methods:

- Inline image placeholder: place an image field inside a text frame so the image becomes part of the text flow.
- Floating image placeholder: place an image field on a graphics frame that already exists when the result should remain independent of the text flow.
- Image placeholder in grouped or nested objects: place the image field on the target group, table cell, or nested object where the placeholder belongs.

Make sure the placeholder displays correctly. Image placeholders appear as frames showing the field name.

### Configure parent page placeholders for enhanced workflow

For complex projects, or layouts that will be refreshed often, put data fields on parent pages. This setup gives you tighter control, preserves the connection between the merged document and the data source, and allows the same merge settings to rebuild or refresh the layout later.

Open the Pages panel and go to the parent page that should hold the data fields.

For the text frame that contains those data fields, turn on Allow Parent Item Overrides On Selection from the Pages panel menu.

Add the data field placeholders using the same techniques used on document pages. In the merged result, the placeholders stay on the parent while document pages show them as overridden items.

Assign the parent page to page 1 of the document. Do not place data fields on parent pages and document pages at the same time.

When an error reports that no placeholders were found, verify that the fields are on the right parent page, because page 1 uses the right parent. After data or layout edits, choose Update Content In Data Fields to refresh the merged document.

### Preview and verify placeholder setup

Check records in preview before you merge so the layout shows the data correctly. With preview enabled, InDesign swaps field placeholders for real values from the source file. For instance, <<Company>> can display as Adobe.

In the Data Merge panel, select Preview to show actual data from the first record in place of placeholders.

Move through records with the navigation arrows to inspect different data values.

If the records contain problems such as typos or extra spaces, correct the source file in the application where it was created.

Before saving the target document, deselect Preview so the document returns to placeholder view.

## Add QR codes to merged documents

Use data merge with properly formatted CSV or TXT files to build QR codes automatically across document variations.

To add QR codes to merged output, define the QR information in the source file and merge that field into the layout. InDesign can generate QR codes for business cards, email addresses, text messages, web links, and plain text.

Open the data source file (CSV or TXT) with a spreadsheet application or text editor.

Create a column header that starts with the hash symbol (#), for example #QRCode or #ContactInfo.

For each record, enter QR code data in the required structure for the selected type:

- Plain text: type the text itself.
- Web hyperlink: URL:<url> (example: URL:http://www.google.com)
- Text message: SMSTO:<phone number>:<message> (example: SMSTO:9818143551:Hi)
- Email: MATMSG:\nTo:<email address> (example: MATMSG:\nTo:johndoe@adobe.com\nSUB:Hi;\nBODY:;;)
- Business card (vCard): BEGIN:VCARD\nVERSION:2.1\nN:Smith;John\nFN:John Smith\nORG:Adobe\nTITLE:Engineer\nTEL;CELL:+919876543210\nTEL;WORK;VOICE:123456789\nADR;WORK:;;Street ABC;Seattle;Washington;98101;US\nEMAIL;WORK;INTERNET:abc@adobe.com\nURL:www.adobe.com\nEND:VCARD

Save the source as CSV or TXT, with comma, tab, or semicolon used as the delimiter.

Display the Data Merge panel by selecting Window > Utilities > Data Merge.

Choose Select Data Source, pick the data file that includes the QR field details, and select Open.

Click the QR code placeholder in the document.

From the Data Merge panel menu, choose Create Merged Document.

## Add and edit data fields

Insert field placeholders and format them so merged data appears the way you need in an Adobe InDesign document.

Once a data source is selected in the Data Merge panel, add field placeholders to the target document at the positions where variable content should appear. Text placeholders appear in double angle brackets, such as <<name>>, and image fields appear as image frames. Formatting applied to those placeholders controls the look of merged results. The Data Merge panel lists every field available from the source and uses icons to distinguish text fields from image fields.

### Insert text data fields

Draw a text frame on the document page or parent page where the variable text should be placed.

Set the insertion point at the precise field location inside the text frame, or select existing text if the field should replace it.

In the Data Merge panel (Window > Utilities > Data Merge), click the field name to insert. Manually typing a field name, or editing field text that already exists, does not create a valid field. Use the Data Merge panel for field insertion so the merge can resolve the field correctly.

To style the field placeholder, select it and apply character formatting such as font, size, color, or style.

### Insert image data fields

For a floating image, use the Selection tool to choose an existing empty frame or graphics frame.

From the Data Merge panel, drag the image field name, identified by an image icon, onto that selected frame.

Adjust the frame size to set the dimensions used by merged images.

For an inline image, put the insertion point inside a text frame, then choose the image field name in the Data Merge panel.

Tip

To obtain the complete image path for a data source file, place any image in InDesign, then use the Links panel selection and choose Copy Info > Copy Full Path from the panel menu. This method is useful while preparing data source files that refer to server-stored images.

### Add image fields in the data source file

Open the data source file in a spreadsheet application or text editor.

Begin the column header name with @, such as @Photos or @Logos. If Excel rejects a field that starts with @, type an apostrophe before it, for example '@Photos, so Excel accepts the entry.

Add the file path for each image below that header.

Save the data source as comma-delimited (CSV), tab-delimited (TXT), or semicolon-delimited text.

To verify an image path, get the complete path through InDesign:

- Use File > Place to place an image in an InDesign document.
- Click the image after it is placed.
- Use Window > Links to display the Links panel.
- From the panel menu, choose Copy Info > Copy Full Path.
- Put the copied path in the data source file, then adjust it to the required format.

### Path format examples

### Windows

### macOS

Note

- InDesign accepts absolute paths, meaning full paths from the root directory, as well as relative paths based on the data source file location.
- By default on macOS, InDesign writes paths in POSIX-style form with forward slashes.
- For macOS workflows, POSIX-style paths provide compatibility with current and later InDesign releases.

### Edit or remove field placeholders

To revise formatting, select the complete field placeholder, including the angle brackets, then apply different character or paragraph formatting.

To swap fields, select the existing placeholder and choose another field name in the Data Merge panel.

To delete a field, select its placeholder and press Backspace or Delete.

When all needed fields have been inserted and formatted, use Preview at the bottom of the Data Merge panel to inspect the merged data. Move between records with the navigation buttons and confirm that the formatting displays as expected.

### Update data fields

If a merged document uses data placeholders on parent pages, you can adjust the layout and still refresh the data values afterward. Choose Update Content in Data Fields to update the data while keeping the current layout intact. This command is available only in merged documents whose placeholders are on parent pages.

Edit the data source file as needed, then save and close it.

In InDesign, open the merged document that needs the update.

Select Window > Utilities > Data Merge.

From the Data Merge panel menu, select Update Content in Data Fields. During the update, InDesign writes changes to a log file. This workflow is best when records in the data source file are edited or added only. If you add placeholder fields, add fields to the data source, or modify settings in the Create Merged Document dialog box, use Create Merged Document to make a new merged document.

## Update, remove, or replace data source files

Update, remove, or replace data source files in Adobe InDesign.

After a target document is linked to a data source file, you might need to refresh it with new records, break the link, or point the design at another data source. These tasks matter when the source data changes or when the same target document design is reused for another recipient list.

Updating a data source keeps the existing field positions and formatting in the target document. When you replace the data source, InDesign tries to pair field names in the new file with placeholders already in the layout.

### Update an existing data source

Using a spreadsheet or database application, edit and save the data source file in .csv, .txt, or semicolon-delimited format.

Select Window > Utilities > Data Merge to display the Data Merge panel.

From the Data Merge panel menu, select Update Data Source.

### Remove a data source connection

Select Window > Utilities > Data Merge.

From the Data Merge panel menu, select Remove Data Source.

### Replace with a different data source

Select Window > Utilities > Data Merge.

Open the Data Merge panel menu, then choose the Select Data Source option.

Choose the replacement data source file and select Open.

If InDesign cannot identify some fields, delete those placeholder fields and insert them again.

## Preview records in the target document

Review data merge records before running the merge in Adobe InDesign.

Record preview shows how information from the source file will appear in the target document. While preview is active, actual data replaces field placeholders, which helps expose formatting problems or content mistakes before you merge. When preview reveals typographical errors or extra spaces, update the source file data before continuing.

Select Window > Utilities > Data Merge.

Select the Preview option.

Inspect the document while actual data is shown in place of the placeholders.

Note

In the Data Merge dialog box, use the navigation controls to step through records and inspect different entries. To jump to a particular record, type its number into the navigation field and confirm the entry.

## Edit data field placeholders

Format and change placeholder text in Adobe InDesign to control the appearance of merged data.

When a text data field is added to a document, InDesign uses the formatting attributes active at the insertion point, such as font and size, for the placeholder text.

Choose the placeholder text, then adjust its formatting in the Character panel (Window > Character).

To replace a placeholder, select the placeholder or its data and then choose a different field name in the Data Merge panel. You can remove a placeholder by selecting it and pressing Delete. In Story Editor view, placeholders are shown like hyperlinks. Some data merge options are unavailable in this view.

## Set content placement options

Set default Adobe InDesign behavior for image placement, frame fitting, and data merge handling.

The Content Placement Options dialog box controls defaults for the current document or for future projects. It includes settings for image placement, linked versus embedded images, removal of blank lines for empty fields, and the maximum record count allowed in one merged document.

Open the target document, or close every document if the settings should become defaults for later projects.

Select Window > Utilities > Data Merge.

From the Data Merge panel menu, choose Content Placement Options.

Change the content placement options.

Select OK to store the settings.

## Merge records

Create a merged document or PDF in Adobe InDesign by combining a formatted target document with records from the data source file.

After the target document is formatted and the data fields are in place, merge the data into either a new InDesign document or a PDF. InDesign substitutes source data for the fields during the merge and generates new output from the target document. If parent-page placeholders are used in the target, those items are copied onto the parent pages in the merged document.

Open the target document, then use one of these commands:

- For a merged InDesign document, select Create Merged Document from the Data Merge panel menu.
- For direct PDF output, choose Export To PDF from Data Merge panel menu.

In the Records tab, decide which records to merge by selecting All Records, Single Record, or by entering a Range.

Under Records Per Document Page, set how records are placed on each page: choose Single Record for one record on a page, or Multiple Records when a page should contain more than one record, such as mailing labels.

Multiple records per page cannot be merged when data fields are placed on a document page in a multi-page document, or when data fields are placed on more than one parent page.

Enable optional warnings and reports:

- Generate Overset Text Report With Document Creation to record overset text.
- Alert When Images Are Missing to warn when images are absent.

Select Alert When Images Are Missing if a warning should appear when one or more images cannot be located.

If Multiple Records is selected, open the Multiple Record Layout tab to configure layout settings:

- For Margins, enter values that define the distance between margin guides and each page edge.
- For Layout Of Records, choose Rows First or Columns First, then enter the column and row spacing.

Use Preview Multiple Record Layout to inspect layout changes. The page navigation buttons let you preview other records.

Open the Options tab, specify the placement options, and select OK.

Note

- InDesign generates a new document or PDF containing all merged records. If the data source points to unsupported file formats or missing images, correct the file paths, move files to the proper locations, or update the data source.
- When merging directly to a PDF, the options used for a merged InDesign document still apply. The resulting PDF uses PDF XObjects for static page content, which reduces file size and improves efficiency.

### Limits when using multiple records

Use the Multiple Records option when more than one record should be placed on a single page, as with mailing labels. The record appearance is controlled by the layout setup. Multiple Records includes these limits:

- Multiple records cannot be merged if fields sit on multiple parent pages or on document pages within a multi-page document.
- Every placeholder needs the same size.
- If records are deleted, the remaining records do not shift into the empty space.
