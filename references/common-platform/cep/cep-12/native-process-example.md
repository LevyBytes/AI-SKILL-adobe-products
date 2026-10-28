# CEP native process example

- Create a process and check if it's running.

This sample requires an X11 installation with `/usr/X11/bin/xterm`; use an absolute executable path suitable for the current platform.

```javascript
var result = window.cep.process.createProcess("/usr/X11/bin/xterm");

if(result.err === 0){
  var pid = result.data;
  result = window.cep.process.isRunning(pid);
  if (result.err === 0 && result.data === true){
    // running
  }
}
```

Additional calls cover folder deletion, folder rename, permission changes, file deletion, open-file dialogs, process quit, and more.

These samples demonstrate some of those APIs:

- https://github.com/Adobe-CEP/Samples/tree/master/Flickr
- https://github.com/Adobe-CEP/Samples/tree/master/Collage
- https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_10.x/Samples

Related: [CEP filesystem and process APIs](filesystem-process-apis.md).
