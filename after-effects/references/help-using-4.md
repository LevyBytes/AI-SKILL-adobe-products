# Improved Ui Language Support, Projects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Improved UI language support; Projects.

## Improved UI language support

Search Last updated on Jan 21, 2026

### Learn how improved UI language support in After Effects can enhance your workflow and unlock new possibilities.

Because After Effects supports Unicode, you're free to type Unicode characters throughout much of the application user interface (UI). In practice that gives you the following:

- The option to run After Effects under a language that differs from your OS display language.
- The freedom to type any Unicode character into a range of UI elements—text fields, labels, and controls among them. That covers project and layer names along with effect names and their parameters, such as the choices in the Dropdown Menu effect.
- The ability to mix several language scripts inside one text field. As an example, Russian, German, Korean, Japanese, and Chinese can all sit together in a single string.

### Run After Effects in a language different from your OS display language

Thanks to Unicode compliance, After Effects can run in a language that isn't the one your operating system uses for its display. That gives you the latitude to pick a separate language for After Effects, so you aren't locked into whatever your system happens to be set to.

Say your OS display language is English, yet you'd rather work inside After Effects in Japanese:

Uninstall After Effects.

Launch the Creative Cloud app, then switch your display language over to Japanese.

Now reinstall After Effects; the install comes through in Japanese, and launching it brings the application up in that same language.

Where this really helps is multilingual settings, since you can hold on to the UI language you favor without having to touch your system preferences.

Note

Running After Effects in Chinese requires that your operating system's display language already be set to Chinese.

### Enter Unicode characters in UI text fields

Unicode support lets you key in a wide range of characters drawn from many languages and symbol sets—emojis included—straight into the user interface.

Note

Nothing about how Unicode text renders in Text layers has changed. You can enter Unicode text as before, but color emoji won't render, and a glyph that's absent from the chosen font may not render correctly.

## Projects

Search Last updated on Mar 27, 2026

Get to know the various Project types and pick up techniques for handling the pieces inside a project effectively—compositions and source files among them.

### About projects

A single file constitutes an After Effects project; inside it live the compositions plus references to every source file the project's footage items draw on. Layers grouped together form compositions. Plenty of layers pull a footage item—a movie or still image, for instance—as their source, although certain layers, shape layers and text layers being examples, hold graphics you build inside After Effects.

The filename extension on a project file is either .aep or .aepx. When the extension is .aep, the project file is binary. When it's .aepx, the project file is text-based XML.

You'll find the name of the current project shown at the top of the application window.

For a template project file, the filename extension is .aet.

### XML project files

In text-based XML project files, a portion of the project data sits as hexadecimal-encoded binary, yet a great deal of it is laid out as human-readable text within string elements. Such a file opens in any text editor, letting you change certain project details without launching the project in After Effects. You can go further and author scripts that, as part of an automated workflow, adjust project information held in XML project files.

Inside an XML project file, these are the project elements open to your edits:

Marker attributes—among them comments, chapter point parameters, and cue point parameters

File paths for source footage items, proxies included

Names and comments on compositions, footage items, layers, and folders

Note

String elements only expose footage item names in XML project files when those names have been customized. Footage item names come automatically from the source file names, and solid color names don't appear in string elements.

A few strings—workspace and view names, for example—do show up as human-readable strings, but any edits you make to them are ignored once After Effects opens the project file.

Note

Steer clear of treating the XML project file format as your main file format. After Effects uses the binary project file (.aep) format as its primary one. Reserve the XML project file format for saving a project copy and for serving as a go-between format in automation workflows.

Tip

Turning an XML project (.aepx) file into a binary project (.aep) file is a matter of choosing File > Save As and typing a filename that ends in .aep without the x. For deeper coverage of how to save projects and keep backups in After Effects, see the related guidance.

### Project links embedded in QuickTime, Video for Windows files

After rendering a movie and exporting it into a container format, you have the option of embedding a link back to the After Effects project inside that container file.

Bringing the project in starts with importing the container file, then choosing Project from the Import As menu within the Import File dialog box. Should the container file point to a project that's since been relocated, you can browse to track the project down.

### Create and open projects

At any given moment, just one project may be open. Create or open a second project file while one is already open, and After Effects asks you to save changes to the open project before closing it. Once a project exists, footage can be imported into it.

To create a project, select File > New > New Project.

To open a project, select File > Open Project, locate the project, and then Open.

You can also create and open a project from the Start screen.

- To create a project, select New Project.
- To open a project, select Open Project and navigate to the location of the project.

### Reveal Project in the File System

Right inside the application, After Effects can surface where your project file lives, which streamlines file management and spares you time. One click is enough to open your computer's file system with the precise spot of your current project file highlighted.

Within the Project panel, right-click an area of empty space.

Select Reveal Project in Finder (macOS) or Reveal Project in Explorer (Windows).

2. Track down and reach the project file fast, which keeps the whole process smoother and less of a chore.
   The file system opens to the spot on disk that holds your project.

3. Surfacing the project file in just a few clicks eases file management, particularly when you're juggling multiple projects or sizable files.

### Template projects and example projects

Carrying the filename extension .aet, a template project is a file from which you can spin up templates built on your own projects.

Note

After Effects does not install template projects.

Open a template project and After Effects spins up a fresh, untitled project derived from it. Whatever changes you save to that new project leave the template project untouched.

