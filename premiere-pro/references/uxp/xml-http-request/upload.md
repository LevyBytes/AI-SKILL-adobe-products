# window.XMLHttpRequest — upload : `XMLHttpRequestEventUpload`

**Read only**
Use this XMLHttpRequestEventUpload object to observe upload progress.
An upload object can emit the following events for progress monitoring.

     'loadstart'  : the upload has started.
     'progress'   : delivered periodically to report how much progress has occurred so far.
     'abort'      : the upload operation was aborted.
     'error'      : the upload failed because an error occurred.
     'load'       : the upload completed successfully.
     'timeout'    : the upload timed out because no reply arrived within the timeout interval.
     'loadend'    : the upload finished.

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
