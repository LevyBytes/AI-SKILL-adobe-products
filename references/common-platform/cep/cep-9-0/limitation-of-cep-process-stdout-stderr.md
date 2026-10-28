# Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known limitation: it is designed to capture a single instance of `stdout/stderr` output.

For applications that have not integrated CEP 5, these two workarounds are suggested.

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

- Concatenate all stdout output into one value, as shown below:

```javascript
var str1 = 'abcdef';
var str2 = '12345';
var str3 = 'gghhtt';
console.log(str1 + str2 + str3);
```

Example for retrieving curl download progress through stderr:

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

CEP 5 integrates Node.js into the CEP runtime, so extensions can call standard `Node.js` APIs directly. For applications with CEP 5 integrated, guidance for the global `process` object in `Node.js` is at http://nodejs.org/api/process.html.
