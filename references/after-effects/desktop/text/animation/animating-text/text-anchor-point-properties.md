# Text anchor point properties

Position, rotation, and size-type properties of characters get animated by text animators, all measured against an anchor point. Whether transformations pivot around the anchor point of each character, each word, each line, or the whole text block is something you set through the text property called Anchor Point Grouping. On top of that, the Grouping Alignment property lets you steer how the character anchor points line up against the group's own anchor point.

Original text, then rotated and with Grouping Alignment set to Character, Word, and Line

In the Timeline panel, open the text layer, then open the More Options property group.

- From the Anchor Point Grouping menu, pick the way the character anchor points should be grouped.

- Drop the Grouping Alignment values to shift each anchor point upward and toward the left.

- Bump up the Grouping Alignment values to shift each anchor point downward and toward the right.

For a run of capital letters, a Grouping Alignment value of 0%, -50% tends to land the anchor point in the center. Where lowercase letters are involved, or a mix of lowercase and uppercase, 0%, -25% is worth trying for that centering.

Pick certain properties in the Timeline panel for a text animation and the anchor points turn up in the Composition panel. Among those properties are Anchor Point Grouping, Grouping Alignment, plus the animator properties Anchor Point, Position, Scale, Rotation (the per-character 3D variants included: X Rotation, Y Rotation, Z Rotation).
