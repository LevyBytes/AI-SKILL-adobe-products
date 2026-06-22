# Constants, Events

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Constants; OperationCompleteEvent — Properties; ProjectClosedEvent — Properties; ProjectEvent — Properties; Premiere API — Overview.

## Constants

Before using constants, first import the `constants` object from the Premiere Pro module.

### Enumerations

### MediaType

25.0

| Name | Description |
| --- | --- |
| ANY | - |
| DATA | - |
| VIDEO | - |
| AUDIO | - |

### ContentType

25.0

| Name | Description |
| --- | --- |
| ANY | - |
| SEQUENCE | - |
| MEDIA | - |

### ProjectItemColorLabel

25.0

| Name | Description |
| --- | --- |
| VIOLET | - |
| IRIS | - |
| LAVENDER | - |
| CERULEAN | - |
| FOREST | - |
| ROSE | - |
| MANGO | - |
| PURPLE | - |
| BLUE | - |
| TEAL | - |
| MAGENTA | - |
| TAN | - |
| GREEN | - |
| BROWN | - |
| YELLOW | - |

### TransitionPosition

25.0

| Name | Description |
| --- | --- |
| START | - |
| END | - |

### TrackItemType

25.0

| Name | Description |
| --- | --- |
| EMPTY | - |
| CLIP | - |
| TRANSITION | - |
| PREVIEW | - |
| FEEDBACK | - |

### ProjectEvent

25.0

| Name | Description |
| --- | --- |
| OPENED | - |
| CLOSED | - |
| DIRTY | - |
| ACTIVATED | - |
| `PROJECT_ITEM_SELECTION_CHANGED` | - |

### InterpolationMode

25.0

| Name | Description |
| --- | --- |
| BEZIER | - |
| HOLD | - |
| LINEAR | - |
| TIME | - |
| `TIME_TRANSITION_END` | - |
| `TIME_TRANSITION_START` | - |

### SequenceOperation

25.0

| Name | Description |
| --- | --- |
| APPLYCUT | - |
| CREATEMARKER | - |
| CREATESUBCLIP | - |

### PropertyType

25.0

| Name | Description |
| --- | --- |
| PERSISTENT | - |
| `NON_PERSISTENT` | - |

### SequenceEvent

25.0

| Name | Description |
| --- | --- |
| ACTIVATED | - |
| CLOSED | - |
| `SELECTION_CHANGED` | - |

### VideoTrackEvent

25.0

| Name | Description |
| --- | --- |
| `TRACK_CHANGED` | - |
| `INFO_CHANGED` | - |
| `LOCK_CHANGED` | - |

### AudioTrackEvent

25.0

| Name | Description |
| --- | --- |
| `TRACK_CHANGED` | - |
| `INFO_CHANGED` | - |
| `LOCK_CHANGED` | - |

### EncoderEvent

25.0

| Name | Description |
| --- | --- |
| `RENDER_COMPLETE` | - |
| `RENDER_ERROR` | - |
| `RENDER_CANCEL` | - |
| `RENDER_QUEUE` | - |
| `RENDER_PROGRESS` | - |

### ScratchDiskFolderType

25.0

| Name | Description |
| --- | --- |
| CAPTURE | - |
| `AUDIO_PREVIEW` | - |
| `VIDEO_PREVIEW` | - |
| `AUTO_SAVE` | - |
| `CCL_LIBRARIES` | - |
| `CAPSULE_MEDIA` | - |

### ScratchDiskFolder

25.0

| Name | Description |
| --- | --- |
| `SAME_AS_PROJECT` | - |
| `MY_DOCUMENTS` | - |

### MetadataType

25.0

| Name | Description |
| --- | --- |
| INTEGER | - |
| REAL | - |
| TEXT | - |
| BOOLEAN | - |

### ExportType

25.0

| Name | Description |
| --- | --- |
| `QUEUE_TO_AME` | - |
| `QUEUE_TO_APP` | - |
| IMMEDIATELY | - |

### PreferenceKey

25.0

| Name | Description |
| --- | --- |
| `AUTO_PEAK_GENERATION` | - |
| `IMPORT_WORKSPACE` | - |
| `SHOW_QUICKSTART_DIALOG` | - |

### SnapEvent

25.0

| Name | Description |
| --- | --- |
| KEYFRAME | - |
| `RAZOR_PLAYHEAD` | - |
| `RAZOR_MARKER` | - |
| TRACKITEM | - |
| GUIDES | - |
| `PLAYHEAD_TRACKITEM` | - |

### OperationCompleteEvent

25.0

| Name | Description |
| --- | --- |
| `CLIP_EXTEND_REACHED` | - |
| `EFFECT_DROP_COMPLETE` | - |
| `EFFECT_DRAG_OVER` | - |
| `EXPORT_MEDIA_COMPLETE` | - |
| `GENERATIVE_EXTEND_COMPLETE` | - |
| `IMPORT_MEDIA_COMPLETE` | - |

