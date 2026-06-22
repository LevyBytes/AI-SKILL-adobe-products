# 3D Animation Settings, Real Time Engine, Responsive Design

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: 3D animation settings; What is Draft 3D Preview; Add responsive design to your graphics.

## 3D animation settings

Search Last updated on Apr 2, 2025

### Push your 3D animation compositions further by tapping into a handful of handy After Effects features.

What this article covers:

- Set preferences for 3D layers
- Use the composition panel toolbar for 3D workflows
- Edit keyboard shortcuts
- Use binning indicators for 3D layers

- Create 3D Layer Instance
- Create a camera linked to a light
- Create 3D Environment Background Layer

### Set preferences for 3D layers

Adjust how 3D layers behave by tweaking their settings inside the After Effects Preferences dialog box.

Adjust how 3D layers behave by tweaking their settings inside the After Effects Preferences dialog box.

The 3D preferences are reached through the After Effects > Preferences > 3D menu:

### Camera Navigation

- Turn off the hotkeys assigned to camera and transform gizmo navigation. With that box cleared, those same keys instead become shortcuts for dropping markers, which pushes the camera tools down the priority list. Leave the hotkeys on and the marker commands switch off instead.

  - Clear this to stop the Left/middle/Right mouse clicks from driving camera navigation while the alt/option key is held. Once unchecked, After Effects reroutes those clicks to wireframes.

- Camera Manipulation point: choose one of None, Indicator, or Directional Indicator.

### Camera Navigation - Dolly

- Mouse scroll wheel behavior: pick from Magnify Composition, Dolly camera, or Reverse dolly camera.
- Drag direction: pick either Normal or Reverse.

### Use the composition panel toolbar for 3D workflows

The composition toolbar is active, with the 3D Layer switch enabled and the layer selected.

The composition toolbar is active, with the 3D Layer switch enabled and the layer selected.

Because After Effects surfaces only the controls that fit the design task in front of you, moving between your 3D designs stays smooth. That spares you from repeatedly flipping a long list of settings on and off every time you switch contexts, which saves both time and effort.

To make 3D work quicker and more comfortable, the strip of buttons along the foot of the Composition panel was tidied up and reorganised to surface just the features you reach for most. The 3D controls now appear only when relevant, so they stay out of the way whenever your comp holds no 3D layers. A handful of settings, Pixel Aspect Ratio Correction among them, are no longer reachable from the toolbar the way they were in earlier versions, but the Composition window menu still gives you access to them.

The upshot is a fluid move between 2D and 3D, with the right interface guiding the task at hand and no need to toggle a pile of settings as you go.

Learn more about improved composition toolbar for 3D designing.

### Edit keyboard shortcuts

Edit keyboard shortcuts

Edit keyboard shortcuts

Tailor the keyboard shortcuts so they suit your various camera navigations and transform gizmos, for instance when you'd like to orbit a camera (or several) around an object either from the frame's centre or about the object itself.

For the steps on reassigning them, turn to the Visual Keyboard Shortcut Editor.

### Use binning indicators for 3D layers

Binning indicators for 3D layers point out which 3D layers render together within one shared 3D space, letting them overlap and throw shadows onto one another. That cluster of 3D layers goes by the name Bin.

When a border wraps the 3D icons, it signals that those layers share a 3D bin and therefore render as a unit.

In the Timeline panel you'll see assorted layers, 3D ones included, bundled so they render within the same 3D bin.

In the Timeline panel you'll see assorted layers, 3D ones included, bundled so they render within the same 3D bin.

What these 3D binning indicators give you is a visual chart of the way After Effects merges 2D and 3D layers. Once a comp holds both 2D and 3D layers, where each sits in the layer stack becomes significant:

- Adjacent 3D layers render as a group inside one 3D space first, and only afterward get composited alongside the 2D layers.

### Bin Breakers

A handful of layer types will split bins apart; these are referred to as bin breakers:

- 2D layers, null layers aside
- 3D adjustment layers
- 3D layers carrying layer styles
  - The 3D layer switch is enabled
  - The Collapse Transformation switch is enabled
  - The layer has a layer mask or a track matte

