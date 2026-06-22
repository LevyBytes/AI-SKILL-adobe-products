# Aegp Suites, Fail Gracefully, Handling Handles, Managing Menu Items ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AEGP Suites; Fail Gracefully; Handling Handles; Managing Menu Items; Registering with After Effects; Manage Projects.

## AEGP Suites

Everything an AEGP accomplishes, as noted above, runs through suites. The suites below serve every kind of AEGP and are fair game inside any hook function — the one holdout being the RegisterSuite, which has to be called from the AEGP's entry point. What follows describes each function across every suite, with usage notes wherever they help.

Suite

Description

Memory Suite

Handle memory resources. Lean on this suite! Any time something memory-related goes wrong, After Effects can surface the errors on your behalf.

Command Suite

Look after your AEGP's menu items. Goes hand in hand with the Register Suite.

Register Suite

Pairs with the Command Suite to wire functions onto menu commands. AEIOs and Artisans rely on this suite's functions to signal After Effects that they'd like the right message streams. A few of After Effects' commands can be swapped out using this suite.

Project Suite

Reads project data and changes it.

Item Suite

Looks after items inside a project or composition. Folders, Compositions, Solids, and Footage all count as items.

Collection Suite

Find out which items the user has selected, and build selection sets of your own. Selecting everything your AEGP touched is frequently a smart UI gesture — it shows the user at a glance what happened.

Composition Suite

Looks after (and builds) the compositions in a project, plus composition-specific items such as solids.

Footage Suite

Looks after footage.

Layer Suite

Supplies details about a composition's layers and how source and layer times relate. Solids, text, paint, cameras, lights, images, and image sequences can each turn into layers.

Effect Suite

Opens up the effects sitting on a layer. Turn to the Stream suites for effect keyframe data. Call `AEGP_E`ffectCallGeneric() (in `AEGP_E`ffectSuite4) to talk with effects you've primed in advance to answer your AEGP.

Stream Suite

Reaches the values held in a layer's keyframe properties.

Dynamic Stream Suite

Reaches the traits of the dynamic streams tied to a layer.

Keyframe Suite

Reaches and reworks every bit of keyframe data.

Marker Suite

Works with markers. Call `AEGP_G`etNewCompMarkerStream() (in `AEGP_C`ompSuite11) to fetch the composition marker stream.

Mask Suite

Opens up information about the masks on a layer.

Mask Outline Suite

Working alongside the Stream Suite, this one hands over fine-grained detail on the path drawn to form a layer's mask.

Text Document Suite

Reaches the real text living on a text layer.

Text Layer Suite

Reaches the paths that trace the outlines of a text layer.

Utility Suite

Furnishes error-message handling, AEGP version checks, and a way into After Effects' undo stack.

Persistent Data Suite

Read and manage every scrap of persistent data (the preferences file, that is). AEGPs are welcome to stash their own data in the prefs too.

Color Settings Suite

Pull details on the color management settings After Effects is currently using.

Render Suite

Fetch rendered frames (along with audio samples) from inside an AEGP.

World Suite

Allocate `AEGP_W`orlds, dispose of them, and query them. When you need to interoperate with effect plug-ins, it also lets you convert a `PF_E`ffectWorld over to an `AEGP_W`orld.

Composite Suite

Surfaces After Effects' compositing machinery — transfer modes, track matting, and plain old bit copying included.

Sound Data Suite

Functions to handle and reach sound data.

Render Queue Suite

Put items into the render queue and take them out.

Render Queue Item Suite

Inspect and change the items sitting in the render queue.

Render Options Suite

Inspect and manage everything surfaced in a render queue item's options dialog.

Output Module Suite

Inspect and change the output modules tied to render queue items.

PF Interface Suite

Though these functions belong to the AEGP API in a technical sense, they exist for effects to use.

AEGP Iterate Suite

Hands AEGPs a means to run a function (one carrying the required signature) on some or all of the processors available.

File Import Manager Suite

Signs up AEGP file and project importers within After Effects' file handling.

| --- | --- |

## Fail Gracefully

### AEGP Suites — Fail Gracefully

Should a suite be missing, do everything you can to fail gracefully. Put a message in front of the user that explains what's gone wrong. Try falling back to an older release of that same suite.

