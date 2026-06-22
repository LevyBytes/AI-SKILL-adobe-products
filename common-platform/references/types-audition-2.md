# Audition (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- 8-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Proximity-Left Proximity-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_PL_PR`: number

/\*\*

- 12-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHC_VHR_TBL_TBR`: number

/\*\*

- 11-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHR_TBL_TBR`: number

/\*\*

- 10-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_VHL_VHR_TBL_TBR`: number

/\*\*

- 5-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS`: number

/\*\*

- 6-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_CS`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_CS_LSD_RSD`: number

/\*\*

- 13-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR`: number

/\*\*

- 7-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_LC_RC`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_LC_RC_CS`: number

/\*\*

- 7-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_LSD_RSD`: number

/\*\*

- 11-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHC_VHR_TBL_TBR`: number

/\*\*

- 10-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHR_TBL_TBR`: number

/\*\*

- 9-channel layout: Front-Left Front-Right Front-Center Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LS_RS_VHL_VHR_TBL_TBR`: number

/\*\*

- 3-channel layout: Front-Left Front-Right Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_L_R_LFE`: number

/\*\*

- 4-channel layout: Front-Left Front-Right Low-Frequency Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_LFE_CS`: number

/\*\*

- 5-channel layout: Front-Left Front-Right Low-Frequency Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_LFE_LS_RS`: number

/\*\*

- 7-channel layout: Front-Left Front-Right Low-Frequency Back-Left Back-Right Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_LFE_LS_RS_LSD_RSD`: number

/\*\*

- 9-channel layout: Front-Left Front-Right Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Bottom-Front-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_LFE_LS_RS_VHL_VHC_VHR_BFC`: number

/\*\*

- 5-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_LS_RS_C`: number

/\*\*

- 7-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center Front-Left-Of-Center Front-Right-Of-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_LS_RS_C_LC_RC`: number

/\*\*

- 7-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center Rear-Surround-Left Rear-Surround-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_LS_RS_C_RLS_RRS`: number

/\*\*

- 5-channel layout: Front-Left Front-Right Back-Left Back-Right Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_L_R_LS_RS_LFE`: number

/\*\*

- 6-channel layout: Front-Left Front-Right Back-Left Back-Right Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_LS_RS_LSD_RSD`: number

/\*\*

- 2-channel layout: Left-Total Right-Total
  \*/
  static readonly `CHANNELLAYOUT_MATRIXSTEREO`: number

/\*\*

- 1-channel layout: Discrete
  \*/
  static readonly `CHANNELLAYOUT_MONO`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_OCTAGONAL`: number

/\*\*

- 5-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center
  \*/
  static readonly `CHANNELLAYOUT_PENTAGONAL`: number

/\*\*

- 4-channel layout: Front-Left Front-Right Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_QUADRAPHONIC`: number

/\*\*

- 16-channel layout: Discrete Discrete Front-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDIGITALCINEMA1`: number

/\*\*

- 16-channel layout: Left-Total Right-Total Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDIGITALCINEMA2`: number

/\*\*

- 16-channel layout: Front-Left Front-Right Front-Center Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDIGITALCINEMA4`: number

/\*\*

- 16-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDIGITALCINEMA6`: number

/\*\*

- 16-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDIGITALCINEMA7`: number

/\*\*

- 16-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDIGITALCINEMA8`: number

/\*\*

- 16-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDIGITALCINEMA9`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Total Right-Total
  \*/
  static readonly `CHANNELLAYOUT_SMPTEDTV`: number

/\*\*

- 2 Channel layout: Front-Left Front-Right
  \*/
  static readonly `CHANNELLAYOUT_STEREO`: number

/\*\*

