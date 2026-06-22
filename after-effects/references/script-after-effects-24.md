# After Effects 24, After Effects 23, After Effects 22, After Effects 18 ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: After Effects 24; After Effects 23; After Effects 22; After Effects 18; After Effects 17; After Effects 16; After Effects 15; After Effects 14; After Effects 13; After Effects 12; After Effects 11; After Effects 10; After Effects 9; The After Effects Object Model; After Effects Class Hierarchy; Properties, Property Groups, and Layers; Project Items; Footage Item Sources.

## After Effects 24

### Changelog — After Effects 24

### After Effects 24.6 (August 2024)

- Added: FontsObject.favoriteFontFamilyList
- Added: FontsObject.fontsDuplicateByPostScriptName
- Added: FontsObject.freezeSyncSubstitutedFonts
- Added: FontsObject.mruFontFamilyList
- Added: FontsObject.substitutedFontReplacementMatchPolicy
- Added: FontsObject.pollForAndPushNonSystemFontFoldersChanges()
- Added: TextDocument.boxAutoFitPolicy
- Added: TextDocument.boxFirstBaselineAlignment
- Added: TextDocument.boxFirstBaselineAlignmentMinimum
- Added: TextDocument.boxInsetSpacing
- Added: TextDocument.boxOverflow
- Added: TextDocument.boxVerticalAlignment

### After Effects 24.5 (May 2024)

- Added: Project.replaceFont()
- Added: Project.usedFonts

### After Effects 24.4 (May 2024)

- Added: ThreeDModelLayer object

### After Effects 24.3 (March 2024)

- Added: CharacterRange object
- Added: ParagraphRange object
- Added: ComposedLineRange object
- Added: TextDocument.characterRange()
- Added: TextDocument.composedLineCharacterIndexesAt()
- Added: TextDocument.composedLineCount
- Added: TextDocument.composedLineRange()
- Added: TextDocument.paragraphCharacterIndexesAt()
- Added: TextDocument.paragraphCount
- Added: TextDocument.paragraphRange()
- Changed: app.purge() - PurgeTarget.`ALL_CACHES` now includes the disk cache

### After Effects 24.2 (February 2024)

- Added: LayerCollection.addVerticalText()
- Added: LayerCollection.addVerticalBoxText()
- Added: TextDocument.lineOrientation
- Added: FontsObject.fontServerRevision
- Added: FontsObject.getFontByID()
- Added: FontObject.fontID

### After Effects 24.0 (October 2023)

- Added: getEnumAsString()
- Added: app.fonts
- Added: Fonts object
- Added: FontsObject.allFonts
- Added: FontsObject.fontsWithDefaultDesignAxes
- Added: FontsObject.getFontsByFamilyNameAndStyleName()
- Added: FontsObject.getFontsByPostScriptName()
- Added: FontsObject.missingOrSubstitutedFonts
- Added: Font object
- Added: FontObject.designAxesData
- Added: FontObject.designVector
- Added: FontObject.familyPrefix
- Added: FontObject.hasDesignAxes
- Added: FontObject.hasSameDict()
- Added: FontObject.postScriptNameForDesignVector()
- Added: FontObject.familyName
- Added: FontObject.fullName
- Added: FontObject.isFromAdobeFonts
- Added: FontObject.isSubstitute
- Added: FontObject.location
- Added: FontObject.nativeFamilyName
- Added: FontObject.nativeFullName
- Added: FontObject.nativeStyleName
- Added: FontObject.postScriptName
- Added: FontObject.styleName
- Added: FontObject.technology
- Added: FontObject.type
- Added: FontObject.version
- Added: FontObject.writingScripts
- Added: TextDocument.autoHyphenate
- Added: TextDocument.autoKernType
- Added: TextDocument.baselineDirection
- Added: TextDocument.composerEngine
- Added: TextDocument.digitSet
- Added: TextDocument.direction
- Added: TextDocument.endIndent
- Added: TextDocument.everyLineComposer
- Added: TextDocument.firstLineIndent
- Added: TextDocument.fontBaselineOption
- Added: TextDocument.fontCapsOption
- Added: TextDocument.fontObject
- Added: TextDocument.hangingRoman
- Added: TextDocument.kerning
- Added: TextDocument.leadingType
- Added: TextDocument.ligature
- Added: TextDocument.lineJoinType
- Added: TextDocument.noBreak
- Added: TextDocument.spaceAfter
- Added: TextDocument.spaceBefore
- Added: TextDocument.startIndent

