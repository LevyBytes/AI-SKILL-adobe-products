# Create a Flex Layout in an existing document

Converting a selection to Flex Layout prompts InDesign to inspect alignment and spacing, then assign layout behavior that fits the selection. That behavior helps the layout react reliably when content changes.

Select the target objects or groups.

Group conversion: with the group selected, right-click and choose Flex Layout > Convert to Flex Layout.

Multiple-object conversion: after selecting the objects, right-click and choose Flex Layout > Add to Flex Layout.

Note

InDesign can auto-detect the direction and properties for Flex Layout. To enable or disable it, choose Edit > Preferences > General (Windows) or InDesign > Preferences > General (macOS), select or clear Auto-detect and apply Flex Layout settings, and then select OK.

InDesign derives layout properties from the alignment of selected objects:

- Aligned selections: direction follows the alignment; sizing on that axis becomes Auto, and spacing becomes Space Between.
- Unaligned selections: InDesign enables Wrap Content, then uses a fixed size on the primary axis and automatic sizing on the secondary axis.

Direction, justification, spacing, wrap, and alignment remain editable.

Use the Flex Layout panel to refine Flex Layout properties.

Make additional Flex Layout property adjustments in the Flex Layout panel.

Convert parent elements into Flex Layouts when you need nested structures.

Add items or remove them, observe the response, and keep refining until the layout adapts smoothly.

Note

Auto-detection does not create nested Flex Layouts. If a group already includes a Flex Layout, InDesign treats it as one object, so convert inner groups manually either before creating the outer container or afterward.
