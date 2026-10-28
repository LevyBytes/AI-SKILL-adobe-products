# RenderQueueItem.getSetting()

app.project.renderQueue.item(index).getSetting()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Retrieves one particular Render Queue Item setting.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```javascript
// Get current value of render setting's "Proxy Use"
// Key and value strings are English.
var rqItem1_proxyUse = app.project.renderQueue.item(1).getSetting("Proxy Use");

// Get string version of same setting, add "-str" at the end of key string
var rqItem1_proxyUse_str = app.project.renderQueue.item(1).getSetting("Proxy Use-str");
```
