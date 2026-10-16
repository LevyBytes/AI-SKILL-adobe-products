# FootageItem.replaceWithSequence()

app.project.item(index).replaceWithSequence(file, forceAlphabetical)

### Description

Swaps this FootageItem's source over to the image sequence you specify.

Beyond reading the file in, the method spins up a fresh FileSource object for it and points mainSource at that object. Drawing on the file's contents, it fills in the new source object's name, width, height, frameDuration, and duration attributes (see AVItem object).

Interpretation parameters carry over from the prior mainSource object. Where the chosen file carries an unlabeled alpha channel, the method estimates how to interpret the alpha.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The first file in the sequence to be used as the footage main source. |
| forceAlphabetical | Boolean | When true, use the "Force alphabetical order" option. |
