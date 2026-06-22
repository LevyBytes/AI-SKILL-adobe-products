# Setting Selecting Deleting Keyframes, Editing Moving Copying Keyframes

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Setting, selecting, and deleting keyframes; Editing, moving, and copying keyframes.

## Setting, selecting, and deleting keyframes

Search Last updated on Apr 2, 2025

### What are keyframes?

Setting parameters for motion, effects, audio, and plenty of other properties — most of them shifting over time — is the job of keyframes. A keyframe pins down the moment at which you assign a value to a layer property, whether that's spatial position, opacity, or audio volume. Whatever falls between keyframes gets interpolated. Building a change over time with keyframes normally calls for two at minimum: one capturing the starting state and another holding the new state at the finish.

While the stopwatch runs for a given property, After Effects sets or updates that property's keyframe at the current time every time you change its value. Leave the stopwatch off for a property and it has no keyframes at all. Change a layer property's value with the stopwatch off and that value holds across the whole layer.

### Set or add keyframes

While the stopwatch runs for a given property, every value change you make prompts After Effects to set or refresh that property's keyframe at the current time.

Switching on the stopwatch and turning on keyframing can be done either way below:

- Click the Stopwatch icon sitting beside the property name to switch it on; After Effects then drops a keyframe for that property value at the current time.
- Choose Animation > Add [x] Keyframe — here [x] stands for whichever property you're animating.

### Add a keyframe without changing a value

Dropping in a keyframe while leaving the value untouched can be done any of these ways:

For the layer property, click its keyframe navigator option.

Choose Animation > Add [x] Keyframe — [x] being the name of whatever property you're animating.

With the Pen tool, pick a stretch of the layer property's graph inside the Graph Editor.

### Auto-keyframe mode

Switching auto-keyframe mode on means picking Enable Auto-keyframe from the Timeline panel menu. With Auto-keyframe mode active, tweaking a property fires up its stopwatch on its own and drops a keyframe at the current time.

While Enable Auto-keyframe mode is active, tweaking a property drops a keyframe at the current time on its own.

While Enable Auto-keyframe mode is active, tweaking a property drops a keyframe at the current time on its own. Note

Properties that aren't interpolated — menus, checkboxes, and the Source Text property among them — won't have their stopwatch fired up automatically by Auto-keyframe mode.

By default Auto-keyframe mode stays off. With it off, changing properties and keyframe-driven animation work the same way they did in earlier After Effects releases.

### Move the current-time indicator (CTI) to a keyframe

Once you've placed the first keyframe for a property, After Effects shows the keyframe navigator. The navigator lets you jump from one keyframe to another or set and clear them. A diamond filling the keyframe navigator box means the current-time indicator sits exactly on a keyframe for that layer property. An unfilled box means the current-time indicator falls somewhere between keyframes.

Note

Pulling the keyframe navigator out of the A/V Features column so it stands as its own column is done by choosing Column > Keys from the Timeline panel menu.

Keyframe navigator in Timeline panel

A. Keyframe at current time B. No keyframe at current time C. No keyframes for layer property

Keyframe navigator in Timeline panel

- To move to the next or previous keyframe, click a keyframe navigator arrow.
- To snap to a keyframe or marker, Shift-drag the current-time indicator.
- To move to the next or previous visible item in the time ruler (keyframe, marker, or work area end), press K or J.
- To move to the earliest In point and the latest Out point when multiple layers are selected, select all the layers and press I and O, respectively.

Learn more about moving the current-time indicator (CTI) to other elements and times.

Tip

Pair Shift with the J and K hotkeys to dart between the keyframes and markers of whichever layers and properties are selected.

### Select keyframes

Within layer bar mode, unselected keyframes show up gray by default while selected ones carry blue outlines. You're also free to tint these keyframes different colors to make them easier to spot and manage.

Within Graph Editor mode, a keyframe icon's look hinges on whether it's selected, unselected, or semi-selected — meaning another keyframe in the same property is selected. A solid yellow icon marks a selected keyframe. An unselected one keeps the color of its matching graph. A hollow yellow box stands for a semi-selected keyframe.

