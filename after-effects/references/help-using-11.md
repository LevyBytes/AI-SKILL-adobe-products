# Creating Motion Graphics Templates, Essential Properties

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Work with Motion Graphics templates; Work with Essential Properties.

## Work with Motion Graphics templates

Search Last updated on May 11, 2026

### Create reusable motion graphics templates in Adobe After Effects to package animations with customizable controls for efficient editing and consistent design across projects.

A Motion Graphics template can bundle all kinds of motion graphics elements as a template, fitted with easy-to-use controls plus the source images, videos, and pre-comps it takes to hold design consistent across your projects. It lets motion designers working in After Effects keep stylistic command of their compositions while handing editors working in Premiere the means to tailor the motion graphic to whatever the project calls for.

Motion Graphics templates further hand you control over more advanced elements, things like particle simulations, special effects, and 3D animations.

### Creating Motion Graphics templates in After Effects

Learn how to create a simple Motion Graphics template in After Effects.

### Use the Essential Graphics panel to build Motion Graphics templates

With the Essential Graphics panel, you assemble your own controls for motion graphics and then distribute that work as Motion Graphics templates, either through Creative Cloud Libraries or saved out as local files. Think of the panel as a container: you drop assorted controls into it, tweak them, and afterward bundle the result into a template others can use.

Building one starts in the Essential Graphics workspace, reached through Window > Workspace > Essential Graphics.

Inside After Effects, there are four principal ways this panel earns its keep:

Control surface within After Effects

Treat it as a control surface tied to your compositions. By dragging parameters out of the timeline and into the Essential Graphics panel, you set up quick-access handles for the elements you keep returning to in a comp.

Primary properties for primary controls

Set up primary properties so they behave as primary controls, letting you adjust a composition's effect and layer properties once that comp is nested inside another.

Export Motion Graphics templates (.mogrt)

Send your Motion Graphics template out so editing can continue straight inside Premiere. Everything your design depends on — source images, videos, pre compositions — travels inside the template. Editors in Premiere only get to customize the controls you chose to expose, so the creative direction stays yours.

Group controls and more

Bundle controls together, govern font properties, and wire in controls for CSV and TSV spreadsheet data sources within a Motion Graphics template.

### Open a composition in the Essential Graphics panel

This covers opening a .mogrt file inside Adobe After Effects.

Kicking off a Motion Graphics template in After Effects means picking a composition out of your project and feeding it into the Essential Graphics panel.

Any of the routes below will open a composition in the Essential Graphics panel in After Effects:

For whatever composition is currently active, go to Composition > Open in Essential Graphics.

To target a specific one, right-click a composition over in the Project panel and pick Open in Essential Graphics.

And to reach any composition in the project at all, use the Primary menu inside the Essential Graphics panel.

### Working with a Primary composition

Whatever composition currently sits in the Essential Graphics panel is the Primary composition.

Supported properties drawn from that Primary composition can be placed into the panel, and so can properties belonging to compositions that live within the primary composition's hierarchy.

Should a property come from a composition that falls outside the primary composition's hierarchy, it counts as an unrelated property. Adding one triggers a warning, and although the property still lands in the Essential Graphics panel, it shows up flagged in red. The catch is that such properties won't function once the composition is exported as a Motion Graphics template.

The fix for unrelated properties is to nest the composition that holds them into the primary composition, or somewhere in its hierarchy.

### Add controls in the Essential Graphics panel

Supported properties can come from any effect or layer property group — Transform, Masks, and Material Options among them. In Premiere, editors will only be able to customize the properties you bring over this way.

A control gets created when you drag one selected property, or several at once, from the timeline into the Essential Graphics panel.

Another route: right-click a property in the Timeline or Effect Controls panel and pick Add Property to Essential Graphics from the menu.

Or, with a property selected in the Timeline panel, choose Animation > Add Property to Essential Graphics.

Tip

