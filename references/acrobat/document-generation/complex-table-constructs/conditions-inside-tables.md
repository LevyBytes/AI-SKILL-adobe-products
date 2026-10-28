# Conditions inside tables

For conditionals inside tables, an extra construct named **eval** comes into play; you need it whenever a condition leans on fields of the table that is currently being expanded. Inside **eval** sits an array of objects, and each object in turn supplies the context for evaluating the condition against the matching table row.

JSON representation of the input data:

```json
{
  "company": [
    {
      "name": "ABC",
      "supportsX": "TRUE"
    },
    {
      "name": "XYZ",
      "supportsX": "FALSE"
    }
  ]
}
```

[Figure: Index based conditional evaluation inside table](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/conditions-inside-tables.png)
Here, **eval** carries the array of objects (_company_) that the condition runs against, while the expr holds the real condition `supportsX="TRUE"`. Each array entry drives one evaluation of the condition, and the result lands on the matching row of the output table.
