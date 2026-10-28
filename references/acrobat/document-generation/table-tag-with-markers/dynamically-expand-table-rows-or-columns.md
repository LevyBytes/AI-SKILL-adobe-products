# Dynamically expand table rows or columns

On any tag inside a table cell, set the cell extension property to control whether rows grow vertically or columns grow horizontally.

```json
{
  "subscriptions": [
    {
      "name": "Adobe Document API",
      "price": "99"
    },
    {
      "name": "Adobe Marketing API",
      "price": "199"
    },
    {
      "name": "Adobe Design API",
      "price": "299"
    }
  ]
}
```

- **Repeat table rows vertically with table markers** - Vertical extension under table markers is enabled by attaching _cell-extension(vertical)_ to a tag.

[Figure: Vertical extension with table markers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table-markers-vertical-extension.png)

- **Repeat table columns horizontally with table markers** - For horizontal extension under table markers, attach _cell-extension(horizontal)_ to a tag and put the table start and end markers at the start and end of the column rather than the row.

[Figure: Horizontal extension with table markers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table-markers-horizontal-extension.png)
