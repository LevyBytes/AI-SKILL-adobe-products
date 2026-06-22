# Releasenotes, Searchengineindexing

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Release Notes; Handle search engine indexing.

## Release Notes

Alongside the usual bug fixes and performance gains, see the per-release notes below for what changed in each version.

### Change history

### March 9, 2026

| Change | Description |
| --- | --- |
| Bug fix | Cleared the console error "Uncaught (in promise) Error: No callback registered by viewer for `GET_FEATURE_FLAG`". |
| Bug fix | Cleared the console error "Uncaught TypeError: Cannot read properties of undefined (reading 'documentViewUpdateEventData')". |

### June 11, 2025

| Change | Description |
| --- | --- |
| Bug fix | Resolved a case where the "Load PDF" event fired repeatedly in Adobe Analytics. |
| Bug fix | Resolved duplicate `DOCUMENT_OPEN` events being sent to analytics. |
| New | A Close option is now offered in the invalid License error dialog box by PDF Embed API. |

### November 6, 2024

| Change | Description |
| --- | --- |
| Bug fix | Corrected file preview on macOS Safari version 18 and iOS 18 |

### August 14, 2024

| Change | Description |
| --- | --- |
| Changed | Raised the rendering timeout to five minutes so complex pdf files can preview. |

### June 27, 2024

| Change | Description |
| --- | --- |
| Bug fix | Resolved the developer-console error "Feature can't be enabled or disabled". |
| Bug fix | Resolved the developer-console error "Edit dropin is not loaded". |
| Bug fix | Resolved a case in Firefox where the print option still let users download a PDF even with downloading turned off. |
| New | Printing of PDFs in the Firefox browser is now supported by PDF Embed API. |

### May 9, 2024

| Change | Description |
| --- | --- |
| Bug fix | Resolved trouble opening Word-based password-protected PDF files. |
| Bug fix | Resolved a developer-console error that surfaced with Chinese characters in form fields. |
| Bug fix | Resolved duplicated annotations after coming back from full screen mode. |
| New | Introduced a fresh previewFile API setting ([showFullScreenViewButton](api-howtos-ui.md)) for hiding the full-screen button in the right-hand panel. |

### January, 2024

| Change | Description |
| --- | --- |
| Changed | Essential library upgrades |
| Bug fix | Resolved problems with the error dialog shown when an invalid Client ID reaches the PDF Embed API. |

### December, 2023

| Change | Description |
| --- | --- |
| Bug fix | Shipped fixes that tighten security. |

### October, 2023

| Change | Description |
| --- | --- |
| Bug fix | Resolved a PDF-rendering failure that occurred with third-party cookies switched off. |

### September, 2023

| Change | Description |
| --- | --- |
| Bug fix | Resolved the `PREVIEW_RENDERING_FAILED` error on large PDF files. |
| Bug fix | Resolved an accessibility problem with the Search button. |

### July, 2023

| Change | Description |
| --- | --- |
| Bug fix | Patched the disappearing form-field text that struck when scrolling the PDF. Bug fix Patched the page number's visibility within the scrollbar for sized container embed mode. |

### May, 2023

| Change | Description |
| --- | --- |
| New | The new **acrobatservices.adobe.com** subdomain now also hosts PDF Embed API. For an example of how to use it, see the [sample usage](api-gettingstarted-9.md) section. Changed Refined the commenting experience. |
| Bug fix | Patched the Annotations API so dragging and dropping text comments onto the PDF works better. Bug fix Patched support so interactive PDFs behave better. |

### April, 2023

