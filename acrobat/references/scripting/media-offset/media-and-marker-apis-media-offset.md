# Media and Marker APIs — MediaOffset

Inside a MediaClip, a MediaOffset marks one playback position, given either as a time value or as a frame count. That position is either absolute — measured from where the media starts — or stated relative to a marker you name.

You may supply the MediaOffset as the full object described here, or shorten it to a bare number, in which case the value is treated as {time: number}.

Time-based formats (QuickTime is one) and frame-based formats (Flash is another) differ, so an offset has to express its position in whichever unit the active format expects. Supplying both a time and a frame leaves the outcome undefined: the surplus value might be discarded, or a JavaScript exception might surface.

Four places consume this object: MediaPlayer. seek, MediaPlayer. where, MediaSettings. endAt, and MediaSettings. startAt .
