# Howtos (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## PDF Linearization

To speed up viewing, linearization restructures a PDF so the opening page can be shown as fast as possible, well before the whole file finishes downloading. The extra data baked into a linearized PDF lets a server stream its pages one by one through byte-range requests. That makes linearization especially valuable for big documents, or for readers stuck on sluggish connections, since the overall viewing experience feels much quicker.

PDFs that have been linearized and sit on byte-range-capable servers can be rendered through the PDF Embed API.

For details, see [Enabling byte-streaming on a server](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#enabling-byte-streaming-on-a-server).

### Display linearized PDFs

To show linearized PDFs through the PDF Embed API, switch the `enableLinearization` variable to true (it is false by default) and hand it to the `previewFile` API as part of the preview configuration.

Just as the [Passing file content](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#passing-file-content) section explains, you can supply the linearized PDF either as a file URL or as a file Promise.

### File URL

Drop the linearized PDF's URL into the `content` field, then call the `previewFile` API.

```html
<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
    var previewFilePromise = adobeDCView.previewFile(
      {
        content: { location: { url: "<URL_OF_LINEARIZED_PDF>" } },
        metaData: { fileName: "<FILE_NAME>" },
      },
      {
        enableLinearization: true,
      },
    );
  });
</script>
```

### File Promise

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

```html
<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function() {
    const linearizationInfoObject = {
      getInfo: () => getInfo(),
      getInitialBuffer: () => getInitialBuffer(),
      getFileBufferRanges: ranges => getFileBufferRanges(ranges)
    };

    var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
    var previewFilePromise = adobeDCView.previewFile({
      content:   {
        promise: <FILE_PROMISE>,
        linearizationInfo: linearizationInfoObject
      },
      metaData:  {fileName: "<FILE_NAME>"}
    },
    {
      enableLinearization: true,
    });

    function getInfo() {
      /* Write down your own implementation here */
      return new Promise((resolve, reject) => {
        resolve({
          fileSize: <FILE_SIZE>
        });
      });
    }

function getInitialBuffer() {
      /* Write down your own implementation here */
      return new Promise((resolve, reject) => {
        resolve({
          buffer: <ARRAY_BUFFER>
        });
      });
    }

    function getFileBufferRanges(ranges) {
      /* Write down your own implementation here */
      /* Ranges parameter
         ranges: [{ start: NUMBER, end: NUMBER}, { start: NUMBER, end: NUMBER}, . . .]
      */
      return new Promise((resolve, reject) => {
        resolve({
          bufferList: [
            <ARRAY_BUFFER>,
            <ARRAY_BUFFER>,
             . . .
          ]
        });
      });
    }
  });

```

Grab the runnable code sample [here](https://www.adobe.com/go/pdfembedapi_samples), located under `/More Samples/Linearization`

### Supported browsers and platforms

Rendering linearized PDFs through the PDF Embed API succeeds on browsers that back SharedArrayBuffer — Chrome, for one, along with the Chromium-based desktop build of Microsoft Edge. On any other desktop browser, and on mobile browsers, it quietly reverts to the standard behaviour (the non-linearized flow), pulling down the whole PDF ahead of preview.

### Other supported functionalities

- At present, linearized PDF support is offered solely within Full window embed mode. Every other embed mode quietly reverts to the standard file-rendering approach.
- Since the whole point here is to render PDFs quickly, a handful of capabilities that need the complete PDF buffer can't be used right away. Those capabilities — annotation tools and APIs, printing and downloading the PDF, document search, and the like — become usable once the PDF has finished downloading, at which point site builders are alerted via the `PDF_VIEWER_READY` event. For more on that event, consult the [Basic events](api-howtodata.md) section under Analytics.

### Enabling byte-streaming on a server

For a server hosting the linearized PDFs to deliver partial file content over HTTP 206 responses, it needs byte-streaming support.

By way of example, here is how you would turn byte-streaming on for an Apache 2.4 server.

Within httpd.conf, apply these edits:

1. Remove the comment marker from this line: LoadModule headers_module modules/mod_headers.so
2. Inside whichever `<Directory>` applies to you, configure the headers

```

## To allow byte-streaming and range support

Header set Access-Control-Allow-Headers "Range"
```

For further background on Access-Control-Allow-Headers, take a look at this
[article](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers).

## To allow byte-streaming and range support — Language support

A whole range of languages is available in the PDF Embed API. English (en-US) is what it falls back to, though you can pick a different one by handing in the locale-code variable as you construct the `AdobeDC.View object`.

```javascript
var adobeDCView = new AdobeDC.View({
    clientID: "<YOUR_CLIENT_ID>",
    divId: "adobe-dc-view",
    locale: "ja-JP",
```

Supported languages

| Language | Locale Code |
| --- | --- |
| Danish | da-DK |
| Dutch | nl-NL |
| English (United Kingdom) | en-GB |
| English (United States) | en-US |
| Finnish | fi-FI |
| French | fr-FR |
| German | de-DE |
| Italian | it-IT |
| Japanese | ja-JP |
| Norwegian | nb-NO |
| Portuguese | pt-BR |
| Spanish | es-ES |
| Swedish | sv-SE |
| Czech | cs-CZ |
| Korean | ko-KR |
| Polish | pl-PL |
| Russian | ru-RU |
| Turkish | tr-TR |
| Chinese | zh-CN |
| Chinese | zh-TW |

## To allow byte-streaming and range support — Troubleshooting

Debugging a web app alongside the PDF Embed API is just ordinary web development. Reach for whatever tooling you already know — Chrome Developer Tools, or your own IDE, for instance.

**Why is my URL value not used to access the PDF data?**

When both a file URL and a file promise are supplied, the promise takes precedence and the URL value is left unused.

**Why do I see the error "Invalid client Id provided"?**

Either the client ID you supplied is wrong, or you're running it on a domain that differs from the one you registered.
