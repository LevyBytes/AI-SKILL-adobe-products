# remove

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | Acrobat Pro only |

Strips the named CatalogJob object out of Catalog's job list. For each Acrobat session, Catalog keeps a roster of pending, in-progress, and completed jobs.

Parameters

| Parameter | Description |
| --- | --- |
| oJob | The CatalogJob object to drop — the kind handed back by the jobs property and by assorted Index object methods. |

Example: Delete all jobs that are pending and need complete rebuild.

```javascript
if (typeof catalog != undefined)  {
    for (var i=0; i<catalog.jobs.length; i++){
        var job = catalog.jobs[i];
        console.println("Index: ", job.path);

        if (job.status == "Pending" && job.type == "Rebuild")
            catalog.remove(job);
    }
}
```