Note

One excellent route to seeing how seasoned users handle After Effects is to open one of the template projects that ships with After Effects, open a composition so it's active, and tap U or UU to surface only the layer properties that were animated or changed. Looking over those animated and modified properties reveals the edits the template's designer made while building it.

Frequently the person who built a template project locks down the layers meant to stay as-is and leaves the layers meant for editing unlocked. That's a handy guard against accidental or unsuitable changes.

### Open a template project

- To open a template project, choose File > Open Project. On Windows, choose Adobe After Effects Project Template from the Files Of Type menu.

### Create a template project

- A project becomes a template project once you swap its filename extension .aep over to .aet.
- For a template-project copy of a project, select File > Save A Copy, then give the copy the filename extension .aet.

### Set a template for new projects

Build a template carrying the project settings you like best—color management and folder structure, say—and lean on it as the starting point for each new project you spin up.

Here's how to assign a template that every new After Effects project will start from:

Select After Effects > Preferences > Project.

Enable the New Project loads template check box.

Select Choose Project Template and select a template file.

Note

The format of the template project can be .aet, .aep, or .aex.

### Team Projects

For enterprise and teams users, Team Projects is a hosted collaboration service that lets editors work together smoothly within the editing workflow, all in real time. With it, editors and motion graphics artists collaborate at the same moment inside shared team projects across Adobe Premiere and After Effects, no extra hardware required.

Up in the cloud, project updates are tracked securely, while source files live either locally or as lightweight, shared proxies. On top of that, Team Projects bring rich collaboration tools such as version control and smart conflict resolution.

- To create a team project, select File > New > New Team Project.
- To open a team project, select File > Open Team Project.

### Convert Team Project to an Adobe After Effects Project

Your Team Projects can be turned into a local Adobe After Effects Project (.aep). Select Edit > Team Projects > Convert Team Project to Project.

### Save and back up projects in After Effects

- Saving a project is done with File > Save.
- For a copy whose name is generated automatically, reach for File > Increment and Save, or press Ctrl+Alt+Shift+S (Windows) or Command+Option+Shift+S (macOS).
- The copy of the current project lands in the same folder as the original, and its name is the original's name followed by a number. When the original's name already ends in a number, that number goes up by 1.
- Want a fresh name or a new spot for the project? Select File > Save As > Save As. From then on the open project carries that new name and location, while the file you started from stays as it was.
- To save the project as a copy in the XML project file format, select File > Save As > Save a Copy As XML.
- To save a copy of the project with a different name or to a different location, select File > Save As > Save a Copy. The open project retains its original name and location, and a copy is created with the new settings but isn't opened.
- To save a copy of a project to be opened by the previous major version, select File > Save As > Save a Copy As <previous major version number>.

Note

Any features new to this version of After Effects that a project uses get dropped from the project saved in the older version's format.

When you want a single folder on disk to hold a copy of the project together with copies of the assets it uses, reach for the Collect Files command.

### Flowchart panel

Within a project's or composition's flowchart, every composition, footage item, and layer shows up as its own box (or tile). The arrows pointing between them stand for how the components relate.

Note

What the Flowchart panel gives you is a view of the relationships that already exist. It's not a place to alter how elements relate to one another.

Expand a composition tile and the nested compositions plus the other elements making up the composition come into view.

Where the lines joining tiles in the flowchart are mid-gray, that signals the Video or Audio switch for those items is turned off in the Timeline panel. Black or light gray lines mean the switch is on, with the exact shade depending on the Brightness setting in the Appearance preferences.

- Opening the project flowchart is done with Ctrl+F11 (Windows) or Command+F11 (macOS), or by selecting the Project Flowchart button, which sits atop the vertical scroll bar along the Project panel's right edge.
- For a composition flowchart, pick the composition and select Composition > Composition Flowchart, or select the Composition Flowchart button at the bottom of the Composition panel.
  Selecting a composition in the flowchart makes it active in the Project and Timeline panels. Select a layer and it turns active in the Timeline panel. Select a footage item and it turns active in the Project panel.

- The flowchart's look is yours to adjust through the Flowchart panel menu plus the buttons running along the panel's bottom.

Note

To see tool tips that name the Flowchart panel's buttons, rest your pointer on a button and wait for the tool tip to show.

- To delete elements, select them and use Delete. When the selected element is a footage item or composition, it's removed from the project and stops appearing in the Timeline and Project panels. When it's a layer, it's removed from the composition where it appears.
- Reaching a selected element's context menu means you right-click (Windows) or Control-click (macOS) the icon sitting to the left of the name in the element tile. Those icons take on different looks according to the element type, layers and compositions among them. Take a layer's context menu as an example: through it you work with masks and effects, toggle switches, run transformations, and tune the layer's image quality.

The flowchart for a composition displays individual boxes for the composition, footage items, and layers, with directional arrows indicating their relationships.

The flowchart for a composition displays individual boxes for the composition, footage items, and layers, with directional arrows indicating their relationships. Note

As you change element properties in the Flowchart panel, take care to context-click the tile's icon rather than the element's name. The context menu that goes with the element icon differs from the one that opens off the element name.

### More like this

- Automation
- Import an After Effects project
- Lock or unlock a layer
- Layer switches and columns in the Timeline panel
- Opening and navigating nested compositions
