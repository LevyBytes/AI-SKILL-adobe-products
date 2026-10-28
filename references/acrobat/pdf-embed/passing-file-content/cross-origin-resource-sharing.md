# Cross-origin resource sharing

You can run into [Cross-origin resource sharing
(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) trouble
once PDF content is handed over as a URL, since the PDF Embed API then
has to fetch the file from that location before it can render it.
Two approaches let you sidestep the problem:

- Put your webpage and the file's location URL under the same domain.
  Example: webpage: [Link](https://example.com/viewer/test.html); PDF
  location: [Link](https://example.com/resources/abc.pdf))
- Switch on CORS headers for the PDF resource so your webpage's domain
  is permitted to reach it.
