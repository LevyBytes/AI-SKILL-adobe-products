# RenderQueueItem.setSetting()

app.project.renderQueue.item(index).setSetting()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Assigns one particular setting on a given Render Queue Item.

Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```javascript
// Set value of "Proxy Use" to "Use All Proxies"

app.project.renderQueue.item(1).setSetting("Proxy Use", "Use All Proxies");

// You can use numbers, too.
// The next line does the same as the previous example.

app.project.renderQueue.item(1).setSetting("Proxy Use", 1);
```
