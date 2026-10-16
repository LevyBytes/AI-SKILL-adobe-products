# RenderQueueItem.getSettings()

app.project.renderQueue.item(index).getSettings()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Retrieves the full set of settings for a particular Render Queue Item.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```javascript
// Get object that contains all possible values of all render settings of
// render queue item 1 and convert to JSON format.

var rqItem1_spec_str = app.project.renderQueue.item(1).getSettings(GetSettingsFormat.SPEC);
var rqItem1_spec_str_json = rqItem1_spec_str.toSource();
```
