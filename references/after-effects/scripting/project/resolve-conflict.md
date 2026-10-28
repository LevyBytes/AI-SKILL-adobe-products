# Project.resolveConflict()

app.project.resolveConflict(ResolveType)

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Settles a clash between the team project you have open and the copy held on the team projects server, applying whichever resolution method you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ResolveType | ResolveType enum | The type of conflict resolution to use. One of: - ResolveType.`ACCEPT_THEIRS`: Take the shared version. The shared version replaces your version. - ResolveType.`ACCEPT_YOURS`: Keep your version of the project. The shared version is not taken. - ResolveType.`ACCEPT_THEIRS_AND_COPY`: Copy and rename your version, then take the shared version. The shared version replaces your original version. |

### Returns

Boolean. true if the resolution of the specified type was successful, otherwise false.
