# Discard the row if the condition evaluates to true

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
