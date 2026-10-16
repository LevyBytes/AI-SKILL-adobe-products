# Motion tracking user interface and terminology overview

Setup, kickoff, and application of motion tracking all happen from the Tracker panel. Open it through Windows > Tracker.

Tracking properties behave like any other property: the Timeline panel is where you edit, animate, organize, and link them.

The regions you want followed are marked by placing track points in the Layer panel. A feature region, a search region, and an attach point make up each track point, and a group of track points together forms a tracker.

Layer panel with track point

A. Search region B. Feature region C. Attach point

Layer panel with track point

Feature region

What gets followed inside the layer is set by the feature region. Wrap it around a clearly recognizable visual element — ideally a single real-world object. Across the whole length of the track, After Effects has to keep recognizing that feature even as lighting, backdrop, and angle shift.

Search region

The patch that After Effects scans to find the tracked feature is the search region. Distinctiveness only has to hold within that region rather than across the full frame. Keeping the region small trims the search time and eases the process, though it carries the danger that the feature slips out of the region between one frame and the next.

Attach point

Where the target hooks on — the layer or effect control point that follows the moving feature in the tracked layer — is marked by the attach point.

Note

As soon as you start tracking, After Effects switches the motion source layer's quality to Best and its resolution to Full inside the Composition and Layer panels; this sharpens the tracked feature and turns on subpixel processing and positioning.

For position, After Effects relies on a single track point; scale and rotation call for two; and corner pinning uses four.

Tip

Mocha Essentials, a no-cost video training series from Boris FX, walks you through everything about Mocha AE and Planar Motion Tracking.
