# Placeholder Variables

The real input data takes the place of a placeholder (text tags).

**How to insert Placeholder Variables**

[Video](https://images-tv.adobe.com/mpcv3/5158/aa393134-7cf7-4ebb-bfd0-1ced95237d20_1615916599.854x480at800_h264.mp4#t=3)

Only an input field of type string, number or boolean can take a placeholder variable.
See the **Arrays** section if you want to use an array as a placeholder variable.
Any formatting put on the placeholder variable in the document template carries through to the output document.

For a more streamlined way to style and format the placeholder tag straight from the input json data, consult the [styling and formatting](../apply-styling-and-formatting/reference-index.md) section.

JSON representation of the input data:

```json
{
  "accountName": "Kane Miller",
  "accountNumber": "8324e015-6400",
  "address": {
    "street": "123 ABC Street",
    "state": "LA",
    "zip": "9XXXX"
  },
  "doctor": "John Doe"
}
```

**Usage**

The actual input data is substituted in for placeholder variables.

[Figure: Placeholder tags being replaced by values](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-basic.png)

**Default Value**

You can hand a placeholder variable a default value. Should the named tag be absent from the input json data, the default value fills the placeholder instead.

[Figure: Placeholder tags with default value set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-default.png)

**Optional**

Marking a placeholder variable as optional swaps in an empty string whenever the named variable is missing from the input data.

[Figure: Placeholder tags with optional image set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-optional.png)

**Prefix**

A prefix value may be attached to the placeholder variable; when set, that value is prepended to the tag's result.

[Figure: Placeholder tags with prefix image set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-prefix.png)

**Arrays**

For array handling, head to the [JSONata Functions](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/templatetags.md#jsonata-functions) section.

JSON representation of the input data:

```json
{
  "companyName": "Tech Corp",
  "discountCoupons": ["SummerSale", "BlackFriday", "NewYearSpecial"]
}
```

[Figure: working_with_arrays](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/working-with-array.png)
