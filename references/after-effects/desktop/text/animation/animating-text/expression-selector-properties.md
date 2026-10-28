# Expression selector properties

Open up the Expression Selector property group, then open the Amount property group, and the expression field appears in the Timeline panel. Out of the box, the Amount property starts off carrying the expression selectorValue \* textIndex/textTotal.

Through expression selectors you state the selector values on a per-character basis. Evaluation happens a single time for every character, and on each pass the input parameter textIndex gets refreshed so it lines up with that character's index.

Note

Drop the Text Bounce or Inch Worm animation preset onto a text layer if you want a look at expression selectors in action. With a layer selected, hit EE to bring up every expression that layer carries.

Beyond the expression elements available to you in other places, the attributes listed below let you animate selections across all sorts of inventive paths:

textIndex

Hands back where the character, word, or line falls in the index.

textTotal

Hands back how many characters, words, or lines there are altogether.

selectorValue

Gives you whatever value the selector before it produced. Picture this value as whatever feeds in from the selector positioned above the expression selector in the stacking order.

Note

Only the expression selector supports the textIndex, textTotal, and selectorValue attributes. Drop them anywhere else and a syntax error is what you get.

Fill color changes randomly using an expression animator.