Bind a keyboard shortcut to the Add Property to Essential Graphics panel command.

### View supported properties

When you'd rather see nothing but the properties the Essential Graphics panel can handle, click the Solo Supported Properties button in the panel. That button screens out the rest and surfaces the supported ones in the timeline.

- Check box
- Color
- Numerical sliders (a single-value numerical property), such as Transform > Opacity or the Slider Control expression control effect
- Source text
- 2D point properties, such as Transform > Anchor Point, Transform > Position, and the Point Control expression control effect
- 2D scale properties, such as Transform > Scale
- Angle properties, such as Transform > Rotate and the Angle Control expression control effect
- Shadow Color property in Compositing Options of a 3D layer.

### Modify controls in the Essential Graphics panel

The Essential Graphics panel lets you tailor or adjust controls so that editors can find them in a hurry, understand exactly what they're changing, and read targeted guidance while handling Motion Graphic templates over in Premiere.

Rename a control: Click the control's name field and type a replacement name.

Reveal source properties: Right-click the control's name and pick Reveal in Timeline from the context menu to expose that control's source properties in the timeline. This reveal action will open the associated composition even when it happens to be closed.

Reorder the controls: Drag controls upward or downward within the panel to reorder them.

Note

- Controls placed in the Essential Graphics panel stay tied to their source properties. Adjust a control's value and the matching properties in the composition shift too. Drop the Opacity to 50% in the panel, for instance, and Opacity in the composition becomes 50% as well.
- As you drag the value of numerical controls in the panel, the composition values refresh right alongside them. Hold Option (macOS) or Alt (Windows) while dragging to switch that live update off.

### Create groups of controls

Grouping controls inside the Essential Graphics panel keeps things tidy and easier to move through. It pays off especially once you've loaded the panel with long runs of editable controls or with the primary properties pulled from nested compositions.

A group begins when you click the Add Formatting menu down in the lower-left corner of the Essential Graphics panel.

Choose Add Group.

Then, to put a control inside a group, drag it onto the group name.

### Add font controls in the Essential Properties panel

Drop a text layer into the Essential Graphics panel and you gain control over that layer's font family, font style, size, and faux styles within a Motion Graphics template. Wiring up these controls means the editors handling Motion Graphic templates in Premiere see only the text properties they actually need.

Add font property controls to the panel:

Bring the Source Text property of a text layer into the Essential Graphics panel.

On the right side of the control row, click the Edit Properties option.

Within the Source Text Properties dialog, pick which font properties to expose from these choices:

Enable Custom Font Selection

Brings in the Font Family and Font Style controls.

Enable Font Size Adjustment

Brings in the Font Size control.

Enable Faux Styles

Brings in the Faux Bold, Faux Italic, All Caps, and Small Caps controls.

Note

As primary properties of a nested composition, font controls aren't supported.

### Add comments in the Essential Graphics panel

Comments are added by clicking the Add Comment button along the bottom of the Essential Graphics panel. Nothing stops you from adding several, renaming them, or shifting their order. The actions are all undoable and redoable too — adding comments, reordering them, and deleting them when needed.

- Renaming: click the comment's name field and type a new name.
- Reordering: drag the comment up or down the panel.

Removing a comment means selecting it and hitting Backspace or Delete.

Note

Within the Project panel, run a duplicate (Command + D for macOS or Ctrl + D Windows) and After Effects copies along the properties and comments you attached to that composition in the Essential Graphics panel.

### Export as Motion Graphics templates

This walks through exporting .mogrt templates to Creative Cloud Libraries or a local drive.

Note

For certain Motion Graphics templates, whoever customizes them will need After Effects installed on their machine.

To keep an After Effects install off the requirement list for whoever uses your .mogrt, confirm your templates satisfy all of the following:

- The only supported composition renderer is Classic 3D. Cinema 4D and Ray-traced 3D renderers fall outside support.
- Every effect shipped with After Effects works, with these exceptions: Camera-Shake Deblur, Synthetic Aperture Color Finesse, Maxon CINEWARE, Puppet, and Warp Stabilizer.
- Dynamic Link footage won't carry over — that covers Premiere sequences or Character Animator scenes sitting inside an After Effects composition.
- FLV format footage and third-party plug-ins aren't supported.

### Name the template

Naming or renaming a Motion Graphics template is a matter of clicking the template's name field and typing the new name.

### Set poster frame for the template

A poster frame can be assigned to your template. That frame serves as the thumbnail image representing the template in Creative Cloud libraries and in the Essential Graphics panel over in Premiere.

To set the poster frame:

Within the primary composition, move the current-time indicator onto whichever frame you want to use.

Click the Set Poster Time button in the Essential Graphics panel.

### Export a template

To send your composition out as a Motion Graphics template:

Click the Export Motion Graphics Template button along the bottom of the Essential Graphics panel. Any compositions within the primary composition's hierarchy ride along in the template.

When the Export As Motion Graphics Template dialog opens, click the Destination menu. Your choices for where it goes are:

Creative Cloud Libraries

Drops templates into your Creative Cloud Libraries.

Local Templates Folder

Places templates in the local folder by default. Whatever you store in the Essential Graphics folder shows up immediately in the Essential Graphics panel inside Premiere.

Local Drive

Writes templates to a directory on your machine. Templates parked in your local directory won't automatically appear in Premiere's Essential Graphics panel.

Tick the Include video preview checkbox so a video preview of the Motion Graphics template stands in as the thumbnail. You can preview it by hovering the thumbnails in Premiere's Essential Graphics panel before you drop it onto the sequence.

For now, that video preview only functions on local and Creative Cloud Libraries exports.

Within the Compatibility section, tick a check box:

Warn me if this Motion Graphics template uses fonts that are not available from Adobe Fonts

Turn this on to have After Effects flag any fonts the composition relies on that Adobe Fonts doesn't carry.

Warn me if After Effects needs to be installed in order to customize this Motion Graphics template

Turn this on when your aim is to export only the features that don't depend on After Effects — third-party plug-ins, for example.

All these options do is raise warnings; the Motion Graphics template's content stays untouched. If you need the project to satisfy the requirements, back out of the export, apply the changes, and export the Motion Graphics template once more.

Pick where it goes from the Destination menu and click OK.

### Open Motion Graphics templates as a project

Editing your After Effects Motion Graphics template (.mogrt files) is possible by opening it inside After Effects as a Project file. Wrap up your edits, then send it back out in .mogrt form.

To open a Motion Graphics template as a project:

Choose File > Open Project.

Within the Open Project dialog, pick a .mogrt file and click Open.

Opening a .mogrt as a project causes After Effects to pull out the project file along with its assets. Inside the Extract "<filename>.mogrt" dialog, pick where to drop the .mogrt contents and click Extract.

### Install and use Motion Graphics templates in Premiere

Once a Motion Graphics template built in After Effects has been installed and opened inside Premiere, every property you defined surfaces in the Essential Graphics panel — among them the means to dynamically alter text, color, and layout.

Find out how to install and put Motion Graphics templates to use within your Premiere projects.

### Work with data-driven Motion Graphics templates

Data-driven Motion Graphics templates let you adjust bar charts, line graphs, and the like quickly and precisely, no manual data entry or motion-graphics expertise required.

This feature lets you bring spreadsheet-data controls — for the CSV (comma-separated value) and TSV (tab-separated value) formats — into the Essential Graphics panel. Export those data-control templates to Premiere and you can change or swap the data right there in Premiere.

There's a second angle, too: within the Essential Graphics panel, the data controls can serve as a browser or editor for the composition's CSV or TSV data layers, no template export involved. Add a composition carrying spreadsheet data to the panel and every bit of the related data shows up, ready to edit. Work with a nested composition, though, and those data controls won't be reachable as primary properties of that composition.

