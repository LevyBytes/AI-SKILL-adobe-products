# Best practices for creating text and vector graphics for video

Type that reads cleanly on your monitor while you build it may turn out looking rough once it lands in the finished output movie. The culprit is often the playback device or the compression scheme used to encode the movie. Other vector graphics — shapes in shape layers, for one — face the identical risk. Raster images aren't immune either, but it's the fine, crisp detail of vector graphics that triggers the trouble most.

Bear these points in mind while building and animating text and vector graphics for video:

Always check your movie on the very device your viewers will use, such as an NTSC video monitor.

Steer clear of abrupt color shifts, particularly a jump from a deeply saturated color straight to its complement. Lots of compression schemes — the ones behind the MPEG and JPEG standards among them — struggle to encode such abrupt shifts, and the result can be visual noise hugging those transitions. On analog television, those same abrupt shifts can push spikes past the signal's permitted range, which likewise produces noise.

Whenever text sits over moving footage, give it a contrasting outline — a glow or a stroke — so it stays legible even as something matching its fill color slides by behind it.

Steer clear of thin horizontal elements; they can drop out of frame should they land on an even scan line during an odd field, or the other way around. Take the crossbar of a capital H — keep its height at three pixels or more. Bump up the font size, switch to a bold (or faux bold) style, or add a stroke to fatten those horizontal pieces.

For text that animates straight up or down — scrolling credits, for instance — set its vertical speed in pixels per second to an even multiple of the interlaced format's field rate. Pinning the speed there heads off a twitter that crops up when the motion drifts out of phase with the scan lines. NTSC favors values like 0, 119.88, and 239.76 pixels per second; PAL favors 0, 100, and 200 pixels per second.

Note

For a quick vertical text crawl — a credit roll, say — apply the Autoscroll - vertical animation preset found in the Behaviors category.

- One way to sidestep the twitter brought on by vertical motion, thin graphical elements, and fields is to roll the credits as a series of text blocks joined by transitions, like opacity fades.

A single trick clears up many of the usual text problems in video and compressed movie formats: blur the text layer. Even a light blur smooths color transitions and puffs out thin horizontal elements. For knocking down twitter specifically, the Reduce Interlace Flicker effect is the strongest pick — it lays on a vertical directional blur while leaving the horizontal untouched, so the image suffers less degradation than it would from other blurs.
