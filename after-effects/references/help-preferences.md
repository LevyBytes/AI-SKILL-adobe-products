# Preferences (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Mar 27, 2026

### Take a tour of what the Preferences dialog box offers and the things this menu lets you do.

On this page:

- Reset preferences
- Reveal preferences
- Startup & Repair preferences
- Project preferences
- Composition preferences
- Previews preferences
- Appearance preferences
- Grids & Guides preferences
- Labels preferences

- Type preferences
- Import preferences
- Export preferences
- Audio preferences
- Disk preferences
- Memory & CPU preferences
- Video preferences
- 3D preferences
- Scripting & Expressions preferences

## Launch the Preferences dialog in After Effects

Reach the Preferences dialog box this way:

- Windows: Edit > Preferences > [category name]
- macOS: After Effects > Settings > [category name]

To jump straight to the Preferences > General menu, the keyboard shortcuts are:

- Windows: Ctrl + Alt + ; (semicolon)
- macOS: Command + Option + ; (semicolon)

## Restore the default Preference settings

Hold down these keys as the application launches to bring the preference settings back to their defaults.

- Windows: Ctrl + Alt + Shift
- macOS: Command + Option + Shift

## Restore default Keyboard Shortcuts

Keep these keys pressed as you click the OK button in the dialog box to return the keyboard shortcuts to their defaults.

- Windows: Alt + Click
- macOS: Option + Click

## Reset background preferences

Resetting the background preferences works like this:

### macOS

On your desktop, open the GO menu in the menu bar.

Pick Go to Folder from the list, then enter this path:

/Users/[user_name]/Library/Preferences/Adobe/After Effects/[version]

Give the After Effects folder a new name: OldAfterEffects.

### Windows

Browse to C:\Users\”username”\AppData\Roaming\Adobe, or open the Run dialog (Windows + R) and enter %appdata%.

Open the folder called Adobe.

Inside it, find the After Effects folder and rename it OldAfterEffects — alternatively, go to C:\Users\”username”\Documents\Adobe and rename the After Effects folder there to OldAfterEffects.

## Reveal preferences

Your preferences — keyboard shortcuts and workspaces included — live as files in these spots:

- Windows: \Users\[user_name]\AppData\Roaming\Adobe\After Effects\[version]
- macOS: /Users/[user_name]/Library/Preferences/Adobe/After Effects/[version]

To make those preferences visible from inside After Effects, use this route:

- Windows: under Edit > Preferences > Startup & Repair, click the Reveal Preferences in Explorer button
- macOS: under After Effects > Settings > Startup & Repair, click the Reveal Preferences in Finder button

Note

- Rather than hand-editing the files in this folder, stick to the Preferences dialog box when you want to change a preference.
- Because macOS X keeps the Library folder hidden out of the box, see how to reach content inside the user Library folder on macOS.

## Startup & Repair preferences

Application startup behavior, along with the troubleshooting tools, is handled by the Startup & Repair panel.

## Startup Options

- Enable Home Screen: Brings up the welcome screen each time After Effects opens. The setting is on by default, and trial copies of the app can't switch it off.
- Show System Compatibility Issues: During After Effects startup, raises warnings about hardware and software compatibility in the form of a System Compatibility Report, listing both the problems found and suggested fixes.

## Repair Options

- Start in Safe Mode: Briefly relaunches After Effects with third-party extensions and plugins switched off so you can troubleshoot. Should the problem disappear once After Effects runs in Safe Mode, that points to either corrupt preferences that must be reset or replaced or an unstable installed plugin.
- Empty All Caches: Wipes the disk, media, and database caches. Clearing every cache can free up extra storage and also fix some startup problems.

## Preference Management

- Reveal Preferences in Finder: Opens whichever folder holds the After Effects preferences files so you can inspect or back them up by hand.

Caution

Any hand-editing of preferences files can lead to crashes or other unexpected behavior.

- Reset All Preferences To Defaults: Returns every preference, workspace, and the debug database to factory settings. The application has to be restarted afterward.

Note

For the changes to apply, After Effects has to restart, and doing so wipes your workspaces too.

