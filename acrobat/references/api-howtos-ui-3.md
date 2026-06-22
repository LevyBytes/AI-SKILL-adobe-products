# Howtos Ui (part 3)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## User Profiles

Through the user profile callback you get to hand over profile details like first name, last name, and email address. Skip registering a user profile callback and the comments panel labels the user "Guest" by default.

[Figure: User being referred to as guest](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/userprofile-new.png)

Register that callback and a user's annotations then carry their matching username.

[Figure: User being referred with correct username](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/userprofile1.png)

**User profile callback signature**

```javascript
const profile = {
  userProfile: {
      name: <name of user>,
      firstName: <first name>,
      lastName: <last name>,
      email: <user email>
  }
};

adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
   function() {
      return new Promise((resolve, reject) => {
         resolve({
            code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: profile
         });
      });
   },
{});
```

## User settings

To recolor an annotation, a user clicks the PDF annotation and swaps its color from the toolbar. From then on, every fresh annotation of that type picks up the new color. On top of that, the first time anyone selects an annotation tool, a coach mark surfaces to explain it and then fades out after a few seconds.

In the old default behavior, these user preferences worked by having the browser hold onto the changed annotation color along with whether a given tool's coach mark had already shown. That came from stashing the data in the local storage of the PDF Embed API domain. That approach is now deprecated, and the PDF Embed API no longer keeps the data.

What this means by default is that the preferences vanish on a PDF reload: the changed annotation color is forgotten (so the default color applies instead) and users meet the annotation tool coach marks all over again when the PDF reloads.

Website developers can sharpen this experience by registering the user setting callbacks. Two of them come into play:

- `SET_USER_SETTING_API`: Persists settings specific to the user.
- `GET_USER_SETTING_API`: Pulls back the current user setting.

These callbacks let developers roll their own implementation and stash the user preferences anywhere they please.

**User settings callback signature**

```javascript
adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.SET_USER_SETTING_API,
   function(setting) {
      /* Add your custom implementation here to save the user setting */
      ...
      ...
      return new Promise((resolve, reject) => {
         resolve({
            code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS
         });
      });
   },
{});

adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.GET_USER_SETTING_API,
   function() {
      /* Fetch the user setting */
      return new Promise((resolve, reject) => {
         resolve({
            code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
               setting: <USER_STORED_SETTING>
            }
         });
      });
   },
{});
```

