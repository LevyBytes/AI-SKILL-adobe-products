# Expression example: Position one layer between two others

What this expression does is hold a single layer parked exactly midway between two others, keeping it centered as they move.

Begin by making three layers.

In the Timeline panel, animate where the first two layers travel.

Learn about working with Motion paths.

Click the third layer to select it, then tap P so the Position property shows. Hold Alt and click on Windows, or Option-click on macOS, the stopwatch button sitting just left of the property's name.

```javascript
( thisComp.layer(1).position + thisComp.layer(2).position ) / 2
```
