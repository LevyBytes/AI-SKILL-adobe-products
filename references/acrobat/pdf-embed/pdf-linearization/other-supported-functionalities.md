# Other supported functionalities

- At present, linearized PDF support is offered solely within Full window embed mode. Every other embed mode quietly reverts to the standard file-rendering approach.
- Since the whole point here is to render PDFs quickly, a handful of capabilities that need the complete PDF buffer can't be used right away. Those capabilities — annotation tools and APIs, printing and downloading the PDF, document search, and the like — become usable once the PDF has finished downloading, at which point site builders are alerted via the `PDF_VIEWER_READY` event. For more on that event, consult the [Basic events](../analytics-basic-events.md) section under Analytics.
