# TracingObject.expandTracing()

tracingObject.expandTracing([viewed])

### Description

Expands the vector art as a new group item. In the document, that new GroupItem object takes the place of the PluginItem object.

By default, viewed is false; in that case, the new group includes only the tracing output, meaning the filled or stroked paths.

When viewed is true, the new group also keeps extra viewing-mode data, including items such as outlines and overlays.

This call deletes this object along with its related PluginItem object. Group-level attributes from the plug-in item move to the new group item's top level.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| viewed | Boolean, optional | todo |

### Returns

GroupItem
