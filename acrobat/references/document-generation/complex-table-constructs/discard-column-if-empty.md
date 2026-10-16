# Discard column if empty

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