### Non-Bin Breakers

A few layers carry a dotted outline around their 3D icon, Null layers, Camera, and Light among them, when they sit between other 3D layers. That dotted edge means the layer stays out of the bin yet leaves the bin intact. Cameras and lights, by their nature, are already 3D and act on the 3D layers within the comp, so they take no direct part in bins.

A. Doubled 3D cube icon B. 3D axis icon C. 3D cube icon D. No icon

Doubled 3D cube icon

Text layer with per-character 3D enabled.

3D axis icon

The layer is 3D, but does not render pixels.

3D cube icon

The layer is 3D, renders pixels in 3D.

No icon

The layer is 2D and will break the bin in most cases; certain cases (2D nulls, nested comps) can still participate in 3D bins.

Tip

- Switch a 3D layer's visibility off by clicking its eyeball switch. Doing so pulls that layer out of the bin and, depending on what sits above or below it, may either split the bin or simply not take part.
- Slotting 2D layers in among 3D layers spawns several 3D bins. Be aware that layers sitting in separate bins neither intersect nor throw shadows on one another, so build your 3D bins with that behaviour in mind.

### Create 3D Layer Instance

A constraint of 3D layers is that 2D effects can't be applied to them straight away. The usual way around this is the CC Composite effect, which spins up a 2D copy of the 3D layer. With that copy in hand you can run 2D effects on it while the original 3D layer stays untouched, then the two get merged for one clean result.

In current builds of After Effects, choosing Layer > Create > Create 3D Layer Instance drops a solid at the top of your composition. That solid comes pre-loaded with the CC Composite effect pointed at whichever 3D layer you selected. From there you're free to apply 2D effects to the comp's 3D models without losing the original 3D look you were after.

Via the Create 3D Layer Instance command, a solid layer is produced that carries the CC Composite effect pointed at your chosen 3D layer.

Via the Create 3D Layer Instance command, a solid layer is produced that carries the CC Composite effect pointed at your chosen 3D layer. Note

The 3D layer being referenced gets switched off, though you can switch it back on if you want to hold on to that layer's shadow.

### Create a camera linked to a light

Lighting that looks convincing and lends your 3D composition real depth comes down to shaping how light plays against the scene as the camera moves. You pull that off by tying a camera to a light, which lets you 'look through' the camera and lean on the camera tools to place and animate the light just as you would a camera.

In current After Effects, picking Layer > Create > Control Light with Camera builds a camera bound to a light so that the light tracks the camera's motion, holding a steady link between the camera's viewpoint and where the light sits. Link a Spot light to Camera, for instance, and changing the light's Cone Angle feeds through to the bound camera's zoom.

Build a composition that contains 3D layers.

Bring in a Light layer, choosing a Spot or Parallel light.

2. Drop in a Spot or Parallel light to light up and shape the look of your 3D scene.
   Tune that lighting to fit what your 3D scene composition calls for.

Select Layer > Light > Control Light with Camera. A fresh layer appears, its name reflecting the tie to the Light layer you picked.

4. Lean on Control Light with Camera so the light's properties answer to the camera's tweaks.
   After that, changing a light property such as Cone Angle will feed into the bound camera's zoom.

Switch to 2 Views with the Select view layout in the Composition panel so you can steer the light and watch its impact at once.

5. Direct the light in your scene and, at the same time, keep an eye on how those changes play out.

Note

- Disabling the Camera layer in the timeline sends the scene back to its primary view. Control Light with Camera applies only to Spot and Parallel lights.
- Should you prefer the Camera layer stay hidden, switch it off and park it at the foot of your timeline rather than removing it. Delete it and the bound camera throws expression errors.

For more on cameras, lights, and points of interest in After Effects, read on.

### Create 3D Environment Background Layer

A reliable way to lift the realism of lighting in a 3D scene is to pair Environment Lights with effects that complement them. Going this route yields a scene that reads well, with believable reflections, ambient light, and a background that feels natural.

