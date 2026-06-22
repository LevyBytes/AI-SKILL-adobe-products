# Create Animation Frames, Use Keyframes

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add video and animation; Create frame-based animations; Add frames to animations; Select animation frames; Edit animation frames; Unify layer properties in animation frames; Copy frames with layer properties; Create frames using tweening; Manage layer visibility in animation frames; Specify a delay time in frame animations; Choose a frame disposal method; Specify looping in frame animations; Delete animations; Create a timeline animation workflow; Overview of animating layer properties.

## Add video and animation

### Create animation frames

Create frame-based animations

Add frames to animations

Select animation frames

Edit animation frames

Unify layer properties in animation frames

Copy frames with layer properties

Create frames using tweening

Manage layer visibility in animation frames

Specify a delay time in frame animations

Choose a frame disposal method

Specify looping in frame animations

Delete animations

### Use keyframes

Create a timeline animation workflow

Overview of animating layer properties

## Create frame-based animations

Build frame-by-frame motion in Adobe Photoshop by setting each frame's layers to different positions, opacity values, or styles.

With frame animation, Photoshop can produce straightforward animated work as a stack of frames, where each frame stores a particular layer setup. It works well for animated GIFs for web content, social media posts, and basic motion graphics.

This animation type plays frames one after another to make motion appear. Timeline animations rely on keyframes and interpolation; frame animation instead lets you set every frame directly. Use it for simple state-by-state changes instead of fluid, highly complex movement.

To display the Timeline and Layers panels, choose Window > Timeline and Window > Layers.

In the center of the Timeline panel, use the down arrow icon and choose Create Frame Animation.

Create a new layer, or turn the background layer into a normal layer.

Place the artwork or other content for the animation. When multiple objects move separately, or when color or content changes across frames, put those items on separate layers.

Use the Duplicate Selected Frames icon at the bottom of the Timeline panel to create another frame.

Click the new frame in the Timeline panel, then update its layers in the Layers panel. For that frame, change visibility, move layers, edit opacity for fades, or adjust layer styles.

Add and revise frames until the animation has the required sequence. The available system memory is the only practical limit on frame count.

For each frame, set its timing by choosing the delay time shown beneath the frame and picking a duration from the dropdown menu.

At the bottom of the Timeline panel, open the Select looping options dropdown menu and choose Once, Forever, or Other.

Use the Play icon in the Timeline panel to preview the animation.

## Add frames to animations

Add frames to a Photoshop timeline when you need a frame-by-frame sequence for animation.

Choose Window > Timeline if the Timeline panel is hidden.

Confirm that the Timeline panel is using Create Frame Animation mode. If Create Video Timeline appears, use the down arrow icon, choose Create Frame Animation in the dropdown, then use the Create Frame Animation button.

Use the Duplicate Selected Frames icon, then change the new frame's layer content in the Layers panel by editing visibility, position, opacity, or other properties.

Tip

For a separate layer on every new frame, open the panel menu (icon will be added here) icon in the Timeline panel and choose Create New Layer for Each New Frame.

Once frames are present, refine the result with frame delay times, looping options, or the Tween feature to insert in-between frames between two existing frames.

## Select animation frames

Choose individual frames in the animation sequence when you need exact edits in Adobe Photoshop.

In Photoshop frame animation work, editing starts by selecting the frame whose content should change. The active frame is shown in the document window so its layers can be edited. Frame selection is used when revising animation content, changing timing, or applying effects to selected portions of the animation.

In the Timeline panel, click the thumbnail for the frame you need.

A shaded highlight marks the selected frame, and the document window shows its content. Edit that frame's layers from the Layers panel.

Tip

Hold Shift to select multiple consecutive frames. Hold Ctrl (Windows) or Command (macOS), then select additional frames to add them.

After frames are selected, use the Layers panel to change layer properties such as visibility, position, opacity, and blending modes. Timeline panel controls also let you adjust timing, delete frames, duplicate frames, or reorder the selected frames.

## Edit animation frames

Modify Photoshop animation frames by changing layer visibility, position, opacity, or blending modes.

Photoshop frame animation builds motion by changing layers step by step. Editing separate frames lets objects move, fade, or transform across the sequence.

For simple web GIF-style work, frame animation is a good fit. A frame captures one layer arrangement; small differences from frame to frame create apparent movement or transformation. It is strongest for discrete changes, not continuous motion.

Choose a frame in the Timeline panel.

In the Layers panel, use the eye icon next to selected layers to change visibility.

Move objects on a layer with the Move tool.

Use opacity controls in the Layers panel to build fade-in or fade-out effects across frames.

Change layer blending modes when the animation needs different visual effects over time.

Use the Layer effects icon in the Layers panel to add effects.

Use the Play icon in the Timeline panel to preview the edits.

For animations with several moving parts, place each part on its own layer. That setup gives more control over each animated component.

## Unify layer properties in animation frames

Use the unify layer buttons in Adobe Photoshop when position, visibility, and style attributes must stay consistent across animation frames.

Unify controls determine whether an attribute change made in one frame is carried to other frames in the animation. In the Layers panel, the unify buttons decide how edits to attributes in the active frame affect the same layer across additional frames.

