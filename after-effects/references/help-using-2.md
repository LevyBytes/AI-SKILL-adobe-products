# Planning Setup, Tip Of The Day, General User Interface Items

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Planning and setup; Tip of the day; General user interface items.

## Planning and setup

Search Last updated on Mar 11, 2026

### Plan how your After Effects project is set up so your workflow stays efficient and your results improve.

### Planning your work

Getting your project settings right, prepping footage properly, and dialing in the opening composition settings up front keeps mistakes and surprises out of the movie you finally render. Take a moment first to consider both the type of work you'll be doing inside After Effects and the type of output you're aiming to produce. With the project mapped out and the foundational choices about project settings made, you can move on to importing footage and building compositions out of layers drawn from that footage.

To be confident a movie fits a given medium, render a quick test and watch it on the very gear your audience will use. Running those tests early — before you've sunk hours into the hard, painstaking portions of the project — surfaces trouble while it's still cheap to fix.

### Storyboards and scripts (screenplays)

Most movie and video productions kick off in pre-production, where you draft the script (the screenplay) and lay out storyboards; together those pieces steer you through shooting in production and then through the editing, soundtrack, visual-effects, and similar work of post-production.

### Acquiring, choosing, and preparing footage

Decide up front which media and formats your finished movies will use, then work out the ideal settings for the material you're starting from — all before any footage gets imported. As a rule, treat footage before it ever reaches After Effects.

Say you want a still to span the full composition frame: prepare it in Adobe Photoshop so both its dimensions and its pixel aspect ratio line up with the composition's. Import an oversized image and every composition that references it demands more memory and more processing. Bring in one that's undersized and scaling it up to where you need it costs you quality.

Shooting with steady lighting and color — and generally heading off the tedious cleanup that post-production otherwise demands — frees up more of your schedule for the creative side.

Reach for uncompressed footage when you can, or footage that uses lossless compression. Because lossless compression can be undone, it holds up far better for things like keying and motion tracking; lossy compression, by contrast, throws away data for good (generation loss). Some compression schemes — the kind found in MPEG-2 or MPEG-4 camera formats, for instance — wreak particular havoc on color keying, since they sacrifice exactly the fine color distinctions that solid bluescreen or greenscreen work relies on. Holding off on anything but lossless compression until the final render is usually the wiser move.

Where you can, shoot at a frame rate that lines up with your output's, sparing After Effects from frame blending or comparable tricks to invent the frames that would otherwise be missing.

Even how you shoot and gather footage can hinge on the work you have planned in After Effects and the movie you're after. If motion-tracked animation is on the agenda, for example, frame your scene to make that tracking easier — say, by placing tracking markers.

It's also worth shooting at a frame size bigger than your final delivery needs whenever you want "head-room" in post — for invented pans and zooms, or for stabilization.

### Project settings

There are three broad categories that project settings break down into:

- The way time gets shown throughout the project
- How the project handles its color data
- Which sampling rate applies to audio

Among these, give the color settings your attention before you get far into a project, since they govern how color data is read as you import footage files, how color math runs while you work, and how color data is translated for the final output.

Turn color management on for a project and the colors in front of you match what your audience sees when they watch the finished movie.

Note

To bring up the Project Settings dialog box, click the color depth indicator along the bottom of the Project panel. Cycle through the color bit depths — 8 bpc, 16 bpc, and 32 bpc — with Alt-click (Windows) or Option-click (macOS).

### Composition settings

Once your footage items are prepped and imported, you draw on them to build layers within a composition, the place where animation and effects happen. Spell out the composition settings — resolution, frame size, pixel aspect ratio — for the output you'll ultimately render whenever you create a composition. These settings remain editable later, yet pinning them down correctly as each composition is created spares you surprises in the final render. The composition frame size, for instance, ought to equal the image size of the playback medium.

Note

When a single composition is bound for several media formats, always set its pixel dimensions to the biggest pixel dimensions any of those outputs use. From there, the output modules in the Render Queue panel let you encode and export a distinct version of the composition per format.

### Performance, memory, and storage considerations

Working on large compositions means setting up both After Effects and your machine to squeeze out the best performance. Rendering an intricate composition can eat a great deal of memory, and the movies that come out of it can claim plenty of disk space. So before you set out to render a three-hour movie, confirm there's room on disk to hold it.

Performance suffers when your source footage files sit on a sluggish disk drive — or arrive over a slow network link. Keep those source files on a quick local disk drive whenever you can. Three drives make for the ideal setup: dedicate one to source footage, a second to the application itself, and a third to whatever you render out.

Learn more about improving performance and memory and multiprocessing preferences.

### Planning for playback on computer monitors and mobile devices

