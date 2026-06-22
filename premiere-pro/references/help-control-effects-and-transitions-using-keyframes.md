# Adjust Effect Speed, About Keyframes, Add Keyframes, Select Keyframes ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adjust effect speed; About keyframes; Add keyframes; Select keyframes; Copy and paste keyframes; Set keyframes to snap; Delete keyframes; Keyframes and graphs in panels; Edit keyframes graphs; View keyframes and properties in the Timeline panel; View keyframes in the Effect Controls panel; Move the Current Time Indicator to a keyframe; Control effect changes using keyframe interpolation; Change the keyframe interpolation method.

## Adjust effect speed

### Adjust speed or value-change rate around a keyframe with the Velocity graph.

In the Effect Controls panel, the Velocity graph controls motion or value-change rate immediately before and after a keyframe. These edits can create motion that feels physical; for example, a clip can slow as it approaches a keyframe and speed up after it passes. The values entering and leaving the keyframe can be adjusted together or handled independently.

A. Speed controls B. Incoming direction handles C. Outgoing direction handles

Next, in the Effect Controls panel, select the icon that expands the keyframed effect property you need to edit.

Note

Without added keyframes, the graphs display as flat lines.

In the Value graph, choose the Selection or Pen tool, then click the keyframe marker for the keyframe being edited. The Velocity graph shows that keyframe's direction handles and speed controls.

In the Velocity graph, use the Selection or Pen tool to perform one of these actions:

- For acceleration into and out of the keyframe, drag a direction handle upward. The incoming and outgoing handles travel together.
- For deceleration into and out of the keyframe, drag a direction handle downward. The incoming and outgoing handles travel together.
- To change only the acceleration or deceleration entering the keyframe, Ctrl-click (Windows) or Command-click (macOS) the incoming direction handle, then drag it up or down.
- To change only the acceleration or deceleration leaving the keyframe, Ctrl-click (Windows) or Command-click (macOS) the outgoing direction handle, then drag it up or down.

Note

To link the incoming and outgoing handles again, Ctrl-click (Windows) or Command-click (macOS) them once more.

- To raise or lower how much the keyframe value influences the previous keyframe, drag the incoming direction handle left or right.
- To raise or lower how much the keyframe value influences the next keyframe, drag the outgoing direction handle right or left.

Note

Influence describes how fast the Velocity graph arrives at the value assigned to the keyframe, adding another way to shape the graph.

As you edit the graph, the values to the left of the Velocity graph update. Those numbers show the Velocity graph's upper and lower values. Velocity can also be adjusted by editing the numeric values.

## About keyframes

### Overview keyframe work in Premiere.

Animating a property means changing that property's value across time. In Premiere, you animate effect properties by adding keyframes.

A keyframe identifies the time point where a value is set, such as spatial position, opacity, or audio volume. To make a property change over time, set at least two keyframes: one at the start value and one at the end value. Premiere fills in the gradual values between those keyframes through interpolation.

### Keyframes in the Effect Controls panel

Keyframes are editable from the Effect Controls panel. For the selected clip, that panel shows every applied effect: fixed effects such as Motion and Opacity appear under Video Effects, while Volume is listed under Audio Effects.

Effect Controls panel keyframes for the Scale and Opacity properties.

Scale and Opacity property keyframes shown in the Effect Controls panel.

### Keyframes in the Timeline panel

The Timeline panel also supports keyframe work. After selecting a clip that includes the relevant effect or property, show its keyframes so you can add new ones, reposition existing ones, or remove them as the edit requires.

Timeline panel example showing added keyframes.

Added keyframes displayed inside the Timeline panel.

## Add keyframes

### Add keyframes from the Timeline or Effect Controls panel when video or audio clip properties need animation.

Before you begin:

Use the Effects panel to add effects to audio or video clips by dragging the desired effects onto the clip.

In the Timeline panel, choose the clip that contains the effect you plan to animate.

When the keyframe work will happen in the Timeline panel, first reveal keyframes for the video or audio track: select the Wrench icon in the Timeline panel, then choose Show Video Keyframes.