Given how tightly AEGPs weave into After Effects, take care that users can tell who or what ran into a particular problem.

Say who you are! Whenever you can, point the user toward support and help resources.

## Handling Handles

### AEGP Suites — Handling Handles

Memory consumed by an AEGP is best handled through the AEGP Memory Suite. Catching memory-related faults early is possible because After Effects will surface such errors back to you.

Because an `AEGP_M`emHandle wraps more than the memory it points at, never dereference one directly. Instead, obtain a pointer into the referenced block by calling `AEGP_L`ockMemHandle.

Release the lock once you've finished, naturally.

### `AEGP_M`emorySuite1

Function

Purpose

`AEGP_N`ewMemHandle

```

Create a new memory handle. This memory is guaranteed to be 16-byte aligned.

plugin_id is the ID passed in through the main Entry Point, or alternatively what you obtained from AEGP_RegisterWithAEGP() (from AEGP_UtilitySuite6).

Use whatZ to identify the memory you are asking for. After Effects uses the string to display any related error messages.

AEGP_NewMemHandle(
  AEGP_PluginID   *plugin_id,
  const A_char    *whatZ,
  AEGP_MemSize    size,
  AEGP_MemFlag    flags,
  AEGP_MemHandle  *memPH);
```

`AEGP_F`reeMemHandle

```

Release a handle you allocated using AEGP_NewMemHandle().

AEGP_FreeMemHandle(
  AEGP_MemHandle  memH);
```

`AEGP_L`ockMemHandle

```

Locks the handle into memory (cannot be moved by OS). Use this function prior to using memory allocated by AEGP_NewMemHandle(). Can be nested.

AEGP_LockMemHandle(
  AEGP_MemHandle  memH,
  void            *ptr_to_ptr);
```

`AEGP_U`nlockMemHandle

```

Allows OS to move the referenced memory. Always balance lock calls with unlocks.

AEGP_UnlockMemHandle(
  AEGP_MemHandle  memH);
```

`AEGP_G`etMemHandleSize

```

Returns the allocated size of the handle.

AEGP_GetMemHandleSize AEGP_MemHandle memH,
  AEGP_MemSize  *sizeP);
```

`AEGP_R`esizeMemHandle

```

Changes the allocated size of the handle.

AEGP_ResizeMemHandle(
  const char      *whatZ,
  AEGP_MemSize    new_size,
  AEGP_MemHandle  memH);
```

`AEGP_S`etMemReportingOn

```

If After Effects runs into problems with the memory handling, the error should be reported to the user.

Make use of this during development!

Only memory allocated and then leaked using this suite is reported using this call, so for example memory allocated using PF_HandleSuite1 will not be reported.

AEGP_SetMemReportingOn(
  A_Boolean  turn_OnB);
```

`AEGP_G`etMemStats

```

Obtain information about the number of currently allocated handles and their total size.

Only memory allocated using this suite is tracked and reported using this call, so for example memory allocated using PF_HandleSuite1 will not be reported here.

AEGP_GetMemStats(
  AEGP_MemID  mem_id,
  A_long      *countPL,
  A_long      *sizePL);
```

| --- | --- |

## Managing Menu Items

### AEGP Suites — Managing Menu Items

Any menu-driven event can be created and serviced through the Command Suites.

Pairing them with the Register Suite is required as well, since that's where you bind handlers to the menu events you've defined.

### `AEGP_C`ommandSuite1

Function

Purpose

`AEGP_G`etUniqueCommand

```

Obtain a unique command identifier. Use the Register Suite to register a handler for the command.

AEGP_GetUniqueCommand(
  AEGP_Command  *unique_commandP);
```

Note: On occasion After Effects will send command 0 (zero), so don't use that as part of your command handling logic.

`AEGP_I`nsertMenuCommand

