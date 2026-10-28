# Handle search engine indexing

By default, PDFs shown through the PDF Embed API stay out of search results and aren't indexed, because the API never plants a direct reference to the PDF URL into the DOM. For the PDF to be indexed so its text turns up in a search result, that PDF's URL has to be present in the site's DOM. Search bots begin by reading a site's content and then follow every link found in the DOM.

Only the site's own developers can steer how any website gets indexed and optimised for search. One way to make PDF indexing through the PDF Embed API possible relies on sitemaps.
