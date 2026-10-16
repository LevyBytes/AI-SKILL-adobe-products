# Aspects to consider when using Morph Cut

Note

Morph Cut requires substantial processing. Large-format media increases analysis time, particularly on GPUs with smaller memories (less than 2 GB VRAM).

Morph Cut performs most reliably with footage like this:

- A single-subject "talking head" interview shot
- A fixed shot, though minimal camera movement is usually acceptable
- A static background with little or no lighting change

Apply the Morph Cut effect from the Effect panel to create a smoother transition between clips.

The Effect panel provides the Morph Cut effect for smoothing the transition from one clip to the next.

Good results are still possible when not all three conditions are present. However, blotchy output can appear when the frame includes too much background, hand, or body movement. Face detection may also become uneven with a tight crop or a profile view of the subject. Even when the footage meets all three conditions, outcomes can differ. Face detection is influenced by factors such as:

- The subject's framing and lighting
- The amount of head movement or camera movement at the cut
- Whether the speech pause feels natural enough for lip-syncing
