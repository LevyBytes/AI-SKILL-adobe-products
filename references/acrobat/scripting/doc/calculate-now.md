# calculateNow

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Compels every calculation field in the current document to recompute.

A form holding lots of calculations can lag noticeably once the user types data into a field, even a non-calculation one. A workaround is to disable calculations for a stretch, then re-enable them afterward (see example).

Example: Turn off calculations

Disable automatic calculation before the relevant batch of changes. Restore the document’s previous calculation setting after those changes.

```javascript
this.calculate = false;
```

Turn on calculations

```javascript
this.calculate = true;
```

Automatic calculation holds off until the user commits data after this.calculate becomes true. You can force calculation to happen with the code below.

```javascript
this.calculateNow();
```