- Updated: TextDocument.fauxBold
- Updated: TextDocument.fauxItalic
- Updated: TextDocument.justification

## After Effects 23

### Changelog — After Effects 23

### After Effects 23.0 (October 2022)

- Added: AVLayer.setTrackMatte()
- Added: AVLayer.removeTrackMatte()
- Added: AVLayer.trackMatteLayer

- Updated: AVLayer.trackMatteType
- Updated: AVLayer.isTrackMatte
- Updated: AVLayer.hasTrackMatte

## After Effects 22

### Changelog — After Effects 22

### After Effects 22.6 (August 2022)

- Added: Property.keyLabel()
- Added: Property.setLabelAtKey()

### After Effects 22.3 (April 2022)

- Added: Layer.doSceneEditDetection()

### After Effects 22.0 (October 2021)

- Added: Layer.id
- Added: Project.layerByID()
- Added: Property.essentialPropertySource

- Added: RenderQueue.queueNotify
- Added: RenderQueueItem.queueItemNotify

- Added: app.setMultiFrameRenderingConfig()

## After Effects 18

### Changelog — After Effects 18

### After Effects 18.0 (March 2021)

- Added: AVItem.isMediaReplacementCompatible
- Added: AVLayer.addToMotionGraphicsTemplate()
- Added: AVLayer.addToMotionGraphicsTemplateAs()
- Added: AVLayer.canAddToMotionGraphicsTemplate()
- Added: Property.alternateSource
- Added: Property.canSetAlternateSource
- Added: Property.setAlternateSource()
- Relevant match names were also introduced in this release.

- A match name was added for the Essential Properties property group.

## After Effects 17

### Changelog — After Effects 17

### After Effects 17.1.1 (May 2020)

- Added relevant match names

- Added CompItem.displayStartFrame
- This now aligns with the range permitted when you set the Start Timecode in the Composition Settings Dialog, namely -3:00:00:00 to 23:59:00:00.

### After Effects 17.0.1 (November 2019)

- Added: Property.isDropdownEffect
- Added: Property.setPropertyParameters()

## After Effects 16

### Changelog — After Effects 16

### After Effects 16.1

- Added: ViewOptions.guidesLocked
- Added: ViewOptions.guidesSnap
- Added: ViewOptions.guidesVisibility
- Added: ViewOptions.rulers

- Added: Item.addGuide()
- Added: Item.removeGuide()
- Added: Item.setGuide()

- Added: CompItem.motionGraphicsTemplateControllerCount
- Added: CompItem.getMotionGraphicsTemplateControllerName()
- Added: CompItem.setMotionGraphicsControllerName()
- Added: Property.addToMotionGraphicsTemplateAs()

### After Effects 16.0 (October 2018)

- Added: MarkerValue.label
- Added: MarkerValue.protectedRegion

- Added: Project.workingSpace
- Added: Project.workingGamma
- Added: Project.listColorProfiles()
- Added: Project.linearizeWorkingSpace
- Added: Project.compensateForSceneReferredProfiles

- Added: Project.expressionEngine

- A project method, Project.setDefaultImportFolder(), was added; it determines which folder appears by default in the file import dialog.
- An app property, app.disableRendering, was added; it turns off rendering through the same path used by the Caps Lock key.

## After Effects 15

### Changelog — After Effects 15

### After Effects 15.1 (April 2018)

- Expression name references wrapped in single quotes (for instance, ('Effect Name')) are now repaired by Project.autoFixExpressions(), alongside the double-quoted form it already handled.
- Corrects a case where CompItem.exportAsMotionGraphicsTemplate() failed to hand back the boolean it should have.

### After Effects 15.0 (October 2017)

- Added: CompItem.motionGraphicsTemplateName
- Added: CompItem.exportAsMotionGraphicsTemplate()
- Added: CompItem.openInEssentialGraphics()
- Added: Property.addToMotionGraphicsTemplate()
- Added: Property.canAddToMotionGraphicsTemplate()

## After Effects 14

### Changelog — After Effects 14

### After Effects 14.2.1 (CC 2017.2) (June 2017)

