# Data Driven Animations, Proportional Scrubbing In Timeline, Quick Apply

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Work with Data-driven animation; Proportional Scrubbing in timeline; Quick Apply in After Effects.

## Work with Data-driven animation

Search Last updated on May 11, 2026

### Create dynamic animations in Adobe After Effects using data‑driven tools to link external data to properties and automate changes across compositions.

Live data gathered from a range of sources is what powers data-driven animations, feeding the motion in your composition. Several data sources can contribute at once, and the data itself may be fixed or change over time. Pull it into your After Effects project and let it serve as input that drives graphs, animates characters, steers visual effects and movie titles, and powers other motion graphics.

Data-driven animation example

Data-driven animation example

### Data Sources

Just about any source you can think of will work, for instance:

- Device-Generated Data Files – Readings from gear like fitness trackers, which log activity through sensors and save it across assorted file formats. Being time-varying, this data spans speed, altitude, distance, heart rate, and a host of other measures of what the user was doing.
- User-Generated Static Data – Fixed, global data—survey results, say—that you can edit to drive graphics. A data file someone builds by hand can supply a workflow for global data.
- URL – Real-time data drawn from websites, such as the path a visitor takes into and out of a web page.
- Metadata - Data tucked inside Video File Metadata.

### Input Formats

These are the file formats you can bring in:

- JSON
- MGJSON
- CSV
- TSV
- BVH

Holding data in some other format? Run it through a converter into one of the supported import formats first, then bring it into your After Effects project. Plenty of conversion tools exist for turning data files into formats After Effects accepts.

### Support for standard JSON (.json)

A standard JSON file can come into After Effects as footage while the data files do their work out of sight. After Effects reaches straight into the data in those files to drive animations inside projects. JSON footage never shows up as data streams in the Timeline panel. You reference its data through expressions, treating it as an evaluated JSON object.

Rework the expressions and you change how the data gets referenced. You're free to author the data in a text editor for After Effects to pull from when driving animations. JSON support rests on the JSON schema, which lays out how an application reads and edits JSON data.

Here are JSON's core data types:

- Number: a decimal figure that may carry a sign.
- String: any run of Unicode characters, even an empty one.
- Boolean: holds one of two values, true or false.
- Array: values placed in order, with zero or more of them.
- Object: name/value pairs gathered without order, the names (keys) being strings.
- Null: a value left empty, spelled with the word ‘null’.

Note

Planning to bring in Adobe Media Encoder or hook the compositions up to Premiere? Drop the data source file onto the Timeline instead of leaning on expressions that point at data entries sitting in the Project panel. Adding the data file as a composition layer also guarantees it travels along when you run Collect Files.

### Work with JSON file in After Effects

Working with a standard JSON file goes like this:

Select File > Import > File.

Pick a .JSON file, then click Open.

Your project window now holds the file. Build a composition out of that footage.

The composition needs a solid—create one via Layer > New > Solid.

Over in the Timeline panel, spin down the solid layer's properties, then reveal the Opacity parameter with Alt + Click on Windows or ⌥ + Click on macOS.

Edit the data within the expression to reshape your animation. The JSON data is yours to control, along with the data file that warehouses all the information.

Swapping in a different JSON file is also an option for changing which data gets referenced. Do it by choosing Replace Footage > File and opening the new file from your computer.

To make use of the data, attach an expression to whichever property the data should animate, and from there:

Read what's inside a .JSON file by way of the sourceData attribute. Here's an illustration:

```
var sampleData = footage("sample.json").sourceData;
```

Getting a value back means pointing at the exact property within the JSON data—like so:

```
myData.engineData.RPM or myData.latitude.value.
```

### Support for Motion Graphics JSON (.mgJSON)