- Migrate Previous Version Preferences: Pulls preferences over from the prior After Effects version. When After Effects locates a preference folder belonging to an earlier version but none for the current one, it offers to migrate those settings — which happens both the first time you launch After Effects and after you've deleted the whole preferences folder.

## File Bug Report

- File Bug Report: Launches the bug reporting interface so you can send issues to Adobe.

## Project preferences

Default project settings, plus the behavior of auto-save, are governed by the options in the Project panel.

## Project Options

- Maintain Current Workspace When Opening Projects: Stops an opened project from overwriting your current workspace layout, so After Effects holds onto your workspace even when the project was saved using a different one.
- Dynamic Link with After Effects Uses Project File Name with Highest Number: Lets Dynamic Link operate across projects coming from different After Effects versions.

## New Project

Build a template carrying the project settings you favor — color management, folder structure, and so on — then lean on it as the starting point for each new project.

- New Project loads template: Treats a designated project file as the template behind every new project. With this turned on and a template project picked, the New Project command lets you start a project from that template. Acceptable template files are an After Effects template project file (.aet), an After Effects project file (.aep), or an After Effects XML project file (.aepx).
- Choose Project Template: Pick the project file (.aep, .aepx, or .aet) that will serve as the template for new projects.

## Solids Folder

- New Project Solids Folder: Names the default folder into which new solid layers get placed. For reference, the solid folder name from the current project is shown.

## Auto-Save

Turn to the options in the Auto-Save section to have a copy of your project saved automatically as you work. You decide both how frequently After Effects saves and how many project copies it retains.

- Save every: Defines how many minutes pass before the project is saved automatically.
- Save when starting render queue: Saves projects automatically whenever items in the render queue get added or changed.
- Maximum Project Versions: The cap on how many auto-save versions are kept, with older ones deleted automatically. Enter 5, for instance, and After Effects keeps five versions of each project you open.

## Auto-Save Location

- Next to Project: Makes a folder within the project's own directory and keeps the auto-save files beside the original project file.
- Custom Location: Writes auto-save files to a location you specify.

## Composition preferences

Settings found in the Composition panel govern the defaults applied when new compositions are made, along with how layers behave.

## Composition Options

- Center Anchor Point in New Shape Layers: Places the anchor point at the middle whenever a shape layer is generated.
- Create Layers at Composition Start Time: Rather than starting at the composition's opening, freshly added layers begin wherever the time indicator currently sits.
- Create Split Layers Above Original Layer: A split produces its new layer stacked on top — later in the timeline — instead of beneath the source.
- Default Spatial Interpolation to Linear: Keyframes receive linear spatial interpolation as their starting behavior rather than Bezier.
- Default Position Properties to Separated Dimensions: The Position property is broken out into individual X, Y, and Z properties without manual intervention.
- Pen Tool Shortcut Toggles Between Pen and Mask Feather Tools: Restricts the G key so it cycles solely between the Pen and Mask Feather tools, leaving the remaining pen-related tools out of the rotation.
- Preserve Constant Vertex and Feather Point Count when Editing Masks: Keeps a mask's structure uniform while it is animated through Smart Mask Interpolation.
- Show Bounding Boxes for Layers Within Pre-Comps: Draws bounding-box wireframes around the pieces of collapsed precompositions as well as per-character 3D text layers.
- Switches Affect Nested Comps: The quality, effects, frame blending, and motion blur switches carry through into nested compositions on a recursive basis.
- Synchronize Time of All Related Items: Dragging the time indicator within one viewer updates the indicator across every related viewer.
- Use System Shortcut Keys: Turns on the macOS system bindings — Command+H to hide and Command+M to minimize — in place of the After Effects equivalents. Hold the Control key to reach the alternate set. This option surfaces on macOS devices only.

## Opening Layers with Double-click

- On Footage Layer Opens: Decide whether a double-click brings up the Layer panel or the source footage.
- On Comp Layer Opens: Decide whether the nested composition or the Layer panel is what a double-click brings up.
- Open Layer Panel when Double-clicking with Paint, Roto Brush, and Refine Edge Tools: Decide what happens when you double-click a precomposition layer while a Paint tool, Roto Brush, or Refine Edge tool is selected — whether that opens the layer inside the Layer panel.

