# Import Svg Files, Footage Items

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Import SVG files; Working with footage items.

## Import SVG files

Search Last updated on Apr 28, 2026

### See how to pull SVG files straight in as native, editable shape layers that animate right away, no conversion step in between.

Either double-click somewhere inside the Project panel or go through File > Import > File to track down and bring in the SVG file.

Footage or a composition—After Effects in its newest version lets you import the file either way.

Pull the imported SVG file over into the Timeline panel by dragging it.

With the layer selected, the Layer Contents section of the Properties panel reveals the SVG's structure.

A second route is to click the arrow beside the layer to untwirl it, then open up the Contents section. Out come all the separate elements and the properties riding on them—Path, Fill, and Transform among them.

3. Open the SVG layer's Contents section to reach its properties—Path, Fill, and Transform included—and edit them there.
   Animating these properties works no differently than it would on any other shape layer. For instance:

- Drive the Path to build morphing effects
- Shift fill color across time for transitions that feel dynamic
- Lean on Transform properties to scale, rotate, or shift elements on their own

On layers that hold gradient fills and strokes, animating the gradient is something the Scale and Rotation properties let you pull off.

5. Reach for the Gradient Fill properties to tweak the gradient or set it animating.

### Import SVG file as footage or as a composition

How SVG files land in your project gets a more flexible, finer-grained handling in After Effects. The newest version offers a fork the moment you import an SVG file: bring it in as footage, or bring it in as a composition.

Import as footage

Import as a composition

Imports the SVG as a single, continuously rasterizable vector layer.

Imports the SVG as a composiiton made of editable shape layers.

Maintains a connection to the external SVG file.

Every element is converted into its own editable shape.

Good for single‑layer vector graphics when you don't need to break the artwork into parts.

Good for editing paths, shapes, and layer‑level details when you need to animate individual elements.

| --- | --- |

Inside the Import preferences sits the Drag Multiple File Items As option, and that is where you fix which import route SVG files take by default.

- macOS: After Effects > Settings > Import > Drag Multiple File Items As
- Windows: Edit > Preferences > Import > Drag Multiple File Items As

Set the default preference for importing an SVG file, choosing whether it is imported as footage or as a composition.

Set the default preference for importing an SVG file, choosing whether it is imported as footage or as a composition.

Either double-click somewhere inside the Project panel or go through File > Import > File to track down and bring in the SVG file.

Through the Import As dropdown menu inside the Import file dialog box, pick one of these:

- Footage
- Composition - Retain Layer Sizes

Pick Footage and the file comes in as one flattened layer with no reach into the separate elements—fine for static use or any time animation isn't needed. Pick Composition – Retain Layer Sizes and a new composition appears with every source layer imported on its own, each sized to the content it actually holds, which tidies up anchor points and smooths out transformations for animation.

macOS

Windows

Where they apply, turn on the following options:

- Create Composition: Spins up a new composition on default settings and auto-drops the imported SVG—footage or shape-layer composition alike—straight into the timeline, sparing you the manual step of building a composition and dragging the SVG into it.
- Scalable Vector Graphics Sequence: Pulls in a batch of numbered SVG files and handles them as a frame-by-frame vector image sequence.

Brought the SVG in as a composition? Then the Layer Contents section of the Properties panel, or the layer's Contents section down in the timeline, is where you view and work the individual elements and their properties.

Brought in as footage, it acts like an ordinary layer and bends to the standard Transform properties.

As with Illustrator files, a vector file imported as footage can be picked in the timeline, then right-clicked, where Create > Create Shapes from Vector Layer turns it into editable shape layers—and from there individual paths, strokes, and fills are all animatable.

Import an SVG as footage and After Effects holds a live link back to the original file, so whatever you change in that SVG outside the app flows back into your project automatically.

### Copy and paste Illustrator and SVG content

Use new beta features

Open for testing and feedback now is Copy and paste Illustrator and SVG content. Give it a spin over in After Effects (beta).

Get started

Whatever SVG content sits on the clipboard can now drop into After Effects through Edit > Paste. In it comes as native, editable shape layers primed to animate, skipping any in-between import step.

### Copy content from Illustrator

Pull up your artwork in Adobe Illustrator.

Double-check that the Include SVG Code preference is turned on.

- macOS: Select Illustrator > Settings > Clipboard Handling and select Include SVG Code.
- Windows: Select Edit > Preferences > Clipboard Handling and select Include SVG Code.

2. Switch on Include SVG Code so your artwork stays editable and crisp once it lands in other Adobe apps.
   Highlight the artwork you mean to copy.