As of the latest update, Layer > Light > Create Environment Light Background Layer lets you visualise the Environment light. It lays down a solid at the foot of the composition, ties CC Environment to the chosen light's Source map, and applies a 5px Fast Box Blur to soften that background.

Here the composition preview is shown twice over, once ahead of and once following the Create 3D Environment Layer command applied to the Environment light layer. Assets used - 3D model and video for Environment light.

Set up a composition holding a 3D layer, and add an Environment light to it.

With the Light layer chosen, go to Layer > Light > Create Environment Light Background Layer.

2. Build a layer carrying the Environment Light's source down at the bottom of the composition.
   A fresh layer joins your timeline bearing CC Environment and Fast Box Blur effects.

3. The layer that gets created arrives with CC Environment and Fast Box Blur effects already in place to round out an appealing scene.

Note

Create Environment Light Background Layer applies only to an Environment light whose source you've set yourself from the timeline, not to one left on its default source.

## What is Draft 3D Preview

Search Last updated on May 5, 2026

### Tap the Draft 3D preview in Adobe After Effects; it leans on the quicker Advanced 3D renderer to show you changes to your 3D scenes as they happen.

Put the Draft 3D Preview to work; it draws on the quicker Advanced 3D Engine renderer so you see edits to your 3D scenes happen in real time. The engine supports animation work by pushing real-time playback faster even in dense scenes. It runs on the GPU. Where the other After Effects renderers differ is that the Advanced 3D Engine targets draft quality alone, never the final output.

Learn more about working in 3D Design Animation Space.

### Turn on Draft 3D Preview

As soon as your comp holds 3D content, a Draft 3D button shows up in the Composition panel toolbar. Click it to switch Draft 3D Preview on. From that point After Effects calls on the Advanced 3D Engine renderer to reflect, in real time, whatever changes or updates you apply to your 3D design. The result is smooth and quick, sparing you the lag a preview can otherwise bring.

Reach for any camera control, dolly, orbit, or pan, and watch your designs respond instantly.

### Use 3D Ground Plane to view the space within your 3D scene

A ground plane is a level plane of projection that lends you perspective and a sense of space inside your 3D scene. It anchors a user's bearings in 3D space and offers steady footing within it.

To put it to use, make sure the Draft 3D button is on, then flip on the 3D Ground Plane button sitting beside it. The tool keeps every element of your scene proportionate and in perspective at a single glance.

### Important points

- The nearer your objects sit to the ground plane, the simpler it becomes to read how they relate to each other in 3D space.
- As you dolly into and out of the scene, the ground plane grid scales up and down to match.
- Sitting at the centre of the comp view, the scene center locator axis hands you a feel for the X, Y, and Z directions.

### Use Extended Viewer to preview areas beyond composition boundaries

With the Extended Viewer you can see 3D content that falls beyond the composition frame boundaries. Return to the standard frame view whenever you want your composition's final view.

In this example you can watch the Extended Viewer surface 3D content that sits past the composition frame boundaries.

In this example you can watch the Extended Viewer surface 3D content that sits past the composition frame boundaries. Note

With Draft 3D turned on, certain effects might not render on precompositions.

### Do more with your 3D animations

Dig into the 3D animation settings and the range of tools on hand to tweak, edit, and elevate your 3D animations and 3D space.

## Add responsive design to your graphics

Search Last updated on Mar 27, 2026

Find out how responsive design - time is set up and used within After Effects.

Authoring adaptive motion graphics is what the Responsive Design - Time feature is for. It brings adaptive time-stretching into play once a composition is nested or sent out as a Motion Graphics template. By adaptive time-stretching we mean that the protected regions take the same span of time to animate even after you time-stretch the unprotected regions.

Intros, outros, and any region of a composition you choose can be protected, and you can store the responsive design templates to reuse across different projects so you skip duplicating and retiming.

Thanks to this feature, the animation latches onto the graphic or sequence and bends to whatever edits you make to them. That lets you build intricate animations and Motion Graphics templates able to retime responsively so they line up with a sequence in a project.