| Change | Description |
| --- | --- |
| New | The legacy viewer is no longer reachable and every call to it is routed to the new modern PDF viewer. Bug fix Patched issues to bring back the optimised viewing of Linearized PDFs. |
| Bug fix | Patched the Inline Embed mode case where a Blue Line appeared around the PDF. Bug fix Patched the Inline Embed mode case where no error message showed for an invalid client Id. |
| Changed | anonUserUUID is no longer captured by PDF Embed API in the browser's local storage. ### February, 2023 Change Description |
| ------ | ---------------------------------------------------------------------- |
| Bug fix | Resolved trouble with the onResultsUpdate callback in the Search API. ### December, 2022 Change Description |
| ------ | ---------------------------------------------------------------------- |
| Bug fix | Resolved Annotations API trouble covering a few failure paths tied to adding annotations. ### November, 2022 Change Description |
| ------ | ---------------------------------------------------------------------- |
| New | Deprecation notices for the PDF Embed API legacy viewer. Consult the [migration guide](api-pdf-embed-api.md). Bug fix Shipped fixes for a PDF-preview problem on recent Safari builds and for full screen view in `FULL_WINDOW` embed mode. |

### September, 2022

| Change | Description |
| --- | --- |
| New | The new **documentservices.adobe.com** subdomain now also hosts PDF Embed API. For an example of how to use it, see the [sample usage](api-gettingstarted-9.md) section. |

### August, 2022

| Change | Description |
| --- | --- |
| New | Across every embed mode, Adobe has rolled out a modern PDF viewer for rendering PDFs. The [Legacy to Modern viewer](api-pdf-embed-api.md) section covers the details. |

### May, 2022

| Change | Description |
| --- | --- |
| New | In just a few steps, site builders can now wire Google Analytics into PDF Embed API and gather PDF analytics. The [Google Analytics](api-howtodata.md) section has the full rundown. |

### August, 2021 (Patch Release)

| Change | Description |
| --- | --- |
| Changed | To gauge performance, PDF Embed API has stopped relying on Adobe Analytics for collecting anonymous usage data. The [Analytics](api-overview.md) section covers the details |

### August, 2021

| Change | Description |
| --- | --- |
| New | Past September 2021, PDF Embed API drops support for Internet Explorer 11 and Microsoft Edge Legacy. Through the end of that month, rendering a PDF on those browsers shows a warning urging users onto a supported one. From October 1, 2021 onward, PDF rendering ceases to function there. The [Supported browsers](api-overview.md) section lists which browsers are supported. |

### July, 2021

| Change | Description |
| --- | --- |
| Changed | Until now the PDF grabbed focus on rendering no matter the embed mode. That default has shifted: the PDF will now claim focus only when it renders in full window or lightbox embed modes. Site builders can override this default through the `focusOnRendering` preview configuration. The [Focus on PDF rendering](api-howtos.md) section covers the details. |

### June, 2021

| Change | Description |
| --- | --- |
| Changed | For the commenting feature in full window embed mode, the default of stashing user preferences (an updated annotation color, say) in local storage is now deprecated. Site builders can still keep those preferences somewhere else by way of the user-setting callbacks PDF Embed API already provides. The [User settings](api-howtos-ui.md) section has the details. |

### May, 2021

