# Nested Tables

Placing table-marker tags within another table lets you build nested tables.

JSON representation of the input data:

```json
{
  "board": "CBSE",
  "school": [
    {
      "name": "ABC Public School",
      "details": {
        "contact": "9XXXXXXXX8",
        "address": "New Delhi",
        "sportsAvailable": "No"
      },
      "class": [
        {
          "name": "XI",
          "strength": 65
        },
        {
          "name": "XII",
          "strength": 40
        }
      ]
    },
    {
      "name": "XYZ Public School",
      "details": {
        "contact": "7XXXXXXXX5",
        "address": "Mumbai",
        "sportsAvailable": "Yes"
      },
      "class": [
        {
          "name": "X",
          "strength": 45
        },
        {
          "name": "XI",
          "strength": 38
        },
        {
          "name": "XII",
          "strength": 82
        }
      ]
    }
  ]
}
```

[Figure: Nested tables with table markers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/nested-tables.png)

Give each table its own set of table markers. Above, the `school` tag is the array that drives expansion of the outer table. The inner table is then expanded per school against that school's `class` tag, supplied as the array field in the inner table marker.

When you want data that sits in one of the outer tables, name the context holding that data through the **eval** construct alongside the tag. Above, the `contact` tag lives under school yet has to appear in the `class` table, so the `school` tag is added to the tag's **eval** construct.

- Only the `Table Markers` mechanism supports Nested Tables.
- In the inner table, the Array Field of `table-start` must be a nested field of the array field that the outer table's `table-start` marker uses.
- Arguments to the **eval** construct may be the `ARRAY_FIELD` values of the outer tables, or the special argument **$**, which evaluates the tag against the input JSON.

In the same spirit, when a condition has to be checked against data outside the current table, provide that context via the **eval** construct.

[Figure: Table Markers With different context](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table-markers-context-input.png)

- Above, the **eval** construct is paired with the `board` tag. As noted earlier, **$** points the context at the input json itself. Per that input json, the tag therefore resolves to its value **CBSE**.

- The **eval** construct also appears with conditions above; both of the conditions shown carry `school` as their context, so each conditional expression resolves against the matching school.

[Figure: Table Markers with different context output](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table-markers-context-output.png)

- Leaving the **eval** construct off a condition makes it resolve against whichever table is currently expanding.
- For conditions, the **eval** construct accepts the very same arguments that text tags do.
