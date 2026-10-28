# Focus on PDF rendering

The PDF Embed API leaves it up to the site builder whether the document should grab focus at the moment it renders inside a page.

You drive this with the `focusOnRendering` variable, handed in as a setting to the `previewFile` API. The value it expects is a Boolean.

```javascript
adobeDCView.previewFile(
  {
    content: { location: { url: "<URL_OF_PDF>" } },
    metaData: { fileName: "<FILE_NAME>" },
  },
  { embedMode: "<EMBED_MODE>", focusOnRendering: true },
);
```

Which value this setting defaults to depends on the embed mode in play.

| Embed mode | Default value of focusOnRendering | Default behaviour |  |
| --- | --- | --- | --- |
| [Full window](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#full-window-embed-mode) | true | Acquires focus when PDF is rendered. | [Sized container](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#sized-container-embed-mode) false Doesn’t acquire focus when PDF is rendered. Doesn’t acquire focus when PDF is rendered. |
| [In-Line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#in-line-embed-mode) | false | Doesn’t acquire focus when PDF is rendered. | Doesn’t acquire focus when PDF is rendered. |
| [Lightbox](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#lightbox-embed-mode) | true (Cannot be set to false) | Always acquires focus when PDF is rendered. This cannot be changed. | Because Lightbox embed mode exists to give the document a dedicated, focused view by floating the viewer above the page, the PDF there will invariably claim focus. That behaviour is fixed and isn't open to change in Lightbox embed mode. For every embed mode apart from lightbox, you're free to alter whether focus is taken by default. _ Switch the variable on (`focusOnRendering: true`) when you want the document to grab focus once it has rendered. _ Switch the variable off (`focusOnRendering: false`) when the document should stay out of focus after rendering. |
