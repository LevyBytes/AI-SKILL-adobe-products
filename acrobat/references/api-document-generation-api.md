# Beta, Charts, Complextableconstructs

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: DocGen Beta; Charts; Complex Table Constructs.

## DocGen Beta

Pair the [PDF Services Beta SDK](api-document-generation-api.md) with the [Beta API](https://documentcloud.adobe.com/document-services/beta.html#post-documentGeneration) to turn out mobile-optimized PDFs from Document Generation. Adobe's Liquid Mode inside the Acrobat Reader App tunes the resulting PDF so it reads well on mobile.

[Video](https://images-tv.adobe.com/mpcv3/5644/7be694f8-5299-41eb-a2da-2d47fbce1891_1629809837.1920x1080at3000_h264.mp4)

**Note**: This mobile-optimized PDF generation remains in Beta, so hold off on relying on it in production.

### Beta SDK

| SDK | API reference | Sample Code |
| --- | --- | --- |
| [Java](https://www.adobe.com/go/pdfservicesapi_java_beta_maven) | [https://www.adobe.com/go/pdfservicesapi_java_beta_docs](https://www.adobe.com/go/pdfservicesapi_java_beta_docs) | [Samples](https://www.adobe.com/go/pdfservicesapi_java_beta_samples) |
| [Node JS](http://www.adobe.com/go/pdfservicesapi_node_beta_npm) | [https://www.adobe.com/go/pdfservicesapi_node_beta_docs](https://www.adobe.com/go/pdfservicesapi_node_beta_docs) | [Samples](http://www.adobe.com/go/pdfservicesapi_node_beta_samples) |
| [.NET](https://www.adobe.com/go/pdfservicesapi_net_beta_nuget) | [https://www.adobe.com/go/pdfservicesapi_net_beta_docs](https://www.adobe.com/go/pdfservicesapi_net_beta_docs) | [Samples](https://www.adobe.com/go/pdfservicesapi_net_beta_samples) |

## Charts

Want a chart to land in the document at run time? Drop it in as a placeholder, then revise both the chart and its excel data.

### How It Works

Begin by dropping the chart into the document template as a placeholder. At output time, supplying the chart's data through the input JSON converts that placeholder into a finished chart.
These graph types can be used:

- Line
- Column
- Pie

Here is how to add a chart to the document:

- **Open your Word document** and set the cursor at the spot the chart should occupy.
- **Go to the “Insert” tab** sitting on the Ribbon.
- **Click on “Chart”** found within the Illustrations group.
- **Choose the type of chart** from the offered list (e.g. column, line, pie), then confirm with “OK”.
- An **Excel spreadsheet** opens prefilled with sample data; swap that data out for your own tags.
- **Close the Excel** window after your data is in. Word refreshes the chart on its own.

[Figure: Edit chart data in Excel](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/insert-chart-in-document.png)

Leave everything but the chart data out of the Excel sheet — no extra text belongs there.

### Line Chart

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

### Column Chart

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

### Pie Chart

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

## Complex Table Constructs

Layer extra properties onto your table tags to unlock advanced table behaviour.

This section is **DEPRECATED**. If you still need complex table constructs, head instead to [Complex Table Constructs with Table markers](api-document-generation-api-4.md).

### Dynamically expand table rows or columns

Place the cell extension property within a table cell to declare whether rows grow downward or columns grow sideways.

JSON representation of the input data:

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

- **Repeat table rows vertically** - the _\{\{subscriptions.name:**cell-extension(vertical)**\}\}_ tag signals to the engine that cells grow in the vertical direction.

[Figure: Table gets vertically extended as table rows are repeated](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/vertical-extension1.png)

- **Repeat table columns horizontally** - the _\{\{subscriptions.name:**cell-extension(horizontal)**\}\}_ tag signals to the engine that cells grow in the horizontal direction.

[Figure: Table gets horizontally extended as table columns are repeated](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/horizontal-extension1.png)

Vertical is the fallback extension. Omit the cell-extension construct and the table simply grows downward.

### Dynamic table columns

Drop a single column or a group of columns out of the finished document like so :

- [Discard column if empty](api-document-generation-api.md).
- [Discard column if condition evaluates to true](api-document-generation-api.md).

### Discard column if empty

Should every element of an array in the input json come back empty or null, the matching column can be dropped.

**How to use**

Switch on the discard-if-empty behaviour for a given column by attaching the discard-if-empty construct, set to boolean false/true, to that column's template tag.

JSON representation of the input data:

_Json 1_

```json
{
  "Project": [
    {
      "Name": "ABC Infra",
      "Milestone": "First Milestone",
      "DateComplete": "24/06/2021",
      "Notes": ""
    },
    {
      "Name": "ABC Infra",
      "Milestone": "Second Milestone",
      "DateComplete": "24/06/2022",
      "Notes": ""
    },
    {
      "Name": "DEF Computer Labs",
      "Milestone": "First Milestone",
      "DateComplete": "12/12/2021",
      "Notes": ""
    },
    {
      "Name": "DEF Computer Labs",
      "Milestone": "Second Milestone",
      "DateComplete": "12/12/2021",
      "Notes": ""
    }
  ]
}
```

_Json2_

```json
{
  "Project": [
    {
      "Name": "ABC Infra",
      "Milestone": "First Milestone",
      "DateComplete": "24/06/2021"
    },
    {
      "Name": "ABC Infra",
      "Milestone": "Second Milestone",
      "DateComplete": "24/06/2022"
    },
    {
      "Name": "DEF Computer Labs",
      "Milestone": "First Milestone",
      "DateComplete": "12/12/2021"
    },
    {
      "Name": "DEF Computer Labs",
      "Milestone": "Second Milestone",
      "DateComplete": "12/12/2021"
    }
  ]
}
```

[Figure: Adding discard-if-empty construct with boolean false/true along with the template tag to activate discard if empty feature for the corresponding column](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/discard-column-if-empty.png)

The \{\{Project.Notes:**discard-if-empty(true)**\}\} tag tells the engine to drop that column whenever every element of the input json array is empty or null.

**Note**: Whatever row sits directly above the authored row counts as a header row. That header row's cell drops out together with the discarded column.

[Figure: Header Row of Development Milestones table](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/header-row1.png)

[Figure: Header Row of Conversion tracking table](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/header-row2.png)

[Figure: Development Milestones table without header row](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/without-header-row.png)

### Discard column if condition evaluates to true

A column drops out of the table when the condition supplied to discard-if(expr(**condition**)) comes back true. Switch on this discard behaviour for the column by attaching the discard-if(expr(**condition**)) construct to its template tag.

JSON representation of the input data:

```json
{
  "Conversion": [
    {
      "Month": "July, 2021",
      "Rate": 10,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "September, 2021",
      "Rate": 30,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "Dec, 2021",
      "Rate": 20,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "April, 2022",
      "Rate": 20,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "Dec, 2022",
      "Rate": 30,
      "Method": "Payout by Cheque"
    }
  ]
}
```

[Figure: Added discard-if(expr(**condition**)) construct along with the template tag to activate discard if feature for the corresponding column](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/discard-if-condition-true.png)

The \{\{Conversion.Rate:**discard-if(expr($sum(Conversion.Rate)!= 100))**\}\} tag tells the engine to drop that column when the condition inside the **expr** construct comes back true.

### Dynamic table rows

Drop a single row or a group of rows out of the finished document.

### Discard row if condition evaluates to true

Only when the condition inside discard-row-if(expr(**condition**),**context**) evaluates true within the supplied context does a table row get dropped. Attach this construct to the template tag to drop the row according to the condition you supply.

For Example: \{\{`TABLE_CONTEXT`.PROPERTY:**discard-row-if(expr(PROPERTY = "`TEST_VALUE`"),`TABLE_CONTEXT`)**\}\}

JSON representation of the input data:

```json
{
  "Conversion": [
    {
      "Month": "July, 2021",
      "Rate": 10,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "Dec, 2021",
      "Rate": 20,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "Dec, 2022",
      "Rate": 40,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "Dec, 2021",
      "Rate": 80,
      "Method": "Payout by Cheque"
    },
    {
      "Month": "April, 2022",
      "Rate": 100,
      "Method": "Payout by Cash"
    },
    {
      "Month": "Dec, 2022",
      "Rate": 45,
      "Method": "Payout by Cheque"
    }
  ]
}
```

[Figure: Added discard-row-if(expr(condition),context) construct along with the template tag to activate discard row if feature for the corresponding rows](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/discard-row-if-condition-true.png)
When a single row carries several “discard-row-if” constructs, that row drops as soon as any one of those conditions turns true.

**Note**: Once every row has been discarded, the header row goes too, which clears out the whole table.

### Conditions inside tables

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
