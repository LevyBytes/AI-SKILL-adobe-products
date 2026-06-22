# Workflows, Workspaces Panels Viewers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: After Effects Workflows; Workspaces, panels, and viewers.

## After Effects Workflows

Search Last updated on Jan 19, 2026

### Learn to follow core After Effects workflows from importing and organizing footage to previewing, animating, and exporting final projects.

### Overview of general workflow in After Effects

Import and organize footage

Create, arrange, and composite layers

Modify and animate layer properties

Add effects and modify properties

Preview

Render and export

The same fundamental workflow underlies almost everything in Adobe After Effects, whether you're animating a plain title, building intricate motion graphics, or compositing photoreal visual effects, even though some steps get repeated or skipped. You might, for instance, loop through tweaking layer properties, animating, and previewing over and over until the result is right. Likewise, importing footage is a step you can bypass when you mean to build every graphical element inside After Effects itself.

### 1. Import and organize footage

With a project in place, bring your footage into it through the Project panel. Many common media formats After Effects reads automatically, yet you remain free to dictate how it interprets attributes like frame rate and pixel aspect ratio. Each item is viewable in a Footage panel, where you can trim its start and end times to suit your composition.

### 2. Create, arrange, and composite layers in a composition

Build one or more compositions. Behind any one or more layers in a composition can stand any footage item as the source. Spatially, you lay the layers out in the Composition panel; in time, you organize them through the Timeline panel. Stacking can happen across two dimensions or across three. Compositing — merging — images drawn from multiple layers is handled with masks, blending modes, and keying tools. Shape layers, text layers, and paint tools are even on hand for crafting your visual elements from scratch.

Core ideas behind composition work are laid out on the pages below:

- Composition basics
- Creating layers
- Transparency, opacity, and compositing
- Overview of shape layers, paths, and vector graphics
- Creating and editing text layers

### 3. Modify and animate layer properties

Any layer property — size, position, opacity, and the rest — is open to modification. Through keyframes and expressions, you can drive any mix of those layer properties to shift over time. Motion tracking serves either to steady motion or to make one layer trail the movement captured in another.

The pages below walk through the core ideas behind animation:

- Animation basics
- Expression basics
- Tracking and stabilizing motion

### 4. Add effects and modify effect properties

Layer a layer with any blend of effects to reshape its look, feel, or sound, and even conjure visual elements out of nothing. Hundreds of effects, animation presets, and layer styles are yours to apply. You can also build and store animation presets of your own. Effect properties lend themselves to animation too, since they are merely layer properties living inside an effect property group.

### 5. Preview

Even on demanding projects, checking your composition stays quick and practical whether you watch it on the computer display or pipe it out to a separate video monitor. The pace and fidelity of a preview are yours to adjust: dial in a resolution and frame rate, or restrict which region and how much of the timeline gets played back. Color management tools also let you judge in advance how the finished movie reads on a different output device.

Key ideas behind previewing compositions are covered across the following pages:

- Previewing
- Color management

### 6. Render and export

Drop one or more compositions into the render queue, render them with whatever quality settings you select, and produce movies in the file formats you call for. Either File > Export or Composition > Add to Render Queue gets you there.

Tip

For a grounding in how rendering and exporting work, see Adobe Media Encoder.

### Basic workflow to create a simple movie

For this walkthrough, the assumption is that After Effects is already open and its blank default project remains untouched. Rather than walking through importing footage, the example has you build synthetic visual elements from scratch. Once a finished movie is rendered, it can be brought back into After Effects so you can watch it and treat it like any other footage item.

Working styles differ: some users reach for the mouse and menus when driving After Effects, while others lean on keyboard shortcuts for routine actions. Several steps below list two equivalent commands that reach the same outcome—the menu version highlights how easy commands are to discover, and the shortcut version highlights how fast and handy they are. In practice you will probably blend shortcuts and menu commands as you work.

Select Composition > New Composition to create a composition.

You can also use Ctrl+N (Windows) or Command+N (macOS) keyboard shortcuts to create a composition.

In the Composition Settings dialog box, set the Duration value to 5.00 (5 seconds), pick whatever preset you want from the Preset menu, and select OK.

Choose Layer > New > Text to create a text layer.

You can also use Ctrl+Alt+Shift+T (Windows) or Command+Option+Shift+T (macOS) to create a text layer.

Type your name. To leave text-editing mode, press Enter on the numeric keypad, or press Ctrl+Enter (Windows) or Command+Return (macOS) on the main keyboard.

Within the Timeline panel, clicking the triangle beside the layer name lays down a starting keyframe on the Position property.

Click the triangle sitting beside the Transform group name, then the stopwatch button beside the Position property name.

You can also use Alt+Shift+P (Windows) or Option+Shift+P (macOS) to open the Position property for a layer.

Select the Selection Tool button in the Tools panel.

