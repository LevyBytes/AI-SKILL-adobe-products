# Basics Rendering Exporting (part 3)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Encoding and compression options for movies

Shrinking movies down through compression is what makes them practical to store, send, and play back. An encoder does the compressing; a decoder does the decompressing; codec is the shared name for both. There's no one codec or setting that wins everywhere. The codec that squeezes cartoon animation best, for example, usually falls short on live-action video. In the same way, the codec that suits playback over a pokey network connection usually isn't the one you want at an intermediate stage of a production workflow. For guidance on planning your work around the final output. Learn more about planning your work.

To encode most movie formats out of the Render Queue panel, After Effects relies on a built-in copy of the Adobe Media Encoder. Hand your render and export work to the Render Queue panel and that built-in Adobe Media Encoder fires up on its own. The Adobe Media Encoder surfaces only as the export settings dialog boxes where you set some of the encoding and output options.

Note

That built-in copy of the Adobe Media Encoder, the one steering export settings inside After Effects output modules, falls short of everything the full standalone Adobe Media Encoder application offers. For details on the full, standalone Adobe Media Encoder application, see Adobe Media Encoder Help.

With most output formats you get to set the format-specific encoding and compression options. Often a dialog box surfaces these options the moment you pick a format to export to or click the Format Options button in the Output Module Settings dialog box. Learn more about output modules and output module settings.

## QuickTime (MOV) encoding and compression settings

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

## Post-render actions

Post-render actions let you put simple, after-the-render chores on autopilot.

Pre-rendering is the textbook case: pick Composition > Pre-render and the chosen composition joins the render queue with its Post-Render Action option already set to Import & Replace Usage.

Note

Because you set Post-Render Action options inside the Output Module group, keep in mind that swapping the Output Module template can move the Post-Render Action option along with it. Learn more about output modules and output module settings.

Open up the Output Module group in the Render Queue panel by clicking the arrow to the left of the Output Module heading.

From the Post-Render Action menu, pick one of these:

None

Carries out no post-render action. This is the default.

Import

Once rendering finishes, brings the rendered file into the project as a footage item.

Import & Replace Usage

Brings the rendered file into the project and puts it in place of the item you name. Drag the pick whip onto the item in the Project panel that it should replace to name it.

Reach for Import & Replace Usage to string together a chain of dependent render items. You could, for example, point one render item at a watch folder and several computers to build a still-image sequence, then let the next render item turn that still-image sequence into a single movie file. Learn more about network rendering with watch folders and render engines.

Set Proxy

Makes the rendered file a proxy for the item you name. Drag the pick whip onto the item in the Project panel to name it.

### More like this

- Composition settings
- Layer switches and columns in the Timeline panel
- Placeholders and proxies
- Pre-render a nested composition
- Preview video and audio