```

Add a new menu command. Using nameZ = "-" will insert a separator.

menu_ID can be:

- AEGP_Menu_NONE

- AEGP_Menu_APPLE

- AEGP_Menu_FILE

- AEGP_Menu_EDIT

- AEGP_Menu_COMPOSITION

- AEGP_Menu_LAYER

- AEGP_Menu_EFFECT

- AEGP_Menu_WINDOW

- AEGP_Menu_FLOATERS

- AEGP_Menu_KF_ASSIST

- AEGP_Menu_IMPORT

- AEGP_Menu_SAVE_FRAME_AS

- AEGP_Menu_PREFS

- AEGP_Menu_EXPORT

- AEGP_Menu_ANIMATION

- AEGP_Menu_PURGE

- AEGP_Menu_NEW - Supported in CC and later

Locations can be set to a specific location in the menu or can be one assigned by After Effects:

- AEGP_MENU_INSERT_SORTED

- AEGP_MENU_INSERT_AT_BOTTOM

- AEGP_MENU_INSERT_AT_TOP

For AEGP_Menu_WINDOW, the BOTTOM and TOP options haven't been supported since CS4 and will return an error. We recommend SORTED.

AEGP_InsertMenuCommand(
  AEGP_Command  command,
  const A_char  *nameZ,
  AEGP_MenuID   menu_id,
  A_long        after_itemL);
```

`AEGP_R`emoveMenuCommand

```

Remove a menu command. If you were so motivated, you could remove ALL of the After Effects menu items.

AEGP_RemoveMenuCommand(
  AEGP_Command  command);
```

`AEGP_S`etMenuCommandName

```

Set menu name of a command.

AEGP_SetMenuCommandName(
  AEGP_Command  command,
  const A_char  *nameZ);
```

`AEGP_E`nableCommand

```

Enable a menu command.

AEGP_EnableCommand(
  AEGP_Command  command);
```

`AEGP_D`isableCommand

```

Disable a menu command.

AEGP_DisableCommand(
  AEGP_Command  command);
```

`AEGP_C`heckMarkMenuCommand

```

After Effects will draw a check mark next to the menu command.

AEGP_CheckMarkMenuCommand(
  AEGP_Command  command,
  A_Boolean     checkB);
```

`AEGP_D`oCommand

```

Call the handler for a specified menu command. Every After Effects menu item has an associated command.

Note that we make no guarantees that command IDs will be consistent from version to version.

AEGP_DoCommand(
  AEGP_Command  command);
```

```

Having given the disclaimer above, here are a few command numbers that have been supplied to other developers, and may be of interest:

- 3061 - Open selection, ignoring any modifier keys.

- 10314 - Play/Stop (valid in 13.5 and later)

- 2285 - RAM Preview (valid prior to 13.5)

- 2415 - Play (spacebar) (valid prior to 13.5)

- 2997 - Crop composition to region of interest.

- 2372 - Edit > Purge > Image Caches

If your AEGP needs to call some other After Effects menu item, there's a fairly easy way to find out most commands you want, using scripting:

cmd = app.findMenuCommandId(text); // e.g. text = "Open Project..."
alert(cmd);
```

With After Effects open, fire up Adobe ExtendScript Toolkit CC, paste in the snippet shown above, and from the application drop-down pick whichever After Effects build is currently live. A click on Play then executes the script inside AE. If that route fails, reach out to API Engineering to get the command number.

| --- | --- |

## Registering with After Effects

### AEGP Suites — Registering with After Effects

Make functions available for After Effects to call.

### `AEGP_R`egisterSuite5

Function

Purpose

`AEGP_R`egisterCommandHook

```

Register a hook (command handler) function with After Effects.

If you are replacing a function which After Effects also handles, AEGP_HookPriority determines whether your plug-in gets it first.

- AEGP_HP_BeforeAE

- AEGP_HP_AfterAE

For each menu item you add, obtain your own AEGP_Command using AEGP_GetUniqueCommand() (from AEGP_CommandSuite1) prior registering a single command_hook_func.

Determine which command was sent within this hook function, and act accordingly.

Currently, AEGP_HookPriority is ignored.

AEGP_RegisterCommandHook(
  AEGP_PluginID      aegp_plugin_id,
  AEGP_HookPriority  hook_priority,
  AEGP_Command       command,
  AEGP_CommandHook   command_hook_func
  void               *refconPV);
```

`AEGP_R`egisterUpdateMenuHook

```

Register your menu update function (which determines whether or not items are active), called every time any menu is to be drawn.

This hook function handles updates for all menus.

AEGP_RegisterUpdateMenuHook(
  AEGP_PluginID        aegp_plugin_id,
  AEGP_UpdateMenuHook  update_menu_hook_func,
  void                 *refconPV);
```