- ScriptUI panel buttons now go back to the rectangular look that shipped in After Effects 14.1 and earlier builds.
- Calling AVItem.setProxyToNone() from a script no longer throws the message "After Effects error: AEGP trying to add invalid footage".
- When the command behind System.callSystem() runs long, the scripting method now holds until every task it spawned has finished rather than erroring out.

### After Effects 14.2 (CC 2017.1) (April 2017)

- Added: TextDocument.leading

- Added: Project.newTeamProject()
- Added: Project.openTeamProject()
- Added: Project.shareTeamProject()
- Added: Project.syncTeamProject()
- Added: Project.closeTeamProject()
- Added: Project.convertTeamProjectToProject()
- Added: Project.listTeamProjects()
- Added: Project.isTeamProjectOpen()
- Added: Project.isAnyTeamProjectOpen()
- Added: Project.isTeamProjectEnabled()
- Added: Project.isLoggedInToTeamProject()
- Added: Project.isSyncCommandEnabled()
- Added: Project.isShareCommandEnabled()
- Added: Project.isResolveCommandEnabled()
- Added: Project.resolveConflict()

- On Windows HiDPI displays, drop-down menus inside ScriptUI panels are no longer cut off.
- Buttons, sliders, disclosure triangles ("twirly arrow"), the scroll bar, progress bar, radio buttons, and checkboxes inside embedded ScriptUI panels were restyled so they line up with native After Effects controls.
- Using AVLayer.compPointToSource() against a 3D text layer no longer brings After Effects down.
- The Fast Box Blur effect carries the match name "ADBE Box Blur2". Its earlier match name, "ADBE Box Blur", still functions: pass it when adding the effect and you get the Fast Box Blur, though under the legacy label "Box Blur", and its Iterations parameter takes the new default value of 3.

### After Effects 14.0 (CC 2017) (November 2016)

- Added: Project.toolType

- Added: CompItem.markerProperty

- Added: RenderQueue.queueInAME()

- Added: app.availableGPUAccelTypes

## After Effects 13

### Changelog — After Effects 13

### After Effects 13.8 (CC 2015.3) (June 2016)

- Added: Project.gpuAccelType

- A new Gaussian Blur effect was added carrying the match name ADBE Gaussian Blur 2

### After Effects 13.6 (CC 2015) (November 2015)

- Added: baselineLocs

- Added: generateRandomNumber()

- When a layer has a parent, calling copyToComp() from a script no longer crashes After Effects.
- Before returning a result, valueAtTime() now lets time-heavy expressions such as sampleImage finish evaluating.
- On Windows high-DPI displays, ScriptUI panels now render and resize properly.
- Clicking OK or Cancel in a ScriptUI dialog that uses tabbed panels no longer crashes After Effects.

### After Effects 13.2 (CC 2014.2) (December 2014)

    - Added: fauxBold
    - Added: fauxItalic
    - Added: allCaps
    - Added: smallCaps
    - Added: superscript
    - Added: subscript

    - Added: verticalScale
    - Added: horizontalScale
    - Added: baselineShift
    - Added: tsume

    - Added: boxTextPos

- Added: sourcePointToComp()
- Added: compPointToSource()

### After Effects 13.1 (CC 2014.1) (September 2014)

    - Added: fontLocation
    - Added: fontStyle
    - Added: fontFamily

- A "Use Legacy UI" toggle was put in place

### After Effects 13.0 (CC 2014) (June 2014)

- Added: RenderQueueItem object getSetting, setSetting methods
- Added: RenderQueueItem object getSettings, setSettings methods
- Added: OutputModule object getSetting, setSetting methods
- Added: OutputModule object getSettings, setSettings methods

- Retrieve a project item by its id with Project.itemByID()
- CEP panels were implemented

## After Effects 12

### Changelog — After Effects 12

### After Effects 12.0 (CC) (June 2013)

- Added: the version attribute on the application effects object, see app.effects

- Added: ViewOptions.fastPreview

- A layer sampling method is now reachable (see samplingQuality)
- The preference and settings methods were reworked (see Settings object)
- ScriptUI is built on the same controls that the main application uses.

## After Effects 11

### Changelog — After Effects 11

### After Effects 11.0 (CS6) (April 2012)

