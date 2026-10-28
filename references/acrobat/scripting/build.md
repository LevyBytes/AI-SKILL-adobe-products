# build

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Acrobat Pro only |

Uses the Catalog plug-in to build the index tied to the Index object. A brand-new index is not what this method produces.

The index is assembled in the same spot as the index file. Where the index already exists, its included directories get rescanned for changes and the index is refreshed. Where it does not yet exist, the user interface lets you define and build a fresh one.

When Catalog sits idle, the index build kicks off right away; otherwise it joins Catalog’s queue.

Note

(Acrobat 7.0) Running this method is confined to a batch or console event. Refer to Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cExpr | (optional) An expression evaluated once the index build wraps up. By default there is no expression. The PDF Reference holds more detail. |
| bRebuildAll | (optional) When true, a clean build runs: the index is deleted first, then rebuilt. It defaults to false. |

Returns

A CatalogJob object that can be used to check the job parameters and status.

Example:

```javascript
/* Building an index */
if (typeof catalog != "undefined")  {
    var idx = catalog.getIndex("/c/mydocuments/index.pdx");
    var job = idx.build("Done()", true);
    console.println("Status : ", job.status);
}
```
