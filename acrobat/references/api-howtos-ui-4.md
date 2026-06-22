# Howtos Ui (part 4)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Viewer API

Feed the search API a String and it scans the whole document for that term. Highlighting lands on the term's first appearance, counting forward from whichever page is currently on screen.

### Input parameters

`<SEARCH_STRING: String>`

### API output

Returns a Promise which,

- Resolves with a JSON object containing the following interfaces:
  - `onResultsUpdate()`
  - `next()`
  - `previous()`
  - `clear()`
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.search(<SEARCH_STRING>)
                        .then(searchObject => console.log(searchObject))
                        .catch(error => console.log(error));
        });
});
```

### onResultsUpdate

You can hand a callback of your own into `onResultsUpdate()`. Every time the search API runs a search and a hit gets highlighted in the PDF, that callback fires. It is handed the key facts about the current hit packaged as a JSON — things like the page now in view, the index of the active result, how many results exist in total, and the status.

```javascript
{
    currentResult: {
        pageNumber: Integer,  // Current page number in view
        index: Integer,       // Index of the current highlighted search result
    },
    totalResults: Integer,   // Total number of search results found till the time callback function is executed
    status: String           // Status of search result till the time callback function is executed. Values can be "IN_PROGRESS" or "COMPLETED".
}
```

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation. When operation is successful, the callback function is executed and receives information about the search results in the form of a JSON. Resolves to false when `onResultsUpdate()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

```
function callbackFunction(searchResult) {
        console.log("Current search result: ", searchResult);
}

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.search(<SEARCH_STRING>).then(searchObject => {
                        searchObject.onResultsUpdate(callbackFunction)
                                .then(result => console.log(result))
                                .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
        });
});
```

### next

Invoking this jumps to and highlights whichever search result comes next in the PDF.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation and the next search result is highlighted in the PDF. Resolves to false when `next()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.search(<SEARCH_STRING>).then(searchObject => {
                        searchObject.next()
                                .then(result => console.log(result))
                                .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
        });
});
```

### previous

Invoking this jumps back to and highlights whichever search result came before in the PDF.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation and the previous search result is highlighted in the PDF. Resolves to false when `previous()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.search(<SEARCH_STRING>).then(searchObject => {
                        searchObject.previous()
                                .then(result => console.log(result))
                                .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
        });
});
```

### clear

Invoking this halts the search that is underway and wipes out the results.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation. Stops ongoing search operation and clears the search results. Resolves to false when `clear()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.search(<SEARCH_STRING>).then(searchObject => {
                        searchObject.clear()
                                .then(result => console.log(result))
                                .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
        });
});
```

Grab the runnable search-and-zoom code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Viewer APIs/Search and Zoom APIs`

### Bookmark APIs

Reach for these to get at the PDF's existing bookmarks from code. Be aware that Full Window embed mode is the only mode in which they work.

### getBookmarks

This one yields the roster of bookmarks already in the PDF. Every entry on that roster arrives as a JSON holding the essentials — its ID, its title, and the set of child bookmarks nested beneath it.

```javascript
{
    id: Number      // Unique identifier of the bookmark
    title: String,  // Title of the bookmark
    children: [ CHILD_BOOKMARK_1, CHILD_BOOKMARK_2, ... ]     // List of nested bookmarks which exists under this bookmark
}
```

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the list of bookmarks available in the PDF. `[ Bookmark_1, Bookmark_2, ...]`
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getBookmarkAPIs().getBookmarks()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### openBookmark

Give this one a bookmark ID and it takes you straight to that specific PDF bookmark.

### Input parameters

`<BOOKMARK_ID>`

### API output

Returns a Promise which,

- Resolves to true on successful API execution and the user navigates to that particular bookmark. Resolves to false when the bookmark does not exist in the PDF.
- Rejects with an error object that includes a code and message.

### API signature

```
const bookmark_ID = <BOOKMARK_ID>;

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getBookmarkAPIs().openBookmark(bookmark_ID)
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

Grab the runnable code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Viewer APIs/Bookmark APIs`

### Attachment APIs

Turn to these to reach the PDF's existing attachments from code.

### getAttachments

This one yields the roster of attachments already sitting in the PDF. Every entry on that roster arrives as a JSON carrying the essentials — its name, its mime type, its description, plus the dates it was created and modified.

```javascript
{
    name: String         // Name of the attachment file
    description: String, // Description of the attachment
    mimeType: String     // Mime type of the attachment file
    created: Date        // Date when the attachment was created
    modified: Date       // Date when the attachment was modified
}
```

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the list of attachments available in the PDF: `[ Attachment_1, Attachment_2,...]`
- Every attachment item in this list will contain information such as `name`, `description`, `mimeType`, `created` and `modified`.
- Rejects with an error object that includes a code and message.

### API signature

```

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getAttachmentAPIs().getAttachments()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### getAttachmentBuffer

Pass this one the name of an attachment and it returns that attachment content's ArrayBuffer.

### Input parameters

`<ATTACHMENT_NAME: String>`

### API output

Returns a Promise which,

