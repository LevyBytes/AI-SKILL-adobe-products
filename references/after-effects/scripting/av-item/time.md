# AVItem.time

app.project.item(index).time

### Description

Where the item's playhead sits while it is previewed straight from the Project panel, expressed as a count of seconds. Run the global method timeToCurrentFormat() to turn it into a string that states the time in frames. Setting it throws an error on any FootageItem backed by still media (item.mainSource.isStill is true).

### Type

Floating-point value; read/write.
