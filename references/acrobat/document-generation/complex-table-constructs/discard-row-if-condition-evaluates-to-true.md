# Discard row if condition evaluates to true

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
