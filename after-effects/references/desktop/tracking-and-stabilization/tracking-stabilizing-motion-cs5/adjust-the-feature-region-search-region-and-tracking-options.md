# Adjust the feature region, search region, and tracking options

Set each feature region control snugly around the feature it tracks — enclose the feature completely while taking in as little of the surrounding image as you can.

How big the search region is and where it goes hinge on how the feature you're tracking moves. The region has to allow for that movement, but only frame to frame, not across the whole shot. Each time After Effects pins down the tracked feature in a frame, both the feature region and the search region shift to the new spot. So when the feature drifts gradually between frames, the search region only needs to be a touch larger than the feature region. When the feature shifts position and heading fast, the search region has to be roomy enough to take in the biggest change of position and direction across any two adjacent frames.

You can additionally configure tracking options that govern which color channels get compared when matching the feature region.