- 2 Channel layout: Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_TBL_TBR`: number

/\*\*

- 2 Channel layout: Left-Height Right-Height
  \*/
  static readonly `CHANNELLAYOUT_TSL_TSR`: number

/\*\*

- 2 Channel layout: Top-Front-Left Top-Front-Right
  \*/
  static readonly `CHANNELLAYOUT_VHL_VHR`: number

/\*\*

- 12 Channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
  \*/
  static readonly `CHANNELLAYOUT_VST10_2`: number

/\*\*

- 14 Channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
  \*/
  static readonly `CHANNELLAYOUT_VST10_2_PLUS`: number

/\*\*

- 8 Channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Front-Center
  \*/
  static readonly `CHANNELLAYOUT_VST_7_1_CINE_CENTER_HIGH`: number

/\*\*

- 8 Channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right
  \*/
  static readonly `CHANNELLAYOUT_VST_7_1_CINE_FRONT_HIGH`: number

/\*\*

- 8 Channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Height Right-Height
  \*/
  static readonly `CHANNELLAYOUT_VST_7_1_CINE_SIDE_HIGH`: number

/\*\*

- 8 Channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center
  \*/
  static readonly `CHANNELLAYOUT_VST_7_1_CINE_TOP_CENTER`: number

/\*\*

- Descriptive text for the audio channel layout.
  \*/
  readonly description: string

/\*\*

- Supplies an audio channel label.
  \*/
  readonly index: number

/\*\*

- Count of audio channels.
  \*/
  readonly length: number

/\*\*

- \*/
  static \_\_(): any

/\*\*

-
- @param labels Builds an audio channel layout.
  \*/
  static createAudioChannelLayout(labels: any[]): AudioChannelLayout

/\*\*

-
- @param layout Builds a common audio channel layout.
  \*/
  static createCommonAudioChannelLayout(layout: number): AudioChannelLayout

/\*\*

-
- @param label String value for one audio channel label
  \*/
  static label(label: number): string
  }

/\*\*

- Fires when one or more document-related events occur.
  \*/
  declare class AudioTrackEvent {
  /\*\*
  - Fires after a track has been added to a multitrack document.
    \*/
    static readonly `EVENT_ADDED`: string

/\*\*

- Fires after a track has been removed from a multitrack document.
  \*/
  static readonly `EVENT_REMOVED`: string

/\*\*

- Unique document identifier.
  \*/
  readonly documentID: string

/\*\*

- Name assigned to the track.
  \*/
  readonly name: string

/\*\*

- File path for the document.
  \*/
  readonly path: string

/\*\*

- Unique track identifier.
  \*/
  readonly trackID: number

/\*\*

- \*/
  static \_\_(): any
  }

/\*\*

- Represents one clip inside a multitrack session.
  \*/
  declare class Clip {
  /\*\*
  - \*/
    readonly ancestor: any

/\*\*

- Clip end time, in samples, exclusive, using the multitrack document sample rate.
  \*/
  readonly endTime: number

/\*\*

- Unique identifier for the clip.
  \*/
  readonly id: string

/\*\*

- Document linked to this clip.
  \*/
  link: object

/\*\*

- Clip name.
  \*/
  readonly name: string

/\*\*

- Whether this audio clip is selected.
  \*/
  readonly selected: boolean

/\*\*

- Clip start time in samples, using the multitrack document sample rate.
  \*/
  readonly startTime: number
  }

/\*\*

- Represents the running application's current state.
  \*/
  declare class Application {
  /\*\*
  - Runs a scan in the amplitude statistics panel.
    \*/
    static readonly `COMMAND_ANALYSIS_SCANAMPLITUDESTATISTICS`: string

/\*\*

- Runs a scan in the frequency analysis panel.
  \*/
  static readonly `COMMAND_ANALYSIS_SCANFREQUENCYANALYSIS`: string

/\*\*

- Matches speech in one clip to speech from another clip.
  \*/
  static readonly `COMMAND_CLIP_ALIGNWITHRUBBADUB`: string

/\*\*

- Prepares the clip for Remix.
  \*/
  static readonly `COMMAND_CLIP_ANALYZEFORRETARGETING`: string

/\*\*

- Toggles automatic crossfade creation when selected clips are moved or trimmed.
  \*/
  static readonly `COMMAND_CLIP_AUTOMATICCROSSFADESENABLED`: string

/\*\*

- Places the selected clip ahead of every other clip.
  \*/
  static readonly `COMMAND_CLIP_BRINGTOFRONT`: string

/\*\*

- Opens the Clip Color dialog to change the color of the selected clip or group.
  \*/
  static readonly `COMMAND_CLIP_CLIPCOLORDIALOG`: string

/\*\*

- Changes clip gain through the Properties panel.
  \*/
  static readonly `COMMAND_CLIP_CLIPGAIN`: string

/\*\*

- Generates new trimmed files for the selected clips to reference.
  \*/
  static readonly `COMMAND_CLIP_CONVERTTOUNIQUECOPY`: string

/\*\*

- Opens the source file referenced by the selected clip for editing.
  \*/
  static readonly `COMMAND_CLIP_EDITSOURCEFILE`: string

/\*\*

- Sets the clip fade in link type to Asymmetrical.
  \*/
  static readonly `COMMAND_CLIP_FADEINASYMMETRICAL`: string

/\*\*

- Sets the clip fade in style to Cosine.
  \*/
  static readonly `COMMAND_CLIP_FADEINCOSINE`: string

/\*\*

- Adds a crossfade on the selected clip's left edge.
  \*/
  static readonly `COMMAND_CLIP_FADEINCROSSFADE`: string

/\*\*

- Sets the clip fade in style to Linear | Logarithmic.
  \*/
  static readonly `COMMAND_CLIP_FADEINLINEAR`: string

/\*\*

- Clears fade in from the selected clip.
  \*/
  static readonly `COMMAND_CLIP_FADEINNONE`: string

/\*\*

- Adds fade in to the selected clip.
  \*/
  static readonly `COMMAND_CLIP_FADEINNORMAL`: string

/\*\*

- Sets the clip fade in link type to Symmetrical.
  \*/
  static readonly `COMMAND_CLIP_FADEINSYMMETRICAL`: string

/\*\*

- Sets the clip fade out link type to Asymmetrical.
  \*/
  static readonly `COMMAND_CLIP_FADEOUTASYMMETRICAL`: string

/\*\*

- Sets the clip fade out style to Cosine.
  \*/
  static readonly `COMMAND_CLIP_FADEOUTCOSINE`: string

/\*\*

- Adds a crossfade on the selected clip's right edge.
  \*/
  static readonly `COMMAND_CLIP_FADEOUTCROSSFADE`: string

/\*\*

- Sets the clip fade out style to Linear | Logarithmic.
  \*/
  static readonly `COMMAND_CLIP_FADEOUTLINEAR`: string

/\*\*

- Clears fade out from the selected clip.
  \*/
  static readonly `COMMAND_CLIP_FADEOUTNONE`: string

/\*\*

- Adds fade out to the selected clip.
  \*/
  static readonly `COMMAND_CLIP_FADEOUTNORMAL`: string

/\*\*

- Sets the clip fade out link type to Symmetrical.
  \*/
  static readonly `COMMAND_CLIP_FADEOUTSYMMETRICAL`: string

/\*\*

- Toggles group membership for the selected clips.
  \*/
  static readonly `COMMAND_CLIP_GROUPCLIPS`: string

/\*\*

- Relinks every offline clip to media.
  \*/
  static readonly `COMMAND_CLIP_LINKALLMEDIA`: string

/\*\*

- Relinks the selected offline clip to media.
  \*/
  static readonly `COMMAND_CLIP_LINKMEDIA`: string

/\*\*

- Fixes the start time for selected clips.
  \*/
  static readonly `COMMAND_CLIP_LOCKINTIME`: string

/\*\*

- Turns clip looping on.
  \*/
  static readonly `COMMAND_CLIP_LOOP`: string

/\*\*

- Equalizes loudness across a group of clips.
  \*/
  static readonly `COMMAND_CLIP_MATCHCLIPVOLUME`: string

/\*\*

- Combines the selected clips.
  \*/
  static readonly `COMMAND_CLIP_MERGECLIPS`: string

/\*\*

- Silences audio output from the selected clips.
  \*/
  static readonly `COMMAND_CLIP_MUTE`: string

/\*\*

- Moves selected clips left, using frames when frame snapping is enabled.
  \*/
  static readonly `COMMAND_CLIP_NUDGELEFT`: string

/\*\*

- Moves selected clips left by 5, using frames when frame snapping is enabled.
  \*/
  static readonly `COMMAND_CLIP_NUDGELEFT5`: string

/\*\*

- Moves selected clips right, using frames when frame snapping is enabled.
  \*/
  static readonly `COMMAND_CLIP_NUDGERIGHT`: string

/\*\*

- Moves selected clips right by 5, using frames when frame snapping is enabled.
  \*/
  static readonly `COMMAND_CLIP_NUDGERIGHT5`: string

/\*\*

- Detaches the focus clip from its current group.
  \*/
  static readonly `COMMAND_CLIP_REMOVEFOCUSCLIPFROMGROUP`: string

/\*\*

- Renames the selected clip through the Properties panel.
  \*/
  static readonly `COMMAND_CLIP_RENAME`: string

/\*\*

- Changes clip remix settings through the Properties panel.
  \*/
  static readonly `COMMAND_CLIP_RETARGETPROPERTIES`: string

/\*\*

- Shows selected clip sources in the files panel.
  \*/
  static readonly `COMMAND_CLIP_REVEALCLIPSINFILESPANEL`: string

/\*\*

- Restores a remixed clip to its original form.
  \*/
  static readonly `COMMAND_CLIP_REVERTRETARGETEDCLIPTOORIGINAL`: string

/\*\*

- Places the selected clip behind every other clip.
  \*/
  static readonly `COMMAND_CLIP_SENDTOBACK`: string

/\*\*

- Silences Selected Clips in Time Selection.
  \*/
  static readonly `COMMAND_CLIP_SILENCESELECTEDCLIPSINRANGE`: string

/\*\*

- Divides the selected clips.
  \*/
  static readonly `COMMAND_CLIP_SPLIT`: string

/\*\*

- Divides all clips beneath the playhead while ignoring the current clip selection.
  \*/
  static readonly `COMMAND_CLIP_SPLITALL`: string

/\*\*

- Breaks the remixed clip back into its original segments.
  \*/
  static readonly `COMMAND_CLIP_SPLITRETARGETEDCLIPINTOSEGMENTS`: string

/\*\*

- Changes clip stretch settings through the Properties panel.
  \*/
  static readonly `COMMAND_CLIP_STRETCHPROPERTIES`: string

/\*\*

- Globally suspends automatic group selection so clips within a group can be selected individually.
  \*/
  static readonly `COMMAND_CLIP_SUSPENDGROUPINGTOGGLE`: string

/\*\*

- Shortens the selected clips to the time selection.
  \*/
  static readonly `COMMAND_CLIP_TRIMTOTIMESELECTION`: string

/\*\*

- Detaches selected clips from their groups.
  \*/
  static readonly `COMMAND_CLIP_UNGROUPSELECTEDCLIPS`: string

/\*\*

- Makes clipboard 1 the current clipboard.
  \*/
  static readonly `COMMAND_EDIT_ACTIVATECLIPBOARD1`: string

/\*\*

- Makes clipboard 2 the current clipboard.
  \*/
  static readonly `COMMAND_EDIT_ACTIVATECLIPBOARD2`: string

/\*\*

- Makes clipboard 3 the current clipboard.
  \*/
  static readonly `COMMAND_EDIT_ACTIVATECLIPBOARD3`: string

/\*\*

- Makes clipboard 4 the current clipboard.
  \*/
  static readonly `COMMAND_EDIT_ACTIVATECLIPBOARD4`: string

/\*\*

- Makes clipboard 5 the current clipboard.
  \*/
  static readonly `COMMAND_EDIT_ACTIVATECLIPBOARD5`: string

/\*\*

- Creates a cart timer marker.
  \*/
  static readonly `COMMAND_EDIT_ADDCARTMARKER`: string

/\*\*

- Creates a cue marker.
  \*/
  static readonly `COMMAND_EDIT_ADDCUEMARKER`: string

/\*\*

- Creates a cue point marker.
  \*/
  static readonly `COMMAND_EDIT_ADDCUEPOINTMARKER`: string

/\*\*

- Creates a cue range marker.
  \*/
  static readonly `COMMAND_EDIT_ADDCUERANGEMARKER`: string

/\*\*

- Creates a subclip marker.
  \*/
  static readonly `COMMAND_EDIT_ADDSUBCLIPMARKER`: string

/\*\*

- Creates a CD track marker.
  \*/
  static readonly `COMMAND_EDIT_ADDTRACKMARKER`: string

/\*\*

- Moves the selection in point to the beginning.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTINPOINTTOBEGINNING`: string

/\*\*

- Moves the selection in point to the end.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTINPOINTTOEND`: string

/\*\*

- Moves the selection in point left.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTINPOINTTOLEFT`: string

/\*\*

- Moves the selection in point right.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTINPOINTTORIGHT`: string

/\*\*

- Moves Left Side To Left.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTLEFTSIDETOLEFT`: string

/\*\*

- Moves Left Side To Right.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTLEFTSIDETORIGHT`: string

/\*\*

- Moves the selection out point to the beginning.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTOUTPOINTTOBEGINNING`: string

/\*\*

- Moves the selection out point to the end.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTOUTPOINTTOEND`: string

/\*\*

- Moves the selection out point left.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTOUTPOINTTOLEFT`: string

/\*\*

- Moves the selection out point right.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTOUTPOINTTORIGHT`: string

/\*\*

- Moves Right Side To Left.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTRIGHTSIDETOLEFT`: string

/\*\*

- Moves Right Side To Right.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTRIGHTSIDETORIGHT`: string

/\*\*

- Moves Selection Inward.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTSELECTIONINWARD`: string

/\*\*

- Moves Selection Outward.
  \*/
  static readonly `COMMAND_EDIT_ADJUSTSELECTIONOUTWARD`: string

/\*\*

- Brings up the Batch Process panel.
  \*/
  static readonly `COMMAND_EDIT_BATCHPROCESS`: string

