# this() shorthand syntax is not allowed; use thisLayer() instead

The Legacy ExtendScript engine let this serve as a shorthand for thisLayer. Under the JavaScript engine, this points at the global object, so thisLayer has to take its place; lean on this in the JavaScript engine and you'll typically hit the error "this is not a function".

Here, a Legacy ExtendScript sample leans on this to forge a compact link from the Source Text property to a Text Layer Position property:

```javascript
this(5)(2).value;
```

Under the JavaScript engine, swap this out for thisLayer:

```javascript
thisLayer(5)(2).value;
```

thisLayer works across both expression engines.
