# Insert List using `<ul>` and `<ol>` HTML Elements

Use the `<ul>` (unordered list) and `<ol>` (ordered list) tags to add lists to the document via JSON data.

**Simple Lists**

JSON representation of the input data:

```json
{
  "List_Data": "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>"
}
```

A list built from the html string given in the input json takes the place of the placeholder tag.

[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/list-example-1.png)

**Nested Lists**

JSON representation of the input data:

```json
{
  "List_Data": "<ol><li>Level 1</li><li>Level 1<ol><li>Level 2</li><li>Level 2<ol><li>Level 3</li><li>Level 3</li></ol></li></ol></li></ol>"
}
```

A list built from the html string given in the input json takes the place of the placeholder tag.

[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/nested-numbered-lists-example.png)

- Within the input JSON data, any Placeholder Tag whose value holds a `<ul>` or `<ol>` HTML element belongs in its own separate paragraph in the input document template.

- List elements can only be styled inline, i.e. through the style attribute of `<ol>` & `<ul>`.

- Customizing how list markers look is handled by the `list-style-type` property, which accepts a range of options: disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-alpha, and upper-alpha.

**Example of list marker customization**

JSON representation of the input data:

```json
{
  "List_Data": "<ol style = \" list-style-type : upper-roman; \"><li>Coffee</li><li>Tea</li><li>Milk</li></ol>"
}
```

A list built from the html string given in the input json takes the place of the placeholder tag.

[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/upper-roman-list-example.png)
