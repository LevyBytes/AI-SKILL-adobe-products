# QuickTime (MOV) encoding and compression settings

Within the Render Queue panel, click the underlined name of the output module.

Pick QuickTime from the Format menu.

Click Format Options in the Video Output section.

Once the QuickTime Options dialog box opens, settle on a codec and set its options to fit that codec and what you're after:

Quality

Push Quality higher for better image quality, at the cost of a larger movie file.

Key Frame Every

What QuickTime calls key frames isn't the change-over-time keyframes you drop in the Timeline panel. In QuickTime, key frames land at fixed intervals through the movie and get stored whole during compression. Every intermediate frame between them is measured against the frame before it, and only what changed gets kept. Key frames slash movie size but pile on the memory needed to edit and render a movie. Tighten the gap between key frames and seeking plus reverse playback speed up — though file size can swell sharply.

Frame Reordering

Certain codecs let frames encode and decode out of sequence, which packs them away more efficiently.

For more on QuickTime, head to the Apple website.

Click OK.

Set the rest of your options in the Output Module Settings dialog box.