- Added: app.activeViewer
- Added: AVLayer.openInViewer(), which opens a layer inside the layer viewer
- Added: CompItem.openInViewer(), which opens a composition inside the composition viewer
- Added: FootageItem.openInViewer(), which opens a footage item inside the footage viewer

- Added: Property.canSetExpression
- Added: AVLayer.environmentLayer
- Added: MaskPropertyGroup.maskFeatherFalloff
  - Added: Shape.featherSegLocs
  - Added: Shape.featherRelSegLocs
  - Added: Shape.featherRadii
  - Added: Shape.featherInterps
  - Added: Shape.featherTensions
  - Added: Shape.featherTypes
  - Added: Shape.featherRelCornerAngles

## After Effects 10

### Changelog — After Effects 10

### After Effects 10.5 (CS5.5) (April 2011)

- Project.framesCountType
- Project.feetFramesFilmType
- Project.framesUseFeetFrames
- Project.footageTimecodeDisplayStartType
- Project.timeDisplayType

- timecodeDisplayType attribute
- timecodeBaseType attribute
- timecodeNTSCDropFrame attribute
- timecodeFilmType attribute
- TimecodeDisplayType enum
- TimecodeFilmType enum
- TimecodeBaseType enum

- Added: CompItem.dropFrame

  - Added LayerCollection.addBoxText()
  - Added TextDocument.boxText
  - Added TextDocument.pointText
  - Added TextDocument.boxTextSize

- Added LightLayer.lightType

## After Effects 9

### Changelog — After Effects 9

### After Effects 9.0 (CS4) (September 2008)

- Added: app.isoLanguage
- Added: MarkerValue.duration
- Added: OutputModule.includeSourceXMP
- Added: Project.xmpPacket

  - Property.dimensionsSeparated
  - Property.getSeparationFollower()
  - Property.isSeparationFollower
  - Property.isSeparationLeader
  - Property.separationDimension
  - Property.separationLeader

  - Added: TextDocument.applyFill
  - Added: TextDocument.applyStroke
  - Added: TextDocument.fillColor
  - Added: TextDocument.font
  - Added: TextDocument.fontSize
  - Added: TextDocument.justification
  - Added: TextDocument.resetCharStyle()
  - Added: TextDocument.resetParagraphStyle()
  - Added: TextDocument.strokeColor
  - Added: TextDocument.strokeOverFill
  - Added: TextDocument.strokeWidth

## The After Effects Object Model

Because this reference section runs alphabetically by object, the diagrams that follow are there to map out how the objects nest within the hierarchy and how they line up against the user interface.

Hierarchy diagram of the main After Effects scripting objects

Keep in mind that the File, Folder, and Socket objects belong to ExtendScript rather than to After Effects, and their documentation lives in the JavaScript Tools Guide.

A further piece supplied by ExtendScript is the ScriptUI module — a collection of window and interface-control objects that After Effects scripts can reach. It, too, is covered in the JavaScript Tools Guide.

Scripting mirrors the layout of the user interface in how its objects are nested.

Inside the application sits a Project panel that shows a project. That project holds compositions, compositions hold layers, and a layer's source may be a footage file, a placeholder, or a solid — each of which also shows up in the Project panel. Properties are the settings carried by each layer, and they in turn can hold markers and keyframes. Render-queue items live in the renderqueue along with render settings and output modules. Scripting exposes every one of these as an object.

Note

So that nothing is confused, "attribute" is the word this manual uses for JavaScript object properties, while "property" (or "AE property") refers to After Effects layer properties.

### Object summary

Every object is listed alphabetically in the table that follows, each linking to its own documentation page.

