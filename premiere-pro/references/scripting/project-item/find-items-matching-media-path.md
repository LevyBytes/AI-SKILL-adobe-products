# ProjectItem.findItemsMatchingMediaPath()

app.project.rootItem.children[index].findItemsMatchingMediaPath(pathToMatch, ignoreSubClips)

### Description

Returns project items that all reference the same media path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pathToMatch | String | Path value to match. |
| ignoreSubClips | Integer | 1 prevents subclips from being returned. |

### Returns

Array of project items, or 0 when no project items matching matchPath are found.