- A single keyframe is picked by clicking its keyframe icon.
- Grabbing several at once means Shift-clicking them or dragging a marquee (selection box) over them. Shift-clicking a keyframe that's already selected drops it; Shift-dragging a marquee over selected keyframes drops them too.
- Grabbing several that share a color group runs through this click-path: the keyframe carrying the identified color > Right-click > Select Keyframe Label Group or Edit > Select Keyframe Label Group.

Note

Flipping the free-transform bounding box on or off in the Graph Editor is done with the Show Transform Box button at the foot of the Graph Editor.

- Grabbing every keyframe on a layer property means an Alt-click (Windows) or Option-click (macOS) on a segment between two keyframes in the Graph Editor, or selecting the layer property name in the layer outline.
- Grabbing every keyframe on a property that shares one value: on a keyframe, right-click (Windows) or Control-click (macOS), and the Select Equal Keyframes command does it.
- Grabbing every keyframe before or after a selected one: on a keyframe, right-click (Windows) or Control-click (macOS), then reach for Select Previous Keyframes or Select Following Keyframes.

Note

Should more than one keyframe be selected, the Select Previous Keyframes and Select Following Keyframes commands turn unavailable.

### Keyframe menu commands

Select a keyframe or several and the keyframe menu opens up at the foot of the Graph Editor.

Note

Opening the keyframe menu is done by right-clicking (Windows) or Control-clicking (macOS) a keyframe.

Value

Shows the selected keyframe's value. With more than one keyframe selected, the Display Value command appears instead, showing the value of whichever keyframe is highlighted in the selection.

Edit Value

Brings up a dialog box for editing the keyframe's value.

Label

Lets you tag the selected keyframe with a color.

Select Keyframe Label Group

Picks out keyframes sharing the same color group on a chosen layer or across all layers.

Select Equal Keyframes

Picks out every keyframe in a property carrying the same value.

Select Previous Keyframes

Picks out every keyframe ahead of the one currently selected.

Select Following Keyframes

Picks out every keyframe after the one currently selected.

Toggle Hold Keyframe

Pins the property value at the current keyframe's value right up until the next keyframe arrives.

Keyframe Interpolation

Brings up the Keyframe Interpolation dialog box.

Rove Across Time

Flips Rove Across Time on or off for spatial properties.

Keyframe Velocity

Brings up the Keyframe Velocity dialog box.

Keyframe Assistant

Unfolds a submenu carrying these choices:

- Convert Audio To Keyframes: Reads amplitude across the composition work area and lays down keyframes that mirror the audio.
- Convert Expression To Keyframes: Reads the current expression and lays down keyframes mirroring the property values it spells out.
- Create Keyframes from Data: Draws on data points for animation keyframes rather than placing keyframes by hand.
- Easy Ease: Tunes the influence going into and out of a keyframe on its own to smooth abrupt shifts.
- Easy Ease In: Tunes the influence going into a keyframe on its own.
- Easy Ease Out: Tunes the influence going out of a keyframe on its own.
- Exponential Scale: Shifts the scale's rate of change from linear over to exponential.
- RPF Camera Import: Pulls in RPF camera data from outside 3D modeling applications.
- Sequence Layers: Brings up the Sequence Layers assistant.
- Time-Reverse Keyframes: Flips the selected keyframes around in time.

### Keyframe Color Labels

Giving keyframes distinct colors inside a composition makes them easier to tell apart along the timeline. With color applied, the important pieces of a composition become simpler to sort, recognize, and find in a hurry. Those same color labels double as a fast way to grab every keyframe that shares one color group.

Pick or change a keyframe's color through Edit > Label > Choose the colors from the list.

Tip

The same thing works from the Timeline panel: right-click the keyframe > Label > Choose the colors from the list.

### Customize keyframe label colors

The colors used for keyframe labels are the same set that layers and other objects in After Effects draw from. Each of those label colors can be adjusted and saved to suit how you like to work.

Right-click the keyframe > Label > Edit Label Colors.

When the Preferences window opens, head to Label Colors and pick a color with the color picker.

2. Within the Label Colors section, adjust the color labels and give them new names.
   Give it a custom name whenever you'd like the label colors to feel more personal.

Finish by clicking OK.

### Select keyframes by color

A keyframe's color can drive what gets selected in the Timeline panel. Starting from just one keyframe, you can rapidly pull in every keyframe belonging to the same color group across one layer or several.

