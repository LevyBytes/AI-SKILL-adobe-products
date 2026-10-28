# save

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | Not available in Reader |

Wraps up report generation and writes the report out to the path you name.

Note

This method runs solely within a batch or console event. See Privileged context. For more on JavaScript events, turn to the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | The device-independent path. |
| cFS | (optional) The file system. "CHTTP" is the sole accepted value for cFS. When you use it, cDIPath ought to be a URL. This matters only where the web server offers WebDAV. |

Example 1:

```javascript
rep.save("/c/myReports/myreport.pdf");
```

Example 2:

```javascript
rep.save({
    cDIPath: "http://www.example.com/reports/WebDAV/myreport.pdf",

     cFS:"CHTTP"}
);
```
