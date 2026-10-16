# Project.importAEComps()

app.project.importAEComps(path, compNames, [targetBin])

### Description

Imports named Compositions from the containing After Effects .aep project file. A target bin in the containing project may be specified; otherwise, the Compositions appear in this project's most recently targeted bin.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Path to the After Effects .aep project file. |
| compNames | Array of strings | Composition names within the specified project to import. |
| targetBin | ProjectItem object | Optional. Bin that receives this import. |

### Returns

Returns 0 on success.