`AEGP_R`egisterDeathHook

```

Register your termination function. Called when the application quits.

AEGP_RegisterDeathHook(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_DeathHook  death_hook_func,
  void            *refconPV);
```

`AEGP_R`egisterVersionHook

Currently not called.

`AEGP_R`egisterAboutStringHook

Currently not called.

`AEGP_R`egisterAboutHook

Currently not called.

`AEGP_R`egisterArtisan

```

Register your Artisan. See Artisans for more details.

AEGP_RegisterArtisan(
  A_Version              api_version,
  A_Version              Artisan_version,
  long                   aegp_plugin_id,
  void                   *aegp_refconPV,
  const A_char           *match_nameZ,
  const A_char           *Artisan_nameZ,
  PR_ArtisanEntryPoints  *entry_funcsP);
```

`AEGP_R`egisterIO

```

Register your AEIO plug-in. See AEIOs for more details.

AEGP_RegisterIO (
  AEGP_PluginID              aegp_plugin_id,
  AEGP_IORefcon              aegp_refconP,
  const AEIO_ModuleInfo      *io_infoP,
  const AEIO_FunctionBlock4  *aeio_fcn_blockP);
```

`AEGP_R`egisterIdleHook

```

Register your IdleHook function. After Effects will call the function sporadically, while the user makes difficult artistic decisions (or while they're getting more coffee).

AEGP_RegisterIdleHook(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_IdleHook    idle_hook_func,
  AEGP_IdleRefcon  refconP);
```

`AEGP_R`egisterInteractiveArtisan

```

Registers your AEGP as an interactive artisan, for use in previewing and rendering all layers in a given composition.

AEGP_RegisterInteractiveArtisan (
  A_Version              api_version,
  A_Version              artisan_version,
  AEGP_PluginID          aegp_plugin_id,
  void                   *aegp_refconPV,
  const A_char           *match_nameZ,
  const A_char           *artisan_nameZ,
  PR_ArtisanEntryPoints  *entry_funcsP);
```

`AEGP_R`egisterPresetLocalizationString

```

Call this to register as many strings as you like for name-replacement when presets are loaded.

Any time a Property name is found, or referred to in an expression, and it starts with an ASCII tab character ('t'), followed by one of the English names, it will be replaced with the localized name.

(In English the tab character will simply be removed).

AEGP_RegisterPresetLocalizationString(
  const A_char  *english_nameZ,
  const A_char  *localized_nameZ);
```

| --- | --- |

## Manage Projects

### AEGP Suites — Manage Projects

Project data is read and altered through these functions. Although the API carries support for more than one project against possible future growth, today After Effects sticks to a one-project-at-a-time model.

If you need project-specific data kept in After Effects' preferences rather than inside the project file itself, reach for the Persistent Data Suite.

Be careful here: calling the open and create functions will not preserve unsaved edits in whatever project happens to be open at the time!

### `AEGP_P`rojSuite6

Function

Purpose

`AEGP_N`umProjects

```

Currently will never return more than 1. After Effects can have only one project open at a time.

AEGP_GetNumProjects(
  A_long  *num_projPL)
```

`AEGP_G`etIndProject

```

Retrieves a specific project by index.

AEGP_GetProjectProjectByIndex(
  A_long         proj_indexL,
  AEGP_ProjectH  *projPH);
```

`AEGP_G`etProjectName

```

Get the project name (up to AEGP_MAX_PROJ_NAME_LEN + 1) in length.

AEGP_GetProjectName(
  AEGP_ProjectH  projH,
  A_char         *nameZ);
```

`AEGP_G`etProjectPath

```

Get the path of the project (empty string the project hasn't been saved yet).

The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with AEGP_FreeMemHandle.

AEGP_GetProjectPath(
  AEGP_ProjectH   projH,
  AEGP_MemHandle  *unicode_pathPH)
```

`AEGP_G`etProjectRootFolder

```

Get the root of the project, which After Effects also treats as a folder.

AEGP_GetProjectRootFolder(
  AEGP_ProjectH  projH,
  AEGP_ItemH     *root_folderPH)
```

