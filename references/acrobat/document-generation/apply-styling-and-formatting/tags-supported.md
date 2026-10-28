# Tags Supported

- `<span>`

- `<a>` (anchor)

- `<br>` (new line)

- `<b>` (bold)

- `<strong>` (strong)

- `<em>` (emphasis)

- `<i>` (italic)

- `<u>` (underline)

- `<img>` (image)

- [`<p>` (para)](how-to-create-paragraphs-in-document.md)

- [`<ol>` & `<ul>`](../template-tags/insert-list-using-ul-and-ol-html-elements.md)

- `<sup>` (superscript)

- `<sub>` (subscript)

- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` (headings)

- `<text-align>` (left, center, right, justify)

- `<margin-left>` (units: pt, px, em, cm, mm, in)

JSON representation of the input data:

```json
{
  "Notes Section": "Has the Board of directors established a basic policy <span style=\"font-size: 14pt;\">regarding legal compliance <b><i>(hereinafter referred to as the Legal Compliance policy) </i></b></span><a href=\"http://www.samplewebsite.com/\">Board</a> in accordance to the institution's <br><u>corporate management policy</u> and disseminated it throughout the institution"
}
```

[Figure: Styling Tags Sample with style for font-size attribute added to span tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/styling-tags-json-rep.png)

[Figure: Styling Tags output when style for font-size attribute was added to span tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/styling-tags-output.png)
