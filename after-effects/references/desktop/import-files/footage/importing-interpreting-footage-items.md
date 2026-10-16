# Importing Interpreting Footage Items

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Source files come into a project as the foundation for footage items, which then act as sources for layers. A single file can feed several footage items, each carrying its own interpretation settings. Every footage item, in turn, can source one or more layers. Inside a composition, what you work with are collections of layers.

The Project panel is where you'll handle footage items most of the time. The Footage panel comes in for evaluating footage and quick edits — trimming a footage item's duration, for instance.

Plenty of file kinds, file collections, or file components can be imported as sources for individual footage items: moving image files, still-image files, still-image sequences, and audio files among them. You can even manufacture footage items inside After Effects, such as solids and precompositions. Importing footage items into a project can happen whenever you like.

On import, the actual image data isn't copied into your project; After Effects lays down a reference link back to the footage item's source, which keeps project files fairly compact.

Delete, rename, or move an imported source file and you sever that file's reference link. A broken link shows the source file's name in italics in the Project panel, and the File Path column flags it as missing. As long as the footage item is around, the link can be remade — typically just by double-clicking the item and pointing it at the file once more.

Note

Footage items whose source items have gone missing can be tracked down by typing missing into the Project panel's search field. There's more to learn about searching and filtering across the Timeline, Project, and Effects & Presets panels.

Prepping footage before it lands in After Effects often pays off in shorter render times and better performance. Scaling or cropping a still image in Photoshop before bringing it across, for example, usually beats doing that scaling and cropping inside After Effects. Running an operation a single time in Photoshop is preferable to making After Effects repeat it many times a second — once for every frame the image shows up in.

To save time while keeping a project small and uncomplicated, import a source item once as a single footage item and then reuse it throughout a composition. Now and then, though, it helps to duplicate a footage item and interpret each copy differently — running the same footage at two separate frame rates, say.

Modify a footage item in another application while it's in use in a project, and the changes show up in After Effects the next time you open the project or select the footage item and choose File > Reload Footage.

Swapping a layer's source footage item for a different one without disturbing the layer property changes you've made is done by selecting the layer and then Alt-dragging (Windows) or Option-dragging (macOS) the new footage item onto it in the Timeline panel.

Want every use of certain footage items pointed at a replacement? In the Project panel, select those items, and with Alt-drag (Windows) or Option-drag (macOS) drop the replacement onto one of them right there in the panel.

For video and audio in certain formats, After Effects processes and caches versions on import that it can pull up fast when building previews. That caching boosts preview performance considerably, since the video and audio no longer have to be reprocessed for each preview.