## Synthetic Layers

- Length of Composition: Color solids, text, shapes, and other synthetic layers stretch across the whole length of the composition.
- Use Custom Duration: Synthetic layers instead run for a duration you set, expressed in frames or in time.

## Previews preferences

Settings within the Previews panel govern how real-time preview behaves and how its performance is tuned.

## Adaptive Resolution

- Adaptive Resolution Priority: Determines the trade-off After Effects strikes between resolution and quality while previews update interactively — during dragging, scrubbing, and the like. The slider sets the floor for resolution; the lower you go, the more aggressive the down-sampling becomes.
  - Resolution & Quality: Cuts back on resolution as well as 3D render quality.
  - Only Render Quality: Holds resolution steady while trimming only the 3D render quality.

## Viewer Quality

- Faster: Favors speed ahead of precision.

  - More Accurate Except Cached Preview: While zooming, After Effects aims for greater accuracy unless what you're looking at is a cached preview (RAM Preview).
  - More Accurate: Keeps precision the priority at all times.

  - Faster: Leans on simplified color math so interaction stays responsive.
  - More Accurate Except Cached Preview: Splits the difference between speed and accuracy. During playback, cached frames may rely on simplified color transforms, yet static frames stay accurate.
  - More Accurate: Runs the complete color management math to render color exactly.

## Composition Switches

- Automatically Enable Frame Blending and Motion Blur Rendering: With this turned on, applying motion blur or frame blending to a layer also switches it on for the composition's preview rendering.

## Audio

- Mute Audio When Preview Is Not Real-time: Decide whether audio plays back during previews once the frame rate falls behind real-time. At those slower frame rates, audio stutters as it tries to stay in sync; switching this on silences the audio whenever the preview rate dips under real-time, which stops that stutter.

## Cache Frames When Idle

- Idle Delay Before Caching Starts: Specify, in seconds, how long After Effects pauses before it kicks off background cache rendering.

  - From Current Time: Caching begins at the point where the CTI sits.
  - Around Current Time: Caching starts in the neighborhood of the CTI — one frame ahead and one frame behind.
  - From Start of Range: Caching begins at the opening of the Cache Range you've set.

  - Work Area: Every frame within the work area gets cached by After Effects.
  - Work Area Extended by Current Time: Caching runs from the CTI's location through to the end of the work area.
  - Entire Duration: Frames across the comp's full length are cached.

## Magnification

- Legacy - The classic stepped zoom, which jumps between a preset list of magnification levels (such as 33%, 50%, 100%, and 200%).

  - Smooth - An updated style of zoom that scales without steps, letting you settle on any level you need as you move in or out.

  - Centered: Whatever the cursor's position, zooming happens around the panel's center point.
  - Follow Cursor: Zooming pivots on wherever the cursor currently rests, holding the spot beneath it in view.

  - Zooms: The scroll wheel handles zooming in and out.
  - Pans: The scroll wheel moves the viewer around instead.

## Appearance preferences

Settings in the Appearance panel shape how the After Effects interface looks.

## Appearance Options

- Path Point and Handle Size: Sets how large the Bezier direction handles and vertices appear for masks and shapes, the direction handles on motion paths, and comparable controls.
- Hardware Accelerate Composition, Layer, And Footage Panels: Draws on GPU acceleration to speed up the display.
- Use System Color Picker: Swaps in the operating system's built-in color picker rather than Adobe's own.
- Show Rendering Progress in Info Panel: Surfaces render progress within the Info panel.
- Disable Thumbnails in Project Panel: Halts thumbnail rendering so large projects perform better.
- Show Both Timecode and Frames in Timeline Panel: Presents timecode alongside frame numbers in the time displays.
- Show Tool Tips: Lets After Effects pop up helpful tooltips as you hover across UI elements.
  - Reset Coach Marks: Clears the record of coach marks already viewed so they reappear.

## Theme

- Darkest: This theme leans mainly on the darkest tone, paired with text and icon colors that stand out against it.

  - Dark: This theme is built chiefly around a dark gray tone, with contrasting colors for text and icons.
  - Light: This theme is built chiefly around the lightest gray tone, with contrasting colors for text and icons.

