# app.setMemoryUsageLimits()

app.setMemoryUsageLimits(imageCachePercentage, maximumMemoryPercentage)

### Description

Establishes memory usage caps just like the Memory & Cache preferences pane does. For each of the two figures, the percentage applies to installed RAM when that RAM falls under a stated amount (n gigabytes), and otherwise applies to n. That n equals: 2 GB on 32-bit Windows, 4 GB on 64-bit Windows, and 3.5 GB on Mac OS.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| imageCachePercentage | Float | The percentage of memory assigned to image cache. |
| maximumMemoryPercentage | Float | The maximum usable percentage of memory. |

### Returns

Nothing.
