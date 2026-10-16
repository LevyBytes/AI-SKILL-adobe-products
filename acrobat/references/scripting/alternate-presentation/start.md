# start

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Flips the document view over into alternate presentation mode and turns the active property to true. Should this or another alternate presentation already be running, an exception is raised.

Parameters

| Parameter | Description |
| --- | --- |
| cOnStop | (optional) An expression that Acrobat evaluates once the presentation ends for whatever reason — a stop call, a direct user action, or the presentation's own logic. |
| cCommand | (optional) A command or script handed to the alternate presentation. - The command is specific to that presentation, not a JavaScript expression. |

Example: Suppose the document holds a presentation named "MySlideShow".

```javascript
// oMySlideShow is an AlternatePresentation object
oMySlideShow = this.alternatePresentations.MySlideShow;
if (!oMySlideShow.active) oMySlideShow.start();
```

Observe how this.alternatePresentations reaches the named presentation through its property name.