Grab the working code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Save User Preferences/`. That sample puts the user
setting callbacks to work saving preferences in the website domain's local
storage. With it in place, the browser hangs onto the changed annotation color and
surfaces the coach mark just one time for each annotation tool in the current browser.

Treat this as nothing more than an example; the actual way of saving the user preferences is entirely the website developer's call.

## Save a PDF

Up on the top bar, the Save button stays out of sight until the PDF changes: only once the PDF has been modified (meaning there's genuinely something to save) does it wake up. Take `showAnnotationTools` set to true as an example, where users can drop in an annotation or comment and you can offer them a way to save the changed PDF somewhere local or on the network.

Secure, protected, or read-only PDF files block users from adding comments or editing them. For files like that, both the annotation tools and the save button stay hidden.

Keep in mind the Save button is hidden by default, yet you can surface it with nothing to save once `showDisabledSaveButton` is _true_ and that flag rides into the `previewFile` API as part of the preview configuration. The button then shows up greyed out right until the PDF is modified.

```javascript
{
  showDisabledSaveButton: <Boolean, default=false>,
}
```

### Save callback

Through this callback, users can save the refreshed PDF buffer, which can then go off to an external file storage system.

- **If you do not register a callback**: Add any annotation to the PDF and
  a download button shows up in the top bar. Hit that download button to save
  the refreshed PDF onto the user's own machine.
  More often than not it lands in the Downloads folder.
- **If you do register a callback**: Add any annotation to the PDF and
  a save button shows up in the top bar. Your code can then route the
  changed document off to an external file storage system such as OneDrive
  or Google Drive. Here the code differs from one website
  developer's implementation to another.

The save action fires when a user either clicks the
**Save** or **Download** button by hand or hits **Ctrl+S** on the keyboard. Register the callback so you pick up the changed file content the
moment the user kicks off a save.

These options are available for steering how the save callback behaves:

- `autoSaveFrequency`: Optional, defaulting to 0. Auto-saving is baked
  into the save callback so nobody has to save by hand. The value is
  a count of seconds, after which the PDF auto-saves provided there are
  unsaved changes and no further annotation changes have happened in
  between. With this on, the document gets saved even when the user
  never does it manually. Give this parameter a number above 0.
- `enableFocusPolling`: Optional, defaulting to false. Set it true and
  a PDF holding unsaved changes auto-saves the instant the user's focus
  leaves the current PDF preview (say, by opening a fresh tab in the
  same browser). Leave it false and no such auto-save fires. Turn this
  parameter true if that's the behavior you're after.
- `showSaveButton`: Optional, defaulting to true. Set it false when you
  want the save button gone entirely, kept off even after the PDF is
  modified. With it false, the save button never appears and saving
  happens through auto-save or by pressing Ctrl+S on the keyboard.

The second callback parameter is a JavaScript function returning a
Promise that either resolves or fails with a response object holding
code and data. Among the function parameters are:

- `metaData`: details describing the file
- `content`: the file content's ArrayBuffer
- `options`: (optional) Further user options handed to the function
  to steer its behavior in certain cases. The `saveAs`
  option, for one, arrives here when the current user saves a copy of a
  changed PDF amid several people working on one shared document (See the
  `FILE_MODIFIED` case below).

**Save callback signature**

```javascript
const saveOptions = {
   autoSaveFrequency: <Number, default=0>,
   enableFocusPolling: <Boolean, default=false>,
   showSaveButton: <Boolean, default=true>
}

adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.SAVE_API,
   function(metaData, content, options) {
      /* Add your custom save implementation here...and based on that resolve or reject response in given format */
      return new Promise((resolve, reject) => {
         resolve({
            code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
               /* Updated file metadata after successful save operation */
               metaData: <File MetaData>
            }
         });
      });
   },
   saveOptions
);
```

Inside this function the website developer can drop in their own save logic, then return the response object carrying the right code and data in the format below:

- SUCCESS: Reach for this response code to mark a save that went
  through, with the response data holding the updated file
  metadata.
- FAIL: Reach for the FAIL response code whenever the save API fails.
  Here the response data is optional. An error popup greets the user,
  who should then try saving again.

[Figure: Generic Error Message](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fail.png)

- `FILE_MODIFIED`: Reach for the response code `FILE_MODIFIED` to handle the moment when two users
  edit one PDF at the same time. It crops up only with shared
  files. Saving breaks for the current user once another user has already changed the file
  content. The response data then carries the name and email of that other user editing the same
  file.

Faced with this, the current user gets a popup offering two choices:

- **Save a copy**: Hitting the **Save a copy** button fires the
  save callback once more and stores a copy of the PDF holding the current
  user's changes. The `{saveAs: true}` option goes to the
  `options` parameter of the function to signal that a fresh PDF was
  saved.
- **Discard my changes**: drops whatever the current user altered and
  brings the PDF back fresh.

[Figure: File Modified message](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/file-modified.png)

**Save callback**

```javascript
/* Options to control save behavior */
const saveOptions = {
   autoSaveFrequency: <Number, default=0>,
   enableFocusPolling: <Boolean, default=false>,
   showSaveButton: <Boolean, default=true>
}