/\*\*

- Sets the current selected clips stretch mode to Off.
  \*/
  static readonly `COMMAND_EDIT_CHANGESTRETCHMODE_OFF`: string

/\*\*

- Sets the current selected clips stretch mode to Realtime.
  \*/
  static readonly `COMMAND_EDIT_CHANGESTRETCHMODE_REALTIME`: string

/\*\*

- Sets the current selected clips stretch mode to Rendered.
  \*/
  static readonly `COMMAND_EDIT_CHANGESTRETCHMODE_RENDERED`: string

/\*\*

- Removes the time selection while preserving the playhead position.
  \*/
  static readonly `COMMAND_EDIT_CLEARTIMESELECTION`: string

/\*\*

- Changes the sample type for the current file.
  \*/
  static readonly `COMMAND_EDIT_CONVERTSAMPLETYPE`: string

/\*\*

- Copies the current selection onto the clipboard.
  \*/
  static readonly `COMMAND_EDIT_COPY`: string

/\*\*

- Copies the current selection and pastes it into a new file.
  \*/
  static readonly `COMMAND_EDIT_COPYTONEW`: string

/\*\*

- Crops the current file to the current selection.
  \*/
  static readonly `COMMAND_EDIT_CROP`: string

/\*\*

- Cuts the current selection.
  \*/
  static readonly `COMMAND_EDIT_CUT`: string

