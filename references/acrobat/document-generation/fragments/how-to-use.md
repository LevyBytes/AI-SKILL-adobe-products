# How to use ?

Fragments: How to use ?

Working with fragments through the API means building a **fragments** json and supplying it as a parameter inside the request body; the SDKs offer the same capability if you prefer that route.

The json below sets up fragments for two scenarios — an **address** and a **name**.

```json
{
  "addressDetails": "<br>{{streetDetails}}<br>{{localityDetails}}",
  "streetDetails": "<span style=\"color: 0000FF;\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}",
  "localityDetails": "<span style=\"color: 006400;\">{{city}},<i>{{state}}</i>-<b>{{pincode}}</b>",
  "fullname": "<span style=\"color: ff0000;\">{{firstname}} {{lastnameStyled}}",
  "lastnameStyled": "<span STYLE=\"font-size:14mm\"><b><i>{{lastname}}</i></b>"
}
```

Within that json, the **address** scenario relies on the fragments `addressDetails`, `streetDetails`, and `localityDetails`, while the **name** scenario uses `fullname` and `lastnameStyled`. Here is what each one assembles:

`addressDetails` is built from the `streetDetails` and `localityDetails` fragment tags.

`streetDetails` brings together the `addressline1`, `addressline2`, and `addressline3` text tags.

`localityDetails` pulls in the `state`, `city`, and `pincode` text tags.

`fullname` combines the `firstname` text tag with the `lastnameStyled` fragment tag.

`lastnameStyled` wraps the `lastname` text tag.

Supplying values for the text tags referenced above is the job of the **jsonDataForMerge** json, which looks like this:

```json
{
  "addressline1": "Sample Address Line 1",
  "addressline2": "Sample Address Line 2",
  "addressline3": "Sample Address Line 3",
  "city": "Sample City",
  "state": "Sample State",
  "pincode": "42132xx",
  "zip": "Sample zip",
  "firstname": "John",
  "lastname": "Roy",
  "country": "India",
  "street": "Sample Street",
  "postcode": "Sample PostCode",
  "arr": [1, 2, 3]
}
```

A second style for writing the **fragments** json also exists: group fragments that belong together into one object, keep unrelated ones in a separate object, and collect every object inside a json array.

```json
[
  {
    "addressDetails": "<br>{{streetDetails}}<br>{{localityDetails}}",
    "streetDetails": "<span style=\"color: 0000FF;\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}",
    "localityDetails": "<span style=\"color: 006400;\">{{city}},<i>{{state}}</i>-<b>{{pincode}}</b>"
  },
  {
    "fullname": "<span style=\"color: ff0000;\">{{firstname}} {{lastnameStyled}}",
    "lastnameStyled": "<span STYLE=\"font-size:14mm\"><b><i>{{lastname}}</i></b>"
  }
]
```

Here the first object in the array carries the **address** fragments and the second carries the **name** fragments.

Resolving a nested fragment such as `streetDetails` works by searching the very object that holds its parent fragment — in this case `addressDetails`. That lookup is the mechanism behind nested fragment resolution.

Should the same fragment key appear in more than one object, the resolver picks whichever object holds that key earliest in the list.

Snapshots of sample input and output documents follow to show fragments in action.

In this case the Word document template file makes use of the `addressDetails` fragment.

This is the appearance of the resulting output document:

[Figure: Output of address fragment in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/address-output.png)

The `fullname` fragment can be applied in the word document template file in a comparable way.

And here is the output document that gets produced:

[Figure: Output of name fragment in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/name-output.png)
