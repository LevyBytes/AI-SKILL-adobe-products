# Discard column if empty

A table column may be dropped whenever every element of an input-json array is empty or null.

**How to use**

Attach a discard-if-empty construct carrying a boolean false/true to the template tag so the discard-if-empty behavior turns on for that column.

JSON representation of the input data:

```json
{
  "project": [
    {
      "name": "ABC Infra",
      "milestone": "First Milestone",
      "dateComplete": "24/06/2021",
      "notes": ""
    },
    {
      "name": "ABC Infra",
      "milestone": "Second Milestone",
      "dateComplete": "24/06/2022",
      "notes": ""
    },
    {
      "name": "DEF Computer Labs",
      "milestone": "First Milestone",
      "dateComplete": "12/12/2021",
      "notes": ""
    },
    {
      "name": "DEF Computer Labs",
      "milestone": "Second Milestone",
      "dateComplete": "12/12/2021",
      "notes": ""
    }
  ]
}
```

[Figure: Discard if empty with table markers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/discard-if-empty-table-markers.png)
