# Compositing Overview, Combine Multiple Videos Or Stil Images Using Blend Modes, Blend Mode Options, Specify Clip Opacity

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Compositing overview; Combine multiple video clips using Blend modes; Blend mode options; Set clip opacity.

## Compositing overview

### Learn about compositing and how it works in Premiere.

Compositing builds one combined image by stacking multiple video clips or still images. With this method, complex scenes can be assembled from layers, and transparent portions of an upper layer reveal the material underneath.

An image or video may include an alpha channel, which records transparency for different regions.

In an After Effects Composition panel or a Premiere Program Monitor panel, an alpha-channel view uses white for fully opaque pixels, black for fully transparent pixels, and gray values for partial transparency.

Files can store alpha-channel transparency in two forms: straight or premultiplied.

For straight (or unmatted) channels, transparency data is kept only in the alpha channel and not in visible color channels. The visual effect of that transparency appears only after the image is shown in software that supports straight channels.

For premultiplied (or matted) channels, transparency is present in the alpha channel and also in the visible RGB channels, where those color values have been multiplied against a background color. Semitransparent colors, including feathered edge pixels, move toward the background color according to how transparent they are.

Straight channels keep color data more accurately than premultiplied channels. Premultiplied channels work with more applications. In many workflows, the decision to use straight or premultiplied assets has already been made before the files arrive for editing and compositing.

Premiere and After Effects can interpret both straight and premultiplied channels, but if a file has more than one alpha channel, only the first one is recognized.

Alpha channels are supported by these file formats:

- Adobe Photoshop (.psd)
- ElectricImage,
- TGA
- TIFF
- EPS
- PDF
- Adobe Illustrator (.ai)

In addition, AVI and QuickTime files saved at a bit depth of Millions Of Colors+ may include alpha channels, depending on the codecs used to create those files.

Note

Often the most efficient workflow is to import source media that already includes an alpha channel defining the transparent areas. Since the transparency data travels with the file, Premiere keeps and displays the clip's transparency everywhere that source is used as a clip in sequences.

When the source file for a clip has no alpha channel, transparency must be applied manually to each clip instance where it is needed. In a sequence, transparency can be applied by adjusting clip opacity or by applying effects.

Premiere offers several ways to build composites:

- Effects such as Track matte, Garbage matte, or some Channel effects can make selected parts of an image transparent.
- Blending modes can also be used.
- Transparency can be based on a chosen color value, using a color key or chroma key, or on brightness, using a luminance key. This process is called keying.

### How compositing works in Premiere

Upper-track clips hide lower-track clips unless alpha channels mark transparent areas. Premiere creates the composite from the lowest visible track upward across all visible tracks. Any region where every track is empty or transparent displays as black.

Opacity behavior depends on render order relative to visual effects. Premiere renders the Video Effects list first, then geometric effects such as Motion, and then applies alpha-channel changes. Effects within each group are rendered from the top of the list downward. Because Opacity belongs to the Fixed Effects list, it renders after the Video Effects list. To place opacity processing earlier or later than specific effects, or to access more opacity controls, apply the Alpha Adjust video effect.

## Combine multiple video clips using Blend modes

### Blend, or superimpose, an upper-track clip with clips on lower tracks.

In the timeline, place one clip on a track above the track that contains another clip. Premiere blends, or superimposes, the upper-track clip over the clip below it.

Select the clip on the upper track, then choose Window > Effect Controls.

In the Effect Controls panel, select the arrow next to Opacity.

Enter the Opacity value you want.

Select the arrow in the Blend Mode menu.

Choose a blend mode from the blend-mode list.

## Blend mode options

### Learn about the various blending mode options in Premiere.

### Blend mode descriptions

The descriptions below use these terms:

- The source color means the color of the layer where the blend mode is applied.
- The underlying color refers to the composited color of Timeline panel layers beneath the source layer.
- The result color names the composite output produced by the blending operation.

Blend mode

Description

Normal

Normal outputs the source color and disregards the underlying color. It is the default blend mode.

Dissolve

For every pixel, the result color is either the source color or the underlying color. The chance that the result uses the source color is controlled by source opacity. At 100% source opacity, the source color becomes the result color. At 0% source opacity, the underlying color becomes the result color.

Darken

For each channel in the result color, Premiere uses whichever value is lower, and therefore darker, between the source color channel and the matching underlying color channel.

Multiply

For each color channel, the source color channel value is multiplied by the underlying color channel value, then divided by the maximum value for 8-bpc, 16-bpc, or 32-bpc pixels, based on the project's color depth. The result color cannot be brighter than the original. Black in either input produces black in the result; white in either input leaves the other input color as the result. This mode resembles drawing with several marking pens on paper or stacking multiple gels in front of a light. When the blended color is not black or white, every layer or paint stroke using this mode makes the result darker.

Color Burn

The source color is darkened to account for the underlying layer color by raising contrast. Pure white in the original layer leaves the underlying color unchanged.

Linear Burn

The source color is darkened to reflect the underlying color. Pure white leaves the result unchanged.

Darker Color

Each result pixel takes the darker color between the source color value and the matching underlying color value. Darker Color resembles Darken, but it does not process individual color channels separately.

