# Numerical Calculations

Running numerical calculations against the input data.

**How to insert Numerical Calculations**

[Video](https://images-tv.adobe.com/mpcv3/5158/e5e5e7c6-a63c-45cf-8a17-b60291068626_1615916868.854x480at800_h264.mp4#t=3)

Every supported calculation is [JSONata compliant](https://docs.jsonata.org/overview.html).

Wrap all calculations inside _expr()_.

JSON representation of the input data:

```json
{
  "revenue": "1000",
  "expenditure": "650",
  "subscriptions": [
    {
      "description": "Adobe Photoshop",
      "licenses": "1"
    },
    {
      "description": "Adobe Premiere Pro",
      "licenses": "2"
    },
    {
      "description": "Adobe InDesign",
      "licenses": "1"
    }
  ]
}
```

**Arithmetic**

Carries out basic arithmetic operations.

[Figure: Performing simple arithmetic to show revenue-expenditure](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/arithmetic.png)

The arithmetic operations supported are +, -, \*, /, % .
An arithmetic numerical calculation applies only to input fields that map to a number.

**Aggregation**

Carries out aggregations across a list of elements.

[Figure: Performing simple arithmetic to show aggregation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aggregation.png)

The [supported aggregation functions](https://docs.jsonata.org/aggregation-functions) are listed here
An aggregate numerical calculation applies only to a list of numbers.
