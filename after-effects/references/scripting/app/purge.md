# app.purge()

app.purge(target)

Tip

This functionality was updated in After Effects 24.3 to allow the `ALL_CACHES` enumerated value to clear both the RAM and disk cache, with the `ALL_MEMORY_CACHES` enumerated value added to purge only the RAM. In versions prior to 24.3, `ALL_CACHES` will only clear the RAM cache.

### Description

Clears unused data of whatever types you name, mirroring the Purge choices on the Edit menu.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| target | PurgeTarget enum | Which kind of elements to clear out of memory. One of: - PurgeTarget.`ALL_CACHES`: Purges all data that After Effects has cached to both RAM and disk cache. - PurgeTarget.`ALL_MEMORY_CACHES`: Purges all data that After Effects has cached to RAM. (new in 24.3) - PurgeTarget.`UNDO_CACHES`: Purges all data saved in the undo cache. - PurgeTarget.`SNAPSHOT_CACHES`: Purges all data cached as composition/layer snapshots. - PurgeTarget.`IMAGE_CACHES`: Purges all saved image data. |

### Returns

Nothing.
