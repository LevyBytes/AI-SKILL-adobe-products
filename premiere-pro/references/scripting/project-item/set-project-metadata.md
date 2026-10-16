# ProjectItem.setProjectMetadata()

app.project.rootItem.children[index].setProjectMetadata(newMetadata, updatedFields)

### Description

Sets private project metadata on the project item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newMetadata | String | Replacement serialized private project metadata. |
| updatedFields | Array of strings | Array naming the fields that should be updated. |

### Returns

0 means the update succeeded.
