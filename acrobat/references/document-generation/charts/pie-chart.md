# Pie Chart

**Steps to insert a pie chart in the document:**

- Place the pie chart into the document template to act as a placeholder.

[Figure: Placeholder for pie chart](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/pie-chart-placeholder.png)

- Right-click the chart, pick "Edit Data in Excel", and revise the chart data there.

[Figure: Edit chart data in Excel](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/excel-pie-chart.png)

**JSON representation of the input data:**

```json
{
  "Title": "Car Sales by Quarters",
  "carSales": [
    {
      "quarter": "1st Qtr",
      "value": 1500
    },
    {
      "quarter": "2nd Qtr",
      "value": 2000
    },
    {
      "quarter": "3rd Qtr",
      "value": 1800
    },
    {
      "quarter": "4th Qtr",
      "value": 2200
    }
  ]
}
```

**Output chart in document after processing.**

[Figure: Output of pie chart in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/output-pie-chart.png)

- Steer clear of placing charts inside repeating section tags.
- Make sure the chart's Excel data begins at the very first cell (A1).