### Apply layer properties across all frames

Select the frame whose attribute you need to edit in the Timeline panel (Window > Timeline).

Change the selected frame's layer as needed, such as moving an object, changing visibility, or modifying a style.

In the Layers panel, select the Unify Layer Position icon, Unify Layer Visibility icon, or Unify Layer Style icon. The edited attribute is applied across every frame in the active layer so the animation stays consistent.

To carry first-frame edits forward, use the Propagate Frame 1 option.

### Propagate changes from the first frame

Select the first frame of the animation in the Timeline panel.

Edit the layer attributes in that frame.

From the Layers panel, select Propagate Frame 1. Photoshop applies the first-frame edits relative to every later frame in the active layer.

Tip

Another way to propagate frames is to hold Shift, select a consecutive frame group in the layer, and change an attribute in any selected frame.

### Show or hide unify layer buttons

From the Layers panel, select the panel menu icon.

Select Animation Options.

Select Automatic, Always Show, or Always Hide.

## Copy frames with layer properties

Copy Photoshop animation frames while keeping layer visibility, position, opacity, and effects intact.

When frame layer properties need to remain consistent, copying a frame with those properties can save setup time. This workflow is useful in frame-based animation when position, opacity, effects, or other layer attributes should be retained while only small content or placement changes are made between frames. It also helps when styling must remain stable across frames.

In the Timeline panel, select the frame that has the layer properties to reuse.

Select the panel menu icon, then select Copy Frame.

Select the frame after which the copied frame should be inserted.

Select the panel menu icon, select Paste Frame, and choose one of these options:

- Replace Frames: swaps the selected frames for the copied frames. Photoshop does not add new layers. In the destination frames, each existing layer takes the properties from the corresponding copied layer.
- Paste Over Selection: inserts the pasted frame contents into the image as new layers. In the same image, this choice doubles the image's layer count.
- Paste Before Selection: inserts the copied frames ahead of the selected frame. Between images, Photoshop adds new layers to the image; in the new frames, pasted layers alone remain visible while the original layers stay hidden.
- Paste After Selection: inserts the copied frames after the selected frame. Between images, Photoshop adds new layers to the image; in the new frames, pasted layers alone remain visible while the original layers stay hidden.

Use Link Added Layers so the Layers panel links the pasted layers. This works only when frames are pasted into another document. Use it if the pasted layers should move together as one unit.

Select OK.

## Create frames using tweening

Use the Tween command in Adobe Photoshop to create in-between frames from frames that already exist.

For Photoshop frame animation, Tween can reduce manual work by generating frames between two existing frames. It distributes changes to layer properties such as position, opacity, or effects evenly over the added frames, producing smoother movement or transitions without building each frame by hand.

In the Layers panel, select the layer to animate.

In the Timeline panel (Window > Timeline), select the frame or frames to use. A single frame can tween against the previous or next frame, two adjacent frames can receive new frames between them, and multiple selected frames can have the frames between the first and last selection altered.

Select the Tweens animation frames icon in the Timeline panel.

In the Tween panel, set these options:

- Tween With: choose Selection, Previous Frame, Next Frame, First Frame, or Last Frame.
- Frames to Add: enter the number of frames required.
- Layers: choose All Layers or Selected Layers to define which layers change.
- Parameters: choose Position, Opacity, and Effects for the properties Photoshop should distribute evenly through the new frames.

Select OK.

Apply tweening again to other ranges when the animation needs more complex motion.

Tip

For smoother animations, add more tweened frames. Additional frames make the motion appear more gradual and fluid.

## Manage layer visibility in animation frames

Set layer visibility per animation frame in Adobe Photoshop to build dynamic effects and transitions.

Hidden layers are useful when parts of an animation need to appear, disappear, or swap with other content. The method works for any Photoshop frame animation and does not require plugins or extensions.

Open the Timeline panel (Window > Timeline).

Select the frame whose layer visibility you need to control.

From the Timeline panel menu icon, select New Layers Visible In All Frames so future new layers appear in every frame of the animation.

Tip

To hide a layer in a particular frame, select that frame and hide the target layer in the Layers panel.

## Specify a delay time in frame animations

Set how long one frame, or a group of frames, stays visible in Adobe Photoshop.

Timing control is central to the look of Photoshop frame animation. Delay time sets the amount of time a frame remains on screen before playback advances, which can smooth transitions or hold attention on a chosen moment.

Photoshop measures delay times in seconds, and fractional values appear as decimals; for example, 0.25 seconds equals one-quarter of a second. Suitable delay values control pacing and strongly influence how motion is perceived. After you assign a delay to the current frame, Photoshop applies that delay to frames created later.

In the Timeline panel, select one or more frames.

Select the delay time value shown under the selected frames to open the delay time menu.

Choose a preset delay time such as No delay, 0.1 seconds, 0.2, 0.5, 1.0, and more, or choose Other to enter a custom delay time. Photoshop applies the new delay to every selected frame, and the updated value appears beneath each one.

Different sections of the animation can use different delays for acceleration, deceleration, or emphasis. For example, fast motion usually needs shorter delays, while a frame that should draw focus can use a longer delay.

