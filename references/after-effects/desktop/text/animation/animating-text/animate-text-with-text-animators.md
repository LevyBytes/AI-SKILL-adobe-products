# Animate text with text animators

Three core steps make up the process of animating text with animators and selectors:

Attach an animator that names which properties get animated.

Apply a selector that sets how strongly each character feels the animator.

Fine-tune the animator properties.

Note

Removing the default selector makes the effect hit every character in the layer at all times. When that's done, animating a text layer differs little from animating any other layer.

In most cases the animator properties need no keyframes or expressions of their own. The usual pattern is to keyframe or write expressions only on the selector while supplying nothing but the final values for the animator properties.

In the Timeline panel pick a text layer, or in the Composition panel select the exact characters you intend to animate.

- Go to Animation > Animate Text, then pick a property off the menu.

Picking Enable Per-Character 3D adds no animator. Instead it grants 3D properties to the layer and to each character, which you can subsequently attach animators to.

- Pick a property from the Animate menu; within the Timeline panel that menu sits in the Switches/Mode column.

2. Choose a property from the Animate menu
   Over in the Timeline panel, set the animator property values. The common approach is to push the property you want animated to its final value and then steer the rest through the selectors.

Open up the Range Selector property group and lay down keyframes for the Start or End properties by clicking the property's stopwatch and then doing one of these:

- Enter the Start and End values in the Timeline panel.

Thinking of the Start and End properties of a range selector as character counts rather than percentages may feel more natural. To display those properties as numbers of characters (spaces counted), set Units to Index inside a range selector's Advanced property group.

- Within the Composition panel, drag the selector bars. Hovering over the middle of a selector bar flips the pointer to the selector movement pointer.

For a finer selection, open Advanced and set options and values to taste.

As an illustration, to fade opacity step by step from the first character through the last, attach an Opacity animator, set its opacity value (within the Animator property group) to 0, and then keyframe the End property of the default selector at 0% at 0 seconds and 100% at some later point.

Animating the opacity of a text layer using the Opacity animator and the End property

Stacking several animators and several selectors — each contributing its own influence to the text animation — lets you build intricate animations.
