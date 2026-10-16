# AVItem.duration

app.project.item(index).duration

### Description

Gives the item's length in seconds. A still footage item reports a duration of 0.

- For a CompItem this tracks the composition's own duration and you may write to it.
- For a FootageItem it follows the mainSource object's duration and is read-only.

### Type

Floating-point value, in the range [0.0..10800.0]; read/write for a CompItem; otherwise, read-only.