- Resolves with the ArrayBuffer of the attachment file: `{ buffer: Int8Array }`
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getAttachmentAPIs().getAttachmentBuffer(<ATTACHMENT_NAME>)
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

Grab the runnable code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Viewer APIs/Attachment APIs`

### getPDFMetadata

Pulling from the PDF dictionary, this one reports the document's core facts — for instance its page count and its title.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with a JSON object which includes the number of pages and title of PDF if successful: `{ numPages: <NUMBER_OF_PAGES>, pdfTitle: <PDF_TITLE> }`
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getPDFMetadata()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### getXMPMetadata

Adobe built XMP (Extensible Metadata Platform) as a shared XML framework for holding metadata inside digital documents. The metadata XMP carries covers details about the document and what it holds — among them the author's name, keywords, and copyright information.

What `getXMPMetadata` does is look in the PDF for XMP metadata and, when it finds some, return it. Two optional parameters can be supplied to the API.

- Parameter one accepts a list of XMP metadata fields, and the API
  returns values for just those fields. Pass nothing and you get the
  default field values back instead.
- Parameter two accepts a boolean. Set it to _true_ and the API also
  hands back the full XMP metadata stream. Left alone it defaults to
  _false_.

### Input parameters

`(fields = [<field1>, <field2>, ...], includeRawStream = <Boolean>)`

### API output

Returns a Promise which,

- Resolves with the JSON object containing the XMP metadata and XML stream (if `includeRawStream` is set to true) if successful: `{ xmpMetadata: <XMP_METADATA>, xmpStream: <XML> }`
- Rejects with an error object that includes a code and message.

### API signature

```

const fields = ["dc:title", "dc:creator", "xmp:CreateDate"];
const includeRawStream = true;
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getXMPMetadata(fields, includeRawStream)
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### getSelectedContent

Whenever a user highlights something inside the viewer, this API lets you retrieve what they selected. For now its reach is limited to text selections only.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with a JSON object including the type of content and actual selected content if successful: `{ type: "<CONTENT_TYPE>", data: "<SELECTED_CONTENT>" }`
- Rejects with an error object that includes a code and message.

### API signature

```

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getSelectedContent()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### setCursor

Use this API to swap the page cursor for any cursor style you like — help, wait, crosshair, and so on.

### Input parameters

[A string denoting the cursor style](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor): `<Cursor_Type>`

### API output

N/A

### API signature

```

const cursor_type = <Cursor_Type>;
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.setCursor(cursor_type)
  .then(()  =>  console.log("Success"))
  .catch(error  =>  console.log(error));
         });
});
```

### resetCursor

Use this API to take back a cursor style you applied earlier and return to the default cursor.

### Input parameters

N/A

### API output

N/A

### API signature

```
previewFilePromise.then(adobeViewer => {

        adobeViewer.getAPIs().then(apis => {
                apis.resetCursor();
         });
});
```

### getCurrentPage

What this API gives you is the page number of whichever page currently holds focus.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the current page number if successful
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getCurrentPage()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
         });
});
```

### getPageZoom

Hand this API a PDF page number and it reports back that page's zoom level.

### Input parameters

`<Page_Number>`

### API output

Returns a Promise which,

- Resolves with the zoom level if successful
- Rejects with an error object that includes a code and message.

### API signature

```

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getPageZoom(<Page_Number>)
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
         });
});
```

### gotoLocation

With this API you can jump to any page in the PDF; it takes a page number to do so. Optional x and y coordinates may also be supplied so you can land on a precise spot on the page. Leave the coordinates off and they fall back to (0, 0).

If the page number you give runs past the PDF's page count, the jump simply won't happen. The x and y values likewise have to stay within the page's width and height; whichever of the two strays outside that range gets reset to 0.

### Input parameters

(`<Page_Number>`, `<X_Coordinate>`, `<Y_Coordinate>`)

### API output

Returns a Promise which,

- Resolves if successful
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {

        adobeViewer.getAPIs().then(apis => {
                apis.gotoLocation(<Page_Number>, <X_Coordinate>, <Y_Coordinate>)
                        .then(() => console.log("Success"))
                        .catch(error => console.log(error));
         });
});
```

### clearPageSelection

Give this API a page number and it removes whatever text selection is currently applied to that page.

### Input parameters

`<Page_Number>`

### API output

Returns a Promise which,

- Resolves if successful
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {

adobeViewer.getAPIs().then(apis => {
                apis.clearPageSelection(pageNumber)
                        .then(() => console.log("Success"))
                        .catch(error => console.log(error));
         });
});
```

### enableTextSelection

This API governs whether text can be selected in the PDF, and selection is on (_true_) out of the box. Bear in mind that switching selection off also takes the highlight annotation tool out of the quick tools menu along the left edge.

### Input parameters

Boolean

### API output

Returns a Promise which,

- Resolves if successful
- Rejects with an error object that includes a code and message.

### API signature

```
const allowTextSelection = false;

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.enableTextSelection(allowTextSelection)
                        .then(() => console.log("Success"))
                        .catch(error => console.log(error));
         });
});
```
