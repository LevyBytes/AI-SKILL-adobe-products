# Types of controls - Creating multi-column lists

For list controls such as ListBox, DropDownList and TreeView, the available choices are represented by ListItem objects. A choice can use a localizable text string, an image, or both, as determined by the ListItem text and image properties; see Displaying images.

To make a ListBox multi-column, set the numberOfColumns creation parameter. The default column count is 1. When more than one column is requested, creation parameters can also control whether headers appear and what header text each column uses.

With multiple columns, each ListItem object added to the box represents a selectable row. The ListItem object's text and image provide the first-column label, while subitems supplies the labels for the remaining columns in that row.

subitems is an array whose length is one less than the column count. The first entry, ListItem.subitems[0], therefore provides the second-column label. Each entry is a JavaScript object containing two properties:

```javascript
{ text : displayString , image : imageFileReference }
```

For example, this fragment defines a two-column list box and assigns labels in both columns for both entries:

Supply `~/Desktop/Step1.png` for the optional second-row image, or omit that image assignment.

```javascript
var dlg = new Window("dialog", "Two-column list");
// create list box with two titled columns
var list = dlg.add ("ListBox", [0, 0, 150, 75], "asd",
{numberOfColumns: 2, showHeaders: true,
columnTitles: ["First Name", "Last Name"]});
// add an item for the first row, with the label value for the first column
var item1 = list.add ("item", "John");
// add the label value for the second column in that row.
item1.subItems[0].text = "Doe";
// add an item for the second row, with the text for the first column label
var item2 = list.add ("item", "Jane");
// add the label text and image for the second column in the second row
item2.subItems[0].text = "Doe";
item2.subItems[0].image = File ("~/Desktop/Step1.png");
dlg.show();
```

The resulting control appears as follows:

In that control, headers are visible, and the second column in the second row combines text with an image.
