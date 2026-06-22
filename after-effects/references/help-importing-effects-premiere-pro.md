# Importing Effects Premiere Pro

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Pull Adobe Premiere effects into After Effects to reuse your transitions and visual effects, holding a consistent look while edits carry across both applications.

One After Effects project can be imported into another. Whatever the imported project holds—footage items, compositions, folders alike—lands inside a fresh folder in the current Project panel.

An After Effects project created under a different operating system imports fine, provided you keep the filenames, folder names, and either full or relative paths (folder locations) intact for every file in it. Relative paths hold only when the source footage files live on the same volume as the project file. Round up copies of every file in a project or composition into one place with the File > Dependencies > Collect Files command.

Choose File > Import > File.

Select the After Effects project to import, and click Open.

When the operating system you're on can't handle a given file format, or the file has gone missing, or its reference link is severed, After Effects drops in a placeholder of color bars in its place. Reconnecting that placeholder to the right file is done by double-clicking its entry in the Project panel and browsing to the source file. Usually just one footage file needs relinking. After Effects tracks down the rest of the missing items as long as they share the same location.

Note

After rendering a movie out to QuickTime (MOV) or Video for Windows (AVI), you can tuck a link to the project inside the container file. Bring that project back by importing the MOV or AVI file and picking Project from the Import As menu in the Import File dialog box. Should the file point to a project that has since moved, you can browse to find it.

## Import an Adobe Premiere project

Note

Pulling a Premiere project into After Effects doesn't go through Dynamic Link. If any sequence within that Premiere project is already dynamically linked to After Effects, the import won't work.

On import, a Premiere project shows up in the Project panel in two forms at once: a new composition where every Premiere clip becomes a layer, and a folder where every clip sits as its own footage item. Any bins in your Premiere project get turned into folders nested inside the Premiere project folder. Nested sequences become nested compositions.

Importing a Premiere project into After Effects doesn't carry over every feature of that project. The set of features that survive the import matches the set preserved when you copy and paste between the two applications.

What After Effects keeps intact is the clip ordering along the timeline, the footage duration (trimmed In and Out points included), and where markers and transitions sit. The way layers line up in the Timeline panel follows how clips were arranged in the Premiere Timeline panel. Premiere clips enter the Timeline panel as layers ordered the way they appeared—bottom upward and left to right—in the Premiere Timeline panel. Speed changes you made to a clip, say through the Clip > Speed command, are preserved and turn up as a value in the Stretch column of the After Effects Timeline panel.

Effects shared by both Premiere and After Effects come across on import, and their keyframes are preserved.

Whatever transitions and titles (dissolves aside) your Adobe Premiere project carries arrive in the After Effects composition as solid layers, keeping their original placement and duration.

Audio Level keyframes are preserved.

Choose File > Import > File or File > Import > Adobe Premiere Project.

If you choose Import > Adobe Premiere Project, then only Adobe Premiere projects are shown.

Select a project, and click OK.

To import only one sequence, choose a sequence from the menu.

To import audio, select Import Audio.

To add a single item from a track in a Premiere project, copy the item in Premiere, and choose Edit > Paste in After Effects.

## Copy between After Effects and Adobe Premiere

Working from the After Effects Timeline panel, layers built on audio or video footage items—solids included—can be copied and dropped into the Adobe Premiere Timeline panel.

Working from the Adobe Premiere Timeline panel, assets (whatever sits in a track) can be copied and pasted into the After Effects Timeline panel.

Footage items can be copied and pasted into the other application's Project panel from either After Effects or Adobe Premiere.

Note

What you can't do is paste footage items out of the After Effects Project panel and into the Adobe Premiere Timeline panel.

When the goal is to work with every clip, or just one sequence, from an Adobe Premiere project, reach for the Import command instead and bring the project into After Effects.

Note

For dynamic links between compositions—new or existing—in After Effects and Adobe Premiere without any rendering, turn to Adobe Dynamic Link.

## Copy from After Effects to Adobe Premiere

A layer built on a footage item in an After Effects composition can be copied and pasted into a Premiere sequence. Premiere turns such layers into clips within the sequence and pulls the source footage item into the Project panel. Where the layer holds an effect Premiere also supports, Premiere brings that effect across with all of its settings and keyframes.

Nested compositions, Photoshop layers, solid-color layers, and audio layers can be copied as well. Adobe Premiere Pro turns nested compositions into nested sequences and solid-color layers into color mattes. Shape, text, camera, light, and adjustment layers, however, can't be copied over to Premiere.

Start Adobe Premiere (it has to be running already by the time the layer gets copied over in After Effects).

Select a layer (or layers) from the After Effects Timeline panel.

