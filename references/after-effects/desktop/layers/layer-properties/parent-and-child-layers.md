# Parent and child layers

Parenting is the tool you reach for when you want one layer's transformations to drive another's. Once a layer becomes the parent of a second layer, that second layer is referred to as the child. Assigning a parent makes the child's transform properties measure against the parent rather than against the composition. Move a parent 5 pixels to the right of where it began, for instance, and its child slides 5 pixels to the right as well. The behavior resembles grouping, where any transformation done to the group is reckoned from the parent's anchor point.

Position, Scale, Rotation, and Orientation (on 3D layers) all respond to parenting; Opacity does not.

Tip

As you parent layers, descriptive text about alternate parenting behaviors shows up on the layer bar just under the cursor and over in the Info panel.

Any layer is limited to a single parent, yet that one layer can serve as parent to as many layers as you like within the same composition.

Child layers remain free to be animated apart from their parents. Parenting can also run through null objects, which are simply hidden layers.

The assigning or removing of a parent designation itself can't be animated — meaning you can't tag a layer as a parent at one moment and treat it as an ordinary layer at another.

As you set up a parenting relationship, you get to decide whether the child adopts the parent's transform property values or hangs on to its own. Choose to adopt them and the child snaps to the parent's position; choose to keep its own and the child stays put. Either way, any later edits to the parent's transform property values carry through to the child. You likewise get to decide whether the child jumps once the parenting relationship is severed.

Note

Holding Shift while parenting layers shifts the child layer onto the parent's location. That's handy when you want to bind a layer to a null but have the layer travel to the null's spot — say, attaching a 3D text layer to a null produced by the 3D Camera Tracker.

Dragging the pick whip in the Timeline panel from Shape layer 1 (child layer) to designate Shape Layer 2 as the parent layer

- Showing or hiding the Parent column in the Timeline panel is done by picking Columns > Parent from the Timeline panel menu.
- To set up parenting, drag the pick whip in the Parent column from the layer meant to be the child onto the layer meant to be the parent.
- Alternatively, parent a layer by opening the menu in the Parent column for the layer you want as the child and selecting a parent layer name from it.
- Stripping a parent off a layer means opening that layer's menu in the Parent column and choosing None.
- Right-click (Windows) or Control-click (macOS) a parent layer in the Composition or Timeline panel and pick Select Children to widen the selection to take in all of that parent's child layers.
- Hold Alt (Windows) or Option (macOS) while assigning or removing the parent to make a child layer jump at that moment.
- To clear a parent (that is, reset Parent to None), Ctrl-click (Windows) or Command-click (macOS) the child layer's parenting pick whip in the Timeline panel. Use Alt+Ctrl-click (Windows) or Option+Command-click (macOS) on that pick whip to drop the parent and have the child layer jump.