| Change | Description |
| --- | --- |
| New | Fresh undo and redo tools added to the top bar. |
| Changed | Refreshed the Adobe Acrobat branding across all embed modes. For the full window, sized container and in-line embed modes the new Adobe Acrobat logo shows up in the bottom page-controls toolbar, and for lightbox embed mode it shows in the top bar. A click on the logo opens the [Adobe Acrobat online](https://documentcloud.adobe.com/link/home) application in a fresh browser tab. The [Embed modes](api-howtos.md) section has more. |
| New | Added the ability to pass a `strokeWidth` input parameter into the `startAnnotationMode()` annotation API so the line thickness of a drawing annotation can be set programmatically. |

### April, 2021

| Change | Description |
| --- | --- |
| New | Added the ability to display linearized PDFs. |
| New | New viewer API to reach the PDF's file attachments programmatically. |

### March, 2021

| Change | Description |
| --- | --- |
| New | Added an eraser annotation tool for rubbing out parts of drawing annotations. |
| New | New viewer API to retrieve and open the PDF's bookmarks programmatically. |

### January, 2021

| Change | Description |
| --- | --- |
| New | Added the ability to add text annotations through the annotation APIs. |
| New | New viewer APIs for running zoom and search operations on the PDF programmatically. |
| New | Improvements to how PDF files shown via PDF Embed API behave in the mobile view. |
| New | Added a new “`UNSUPPORTED_FEATURE_FOUND`” event that fires whenever the end-user reaches for an unsupported feature. |
| New | Added documentation covering suggested ways to get PDF files shown via PDF Embed API indexed by search engines. |

### November, 2020

| Change | Description |
| --- | --- |
| New | Added the ability to search documents within the in-line embed mode. |
| Changed | Where the updateAnnotation API once handled only comment text, it now also updates color, stroke width, position and bounding box. |

### September, 2020

| Change | Description |
| --- | --- |
| New | Added the new “Add Text Comment” annotation tool for dropping free text onto PDFs. |
| New | Refinements to the right-hand comments panel UI. |
| New | Events for annotation actions. |
| New | A smoother PDF-viewing experience in sized container embed mode, achieved by fading the page controls and top bar in and out. |
| Bug fix | An earlier Embed API defect caused a few PDFs to fail rendering, leaving users with an error message. That is now fixed, and those PDFs render properly in the web viewer. |

### August, 2020

| Change | Description |
| --- | --- |
| New | Sized container full screen mode only: to ease exiting full screen mode, a **Close** button arrived in the top bar across every platform, and on mobile browsers a swipe-down gesture was supported too. |
| Changed | Sized container full screen mode only: sharpened the PDF-preview experience while in full screen mode on mobile browsers. |
| Bug fix | Earlier, turning off printing through the API hid the context-menu items tucked behind the overflow icon yet didn't always disable the keyboard shortcuts. The API now switches off both the menu items and the shortcuts. |

### July, 2020

| Change | Description |
| --- | --- |
| Changed | Relocated the document-search bar beneath the top bar in full window embed mode so the annotation tools stay clear during a search. |
| New | PDF Embed API bug fixes plus documentation updates surrounding the save behavior. |

## Handle search engine indexing

By default, PDFs shown through the PDF Embed API stay out of search results and aren't indexed, because the API never plants a direct reference to the PDF URL into the DOM. For the PDF to be indexed so its text turns up in a search result, that PDF's URL has to be present in the site's DOM. Search bots begin by reading a site's content and then follow every link found in the DOM.

Only the site's own developers can steer how any website gets indexed and optimised for search. One way to make PDF indexing through the PDF Embed API possible relies on sitemaps.

### Sitemap

A _sitemap_ is a file that records the pages and other files on a site together with how they relate to one another. It signals to search engines which pages and files matter on the site and hands them useful detail about those files. That helps search engines locate the content, crawl the site more efficiently, and index what they find.

To get PDF files shown via PDF Embed API indexed, site developers can drop the PDF URL into the sitemap. For instance, to put a URL into a site's XML sitemap:

```
<url>
   <loc>https://example.com/PDFs/example.pdf</loc>
</url>
```

Each `<url>` tag has to hold a `<loc>` tag carrying the PDF's URL. Stack as many `<url>` tags as you like to list the URLs of different PDF files.

Search engines will follow these sitemap links and index the PDF content to match.

### Alternative approaches

If sitemaps aren't your preferred route, other techniques exist for making PDFs discoverable to search engines. The prerequisite is that the PDF's URL is already published somewhere on the site so crawlers can find it. One pattern is to intercept the click on a PDF link and render the file through the PDF Embed API instead. Because the PDF Embed API ships with several configuration options, you can build a wide range of viewing experiences off this single hook.

A few concrete patterns you might adopt:

- Trigger the PDF link automatically once the page has finished loading, opening the document in whichever embed mode you prefer.
- Build a dedicated landing page that renders PDFs in full window embed mode by handing it the PDF reference.
- Render the PDF inline, keeping it inside the flow of the surrounding page.
- Surface the PDF over the page using the lightbox embed mode that the PDF Embed API offers.

Working code samples live [here](https://www.adobe.com/go/pdfembedapi_samples), in the `/More Samples/Handle Search Engine Indexing/` folder.

Treat the above as starting points only; the exact implementation is the site author's call and will vary with each website's layout and structure.

## See also

- [Releasenotes](api-releasenotes-3.md)
