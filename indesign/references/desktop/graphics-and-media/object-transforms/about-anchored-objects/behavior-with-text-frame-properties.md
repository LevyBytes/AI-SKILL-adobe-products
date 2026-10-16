# Behavior with text frame properties

Changes made to the parent text frame also affect anchored objects. If that frame is rotated or skewed, the same transformation carries over to its anchored objects, including ones placed beyond the frame edge. Rotation or skew can still be changed on a single anchored object while keeping the anchor relationship intact.

Resizing the text frame causes inline and above-line objects to update where they sit in the layout. Custom-positioned objects stay tied to their configured reference points; as those references move, the object may land in a different page position while continuing to align with its anchor.
