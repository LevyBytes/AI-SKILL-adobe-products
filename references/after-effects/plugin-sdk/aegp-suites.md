# AEGP Suites

Everything an AEGP accomplishes, as noted above, runs through suites. The suites below serve every kind of AEGP and are fair game inside any hook function — the one holdout being the RegisterSuite, which has to be called from the AEGP's entry point. What follows describes each function across every suite, with usage notes wherever they help.

| Suite | Description |
| --- | --- |
| Memory Suite | Handle memory resources. Lean on this suite! Any time something memory-related goes wrong, After Effects can surface the errors on your behalf. |
| Command Suite | Look after your AEGP's menu items. Goes hand in hand with the Register Suite. |
| Register Suite | Pairs with the Command Suite to wire functions onto menu commands. AEIOs and Artisans rely on this suite's functions to signal After Effects that they'd like the right message streams. A few of After Effects' commands can be swapped out using this suite. |
| Project Suite | Reads project data and changes it. |
| Item Suite | Looks after items inside a project or composition. Folders, Compositions, Solids, and Footage all count as items. |
| Collection Suite | Find out which items the user has selected, and build selection sets of your own. Selecting everything your AEGP touched is frequently a smart UI gesture — it shows the user at a glance what happened. |
| Composition Suite | Looks after (and builds) the compositions in a project, plus composition-specific items such as solids. |
| Footage Suite | Looks after footage. |
| Layer Suite | Supplies details about a composition's layers and how source and layer times relate. Solids, text, paint, cameras, lights, images, and image sequences can each turn into layers. |
| Effect Suite | Opens up the effects sitting on a layer. Turn to the Stream suites for effect keyframe data. Call `AEGP_EffectCallGeneric`() (in `AEGP_EffectSuite4`) to talk with effects you've primed in advance to answer your AEGP. |
| Stream Suite | Reaches the values held in a layer's keyframe properties. |
| Dynamic Stream Suite | Reaches the traits of the dynamic streams tied to a layer. |
| Keyframe Suite | Reaches and reworks every bit of keyframe data. |
| Marker Suite | Works with markers. Call `AEGP_GetNewCompMarkerStream`() (in `AEGP_CompSuite11`) to fetch the composition marker stream. |
| Mask Suite | Opens up information about the masks on a layer. |
| Mask Outline Suite | Working alongside the Stream Suite, this one hands over fine-grained detail on the path drawn to form a layer's mask. |
| Text Document Suite | Reaches the real text living on a text layer. |
| Text Layer Suite | Reaches the paths that trace the outlines of a text layer. |
| Utility Suite | Furnishes error-message handling, AEGP version checks, and a way into After Effects' undo stack. |
| Persistent Data Suite | Read and manage every scrap of persistent data (the preferences file, that is). AEGPs are welcome to stash their own data in the prefs too. |
| Color Settings Suite | Pull details on the color management settings After Effects is currently using. |
| Render Suite | Fetch rendered frames (along with audio samples) from inside an AEGP. |
| World Suite | Allocate `AEGP_Worlds`, dispose of them, and query them. When you need to interoperate with effect plug-ins, it also lets you convert a `PF_EffectWorld` over to an `AEGP_World`. |
| Composite Suite | Surfaces After Effects' compositing machinery — transfer modes, track matting, and plain old bit copying included. |
| Sound Data Suite | Functions to handle and reach sound data. |
| Render Queue Suite | Put items into the render queue and take them out. |
| Render Queue Item Suite | Inspect and change the items sitting in the render queue. |
| Render Options Suite | Inspect and manage everything surfaced in a render queue item's options dialog. |
| Output Module Suite | Inspect and change the output modules tied to render queue items. |
| PF Interface Suite | Though these functions belong to the AEGP API in a technical sense, they exist for effects to use. |
| AEGP Iterate Suite | Hands AEGPs a means to run a function (one carrying the required signature) on some or all of the processors available. |
| File Import Manager Suite | Signs up AEGP file and project importers within After Effects' file handling. |