You can also use V to activate the Selection tool.

With the Selection tool active, drag your text into the lower-left corner of the frame within the Composition panel.

Send the current-time indicator to the composition's final frame by dragging it all the way to the right end of the timeline in the Timeline panel.

Pressing End is the other way to jump the current-time indicator out to the composition's final frame.

With the Selection tool, drag your text into the upper-right corner of the frame within the Composition panel.

At this point a fresh keyframe lands on the Position property. Between keyframe values, the motion is interpolated.

In the Preview panel, select the Play button to play back your animation; select Play once more to halt it.

Tapping the Spacebar likewise toggles the preview on and off.

Choose Effect > Stylize > Glow to apply the Glow effect.

You can also type glow in the search field of the Effects & Presets panel to find the Glow effect. Double-click the effect name.

Select File > Export > Add to Render Queue to add the composition to the Render Queue.

Within the Render Queue panel, select the underlined text beside Output To. Give the output movie file a name and a location and then select Save; somewhere easy to find, such as your desktop, works well.

Select the Render button to work through every item in the render queue. Progress for the operation shows in the Render Queue panel, and a sound plays once rendering finishes.

That completes creating, rendering, and exporting a movie.

The movie you built can be imported back into After Effects for preview, or you can locate the file and watch it in a movie player such as QuickTime Player or Windows Media Player.

### Using gestures in touch-enabled devices

Multi-touch gestures such as zoom and pan are supported across these panels:

- Composition
- Layer
- Footage
- Timeline

These gestures work on any touch-enabled device—a Microsoft Surface or a Wacom Cintiq Touch, for instance—or on a multi-touch trackpad.

With two fingers, draw them together to zoom out or spread them apart to zoom in.

Set two fingers down and glide them as a pair; the current view of a panel then pans in whichever of the four directions you move.

### More like this

- Activating tools (keyboard shortcuts)
- Import footage items

## Workspaces, panels, and viewers

Search Last updated on Mar 27, 2026

Tailor the After Effects interface and organize panels to build and store personalized workspaces that streamline how you work.

### Workspaces and panels

A uniform, adjustable interface runs across Adobe's video and audio applications. The panel set differs from one application to the next, yet the way you move and group panels stays identical everywhere.

A program's primary window is the application window. Inside it, panels sit in an arrangement known as a workspace.

Every application ships with several ready-made workspaces, each tuned to lay panels out for a particular kind of task. Beyond those, you can build and refine workspaces of your own, positioning panels in whatever layout fits how you tackle specific tasks.

Panels can be dragged elsewhere, pulled into or out of a group, set side by side, or undocked so one floats in a fresh window over the application window. The remaining panels resize on their own to fit the window as you rearrange.

Example workspace

A. Application window B. Grouped panels C. Individual panel

Example workspace

Adding more monitors expands the screen real estate available to you. Across multiple monitors, the application window sits on the primary monitor while floating windows go on the secondary one. The workspace retains these monitor configurations.

Workspaces live as XML files inside the preferences folder. Allowing for a few caveats about monitor size and layout, you can carry these workspaces over to a different computer and use them there.

Windows: [drive]:\Users\[user_name]\AppData\Roaming\Adobe\After Effects\[version]\ModifiedWorkspaces

macOS: [drive]/Users/[user_name]/Library/Preferences/Adobe/After Effects/[version]/ModifiedWorkspaces

### Stacked panel layout

Shape your workspace by clustering panels however suits you. Within a single panel group, the panels can sit either stacked or in tabs.

A single mouse-click on the panel header is enough to expand or collapse stacked panels.

### Navigate and use the Home screen

Getting up and running fast in After Effects is what the Home screen is for. Down the left side, these options are available:

- Home: opens the Home screen when you pick this tab.
- New Project: spins up a fresh project inside After Effects.
- Open Project: loads a project you already have.
- New Team Project: starts a Team Project.
- Open Team Project: loads a Team Project you already have.

For first-time users, an option to start a project also sits in the middle of the screen. The home screen's content shifts as you go on building projects in After Effects. Seasoned users see a link to explore What's New in After Effects alongside other documentation.

The Home icon on the left edge of the UI also lets you switch back and forth between the Home screen and your project.

### Learn panel

Aimed at people new to After Effects, the tutorials in the Learn panel get you up to speed fast on its various panels, the timeline, and effects. Open the learn panel from the Window menu > Extensions. These lessons walk you through building projects right inside the application.

Task-focused videos make the panel fully interactive. Pick a video and it lays out the steps for that task. As you carry out those steps in the UI, the panel follows what you do and guides you along. Finishing a task flips its status to completed.

Learn panel and Learn workspace

Learn panel and Learn workspace

### Learn workspace

A pared-down interface is what the Learn workspace gives you, bundling these panels for building an After Effects project:

- Learn panel
- Project panel
- Composition panel
- Timeline panel

Reach the workspace through Help > Learn After Effects. With the Learn panel docked off to one side, the workspace keeps the instructions in view while leaving the rest of the workspace easy to reach.

### Customizing workspaces

One click in the new workspace bar takes you to any custom or default workspace. That bar runs along the right edge of the Tools panel. Drag the vertical divider sitting between the tool and workspace bars to set the bar's width.

Store your After Effects workspace's present arrangement and settings.

Keep the workspace's current arrangement and settings on hand.

Any workspaces with no room left on the bar move into the chevron menu on the workspace bar.

Reach the workspace choices that the bar has no room to display.

Get at the overflow workspace choices the bar cannot show. Note

The Edit Workspaces dialog box opens when you choose Window > Workspace > Edit Workspaces, or click the chevron menu sitting on the workspace bar. It lets you pick a workspace and rearrange the order of workspaces.

Reshape how your panels and tools are laid out so they fit how you work.

Adjust the panel-and-tool arrangement to match the way you work.

### Choose a workspace

Head to Window > Workspace, then pick whichever workspace you want.

In the Tools panel, the Workspace menu also lets you choose a workspace.

Should the workspace carry an assigned keyboard shortcut, press Shift+F10, Shift+F11, or Shift+F12.

Note

Want a keyboard shortcut tied to the current workspace? Use Window > Assign Shortcut To [Workspace Name] Workspace.

### Save, reset, or delete workspaces

### Save a custom workspace

While you adjust a workspace, the application keeps tabs on your edits and holds onto the latest layout. For a more lasting record of a given layout, save it as a custom workspace. Once saved, custom workspaces show up in the Workspace menu, ready for you to revisit and reset.

Set the frames and panels up the way you like, then choose Window > Workspace > New Workspace. Enter a name for the workspace and select OK.

Note

(After Effects, Premiere) Open a project that was saved with a custom workspace on a different machine and the application hunts for a workspace whose name matches. Failing that match—or if the monitor configuration is off—it falls back to the current local workspace.

### Reset a workspace

Bring the current workspace back to the original, saved panel layout by resetting it.

Choose Window > Workspace > Reset workspace name.

### Delete a workspace

Select Window > Workspace > Delete Workspace.

Choose the workspace you want to delete, and then select OK.

You cannot delete the currently active workspace.

### Dock, group, or float panels

Panels can be docked to one another, shifted into or out of groups, and undocked to float above the application window. Drag a panel and the drop zones—the spots you can drop it onto—light up. Whichever drop zone you land on decides where the panel goes and whether it docks alongside other panels or groups with them.

### Docking zones

Along the edges of any panel, group, or window you will find docking zones. Dock a panel and it lands next to the existing group, with every group resizing to make room for the newcomer.

Dragging panel (A) onto docking zone (B) to dock it (C)

Dragging panel (A) onto docking zone (B) to dock it (C)

### Grouping zones

Grouping zones sit at the center of a panel or group and along the tab area of panels. Drop a panel onto a grouping zone and it stacks together with the other panels.

Dragging panel (A) onto grouping zone (B) to group it with existing panels (C)

Dragging panel (A) onto grouping zone (B) to group it with existing panels (C)

### Dock or group panels

When the panel you mean to dock or group is hidden, pick it from the Window menu.

Do one of the following:

For a single panel, drag the gripper area at the upper‑left corner of that panel's tab onto the drop zone you want.

For a whole group, drag the group gripper at the upper‑right corner onto the drop zone you want.

Depending on the drop zone type, the application then docks or groups the panel.

### Undock a panel in a floating window

A panel undocked into a floating window lets you add more panels and adjust it much as you would the application window. Floating windows are handy for putting a second monitor to use, or for recreating the kind of workspaces older Adobe applications offered.

