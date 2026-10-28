# Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known restriction: it is designed to capture a single `stdout/stderr` output event.

For applications that do not include CEP 5 integration, use either of these two workarounds.

- Embed cep.process.stdout/stderr:

```javascript
var getSTDOutput = function(){
  console.log("getSTDOutput");
  window.cep.process.stdout(pid, function(output){
  console.log(output);
  // your code is here
  });

  var result = window.cep.process.isRunning(pid);
  if (result.data === true){
    setTimeout(getSTDOutput, 1000);
  }
}
```

- Combine every stdout segment into one output string, as shown here.

```javascript
var str1 = 'abcdef';
var str2 = '12345';
var str3 = 'gghhtt';
console.log(str1 + str2 + str3);
```

The next sample reads curl download progress from stderr:

```html
<script>
        var downloadPid = -1;
        function getStdErrOutput()
        {
            window.cep.process.stderr(downloadPid, function(progress) {
                                      var keys = progress.split(new RegExp('[# ]', 'g'));
                                      for(var i=0; i<keys.length; i++){
                                        if (keys[i] != '') {
                                         console.log(keys[i]);
                                        }
                                      }
                                    });
            var result = window.cep.process.isRunning(downloadPid);
            if (result.err !== 0) throw new Error("Cannot inspect process: " + result.err);
            if (result.data == true)
            {
                setTimeout(getStdErrOutput, 100);
            }
        }
        var doDownload = function() {
            var qURL = 'http://code.jquery.com/jquery-1.11.0.min.js';
            var dest = '/tmp/test.js';
            console.log("ext download (curl) " + qURL + " " + dest);
            var result = window.cep.process.createProcess('/usr/bin/curl', qURL, '-#', '-o', dest);
            if (result.err !== 0) throw new Error("Cannot start curl: " + result.err);
            downloadPid = result.data;
            console.log("download pid is " + downloadPid);
            getStdErrOutput();
        };

        doDownload();
</script>
```

Beginning with CEP 5, the CEP runtime includes Node.js, so extensions for applications with CEP 5 integration can call standard `Node.js` APIs directly. For the global process object in `Node.js`, see http://nodejs.org/api/process.html.
