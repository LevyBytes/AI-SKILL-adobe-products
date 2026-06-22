# Howtos Ui (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Menu and tool options

| Variable | Default | Description |
| --- | --- | --- |
| showZoomControl | _true_ | Switch this to _false_ to drop the zoom-in and zoom-out controls from the right-hand panel. It takes effect in full window and lightbox embed modes. |
| showAnnotationTools | _true_ | When _true_, the quick tools menu on the left in full window embed mode carries tools like add text, sticky note, highlight, and the rest. There's a full rundown at [Comments and Markup](api-howtos-comments.md). |
| showFullScreen | _true_ | Out of the box, sized container embed mode shows a full screen toggle down in the bottom toolbar. Switch this to _false_ to drop that full screen toggle. |
| defaultViewMode | "" | A string variable accepting "`FIT_WIDTH`", "`FIT_PAGE`", "`TWO_COLUMN`" or "`TWO_COLUMN_FIT_PAGE`". 1. `FIT_WIDTH`: Stretches the page sideways to fill the document pane's full width. 2. `FIT_PAGE`: Fits a whole page inside the current view pane. 3. `TWO_COLUMN`: Lays two PDF pages out next to each other in the current view pane. 4. `TWO_COLUMN_FIT_PAGE`: Lays two PDF pages out next to each other so that both whole pages land inside the current view pane. Bear in mind end users can flip the view mode themselves with the Fit Width, Fit Page or Two-Column button over on the right-hand panel. Beyond these, mobile browsers alone get two more view modes: 1. **CONTINUOUS**: Stacks every document page one below the next, and users glide between pages by scrolling up or down. 2. `SINGLE_PAGE`: Puts just one document page on screen at a time with no neighbouring page in sight. Users swipe to move to other pages, which show up one at a time. |
| enableFormFilling | _true_ | When _true_, form filling turns on and users get to edit fields in full window embed mode. |
| showDownloadPDF | _true_ | When _true_, the PDF is downloadable across every embed mode. Switch this to _false_ to block PDF download. |
| showPrintPDF | _true_ | When true, the PDF is printable across every embed mode. Switch this to _false_ to block PDF printing. |
| exitPDFViewerType | "CLOSE" | By default the top bar in lightbox embed mode holds a close button for dismissing the PDF preview; switch `exitPDFViewerType` to "RETURN" to make it a Back button instead. |
| showThumbnails | _true_ | Full window and lightbox embed modes carry page thumbnails by default. Switch this to _false_ when you'd rather drop the thumbnails from the right-hand panel. |
| showBookmarks | _true_ | Full window and lightbox embed modes carry PDF bookmarks by default. Switch this to _false_ when you'd rather drop the bookmarks from the right-hand panel. |
| enableLinearization | _false_ | Switch this to _true_ to turn on PDF linearization. The [PDF linearization](api-howtos.md) section has the full rundown. |
| enableAnnotationAPIs | _false_ | Set it _true_ and, within full window embed mode, your code can add, update, and remove PDF annotations on its own. The [Annotations API overview](api-howtos-comments.md) section has the full rundown. |
| includePDFAnnotations | _false_ | Pair this with `enableAnnotationAPIs` to reach existing PDF annotations. The [Annotations API overview](api-howtos-comments.md) section has the full rundown. |
| enableSearchAPIs | _false_ | Switch this to _true_ to run a search across the PDF programmatically. The [Search APIs](api-howtos-ui.md) section has the full rundown. |
| showDisabledSaveButton | _false_ | Switch this to _true_ to keep a greyed-out save button on screen even when nothing has changed that needs saving to the PDF. |
| focusOnRendering | Varies according to embed mode | This configuration leaves it up to website developers whether the PDF grabs focus the moment it renders. The [Focus on PDF rendering](api-howtos.md) section has the full rundown. |
| showFullScreenViewButton | _true_ | Switch this to _false_ to drop the full-screen control from the right-hand panel. It takes effect in full window and lightbox embed modes. |

## Annotations

For details, see [Comments and Markup](api-howtos-comments.md).

## Callbacks & workflows

Callbacks are how the PDF Embed API lets you customize workflows. Register them with the parameters you specify and, as a website developer, you gain a grip on workflows tied to saving files, user profiles, user settings, and the like.

Three parameters accompany every callback:

- Callback type: any one of `SAVE_API`, `STATUS_API`, `GET_USER_PROFILE`,
  `GET_USER_SETTING_API`, or `SET_USER_SETTING_API`
- Function: a JavaScript function that hands back a promise.
- Options: Extra options handed to the callback that steer how it
  behaves in particular situations.

There's a one-callback-per-type limit; you might, say, wire up one callback for save and another for status.

Because `registerCallback` lives on `AdobeDC.View`, the call ends up looking roughly like this:

```javascript
adobeDCView.registerCallback(options);
```

That second parameter is a function handing back a promise that either resolves or fails, carrying a response object made of _code_ and _data_. On a clean run the promise ought to resolve; when something goes wrong it ought to be rejected. Send the matching code along with the promises:

```javascript
return new Promise((resolve, reject) => {
 /* Success
  resolve({
      code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
      data: {...}
  }); */

 /* Failure
  reject({
      code: AdobeDC.View.Enum.ApiResponseCode.FAIL,
      data: {...}
  }); */
}
```
