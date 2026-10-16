# Status callback

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
function registerFileStatus(view, checkFile, overrides = {}) {
    const enums = AdobeDC.View.Enum;
    const statusOptions = { filePollFrequency: 10, keepPolling: false, ...overrides };
    view.registerCallback(enums.CallbackType.STATUS_API, async metaData => {
        try {
            const modifiedBy = await checkFile(metaData);
            return modifiedBy ? {
                code: enums.ApiResponseCode.FILE_MODIFIED,
                data: { modifiedBy }
            } : { code: enums.ApiResponseCode.SUCCESS, data: {} };
        } catch (error) {
            throw { code: enums.ApiResponseCode.FAIL, data: {} };
        }
    }, statusOptions);
}
```

checkFile receives the current file metadata. Return {name, mail} for the user responsible for a detected modification, otherwise null; reject if the status check fails.

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
function registerFileStatus(view, checkFile, overrides = {}) {
    const enums = AdobeDC.View.Enum;
    const statusOptions = { filePollFrequency: 10, keepPolling: false, ...overrides };
    view.registerCallback(enums.CallbackType.STATUS_API, async metaData => {
        try {
            const modifiedBy = await checkFile(metaData);
            return modifiedBy ? {
                code: enums.ApiResponseCode.FILE_MODIFIED,
                data: { modifiedBy }
            } : { code: enums.ApiResponseCode.SUCCESS, data: {} };
        } catch (error) {
            throw { code: enums.ApiResponseCode.FAIL, data: {} };
        }
    }, statusOptions);
}
```

checkFile receives the current file metadata. Return {name, mail} for the user responsible for a detected modification, otherwise null; reject if the status check fails.
