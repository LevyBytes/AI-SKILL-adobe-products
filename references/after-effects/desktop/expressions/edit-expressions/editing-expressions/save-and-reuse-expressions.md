# Save and reuse expressions

With an expression written, you can stash it for later by copying and pasting into a text editor, or hold onto it inside an animation preset or template project. Still, since expressions reference other layers in a project and sometimes name particular layers, moving one between projects can call for a few edits.

Ordinary JavaScript function syntax lets you declare your own functions inside expressions. Here, a function works out the average of two values, and that function gets called on the closing line:

```javascript
  function average(a, b)
  {
    return (a + b) / 2;
  }
  average(position, thisComp.layer(1).position);
```

Note

Each function has to be defined in full inside every expression that calls it. No shared, global function library exists for you to draw on.

Planning to carry an expression into a different project? Then it's worth commenting it. Lean on variables as well, so a value can be changed in a single spot instead of in several.

This one, for instance, opens with a multiline comment describing what the expression does, plus a brief comment trailing a declared-and-initialized variable that says what the variable does:

```javascript
  /*  This expression on a Source Text property reports the name
      of a layer and the value of its Opacity property. */

  var myLayerIndex = 1; // layer to inspect, initialized to 1, for top layer

  thisComp.layer(myLayerIndex).name + ": \rOpacity = " +   thisComp.layer(myLayerIndex).opacity.value
```

An animation preset carrying an expression can be saved and reused elsewhere, so long as the expression doesn't lean on properties missing from those other projects. Save a preset where a property holds an expression but no keyframes, and only the expression goes in. Where the property has one or more keyframes, the stored preset keeps the expression plus every keyframe value.
