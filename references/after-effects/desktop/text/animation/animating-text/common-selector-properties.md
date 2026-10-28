# Common selector properties

Mode

Sets the way each selector blends with the text and with the selector above it, much as several masks blend when you give them a mask mode. Say you want only one specific word to wiggle: place a range selector on that word, then add a Wiggly selector and switch it to Intersect mode.

Amount

Sets how strongly animator properties touch the character range. The animator properties leave the characters alone at 0%. At 50%, the characters get half of each property value. This one is handy for animating the outcome of animator properties across time. With an expression selector, expressions can set this dynamically.

Units and Based On

Which units apply to Start, End, and Offset. You may go with percentage or index units and base the selection on characters, characters minus spaces, words, or lines. Choosing Characters has After Effects tally spaces, which effectively stalls the animation between words while it animates the spaces between them.

Original (left) and with VEN selected by the range selectors, Based On set to Character, Shape set to Triangle, and Scale set to 40% (right)
