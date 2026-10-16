# Choose a frame disposal method

Choose a disposal method in Adobe Photoshop to control how each frame is handled during animation playback.

The disposal method affects whether playback looks clean or leaves unwanted artifacts. It determines whether a frame stays visible or is cleared before the following frame appears. Choose based on whether the animation should accumulate frame content or have each frame replace the prior content.

In the Timeline panel (Window > Timeline), choose one or more frames.

On the selected frames, Right-click (Windows) or Control-click (macOS).

Select one of these disposal methods:

- Automatic: lets Photoshop choose the disposal method for the frame.
- Do Not Dispose: keeps the current frame in place when the next frame appears. Transparent areas in the next frame can reveal content from earlier frames. Use this for cumulative animations where elements are added over time.
- Dispose: clears the current frame before the next frame appears. Playback shows only the current frame, with no earlier-frame content showing through. Use this when every frame must fully replace the one before it.

Use the playback controls at the bottom of the Timeline panel to see how the disposal choices change the animation.
