# Working with a Primary composition

Whatever composition currently sits in the Essential Graphics panel is the Primary composition.

Supported properties drawn from that Primary composition can be placed into the panel, and so can properties belonging to compositions that live within the primary composition's hierarchy.

Should a property come from a composition that falls outside the primary composition's hierarchy, it counts as an unrelated property. Adding one triggers a warning, and although the property still lands in the Essential Graphics panel, it shows up flagged in red. The catch is that such properties won't function once the composition is exported as a Motion Graphics template.

The fix for unrelated properties is to nest the composition that holds them into the primary composition, or somewhere in its hierarchy.
