# buttonImportIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | Yes | Not available in Reader |

Brings in a button's appearance from a separate PDF file. With neither optional parameter supplied, the user gets prompted to choose a file.

See also buttonGetIcon, buttonSetIcon, addIcon, getIcon, importIcon, and removeIcon.

Note

(Acrobat 8.0) When cPath is supplied, this method runs only during batch and console events. See Privileged context. JavaScript events are covered in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cPath | (optional, Acrobat 5.0) The file's device-independent path. From Acrobat 6.0 on, Acrobat first tries to open cPath as a PDF file. Failing that, it attempts to convert the file to PDF out of one of the recognized graphics formats (BMP, GIF, JPEG, PCX, PNG, TIFF) and then bring the converted file in as a button icon. |
| nPage | (optional, Acrobat 5.0) Which 0-based page of the file becomes the icon. It defaults to 0. |

Returns

An integer, as follows:

1: The user cancelled the dialog

0: No error

-1: The chosen file would not open

-2: The chosen page was not valid

Example (Acrobat 5.0)

Assume a connection to an employee information database, reached through the ADBC object and its related objects. One employee record gets pulled, and three of its columns come into play: FirstName, SecondName, and Picture. That Picture column stores a device-independent path to the employee's picture, held in PDF format. The script could read like this:

```javascript
var f = this.getField("myPicture");
f.buttonSetCaption(row.FirstName.value + " " + row.LastName.value);
if (f.buttonImportIcon(row.Picture.value) != 0)
    f.buttonImportIcon("/F/employee/pdfs/NoPicture.pdf");
```

The "myPicture" button field is configured to show icon and caption both. Joining the employee's first and last names produces the picture's caption. Note too that a fallback icon can be brought in should fetching the icon fail.
