# Annotations API overview

Programmatic import, creation, deletion, updating, and export are all handled by the annotations API — for both comments (sticky notes) and markup such as highlight, underline, and strikethrough. Two configuration variables in the PDF Embed API switch annotations on and govern them:

- `enableAnnotationAPIs`: Defaults to _false_; setting it _true_ switches the APIs on. Your application then feeds the annotations plus the PDF buffer into the PDF Embed API, which paints the result in the browser.
- `includePDFAnnotations`: Defaults to _false_. Set _true_ and the API surfaces annotations already in the file — the supported ones stay editable while unsupported ones go read only. Editing any annotation lights up the **Save** or **Download** button, letting your add, update, and delete actions persist into the PDF.

With only `enableAnnotationAPIs` set to _true_, adding or updating annotations leaves the original PDF content untouched. Flip both variables to _true_ and the APIs do change the original PDF.

You may hand both variables to the `previewFile` API as a preview configuration.

Preview-configuration excerpt. Both properties are Boolean and default to false; set them for the annotation behavior your application needs.

```json
{
  "enableAnnotationAPIs": false,
  "includePDFAnnotations": false
}
```

Because the two variables play off each other, a few scenarios arise:

1.  When the annotation APIs are off (`enableAnnotationAPIs: false`), `includePDFAnnotations` has no effect.
2.  When the annotation APIs are on (`enableAnnotationAPIs: true`) alongside `includePDFAnnotations: false`, then:

> - Existing annotations stay hidden in the PDF Embed API, though fresh ones do show.
> - Whatever annotation you add or update — from the UI or the API — never reaches the PDF buffer, so the top bar shows no **Save** or **Download** button.

3.  When both `enableAnnotationAPIs` and `includePDFAnnotations` are _true_, then:

> - Every existing annotation the PDF Embed API supports appears and is reachable via these APIs. Unsupported ones, note, render read-only and stay out of the APIs' reach.
> - Any annotation you add or update from the UI or API is written to the PDF buffer, and whenever the PDF carries unsaved changes the **Save** or **Download** button switches on.
