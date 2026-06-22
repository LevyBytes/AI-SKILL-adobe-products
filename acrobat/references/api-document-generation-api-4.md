# Stylingformattingtags, Tablewithmarkers

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Apply styling and formatting; Table Tag with Markers.

## Apply styling and formatting

Lean on HTML-based constructs to bring styling and formatting to the document you generate.

- Insert line breaks within the text.

- Choose a color and font size for a piece of text.

- Render text in bold and italic.

- Underline text.

- Define an image's height and width.

- Create [Hyperlinks](api-document-generation-api-3.md).

- Create [Inline Images](api-document-generation-api-3.md).

- Create [Paragraphs](api-document-generation-api-4.md).

- Create [Lists](api-document-generation-api-5.md).

### How It Works

The input JSON data itself can carry basic styling for text tags.

JSON representation of the input data:

```json
{
  "LMS Certificate": {
    "Employee Name": "Sarah Rose",
    "Certification Program": "Certificate in Life and Thoughts of <span style=\"font-weight: bold \">Dr. BR Ambedkar </span> ",
    "Completion Date": "01/03/2021"
  }
}
```

[Figure: Sending text styling constructs, provide styling for the output document in json file. Adobe Document Generation API analyses the json data and inserts styled text in output documents](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/consolidated-styling-formatting.png)

### Styling and Formatting rules

HTML-style constructs embedded in the JSON data let you style a text tag. Those constructs obey the extra rules captured below:

- These HTML tags are recognized: `<span>`, nested `<span>`, `<br>` (new line), `<b>` (bold), `<strong>` (strong), `<em>` (emphasis), `<i>` (italic), `<u>` (underline), `<p>` (para).

- Style the data either by writing inline custom CSS within the `<span>` tag, or by reaching for the simple styling tags `<b>` (bold), `<i>` (italic) and `<u>` (underline).

- For nested HTML `<span>`, precedence follows the usual local-to-global scoping convention.

- Unsupported HTML tags are simply skipped.

### Inline styling attributes supported

- font-size : Xpt or Ypx ; X=dynamic positive integer 1–1638 pt, 1pt = 1/72 inch; Y=dynamic positive integer 1–2184 px, 1px = 1/96 inch ( point (pt) and pixels (px) are the only supported unit for font size.)

- font-weight : bold;

- font-style : italic;

- text-decoration : underline;

- color : ff6347;

JSON representation of the input data:

```json
{
  "Notes Section": "Has the Board of directors established a basic policy <span style=\"font-size: 14pt;\">regarding legal compliance<span style=\"font-weight: bold; font-style: italic;\"> (hereinafter referred to as the Legal Compliance policy) </span></span><a href=\"http://www.samplewebsite.com/\">Board</a> in accordance to the institution's <span style=\"text-decoration : underline; color:ff6347;\">corporate management policy</span> <span style=\"color: red;\">and disseminated it throughout the institution</span>"
}
```

[Figure: Styling Tags Sample with style for font-size, font-weight and font-style attribute added to span tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/styling-attributes-json-rep.png)

[Figure: Styling Tags output when style for font-size, font-weight and font-style attribute was added to span tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/styling-attributes-output.png)

### Inline images supported attributes

Documentation covering inline images lives [here](api-document-generation-api-3.md).

Supply image formatting through the attributes of the `<img>` tag.

- Height and width attributes are honored on the `<img>` tag.

- Anything else placed inside the `<img>` tag that isn't recognized gets dropped.

JSON representation of the input data:

```json
{
  "ContentBlock": "sample image with height and width - <img src=\"https://documentcloud.adobe.com/dc-docgen-app/assets/dc_icon.png\" height=\"200\" width=\"200\">"
}
```

[Figure: Formatting Inline images with height and width](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/formatted-inline-image-height-and-width.png)

**Note:** In this case the image is sized to match what the input data specifies.

### Tags Supported

- `<span>`

- `<a>` (anchor)

- `<br>` (new line)

- `<b>` (bold)

- `<strong>` (strong)

- `<em>` (emphasis)

- `<i>` (italic)

- `<u>` (underline)

- `<img>` (image)

- [`<p>` (para)](api-document-generation-api-4.md)

- [`<ol>` & `<ul>`](api-document-generation-api-5.md)

- `<sup>` (superscript)

- `<sub>` (subscript)

- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` (headings)

- `<text-align>` (left, center, right, justify)

- `<margin-left>` (units: pt, px, em, cm, mm, in)

JSON representation of the input data:

```json
{
  "Notes Section": "Has the Board of directors established a basic policy <span style=\"font-size: 14pt;\">regarding legal compliance <b><i>(hereinafter referred to as the Legal Compliance policy) </i></b></span><a href=\"http://www.samplewebsite.com/\">Board</a> in accordance to the institution's <br><u>corporate management policy</u> and disseminated it throughout the institution"
}
```

[Figure: Styling Tags Sample with style for font-size attribute added to span tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/styling-tags-json-rep.png)

[Figure: Styling Tags output when style for font-size attribute was added to span tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/styling-tags-output.png)

### How to create paragraphs in document?

Place `<p>` in a placeholder value to spin up new paragraphs in the document on the fly.

JSON representation of the input data:

```json
{
  "Input_Data": "Here is the content before starting of paragraph.<p>This is first paragraph dynamically added.</p><p>This content belongs to second paragraph dynamically added.</p>"
}
```

[Figure: Sample_for_P_tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sample-for-p-tags.png)
[Figure: Sample for P tag_output](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sample-for-ptag-formatted.png)

- To express a non-breaking space, the ` ` HTML entity will not work inside JSON.

## Table Tag with Markers

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

### Nested Tables

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

### Complex Table Constructs with Table markers

Table markers (`table-start`, `table-end`) also pair with complex table constructs. The examples that follow illustrate how to apply them.

### Dynamically expand table rows or columns

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

### Dynamic table columns

Drop a column, or a group of columns, from the document that finally gets generated by using table markers.

### Discard column if empty

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

### Discard column if the condition evaluates to true

Whenever the condition inside discard-if(expr(**condition**)) turns out true for even a single entry among the array's objects, that table column may be dropped.

**How to use**

Attach the discard-if(expr(**condition**)) construct to the template tag so the discard-if behavior turns on for that column.

**Note:** discard-if can additionally accept a context input, written discard-if(expr(**condition**), **context_tag**); the `condition` then resolves in the context of `context_tag`.

JSON representation of the input data:

```json
{
  "conversion": [
    {
      "month": "July, 2021",
      "rate": 10,
      "method": "Payout by Cheque"
    },
    {
      "month": "September, 2021",
      "rate": 30,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2021",
      "rate": 20,
      "method": "Payout by Cheque"
    },
    {
      "month": "April, 2022",
      "rate": 20,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2022",
      "rate": 30,
      "method": "Payout by Cheque"
    }
  ]
}
```

[Figure: Discard if with table markers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/discard-if-table-markers.png)

Above, discard-if is combined with context **$** (where **$** stands for the input json itself). The conditions are therefore resolved against the input json in this case.

### Dynamic table rows

Drop a row, or a group of rows, from the document that finally gets generated.

### Discard the row if the condition evaluates to true

A table row is dropped only when the condition in discard-row-if(expr(**condition**)) holds true within the supplied context. Attach this construct to the template tag to drop the row according to that condition.

For Example: \{\{PROPERTY:**discard-row-if(expr(condition))**\}\}

**Note:** Context can be applied here just like with discard-if, written \{\{PROPERTY:**discard-row-if(expr(condition),context_tag)**\}\}.

JSON representation of the input data:

```json
{
  "conversion": [
    {
      "month": "July, 2021",
      "rate": 10,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2021",
      "rate": 20,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2022",
      "rate": 40,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2021",
      "rate": 80,
      "method": "Payout by Cheque"
    },
    {
      "month": "April, 2022",
      "rate": 100,
      "method": "Payout by Cash"
    },
    {
      "month": "Dec, 2022",
      "rate": 45,
      "method": "Payout by Cheque"
    }
  ]
}
```

[Figure: Discard row if with table markers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/discard-row-if-table-markers.png)

### Discarding a horizontal-table row when its condition resolves true

Within a horizontal table, a row is dropped only when the condition in discard-row-if(expr(**condition**)) holds true within the supplied context. Attach this construct to the template tag to drop the row according to that condition.

For Example: \{\{PROPERTY:**discard-row-if(expr(condition))**\}\}

JSON representation of the input data:

```json
{
  "conversion": [
    {
      "month": "July, 2021",
      "rate": 10,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2021",
      "rate": 20,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2022",
      "rate": 40,
      "method": "Payout by Cheque"
    },
    {
      "month": "Dec, 2021",
      "rate": 80,
      "method": "Payout by Cheque"
    },
    {
      "month": "April, 2022",
      "rate": 100,
      "method": "Payout by Cash"
    },
    {
      "month": "Dec, 2022",
      "rate": 45,
      "method": "Payout by Cheque"
    }
  ]
}
```

[Figure: Discard row if with table markers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/discard-row-in-horizontal-table.png)