Right-click the keyframe > Select Keyframe Label Group.

On Selected Layers

Grabs keyframes sharing the same label group, limited to the layers you've selected.

On All Layers

Grabs keyframes sharing the same label group across every layer in the composition.

Visible Keyframes on Selected Layers

Limits the selection to keyframes that are visible and share the same label group, across every layer in the composition.

Visible Keyframes on All Layers

Limits the selection to keyframes that are visible and share the same label group, across every layer in the composition.

Note

For a quick way to grab only the visible keyframes that share a label group across all layers in the composition, there's also Edit > Label > Select Label Group.

### Delete or disable keyframes

Note

Should you remove keyframes by mistake, recover them with Edit > Undo.

- However many keyframes you want gone, highlight them and hit the Delete key.
- For removing a single keyframe inside the Graph Editor, use the Selection tool and Ctrl-click (Windows) or Command-click (macOS) the keyframe.
  Switching off the stopwatch button wipes out that property's keyframes for good, leaving the property fixed at whatever value it held at the current time. Pressing the stopwatch button afterward will not bring those keyframes back. Note that clearing every keyframe leaves any expressions untouched — they are neither removed nor turned off.

- Want keyframes for a property paused rather than gone? Attach an expression that pins the property to a fixed value. As an example, dropping this short expression onto the Opacity property locks it at 100%: 100.

### More like this

- About animation, keyframes, and expressions
- The Graph Editor
- Move the current-time indicator (CTI)
- Keyframes and the Graph Editor (keyboard shortcuts)

## Editing, moving, and copying keyframes

Search Last updated on Aug 21, 2024

### View or edit a keyframe value

Confirm the Current Time Indicator sits on an existing keyframe before you edit one. Adjust a property's value while the Current Time Indicator is parked somewhere other than a keyframe, and After Effects will create a fresh keyframe instead. That said, double-clicking a keyframe to edit it makes the current-time indicator's position irrelevant, as does altering a keyframe's interpolation method.

- Slide the Current Time Indicator onto the keyframe's time. The property's value shows up beside the property name and is editable there.
- Right-click (Windows) or Control-click (macOS) the keyframe. At the top of the resulting context menu you'll see the keyframe value; pick Edit Value to change it if you want.
- Hover the pointer over a keyframe in layer bar view and its time and value appear.
- Hover over a keyframe in Graph Editor mode to read its layer name, property name, time, and value; hovering over a segment between keyframes shows the matching details at any point.
- Click a keyframe in layer bar mode and the Info panel reports that keyframe's time and interpolation method.
- Click a keyframe or an inter-keyframe segment in Graph Editor mode and the Info panel reports a property's minimum and maximum values plus the speed at the current time.
- Alt-click (Windows) or Option-click (macOS) a pair of keyframes in layer bar mode to read the gap between them in the Info panel.

### Copy and paste keyframes

Keyframe selections that reach across several layers can be copied and pasted without spawning extra layers.

Keyframes can be lifted from one layer alone or from many layers together. Pasting them into a different layer drops them onto the matching property of that destination layer. The earliest of the group lands at the current time, with the rest trailing behind in their original order. Because the keyframes stay selected once pasted, moving them onto the destination layer right away is easy.

Copying between layers works for one shared property — Position, say — or between two different properties that handle the same kind of data, like Position and Anchor Point.

Note

Pasting between matching properties lets you go from several properties to several properties in a single pass. Pasting between differing properties, on the other hand, is limited to one property at a time on each side.

Within the Timeline panel, reveal the layer property that holds the keyframes you intend to copy.

2. Select one or more keyframes.
   Select Edit > Copy.

Over in the Timeline panel that holds the destination layer, slide the Current Time Indicator to the moment where the keyframes should land.

When pasting back to the same property the keyframes came from, select the destination layer.

When pasting to a different property, select that destination property.

Select Edit > Paste.

### Reverse paste selected keyframes

Existing keyframes spanning several layers can also be copied and then reverse pasted so their timing order flips. Recycling the same animation keyframes in the opposite direction lets you build repeating-pattern animations — loops, bounces, rewinds — without redoing them from the ground up.

Reach for reverse paste to spin up mirror-image animation variants from a set of keyframes you already have.