Turn any SVG text into curves ahead of copying, since SVG text won't survive the paste.

Select Edit > Copy.

Hop over to After Effects and take whichever of these fits your project's state:

- With nothing open, choose Edit > Paste and a fresh project is born, its composition carrying the SVG content as a shape layer.
- With a project open but no composition picked, choose Edit > Paste to spin up a new composition inside the current project that holds the pasted content.

With a composition already selected in After Effects, choose Edit > Paste to drop the SVG content into that composition as a fresh shape layer.

### Paste SVG from other apps

Any application that writes SVG out to the system clipboard gives you content you can paste through that same Edit > Paste workflow. Whether it works hinges on the source application putting valid SVG data on the clipboard.

Over in the After Effects Beta community, the copy and paste Illustrator and SVG content as native shape layers capability has a conversation going—jump in.

## Working with footage items

Search Last updated on Jan 19, 2026

### Pick up how to sort, preview, and keep on top of footage items inside After Effects.

### Organize, view, manage, and trim footage items

The Project panel is where your compositions and footage items are catalogued. The sequence they sit in there—unlike items over in the Timeline and Effect Controls panels—has no bearing on how the movies you build turn out. Arrange footage items and compositions whatever way suits you, folders included. Solid-color footage items get filed into the Solids folder on their own.

Any folder you spin up in the Project panel lives nowhere but the Project panel. Open a folder to show what's inside, and nest folders within folders as you please. Want a file or folder up at the Project panel's top level? Drag it onto the gray information area running across the top of the panel.

The Project panel's search field is there to surface footage items matching all sorts of criteria—say, the ones whose source files have gone missing.

### Trim footage items in the Footage panel

Within the Footage panel, the controls labeled Set In Point , Set Out Point , Ripple Insert Edit, and Overlay Edit exist so you can trim a footage item and drop it into a composition. Taking that Footage panel route can prove handier than first hauling the footage item into a composition and afterward trimming its layer back in the Timeline panel.

### Show information for items

- Want the details on a footage item or composition? Select it within the Project panel, and the information shows up across the top of that panel, right beside the thumbnail image.
- For a footage item's file creator ID, Alt+click (Windows) or Option+click (macOS) it within the Project panel.

### Create a folder

Either go to File > New > New Folder, or over in the Project panel click the Create A New Folder icon .

### Rename and sort items

A footage item can be renamed in a couple of ways. With it selected in the Project panel, hit Enter (Windows) or Return (macOS) and type the replacement name. Alternatively, right-click (Windows) or Control+click (macOS) the item, pick Rename, and supply the new name.

- The Comment column itself can be relabeled: right-click (Windows) or Control+click (macOS) its column heading and pick Rename This.

Note

The Comment column doubles as a way to build your own sort key. Give the column a new name, fill in the relevant value per item (a camera number, say), and then sort on it.

- Sorting by any column's contents is as simple as clicking that column's name in the Project panel.

### Copy items

- Selecting an item in the Project panel and then choosing Edit > Duplicate or Edit > Copy will copy or duplicate it.
- Dragging a footage item out of the Project panel and onto the desktop hands a copy to Windows Explorer (Windows) or the Finder (macOS).

### Reveal footage items

- Want to find where a footage item is being used inside a composition? Right-click (Windows) or Control+click (macOS) that item in the Project panel and pick Reveal In Composition, then choose the precise occurrence to jump to (by composition name and layer name).
- Going the other direction, to surface a layer's underlying footage item back in the Project panel: over in the Timeline panel, right-click (Windows) or Control+click (macOS) the layer, then pick Reveal Layer Source In Project.
- Curious where a footage item physically lives? In the Project panel, right-click (Windows) or Control+click (macOS) it, then pick — depending on the destination — Reveal in Bridge, Reveal in Windows Explorer, or Reveal in Finder (taking you to Adobe Bridge, Windows Explorer, or the Finder respectively).

### Refresh footage items

Got footage items selected in the Project panel whose source files have changed on disk? Pull in the current versions by choosing File > Reload Footage.

### View footage items in the Footage panel or media player assigned by the operating system

Previewing an item in the Footage panel shows it the way its footage interpretation settings render it.

- Double-clicking a footage item in the Project panel brings it up in a Footage panel.
- With the Project panel active, pressing Enter on the numeric keypad opens whatever footage items are selected into the Footage panel.

Note

Holding Alt and double-clicking (Windows), or Option and double-clicking (macOS), a footage item in the Project panel launches its source in whichever player app the file type is tied to. Consult your operating system's documentation if you need to change which applications are mapped to which file types.

