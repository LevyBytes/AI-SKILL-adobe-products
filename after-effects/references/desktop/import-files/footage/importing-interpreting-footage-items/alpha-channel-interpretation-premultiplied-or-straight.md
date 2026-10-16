# Importing and interpreting footage items — Alpha channel interpretation: premultiplied or straight

Transparency information in image files with alpha channels is held one of two ways: straight or premultiplied. The alpha channels match in both; where they part ways is the color channels.

Straight (or unmatted) channels keep transparency information in the alpha channel alone, never in the visible color channels. With them, you won't see the effect of transparency until the image opens in an application that supports straight channels.

Premultiplied (or matted) channels keep transparency information in the alpha channel and in the visible RGB channels too, those being multiplied against a background color. That's why premultiplied channels are sometimes described as matted with color. Across semitransparent regions — feathered edges, for one — the colors shift toward the background color by an amount tied to how transparent they are.

Certain software lets you name the background color the channels get premultiplied with; otherwise that background color tends to default to black or white.

More accurate color information survives in straight channels than in premultiplied ones. Premultiplied channels, on the other hand, play nicely with a broader set of programs — Apple QuickTime Player among them. The decision to use straight versus premultiplied channels has frequently already been made by the time the assets reach you to edit and composite. Both straight and premultiplied channels are recognized by Adobe Premiere and After Effects, though only the first alpha channel they hit in a file with several.

Getting the alpha channel interpretation right heads off trouble on import — unwanted colors at an image's edge, say, or quality loss along the alpha channel's edges. As an example, channels read as straight when they're really premultiplied will leave semitransparent areas holding some background color. If a color inaccuracy like a halo turns up along the semitransparent edges in a composition, give the interpretation method a change.

A footage item with premultiplied channels (top) appears with a black halo when interpreted as Straight-Unmatted (lower-left). When the footage item is interpreted as Premultiplied-Matted With Color and the background color is specified as black, the halo does not appear (lower-right).

The Remove Color Matting effect is one way to strip the fringes off a layer's semi-transparent areas, by unmultiplying it.