Choose the panel you want to undock (pick it from the Window menu if it's hidden), then do one of the following:

From the panel menu, choose Undock Panel or Undock Frame. Undock Frame undocks the panel group.

While holding Ctrl (Windows) or Command (macOS), drag the panel or group away from where it sits. Let go of the mouse button and the panel or group shows up in a new floating window.

Drag the panel or group beyond the application window. (Should the application window be maximized, drag the panel down to the Windows taskbar.)

### Maximize or restore panel groups

To maximize or restore a panel group, double-click the active panel's tab or the empty part of that group's tab well. Hovering the mouse pointer over a panel group and pressing the ` (accent grave) key does the same maximize-or-restore.

### Resize panel groups

Note

For a fast maximize of whatever panel sits under the pointer, press the ` (accent grave) key. (On a standard US keyboard, the accent grave is the unshifted character beneath the tilde, ~.) A second press of the key returns the panel to its earlier size.

Drag the divider between panel groups and every group sharing that divider resizes together.

For a horizontal or vertical resize, set the pointer between two-panel groups. It turns into a double arrow .

To resize both ways simultaneously, place the pointer where three or more panel groups meet. It turns into a four‑way arrow .

A. Original group with resize pointer B. Resized groups

2. Dragging divider between panel groups to resize them horizontally

### Open, close, and show panels and windows

A panel can be open yet hidden out of view behind others. Picking a panel from the Window menu opens it and pulls it to the front of its group.

Close a panel group inside the application window and the remaining groups stretch to claim the freed-up space. Close a floating window and every panel inside it closes along with it.

Toggling a panel open or shut is done by picking it from the Window menu.

To shut a panel or window, select its Close button. Close one by mistake and you can bring it back by choosing it again from the Window menu.

To open or close a panel, use its keyboard shortcut.

When a frame holds several panels, hover the pointer over a tab and spin the mouse scroll wheel forward or back to switch which panel is active.

When a frame groups more panels than fit at once, drag the scroll bar that shows up above the tabs.

### Maintain your workspace when opening projects

To hold onto your current workspace layout while opening a project that was saved with a different workspace in After Effects, turn on the Maintain current workspace when opening projects preference. No matter what you open, the layout holds steady and you skip rearranging your workspace each time.

Select Edit > Preferences > Project (Windows) or After Effects > Settings > Project (macOS).

Under Project, select the Maintain current workspace when opening projects option, then OK.

2. Open any project in After Effects, and your set workspace will remain unchanged.

### Viewers

A viewer is a panel able to hold several compositions, layers, or footage items—or several views of one of those. The Composition, Layer, Footage, Flowchart, and Effect Controls panels all count as viewers.

Lock a viewer and the item on display stays put rather than being swapped out when you open or select something new. With a viewer locked, opening or selecting a new item makes After Effects spin up a fresh viewer panel for it. Should you instead pick the item from a locked viewer's viewer menu, no new viewer appears—the existing one is reused.

Rather than packing several items into one viewer and flipping between them with the viewer menu, you can open a dedicated viewer for each open composition, layer, or footage item. With several viewers open, you can dock or group them to arrange them, just like any other panels.

For instance, you might set up one Composition viewer per 3D view (Top, Bottom, Back, Front, custom views), letting you maximize each one with the ` (accent grave) keyboard shortcut that maximizes or restores whichever panel sits under the pointer.

Note

When building a custom workspace that holds several viewers, make sure all of them are unlocked before you save. Since a locked viewer is bound to one project's context, the preferences file never records it.

Spin up a fresh viewer by picking New off the viewer menu. Learn more about opening panel, viewer, and context menus.

To lock or unlock a viewer, choose Locked from the viewer menu, or select the Toggle Viewer Lock button.

To lock the current viewer, split the current frame, and create a new viewer of the same type in the new frame, press Ctrl + Alt + Shift + N (Windows) or Command + Option + Shift + N (macOS).

To cycle forward or backward through the items in the viewer menu list for the active viewer, press Shift + . (period) or Shift + , (comma).

### Customize panel background colors

Within the Composition, Layer, and Footage panels you can restyle the empty fallow area by giving it a background color of your choosing. Pick from five gray-shade presets or settle on a custom color that fits your needs, for a workspace that feels more personal and reads more efficiently.

Setting the background color of the empty region around your composition panel can cut down on distractions and sharpen visibility.

Select the menu of the Composition, Footage, or Layer panels.

1. Make the empty space in the Composition, Layer, and Footage panels your own by selecting a background color to your taste.
   Within that menu, pick Panel Background Color.

Reach for one of the five gray-shade presets, or go with Select Custom Color when you need a different color.

Where you want to reuse the background color from last time, pick Select Custom.

### Edit this, look at that (ETLAT) and locked Composition viewers

Suppose a Composition viewer is locked while the active panel is the Timeline panel of a different composition, and that active composition's own Composition viewer isn't on screen. Under those conditions, the bulk of commands governing views and previews target whichever composition the locked viewer is displaying.

To illustrate: hitting numpad 0 may launch a preview of the composition shown in the locked Composition viewer instead of the one tied to the currently active Timeline panel.

What this enables is a way of working that goes by the name edit-this-look-at-that (ETLAT). It pays off most often when you tweak something in the Timeline panel of a nested (upstream) composition and need to see how that edit plays out in the containing (downstream) composition.

Note

The shortcuts that ETLAT applies to include zooming, fitting, previewing, capturing and reviewing snapshots, displaying channels, toggling grids and guides on or off, and sending the current frame to a video preview device.

Should you want to stop this from happening, either unlock the Composition viewer or bring up the Composition viewer belonging to the composition you intend to view or preview.

### More like this

- Choose a viewer to always preview
- Previews (keyboard shortcuts)
- About precomposing and nesting
- Working with stacked panel groups

## See also

- [Application](script-application.md)
