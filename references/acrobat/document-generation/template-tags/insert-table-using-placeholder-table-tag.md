# Insert Table using Placeholder Table Tag

**DEPRECATED.** Rather than the placeholder table tag approach shown below, please use [Table Tag with Markers](../table-tag-with-markers/reference-index.md).

By repeating across an array of objects from the input data, a table's rows can be filled in dynamically.

**How to insert Tables**

[Video](https://images-tv.adobe.com/mpcv3/5158/d58772af-7a62-49fa-a098-12b11a27fb71_1615917048.854x480at800_h264.mp4#t=3)

Whatever formatting the table carries in the document template is preserved in the output document.

JSON representation of the input data:

```json
{
  "subscriptions": [
    {
      "name": "Adobe Document API",
      "price": "99",
      "quantity": "1",
      "amount": "99"
    },
    {
      "name": "Adobe Marketing API",
      "price": "199",
      "quantity": "2",
      "amount": "398"
    }
  ]
}
```

**Usage**

Build a table with the column headers you need. Add one row to it and, beneath the appropriate column headings, drop in template tags that reference the properties of the array's objects.

A template tag should name the array first, then the property name of that array's objects. _\{\{subscriptions.name\}\}_ is one such template tag, where _subscriptions_ points to the array of objects while name points to a property of one of those objects.

[Figure: Table created with column headers and template tags for each subsequent rows](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table.png)

By repeating across the named array of objects, the table's rows are filled in dynamically in the output document.

[Figure: Table with template tags replaced with actual values in the rows](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table-result.png)
