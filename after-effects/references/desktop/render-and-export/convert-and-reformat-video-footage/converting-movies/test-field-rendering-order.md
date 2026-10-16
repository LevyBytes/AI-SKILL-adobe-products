# Test field-rendering order

When rendering a composition that holds separated footage, set the Field Rendering option to match the field order of your video gear. Field-rendering with the wrong settings can leave the finished movie looking too soft, jerky, or distorted. A quick test will tell you which field order your video equipment expects.

Note

Swapping out the hardware or software in your production chain can shift the field order. Changing your device control software or VCR after you've set the field order, for instance, can flip your fields. So whenever you alter your setup, retest the field-rendering order.

Plan on roughly 15 minutes for the test; it consists of rendering two movie versions of the same composition — one with Upper Field First, one with Lower Field First — and then playing them to spot which choice looks right.

Build a simple composition at the right frame size and frame rate. In the Composition Settings dialog box choose an NTSC or PAL preset, and give the composition a duration of at least 3 seconds.

Inside that composition, add a layer that's a small rectangular solid. The layer's color doesn't matter as long as it stands out sharply against the composition background. Adding a title (such as Upper Field First) to the solid can make the movie easier to tell apart.

Drive the solid with some fast motion via keyframes on its Position property. Lay keyframes running from the upper-left of the Composition panel to the lower-right across 1 second.

Save the project, then drag the composition onto the Render Queue panel.

Click the underlined Render Settings name; from the Field Render menu, set Upper Field First.

Select OK, then Render to build the movie.

Returning to the composition, recolor the solid in the Composition panel and tag it with a fresh title — Lower Field First, say.

Render the composition a second time, now setting the Field Render menu to Lower Field First inside the Render Settings dialog box.

9. Lay down both movies onto one and the same device.
   One of the movies will look distorted, with jumpy horizontal motion or shape warping during vertical motion. The other will play back cleanly, edges sharply defined. The field order that produced the smooth movie is the one to reuse on that particular hardware setup whenever you render.

### More like this

- Output modules and output modulesettings
- Render and export with the RenderQueue panel
- Render settings
