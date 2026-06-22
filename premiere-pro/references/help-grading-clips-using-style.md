# Grading Clips Using Style

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Style operations in Color mode let you build and apply creative looks from customizable modules.

Style focuses on flexible, expressive grading by combining modules that can be customized. Adjust operations are aimed at correction, while Style is meant for stylized and creative looks. You can start quickly with presets, or combine modules to build a custom look, experiment with variations, refine the result, and keep styling consistent across clips.

## What are Style Operations?

Adjust is the more surgical workflow; Style is the more expressive one. Adjust supplies a fixed set of tools for a defined workflow, while Style operations let you choose the tools needed for the look you want.

A Style operation is built from interchangeable Modules, with each Module centered on a specific color-grading or image-manipulation effect. These modules lean toward stronger creative effects than Adjust provides and are meant to make image experimentation enjoyable. Depending on the module, it may contain more or fewer controls for tailoring the result. Unlike static LUTs that only perform one fixed operation, these modules are active tools you can manipulate.

Adjust and Style are intended to work together and streamline grading. For that reason, every Adjust tool is also available as an individual Style module, so you can freely organize and grade the program's operations.

Style becomes especially powerful when used through groups. Color grading is iterative, so yesterday's Style choice can look less ideal the next day. If a custom group applies that Style to all clips in a scene, editing the single grouped Style operation updates every clip in that scene that belongs to the group.

## Adding a Style

Open the Add Operation (+) menu to the right of the existing operations at the level where the Style should be added. For example, place the Style operation at Custom Group level or directly at clip level.

Choose Add Style to selected clip.

In the Style Browser, use one of these approaches:

- In the Style Presets tab, choose a category to show its presets, then select a preset to preview the look in the Monitor and view its modules in the Color Controls panel.
- Select the Modules tab, then choose a module to add it to the Color Controls panel; Shift-click to add more than one module.

Use Style presets or modules in the browser to preview them and add them to the grade.

Use Style presets or modules in the browser to preview them and add them to the grade.

With the desired items chosen, select Done to apply the preset or Modules; select Cancel to stop the operation.

To use an existing Style Operation that has been created without modules:

Highlight the undefined Style Module.

In the Color Controls call to action, select either the Style Presets or Style Modules buttons.

After the Style Browser opens on the chosen Style Presets or Style Modules tab, use one of these options:

- In the Style Presets tab, choose a category to show its presets, then select a preset to preview the look in the Monitor and view its modules in the Color Controls panel.
- Select the Modules tab, then choose a module to add it to the Color Controls panel; Shift-click to add more than one module.

With the desired items chosen, select Done to apply the preset or Modules; select Cancel to stop the operation.

Tip

Shift-click can also combine Presets with individual modules, or combine multiple Presets.

Once a Preset, one Module, or multiple Modules have been added, their controls appear in the Color Controls panel so they can be customized if needed.

### Swapping existing styles

To replace every module in the current Style with another preset or another module set:

Use the Swap button.

Then, in the Style Browser, use one of these options:

- In the Style Presets tab, choose a category to show its presets, then select a preset to preview the look in the Monitor and view its modules in the Color Controls panel.
- Select the Modules tab, then choose a module to add it to the Color Controls panel; Shift-click to add more than one module.

With the desired items chosen, select Done to apply the preset or Modules; select Cancel to stop the operation.

The preset and/or modules just added replace all modules that were previously present.

## Using the Style Browser

The Style Browser has two tabs, giving you two different ways to add style to a program.

### Using Style Presets

Use this area to browse, preview, and apply installed presets from the computer. Premiere (beta) includes ready-to-use presets. Presets can also be installed from other sources, such as in-house styles created by people in your organization or styles obtained from third parties. You can save your own presets as well when you create a look worth reusing.

### Creating new styles with Style Modules

To build a style from the beginning, open the Style Modules tab, which lists every available module. Most modules are added in a neutral state and leave the image unchanged until you adjust them; other modules apply a default change so customization starts from a useful point.

