# app.effects

app.effects

### Description

Every effect the application makes available.

### Type

Array, with each element containing the following properties; read-only:

| Property | Type | Description |
| --- | --- | --- |
| displayName | String | A string representing the localized display name of the effect as seen in the Effect menu. |
| category | String | A string representing the localized category label as seen in the Effect menu. This can be "" for synthetic effects that aren't normally shown to the user. |
| matchName | String | A string representing the internal unique name for the effect. This name does not change between versions of After Effects. Use this value to apply the effect. |
| version | String | Effect's internal version string. This value might be different than the version number the plug-in vendor decides to show in the effect's about box. |

### Example

```javascript
var effectName = app.effects[12].displayName;
```
