# Define the page layout - Create a PDF from dynamic HTML

For workflows driven by changing data, `DynamicHTMLToPDF` builds PDFs out of dynamic HTML. Enterprises frequently hand their end users an HTML template containing form fields; this API captures whatever unique values those users type and then persists the result as a PDF. The gathered entries live in a JSON file, and the originating HTML must reference `<script src='./json.js' type='text/javascript'></script>`. See the API docs for how this is used.

In practice, the `DynamicHTMLToPDF` sample takes a zip bundle — holding the input HTML plus its supporting resources together with the input data — and turns it into a PDF. JavaScript inside the HTML consumes that input data to reshape the HTML DOM, which in effect rewrites the originating HTML file. Through this approach you can feed values into the template HTML on the fly before the conversion to PDF happens.

For guidance on calling these APIs, consult the linked [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).
