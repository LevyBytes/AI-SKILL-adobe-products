# Layer image quality and subpixel positioning

How precisely a layer renders rides on its quality setting, which also shapes the accuracy of other layer-related math — motion tracking, for one, and using the layer as a control layer in a compound effect.

When you duplicate or split a layer, it keeps the original's Quality setting.

Three quality options are on offer: Best, Draft, and Wireframe. Pick Best and you get a further choice between bilinear and bicubic sampling, both covered in the section that follows.

Clicking the Quality switch in the Timeline panel cycles selected layers through Best (bilinear sampling), Draft, and Best (bicubic sampling). For the full set of these plus Wireframe, choose Layer > Quality:

Best

Renders and displays a layer with subpixel positioning, anti-aliasing, 3D shading, and full computation of every applied effect. Of all options Best eats the most render time, in previews and final output alike.

Draft

Shows a layer well enough to make it out, but only at rough fidelity. Draft drops anti-aliasing and subpixel positioning from display and render, and leaves some effects imprecisely computed.

Wireframe

Renders a layer as a plain box stripped of its contents. Such wireframes display and render quicker than layers handled at Best or Draft settings.