Lighten

For each result color channel, Premiere uses the higher, lighter value between the source color channel and the corresponding underlying color channel.

Screen

Premiere multiplies the complements of the channel values and then uses the complement of that product. The result color cannot be darker than either input color. Screen is comparable to projecting several photographic slides at the same time onto one screen.

Color Dodge

The source color is lightened to reflect the underlying layer color by lowering contrast. If the source color is pure black, the underlying color becomes the result color.

Linear Dodge (Add)

Each result color channel is the sum of the corresponding source color and underlying color channel values. The result color cannot be darker than either input color.

Lighter Color

Each result pixel uses the lighter color between the source color value and the matching underlying color value. Lighter Color resembles Lighten, but it does not work channel by channel.

Overlay

Input channel values are multiplied or screened according to whether the underlying color is lighter than 50% gray. The result keeps the underlying layer's highlights and shadows.

Soft Light

The underlying layer's channel values are darkened or lightened according to the source color. The result resembles lighting the underlying layer with a diffused spotlight. For each channel value, a source color lighter than 50% gray produces a result lighter than the underlying color, like dodging. A source color darker than 50% gray produces a darker result, like burning. Pure black or pure white on a layer makes it much darker or lighter, but not pure black or pure white.

Hard Light

Input color channel values are multiplied or screened according to the original source color. The effect resembles a hard spotlight aimed at the layer. For each channel value, underlying colors above 50% gray make the layer lighter, as with Screen. Underlying colors below 50% gray make the layer darker, as with Multiply. Use this mode to create the look of shadows on a layer.

Vivid Light

Color values are burned or dodged by changing contrast, based on the underlying color. Above 50% gray in the underlying color, reduced contrast lightens the layer. Below 50% gray in the underlying color, increased contrast darkens the layer.

Linear Light

Color values are burned or dodged by changing brightness, based on the underlying color. Above 50% gray in the underlying color, greater brightness lightens the layer. Below 50% gray in the underlying color, reduced brightness darkens the layer.

Pin Light

Colors are replaced according to the underlying color. With underlying values above 50% gray, pixels darker than the underlying color are replaced, while lighter pixels stay the same. With underlying values below 50% gray, pixels lighter than the underlying color are replaced, while darker pixels stay the same.

Hard Mix

The contrast is increased for the part of the underlying layer that appears below a mask on the source layer. The mask size sets the area of contrast, while the inverted source layer sets that area's center.

Difference

For every color channel, Premiere subtracts the darker input value from the lighter one. Painting with white inverts the backdrop color; painting with black leaves it unchanged.

To align two layers that contain the same visual element, place one above the other and set the upper layer's blend mode to Difference. Then move either layer until the pixels for the element being aligned become all black, which means the pixel differences are zero and the elements sit exactly on top of each other.

Exclusion

This produces an output like Difference, but with lower contrast. A white source color gives the complement of the underlying color as the result color. A black source color leaves the underlying color as the result color.

Subtract

The source file is subtracted from the underlying color. A black source color leaves the underlying color as the result color. In 32-bpc projects, result color values can fall below 0.

Divide

The underlying color is divided by the source color. A white source color leaves the underlying color as the result color. In 32-bpc projects, result color values can exceed 1.0.

Hue

The result color keeps the luminosity and saturation of the underlying color, while taking the hue from the source color.

Saturation

The result color keeps the luminosity and hue of the underlying color, while taking the saturation from the source color.

Color

The result color keeps the luminosity of the underlying color, while taking hue and saturation from the source color. This mode preserves gray levels in the underlying color. It is useful for coloring grayscale images and tinting color images.

Luminosity

The result color keeps the hue and saturation of the underlying color, while taking luminosity from the source color. This is the inverse of the Color mode.

| --- | --- |

## Set clip opacity

### Set opacity for a video clip during a video editing workflow.

If needed, expand a track by selecting the triangle beside the track name so the track options are visible.

When needed, open the Show Keyframes button menu and choose Show Opacity Handles. Premiere displays a horizontal opacity-control rubber band across every clip on that track.

Note

When the track has no keyframes, the rubber band is shown as one straight horizontal line across the whole track.

In the Timeline panel, use one of these methods:

- Select the Selection tool, then drag the opacity control rubber band upward or downward.
- Select the Pen tool, then drag the opacity control rubber band upward or downward.

As you drag, a tool tip shows both the opacity value and the current time.

(Optional) To animate the Opacity effect over time, set keyframes first. Select the Pen tool. With the Pen tool active, add each keyframe at the desired time by using Ctrl-click (Windows) or Command-click (macOS) on the rubber band for opacity control. Then drag each keyframe up or down to set its value.

For a fade-in example, add one keyframe at the start of the clip and a second keyframe a few seconds later. Drag the first keyframe to the clip bottom at 0 opacity, and drag the second to 100%.

Tip

- For more information, see adjusting opacity in the Effect Controls tab in the Source panel.
- Either the Selection tool or the Pen tool can move keyframes or Opacity handles. To change animation smoothness, switch the keyframe interpolation from linear to Bezier.
