# stop

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Halts the presentation and returns the document to its normal (PDF) presentation. If the presentation is not running, an exception is raised.

Example: Here, oMySlideShow stands for an AlternatePresentations object. A related example appears under start.

```javascript
// Stop the show if already active
if (oMySlideShow.active) oMySlideShow.stop();
```
