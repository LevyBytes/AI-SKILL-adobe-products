# PDF Linearization

To speed up viewing, linearization restructures a PDF so the opening page can be shown as fast as possible, well before the whole file finishes downloading. The extra data baked into a linearized PDF lets a server stream its pages one by one through byte-range requests. That makes linearization especially valuable for big documents, or for readers stuck on sluggish connections, since the overall viewing experience feels much quicker.

PDFs that have been linearized and sit on byte-range-capable servers can be rendered through the PDF Embed API.

For details, see [Enabling byte-streaming on a server](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#enabling-byte-streaming-on-a-server).
