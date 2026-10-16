# Discard column if condition evaluates to true

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
