# GUID

Photoshop v25.1 or UXP v7.3 exposes this capability for identifying a Creative Cloud User. Manifest snippet: 

Manifest property fragment: merge into the surrounding manifest.

```json
{
  "requiredPermissions": {
    "enableUserInfo": true
  }
}
```

 Plugin code: 

```javascript
let userId = require('uxp').userInfo.userId(); // Get the GUID of user
console.log(userId);
```
