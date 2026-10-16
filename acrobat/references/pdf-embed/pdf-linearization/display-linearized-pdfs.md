# Display linearized PDFs

To show linearized PDFs through the PDF Embed API, switch the `enableLinearization` variable to true (it is false by default) and hand it to the `previewFile` API as part of the preview configuration.

Just as the [Passing file content](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#passing-file-content) section explains, you can supply the linearized PDF either as a file URL or as a file Promise.
