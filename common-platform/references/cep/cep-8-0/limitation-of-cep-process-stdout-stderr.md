# Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known restriction: it is designed to capture a single occurrence of `stdout/stderr` output.

For applications without CEP 5 integration, the following two workarounds are suggested.

- Embed cep.process.stdout/stderr:

```js
var getSTDOutput = function () {
  console.log("getSTDOutput");
  window.cep.process.stdout(pid, function (output) {
    console.log(output);
    // your code is here
  });

  var result = window.cep.process.isRunning(pid);
  if (result.data === true) {
    setTimeout(getSTDOutput, 1000);
  }
};
```

- Combine all stdout output into one value, as shown below

```js
var str1 = "abcdef";
var str2 = "12345";
var str3 = "gghhtt";
console.log(str1 + str2 + str3);
```

This example retrieves curl download progress from stderr:

```xml
<script>
        var downloadPid = -1;
        function getStdErrOutput()
        {
            window.cep.process.stderr(downloadPid, function(progress) {
                                      var keys = progress.split(new RegExp('[# ]', 'g'));
                                      for(i=0; i<keys.length; i++){
                                        if (keys[i] != '') {
                                         console.log(keys[i]);
                                        }
                                      }
                                    });
            var result = window.cep.process.isRunning(downloadPid);
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
            downloadPid = result.data;
            console.log("download pid is " + downloadPid);
            getStdErrOutput();
        };

        doDownload();
</script>
```

Starting with CEP 5, Node.js is part of the CEP runtime, so users can call standard `Node.js` APIs directly from the extension. For applications that include CEP 5 integration, see http://nodejs.org/api/process.html for use of the global process object in `Node.js`.
