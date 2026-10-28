# Layer markers and composition markers

Search Last updated on Mar 27, 2026

In After Effects, add and edit markers that hold comments and timing notes — and put them to work.

Lean on composition markers and layer markers to stash comments and other metadata and to flag key moments across a composition or a layer. Composition markers ride the composition's time ruler, while layer markers sit on a given layer's duration bar. Either kind can carry the same information.

A marker may point at a lone instant in time or span a duration.

In After Effects, composition markers line up with sequence markers in Adobe Premiere, and layer markers line up with clip markers in Adobe Premiere.

Render a composition holding markers and those markers can turn into web links, chapter links (chapter points), or cue points — which one depends on the output format and the values you enter in the marker dialog box. Markers can also go out as XMP metadata.

A composition marker defaults its comment to a number, whereas a layer marker defaults to no comment at all.

Any marker holding link or cue-point data carries a small dot inside its icon.

A. composition marker with duration of 1 second B. composition marker with cue-point data C. layer marker with duration of 2 seconds D. layer marker with cue-point data

Note

Markers smooth the job of lining layers or the current-time indicator up with particular moments: hold Shift as you drag the current-time indicator, a keyframe, or a layer's duration bar inside the Timeline panel, and those items snap to markers.

During a preview or audio-only preview you can drop markers, which lets you set them at telling spots in a layer's audio track.

Dragging a marker in point shifts the marker's time; dragging its out point shifts the marker's duration. Time and duration can't both change at once.

- View or edit a marker's data by double-clicking it, or right-clicking (Windows) / Control-clicking (macOS) it and choosing Settings.
- Relocate a marker by dragging it, or by double-clicking it and entering a time in the dialog box.
- Set a composition or layer marker's duration by dragging the marker's out point in the Timeline panel. Marker icons split down the middle to mark the in point and the out point.
- To drag-set a marker's duration, hold Option (macOS) or Alt (Windows), grab the marker icon, and drag rightward.
- To alter a marker's duration, just select and drag the marker out point icon — no need to hold Option or Alt.
- Want layer markers built for you off a layer's source-file temporal metadata? Turn on, over in the Disk preferences category, the Create Layer Markers From Footage XMP Metadata preference — already enabled out of the box.
- Want a precomposition layer's markers matched to the source composition's own composition markers? Right-click (Windows) or Control-click (macOS) one of its layer markers, then pick Update Markers From Source. Doing so also clears whatever markers you'd added to that layer by hand.

Note

If the layer draws on a file (not a composition) for its source, this command resets the layer markers back to those mirroring the source file's temporal XMP metadata.

Drop one composition inside another and the original nests as a layer within the host composition. Every composition marker from the nested composition turns into a layer marker on the host composition's timeline. Those markers hold no link back to the original composition markers. Edits you make to the composition markers in the original don't ripple into the nested composition's layer markers. Delete one of the original composition markers, for example, and the matching layer marker in the nested composition stays right where it is.

Scripts and expressions are able to read and act on data tucked inside markers. And because XMP metadata for source footage items can become layer markers, expressions and scripts get to work with that XMP metadata.
