# Discard column if the condition evaluates to true

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
