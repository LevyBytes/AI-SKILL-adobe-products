# Track a mask vertex in composition space

Here the first vertex of Mask 1 on Dark Gray Solid 1 has its coordinates pulled and converted over to composition coordinates. Apply it to an effect's 2D point control — Write-on or CC Particle Systems II, say — and the effect will trace or track an animated mask's opening point. Duplicate that effect and change the path-points index ([0]) to follow whichever other mask point you want.

```javascript
var myLayer = thisComp.layer("Dark Gray Solid 1");
myLayer.toComp(myLayer.mask("Mask 1").maskPath.points()[0]);
```
