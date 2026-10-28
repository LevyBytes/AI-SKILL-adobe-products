# ProjectItem.getMediaPath()

app.project.rootItem.children[index].getMediaPath()

### Description

Returns the project item's media path as a String.

Note

This works only with atomic media. It cannot return useful paths for media with no actual path, including media produced by synthetic importers such as Premiere Pro's own Universal Counting Leader.

For image sequences, the returned value is only the path to the first image in the sequence.

### Parameters

None.

### Returns

A String containing the item's media path.
