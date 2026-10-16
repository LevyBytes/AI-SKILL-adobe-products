# Animator properties

Animator properties

Animator properties

Anchor Point

The characters' anchor point: the pivot around which transformations like scaling and rotation take place.

Position

Where the characters sit. Supply this property's values in the Timeline panel, or change it by selecting it there and then dragging the layer in the Composition panel with the Selection tool, which turns into a move tool over text characters. Such dragging leaves the z (depth) component of Position untouched.

Scale

The characters' scale. Since scale is measured against the anchor point, altering the z component of Scale shows no visible effect unless the text also carries an Anchor Point animator whose z value is nonzero.

Skew

How slanted the characters are. The Skew Axis names the axis the character is skewed along.

Rotation, X Rotation, Y Rotation, Z Rotation

Where per-character 3D properties are turned on, each axis can be rotated on its own. Without that, only Rotation (identical to Z Rotation) is available.

All Transform Properties

Every Transform property gets dropped into the animator group together in one move.

Line Anchor

How tracking aligns within each line of text. Left alignment is 0%, center alignment is 50%, and right alignment is 100%.

Line Spacing

The gap between lines within a multiline text layer.

Character Offset

How many Unicode values the selected characters shift by. A value of 5, for example, pushes the characters in a word five places along the alphabet, turning the word offset into tkkxjy.

Character Value

A replacement Unicode value for the selected characters, substituting each one with the single character that value stands for. A value of 65, for instance, turns every character of a word into the 65th Unicode character (A), so the word value reads AAAAA.

Character Range

Sets bounds on the character. This property shows up any time you add the Character Offset or Character Value property to a layer. Pick Preserve Case & Digits to hold characters inside their own groups. Those groups span uppercase Roman, lowercase Roman, digits, symbols, Japanese katakana, and the like. Pick Full Unicode when you want character changes with no limit.

Blur

How much Gaussian blur gets applied to the characters. The horizontal and vertical blur amounts can be set on their own.