In the Effect Controls panel, select the icon that expands the effect, then select the Toggle Animation icon to turn keyframing on for it.

Open the properties, add keyframes, and adjust their values for the animation.

Reveal the properties so keyframes can be added and animated values can be changed.

To show the property's Value and Velocity graphs in the Effect Controls panel, select the icon that further expands the effect property.

Tip

When working in the Timeline panel, the effect menu beside the clip or track name can also be used to choose the effect property.

Move the playhead to the time where the new keyframe should be placed.

In the Effect Controls panel, select Add/Remove Keyframe and change the effect property's value, or adjust the controls for that property so Premiere Pro creates a keyframe at the current time automatically.

Repeat steps 5 and 6 whenever you need more keyframes or additional changes to the effect property.

## Select keyframes

### Choose keyframes in ways that suit the current animation edit.

To modify or copy a keyframe, select it first in the Timeline panel. Hollow keyframes are not selected; solid keyframes are selected. Segments between keyframes do not require selection because they can be dragged directly. When endpoint keyframes change, the segment between them updates automatically.

Keyframes can be selected in several ways, depending on the edit you are doing.

Do any of the following:

- To select a single keyframe, use the Selection or Pen tool to choose the Keyframe icon in the Timeline panel.
- For multiple keyframes, Shift-click with the Selection or Pen tool in the Timeline panel to choose adjacent or separated keyframes.

Note

When the Selection or Pen tool is placed over a keyframe, the pointer displays a Keyframe icon.

- To select several keyframes by dragging in the Timeline panel, draw a marquee selection around them with the Pen tool. Shift-drag when adding more keyframes to a selection that already exists.

Tip

The Effect Controls panel also lets you drag with the Selection tool to choose multiple keyframes.

- To choose every keyframe for one property in the Effect Controls panel, select the layer property name. For instance, select Position to include all Position keyframes for that layer.

## Copy and paste keyframes

### Copy keyframes and paste them through the Effect Controls or Timeline panels.

With the Effect Controls panel, copied keyframes can be pasted at another time within the same clip property or into the matching effect property on a different clip. To reuse identical keyframe values quickly at a different time, clip, or track, copy and paste the keyframes in a Timeline panel.

### Copy and paste keyframes in the Effect Controls panel

When keyframes are pasted into another clip, they land in the matching property of the target clip's effect in the Effect Controls panel. The first keyframe in time is placed at the current time, and the remaining keyframes keep their relative spacing. If the destination clip is shorter than the original clip, keyframes beyond the destination clip's Out point are still pasted to the clip, but they are hidden unless Pin To Clip is disabled. Pasted keyframes stay selected, allowing immediate repositioning in the target clip.

In the Effect Controls panel, select the icon that expands the effect so its controls and keyframes are visible.

Choose the keyframes to copy.

Use Edit > Copy.

Then choose one of these actions:

- Move the current-time indicator to the point where the first keyframe should be placed, then select Edit > Paste.
- Select another clip, expand the correct property in the Effect Controls panel, move the current-time indicator to the point where the first keyframe should be placed, and select Edit > Paste.

A keyframe can also be copied by dragging: in the Effect Controls panel timeline, hold Alt (Windows) or Option (macOS) while dragging a keyframe to another position.

### Copy and paste keyframes in a Timeline panel

After keyframes are pasted in the Timeline panel, the earliest one is positioned at the current time and the rest keep their relative order. The pasted keyframes remain selected so their placement can be refined right away.

Keyframes can be pasted only onto a clip or track that is showing the same property as the copied keyframes. Premiere can paste at the Current Time Indicator on just one clip or track at a time. It chooses the paste target in this order:

- When the current-time indicator falls inside a selected clip, the keyframes are pasted into that clip.
- When audio keyframes have been cut or copied, Premiere searches for a corresponding effect property and pastes into the first matching track it finds: first the sequence's audio tracks, then submix tracks, and finally the master track.

If these rules do not identify a video or audio target with the same effects property and the same scope, whether clip or track, Paste is disabled. For example, copied audio track keyframes cannot be pasted when the targeted audio track is displaying clip keyframes.

