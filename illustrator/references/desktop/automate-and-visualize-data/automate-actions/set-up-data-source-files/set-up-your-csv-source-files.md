# Set up your CSV source files

In a comma-delimited (.csv) file, paragraph breaks separate records, while commas or tabs separate fields. A data source file may also contain text or disk paths that point to images. Set up the CSV this way before import so Illustrator can identify each variable type.

Open your spreadsheet.

Enter the data field name in the spreadsheet's first row. Then use these conventions:

- Begin the data field name with an "at" symbol (@) when the field inserts text or paths to image files. The @ symbol is needed only on the first line; later lines should contain the image paths.
- Prefix graph fields with a "percentage" symbol (%) and visibility fields with a "hashtag" symbol (#).
- To control whether an object is visible, enter true or false for each data field.

Note

Spreadsheet data field names should not include blank spaces. For example, use Company_Name as the data field, not the spaced field label Company Name instead.

(Windows) Example of image and graph references in the data source file

| Name | Age | @Photos | %Graphs | #Visibility |
| --- | --- | --- | --- | --- |
| Bill Tucker | 36 | C:\Photos\BillTucker.jpg | C:\Photos\BillTucker.csv | True |
| Dat Nguyen | 53 | C:\MyDocuments\dat.jpg | C:\MyDocuments\dat.csv | True |
| Maria Ruiz | 26 | C:\Photos\Ruiz.jpg | C:\Photos\Ruiz.csv | False |

(macOS) Example of image and graph references in the data source file

| Name | Age | @Photos | %Graphs | #Visibility |
| --- | --- | --- | --- | --- |
| Bill Tucker | 36 | /Users/photos/BillTucker.jpg | /Users/photos/BillTucker.csv | True |
| Dat Nguyen | 53 | /Users/family/photos/dat.jpg | /Users/family/photos/dat.csv | True |
| Maria Ruiz | 26 | /Users/alpha/photos/Ruiz.jpg | /Users/alpha/photos/Ruiz.csv | False |

Enter your data into the spreadsheet.

Do one of the following:

- Save spreadsheets created using the latest version of Microsoft Excel (2016 release) to the following file formats:
- CSV (Comma-delimited) (\*.csv)
- CSV (MS-DOS) (\*.csv)
- Save spreadsheets created using Apple Numbers to CSV format with Unicode (UTF-8) encoding.

Note

Illustrator currently imports CSV files exported in the formats listed above. Other CSV formats, including Mac Comma Separated (.csv), are not supported for data merge.
