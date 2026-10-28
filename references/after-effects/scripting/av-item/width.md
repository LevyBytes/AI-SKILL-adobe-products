# AVItem.width

app.project.item(index).width

### Description

The item's width measured in pixels.

- For a CompItem this tracks the composition and you may write to it.
- For a FootageItem it tracks the mainSource object, writable only when that mainSource object happens to be a SolidSource; in every other case it stays read-only.

### Type

Integer, in the range [1..30000]; read/write, except as noted.
