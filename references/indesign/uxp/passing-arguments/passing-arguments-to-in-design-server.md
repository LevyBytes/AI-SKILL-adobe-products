# Passing Arguments to InDesign Server

Use `sampleclient` to send arguments to InDesign Server.

Provide the required details, including port number, script name, and arguments. Supply arguments as strings where `=` separates each key from its value. The `script.args` API gives back an array of strings, with each array element containing one key/value pair from the script execution request. Example:

**Command to Pass Arguments to IDS Scripts**

```bash
../../../../mac/debug_cocoa64/sampleclient -host localhost:12345 testArgs.idjs "arg1=100" "arg2=200"
```

```js
const script = require("uxp").script;
let ar = script.args;
script.setResult(ar);
```

After this script runs on InDesign Server, the client side displays the returned result.

```text
Script result (LIST, 2):
    (std__string): arg1=100
    (std__string): arg2=200
```
