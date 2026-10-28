# Inline styling attributes supported

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
