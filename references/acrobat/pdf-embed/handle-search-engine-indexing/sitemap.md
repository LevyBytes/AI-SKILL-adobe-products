# Sitemap

A _sitemap_ is a file that records the pages and other files on a site together with how they relate to one another. It signals to search engines which pages and files matter on the site and hands them useful detail about those files. That helps search engines locate the content, crawl the site more efficiently, and index what they find.

To get PDF files shown via PDF Embed API indexed, site developers can drop the PDF URL into the sitemap. For instance, to put a URL into a site's XML sitemap:

XML excerpt; retain the enclosing document/configuration described here.

```xml
<url>
   <loc>https://example.com/PDFs/example.pdf</loc>
</url>
```

Each `<url>` tag has to hold a `<loc>` tag carrying the PDF's URL. Stack as many `<url>` tags as you like to list the URLs of different PDF files.

Search engines will follow these sitemap links and index the PDF content to match.