### Enhanced solids folder organization

Enhanced solids folder organization gives you tidier control over your solids, adjustment layers, and nulls. The things you can do include:

- Rename the solids folder: The current solids folder can take a new name, and from then on every fresh solid lands in that renamed folder rather than in a fresh one called Solids. Any of the following will rename the folder:

### Rename the solids folder

The current solids folder can take a new name, and from then on every fresh solid lands in that renamed folder rather than in a fresh one called Solids. Any of the following will rename the folder:

### Option 1

Select the folder, then press Enter (Windows) or Return (macOS).

Into the name field, key in whatever you'd like to call it.

### Option 2

Right-click and select Rename. As an example, you might retitle it Color Squares.

Once it's renamed, attempting to create a solid pops up a warning message.

Select Yes, and use Color Squares to continue using the renamed folder.

Should you instead want the solid placed in a brand-new solids folder, select No and use Solids.

### Set a default name for the solids folder

The default name assigned to the solids folder in your new projects is adjustable. Here's how to rename it:

Pull up the Preferences dialog box by choosing Preferences > Project.

Once it's open, type your chosen name into the New Projects Solids Folder text box, then select OK.

Note

Only folders you create going forward pick up these settings. Projects already open stay untouched.

### Nest the solids folder in other folders

The Solids folder is free to live inside other folders. To nest it, drag the solids folder into another folder within your current project. With the nesting in place, fresh solids keep landing in the nested folder.

Note

Folder nesting isn't available in Team Projects.

### Set any folder as the solids folder

Any folder can be designated as a solids folder. The steps to assign one go like this:

Within the Project panel, right-click whichever folder you prefer.

From the menu that appears, pick the solids-folder option to promote that folder to your solids folder.

Note

Just one folder at a time may hold the solids-folder role. For more information, see solids color layers and solids color footage items.

### Edit footage in its original application

Straight from an After Effects project, you can launch a footage item for editing in whatever application built it. That source application has to be installed on the machine you're working on, with enough free RAM to keep it running. Once you edit and save the footage in that original application, every instance of the footage updates the moment After Effects regains focus as the active application.

Note

When the footage carries an alpha channel, confirm you're viewing and editing every channel — the alpha channel included — in the other application. Skip that and your edits may never reach the alpha channel, leaving it out of register with the color channels.

Editing a still-image sequence picked from the Timeline or Composition panel opens whichever single image is showing at that moment. Pick the still-image sequence from the Project panel instead, and the sequence's first image opens.

From the Project, Composition, or Timeline panel, choose either the footage item or a layer that draws on it as a source. When the still-image sequence came from the Composition or Timeline panel, park the current-time indicator on the frame holding the still you mean to edit.

Select Edit > Edit Original.

Make your changes to the footage within that source application, then save them.

### Remove items from a project

It's worth incrementing and saving a backup copy of your project before you reduce it, strip out unused footage, or consolidate footage.

- Deleting an item from a project is a matter of selecting it in the Project panel and pressing Delete.
- Clear every unused footage item from a project with File > Dependencies > Remove Unused Footage.
- Strip out duplicate footage items from a project via File > Dependencies > Consolidate All Footage. Two footage items count as duplicates to After Effects only when their Interpret Footage settings match. As each duplicate is dropped, any layers pointing at it get rewired to the surviving copy.
- To drop compositions you didn't select along with footage unused by the ones you did, choose File > Dependencies > Reduce Project — a command that only lights up while the Project panel is active.

What this clears out is unused footage items plus any other compositions that aren't nested (subordinate) inside a selected composition.

Items you've switched off — meaning their Video or Audio switch is deselected in the Timeline panel — survive Reduce Project even when they belong to the selected composition.

Should an expression in a selected composition point at something living in a nonsubordinate composition, Reduce Project strips out both that composition and the expression attached to it. To give you a chance to undo, a message surfaces once you run Reduce Project flagging this very risk. The way around losing those expressions is to drag the nonsubordinate composition into the one referencing it; afterward, deselect the Audio and Video switches on the composition you just brought in.

### Placeholders and proxies

Reach for either a placeholder or a proxy whenever you need a stand-in for a footage item for the time being.

Placeholder

This is a still frame of color bars standing in for the moment for a footage item that's gone missing. Lean on a placeholder while assembling a composition when you'd like to experiment with ideas for a footage item that hasn't arrived yet. There's no need to supply a placeholder footage item yourself, since After Effects builds placeholders on its own.

Proxy

