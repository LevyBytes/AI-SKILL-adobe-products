# How to create paragraphs in document?

Place `<p>` in a placeholder value to spin up new paragraphs in the document on the fly.

JSON representation of the input data:

```json
{
  "Input_Data": "Here is the content before starting of paragraph.<p>This is first paragraph dynamically added.</p><p>This content belongs to second paragraph dynamically added.</p>"
}
```

[Figure: Sample_for_P_tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sample-for-p-tags.png)
[Figure: Sample for P tag_output](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sample-for-ptag-formatted.png)

- To express a non-breaking space, the ` ` HTML entity will not work inside JSON.
