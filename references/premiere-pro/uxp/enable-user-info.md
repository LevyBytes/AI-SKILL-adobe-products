# enableUserInfo manifest permission

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableUserInfo` | `boolean` | optional | `false` |

`enableUserInfo` lets the plugin read the user's anonymized GUID. Its default is `false`.

```javascript
// set "enableUserInfo" to true in the manifest

let userId = require("uxp").userInfo.userId(); // Get the GUID of user
console.log(userId);
// "dad8483a3682a0c3e0fa990281142353901a69fc371254edde8b7dd38ca604c6"
```
