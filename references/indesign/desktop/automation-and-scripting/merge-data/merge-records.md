# Merge records

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
