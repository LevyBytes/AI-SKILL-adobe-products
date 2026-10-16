# FootageItem.mainSource

app.project.item(index).mainSource

### Description

The footage source — an object carrying every setting tied to the footage item, among them the ones you would otherwise reach via the Interpret Footage dialog box. This attribute cannot be written to directly; changing its value means calling whichever "replace" method on FootageItem applies. See the FootageSource object, and its three types:

- SolidSource object
- FileSource object
- PlaceholderSource object

When it is a FileSource object and footageMissing reads true, FileSource.missingFootagePath holds the path to the footage file that has gone missing.

### Type

FootageSource object; read-only.
