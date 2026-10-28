# Null object layers

Reach for a null object when you need a parent layer that never shows up as a visible part of your project. Being invisible while still carrying every property a visible layer has, a null object can parent any layer in the composition. You tweak and animate one exactly as you would any layer, and the same commands that adjust a solid-color layer apply to it (Layer > Solid Settings).

Note

Because Expression Controls effects can be applied to null objects, a null can act as a control layer driving effects and animations across other layers. With a camera or light layer, for example, build a null object layer and write an expression tying the camera's or light's Point Of Interest property to the null's Position property. Moving the null then animates the Point Of Interest. Spotting and selecting a null tends to be easier than spotting and selecting the point of interest itself.

There's no limit to how many null objects a composition can hold. A null shows up only within the Composition and Layer panels, appearing in the Composition panel as a rectangular outline fitted with layer handles. Effects never render on null objects.

Building a null object means selecting the Timeline or Composition panel and then choosing Layer > New > Null Object.

Note

- A fresh null object layer puts its anchor point at the layer's upper-left corner, and the layer sits anchored at the composition's center by that anchor point. Move the anchor point however you would for any layer.
- Should a null object clutter the composition frame visually, drag it off the frame and onto the pasteboard.

There's also Nulls Controllers for Positional Properties, which spins up Nulls to govern the positional properties and motion of objects — a real time-saver in After Effects once you're juggling lots of layers or intricate animations. It lets you single out and steer the movement of one specific point (a Position or an Anchor Point inside a Shape, object, or layer) on its own, apart from the rest of that same layer.
