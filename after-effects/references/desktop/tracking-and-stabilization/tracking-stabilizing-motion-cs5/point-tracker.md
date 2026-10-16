# Point tracker

A clip lets you follow either a single reference feature or several at once:

One-point tracking: Follow one reference pattern — a tiny cluster of pixels — across a movie clip to capture position data.

Two-point tracking: Follow two reference patterns in a movie clip; the relationship between the pair yields position, scale, and rotation data.

Four-point tracking or Corner pin track: Follow four reference patterns in a movie clip to capture position, scale, and rotation data. Working from the relationship among four reference patterns — say, the corners of a picture frame or television monitor — the four trackers feed data to each corner of an image or clip, "pinning" it so the clip looks locked inside that picture frame or television monitor.

- Multiple-point tracking: Follow as many reference patterns in a clip as you want. Trackers can be added by hand inside the Analyze Motion and Stabilize behaviors. Applying a Track Points behavior from the Shape behaviors subcategory onto a shape or mask automatically attaches a tracker to each shape control point.

For detailed instructions on using the point tracker, see Tips for using the point tracker.