Making a movie meant to play on a computer or mobile device — pulled down from the Web, run off a media drive, or streamed from a site — calls for composition, render, and output module settings that hold file size down while still hitting the delivery quality you intend. Bear in mind that a high-data-rate movie may stutter on older hardware, and that a large one can be slow to download across a sluggish data network.

As you render the finished movie, match the file type and encoder to the destination media. Unless the matching decoder is present on your audience's system, they won't be able to watch it. The codecs (encoders/decoders) people commonly have are those bundled with media players like Flash Player, Windows Media Player, and QuickTime Player.

For an array of platforms and formats — mobile devices, broadcast, cinema, web video, and beyond — Adobe Media Encoder ships presets carrying ready-made settings.

### Mobile devices

Building movies to play on mobile devices like phones and tablets shares much with building them for computer playback — only the constraints bite harder. Since a phone's storage (disk space) and processing muscle differ widely, you have to rein in both file size and data rate for movies that much more tightly.

From one mobile device to the next, screen dimensions, video frame rates, and color gamuts swing wildly.

Note

Keep these pointers in mind while filming video bound for mobile devices:

- Favor tight shots. A face is tough to make out on a small screen unless you frame it fairly close up.
- Light subjects well and pull them clear of the background; let the color and brightness of subject and background diverge.
- Steer clear of heavy zooming and rolling, since both fight temporal compression schemes.
- Shoot on a tripod to cut camera shake, because steady (non-shaky) video compresses more readily.
- Skip auto-focus and auto-exposure. Once they kick in, they shift how every pixel looks frame to frame, which makes interframe encoding schemes less efficient.

Keep these pointers in mind while working in After Effects (for mobile devices):

- Drop to a lower frame rate (12-24 fps) for mobile devices.
- Apply motion-stabilization tools along with noise-reduction or blur effects ahead of the final render, helping the compressor shrink file size.
- Tune the color palette to the mobile devices you're aiming at. Mobile devices tend to carry a limited color gamut.
- Lean on cuts and other quick transitions rather than zooming or using fades and dissolves. Quick cuts ease compression too.

### Cross-platform project considerations

Although After Effects project files open on both macOS and Windows, a few things — chiefly where footage files and support files live and how they're named — can shape how smoothly the same project travels between platforms.

### Project file paths

Move a project file to another computer, open it, and After Effects goes hunting for the project's footage files in this order: it looks first in the folder holding the project file; next along the file's original path or folder; and last at the root of the directory the project sits in.

For cross-platform projects, you're best served when the full paths carry identical names on macOS and Windows. When footage and project live on separate volumes, mount the right volume before opening the project, and keep network volume names matching across both systems.

Storing footage in the same folder as the project file — or in a folder nested inside it — works best. A sample hierarchy looks like this:

- /newproject/project_file.aep
- /newproject/source/footage1.psd
- /newproject/source/footage2.avi

Copy that whole new project folder across platforms and After Effects tracks down all the footage correctly.

Note

Reach for the Collect Files feature to pull copies of every file in a project into one folder. You can then carry the folder with the copied project over to the other platform.

### File-naming conventions

Give your footage and project files the right filename extensions — .mov for QuickTime movies, .aep for After Effects projects, and so on. When the files are headed for the Web, double-check that the filenames follow the relevant conventions for extensions and paths.

### Supported file types

Certain formats import or export on one operating system yet remain unavailable on another. For the full breakdown, consult the documentation covering which import and output formats are supported.

### Resources

Confirm that every font, effect, codec, and similar dependency is present on each machine before transferring work. Frequently these dependencies take the form of plug-ins.

A native After Effects effect carries over cleanly: apply one in a project under a given operating system, move the project to a different OS, and the effect keeps functioning. The same guarantee does not extend to certain third-party effects and other third-party plug-ins, which can stop working even when matching plug-in versions exist on the destination machine. Should that happen, expect to apply some of those third-party effects a second time.

## Tip of the day

Search Last updated on Jan 21, 2026

### Learn about the Tip of the Day in After Effects and discover how it can help improve your workflow.

Think of the Tip of the Day in After Effects as a daily helping of guidance. Its purpose is to surface short, actionable pointers about handy features, shortcuts that save time, and recommended practices that you might have overlooked or that are popular among other users.

Each day brings one short, practical tip that lets you pick up something new within seconds. Because the tip arrives directly, you skip hunting through our guides or reaching out for assistance, which makes squeezing full value out of the app simpler.

Tip of the Day appears when you open a blank project in After Effects.

Tip of the Day appears when you open a blank project in After Effects.

The feature grew out of a collaboration with After Effects users who contributed the workflow tips and time-saving tricks they rely on most. Curation of the tip list aimed to serve every experience level, ship in all supported languages, and stay OS-aware, so that any tip mentioning a keyboard shortcut shows the right modifiers for both macOS and Windows.

A randomly chosen tip surfaces whenever the Composition, Footage, or Layer panels reload or sit empty. As an illustration, a tip shows up:

