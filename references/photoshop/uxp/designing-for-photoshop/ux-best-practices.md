# UX Best Practices

**Avoid using minimum fixed widths larger than 240px**

Because Photoshop plugin panels can dock inside other panels, minimum fixed widths above 240 px may disrupt a user's workspace. Let users resize both width and height to improve the experience of working with the plugin in Photoshop.

[Figure: Photoshop large fixed widths Do](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pslargewidtdo.png)
[Figure: Photoshop large fixed widths Don't](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pslargewidthdont.png)

**Placing image object into document**

Whenever possible, steer users toward non-destructive workflows. If a plugin adds a new image layer, the recommended approach is to place that layer as an embedded Smart Object, keeping original pixels protected and available after edits.

[Figure: Photoshop placing an object Do](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psplaceobjectdo.png)
[Figure: Photoshop placing an object Don't](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psplaceobjectdont.png)

**Contextual Actions and Photoshop Tools**

If a plugin workflow requires the user to select a tool before continuing, show contextual feedback in the plugin UI or provide a way to open the Photoshop tool from that UI. For a color-change workflow, for example, include an action that opens Photoshop Color Picker from inside the plugin.

[Figure: Photoshop contextual tool Do](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pscontextualtools-do.png)
[Figure: Photoshop contextual tool Don't](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pscontextualtools-dont.png)