- Accessible color contrast: Switching this on brings up a reduced-contrast take on the themes; it tones down the contrast of buttons, icons, menus, text, and similar elements to make them easier to see and more accessible.

## Colors

- Use Label Color for Layer Handles and Paths: Carries each layer's label color onto its mask paths and bezier handles.
- Use Label Color for Related Tabs: Carries an item's label color onto its viewer tabs.

  - Use Contrasting Color for Mask Path: Renders mask paths in high-contrast colors so they read against the composition background.

- Use Gradients: Switches on gradient shaders throughout the interface for a more refined look.

## Motion Path

- No Motion Path: Keeps keyframes hidden on motion paths.
- All Keyframes: Shows every keyframe along the motion paths.
- No More Than: Shows a set count of keyframes on either side of the current time.
- Show Keyframes for Duration: Shows the keyframes falling inside a chosen span of time before and after the current moment.

## Grids & Guides preferences

How grids, guides, and safe margins look is governed by the Grids & Guides panel. These preferences let you dial in grid settings so elements in a composition can be aligned and positioned with accuracy.

## Grid

- Grid Color: Pick a gridline color with either the color picker or the eyedropper.
- Grid Style: Decide whether the grid renders as solid lines, dashes, or dots.
- Gridline every: Specify, in pixels, how far apart the gridlines sit.
- Subdivisions: State how many subdivisions fall between one gridline and the next.

Tailor the look of your grids inside the Composition panel to smooth out your workflow, sharpen alignment, and lock in precise placement of the elements in a composition.

Tailor the look of your grids inside the Composition panel to smooth out your workflow, sharpen alignment, and lock in precise placement of the elements in a composition.

## Proportional Grid

With the Proportional Grid you can line up and place composition elements more exactly. The number of divisions in the grid comes from the Horizontal and Vertical values you enter, and those divisions in turn shape how the grid lines are spaced and laid out.

- Horizontal: Choose the spacing at which horizontal grid lines show up, which helps line elements up across the composition's width.
- Vertical: Choose the spacing for vertical grid lines, which helps place elements down the composition's height.

Turn to the Proportional Grid preferences to fine-tune how the grid looks, keeping your design elements neatly aligned and spaced.

Turn to the Proportional Grid preferences to fine-tune how the grid looks, keeping your design elements neatly aligned and spaced.

## Guides

Guides give you non-printing lines for lining up and placing the elements of a composition. They make element alignment precise, so you can drop pieces into place and tweak them quickly without measuring and realigning over and over.

- Color: Pick a guideline color with either the color picker or the eyedropper.
- Style: Decide whether guides render as solid lines or dashed guidelines.

## Safe Margins

Within the Safe Margins section you can keep your content sitting inside the part of the composition that actually shows up, so it reads correctly no matter which screen plays it back.

- Action Safe: Set the margin that flags how far in your key action or elements need to stay so they survive across assorted screens and formats.
- Title Safe: Set the margin that marks the region reserved for essential text and graphics, keeping them from being clipped when the frame gets cropped.
- Center-Cut Action Safe: Specify a safe space that calls out the slice of the frame most likely to remain on view across differing aspect ratios, particularly once the content lands on varied screens.
- Center-Cut Title Safe: Specify a safe that pinpoints where critical text and graphics belong so they stay readable across a range of aspect ratios and formats.

Lean on the Safe margins preferences to stake out the on-screen region for your content, so the elements that matter don't get clipped on one device or another.

A. Center-cut title-safe zone B. Center-cut action-safe zone C. Title-safe zone D. Action-safe zone

Lean on the Safe margins preferences to stake out the on-screen region for your content, so the elements that matter don't get clipped on one device or another.

Displays

Action Safe Margin %

Title Safe Margin %

HD/Modern Displays

Percentage of frame inset for action-safe area (default 10%).

Percentage of frame inset for title-safe area (default 20%).

SD/4:3 Displays

Percentage for action-safe in 4:3 aspect ratio (default 32.5%).

Percentage for title-safe in 4:3 aspect ratio (default 40%).

| --- | --- | --- |

## Transparency settings

