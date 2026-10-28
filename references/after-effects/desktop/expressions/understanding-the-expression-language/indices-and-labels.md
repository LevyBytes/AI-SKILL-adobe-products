# Indices and labels

Layer, Effect, and Mask elements in After Effects are indexed from 1 — the Timeline panel's opening layer, for instance, is layer(1).

As a rule, referring to a layer, effect, or mask by name rather than number heads off the confusion and errors that crop up when something gets moved or when arguments shift across product updates and upgrades. Always wrap a name in straight quotes when you use one. Of the two expressions below, the first reads more clearly than the second and keeps working even after you reorder the effects:

```javascript
  effect("Colorama").param("Get Phase From")
  effect(1).param(2)
```
