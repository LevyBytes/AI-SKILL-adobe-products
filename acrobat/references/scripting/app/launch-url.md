# launchURL

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | All |

Opens a URL inside a browser window.

Note

As of Acrobat 8.1, File and JavaScript URLs run only within a privileged context, for instance during a batch or console event. The scheme names javascript or file are what File and JavaScript URLs start with.

Parameters

| Parameter | Description |
| --- | --- |
| cURL | A string giving the URL that should be launched. |
| bNewFrame | (optional) When set to true, the URL opens in a fresh window of the browser application. false is the default. |

Returns

A successful call returns the value undefined; a failure raises an exception.

Example 1:

```javascript
app.launchURL("http://www.example.com/", true);
```

Example 2: Attach an online help entry to the menu system. Put this code in a folder-level JavaScript file, or run it from the JavaScript Debugger console.

```javascript
app.addMenuItem({
    cName: "myHelp", cUser: "Online myHelp",
    cParent: "Help",
    cExec: "app.launchURL('www.example.com/myhelp.html');",
    nPos: 0
});
```

Related methods are openDoc and the Doc object getURL method.
