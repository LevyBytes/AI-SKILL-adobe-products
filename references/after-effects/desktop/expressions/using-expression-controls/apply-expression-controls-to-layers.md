# Apply expression controls to layers

Getting Expression Controls effects onto a layer works just like applying any other effect — dragging one from the Effects & Presets panel onto the layer, for instance.

Any layer will take Expression Controls effects, but there's an advantage to putting them on a null layer that simply serves as a controlling layer. From there, you add expressions to properties on other layers so they draw their input from that control. You might, for example, place the Slider Control effect on a null layer (Null 1) and then hand this expression to the Position properties of several layers:

```javascript
  position+[0,10*(index-1)*thisComp.layer("Null 1").effect("Slider Control")("Slider")]
```

Here, dragging the slider shifts every layer carrying this expression. Layers with higher index numbers — those lower in the Timeline panel — travel farther than ones with lower index numbers, spaced at 10-pixel steps. Set keyframes for the slider on the null layer and every other layer animates to match.

Renaming each copy of an Expression Control effect to signal its purpose often pays off. Rechristen a Color Control effect instance as sky color, say, and its job becomes obvious at a glance. Renaming an Expression Control effect instance follows the same routine as any effect: with it selected in either the Timeline panel or the Effect Controls panel, hit Enter on the main keyboard (Windows) or Return (macOS).

Note

To adjust a control's range, right-click (Windows) or Control-click (macOS) the underlined property value of the control and pick Edit Value from the context menu.
