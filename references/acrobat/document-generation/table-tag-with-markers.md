# Table Tag with Markers

Insert table tags into a document by means of Table markers

Inserting tables relies on a pair of constructs known as **Table Markers**, which generate the table tags within the document.

- table-start `{% table-start ARRAY_FIELD %}`
- table-end `{% table-end %}`

**How to use**

- Within the table row you want expanded dynamically, drop the `table-start` marker into the first cell and the `table-end` marker into that row's last cell.
- An array field (`ARRAY_FIELD`) is required by the `table-start` marker; that array drives how rows/columns get built, depending on the table's orientation.
- Whatever sits between the markers is filled in dynamically by looping over the array of objects tied to the tag (`ARRAY_FIELD`) named in the `table-start` marker.

JSON representation of the input data:

```json
{
  "school": [
    {
      "name": "ABC Public School",
      "strength": "128",
      "address": "New Delhi"
    },
    {
      "name": "DEF Public School",
      "strength": "83",
      "address": "Hyderabad"
    },
    {
      "name": "XYZ Public School",
      "strength": "165",
      "address": "Mumbai"
    }
  ]
}
```

[Figure: Table created with table start and end constructs](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table-tag-with-markers.png)

Here `school` is the `ARRAY_FIELD` whose entries fill the table. One row gets generated per school, with the data populated to match.
