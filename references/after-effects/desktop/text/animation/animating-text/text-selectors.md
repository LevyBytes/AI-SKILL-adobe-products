# Text selectors

A default range selector ships inside every animator group. That default can be swapped out, extra selectors can be added to a group, and selectors can be pulled from a group.

In many ways selectors resemble masks: with a selector you mark which slice of a text range to affect and to what degree. Several selectors can run at once, and giving each one a Mode setting decides how it plays against the text and against the other selectors in the same group. When just a single selector exists, Mode governs how that selector and the text interact — Add is the standard behavior, while Subtract flips the selector's influence.

Note

Delete every selector from an animator group and the animator property values then reach all characters in the layer. The value of this trick lies in animating text properties set through the Character panel, which otherwise can't be animated (short of using Hold keyframes on the Source Text property itself).

Reach for a Wiggly selector to shift a selection within a set range over time. Lean on expression selectors when you want expressions to dynamically dictate how strongly characters respond to an animator property.

- Adding a selector via the Timeline panel means selecting an animator group there and picking Selector from the group's Add menu, or choosing Animation > Add Text Selector. From the submenu pick Range, Wiggly, or Expression.
- Adding a selector via the Composition panel means selecting a span of characters there, right-clicking (Windows) or Control-clicking (macOS) the text, and choosing Add Text Selector from the context menu. From the submenu pick Range, Wiggly, or Expression.
- Removing a selector means selecting it in the Timeline panel and pressing Delete.
- Renaming a selector requires it to stand as the only selection; once it does, tap Enter (Windows) or Return (macOS), or else right-click (Windows) or Control-click (macOS) its name and choose Rename.
- Copying a selector means selecting it in the Timeline panel and choosing Edit > Copy. Pasting it means selecting a layer and choosing Edit > Paste.
- Reordering a selector means dragging it within the Timeline panel to a new spot in the stack.

Adding a new range selector to an animator group
