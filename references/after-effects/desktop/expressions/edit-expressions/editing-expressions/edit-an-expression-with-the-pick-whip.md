# Edit an expression with the pick whip

When JavaScript or After Effects expressions still feel uncertain to you, lean on the pick whip tool as a starting point. It gives you a simple way to wire together the properties an expression refers to.

First confirm the property already carries an expression — for instance, Alt+Click (Windows) or Opt+Click (macOS) the stopwatch icon at the left of the Scale property to apply one.

Head to the Timeline panel and click inside the text field to bring up the Expression Editor, then position the cursor at the spot you mean to edit.

Whatever you enter lands in the expression field right at the insertion point.

- Where text sits selected in the expression field, your fresh expression text takes the place of that selection.
- Where the insertion point lies outside the expression field, your fresh expression text overwrites everything in the field.

The pick whip can be dragged onto either a property's name or its value. Drag it to the name and the resulting expression rolls every value into one. Drag it to the Position property's name, say, and you get an expression along these lines:

```javascript
  thisComp.layer("Layer 1").transform.position
```

Drag the pick whip onto a single component of the Position property instead — the y value, for example — and an expression like the one below appears, with the property's x and y coordinates both bound to that y value:

```javascript
  temp = thisComp.layer("Layer 1").transform.position[1];
  [temp, temp]
```

Note

Build a pick-whip expression that points at a layer while another layer in the same composition shares that name, and the targeted layer gets renamed. Its fresh name is the former one with a digit appended. That step keeps the expression pointing at exactly one layer in the composition with no ambiguity.
