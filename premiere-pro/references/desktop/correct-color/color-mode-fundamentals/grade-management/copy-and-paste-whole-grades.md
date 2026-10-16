# Copy and paste whole Grades

In Color mode, a grade includes every operation at every level that applies to a clip, including clip operations, grouped operations, and any other intersecting operations. Copying the grade copies each operation that changes the image.

To copy and paste grades in the Clip Grid, use these steps:

When copying a grade, use one of these methods:

- Select a clip in the Clip Grid, then press Command + C.
- Open a Clip Grid clip's context menu and select Copy.

To apply the copied grade, choose one paste method:

- Use Command + V on the chosen Clip Grid clip or clips for Paste and Replace.
- With one or more Clip Grid clips selected, open a selected clip's context menu and choose an option from the Paste Grade to Selection submenu.
- For a single Clip Grid clip, open its context menu and choose an option from the Paste Grade to Clip submenu.

Available options in the Paste Grade to Clip submenu are:

- Paste and Replace: substitutes the pasted grade for the clip’s current grade. Incoming operations replace all existing operations, and grouped clip relationships are broken. Use it for quick grade copying without grouped operations, or when copied grouped operations should become the basis for new groups.
- Paste and Append: adds the pasted operations after the operations already on the clip. Use it when one or more individual operations should be added to an existing grade. Grouped operations paste as new groups unless the destination clip already contains the same group being copied.
- Paste as Clip Operations: places every incoming operation at the Clip level of that clip’s grade, so the operations affect only that clip.
- Paste to Preserve Group Relationships: substitutes the pasted grade for the clip’s current grade while keeping grouped clip relationships. Incoming operations replace all existing operations. Use it when the copied groups should expand to include the clips receiving the paste.

Choose whether copied grades replace existing grades, append to them, or keep group relationships intact.

Decide how copied grades should be applied: replacing, appending, or preserving group relationships.
