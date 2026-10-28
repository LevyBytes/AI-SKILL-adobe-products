# Save callback

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

[Complete save-callback implementation](../examples/register-save-callback.js).

Supply saveFile as an application callback. After saving, return {metaData: updatedMetaData}, including any changed fileName. If another user modified the file, return {modifiedBy: {name, mail}} without overwriting it. Reject on failure. The Embed SDK receives its documented response codes and data shape.

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

[Complete save-callback implementation](../examples/register-save-callback.js).

Supply saveFile as an application callback. After saving, return {metaData: updatedMetaData}, including any changed fileName. If another user modified the file, return {modifiedBy: {name, mail}} without overwriting it. Reject on failure. The Embed SDK receives its documented response codes and data shape.