`AEGP_S`aveProjectToPath

```

Saves the entire project to the specified full path.

The file path is a NULL-terminated UTF-16 string with platform separators.

AEGP_SaveProjectToPath(
  AEGP_ProjectH      projH,
  const A_UTF16Char  *pathZ);
```

`AEGP_G`etProjectTimeDisplay

```

Retrieves the current time display settings.

AEGP_GetProjectTimeDisplay(
  AEGP_ProjectH      projH,
  AEGP_TimeDisplay3  *time_displayP);

typedef struct {
  AEGP_TimeDisplayMode            display_mode;
  AEGP_SourceTimecodeDisplayMode  footage_display_mode;
  A_Boolean                       display_dropframeB;
  A_Boolean                       use_feet_framesB;
  A_char                          timebaseC;
  A_char                          frames_per_footC;
  AEGP_FramesDisplayMode          frames_display_mode;
} AEGP_TimeDisplay3;

enum {
  AEGP_TimeDisplay_TIMECODE = 0,
  AEGP_TimeDisplay_FRAMES
};

typedef char AEGP_TimeDisplayMode;

typedef char AEGP_FramesDisplayMode;
```

`AEGP_S`etProjectTimeDisplay

```

Specified the settings to be used for displaying time.

AEGP_SetProjectTimeDisplay(
  AEGP_ProjectH            projH,
  const AEGP_TimeDisplay3  *time_displayP);
```

`AEGP_P`rojectIsDirty

```

Returns TRUE if the project has been modified since it was opened.

AEGP_ProjectIsDirty(
  AEGP_ProjectH  projH,
  A_Boolean      *is_dirtyPB);
```

`AEGP_S`aveProjectAs

```

Saves the project to the specified path.

The file path is a NULL-terminated UTF-16 string with platform separators.

NOTE: This will overwrite an existing file.

AEGP_SaveProjectAs(
  AEGP_ProjectH      projH,
  const A_UTF16Char  *pathZ);
```

`AEGP_N`ewProject

```

Creates a new project. NOTE: Will close the current project without saving it first!

AEGP_NewProject(
  AEGP_ProjectH  *new_projectPH);
```

`AEGP_O`penProjectFromPath

```

Opens a project from the supplied path, and returns its AEGP_ProjectH.

The file path is a NULL-terminated UTF-16 string with platform separators.

NOTE: Will close the current project without saving it first!

AEGP_OpenProjectFromPath(
  const A_UTF16Char  *pathZ,
  AEGP_ProjectH      *projectPH);
```

`AEGP_G`etProjectBitDepth

```

Retrieves the project bit depth.

AEGP_GetProjectBitDepth(
  AEGP_Projec        tH projectH,
  AEGP_ProjBitDepth  *bit_depthP);
```

`AEGP_P`rojBitDepth will be one of the following: - `AEGP_P`rojBitDepth_8 - `AEGP_P`rojBitDepth_16 - `AEGP_P`rojBitDepth_32

`AEGP_S`etProjectBitDepth

```

Sets the project bit depth. Undoable.

AEGP_SetProjectBitDepth(
  AEGP_ProjectH      projectH,
  AEGP_ProjBitDepth  bit_depth);
```

| --- | --- |

### `AEGP_T`imeDisplay2

Note

Values in unused fields persist when After Effects is using a different display type.

Member

Descrpition

`AEGP_T`imeDisplayType type;

One of the following: - `AEGP_T`imeDisplayType*TIMECODE - `AEGP_T`imeDisplayType_FRAMES - `AEGP_T`imeDisplayType*`FEET_AND_FRAMES`

A_char timebaseC;

0 - 100. Only used for `AEGP_T`imeDisplayType_TIMECODE.

`A_B`oolean non_drop_30B;

When the timebase is 30 and the item's framerate is 29.97, determines whether to display as non-drop frame.

A_char frames_per_footC;

Only used for `AEGP_T`imeDisplayType\_`FEET_AND_FRAMES`.

A_long starting_frameL;

Usually 0 or 1. Not used when type is usually 0 or 1, not used for `AEGP_T`imeDisplayType_TIMECODE.

`A_B`oolean auto_timecode_baseB;

If TRUE, the project timecode display setting is set to auto.

| --- | --- |
