# openAsNew()

appspec.openAsNew([options])

### Description

Calls File > New in the target application.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| options | Application-specific creation options: - Adobe Bridge: none - Photoshop: none - InDesign: creation options are: (Boolean:showingWindow, ObjectOrString:documentPresets). See the arguments for documents.add() in the Adobe InDesign CS5 Scripting Reference. - Illustrator: creation options are: ([DocumentColorSpace:colorspace][, Number:width, Number:height]). See the arguments for documents.add() in the Adobe Illustrator CS5 JavaScript Reference. | Optional. Options used when creating the new item. |

### Returns

Boolean. true on success.
