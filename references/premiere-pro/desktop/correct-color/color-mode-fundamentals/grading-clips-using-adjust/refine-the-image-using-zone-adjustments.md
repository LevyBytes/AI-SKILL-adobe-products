# Refine the image using Zone adjustments

Once Global controls have been used to improve the overall image, move into zones for narrower tonal corrections.

Zones split an image into tonal brightness regions by turning the source image's histogram into lightness and shadow percentage ranges. Each zone uses a threshold: highlight zones affect values above that point, and shadow zones affect values below it. The adjustment from each zone is blended smoothly into the rest of the grade to help avoid artifacts.

Select zones when Color & Contrast controls need to address particular tonal areas.

The initial setup provides two overlapping zones, one for shadows and one for highlights, with their overlap blended through the image midtones.

Premiere Pro creates those starting zones by analyzing the first frame of the current clip at the playhead. When you hover over a zone button, the monitor shows an overlay preview of the parts of the picture that belong to that zone, helping you decide what to adjust.

Selecting a zone directs Exposure, Temperature, Balance, and Saturation to the image regions inside that zone. This can lower highlights that clipped after contrast was raised, cool the shadows without shifting the highlights, reduce saturation in overly colorful top highlights, or add saturation to shadows that feel flat and gray.

For most tonal targeting, the default Shadows and Highlights zones are likely enough. For progressively smaller ranges of brighter highlights or darker shadows, more zones can be added, up to three highlight zones and three shadow zones, dividing the image into six practical adjustment regions. You can add automatically analyzed zones, or use highlight-specific and shadow-specific eyedroppers to sample the tonal threshold you want to modify.

The zone-overlap math works much like tone mapping, so zones are well suited to clean exposure pushes and pulls in highlights, either to separate highlight detail or to compress highlights in a way that emphasizes the details you want clearer.

Using several zones for Exposure changes lets you raise and lower exposure quickly, covering the kind of work you might otherwise do with an exposure curve in another application. That behavior is intentional in the zone design. Together, zones and Color & Contrast controls let many targeted corrections merge cleanly into one mathematical function through a simple control set, instead of requiring several separate tools and steps for the same result.

After working in zones, remember to select Global again before changing the global controls.
