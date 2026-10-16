# Combine pages from multiple files

Drawing from as many as 20 source PDFs, this example pulls selected pages out and stitches them together into one document. Through optional arguments, you can declare per-file page ranges that govern what lands in the merged result. For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

## Combine pages from multiple files

Complete example files:

- [Program.cs](examples/dotnet/combine-pdf-with-page-ranges/Program.cs)
- [imports.cs](examples/dotnet/combine-pdf-with-page-ranges/imports.cs)
- [get-page-range-for-second-file.cs](examples/dotnet/combine-pdf-with-page-ranges/get-page-range-for-second-file.cs)
- [get-page-range-for-first-file.cs](examples/dotnet/combine-pdf-with-page-ranges/get-page-range-for-first-file.cs)
- [configure-logging.cs](examples/dotnet/combine-pdf-with-page-ranges/configure-logging.cs)
- [create-output-file-path.cs](examples/dotnet/combine-pdf-with-page-ranges/create-output-file-path.cs)