/* Register save callback */
adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.SAVE_API,
   function(metaData, content, options) {
      /* Write down your own save implementation here... and based on that resolve or reject response in given format */
      /* Save callback success case */
      return new Promise((resolve, reject) => {
         resolve({
            code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
              metaData: Object.assign(metaData, {fileName: <UPDATED_FILE_NAME>})
            }
         });
      });

     /* Save callback failure case */
     /* return new Promise((resolve, reject) => {
           reject({
              code: AdobeDC.View.Enum.ApiResponseCode.FAIL,
              data: {
              }
           });
        }); */

     /* Save callback file modified case */
     /* return new Promise((resolve, reject) => {
           resolve({
              code: AdobeDC.View.Enum.ApiResponseCode.FILE_MODIFIED,
              data: {
                 modifiedBy: {
                   name: <Username of the user who modified the file>,
                   mail: <Email of the user who modified the file>,
                 }
              }
           });
        }); */
   },
   saveOptions);
```

## Status callback

With the status callback you can periodically check whether someone else has altered the file that is presently open. That check repeats on a fixed schedule, the length of which comes from the `filePollFrequency` option. Pairing the save callback with the status callback gives you the full save workflow — auto-save plus file-change polling — in one piece.

It is possible to set extra options on the status callback, yet `autoSaveFrequency` and `enableFocusPolling` no longer apply here; both are deprecated for this callback. The recommendation is to attach those two to the save callback instead.

- `filePollFrequency`: Optional; its default sits at 10 seconds. This
  is how many seconds elapse between each poll of the file for changes.
  Setting `filePollFrequency` to 0 switches the polling off entirely.
  Out of the box, polling kicks in once the current user has made edits
  to the PDF that aren't yet saved.
- `keepPolling`: Optional, defaulting to false (boolean). Turn
  `keepPolling` to true when you'd like the polling to keep running
  non-stop, even with no pending unsaved edits from the current user.
  How often that polling happens is still dictated by whatever you set
  in `filePollFrequency`.

**Status callback signature**

```javascript
const statusOptions = {
   filePollFrequency: <Number, default=10>,
   keepPolling: <Boolean, default=false>
};

adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.STATUS_API,
   function(metaData) {
      /* Resolve or reject response in given format */
      return new Promise((resolve, reject) => {
         resolve({
            code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
            }
          });
       });
    },
    statusOptions
);
```

For its second argument the callback expects a JavaScript function that hands back a Promise; that Promise settles either by resolving or by failing, carrying a response object that holds a code together with data. The sole parameter handed to the function is `metaData`, which points at the file information. Within the Promise, two response codes are valid — SUCCESS and `FILE_MODIFIED`:

SUCCESS: Return this code to signal that polling went through cleanly and that no other user has touched the file. Supplying response data is optional in this case.

`FILE_MODIFIED`: Reach for this code when a shared file has picked up conflicting edits from a second user. The accompanying response data carries the name and email of whoever else is editing that same file. Keep these points in mind:

- Should the Promise hand back `FILE_MODIFIED` while the current user
  has made no edits, that signals the file was already changed by
  someone else and the current user is looking at a stale version.
  A popup then appears offering the "Get Latest Version" option,
  which pulls in the newest copy of the file.

[Figure: Get Latest Version message](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/getlatest.png)

- Should the Promise hand back `FILE_MODIFIED` once the current user
  has edited the file, that indicates two people are editing the same
  file at once. Here a popup gives the current user a pair of choices:
  **Save a copy** stores a copy of the PDF carrying the current user’s
  edits, whereas **Discard my changes** throws away those edits and
  reloads the PDF.

[Figure: Conflict On Save message](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/saveconflict.png)

**Status callback**

```javascript
const statusOptions = {
       filePollFrequency: <Number, default=10>,
       keepPolling: <Boolean, default=false>
    };

    adobeDCView.registerCallback(
       AdobeDC.View.Enum.CallbackType.STATUS_API,
       function(metaData) {
          /* Resolve or reject response in given format */
          /* Status callback success case */
          return new Promise((resolve, reject) => {
             resolve({
                code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
             });
          });

          /* Status callback file modified case */
          /* return new Promise((resolve, reject) => {
                resolve({
                   code: AdobeDC.View.Enum.ApiResponseCode.FILE_MODIFIED,
                   data: {
                      modifiedBy: {
                         name: <Username of the user who modified the file>,
                         mail: <Email of the user who modified the file>,
                      }
                   }
                });
             }); */
       },
       statusOptions
    );
