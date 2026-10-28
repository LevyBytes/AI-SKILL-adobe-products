# Conditionals

Compute a fragment's value according to the conditions you set.

Here is how that input data looks in JSON:

```json
[
  {
    "addressDetails": "<br>{{streetDetails}}<br>{{localityDetails}}",
    "streetDetails": "<span style=\"color: 0000FF;\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}</span>",
    "localityDetails": "<span style=\"color: 006400;\">{% conditional-section expr(country=\"India\") %}{{street}} {{postcode}} {{city}},<i>{{country}}</i> {% end-section %}{% conditional-section expr(country=\"USA\") %}{{street}}{{city}} {{state}} {{zip}},<i>{{country}}</i> {% end-section %}</span>"
  },
  {
    "fullname": "<span style=\"color: ff0000;\">{{firstname}} {{lastnameStyled}}</span>",
    "lastnameStyled": "<span STYLE=\"font-size:14mm\"><b><i>{{lastname}}</i></b></span>"
  }
]
```

Inside `localityDetails` sits a conditional phrase whose outcome depends on the `country` text tag.
When the country resolves to India, `localityDetails` lays out as
`street`
`postCode` `city`,
`country`. When it resolves to the USA, `localityDetails` instead lays out as
`street`
`city` `state` `zip`,
`country`.

[Figure: Output of fragment with condition in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-condition.png)
