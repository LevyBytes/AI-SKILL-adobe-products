# Project.createNewSequenceFromClips()

app.project.createNewSequenceFromClips(sequenceName, arrayOfProjectItems, [destinationBin])

### Description

Builds a Sequence named sequenceName in destinationBin and inserts the project items in order.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequenceName | String | Optional. Name for the new sequence. |
| arrayOfProjectItems | Array of ProjectItem objects | Array of project items to insert into the sequence. |
| destinationBin | ProjectItem object | Optional. Bin that will contain the sequence. |

### Returns

Returns the newly created Sequence object on success; returns 0 on failure.
