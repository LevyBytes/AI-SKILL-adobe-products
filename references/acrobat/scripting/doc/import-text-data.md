# importTextData

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | F |

Pulls a single row of data out of a text file. Every row has to be tab delimited. That first row of the text file holds the column names for the tab-delimited data — names that double as field names for text fields living in the PDF file. Data rows count from 0, so the opening data row is row zero (the column-name row does not figure in the count). As a data row comes in, each column's datum becomes the field value of the field matching the column the datum belongs to.


For the export counterpart to this method, see exportAsText.

Note

(Acrobat 8.0) Supply cPath and this method runs only during batch and console events. See Privileged context. A discussion of JavaScript events sits in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cPath | (optional) A relative device-independent path leading to the text file. Skip it and the user gets prompted to locate the text data file. |
| nRow | (optional) The 0-based index of whichever data row gets imported, the header row aside. Skip it and the user gets prompted to choose the row to import. |

Returns

An integer return code.

| Returns | code Description |
| --- | --- |
| -3 | Warning: Missing Data |
| -2 | Warning: User Cancelled Row Select |
| -1 | Warning: User Cancelled File Select |
| 0 | No Error |
| 1 | Error: Cannot Open File |
| 2 | Error: Cannot Load Data |
| 3 | Error: Invalid Row |

Example 1: Picture text fields carrying the names "First", "Middle", and "Last", paired with a data file whose opening row lays out those same three strings — "First", "Middle", and "Last" — split by tabs, then four more rows of tab-separated name data beneath.

Example tab-delimited input:

```text
First    Middle    Last
A.       C.        Robat
T.       A.        Croba
A.       T.        Acrob
B.       A.        Tacro
```

```javascript
// Import the first row of data from "myData.txt".
this.importTextData("/c/data/myData.txt", 0)
```

Example (continued)

A mouse-up action for a button is what the code below supplies. Each button click cycles through the text file, filling the three fields "First", "Middle", and "Last" with name data.

```javascript
if (typeof cnt == "undefined") cnt = 0;
    this.importTextData("/c/data/textdata.txt", cnt++ % 4)
```

A spreadsheet or a database can stand in for the data file.
