# How It Works

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
