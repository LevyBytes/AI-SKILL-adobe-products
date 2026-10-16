# getURL

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Performs a GET to fetch the URL you name from the Internet. When the active document is open within the browser, or when Acrobat Web Capture cannot be reached, retrieval falls to the Acrobat Weblink plug-in instead. Run from inside Acrobat, the call derives the current document's URL one of three ways: from the baseURL, from the URL attached to page 0 (the first page) for documents that arrived through Web Capture, or from the file system.

Note

From Acrobat 8.1 forward, URLs using the javascript or file schemes will run only within a privileged context — a batch or console event, for instance. Such URLs are recognizable by their leading scheme name, either javascript or file.

Note

Set bAppend to true and Adobe Reader cannot use this method.

The rough equivalent here is the "open a web page" action.

For something comparable, look at app. launchURL.

Parameters

| Parameter | Description |
| --- | --- |
| cURL | Either a fully qualified URL or a relative one. A query string may trail the end of the URL. |
| bAppend | (optional) With true as the default, any page or pages that come back get tacked onto the current document. Three situations force this flag to false: the document running inside the web browser, the Acrobat Web Capture plug-in being unreachable, or a URL of type "file:///". - From Acrobat 6.0 onward, a true bAppend confines getURL to running during a console or batch event. See Privileged context. |

Example:

```javascript
this.getURL("http://www.example.com/", false);
```