/\*\*

- Deletes the current selection; behavior depends on context.
  \*/
  static readonly `COMMAND_EDIT_DELETE`: string

/\*\*

- Removes every marker from the current file.
  \*/
  static readonly `COMMAND_EDIT_DELETEALLMARKERS`: string

/\*\*

- Removes selected markers from the Markers panel.
  \*/
  static readonly `COMMAND_EDIT_DELETESELECTEDMARKERS`: string

/\*\*

- Removes the track keyframes that are currently selected.
  \*/
  static readonly `COMMAND_EDIT_DELETETRACKKEYFRAMES`: string

/\*\*

- Clears the selection. In the Multitrack Editor, all clips are deselected. In the Waveform Editor, all audio samples are deselected.
  \*/
  static readonly `COMMAND_EDIT_DESELECTALL`: string

/\*\*

- Opens the original project that produced this file.
  \*/
  static readonly `COMMAND_EDIT_EDITORIGINAL`: string

/\*\*

- Exports audio from selected range markers as separate files.
  \*/
  static readonly `COMMAND_EDIT_EXPORTMARKERRANGES`: string

/\*\*

- Separates Frequency Bands to Files.
  \*/
  static readonly `COMMAND_EDIT_FREQUENCYBANDSPLITTER`: string

/\*\*

- Imports specified files and inserts them into the active CD Layout as CD tracks.
  \*/
  static readonly `COMMAND_EDIT_IMPORTANDINSERTFILESASCDTRACKS`: string

/\*\*

- Places the active file into a new CD Layout.
  \*/
  static readonly `COMMAND_EDIT_INSERTINTONEWCDLAYOUT`: string

/\*\*

- Places the active file into a new multitrack session.
  \*/
  static readonly `COMMAND_EDIT_INSERTINTONEWSESSION`: string

/\*\*

- Places the active file or selection into the most recently used session, or into a new session when none exist.
  \*/
  static readonly `COMMAND_EDIT_INSERTINTOSESSION`: string

/\*\*

- Adds selected range markers from the Markers panel to the playlist.
  \*/
  static readonly `COMMAND_EDIT_INSERTSELECTEDRANGEMARKERSINTOPLAYLIST`: string

/\*\*

- Adds silence to the current file.
  \*/
  static readonly `COMMAND_EDIT_INSERTSILENCE`: string

/\*\*

- Interprets the current file's sample rate for playback.
  \*/
  static readonly `COMMAND_EDIT_INTERPRETSAMPLERATE`: string

/\*\*

- Combines Markers panel selections into one or several range markers.
  \*/
  static readonly `COMMAND_EDIT_MERGESELECTEDMARKERS`: string

/\*\*

- Mixes clipboard contents into the file.
  \*/
  static readonly `COMMAND_EDIT_MIXPASTE`: string