- Right after a blank project opens
- The moment that empty Footage panel comes up
- Once every timeline is closed, leaving the Composition panel empty

Want to add your own entry to the tip list? You can submit the particulars here.

### More like this

- Planning and setup
- General user interface items
- Workspaces, panels, and viewers
- After Effects Composition basics

## General user interface items

Search Last updated on Jan 21, 2026

### Activate a tool

Across the top of the application window the Tools panel can sit as a toolbar, or it can float as an ordinary dockable panel.

Note

For certain tools, the related controls surface only once that tool is chosen in the Tools panel.

Choose the button belonging to the tool. A small triangle at a button's lower-right corner signals hidden tools: keep the mouse button pressed to reveal them, then pick the one you want to switch on.

Tap the tool's keyboard shortcut. (Resting the pointer on a tool button brings up a tool tip showing that tool's name alongside its keyboard shortcut.)

Within a single tool category, cycling through the hidden tools is a matter of pressing that category's keyboard shortcut over and over. (As an example, tapping the Q key repeatedly steps through the pen tools.)

For a momentary switch to a tool, keep the desired tool's key held down; let go of the key and the previously active tool returns. (Not every tool supports this trick.)

To briefly engage the Hand tool, press and hold the spacebar, the H key, or the middle mouse button. (A handful of situations stop the middle mouse button from triggering the Hand tool, such as while the Unified Camera tool is active.)

Note

Dragging with the Hand tool pans your view inside the Composition, Layer, or Footage panel. Add Shift to pan more quickly.

With a paint tool active, clicking this button toggles the Paint and Brushes panels open or shut. Turn on the Auto-Open Panels option in the Tools panel so the matching panels open by themselves whenever particular tools become active.

Switch on the Auto-Open Panel option so the relevant panel opens automatically as you pick tools from the toolbar.

Switch on the Auto-Open Panel option so the relevant panel opens automatically as you pick tools from the toolbar.

### Open panel, viewer, and context menus

Commands tied to whichever panel or frame is active are what panel menus deliver. Viewer menus, by contrast, list the compositions, layers, or footage items eligible to display in the viewer, plus commands that close items or lock the viewer down. Whatever item you context-click determines the commands a context menu offers. A great many elements throughout the After Effects interface carry their own context menus, and leaning on them tends to speed up and simplify your work.

- A panel menu opens once you select the button menu sitting in the panel's upper-right corner.

- A viewer menu opens when you select, on the viewer tab, the name of whichever composition, layer, or footage item is active.
- A context menu opens with a right-click (Windows) or a Control-click (macOS) — the gesture people sometimes call context-clicking.

### Columns

Columns appear in the Project, Timeline, and Render Queue panels.

- Showing or hiding columns starts with a right-click (Windows) or Control-click (macOS) on a column heading — or by choosing Columns from the panel menu — after which you tick whichever columns to reveal or conceal. Any column already shown carries a check mark.

Tailoring which columns appear lets you sort and filter assets more efficiently within the Project panel.

Tailoring which columns appear lets you sort and filter assets more efficiently within the Project panel. Note

As a rule, the search and filter behaviour in the Project and Timeline panels acts only on whatever sits inside the columns currently shown.

Reordering is a matter of grabbing a column name and dragging it somewhere else.

Resizing means dragging the bar beside a column name, though a few columns resist resizing.

Sorting footage items in the Project panel happens when you select the column heading; one more select flips the order.

### Search and filter in the Timeline, Project, and Effects & Presets panels

Each of the Project, Timeline, and Effects & Presets panels carries a search field for narrowing down what the panel lists.

Drop the insertion point into a search field by selecting inside it.

For the active panel's search field, get the insertion point there by choosing File > Find, or by pressing Ctrl+F (Windows) or Command+F (macOS).

Typing into the search field filters the panel's list, revealing certain entries while concealing the rest. The only items left visible are those whose entries match the query you typed. To supply context, the folders, layers, categories, or property groups holding the matched items stay visible as well.

Generally, this filtering searches only the text found in columns that are shown. As an example, you might have to show the Comments column before you can search and filter against what the comments contain.

When a composition has one or more layers selected, filtering inside the Timeline panel touches only those selected layers. Under that condition, layers left unselected stay visible even when they fail to match the query. With no layers selected in the composition, however, the filter reaches across every layer in it. The same logic governs how pressing property shortcut keys shows or hides layer properties.

Note

Once you clear the search field and finish the search, any folders and property groups that had expanded collapse shut again. For that reason, acting on the items the filter turned up before you clear the field and end the search makes them easier to handle.

Spaces in the text you enter in the Project or Timeline panel search field act as and-based operators. Type Dark Solid, say, and the matches include layers or footage named Dark Red Solid plus Dark Gray Solid. The Effects & Presets panel handles its search field differently, taking spaces literally: enter Change Color and you get the Change Color effect but never the Change To Color effect.

