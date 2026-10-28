# Add QR codes to merged documents

Use data merge with properly formatted CSV or TXT files to build QR codes automatically across document variations.

To add QR codes to merged output, define the QR information in the source file and merge that field into the layout. InDesign can generate QR codes for business cards, email addresses, text messages, web links, and plain text.

Open the data source file (CSV or TXT) with a spreadsheet application or text editor.

Create a column header that starts with the hash symbol (#), for example #QRCode or #ContactInfo.

For each record, enter QR code data in the required structure for the selected type:

- Plain text: type the text itself.
- Web hyperlink: URL:&lt;url&gt; (example: URL:http://www.google.com)
- Text message: SMSTO:&lt;phone number&gt;:&lt;message&gt; (example: SMSTO:9818143551:Hi)
- Email: MATMSG:\nTo:&lt;email address&gt; (example: MATMSG:\nTo:johndoe@adobe.com\nSUB:Hi;\nBODY:;;)
- Business card (vCard): BEGIN:VCARD\nVERSION:2.1\nN:Smith;John\nFN:John Smith\nORG:Adobe\nTITLE:Engineer\nTEL;CELL:+919876543210\nTEL;WORK;VOICE:123456789\nADR;WORK:;;Street ABC;Seattle;Washington;98101;US\nEMAIL;WORK;INTERNET:abc@adobe.com\nURL:www.adobe.com\nEND:VCARD

Save the source as CSV or TXT, with comma, tab, or semicolon used as the delimiter.

Display the Data Merge panel by selecting Window > Utilities > Data Merge.

Choose Select Data Source, pick the data file that includes the QR field details, and select Open.

Click the QR code placeholder in the document.

From the Data Merge panel menu, choose Create Merged Document.
