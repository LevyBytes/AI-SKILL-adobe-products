# getActiveTool

22.5

**async** : _Promise_<\{ `classID`: _string_ ; `isModal`: _boolean_ ; `key`: _string_ ; `title`: _string_ }>

Returns details about whichever Photoshop tool is active.

```javascript
const { title } = await core.getActiveTool();
```
