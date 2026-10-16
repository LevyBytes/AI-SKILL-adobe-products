# Performance considerations

Photoshop images may be very large, so JavaScript needs to manage image data carefully.
Heavy JavaScript memory use can trigger UDT debugger console warnings like these:

```text
Plugin memory usage increased to: 600MB.
Plugin exceeds memory limit. Currently used memory 600.
```

Large pixel data affects API usage in several ways.

First, every Imaging API method that returns pixels is asynchronous. That is necessary because querying or changing pixel data can involve disk I/O.

Request the smallest target area that satisfies the task. A small target size lets Photoshop optimize source-region retrieval and, when needed, document compositing.

After finishing with image data, call `dispose` on the `PhotoshopImageData` instance. This lets Photoshop release memory immediately instead of waiting for JavaScript garbage collection.

Color-space or color-profile conversion can take noticeable time. When possible, use the same color space and color profile as the document you are working on.
