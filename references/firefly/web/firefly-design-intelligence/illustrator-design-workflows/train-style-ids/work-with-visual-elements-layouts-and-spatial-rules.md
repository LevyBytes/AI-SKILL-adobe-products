# Work with Visual elements, Layouts, and Spatial rules

Note

Before starting, create a Style ID so visual elements can be extracted from the Illustrator document and so the layout and spatial rules in the design assets can be understood.

Open the Visual elements tab to review every element extracted from the original files.

Use Visual elements to inspect the extracted file-layer elements.

The Visual elements tab lists elements extracted from the source layers.

Expand an element to inspect each layer and add instructions when needed. For some layers, visual assets can also be added or removed.

Add assets to a layer, remove existing assets, or add instructions for extracted visual elements.

Layer entries can be updated with more assets, removals, or instructions for the extracted elements.

Open the Layouts tab to review the layouts and orientations learned by Firefly Design Intelligence.

From the Channels dropdown menu, select suitable platforms. Use the checkboxes on detected options to choose preferred layouts for training the Style ID.

Open Layouts to review the layouts and orientations learned by Firefly Design Intelligence.

The Layouts tab shows the learned arrangement patterns and orientations.

Open the Spatial rules section to specify how elements relate when aspect ratios change.

Choose an element in the design to activate the Pin section. Then use the dropdown menu to select a second element to pin to the first.

In Pin, choose the second element from the dropdown menu to attach it to the first.

The Pin dropdown defines which element is pinned to the initial selection.

Choose Pin to set the relationship between the two elements.

Tip

Pinning creates reference points that tell Firefly which design elements should keep their relationship during resizing. This is useful for logos, headlines, and other elements that must keep a defined placement relative to another item.

In the Fit mode section, choose how the design should occupy different aspect ratios:

- Cover: fills the area fully while preserving aspect ratio; overflow gets cropped.
- Contain: keeps the whole element inside the area while preserving aspect ratio; empty space may remain.
- Fit width: uses the target width, with height changing proportionally.
- Fit height: uses the target height, with width changing proportionally.
- Stretch: fills both dimensions without preserving aspect ratio, which may distort the element.
- Repeat to width: tiles horizontally until the width is filled. Images only.
- Repeat to height: tiles vertically until the height is filled. Images only.

In Apply to, choose which layouts should receive these spatial rules for new designs.

Apply to controls where the spatial rules are used during design generation.

In the Apply to section, choose the layouts where these spatial rules should apply during new-design generation. Choose Select all when the spatial rules should apply to all orientations.