Or-based searching is supported in the Project, Timeline, and Effects & Presets panels. There, a comma stands in for an or, and and-based operators outrank or-based ones. Consider that the property controlling a blur effect's amount goes by Amount in some cases, Blurriness in others, and Blur Radius in still others. Searching Amount, Blurriness, and Radius surfaces the matching values across all of your blur effects.

As you type into a search field, earlier search strings matching your input show up.

This approach also lets you stash frequently used items through a menu that opens when you select the search icon inside the field. A divider splits the search menu into two lists. Up top sit the six most recent searches, the newest at the very top; below the divider live your saved search items. The upper list narrows to matching terms as you type.

Saving a search item means Shift-clicking it within the search menu's top list; you may keep as many as 10.

Removing a saved search item from either list works by hovering the mouse to highlight that item, then tapping Delete or Backspace.

### Examples of searches in the Project panel

For footage items whose name or comment holds a particular string, begin typing that string to display only those.

When you want only the footage items missing their source file, type out the whole word missing. (Unlike the usual rule that confines searching to shown columns, this one works regardless of whether the File Path column is shown.)

For only the unused footage items, type out the whole word unused.

For only the used footage items, type out the whole word used.

For only the Cineon footage items, type Cineon while the Type column is shown.

### Examples of searches in the Timeline panel

When you want only the layers and properties whose name or comment holds a particular string, type that string. Typing starch, for example, reveals pins the Puppet Starch tool created.

To narrow the view to properties carrying an expression that calls a particular method, type that method's name.

For only the layers tagged with a particular label, type the label's name. Color labels for layers, compositions, and footage items in After Effects are covered in more detail elsewhere.

Note

Clicking a label's swatch brings up the context menu enumerating the label names. As an alternative, drag the right edge of the Label column heading so the column widens enough to read those names.

### Scroll or zoom with the mouse wheel

Zooming via the mouse wheel works in these panels: Timeline, Composition, Layer, and Footage. Scrolling via the wheel, meanwhile, covers a different set — Timeline, Project, Render Queue, Flowchart, Effect Controls, Metadata, and Effects & Presets.

- Rolling the wheel forward zooms toward the panel's center, or toward the feature region while you're tracking.
- Rolling the wheel backward zooms away from that center, or out of the feature region during tracking.
- Magnification can either track the cursor's present location or always center on the panel. Head to Preferences > Previews > Magnification and set the Behaviour to Follow Cursor or Centered.
- Zooming into whatever sits beneath the pointer calls for holding Alt (Windows) or Option (macOS) while rolling the wheel forward. Within the Timeline, Footage, and Layer panels, the same move zooms in time once the pointer rests over the time navigator or time ruler.
- Zooming back out from under the pointer means holding Alt (Windows) or Option (macOS) and rolling the wheel backward. Across the Timeline, Footage, and Layer panels, that gesture zooms in time whenever the pointer sits over the time navigator or time ruler.
- Vertical scrolling comes from rolling the wheel either forward or backward.
- Horizontal scrolling needs Shift held while you roll the wheel backward or forward. Within the Timeline, Footage, and Layer panels, a Shift-roll backward advances time and a forward one rewinds it whenever the pointer sits over the time navigator or time ruler.

Note

Even a panel that isn't currently active still responds to mouse-wheel scrolling or zooming, provided the pointer rests over it.

### Undo changes

Only actions that change the project data can be undone. A property-value change, for instance, is reversible, whereas scrolling a panel or activating a tool is not.

As many as 99 of your most recent project changes can be undone one after another.

Note

So you don't burn time reversing stray edits, lock a layer whenever you want to view it but not alter it.

- Reversing your latest change is done through Edit > Undo [action] or Ctrl + Z.
- Wiping out a change together with everything done after it: pick Edit > History, then select the earliest change you mean to drop.
- Rolling the project back to its last saved state uses File > Revert. Every edit made and every footage item imported since that save disappears, and there is no undoing it.

### After Effects user interface tips

Turn on ClearType text anti-aliasing under Windows. With ClearType, the edges of system text in menus and dialog boxes become easier to read. Instructions for switching ClearType text anti-aliasing on live in Windows Help.

Tooltips appear once you enable the Show Tool Tips preference, found under Edit > Preferences > Appearance (Windows) or After Effects > Preferences > Appearance (macOS).

Pick a workspace holding the Info panel, and keep that panel up front within its panel group as much as you can. Status on what After Effects is currently doing, details about whatever the pointer is over, and plenty more all surface in the Info panel.

Lean on context menus.

Rely on keyboard shortcuts.

### More like this

- Effects & Presets panel
- Organize, view, manage, and trim footage items
- Select layers
- Zoom an image for preview