### OperationCompleteState

25.0

| Name | Description |
| --- | --- |
| SUCCESS | - |
| CANCELLED | - |
| FAILED | - |

### PixelAspectRatio

25.0

| Name | Description |
| --- | --- |
| SQUARE | - |
| DVNTSC | - |
| DVNTSCWide | - |
| DVPAL | - |
| DVPALWide | - |
| Anamorphic | - |
| HDAnamorphic1080 | - |
| DVCProHD | - |

### VideoFieldType

25.0

| Name | Description |
| --- | --- |
| PROGRESSIVE | - |
| `UPPER_FIRST` | - |
| `LOWER_FIRST` | - |

### VideoDisplayFormatType

25.0

| Name | Description |
| --- | --- |
| `FPS_23_976` | - |
| `FPS_25` | - |
| `FPS_29_97` | - |
| `FPS_29_97_NON_DROP` | - |
| `FEET_FRAME_16`mm | - |
| `FEET_FRAME_35`mm | - |
| FRAMES | - |

### AudioChannelType

25.0

| Name | Description |
| --- | --- |
| MONO | - |
| STEREO | - |
| `SURROUND_51` | - |
| MULTI | - |

### AudioDisplayFormatType

25.0

| Name | Description |
| --- | --- |
| `SAMPLE_RATE` | - |
| MILLISECONDS | - |

### MarkerColor

25.0

| Name | Description |
| --- | --- |
| GREEN | - |
| RED | - |
| MAGENTA | - |
| ORANGE | - |
| YELLOW | - |
| BLUE | - |
| CYAN | - |

## OperationCompleteEvent — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| state | _number_ | R | 25.0 | Reports the completed operation outcome: Success, Cancelled, or Failed. |

### OperationCompleteEvent — Events

| Name | Version | Description |
| --- | --- | --- |
| `EVENT_IMPORT_MEDIA_COMPLETE` | 25.0 | Fires after a media import operation finishes. |
| `EVENT_EXPORT_MEDIA_COMPLETE` | 25.0 | Fires after a media export operation finishes. |
| `EVENT_EFFECT_DROP_COMPLETE` | 25.0 | Fires when an effect is dropped on a trackitem |
| `EVENT_EFFECT_DRAG_OVER` | 25.0 | Fires when an effect is dragged over a trackitem |
| `EVENT_CLIP_EXTEND_REACHED` | 25.0 | Fires after a clip reaches its maximum extend limit. |
| `EVENT_GENERATIVE_EXTEND_COMPLETE` | 25.0 | Fires after a generative extend operation finishes. |

## ProjectClosedEvent — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| name | _string_ | R | 25.0 | Name of the project. |
| path | _string_ | R | 25.0 | Project file's absolute file path. |
| id | _string_ | R | 25.0 | Unique project identifier. |

### ProjectClosedEvent — Events

| Name | Version | Description |
| --- | --- | --- |
| `EVENT_CLOSED` | 25.0 | Fires when a project has been closed. |

## ProjectEvent — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| name | _string_ | R | 25.0 | Name of the project. |
| path | _string_ | R | 25.0 | Project file's absolute file path. |
| id | _string_ | R | 25.0 | Unique project identifier. |
| project | _Project_ | R | 25.0 | Project object instance. |

### ProjectEvent — Events

| Name | Version | Description |
| --- | --- | --- |
| `EVENT_OPENED` | 25.0 | Fires when a project has been opened. |
| `EVENT_ACTIVATED` | 25.0 | Fires when the active project changes |
| `EVENT_DIRTY` | 25.0 | Fires when the project's dirty state changes. |

## Premiere API — Overview

Use the following line to access the Premiere DOM through UXP.

```javascript
const app = require("premierepro");
```

After that import, you can open documents, change them, execute menu items, and do other work.

### Minimum Version

Properties and methods now include minimum version details. The version tag maps to the Premiere version where that member first appeared or received a significant update.
For properties, look at the "MIN VERSION" column. For methods, the version number is shown in a tag to the right of the name.

### Premiere API — Synchronous vs Asynchronous

ExtendScript (and CEP) differed from UXP in Premiere in one key way: every ExtendScript call into Premiere ran synchronously. While those calls executed, the Premiere UI was blocked. In UXP, method calls are _asynchronous_, so the UI thread is not blocked.

To ease movement from the ExtendScript DOM to the UXP DOM, the API keeps all property accessors (get and set) _synchronous_, so they do not require `await`. Under the hood, however, those operations are still asynchronous in nature.

### Premiere API — Working with Premiere Objects

### Premiere Application

The [`app`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/ppro-reference/index.md#overview) object is the route into the other Premiere objects and methods.

Retrieve the currently active project with:

```javascript
const project = await app.Project.getActiveProject();
```

From that project, request the active sequence this way:

```javascript
const sequence = await project.getActiveSequence();
```

### Premiere API — Useful links

- [Typescript Declaration NPM package](https://github.com/adobe/premierepro-types)
