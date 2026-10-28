# Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known limitation: it is intended to capture a single `stdout/stderr` output event.

For applications that have not integrated CEP 5, two workarounds are suggested.

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

- Join all stdout output as one, like below

```javascript
var str1 = 'abcdef';
var str2 = '12345';
var str3 = 'gghhtt';
console.log(str1 + str2 + str3);
```

To report curl download progress through stderr, use an example like this:

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

From CEP 5 onward, Node.js is included in the CEP runtime, so extensions in applications that have adopted CEP 5 can call standard `Node.js` APIs directly. Guidance for the global process object is at http://nodejs.org/api/process.html.
