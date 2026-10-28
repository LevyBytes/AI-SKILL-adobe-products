# Project.importAllAEComps()

app.project.importAllAEComps(path, [targetBin])

### Description

Imports named Compositions from the containing After Effects .aep project file. A target bin in the containing project may be specified; otherwise, the Compositions appear in this project's most recently targeted bin.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Path to After Effects .aep project file. |
| targetBin | ProjectItem object | Optional. Bin that receives this import. |

### Returns

Returns 0 on success.
