# File Promise

When the file's bytes are on hand as an ArrayBuffer, you can feed them straight in as a Promise that resolves to that file content's ArrayBuffer.

Hand this file promise to the `content` field. Together with it, supplying an object named `linearizationInfo` inside the `content` field is **mandatory**.

Three functions live on the `linearizationInfo` object:

**getInfo()**

Returns a Promise which,

- Resolves with an object carrying the file size. As an example, a HEAD request against the PDF URL yields its content length, which gives you the size of the file.
- When the content length proves invalid, reject the Promise, and rendering quietly reverts to handling the file without linearization.

**getInitialBuffer()**

Returns a Promise which,

- Resolves with an object carrying the file's opening array buffer. That initial buffer spans bytes 0 - 1024, the range needed to paint the first page of the linearized PDF.
- When this call breaks on an unexpected error, reject the Promise, and rendering quietly reverts to handling the file without linearization.

**getFileBufferRanges()**

Returns a Promise which,

- Resolves with an object carrying the requested array buffers of the file, keyed off the `ranges` parameter that the PDF Embed API supplies at run time. That `ranges` parameter holds an array of `start` and `end` file ranges.

Should the `ranges` array hold more than a single object, you have two routes for fetching the file buffers:

1.  Issue a separate call per range object in the `ranges` array, then hand back the merged result.
2.  Issue one call whose **Range** header is set to comma-separated start-end pairs for every range object (for example: "bytes=0-1024, 1024-2048").

- If any range call breaks, or a range call hands back the whole PDF buffer, reject the Promise; rendering will then revert to the non-linearized flow.

- Should you supply both a file URL and a file promise for a linearized PDF, the promise wins and the URL value is disregarded.
- When you go the file-promise route, passing the `linearizationInfo` object is required. That object has to carry all three functions: `getInfo()`, `getInitialBuffer()` and `getFileBufferRanges()`.

Keep in mind that the site builder may plug in their own implementation of these functions and attach it to the `linearizationInfo` object.

[Complete linearized PDF preview page](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos_ui/).

Grab the runnable code sample [here](https://www.adobe.com/go/pdfembedapi_samples), located under `/More Samples/Linearization`