Should you pick several layers that don't overlap in After Effects, they all land on a single track in Premiere. Where the layers do overlap in After Effects, the sequence in which you select them sets how they're stacked across tracks in Premiere. Every layer goes onto its own track, with the layer selected last ending up on Track 1. Select from top to bottom, for instance, and they come out reversed in Premiere, the bottom-most layer sitting on Track 1.

Choose Edit > Copy.

In Premiere, open a sequence in the Timeline panel.

Move the current-time indicator to the desired location, and choose either Edit > Paste or Edit > Paste Insert.

## Results of pasting into Adobe Premiere Pro

Pasting a layer into an Adobe Premiere sequence triggers the following conversions of the keyframes, effects, and other properties carried on the copied layer:

After Effects item

Converted to in Adobe Premiere

Notes

Audio volume property

Channel Volume filter

Blending modes

Blending modes supported by Adobe Premiere Pro are converted

Effect properties and keyframes

Effect properties and keyframes, if the effect also exists in Adobe Premiere

In the Effect Controls panel, Adobe Premiere shows any effects it doesn't support as offline. A few After Effects effects share names with Premiere ones, yet because they're genuinely different effects under the hood, no conversion happens.

Expressions

Not converted

Layer markers

Clip markers

Masks and mattes

Not converted

Stereo Mixer effect

Channel Volume filter

Time Remap property

Time Remapping effect

Time Stretch property

Speed property

Speed and time stretch run inversely to each other. To illustrate, 200% stretch in After Effects lands as 50% speed in Adobe Premiere.

Transform property values and keyframes

Motion or Opacity values and keyframes

The keyframe type—Bezier, Auto Bezier, Continuous Bezier, or Hold—is retained.

Source settings for R3D source files

Source settings for R3D source files

| --- | --- | --- |

## Copy from Adobe Premiere to After Effects

A video or audio asset from an Adobe Premiere sequence can be copied and pasted into an After Effects composition. After Effects turns assets into layers and pulls the source footage items into its Project panel. Where the asset carries an effect After Effects also uses, After Effects brings that effect over with all of its settings and keyframes.

Color mattes, stills, nested sequences, and offline files copy across too. After Effects turns color mattes into solid-color layers and nested sequences into nested compositions. Copy a Photoshop still image into After Effects and the Photoshop layer information is kept. Premiere titles can't be pasted into After Effects, though text with its attributes from the Adobe Premiere Titler can be.

Select an asset from the Premiere Timeline panel.

Choose Edit > Copy.

In After Effects, open a composition in the Timeline panel.

With the Timeline panel active, choose Edit > Paste. The asset appears as the topmost layer in the Timeline panel.

To paste the asset at the current-time indicator, place the current-time indicator and press Ctrl+Alt+V (Windows) or Command+Option+V (macOS).

## Results of pasting into After Effects

Pasting an asset into an After Effects composition triggers the following conversions of the keyframes, effects, and other properties carried on the copied asset:

Adobe Premiere asset

Converted to in After Effects

Notes

Audio track

Audio layers

Audio tracks running 5.1 surround, or deeper than 16-bit, aren't supported. Mono and stereo audio tracks come in as one layer or two.

Bars and tone

Not converted

Blending modes

Converted

Clip marker

Layer marker

Color mattes

Solid-color layers

Crop filter

Mask layer

Frame Hold

Time Remap property

Motion or Opacity values and keyframes

Transform property values and keyframes

Keyframe type—Bezier, Auto Bezier, Continuous Bezier, or Hold—is retained.

Sequence marker

Markers on a new solid-color layer

Getting sequence markers across means copying the sequence itself, or else importing the whole Adobe Premiere project as a composition.

Speed property

Time Stretch property

Speed and time stretch run inversely to each other. To illustrate, 50% speed in Adobe Premiere becomes 200% stretch in After Effects.

Time Remapping effect

Time Remap property

Titles

Not converted

Universal counting leaders

Not converted

Video and audio transitions

Opacity keyframes (Cross dissolve only) or solid-color layers

Video effect properties and keyframes

Effect properties and keyframes, if the effect also exists in After Effects

In the Effect Controls panel, After Effects leaves out any effects it doesn't support.

Volume and Channel Volume audio filters

Stereo mixer effect

Other audio filters are not converted.

Source settings for R3D source files

Source settings for R3D source files

| --- | --- | --- |
| Mask | Converted | Copy a mask into an After Effects composition and every Premiere mask property—feather, opacity, expansion, and the rest—comes across with it. |

Note

The same conversion rules that apply when you copy from Premiere over to After Effects also govern what happens when a Premiere project is imported.

### More like this

- Collect files in one location
- Placeholders and proxies
- About precomposing and nesting
