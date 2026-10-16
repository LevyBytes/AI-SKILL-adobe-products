# browseForDoc

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | All |

Opens a file system browser, then hands back an object describing how the user responded.

Note

This method runs only during a batch or console event. The event object topic covers how JavaScript events work. See Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| bSave | (optional) A Boolean; when true, the file system browser is shown in the form it would take for a save operation. It defaults to false. |
| cFilenameInit | (optional) A string giving the default file name with which the file system browser is pre-populated. |
| cFSInit | (optional) A string naming which file system the browser targets to begin with. Just two values work here: "" (the empty string), which denotes the default file system, alongside "CHTTP"; absent either, the default file system applies. Only a WebDAV-capable web server makes this parameter meaningful. |

Returns

Succeed, and the call yields an object carrying these three properties.

| Property | Description |
| --- | --- |
| cFS | A string giving the resulting file system name for the file that was chosen. |
| cPath | A string giving the resulting path for the file that was chosen. |
| cURL | A string giving the resulting URL for the file that was chosen. |

Cancel out and the return value is undefined. On error, an exception is thrown.

Example 1: Bring up the browser to pick a document, then print the returned object out for inspection.

```javascript
var oRetn = app.browseForDoc({
    cFilenameInit: "myComDoc.pdf",
    cFSInit: "CHTTP",
});
if ( typeof oRetn != "undefined" )
    for ( var o in oRetn )
        console.println( "oRetn." + o + "=" + oRetn[o]);
else console.println("User cancelled!");
```

If the user selects a file on a WebDAV server, a possible output of this code is given below:

Reference data, output or notation; not an executable JavaScript program.

```text
oRetn.cFS=CHTTP
oRetn.cPath=http://www.example.com/WebDAV/myComDoc.pdf
oRetn.cURL=http://www.example.com/WebDAV/myComDoc.pdf
```

Should the user select a file in the default file system, a typical output of this code is given below:

Reference data, output or notation; not an executable JavaScript program.

```text
oRetn.cFS=DOS
oRetn.cPath=/C/temp/myComDoc.pdf
oRetn.cURL=file:///C|/temp/myComDoc.pdf
```

From here the script may open the chosen file by way of app.openDoc.

```javascript
var myURL = (oRetn.cFS=="CHTTP") ? encodeURI(oRetn.cPath) : oRetn.cPath;
var oDoc = app.openDoc({cPath: myURL, cFS: oRetn.cFS});
```

Note

When pulling a file from a WebDAV server, app.openDoc wants cPath passed as an escaped string. A short description with an example sits under app. openDoc.

Example 2: Browse and save a document.

```javascript
var oRetn = app.browseForDoc({
    bSave: true,
    cFilenameInit: "myComDoc.pdf",
    cFSInit: "CHTTP",
});
if ( typeof oRetn != "undefined" ) this.saveAs({
    cFS: oRetn.cFS, cPath: oRetn.cPath, bPromptToOverwrite: false});
```