This is any file pressed into temporary service in place of a footage item — typically a lower-resolution or still rendition of footage you already have, swapped in for the original. Storyboard images frequently fill this role. A proxy is useful either before the final footage exists or once you've got the real footage item but want quicker previews or test-movie renders. A file has to be on hand to serve as the proxy.

Whatever masks, attributes, expressions, effects, and keyframes the layer carries stick around when you swap its placeholder or proxy for the final footage item.

Over in the Project panel, After Effects flags the footage name to show whether the real footage item or its proxy is the one currently active:

A filled box means a proxy item is the one in use across the whole project. With the footage item selected, the proxy's name shows up in bold at the top of the Project panel.

An empty box means the footage item itself is in use throughout the project even though a proxy has been assigned to it.

No box at all means the footage item has no proxy assigned.

### Work with placeholders and missing footage items

You'll get the best results by matching the placeholder's size, duration, and frame rate to those of the real footage.

Should After Effects fail to locate source footage as a project opens, the footage item shows up in the Project panel tagged Missing, its name rendered in italics. Every composition relying on that item swaps in a placeholder for it. The missing item is still usable within the project, and whatever effects you applied to the original footage stay put. Once you swap the source footage back in for the placeholder, After Effects drops the footage into its proper spot across every composition that calls on it.

Note

Typing missing into the Project panel's search field surfaces the footage items whose source files have gone missing. For deeper coverage of how filtering and search behave across the Timeline, Project, and Effects & Presets panels, see the related material.

- Reach for a placeholder by choosing File > Import > Placeholder.
- Swap the selected footage item for a placeholder via File > Replace Footage > Placeholder.
- To put the real footage item back in place of a placeholder, pick the placeholder you want to swap in the Project panel, choose File > Replace Footage > File, and track down the actual footage.

### Work with proxies for footage items

Turn to a proxy and After Effects substitutes it for the real footage everywhere that footage item appears. Once you're done, you can flip back to the real footage item from the project list, at which point After Effects puts the actual footage item back in place of the proxy across every composition.

At render time, when your composition becomes a movie, the choice is yours whether to render with all the real high-resolution footage items or with their proxies. Proxies make sense for a rendered movie when, for instance, all you're after is a quick, rough movie to check motion.

For the best outcome, give a proxy the same frame aspect ratio as the real footage item. So if the actual footage item is a 640x480-pixel movie, build and use a 160x120-pixel proxy. As a proxy item comes in, After Effects scales it to match the real footage in both size and duration. Build a proxy whose frame aspect ratio differs from the actual footage item's, and the scaling will take longer.

In the Project panel, do any of the following:

To track down and apply a proxy, choose a footage item, select File > Set Proxy > File, find and select the file you want as a proxy, and select Open.

To flip between the original footage and its proxy, click the proxy indicator just left of the footage name.

To quit using a proxy, choose the original footage item and File > Set Proxy > None.

### Create a proxy

The Create Proxy command builds a proxy out of footage or compositions you've selected in the Project or Timeline panel. Running it drops the chosen footage into the Render Queue panel and flips the Post-Render Action option to Set Proxy.

Bring up a footage item or a composition in either the Project or the Timeline panel.

Slide the current-time indicator in the Footage panel onto the frame you want as the still proxy item or as the poster frame for a movie footage item.

For a still-image proxy: File > Create Proxy > Still.

For a moving-image proxy: File > Create Proxy > Movie.

Give the proxy a name and choose where its output should go.
Over in the Render Queue panel, dial in your render settings, then select Render.

### Create placeholders for output

Placeholder files are something you can generate for reuse across separate compositions. Say you build a placeholder for a render-queue item destined to produce a 24-fps movie, then drag that placeholder into a 30-fps composition. From there, rendering the 30-fps composition makes After Effects render the placeholder at 24 fps first and feed that rendered version into the 30-fps render.

Drag a queued item's Output Module heading from the Render Queue panel over to the Project panel. After Effects then builds a placeholder for output in the Project panel and sets that item's Post-Render Action option to Import & Replace Usage.

### Loop a footage item

Planning to loop a visual footage item endlessly throughout your project? Building just one cycle of that footage item in After Effects is all it takes.

Within the Project panel, pick out the footage item you want looped.

Select File > Interpret Footage > Main.

Enter a whole-number value in Loop, then select OK.

### Freeze on last frame

Holding a layer's final frame all the way to the end of the composition is now possible. After Effects drops time remapping keyframes into the layer and stretches the layer's duration to the composition's end.

To hold the composition on your footage's last frame, choose Layer > Time > Freeze on Last Frame.

### More like this

- Collect files in one location
- Color labels for layers, compositions, and footage items
- Render settings
- Post-render actions