### Previewing and adding Presets or Modules

Whenever you select a preset or Module, the Monitor previews it and the related Modules and controls appear in the Color Controls panel. Holding Shift lets you preview multiple Presets or Modules together.

For instance, some artists save "fragmentary" presets for narrow, frequently needed changes that are intended to be combined, such as one set of tinting presets and a separate set of contrast presets that can be mixed for fast variations. Others may prefer to begin with several blank modules and build a completely new look from scratch.

When you select Done, the current clip's selected Style operation receives the Presets and Modules that are selected.

### Re-opening the Style Browser

After presets and/or modules have been added to a style, reopen the Style Browser in these ways:

- In the Style header to the left of the modules, use the Swap button to replace the entire style.
- Use the Add button (+) at the right of the existing Modules to add more modules or another preset to the current style.

## Editing Style Controls

Because there is no limit on how many Modules can make up a style, Style operations provide extra ways to manage the large number of controls that may appear.

### Collapsing and expanding Modules

Modules can be collapsed or expanded to manage space in the Color Controls panel. A collapsed module hides all controls except pinned controls.

Methods of collapsing and expanding modules:

- For a single module, select its top-left name, or right-click the name and choose Expand or Collapse Module.
- For every module, right-click a module name and choose Expand or Collapse All Modules.

### Pinning Controls

With a Module open, right-click a control and choose Pin Control to place a Pin icon beside the name. Pinned controls stay visible after modules are collapsed, so important controls from several modules can remain accessible while all other module controls are hidden. This is an effective way to save room in the Color Controls panel.

To remove that state from a control, right-click it and choose Unpin Control.

### Editing Modules

Style operations are fully customizable, so Premiere Pro offers straightforward ways to modify and arrange modules. The available module-management methods are:

- To add a module, use the Plus (+) button at the right of the other modules in the Color Controls panel, then add one or more modules through the Style Browser.
- To replace a module with another module, right-click it, choose Replace Module, and then choose the replacement in the Style Browser.
- To rearrange modules, drag a module name to a new position before or after other modules in the Color Controls panel. Before release, a line indicates where the module will land.

  - If needed, open the module, then use the Mute button at the left of that module's controls.
  - To mute a module without opening it first, Option-click any open or closed module.

- To reset every control in a Module, open it if necessary, then use the Reset button on the control area's left side.
- To remove a Module, right-click that Module and choose Delete Module.

### Copy and pasting all Style Modules

To copy every module from one Style operation and paste them into another Style operation:

Select the Style operation to copy from.

In the Style module's header area, open the three-dot menu and choose Copy Style.

Select the Style operation that should receive the copy.

In the Style module's header area, open the three-dots menu and choose Paste and Replace.

### Delete all Style Modules

To remove every Module from a Style operation and leave it empty:

In the Style module's header area, open the three-dot menu and choose Delete Style.

## Saving Style Presets

To turn the Modules in the active Style operation into a preset:

In the Style header, select the Save Preset button positioned to the left of the modules.

In the Save Preset dialog, enter a name and choose Save.

After the preset is saved, the Style operation's name changes to that preset name. The preset is then listed in My Presets on the Style Presets tab of the Style Browser so it can be reused later.

## Managing Style Presets

Style presets live in these disk folders.

### On macOS

For Style presets that should be visible only to the current local user:

- In the macOS Finder, choose Go > Go to Folder and provide this path: ~/Documents/Adobe/Common/Assets/Color Styles

That folder holds the Color Styles folders and preset files. Premiere reads the Style presets from this location when filling the Style Browser. Styles placed inside folders appear in a category that uses the folder name.

### On Windows

For Style presets that should be visible only to the current local user:

- On Windows, the LUT storage location is:

C:\Users<user_name>\Documents\Adobe\Common\Assets\Color Styles\

That location contains the Color Styles folders and preset files. Premiere (beta) uses those Style presets to fill the Style Browser. Styles inside a folder are grouped beneath a category named for that folder.