In the Timeline panel, open the clip or track effect menu and display the property that contains the source keyframes.

Choose the keyframes to copy.

Use Edit > Copy.

In the destination sequence timeline, choose one target:

- Select the clip that should receive the keyframes.
- Target the video or audio track where the copied keyframes should be placed.

Confirm that the destination clip or track is displaying the same property as the keyframes you copied; otherwise, Paste is unavailable. If that property does not appear in the clip or track effect properties menu, apply the same effect used on the original clip or track.

Move the current-time indicator to the time where the keyframes should appear.

Select Edit > Paste.

## Set keyframes to snap

### Turn on keyframe snapping in the Effect Controls panel so dragged keyframes can align with nearby objects.

In the Effect Controls panel, keyframe snapping makes a dragged keyframe align to another object when it is moved near that object's position. You can decide whether snapping is active in the Effect Controls panel and choose which object types can attract keyframes.

Open the panel menu from the button in the upper-right corner of the Effect Controls panel.

Select Snap To. Enable the objects, such as Video Keyframes, that should receive snapped keyframes. Clear any objects that should not use snapping. Return to this submenu whenever those selections need to change.

Keyframe snapping places keyframes quickly and keeps the edit workflow efficient.

With snapping enabled, keyframes align faster and editing can proceed more efficiently.

## Delete keyframes

### Remove a keyframe from an effect property in either the Effect Controls panel or the Timeline panel.

When a keyframe is no longer needed, remove it from its property in either the Effect Controls panel or the Timeline panel. The same property can also have all keyframes cleared at once, or keyframing can be turned off entirely.

Make the graphs for the effect property visible in the Effect Controls panel or Timeline panel.

Select one or more keyframes, then select Edit > Clear. Pressing Delete also removes them.

Tip

Use Edit > Undo if the deletion was accidental.

Choose the keyframes in the effect property graph, then select Edit > Clear.

In the effect property graph, select the keyframes and remove them with Edit > Clear.

For an Effect Controls panel property, remove every keyframe by selecting the Toggle Animation icon beside the effect or property name. When prompted to confirm deletion, select OK.

The chosen keyframes are removed, along with the matching effect properties tied to those keyframes.

Turning off the Toggle Animation button permanently deletes that property's keyframes, and the property takes the value it has at the current time. Reactivating Toggle Animation does not restore those deleted keyframes.

## Keyframes and graphs in panels

### Review the basics of using Keyframes and Graphs in the Effect Controls and Timeline panels.

### Keyframes in the Effect Controls and Timeline panels

The Effect Controls and Timeline panels both change keyframe timing and values, but each panel exposes different controls.

- The Effect Controls panel shows effect properties, keyframes, and interpolation methods together. In the Timeline panel, a clip displays just one effect property at a time.
- The Effect Controls panel provides full control over keyframe values, while the Timeline panel has fewer value-editing controls. For example, values based on x and y coordinates, including Position, cannot be changed in the Timeline panel. You can still make keyframe edits there without switching to the Effect Controls panel.

### Graphs in the Effect Controls and Timeline panels

Graphs in the Timeline and Effect Controls panels show each keyframe's value and the interpolated values between keyframes. A level effect-property graph means the property value stays the same between keyframes. An upward or downward graph indicates the value increases or decreases between those keyframes. To change how fast or how smoothly a property moves from one keyframe to the next, adjust the interpolation method and the Bezier curves.

## Edit keyframes graphs

### Adjust keyframe values and reshape keyframe graphs from the Effect Controls and Timeline panels.

After keyframing is active for an effect property, that property's Value and Velocity graphs can be displayed.

Value graphs report the value of nonspatial keyframes at any time, such as the Scale property of the Motion effect. They also show interpolation between keyframes and allow that interpolation to be adjusted.

Use the Velocity graph in the Effect Controls panel to refine how quickly values change between keyframes and to edit keyframe graphs.

Before you begin:

Prepare a sequence that contains audio and video clips, then apply effects and add keyframes.

In the Timeline panel, choose a clip whose effect includes keyframes that need adjustment.

