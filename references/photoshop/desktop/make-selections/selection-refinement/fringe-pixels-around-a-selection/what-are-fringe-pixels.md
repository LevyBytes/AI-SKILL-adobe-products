# What are fringe pixels?

Moving or pasting an anti-aliased selection can carry along pixels just outside the selection border. Those extra pixels form a fringe or halo around the pasted edge. The effect is easiest to see when the new background differs strongly from the original background.

Fringe pixels naturally come from anti-aliasing, which makes edges look smoother by partially filling pixels along the selection border. Even though anti-aliasing improves edge appearance, the partially transparent pixels may keep color from the old background and become visible artifacts in a new setting.