| Object | Description |
| --- | --- |
| Global functions | Functions reachable from anywhere; they print text useful for debugging scripts and convert time back and forth between seconds and frames. |
| Application object | One global object reached by its name (app); it opens the door to other objects and to settings inside After Effects. |
| AVItem object | Stands for audio/visual files that have been imported into After Effects. |
| AVLayer object | Stands for the layers built on AVItem objects — composition, footage, solid, text, and sound layers. |
| CameraLayer object | A camera layer living inside a composition. |
| Collection object | Groups a set of objects or values together logically and lets you reach them by index. |
| CompItem object | A composition you can change and query through this object. |
| FileSource object | Characterizes footage whose origin is a file. |
| FolderItem object | A folder shown in the Project panel. |
| FootageItem object | A footage item brought into a project that turns up in the Project panel. |
| FootageSource object | Characterizes where a piece of footage comes from as a file. |
| ImportOptions object | Wraps up the choices that govern importing files into After Effects. |
| Item object | An entry in a project that surfaces in the Project panel. |
| ItemCollection object | Gathers the items of a project. |
| KeyframeEase object | Holds the ease values for a keyframe on an After Effects property. |
| Layer object | The parent class from which the layer classes derive. |
| LayerCollection object | Gathers the layers of a project. |
| LightLayer object | A light layer living inside a composition. |
| MarkerValue object | Holds the marker values on an After Effects property. |
| MaskPropertyGroup object | Wraps up the mask attributes belonging to a layer. |
| OMCollection object | Gathers the output modules of a render queue. |
| OutputModule object | An output module attached to a render queue. |
| PlaceholderSource object | Characterizes a stand-in placeholder for footage. |
| Project object | An After Effects project. |
| Property object | An After Effects property. |
| PropertyBase object | The parent class behind the After Effects property and property-group classes. |
| PropertyGroup object | An After Effects property group. |
| RenderQueue object | The After Effects render queue. |
| RenderQueueItem object | An item in a render queue that can be rendered. |
| RenderQueueItem object | Gathers the render-queue items within a render queue. |
| RQItemCollection object | Opens access to the settings and preferences of the application. |
| Shape object | Wraps up the outline-shape data for a mask. |
| ShapeLayer object | A shape layer living inside a composition. |
| SolidSource object | Characterizes a solid color serving as the source of some footage. |
| System object | Reaches the operating system from within the application. |
| TextDocument object | Wraps up the text held in a text layer. |
| TextLayer object | A text layer living inside a composition. |
| Viewer object | A Composition, Layer, or Footage panel. |

## After Effects Class Hierarchy

The class hierarchies for the relevant AE API elements are gathered in this section. If you need background on what that entails, consult Javascript Classes.

For any object that takes part in a class hierarchy, this guide flags whether it acts as a subclass, a base class, or both relative to another object.

Since having every class hierarchy collected in one spot is handy, the list below pulls them together.

Be aware that certain classes serve only as base classes and, when checked with instanceof, behave in surprising ways, as the table notes. A class with no symbol against it behaves normally.

### Symbol Legend

| Symbol | Definition |
| --- | --- |
| ⚠ | instanceof is always false |
| ❌ | Class is undefined; instanceof will throw an error |

## Properties, Property Groups, and Layers

### After Effects Class Hierarchy — Properties, Property Groups, and Layers

- Property object

  - MaskPropertyGroup object

    - ShapeLayer object
    - TextLayer object

    - CameraLayer object
    - LightLayer object

## Project Items

### After Effects Class Hierarchy — Project Items

- CompItem object

  - FootageItem object

  - FolderItem object

## Footage Item Sources

### After Effects Class Hierarchy — Footage Item Sources

- FileSource object
  - PlaceholderSource object
  - SolidSource object

## Collections

### After Effects Class Hierarchy — Collections

- ItemCollection object
  - LayerCollection object
  - OMCollection object
  - RQItemCollection object

## Global functions

### Description

A handful of globally reachable functions exist purely for After Effects work. They are callable from inside any JavaScript object or function, and they let you push text into the compact (3-line) region of the Info panel, swap numeric time values back and forth with their string equivalents, or roll a random number.

| Global function | Description |
| --- | --- |
| clearOutput() | Clears text from the Info panel. |
| currentFormatToTime() | Converts string time value to a numeric time value. |
| generateRandomNumber() | Generates a random number. |
| getEnumAsString() | Converts an Enum value to it's string name. |
| timeToCurrentFormat() | Converts a numeric time value to a string time value. |
| write() | Writes text to the Info panel, with no line break added. |
| writeLn() | Writes text to the Info panel, adding a line break at the end. |
| isValid() | When true, the specified object exists. |

Beyond these, ExtendScript itself supplies the usual user-I/O helpers (alert, confirm , and prompt) plus the static file-I/O functions; the JavaScript Tools Guide carries the full reference for those.

## See also

- [Application](script-application.md)
