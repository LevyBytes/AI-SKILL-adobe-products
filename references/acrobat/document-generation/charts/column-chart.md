# Column Chart

**Steps to insert a column chart in the document:**

- Place the column chart into the document template to act as a placeholder.

[Figure: Placeholder for column chart](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/column-chart-placeholder.png)

- Right-click the chart, pick "Edit Data in Excel", and revise the chart data there.

[Figure: Edit chart data in Excel](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/excel-column-chart.png)

**JSON representation of the input data:**

```json
{
  "Title": "Vehicle Sales Data",
  "sales": [
    {
      "month": "July",
      "EV": 700000,
      "ICE": 1500000
    },
    {
      "month": "August",
      "EV": 750000,
      "ICE": 1450000
    },
    {
      "month": "September",
      "EV": 800000,
      "ICE": 1400000
    },
    {
      "month": "October",
      "EV": 850000,
      "ICE": 1350000
    }
  ]
}
```

**Output chart in document after processing.**

[Figure: Output of line chart in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/output-column-chart.png)
