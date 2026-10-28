# select

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object, filtered by nMonitor — a monitor selection value of the kind used in PDF and listed under app.media.monitorType.

You must pass doc whenever nMonitor is app.media.monitorType.document or app.media.monitorType.nonDocument; for every other nMonitor value it is ignored.

Each of these selection values lines up directly with one of the Monitors filter methods. select runs the matching filter method and then, in most situations, also applies primary as a tie-breaker should more than one display satisfy the main filter.

Parameters

| Parameter | Description |
| --- | --- |
| nMonitor | A number drawn from app.media.monitorType that names the monitor type. |
| doc | A Doc. You must supply it when nMonitor equals app.media.monitorType.document or app.media.monitorType.nonDocument; otherwise it is disregarded. |

Returns

A Monitors object.

Example: two interchangeable ways to filter the monitors.

```javascript
settings.monitor =
app.monitors().select( app.media.monitorType.document, doc );
settings.monitor = app.monitors().document(doc).primary();
```
