# Render and export a single frame of a composition

A single frame can leave a composition either as an Adobe Photoshop (PSD) file with its layers untouched or as a rendered image. That helps when you want to edit files in Adobe Photoshop, build a proxy, or pull an image out of a movie for posters or storyboards.

Every layer from one frame of an After Effects composition survives into the resulting Photoshop file when you use the Photoshop Layers command. Nested compositions as deep as five levels carry over into the PSD file as layer groups. From the After Effects project, the PSD file takes on the color bit depth.

The layered Photoshop file also tucks in a composite (flattened) image built from all the layers. That guarantees the file opens correctly in applications with no Photoshop-layer support; those applications show the composited image and pass over the layers.

Should a frame lean on features Photoshop lacks, a layered Photoshop file saved out of After Effects can differ from how that frame looks inside After Effects. Take a frame with a blending mode Photoshop does not offer: the layer picks up the closest available blending mode, yet the embedded composite image — which only applications without Photoshop-layer support display — is unchanged. A different route is to render the frame via Composition > Save Frame As > File, which writes out the file as a flattened, rendered PSD.

When color management is switched off for a project (its working color space reads None), PSD files that Save Frame As > Photoshop Layers turns out carry the sRGB IEC61966-2.1 ICC color profile. Switch color management on (the project's working color space set to anything but None) and those Save Frame As > Photoshop Layers PSD files instead embed the color profile matching the project's working color space.

Move to whichever frame you plan to export so that it appears in the Composition panel.

For a single rendered frame, choose Composition > Save Frame As > File, tweak whatever you need in the Render Queue panel, and then select Render.

For a single frame exported as a layered Adobe Photoshop file, choose Composition > Save Frame As > Photoshop Layers.

Note

Want different defaults for the Save Frame As > File command? Edit the Frame Default render settings template.

### More like this

- Render and export with the RenderQueue panel
- Automated rendering and network rendering