Reach for reverse paste to spin up mirror-image animation variants from a set of keyframes you already have.

Inside the Timeline panel, highlight the keyframes you mean to copy and paste backward.

Drag the current time indicator (CTI) to the spot on the timeline where the copied keyframes should go.

Reverse paste the copied keyframes with this keyboard shortcut:

- macOS: Command + Shift + v
- Windows: Ctrl + Shift + v

### Edit keyframe values using a spreadsheet or text editor

Keyframe data can be copied out as tab-delimited text and pasted into a spreadsheet application — Microsoft Excel, for instance — or other text-editing software. A spreadsheet then becomes a place to run numerical analysis on that keyframe data or to build and edit keyframe values.

Most properties travel this way, among them the Transform properties such as Position and Opacity, the Material Options properties, and motion trackers.

Note

The motion tracking tools let you track an object's movement within a layer, after which the tracker data can be pasted into a spreadsheet for numerical analysis.

Certain helper utilities — Imagineer Systems mocha for After Effects (mocha-AE) is one — push keyframe data onto the clipboard, ready for you to paste into the right layer back in After Effects.

As tab-delimited text, keyframes can be copied from just one layer at a time.

Inside the Timeline panel, choose keyframes for one or more properties that sit on the same layer. Selecting the property name picks up all of that property's keyframes.

Slide the Current Time Indicator onto the first of the selected keyframes.

Drop a composition marker at the first selected keyframe's time so the last step has a clear paste target for the edited keyframes. Explore more about layer markers and composition markers.

Keep the keyframes selected and choose Edit > Copy.

Paste the keyframe data into the spreadsheet. Taking the first column as A and the first row as 1, cell A1 is where it goes. Column B holds the frame numbers. Columns C, D, and E carry the property values, the count depending on how many dimensions the property has. A Position in a 3D layer fills all three columns, whereas Opacity occupies only column C.

5. Adjust the keyframes' numbers, touching nothing in the sheet apart from the frame numbers and property values.
   Highlight the cells holding your data. A1 should be the top-left cell of that selection, and its bottom row should be the one carrying the text End of Keyframe Data.

6. Pull the data back out of the spreadsheet by copying it.
   Back in After Effects, slide the Current Time Indicator to where the new keyframe data should be pasted — typically the time of that first keyframe you selected and copied when starting this procedure.

Choose Edit > Paste.

### Move keyframes in time

Shifting keyframes along the timeline is possible one at a time or in bulk.

### Move keyframes to another time

Once several keyframes are selected, you can copy them, delete them, or shift them all together in one move while their spacing relative to one another stays fixed.

1. Select one or more keyframes.
   Drag any one of the chosen keyframe icons to wherever you want it in time. With multiple keyframes selected, every one of them keeps its original distance from the keyframe you're dragging.

Note

Selected keyframes can also be nudged a single frame earlier or later by holding Alt (Windows) or Option (macOS) together with the left arrow or right arrow key.

### Move a keyframe to a specific time

Slide the Current Time Indicator to the time you're after.

Working in layer bar mode, start dragging a keyframe icon toward the Current Time Indicator and then hold Shift.

Working in Graph Editor mode, drag a keyframe over to the Current Time Indicator.

The keyframe locks onto the Current Time Indicator as you drag across it.

### Expand or contract a group of keyframes in layer bar mode

1. Select at least three keyframes.
   While holding Alt (Windows) or Option (macOS), drag either the first or the last of the selected keyframes to the time you want.

### Move a layer duration bar but not its keyframes

Set down a composition marker at the moment the first keyframe shows up.

Within the layer outline, pick the name of one or more layer properties whose keyframes should stay put in time.

Select Edit > Cut.

Reposition or stretch the layer duration bar to land on its new In and Out points.

Bring the Current Time Indicator back to the composition marker — the time the first keyframe held before you cut the keyframes.

Select Edit > Paste.

### Change multiple keyframe values at once

Several keyframes across several layers can have their values changed in a single operation, provided every keyframe you've selected belongs to the same layer property. Exactly how the chosen values shift depends on the technique you pick to change them.

Edit a value by typing a number and every selected keyframe takes on that exact value — an absolute change, in other words. Say you pick several Position keyframes on a motion path and type a Position value into one of them; all of the selected keyframes jump to that identical position value.