Use the icon in the Effect Controls panel to open the controls for that effect.

Select the icon next to a property's name to show its Value and Velocity graphs.

When no keyframes exist, the graphs are shown as flat lines.

For a larger graph view, place the Selection or Pen tool over the graph boundary. When the pointer changes to a segment pointer, drag the boundary to make the graph area taller.

With the Selection or Pen tool, drag a keyframe upward or downward on the Value graph to change the value of the effect property.

Your Velocity graph edits alter interpolation between the selected property's keyframes, and the animation preview reflects the result.

Tip

In a Value or Velocity graph, dragging a keyframe left or right does not change its current time. To change time, drag the keyframe marker above the graph with the Selection or Pen tool.

### Edit keyframe graphs from a Timeline panel

Before you begin:

Confirm that the Timeline panel includes at least one clip with one or more keyframed effects.

Select the clip, then select the Effect Controls panel.

Show the clip or track keyframes in the Timeline panel.

Then, in the Effect Controls panel, select the icon beside the control that needs adjustment so its Value and Velocity graphs are exposed.

From the effect menu that appears after the clip or track name, choose the property to adjust. If the effect menu is not visible, increase the Timeline panel magnification.

Move the Selection or Pen tool over a keyframe or keyframe segment. The Selection or Pen tool changes into the keyframe pointer or the keyframe segment pointer. To edit several keyframes, including nonadjacent ones, select those keyframes first.

Do any combination of the following:

- Drag a keyframe or segment upward or downward to change the value. During the drag, a tooltip shows the current value. If there are no keyframes, the drag changes the value for the full clip or track.
- Drag a keyframe left or right to change its time position. During the drag, a tooltip shows the current time. If the moved keyframe lands on another keyframe, the moved keyframe replaces the existing one.

## View keyframes and properties in the Timeline panel

### Show keyframes in the Timeline panel after adding them to animate an effect.

After keyframes have been added for an animated effect, the Timeline panel can display the keyframes and their properties. For video and audio effects, the Timeline panel shows clip-specific keyframes. For audio effects, it can also show keyframes that apply to an entire track. Different clips or tracks may show different properties, but each individual clip or track can show only one property at a time.

Before you begin:

Prepare a sequence that has audio and video clips, then apply effects and add keyframes.

In the Timeline panel, choose the track name or video name.

On a video or audio track, choose the clip and use the Show Keyframes button to display its applied effect.

If View Keyframes is not available, launch Button Editor from the Time Display Settings option by using Customize Video Header and Customize Audio Header.

Choose the effect from the context menu so it appears in the timeline.

Place the pointer directly over a keyframe to see its property in a tooltip.

The selected clip's keyframes and effects are now visible in the Timeline panel. Hover around the keyframes to inspect their location and the properties applied to them.

The tooltip reports the keyframe location and the property and options assigned in the Effect Controls panel. Use that information for exact keyframe placement. You can record a keyframe value or compare the location and value change across two or more keyframes.

## View keyframes in the Effect Controls panel

### View keyframes that have been added to the Effect Controls panel.

Keyframes can be viewed in the Effect Controls panel after they have been added to a sequence clip. When an effect with keyframed properties is collapsed, Summary Keyframe icons are shown. Summary keyframes sit across from the effect heading and represent all individual property keyframes inside that effect. They are for reference only and cannot be manipulated.

Before you begin:

Prepare a sequence, add effects and keyframes to its clips, and make the Effect Controls panel available.

In the Timeline panel, choose the relevant clip.

Use the Show/Hide Timeline View button in the Effect Controls panel to reveal the effects timeline. If that button does not appear, make the Effect Controls panel wider.

To view a specific effect, select the icon next to its name in the Effect Controls panel. The expanded effect shows its keyframes in the Effect Controls timeline.

To see the Value and Velocity graphs for an effect property, select the icon beside the Toggle Animation icon.

After these steps, the Effect Controls panel lists the effects on the selected clip with their keyframes and assigned properties visible. Use the panel to expand properties, edit values, and refine the sequence animation.

## Move the Current Time Indicator to a keyframe