An MGJSON data file can be brought into your project as footage. Add that data footage to a composition and its data property streams get gathered under one top-level group named "Data". Footage data shows up as Properties inside the Data group. Every property in the group carries an expression linking it back to the footage file, reaching the data file's value through the expression footage("foo.mgjson").dataValue(N). N here stands for the path leading to the data stream within the file. MGJSON runs on a schema built to make referencing and importing data streams in After Effects straightforward.

Each data property individually has an expression on it tying that property to the matching data in the MGJSON file. Change the source MGJSON file and the data property values refresh themselves automatically.

Inside the Timeline panel, you can twirl the Data layers open and wield the pick-whip to link one parameter to another. Those changes propagate on their own.

### Work with MGJSON footage in After Effects

Working with an MGJSON file goes like this:

Select File > Import > File.

For the import, pick an MGJSON file and click Open.

Once the file shows up in your project window, build a composition from that footage.

Bring an asset into the project, dropping it onto the composition.

Back in the Timeline panel, spin the footage's properties open.

Pick whip one of the asset's properties—Rotation, for instance—onto one of the data streams in the data layer. That asset property now draws from the data layer's data. Every mirrored data stream carries an expression that fetches its value out of the footage file.

Preview the footage and the asset animates off the data layer's data stream.

Another option is converting the data file's samples straight into keyframes. The conversion runs like this:

Bring an MGJSON file into the project, then drag it onto the Timeline panel.

On the data layer, right-click and pick Keyframes Assistant > Create Keyframes from Data off the menu.

Twirl the data layer open to see the keyframes.

Note

Once keyframes are converted, the data goes static—it's no longer live and no longer pulls from the data file.

The Graph Editor can likewise display live data as a graph. To bring it up, click that panel's Graph Editor icon within the Timeline.

Data-driven animation uses expression reference.

### Align video in time to mgJSON data

Shifting video layers by a set number of frames, as declared in an mgJSON file, is handled through the Layer > Time > Align Video to Data command. Reach for it when you need footage to line up in time with the data samples held in a paired mgJSON file. Say you logged data during a race but the footage and the captured data didn't begin at the same moment — supplying an offset lets the two snap into alignment on their own.

Follow these steps to time-align video against mgJSON data:

1. Drop the .mgJSON file into a composition that already holds the layers you want to sync.
2. Highlight both the .mgJSON layer and those target layers.
   Choose Layer > Time > Align Video to Data.

The command only functions when the mgJSON file carries a videoSyncTimeList group, which must list:

- One or more target-layer names (fileName)
- How many frames (frameNumber) to shift each layer relative to where the data layer begins.

For example:

