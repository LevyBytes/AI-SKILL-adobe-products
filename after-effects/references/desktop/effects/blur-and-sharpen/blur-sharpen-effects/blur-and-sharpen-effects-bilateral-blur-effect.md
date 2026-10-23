# Blur and Sharpen effects - Bilateral Blur effect

Edges and fine detail survive when you run the Bilateral Blur effect, because the blurring is applied selectively. Where contrast runs high—pixel values that sit far apart from one another—the softening is applied more gently than across the flatter, low-contrast regions.

What sets Bilateral Blur apart from the Smart Blur effect is that even edges and details still pick up a touch of softening here. That yields a gentler, more dreamlike appearance compared to Smart Blur driven by matching settings.

Output from Bilateral Blur lands very close to what the Surface Blur filter in Adobe Photoshop produces.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Threshold

Wherever an edge or other standout detail sits, the blur radius is scaled down on its own. Threshold is the dial that tells the Bilateral Blur effect which regions hold features worth keeping versus which ones get the full blur treatment. Push Threshold lower and more of the fine detail stays intact; raise it and you end up with a plainer outcome that keeps fewer details.

Radius

Bumping up the Radius value widens the blur, because a wider radius pulls more pixels into the average that decides each pixel's final value.

Colorize

Leave Colorize unchecked and the Bilateral Blur effect runs on a single number per pixel—the luminance, a weighted blend of that pixel's R, G, and B channel values. You get a monochrome image as a result.

Switch Colorize on and the effect processes every color channel on its own, which yields a full-color image.
