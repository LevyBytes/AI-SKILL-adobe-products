# OCR with specific language

OCR isn't limited to English; German, French, Danish, and a range of further languages are all fair game. For the full roster of supported OCR locales and OCR types, check `OCRSupportedLocale` and `OCRSupportedType` in the API docs.

The OcrPDFWithOptions sample illustrates the pattern: making a PDF searchable means declaring two things, the locale (the language) plus the type. Pick between two types, each of which behaves differently:

- With the first type, your text comes out searchable and selectable, but the source image gets touched up during cleanup, deskewed for instance, and then an invisible text layer is laid over the top. By clearing away stray artifacts, it can leave you with a cleaner-looking document in certain cases.
- The second type, EXACT, likewise drops a searchable text layer onto the original image, yet here the image itself stays untouched. Expect the closest possible match to the original image from this option.

For guidance on calling our APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).