```

## Viewer API

For tailoring the interface and the way users interact with the PDF, the PDF Embed API ships a set of viewer APIs. You can call on them to drive UI changes through code while the viewer is running.

### GetAPIs Interface

Through the getAPIs interface you gain a way to call any viewer API, like so:

```html
<html>
  <head>
    <title>Adobe Acrobat Services PDF Embed API Sample</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin: 0px">
    <div id="adobe-dc-view"></div>
    <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
    <script type="text/javascript">
      document.addEventListener("adobe_dc_view_sdk.ready", function () {
        var adobeDCView = new AdobeDC.View({
          clientId: "<YOUR_CLIENT_ID>",
          divId: "adobe-dc-view",
        });
        var previewFilePromise = adobeDCView.previewFile({
          content: {
            location: {
              url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
            },
          },
          metaData: { fileName: "Bodea Brochure.pdf" },
        });

        previewFilePromise.then((adobeViewer) => {
          adobeViewer.getAPIs().then((apis) => {
            // All viewer APIs can be invoked here
          });
        });
      });
    </script>
  </body>
</html>
```

### Zoom APIs

Use these to drive the PDF's zoom behavior from code. Every embed mode supports them apart from in-line embed mode.

### getZoomLimits

What this one hands back is the lowest and highest zoom levels the PDF permits.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with a JSON object including the minimum and maximum zoom level of the PDF. `{ minZoom: <MIN_ZOOM_LEVEL>, maxZoom: <MAX_ZOOM_LEVEL> }`
- Rejects with an error object that includes a code and message.

### API signature

```

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getZoomAPIs().getZoomLimits()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### zoomIn

Calling this steps the PDF up to the next zoom level, enlarging the view. That enlarged level is capped and can never go beyond the PDF's maximum zoom level.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the updated zoom level.
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getZoomAPIs().zoomOut()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### zoomOut

Calling this drops the PDF down to the previous zoom level, shrinking the view. That reduced level is floored and never falls under the PDF's minimum zoom level.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the updated zoom level.
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getZoomAPIs().zoomOut()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### setZoomLevel

Hand this one a float and it pins the PDF's zoom to that figure. Whatever you pass has to fall inside the PDF's permitted minimum and maximum zoom range.

Pass a value under the minimum zoom level and the PDF snaps to its minimum instead. The same goes the other way: a value over the maximum zoom level forces the maximum to apply.

### Input parameters

`<ZOOM_LEVEL: Float>`

### API output

Returns a Promise which,

- Resolves with the updated zoom level.
- Rejects with an error object that includes a code and message.

### API signature

```
previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
                apis.getZoomAPIs().setZoomLevel(<ZOOM_LEVEL>)
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
        });
});
```

### Search APIs

This one lets you hunt for a term inside the PDF from code, and it works across every embed mode.

To switch the search APIs on, flip the `enableSearchAPIs` configuration variable to true and hand it to the `previewFile` API as part of the preview configuration.

```html
<html>
  <head>
    <title>Adobe Acrobat Services PDF Embed API Sample</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin: 0px">
    <div id="adobe-dc-view"></div>
    <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
    <script type="text/javascript">
      document.addEventListener("adobe_dc_view_sdk.ready", function () {
        var adobeDCView = new AdobeDC.View({
          clientId: "<YOUR_CLIENT_ID>",
          divId: "adobe-dc-view",
        });
        var previewFilePromise = adobeDCView.previewFile(
          {
            content: {
              location: {
                url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
              },
            },
            metaData: { fileName: "Bodea Brochure.pdf" },
          },
          { enableSearchAPIs: true },
        );

        previewFilePromise.then((adobeViewer) => {
          adobeViewer.getAPIs().then((apis) => {
            // All viewer APIs can be invoked here
          });
        });
      });
    </script>
  </body>
</html>
```

Turning the search APIs on removes the document search option from the UI.
