# Keying effects — Use the Inner/Outer Key effect

Working with Inner/Outer Key starts with drawing a mask that marks the inner and outer edges of the object you mean to isolate. That mask can stay fairly loose—there's no need for it to sit precisely along the object's edges.

Beyond lifting a soft-edged object off its background, Inner/Outer Key also reworks the colors hugging the border to wash out background color contamination. This decontamination step works out how much the background fed into each border pixel's color and then subtracts that share—getting rid of the halo that tends to show when a soft-edged object is matted over a new background.

Trace a single closed mask along the object's border, then choose that mask from the Foreground menu and leave the Background menu on None. Dial the Single Mask Highlight Radius to set how wide a border surrounds this mask. (Count on this approach only for objects whose edges are simple.)

Trace two closed masks—an inner one just inside the object and an outer one just outside it. See that every fuzzy or doubtful patch of the object sits between the two. From the Foreground menu pick the inner mask, and assign the outer one through the Background menu.

See that every mask has its mask mode set to None.

2. Nudge the masks around as you please until they land where the result looks best.
   When there's more than one object to pull out, or a hole to punch in an object, draw extra masks and choose them from the Additional Foreground and Additional Background menus. Say you're keying a person's hair whipping in the wind against blue sky: trace the inner mask inside the head, run the outer mask around the outer edge of the hair, then trace one more mask around the gap in the hair where sky shows through. Choosing that extra mask from the Additional Foreground menu pulls out the gap and clears the background image.

Lay down more open or closed masks to clean up other parts of the image, then choose them from the Cleanup Foreground or Cleanup Background menu. A Cleanup Foreground mask raises opacity along its path; a Cleanup Background mask lowers it. The Brush Radius and Brush Pressure options govern the size and density of each stroke.

The Background (outer) mask can itself be assigned as a Cleanup Background mask to scrub noise out of the image's background regions.

Use Edge Thin to set how much of the matte's border the key reaches. A positive value pushes the edge back from the transparent region and grows the transparent area; a negative value draws the edge toward the transparent region and enlarges the foreground area instead.

Raise the Edge Feather values to soften the keyed area's edges. The higher the Edge Feather, the longer the render.

Set the Edge Threshold, a gentle cutoff that strips away low-opacity pixels apt to stir up unwanted noise in the image background.

Turn on Invert Extraction to swap the foreground and background regions.

Use Blend With Original to set how much the extracted result mixes back in with the original image.
