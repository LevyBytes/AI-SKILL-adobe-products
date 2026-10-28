# Enhance animation frames

Reduce animation file size in Adobe Photoshop and improve playback by using frame-based settings and Timeline panel export options.

When the animation is complete, tune it for efficient browser download:

- Include only the frame areas that change so the animated GIF becomes smaller.
- Use the same animation settings as a standard GIF. Consistent dithering is applied across frames to avoid flicker, which can take longer to process than a standard GIF.
- Choose the Adaptive, Perceptual, or Selective palette so colors remain consistent from frame to frame.

Open the Timeline panel (Window > Timeline) in Frame Animation mode. If keyframes appear instead of separate frames, choose the menu icon, then choose Convert Frames > Convert to Frame Animation.

Choose the menu icon, then choose Optimize Animation.

Use frame optimization settings to shrink animated GIFs and keep playback consistent.

Frame optimization choices reduce animated GIF size while improving playback consistency.

Review the Optimize Animation dialog box, then choose OK.

- Bounding Box: trims every frame to its changed region only. File size is reduced, but compatibility with some GIF editors may be limited.
- Redundant Pixel Removal: turns unchanged pixels transparent so the file is smaller. To use it, enable Transparency in the Optimized panel (File > Export > Save for Web).

When Redundant Pixel Removal is used, right-click the frame in the Timeline panel and choose Automatic as the disposal method.
