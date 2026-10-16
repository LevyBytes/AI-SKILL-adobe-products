# Expression example: Create a bulge between two layers

What this expression does is lock the Bulge Center argument of one layer's Bulge effect onto where a second layer sits. Picture a magnifying glass gliding across a layer, the material beneath the lens swelling as the overlying layer slides by. Because the expression relies on the fromWorld method, it keeps behaving correctly no matter whether it's the magnifying glass layer or the layer underneath that you reposition. Rotating or scaling the lower layer leaves the expression working just the same.

The expression also pairs with other effects, Ripple among them.

Begin by making two layers. Turn one of them into a magnifying glass — or any object with a hole through its center — and label it Magnifier.

Animate where the magnifying glass layer travels.

Put the Bulge effect on the second layer.

In the Timeline panel, click the Bulge Center property belonging to the Bulge effect. Either go to Animation > Add Expression, or, on the property's stopwatch button, Alt-click (Windows) / Option-click (macOS).

```javascript
fromWorld(thisComp.layer("Magnifier").position)
```
