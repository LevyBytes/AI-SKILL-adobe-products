# Overview — PDF Electronic Seal API Components

These pieces come together in a PDF Electronic Seal API workflow:

- **PDF Document**: Supplied as the input file, with a ceiling of 100 MB on its size.
- **Sealing Parameters**: These set how the seal is formatted, whether it shows, and how it looks, and they carry the digital certificate credential details too. For details, see [sealing parameters](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/howtos/electronic-seal-api.md#api-parameters).
- **Seal Image**: As the seal's backdrop, the API will take an **optional** image that supersedes the default seal artwork. No seal image may be larger than 5 MB. Only JPEG, PNG and PDF are accepted as image formats.