"videoSyncTimeList": [ { "fileName": "sample1.mp4", "frameNumber": 1000 },

{ "fileName": "sample2.mp4", "frameNumber": -1000 }

Each fileName has to match the layer name of a selected layer rather than the layer's source name. Rename a layer that has a source in the composition — turning "sample1.mp4" into "Race Camera 1", for instance — and you'll have to update the matching fileName entry in the mgJSON file too. The layers a fileName points to need not be footage items backed by a source file; solids, nested compositions, and other layer types are equally valid.

A positive frameNumber pushes the target layer leftward, ahead of the data layer; a negative one pushes it rightward, behind the data layer. Set frameNumber to 0 and the target layer's start lines up with the data layer's start.

### Support for CSV (.csv) and TSV (.tsv or .txt)

As footage, After Effects accepts Comma-separated value (.csv) plus Tab-separated value (.tsv or .txt) files, which can then act as data sources. Tabular data lives inside both formats as plain text, with each value separated by a comma or by a tab. For all practical purposes, CSV and TSV files act much as JSON files do.

Here's how to put CSV or TSV data files to use inside After Effects:

Pull a CSV or TSV file into the project as footage, exactly as you would bring in video, audio, or anything else. To get footage in, take any of these routes:

- Select File > Import > File.
- Right-click the Projects panel and select Import > File type.
- Double-click the Projects panel.

Once the file lands in your project window, build a composition around it.

Over in the Timeline panel, twirl the footage open to reveal its properties. Tie the layer's data properties to another layer in the composition using either the expression pick whip or the Property Link pick whip. Holding Shift while you click the timer icon beside a layer's name opens the expressions text field. The Edit > Copy With Property Links command offers another path to linking the data properties.

To point at the data footage file, attach an expression to whichever property the data should drive. The dataValue() footage attribute pulls a value from a given row and column, both of which count from zero. As an example, footage("sample.tsv").dataValue([15,1])returns the value sitting at row 16 in the second column.

### Basics of Data properties

Drop a JSON, CSV, or TSV file into a composition and open its properties, and you'll find only a Data properties group there — the Transform properties group is absent. That Data properties group mirrors the data hierarchy laid out in the file.

JSON Data properties group in the Timeline panel

JSON Data properties group in the Timeline panel CSV and TSV Data properties group in the Timeline panel

CSV and TSV Data properties group in the Timeline panel

The way this data group works echoes how After Effects handles Motion Graphics JSON (.mgJSON) files. What sets them apart: JSON, CSV, and TSV hold only static values, whereas mgJSON can carry dynamic data that shifts over time.

Every data property carries its own expression tying it back to the matching data in the JSON, CSV, or TSV file. Swap out the source data file and the data property values update to match.

### Link properties with the Property Link pick whip

Rather than hand-writing involved expressions, you can lean on the Property Link pick whip — alternatively, reach for the Edit > Copy with Property Links command — to connect the data properties to properties on other layers. The Property Link pick whip writes the expressions for you automatically as the linking happens.

### Custom expression function libraries - JSX

Back in After Effects 15.0, you could import a JSON file holding custom JavaScript functions and treat it as a library of custom expression functions. That changed with After Effects 15.1, where JavaScript objects no longer count as valid JSON syntax. The stricter JSON parser introduced in 15.1 refuses to import any JSON file whose syntax breaks the rules.

Attempt to import such a JSON file — one with a JavaScript function defined inside — in After Effects 15.1, or open a project already containing one, and After Effects throws an error.

The workaround is to import a JavaScript syntax extension file (.jsx) into After Effects 15.1 instead. That .jsx file can hold exactly the same content as the JSON file you imported into After Effects 15.0; all you change is the extension to .jsx. For an existing project where the JSON file has stopped working, use File > Replace Footage to swap the JSON file out for the JSX file. Doing so redirects every expression reference from the JSON file to the JSX file.

### Known issues with Data-driven animation

A handful of problems can crop up as you build Data-driven animations in After Effects. The full rundown lives in the known issues with Data-driven animations.

## Proportional Scrubbing in timeline

Search Last updated on Apr 15, 2026

### Find out how Proportional Scrubbing drives value changes across selected layer properties that scale with your selection.

### About Proportional Scrubbing

With Proportional Scrubbing you can tweak several selected properties spanning several layers at once, spreading the value change proportionally according to the order in which you selected them.

Standard After Effects scrubbing hands the identical value change to every selected property; proportional scrubbing instead ramps the change smoothly and evenly from the first selected property through to the last. That makes one-drag cascades, spreads, and gradient-style animation possible in a single gesture.

### Before using Proportional Scrubbing

The shape layers in the composition shown in their starting state.

Each shape layer's Position property is shifted along the Y‑axis so the circles sit in a vertical stack.

### When Proportional Scrubbing is used

Proportional Scrubbing brought to bear on the Position properties of every shape layer, nudging them along the Y-axis into a stack.

How the Position property values shift in the timeline across all selected layers once Proportional Scrubbing runs.

### Use Proportional Scrubbing on selected layers

Pick several layers in whatever order you want the distribution to honor.

Hold Cmd+Opt for macOS and Ctrl+Alt for Windows.

Drag the hot text of any selected property — Position, Scale, Rotation, Opacity, Effects, Shape Layer properties, and so on.

Values spread across the chosen properties and layers like this:

- Because it gets 0% of the scrub amount, the first selected layer holds still.
- Receiving the entire 100% of the adjustment, the last selected layer moves by the full scrub amount.
- Every layer between them lands a proportional value, scaled to where it falls in the selection order.

For proportional scrubbing of Scale values, all layers borrow the Constrain Proportions setting belonging to the last selected layer.

A. The last selected layer takes the full scrub amount. B. All in‑between layers get proportionally distributed values by selection order. C. The first selected layer stays unchanged, receiving 0% of the scrub.

Take the example above, where every shape layer sits at a different X‑position. Holding firm at its starting Position value of 1082, the first selected layer doesn't budge throughout Proportional Scrubbing. Scrubbing carries the last selected layer all the way to 1519. After Effects then spreads the motion proportionally across the layers in between, yielding a spacing difference value of 437 pixels. That 437 pixels stands for the full horizontal gap opened up between the first and last selected layers, which After Effects uses as the basis for evenly parceling out the incremental shifts to every layer in the selection.

## Quick Apply in After Effects

Search Last updated on Apr 15, 2026

### See how Quick Apply lets you hunt down any effect, animation preset, or menu command in After Effects and fire it off at once.

### Quick Apply overview

In its newest release, After Effects offers Quick Apply as a straightforward search box for tracking down any effect, animation preset, or menu command in a hurry. It gathers everything into a single spot. Rather than hunting through panel after panel and menu after menu, you type a couple of letters and matching results surface immediately. Once the thing you want shows up, select it to apply or run it on the spot — be that dropping an effect onto a layer, applying an animation preset, or firing off a menu command.

### Effects

Look it up by name or by category to drop it on the selected layer, or spin up a fresh Solid or Adjustment Layer that already carries the effect.

### Animation Presets

Track down text presets along with other animation presets to drop onto a selected layer, or to attach to a fresh layer or Adjustment layer.

### Menu Commands

Look up and trigger any top-level menu command — blending modes, scripts you've installed, and Preferences all included.

### Search and apply using Quick Apply

Build a composition.

Pick one or more layers so the effect, preset, or command lands on those specific layers.

While you're in the Quick Apply dialog box, you can also spin up a brand-new layer as you apply an effect or animation preset.

To bring up the Quick Apply dialog box, take any one of these paths:

- In the menu bar, select Edit and then Quick Apply.
- Press the keyboard shortcut Ctrl+Enter (Windows) or Cmd+Return (macOS); this binding is yours to remap from the Keyboard Shortcuts settings.
- Click the Quick Apply icon over in the Timeline panel.

The moment the dialog appears, focus already sits in the search box, so you can begin typing immediately.

Lean on the search bar to turn up items by name, menu, or category, with results refreshing as you type.

4. Begin typing your query, then hit Enter to immediately apply or run whichever result is highlighted.
   Should you want to control which result categories turn up in your search, click the Settings icon and pick from these:

- Effects
- Menu Commands
- Animation Presets

You can also narrow a search by leading with one of these characters:

- e: limits results to effects alone
- p: limits results to presets alone
- m: limits results to menu commands alone

Switch on the Show dialog at cursor location option to have the Quick Apply dialog pop up beside your cursor. Leave it off and the dialog box reopens wherever it last sat.

Pick an item from the list, then either press Enter, click Apply/Run beside the chosen result, or double-click it to apply or run.

Whenever you apply effects or presets, or run menu commands, you get to direct them at the selected layer(s), at a newly created layer, or onto an adjustment layer.

Modifiers come into play too when you apply effects or presets out of the Quick Apply dialog. Select an effect or preset and the modifier options on offer surface as hints along the bottom of the dialog.

- Holding Ctrl (Windows) / Cmd (macOS) as you press Enter spawns a fresh solid or layer that already has the effect or preset on it.
- Holding Ctrl+Alt (Windows) / Cmd+Option (macOS) as you press Enter spawns a fresh adjustment layer instead.