Pull a CSV or TSV file into your project and add it onto your composition.

Over in the Timeline panel, twirl open the data layer's properties.

Grab the layer's data property group and drag it across to the Essential Graphics panel.

These are the spreadsheet-data properties you can adjust within the Essential Graphics panel:

Spreadsheet Properties

Click Edit Properties to the right of the data group to change the following:

- Data property type: Pick what data type each column's values use. This governs how the spreadsheet values come across in Premiere. The type for each column gets set by an After Effects author within After Effects. Over in Premiere, that type maps to one of three forms — a text string, a hot text slider when the values are numbers, or, for color, a hexadecimal value (for example, #EE0473).

- Minimum Rows: Premiere lets you change how many rows a Motion Graphics template uses. Here you set the lowest number of rows permitted.

Rows

Premiere lets you change how many rows a Motion Graphics template uses. Here you set the highest number of rows permitted.

Data properties

- Column names: Edit the column names shown in the Motion Graphics template.

- Data values: Edit the value held in a spreadsheet cell. Pick which row you're editing by switching the Row menu at the top of the Data values group.

Note

Bringing a data layer's Data property group into the panel strips out the expressions tying the layer's data properties to the source data file, swapping them for static values. Those static values refresh on their own whenever you alter the source data file outside After Effects.

Find out how to handle data-driven Motion Graphics templates and apply them in Premiere.

Note

Working with .tsv files — particularly in German-language Excel, though it hits any language that swaps a comma for a decimal — Excel writes the .tsv files out as .txt files. You'll have to rename the extension to .tsv yourself before linking the file to a Motion Graphics template in Premiere.

Failing that, reach for other spreadsheet tools such as Open Office or Google Sheets.

### Do more with Motion Graphics templates

- Essential Properties act as primary controls, giving you a way to reach a composition's layer and effect properties once it sits nested inside another composition.
- For involved workflows that hand Motion Graphics Templates authors and editors several options, you can build a dropdown menu in the Essential Graphics panel by way of expressions.
- While in the Essential Graphics panel, give Premiere editors the freedom to swap media — logos, videos, and other content — inside Motion Graphics templates.

Looking to build more Motion Graphics templates?

Head to AdobeVideoTraining.com and pick up the Top 10 Things Editors want to do in After Effects.

### More like this

- Work with Essential Properties
- Install and use Motion Graphics templates
- Output modules and output module settings
- Frequently Asked Questions - Motion Graphics templates

## Work with Essential Properties

Search Last updated on May 5, 2026

### Create flexible, reusable animation controls in Adobe After Effects using Essential Properties to customize templates and share adjustable designs across projects and teams.

Acting as primary controls, Essential Properties let you reach a composition's layer and effect properties once that composition is nested inside another. That can save real time on intricate animations spread over several nested compositions, since you skip opening each precomposition separately just to see its properties. Because Essential Properties can override the original values and keyframes, the same composition can be reused as several instances, each carrying different values. The source composition is left intact; your changes only spin up instances you can render once you've finished editing your comp.

Creating Essential Properties means either adding properties from a nested composition into the Essential Graphics panel, or nesting the composition (Layer > Precompose) after the properties are added. Once nested, the Timeline panel surfaces the precomposition layer's Essential Properties group.

Tip

Review which property types the Essential Graphics panel supports.

Setting up Essential Properties follows much the same core workflow as building controls for a Motion Graphics template. Where they part ways is in how the properties get used — whether you apply the essential properties to a precomposition inside After Effects or to a Motion Graphics template within Premiere.

### Glossary of terms

Consult the glossary below (both established and newly added terms) to get a handle on the vocabulary that comes up while working with compositions and Essential Properties:

Nest and Precomposition

Nest and Precomposition

Nest: Putting one composition inside another.

Precomposition: Within a project, a composition that sits nested inside another.

