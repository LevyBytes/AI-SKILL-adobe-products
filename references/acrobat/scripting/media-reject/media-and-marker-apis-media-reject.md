# Media and Marker APIs - MediaReject

A MediaReject reports on a Rendition that a Rendition.select call turned down. Alongside a pointer back to that original Rendition, it carries the reason for the rejection. Within a MediaSelection object that select hands back, MediaSelection.rejects holds an array of these MediaReject objects.