Edit a value by dragging the underlined number instead and every selected keyframe shifts by the same delta — a relative change. For instance, select several Position keyframes on a motion path, drag the underlined value on one, and each selected keyframe value moves by an equal amount.

Edit a value graphically in the Composition or Layer panel and every selected keyframe shifts by the gap between the old and new values rather than adopting the new values outright — again a relative change. As an example, choose several Position keyframes on a motion path and nudge one of them 10 pixels to the left, and all of them slide 10 pixels left of where they started.

There's also the option to change several layers' values together in layer bar mode by parenting them.

### Move or change keyframes in the Graph Editor

Within the Graph Editor, a value graph plots the value at each keyframe along with the interpolated values that fall between them. A flat stretch of a layer property's value graph means the property holds steady between keyframes. Where that graph climbs or dips, the layer property's value is rising or falling between keyframes.

Turn to the value graph in the Graph Editor when you want to see keyframe values alongside the interpolated values that sit between keyframes.

A. Keyframe. B. A level value graph indicates unchanging values. C. A rising graph indicates increasing values. D. A falling graph indicates decreasing values.

Turn to the value graph in the Graph Editor when you want to see keyframe values alongside the interpolated values that sit between keyframes.

To reset a layer property's values, drag its points — the keyframes — up or down on the value graph. Boosting a Rotation keyframe, for example, is a matter of dragging its marker higher on the Rotation property's value graph.

Note

Because the Anchor Point, Mask Path, effect control points, 3D orientation, and Position properties carry spatial values, they default to speed graphs rather than value graphs.

### Modify a single keyframe in the Graph Editor

Within the Timeline panel, reveal a temporal property on a layer.

Should you need to, click the Graph Editor icon or hit Shift+F3 to switch into Graph Editor mode.

3. Where needed, drop a keyframe at whatever moment the change should kick in.
4. Set the layer property to a fresh value by dragging that keyframe upward or downward.

### Modify multiple keyframes in the Graph Editor

The Graph Editor lets you edit and reposition many keyframes at once. Select several keyframes with the Show Transform Box button active and a free-transform bounding box wraps around them, with an anchor point sitting at its center to mark where the transformation pivots. Dragging that bounding box or its handles shifts the selected keyframes in time or value, and the anchor point itself can be repositioned too.

Manipulating a free-transform bounding box on a value graph moves the chosen keyframes in both time and value, while doing the same on a speed graph moves them in time alone.

Pick more than one keyframe inside the Graph Editor and a free-transform bounding box appears around them.

Pick more than one keyframe inside the Graph Editor and a free-transform bounding box appears around them.

Move into Graph Editor view and bring up whichever keyframes need adjusting.

With the Selection tool active, take one of these actions:

For picking keyframes, either Shift-click them or drag a marquee that encloses them.

To grab every keyframe belonging to one property, Alt-click (Windows) or Option-click (macOS) on a segment that lies between two of them.

To move keyframes in time or value, place the pointer inside the bounding box and drag. Shift-drag to constrain the move horizontally or vertically.

To move keyframes in time or value by scaling the bounding box, place the pointer on a bounding box handle. When the pointer changes to a straight, double-sided arrow , drag the bounding box to a new size. Shift-drag to constrain the ratio of width to height. Ctrl-drag (Windows) or Command-drag (macOS) to scale around the anchor point of the bounding box. When dragging a corner handle, Alt-drag (Windows) or Option-drag (macOS) to move only that handle.

Scale by negative amounts to reverse the keyframes in time.

- To taper keyframe values vertically, Ctrl+Alt-drag (Windows) or Command+Option-drag (macOS). Tapering keyframe values allows you to reduce or expand the amplitude of a repeated animation.
- To move one side of the bounding box up or down, Ctrl+Alt+Shift-drag (Windows) or Command+Option+Shift-drag (macOS).
- To move the anchor point of the bounding box, place the Selection tool over the anchor point until the tool changes to the Move Anchor Point tool , and then drag.

### More like this

- Keyboard shortcuts in After Effects
- Setting, selecting, and deleting keyframes
- Animation basics
- Layer properties

## See also

- [Keyframe Interpolation](help-keyframe-interpolation.md)
