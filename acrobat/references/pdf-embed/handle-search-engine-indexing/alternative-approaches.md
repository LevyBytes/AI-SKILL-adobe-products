# Alternative approaches

If sitemaps aren't your preferred route, other techniques exist for making PDFs discoverable to search engines. The prerequisite is that the PDF's URL is already published somewhere on the site so crawlers can find it. One pattern is to intercept the click on a PDF link and render the file through the PDF Embed API instead. Because the PDF Embed API ships with several configuration options, you can build a wide range of viewing experiences off this single hook.

A few concrete patterns you might adopt:

- Trigger the PDF link automatically once the page has finished loading, opening the document in whichever embed mode you prefer.
- Build a dedicated landing page that renders PDFs in full window embed mode by handing it the PDF reference.
- Render the PDF inline, keeping it inside the flow of the surrounding page.
- Surface the PDF over the page using the lightbox embed mode that the PDF Embed API offers.

Working code samples live [here](https://www.adobe.com/go/pdfembedapi_samples), in the `/More Samples/Handle Search Engine Indexing/` folder.

Treat the above as starting points only; the exact implementation is the site author's call and will vary with each website's layout and structure.

## See also

- [Releasenotes](../../pdf-services/releasenotes.md)
