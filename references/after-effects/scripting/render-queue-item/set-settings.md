# RenderQueueItem.setSettings()

app.project.renderQueue.item(index).setSettings()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Assigns several settings at once on a given Render Queue Item.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```javascript
// Get an object that contains string version of settable render setting
// values of render queue item 1.
// To get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var rqItem1_settable_str = app.project.renderQueue.item(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Set render queue item 2 with values that you got from render
//queue item 1.

app.project.renderQueue.item(2).setSettings( rqItem1_settable_str );

// Set render queue item 3 with values you create.

var my_renderSettings = {
    "Color Depth":        "32 bits per channel",
    "Quality":            "Best",
    "Effects":            "All On",
    "Time Span Duration": "1.0",
    "Time Span Start":    "2.0"
};

app.project.renderQueue.item(2).setSettings( my_renderSettings );
```