Tuning both the dimensions and the colors of the transparency grid sitting behind your composition elements sharpens visibility, since a stronger contrast plays off the surrounding artwork. That separation lets you tell apart the see-through regions from everything else in the design with less effort. On top of that, dialing the grid hues to fit your own taste or a project's spec keeps the workspace pleasant and quick to work in.

- Grid size: Sets how big the grid is, fixing the side length of each square that tiles the transparency grid.
- Grid colors: Picks which two colors fill the transparency grid's checkerboard. After Effects starts you off with light gray paired with white, though either can be swapped for whatever you prefer.
- Color 1: With Custom in play, this is the checkerboard's first tone.
- Color 2: With Custom in play, this is the checkerboard's second tone.

Recolor the transparency grid from inside the Composition panel so telling the see-through zones apart from the rest of your composition takes less effort.

Recolor the transparency grid from inside the Composition panel so telling the see-through zones apart from the rest of your composition takes less effort.

Learn more about working with safe zones, grids, guides, and rulers.

## Labels preferences

Labels — those colored boxes living in the Label column — are available in the Project and Timeline panel for sorting and handling compositions, footage items, layers, and keyframes. Out of the box the various label colors map to different sorts of footage items, yet you're free to repurpose each color to stand for whatever categories suit you.

When you map label colors onto categories, the label color menu swatches also give you a fast way to spot the exact color you want to apply to project items, keyframes, layers, or composition marker labels.

- Composition: The color handed to freshly made compositions.
- Video: The color carried by video files you bring in.
- Audio: The color carried by audio files you bring in.
- Still: The color carried by still images you bring in.
- Folder: The color given to folders you create in the Project panel.
- Solid: The color given to solid layers you create.
- Camera: The color given to camera layers you create.
- Light: The color given to light layers you create.
- Adjustment: The color given to adjustment layers you create.
- Null Object: The color given to null objects you create.
- Shape: The color given to shape layers you create.
- Text: The color given to text layers you create.
- 3D Models: The color given to 3D layers you create.
- Other 3D: The color reserved for the remaining 3D-related layers.

- Label Name: Type your own name for the label — it then shows up in menus and right across the UI.
- Label Color: Pick whatever color you want the label to take.

Head to the Labels section of the Preferences dialog box when you want to set up label colors.

Head to the Labels section of the Preferences dialog box when you want to set up label colors. Note

Renaming label groups gives you a handle for sorting and grouping layers alongside footage items. The Label column has to be dragged wider than its starting width before the label names actually show.

- To recolor a single layer's label, pick the label over in the Timeline panel and assign a different color.
- To grab every layer sharing one label color, select a layer carrying that color, then choose Edit > Label > Select Label Group.
- To recolor every layer tied to one label color, click any layer in that label group, run Edit > Label > Select Label Group, and follow with Edit > Label > [color name].
- To rework which source types map to which label colors by default, go to Edit > Preferences > Labels (Windows) or After Effects > Settings > Labels (macOS).
- To stop a layer's label color from tinting its layer handles and motion paths, open Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS) and clear Use Label Colors For Layer Handles And Paths.
- To keep a layer, footage item, or composition's label color out of the corresponding panel tabs, open Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS) and clear Use Label Colors For Related Tabs.
- To set or restyle keyframe colors, pick the keyframe and run Edit > Label > Choose the colors from the list. You can instead right-click the keyframe in the Timeline panel and choose Label > Choose the colors from the list.
- To capture keyframes belonging to one label group, select the keyframe > Edit > Select Keyframe Label Group, or right-click the keyframe in the Timeline panel > Select Keyframe Label Group.

## Type preferences

Typography choices and font-related preferences are governed from the Type panel.

## Font Menu

This area is where you decide on the font size and on how many recently used fonts After Effects keeps on view.

- Preview Size: Controls how large each font preview renders inside the Character panel's font menu.
- Number of Recent Fonts to Display: Sets how many recently used fonts get pinned to the top of that menu.

## Resolve Fonts Dialog

- Do not warn me about missing fonts when opening projects: Keeps the missing-font alert from popping up as you open projects whose fonts can't be found.

## Import preferences

How footage and assets make their way into After Effects is governed from the Import panel.

## See also

- [Application](script-application.md)