Tip

For smoother animations, keep delay times consistent across most of the animation. Change timing only when you want an acceleration effect or a moment to stand out.

## Choose a frame disposal method

Choose a disposal method in Adobe Photoshop to control how each frame is handled during animation playback.

The disposal method affects whether playback looks clean or leaves unwanted artifacts. It determines whether a frame stays visible or is cleared before the following frame appears. Choose based on whether the animation should accumulate frame content or have each frame replace the prior content.

In the Timeline panel (Window > Timeline), choose one or more frames.

On the selected frames, Right-click (Windows) or Control-click (macOS).

Select one of these disposal methods:

- Automatic: lets Photoshop choose the disposal method for the frame.
- Do Not Dispose: keeps the current frame in place when the next frame appears. Transparent areas in the next frame can reveal content from earlier frames. Use this for cumulative animations where elements are added over time.
- Dispose: clears the current frame before the next frame appears. Playback shows only the current frame, with no earlier-frame content showing through. Use this when every frame must fully replace the one before it.

Use the playback controls at the bottom of the Timeline panel to see how the disposal choices change the animation.

## Specify looping in frame animations

Set loop options in Adobe Photoshop to decide how many times a frame animation plays.

A Photoshop frame animation can play one time, a defined number of times, or endlessly. The chosen loop setting helps the exported or online version play as intended.

Looping applies to the full animation and controls repeat count during viewing. It does not change the way the animation looks while you edit in Photoshop, but it does affect playback after export as an animated GIF or another supported format.

Open the Timeline panel (Window > Timeline).

At the lower-left of the Timeline panel, open the looping options menu. Forever is the default.

Choose Once, 3 Times, Forever, or Other. If you choose Other, type the loop count in the dialog box and select OK.

After setting loop options, preview the animation with the Timeline panel playback controls.

## Delete animations

Use the Timeline panel in Adobe Photoshop to remove frame animations that are no longer needed and keep the project cleaner.

While refining a Photoshop animation, you may need to delete individual frames or the whole animation. Removing unused animation content keeps the workspace orderly and can reduce file size.

### Delete individual animation frames

In the Timeline panel (Window > Timeline), choose the frames to remove.

Use the Deletes selected frames icon.

Select OK.

### Delete an entire animation

Open the Timeline panel (Window > Timeline).

Open the panel menu icon and select Delete Animation.

## Create a timeline animation workflow

Use Photoshop layers, keyframes, and timeline controls to build a timeline animation.

Timeline animation panel overview

Timeline animation panel overview

A. Playhead B. Timeline panel menu C. Add media to track D. Keyframe E. Zoom In F. Zoom slider G. Zoom Out H. Convert to frame animation I. Enable Keyframe animation J. Playback options

Create a new document at dimensions that fit the animation. For standard web animations, set color mode to RGB and resolution to 72 pixels/inch.

Choose Window > Timeline to open the Timeline panel. If frame animation mode is showing, use the lower-left Convert to Video Timeline <insert icon here> icon.

From the drop-down menu, select Create Video Timeline, then select the button to the left of the arrow.

Add content by making a new layer with Layer > New > Layer, or turn the background into a regular layer by double-clicking it in the Layers panel.

For frame rate, open the Timeline panel menu and select Set Timeline Frame Rate.

Tip

Use a suitable rate such as 24 fps, the common standard for video.

Move the current-time indicator, also called the playhead, to the point where the first keyframe should go.

Expand Layer properties by selecting the triangle beside the layer name. Then use the Enable Keyframe animation icon for the property, such as Position, Opacity, or Style.

Move the current-time indicator to another time, then edit the Layer property by moving the layer, changing opacity, or making another adjustment. Photoshop automatically adds a new keyframe.

For video output, choose File > Export > Render Video; for animated GIF, choose File > Export > Save for Web (Legacy).

Note

Preview the animation by selecting the Play button in the Timeline panel.

## Overview of animating layer properties

Animate Photoshop layer properties with keyframes for Position, Opacity, Style, and related changes.

Photoshop uses keyframes to vary layer properties including Position, Opacity, and Style over time. A property may change on its own or alongside other properties, which makes more involved animation sequences possible. For animation with several objects, put each object on its own layer.

To animate a property:

- Create at least two keyframes for the property. With fewer than two keyframes, edits stay unchanged for the layer's full duration.
- Select the Time‑Vary stopwatch <insert icon here> icon beside the property to start animation. Once it is active, Photoshop adds new keyframes automatically when that property is adjusted at another time.

Examples of Animatable Properties:

- Position: Create a keyframe for Position, move the current time indicator, then drag the layer to a new location in the document window.
- Opacity: Create a keyframe for Opacity, move the current time indicator, then change opacity in the Layers panel.
- 3D properties: For 3D layers, animate object positions, camera positions, or both. (See Create 3D animations for details.)

When the stopwatch is inactive:

- A typed value holds for the layer's entire duration.
- Turning off the stopwatch permanently removes every keyframe for that property.

Careful keyframe use gives Photoshop animations precise timing and controlled motion for a finished-looking result.
