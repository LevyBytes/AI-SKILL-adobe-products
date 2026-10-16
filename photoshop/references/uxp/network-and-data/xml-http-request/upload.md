# window.XMLHttpRequest — upload : `XMLHttpRequestEventUpload`

**Read only**
For upload progress tracking, this property exposes an XMLHttpRequestEventUpload object.
These upload-object events are available for progress monitoring.

     'loadstart'  : Upload processing has started.
     'progress'   : Sent at intervals to report how much progress has occurred.
     'abort'      : The upload operation was aborted.
     'error'      : The upload failed because of an error.
     'load'       : The upload completed successfully.
     'timeout'    : The upload timed out because no reply arrived within the timeout interval.
     'loadend'    : Upload lifecycle ended.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.myserver.com");
xhr.upload.onprogress = (e) => {
  console.log(`Uploading ${(e.loaded / e.total) * 100}%`);
};
const arraybuffer = new ArrayBuffer(1024 * 1024);
// fill the arraybuffer with contents.
xhr.send(arraybuffer);
```