Say you build a lower third, animate a fade in and out, and add responsive design-time. The animation's timing holds steady no matter whether the clip's duration is later stretched or trimmed.

### Understand Responsive Design - Time

Walk through this example to see the problem laid out:

Suppose you build a text animation with a fade-in and fade-out, and you want that animation to run as long as the sequence. It's made of two blocks of text fading in over a black background.

Now drop that same animation onto a different sequence. Each piece of it, the font size along with the start and end times of the fade in and out, has to line up with the sequence. One route is duplicating the animation to stretch it to the sequence's length. That route eats time, though, since you've got to shift the animation keyframes around to get the fade in and out matched to the sequence.

Here's where responsive design - Time earns its keep. Protect the fade in and out regions (the ones holding keyframes) and then extend the animation. That binds the regions to the sequence so the time they need to animate stays put even as you time-stretch the animation to the sequence's length. Once bound, the animation flexes on its own to suit the sequence's length.

### Apply Responsive Design - Time

Three separate methods let you bring Responsive Design – Time into play:

Option 1:

From the Composition menu, pick one of the entries under the Responsive Design – Time sub-menu:

- Create Intro: Anchored to the composition's first frame, this carves out a protected region covering 15% of the total duration.
- Create Outro: Anchored to the composition's last frame, this carves out a protected region covering 15% of the total duration.
- Create Protected Region from Work Area: Builds a protected region whose start and end snap to the work area bar. Blue shading marks the protected regions.

Option 2:

Set the region you intend to protect by dragging the work area bar across it. Then right-click that work area bar and choose Create Protected Region from Work Area.

Option 3:

Use the marker icon over on the right edge of the timeline to drop a composition marker.

Back in the Timeline panel, double-click that marker so the Composition Marker settings dialog appears, give it a duration, and switch on the Protected Region option.

### Add the animation to another composition

With the intros, outros, and protected regions of an animation defined, you're free to reuse them inside other sequences or compositions.

The walkthrough below shows how it plays out:

- Give the animation that carries protected regions a name — say, Comp A.
- Give the composition that will receive the animation a name too — say, Comp B.

Bring Comp B up in the Timeline panel.

Within that timeline, drop Comp A on top of Comp B.

Blue shading appears in the timeline wherever protected regions sit. Grab Comp A's end point and pull it until it lines up with the end point of Comp B.

Previewing the comp now shows the protected stretches animating over the same span as before, with only the unprotected stretches getting scaled.

- Dragging the in and out points of a composition that holds one or more protected regions while it sits nested inside another composition stretches the comp in time rather than trimming it, and the protected regions keep their original length. Take a 5-second clip whose protected regions run 2 seconds: stretch it out to 10 seconds and those protected regions stay at 2 seconds.
- Should you want to trim the layer's in or out point rather than stretch it in time, hold Option (macOS) or Alt (Windows) as you drag the in and out points.
- Protected regions amount to composition markers that have the Protected Region option switched on, distinguished by different handle icons for quick recognition. These markers act just like any other composition marker, with one exception: once you nest a composition carrying protected regions, the markers become locked from editing, and the nested composition's layer bar gets shaded to flag the protected regions instead.
- Change a protected region after the composition is already nested and the marker on the nested composition layer won't refresh on its own. Refresh markers on a nested composition layer by selecting that layer and going to Layer > Markers > Update Markers from Source.
- The Protected Region option is also reachable from scripting or expressions by way of the protectedRegion attribute on composition markers.

Export a composition that contains protected regions as a Motion Graphics template, drop it into a Premiere sequence, and you can resize its length straight away without resorting to time remap.

Pulling the clip's in and out points stretches the composition in time rather than trimming the in or out point, and protected-region durations stay intact.

- A composition that carries audio, once exported as a Motion Graphics template, will not stretch adaptively in time within Premiere.
- Smooth animation of the non-protected stretches during a time-stretch can break down for compositions that rely on the CINEMA 4D renderer alongside 3D layers, or that include a CINEMA 4D layer driving the CINEWARE effect.
