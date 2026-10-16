# Example: Animate text position with expressions

Here the textIndex and textTotal attributes are paired with the wiggle expression to animate a row of text.

1. Create a new composition.
2. Create a new text layer.
   Open up the text layer in the Timeline panel so the text properties show. Off the Animate menu, add a Position animator group.

3. Delete the default Range selector, Range Selector 1.
   Bring in an Expression selector by going to the Add menu and picking Selector > Expression. Open the Expression selector so its options show.

```javascript
selectorValue * textIndex/textTotal
```

```javascript
seedRandom(textIndex);
amount=linear(time, 0, 5, 200*textIndex/textTotal, 0);
wiggle(1, amount);
```

What the linear method does here is taper the peak wiggle amount downward as time passes.

8. Dial in the vertical position value. Higher values push the characters into stronger wiggling.
9. Preview your composition.
