# Wiggle randomly

Among the most widely used After Effects expressions is the wiggle expression. It jostles an object through random values, and you can reach for it to give a scene a more lifelike feel. Attach it to a layer's Position property.

In your composition, pick a layer.

To show that layer's Position property in the Timeline panel, tap P.

Beside the property name sits a stopwatch — Alt-click it on Windows, or Option-click it on macOS.

Type this code snippet into the expression field:

```javascript
wiggle(2,30)
```

The signature here is wiggle (frequency, amount): the leading number says how many wiggles occur per second, and the trailing one says how far each wiggle reaches. So with wiggle(2,30), the layer jitters twice a second by up to 30 pixels in whatever direction.
