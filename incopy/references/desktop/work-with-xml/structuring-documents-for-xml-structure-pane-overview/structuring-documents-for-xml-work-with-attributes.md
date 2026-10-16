# Structuring documents for XML — Work with attributes

Attributes add information to XML elements. Each one has both a name and a value. In the Structure pane, attributes are visible, but they are not placed into the document and do not become document content. Add attributes to elements when downstream files or applications need that data from XML files created in InCopy .

When an image is tagged, InDesign automatically adds an href attribute whose value records the image file's disk location. Other files and applications can use that href attribute to find the image on disk and display it.

An attribute includes a name (href, in this case) and a value.

You can add attributes to elements other than the DOCTYPE element (a DTD file), comments, and processing instructions. As one example, create an attribute named keywords if another application will need searchable keywords. You can also use attributes for substituted text, article titles, or other information about the content.

Note

When working with a DTD file, check its contents to determine which attributes are permitted. Like tag names, attribute names have to follow the DTD.

Note

InCopy recognizes special namespace attributes for paragraph or character styles, table and table-cell styles, and whitespace control. For details, consult the XML technical reference and www.adobe.com/go/learn_id_XMLscript.
