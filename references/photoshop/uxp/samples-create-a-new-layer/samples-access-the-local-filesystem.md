# Samples - Access the local filesystem

Use the UXP storage module when a script needs to reach the local filesystem: 

```javascript
const uxpfs = require("uxp").storage;
const ufs = uxpfs.localFileSystem;

try {
    const folder = await ufs.getTemporaryFolder()
    const metadata = await folder.getMetadata();
    console.log(JSON.stringify(metadata));
} catch (e) {
    console.log(`Local File system error: ${e}`);
}
```
