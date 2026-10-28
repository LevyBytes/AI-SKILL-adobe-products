# Expressions and Keyframes

Every property in After Effects that can be animated carries both a pre-expression value and a post-expression value.

Think of the pre-expression value as the property's value before any expression touches it — whether that value is fixed or already driven by keyframes. It parallels a layer's raw pixels with no effects on them. An expression can then read or alter those pre-expression values — much as an effect reworks or draws on a layer's pixels — and the result is the post-expression value.

You can tell which one a property is showing by the highlight color on its value in the UI: blue marks pre-expression values, red marks post-expression ones.

Inside an expression, reach a property's pre-expression value through the attribute value. Take value+90 on a Rotation property — it tacks 90 degrees onto whatever the property held before the expression ran. Keyframed values behave the same way; with Rotation keyframed from 0 to 45, that same value+90 expression drives it from 90 to 135. You can likewise read individual keyframe values via key(index).value — pass 1 as the index for the first keyframe, 2 for the second, and so on. Because the attribute numKeys always matches the count of keyframes on the property, key(numKeys).value gives you the final keyframe's value.

A handful of methods — wiggle() and the assorted loops, for instance — draw on the pre-expression value behind the scenes.

To illustrate, on a property sitting at 0 the expression wiggle(10, 10) swings between -10 and 10, layering wiggle motion around the value it already has. The behavior carries over to a keyframed property as well, stacking secondary animation atop the original animated values.
