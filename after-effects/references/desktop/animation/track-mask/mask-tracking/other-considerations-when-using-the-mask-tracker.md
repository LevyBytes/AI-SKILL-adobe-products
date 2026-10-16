# Other considerations when using the mask tracker

- Tracking works well only when the tracked object holds one shape the whole way through the movie, even though its Position, Scale, and Perspective are free to vary.
- Before you kick off the tracking operation you may pick several masks at once, in which case keyframes get added to the Mask Path property for every one of those masks.
- Footage layers that support tracking — video footage and precompositions, for instance — are where the Mask Tracker is offered. It stays unavailable on Adjustment, Text, Solid, and Shape layers.

During analysis the mask tracking hunts for content sitting inside the mask. To grow or shrink the mask's covered area, turn to the Mask Expansion property.

Tip

These tutorials walk you through putting the Track Mask effect and mask tracker to work in After Effects.