Parent composition and Child composition hierarchy

Parent composition and Child composition hierarchy

Place one composition — say Comp A — inside another, Comp B, and Comp A becomes the Parent composition that holds Comp B; Comp B plays the Child composition role.

Essential Properties and Primary Composition

Essential Properties and Primary Composition

The composition you designate as Primary in the Essential Graphics panel is the Primary composition. For that primary composition, any layer or effect property you move from the Timeline into the Essential Graphics panel becomes the Essential Property.

Source property

Source property

Whatever layer or effect property an essential property points back to.

Linked property

Linked property

An essential property of a precomposition while its source property stays unmodified.

Unlinked property

Unlinked property

An Essential Property of a precomposition once its source property has been modified.

To alter the value, keyframe, or expression of an expression property on a precomposition.

Linked properties

Nesting a primary composition causes that precomposition's Essential Properties to attach themselves to the source properties. Picture Comp B placed inside Comp A: here the effect and layer properties belonging to Comp B serve as the source properties. Whatever you promote into the Essential Graphics panel from within Comp B becomes the Essential Properties. Edit those source properties and the precomposition's essential properties shift right along with them.

Unlinked properties

The relationship breaks, though, the moment you adjust the precomposition's Essential Properties directly — that act unlinks them. What unlinking produces is an instance of the primary composition. From then on, the essential properties and the source properties can each be changed on their own without affecting the other.

Editing an Essential Property takes precedence over the value or keyframes held by the source property. Because the precomposition stands as its own distinct instance of the primary composition, the altered value or keyframes render for that instance alone.

### Pull and Push buttons

Adjusting an essential property switches on the Pull and Push buttons within the Timeline panel, and the essential property's name shifts to bold. Together those two cues signal that a property has been unlinked.

Relinking an essential property back to its source property is exactly what the Pull and Push buttons accomplish. A separate pair of Pull and Push buttons exists per essential property, plus one pair covering the whole Essential Properties group.

Pull

Choosing Pull throws away the essential property's edited value, keyframes, and expression.

Push

Choosing Push sends the essential property's edited value, keyframes, and expression onto the source property.

Once you click either Pull or Push, the essential properties reconnect to their source properties and the buttons grey out again. Pull and Push buttons

A. Linked Essential Properties (Pull and Push buttons disabled) B. Unlinked Essential Properties (Pull and Push buttons enabled)

Pull and Push buttons

Pushing an edited essential property back onto the source property propagates the change to every instance of that same primary composition, provided the matching essential property stays linked. Say you build a primary composition for a credit roll, drop it in several times, and tweak only one precomposition's color essential property. Pushing that fresh color value back to the source value makes all instances of the primary composition render in the updated color.

Those same Push and Pull buttons surface in the Properties panel too whenever a property has been modified.

Push and Pull options in the Properties panel

Push and Pull options in the Properties panel

### Relink Essential Properties

- Reconnecting several Essential Properties of a precomposition to their source properties works like this: highlight the particular essential properties, then click the Pull or Push button belonging to the Essential Properties group.

- Reconnecting every essential property of a precomposition to its source properties works like this: clear the selection of all Essential Properties in the Timeline panel, then click the Pull or Push button on the Essential Properties group.

### Modify Source Text Essential Properties

While inside a parent composition, the Type tools won't let you edit Source Text essential properties from the Composition panel.

Changing the text string held by a Source Text essential property can be done in either of these ways:

- Right-click the Source Text essential property and select Edit Value. Revise the text string inside the dialog, then select OK.
- Attach an expression to the Source Text essential property. Be sure the replacement string is wrapped in double quotes — for instance, "She sells seashells by the sea shore."

### More like this

- Properties panel for layers with Essential Properties
- Install and use Motion Graphics templates
- Output modules and output module settings
- Frequently asked questions - Motion Graphics templates

## See also

- [Creative Cloud Libraries](help-creative-cloud-libraries.md)
