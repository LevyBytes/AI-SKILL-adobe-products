# Improve performance by modifying screen output

Restricting how much After Effects paints to the screen lets you speed things up without altering any of the project's data. Refreshing what appears on screen consumes both memory and processing cycles, so surface only what matters at the moment and change visibility as the job evolves.

- Switch off output simulation and display color management whenever you don't require them. How fast and how accurately previews are color-managed is governed by the Viewer Quality preferences.
- Turn on hardware-accelerated previews so the GPU assists in painting previews to the screen. Go to Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS), then check Hardware Accelerate Composition, Layer, and Footage Panels.
- Shut any panels you aren't using. Keeping panels open forces After Effects to spend memory and processor time refreshing them, which can drag down whatever you're doing in a different panel.
- Set up a region of interest. When your attention is on just a small portion of the composition, restrict how much of it gets rendered to the screen during previews.
- In the Timeline panel menu, clear Show Cache Indicators so After Effects stops drawing the green and blue bars in the time ruler that mark cached frames.
- From the Appearance preferences, clear the Show Rendering Progress In Info Panel And Flowchart option so the per-frame render details no longer appear on screen.
- In the Render Queue panel, collapse Current Render Details by clicking the triangle next to Current Render.
- Hitting Caps Lock halts updates in the Footage, Layer, and Composition panels. While updates are frozen a red bar appears, yet panel controls still react as you change them; press Caps Lock once more to bring full updates back.

Note

Caps Lock also suspends preview updates in viewers (turning refresh off) while a final render is running, but in that case no red reminder bar shows up.

- Choosing Draft 3D from the Timeline panel menu shuts off every light and shadow cast on 3D layers, and it also turns off a camera's depth-of-field blur.
- While you're arranging and previewing a ray-traced 3D composition, pick anything other than Off from the Fast Previews button to work in fast draft mode.
- In the Timeline panel menu, switch off Live Update so After Effects no longer refreshes compositions on the fly. More detail is available under Preview modes and Fast Previews preferences.
- Display audio waveforms in the Timeline panel only at the moments you genuinely need them.
- Click the Toggle Pixel Aspect Ratio Correction button along the bottom of a Composition, Layer, or Footage panel to switch pixel aspect ratio correction off. The Viewer Quality preferences govern how fast and how accurately previews handle pixel aspect ratio correction and other scaling.
- When you're previewing video on an external monitor, clear Mirror On Computer Monitor.
- Conceal layer controls such as layer handles, masks, and 3D reference axes.
- Reduce a composition's magnification. Showing the Composition, Layer, and Footage panels above 100% magnification slows how quickly After Effects redraws the screen.
- In the Composition panel, set the composition's Resolution/Down Sample Factor to Auto; that keeps After Effects from needlessly rendering rows or columns of pixels that wouldn't reach the screen at low zoom levels anyway.