### Move the Current Time Indicator (CTI) to the nearest keyframe in the Timeline panel.

The Effect Controls and Timeline panels both include keyframe navigators. Use their left and right arrows to step the Current Time Indicator between neighboring keyframes. In the Timeline panel, this navigator becomes active only after an effect property has keyframes enabled.

Before you begin:

Prepare a sequence with audio and video clips, then apply effects and add keyframes.

Choose a keyframe navigator arrow in the Timeline or Effects Control panel.

- Left-pointing arrow: sends the CTI to the previous keyframe.
- Right-pointing arrow: advances the CTI to the next keyframe.

In the Effect Controls panel, Shift-drag the current-time indicator when it needs to snap onto one.

Select a keyframe navigator arrow to send the Current Time Indicator to the nearest keyframe.

The keyframe navigator arrow moves the Current Time Indicator to the closest available keyframe.

The arrow you choose determines which nearby keyframe the Current Time Indicator moves to.

## Control effect changes using keyframe interpolation

### Use interpolation to create new values between keyframes for smooth movement in digital video and film.

Interpolation fills in unknown data between known values. In digital video and film, that commonly means creating values between two keyframes. For example, to move a graphic element such as a title fifty pixels left across the screen over 15 frames, set the graphic's position on the first and 15th frames and mark both frames as keyframes. The software then interpolates the in-between frames so the motion appears smooth. Because interpolation creates the frames between keyframes, it is also known as tweening. Between keyframes, interpolation can drive motion, effects, audio levels, image adjustments, transparency, color changes, plus many other visual or auditory elements.

- Temporal Interpolation applies the chosen interpolation method to motion changes. For instance, Temporal Interpolation can determine whether an object moves at a steady pace or accelerates along a motion path. Premiere supports temporal interpolation of keyframes for only a few effects.
- Spatial Interpolation applies the chosen interpolation method to shape changes. For example, Spatial Interpolation can decide whether corners are rounded or angular. Premiere supports spatial interpolation for the keyframes of many effects.

Linear Interpolation and Bezier Interpolation are the two most common interpolation types. Choose either one according to the kind of change you need.

- Linear Interpolation: creates an even-paced change from one keyframe to the next, giving every frame between them an equal portion of the value change. With Linear Interpolation, changes begin and end abruptly and progress at a constant rate between each keyframe pair.
- Bezier Interpolation: lets the change rate speed up or slow down according to the shape of a Bezier curve, such as gradually gaining speed at the first keyframe and easing down into the second.

## Change the keyframe interpolation method

### Control animation changes by choosing an interpolation type or manually editing keyframes and their handles.

Adjusting keyframe interpolation gives you precise control over how quickly animation values change. You can select an interpolation type from a context menu, or you can convert one keyframe type to another by editing the keyframe or its handles directly.

Before you begin:

Ease In and Ease Out commands are also available for quick keyframe interpolation adjustments.

Use either context-menu entry point:

- Right-click a keyframe marker in the Effect Controls panel.
- Right-click a keyframe in a Timeline panel.

Choose an interpolation method from the context menu:

- Linear: creates a consistent change rate between keyframes.
- Bezier: lets you manually change the graph shape and the rate of change on either side of a keyframe. This method can produce very smooth changes.
- Auto Bezier: creates a smooth rate of change through a keyframe. If a keyframe value is changed, Auto Bezier updates the direction handles so the transition across keyframes stays smooth.
- Continuous Bezier: creates a smooth rate of change through a keyframe. Continuous Bezier differs from Auto Bezier by allowing manual direction-handle adjustment. When you reshape the graph on one side of a keyframe, the other side updates too so smoothness is preserved.
- Hold: changes a property value with no gradual transition, producing sudden effect changes. After a keyframe that uses Hold interpolation, the graph appears as a horizontal straight line.
- Ease In: slows value changes as they enter a keyframe.
- Ease Out: gradually speeds up value changes as they leave a keyframe.

Note

Interpolation methods can alter the rate of property change between keyframes, but they do not alter the actual duration between keyframes. Duration comes from the time, or the distance in the time ruler, separating the keyframes.
