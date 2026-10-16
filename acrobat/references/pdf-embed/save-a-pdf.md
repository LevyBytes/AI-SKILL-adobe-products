# Save a PDF

Up on the top bar, the Save button stays out of sight until the PDF changes: only once the PDF has been modified (meaning there's genuinely something to save) does it wake up. Take `showAnnotationTools` set to true as an example, where users can drop in an annotation or comment and you can offer them a way to save the changed PDF somewhere local or on the network.

Secure, protected, or read-only PDF files block users from adding comments or editing them. For files like that, both the annotation tools and the save button stay hidden.

Keep in mind the Save button is hidden by default, yet you can surface it with nothing to save once `showDisabledSaveButton` is _true_ and that flag rides into the `previewFile` API as part of the preview configuration. The button then shows up greyed out right until the PDF is modified.

```json
{
  "showDisabledSaveButton": false
}
```
