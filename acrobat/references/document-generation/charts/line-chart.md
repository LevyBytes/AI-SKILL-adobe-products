# Line Chart

**Steps to insert a line chart in the document:**

- Place the line chart into the document template to act as a placeholder.

[Figure: Placeholder for line chart](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/line-chart-placeholder.png)

- Right-click the chart, pick "Edit Data in Excel", and revise the chart data there.

[Figure: Edit chart data in Excel](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/excel-line-chart.png)

**JSON representation of the input data:**

```json
{
  "Title": "Sales Data",
  "sales": [
    {
      "quarter": "Q1",
      "phone": 3800,
      "tablet": 2450
    },
    {
      "quarter": "Q2",
      "phone": 4300,
      "tablet": 2700
    },
    {
      "quarter": "Q3",
      "phone": 5100,
      "tablet": 3150
    },
    {
      "quarter": "Q4",
      "phone": 6000,
      "tablet": 3600
    }
  ]
}
```

**Output chart in document after processing.**

[Figure: Output of line chart in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/output-line-chart.png)
