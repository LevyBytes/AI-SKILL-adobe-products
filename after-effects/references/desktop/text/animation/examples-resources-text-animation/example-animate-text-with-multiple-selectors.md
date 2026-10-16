# Example: Animate text with multiple selectors

In this example the selectorValue parameter, placed in an Expression selector alongside the Wiggly selector, makes a row of characters blink on and off at random.

1. Create a new composition.
2. Create a new text layer.
   Over in the Timeline panel, pick Opacity off the Animate menu for the text layer.

In the Timeline panel, unfold the text layer together with its animator.

Pick the Range Selector, then remove it.

Alongside the text layer's Animator property group, choose Add > Selector > Wiggly.

Choose Add > Selector > Expression. Should the Wiggly selector not sit ahead of the Expression selector, drag it upward so it precedes that one.

Open the Expression Selector.

```javascript
selectorValue * textIndex/textTotal
```

```javascript
r_val=selectorValue[0];
if(r_val < 50)r_val=0;
if(r_val > 50)r_val=100;
r_val
```

11. Set the opacity to 0%, and preview the composition.
