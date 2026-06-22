# Audition (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/\*\*

- Metadata exposes metadata for a document.
  \*/
  declare class Metadata {
  /\*\*
  - XMP metadata string for the associated document.
    \*/
    xmp: string
    }

/\*\*

- DynamicLink exposes DynamicLink objects.
  \*/
  declare class DynamicLink {
  /\*\*
  - AMEServer object ID.
    \*/
    static readonly AMEServer: string

/\*\*

- \*/
  static \_\_(): any

/\*\*

-
- @param name Creates a connection to the named DynaicLink object.
  \*/
  static createConnection(name: string): object
  }

/\*\*

- Event object for connection-status updates.
  \*/
  declare class DynamicLinkConnectionEvent {
  /\*\*
  - This event type is sent when the connection state for a DynamikLink server object changes.
  - Event type for a DynamikLink server-object connection-state change.
    \*/
    static readonly `EVENT_CONNECTION`: string

/\*\*

- Returns connection status.
  \*/
  readonly isConnected: boolean

/\*\*

- Returns the server name.
  \*/
  readonly serverName: string

/\*\*

- \*/
  static \_\_(): any
  }

/\*\*

- UIControl event payload.
  \*/
  declare class UIControlEvent {
  /\*\*
- A UI control is about to update its value.
  \*/
  static readonly `EVENT_VALUE_CHANGED`: string

/\*\*

- Absolute path to the UI control.
  \*/
  readonly ctrlPath: string

/\*\*

- \*/
  static \_\_(): any
  }

/\*\*

- Object for one multitrack document.
  \*/
  declare class MultitrackDocument {
  /\*\*
  - All currently selected audio clips in this multitrack document.
    \*/
    readonly audioClipSelection: AudioClipSelectionCollection

/\*\*

- All audio tracks in the multitrack document.
  \*/
  readonly audioTracks: MixedAudioTrackCollection

/\*\*

- UI display name for the document. It is not necessarily the file name without its extension.
  \*/
  readonly displayName: string

/\*\*

- Duration, in samples.
  \*/
  readonly duration: number

/\*\*

- Unique ID for this document.
  \*/
  readonly id: string

/\*\*

- Provides marker objects as an array. Each entry includes 'start', 'length', 'name', 'description', and 'type'.
  \*/
  readonly markers: any[]

/\*\*

- Provides current document metadata as a plain Object. Each readonly property corresponds to one metadata entry.
  \*/
  readonly metadata: Metadata

/\*\*

- Returns the document path on disk in platform-specific form, or an empty string when no path is currently assigned.
  \*/
  readonly path: string

/\*\*

- Current playhead position, in samples.
  \*/
  playheadPosition: number

/\*\*

- Current document audio sample rate (Hz).
  \*/
  readonly sampleRate: number

/\*\*

- Brings the current document to the front as the active document.
  \*/
  activate(): boolean

/\*\*

-
- @param start
- @param duration
- @param name
- @param type
- @param description Creates a document marker. Marker type values: 'cue' 'track' 'cart' 'subclip'.
  \*/
  addMarker(
  start: number,
  duration: number,
  name: string,
  type: string,
  description: string,
  ): boolean

/\*\*

- Closes the document. Returns false when current document operations prevent closing.
  \*/
  closeDocument(): boolean
  }

/\*\*

- Represents a waveform document.
  \*/
  declare class WaveDocument {
  /\*\*
  - Document audio format: sample rate, bit depth, and channel layout.
    \*/
    readonly audioFormat: object

/\*\*

- Returns progress from 0 to 100 for the document's active operation.
  \*/
  readonly busyProgress: number

/\*\*

- UI display name for the document. It is not necessarily the file name without its extension.
  \*/
  readonly displayName: string

/\*\*

- Duration, in samples.
  \*/
  readonly duration: number

/\*\*

- true when the document exists.
  \*/
  readonly exists: boolean

/\*\*

- Unique ID for this document.
  \*/
  readonly id: string

/\*\*

- true when the document is busy, such as while saving.
  \*/
  readonly isBusy: boolean

/\*\*

- Provides marker objects as an array. Each entry includes 'start', 'length', 'name', 'description', and 'type'.
  \*/
  readonly markers: any[]

/\*\*

- Provides current document metadata as a plain Object. Each readonly property corresponds to one metadata entry.
  \*/
  readonly metadata: Metadata

/\*\*

- Returns the document path on disk in platform-specific form, or an empty string when no path is currently assigned.
  \*/
  readonly path: string

/\*\*

- Current playhead position, in samples.
  \*/
  playheadPosition: number

/\*\*

- Current document audio sample rate (Hz).
  \*/
  readonly sampleRate: number

/\*\*

- Brings the current document to the front as the active document.
  \*/
  activate(): boolean

/\*\*

-
- @param start
- @param duration
- @param name
- @param type
- @param description Creates a document marker. Marker type values: 'cue' 'track' 'cart' 'subclip'.
  \*/
  addMarker(
  start: number,
  duration: number,
  name: string,
  type: string,
  description: string,
  ): boolean

/\*\*

-
- @param name Applies a registered favorite to this document.
  \*/
  applyFavorite(name: string): boolean

/\*\*

- Closes the document. Returns false when current document operations prevent closing.
  \*/
  closeDocument(): boolean

/\*\*

-
- @param path
- @param export* Saves the document at the specified path. When parameter 'export' is true, performs an export. Returns true on success.
  \*/
  saveAs(path: string, export*: boolean): boolean
  }

/\*\*

- Audio tracks for the associated multitrack document.
  \*/
  declare class AudioTrackCollection {
  /\*\*
  - Returns an audio track for the supplied index.
    \*/
    readonly index: AudioTrack

/\*\*

- Audio track count.
  \*/
  readonly length: number

/\*\*

-
- @param layout Adds a new track.
  \*/
  add(layout: AudioChannelLayout): AudioTrack

/\*\*

-
- @param name Returns the audio track with this name.
  \*/
  getAudioTrack(name: string): AudioTrack

/\*\*

-
- @param track Removes a track.
  \*/
  remove(track: AudioTrack): boolean
  }

/\*\*

- Models one audio track in a multitrack session.
  \*/
  declare class AudioTrack {
  /\*\*
  - Audio bus track type.
    \*/
    static readonly `AUDIOTRACKTYPE_BUS`: number

/\*\*

- Audio clip track type.
  \*/
  static readonly `AUDIOTRACKTYPE_CLIP`: number

/\*\*

- Audio master track type.
  \*/
  static readonly `AUDIOTRACKTYPE_MASTER`: number

/\*\*

- Unknown track type.
  \*/
  static readonly `AUDIOTRACKTYPE_UNKOWN`: number

/\*\*

- \*/
  readonly ancestor: any

/\*\*

- true when this track is armed for record.
  \*/
  armed: boolean

/\*\*

- All currently selected audio clips on this track.
  \*/
  readonly audioClipSelection: AudioClipSelectionCollection

/\*\*

- All audio clips on this track.
  \*/
  readonly audioClips: AudioClipCollection

/\*\*

- Track audio format: sample rate, bit depth, and channel layout.
  \*/
  readonly audioFormat: object

/\*\*

- Unique ID for the track.
  \*/
  readonly id: number

/\*\*

- true when this track is muted.
  \*/
  mute: boolean

/\*\*

- Gets this track's name.
  \*/
  name: string

/\*\*

- Track selection state.
  \*/
  selected: boolean

/\*\*

- true when this track is soloed.
  \*/
  solo: boolean

/\*\*

- Track type. Allowed constants: `AUDIOTRACKTYPE_CLIP`, `AUDIOTRACKTYPE_BUS`, `AUDIOTRACKTYPE_MASTER`, or `AUDIOTRACKTYPE_UNKOWN`.
  \*/
  readonly type: number

/\*\*

- \*/
  static \_\_(): any

/\*\*

- \*/
  static addEventListener(): any

/\*\*

- \*/
  static removeEventListener(): any
  }

/\*\*

- AudioFormat stores sample rate, bit depth, and channel layout.
  \*/
  declare class AudioFormat {
  /\*\*
  - 16 bit signed integer
    \*/
    static readonly `SAMPLETYPE_16`: number

/\*\*

- 24 bit signed integer
  \*/
  static readonly `SAMPLETYPE_24`: number

/\*\*

- 32 bit floating point
  \*/
  static readonly `SAMPLETYPE_32`: number

/\*\*

- 8 bit unsigned integer
  \*/
  static readonly `SAMPLETYPE_8`: number

/\*\*

- Sample bit depth plus data format. Normalized values include 8 bit unsigned integer, little-endian 16 bit signed integer, packed little-endian 24 bit signed integer, or 32 bit floating point (range -1.0 to 1.0).
  \*/
  bitDepth: number

/\*\*

- Channel layout.
  \*/
  channelLayout: object

/\*\*

- Sample rate.
  \*/
  sampleRate: number

/\*\*

-
- @param samplerate
- @param bitDepth
- @param channelLayout Creates AudioFormat.
  \*/
  constructor(samplerate: number, bitDepth: number, channelLayout: AudioChannelLayout)

/\*\*

- \*/
  static \_\_(): any
  }

/\*\*

- Selected audio clip collection.
  \*/
  declare class AudioClipSelectionCollection {
  /\*\*
  - Returns an audio clip for the supplied index.
    \*/
    readonly index: AudioClipCollection

/\*\*

- Audio clip count.
  \*/
  readonly length: number

/\*\*

-
- @param AudioClip Adds a clip to the selection.
  \*/
  add(AudioClip: any): object

/\*\*

- Clears the selection.
  \*/
  clear(): boolean

/\*\*

-
- @param AudioClipSelectionCollection Removes a clip from the selection.
  \*/
  remove(AudioClipSelectionCollection: any): boolean
  }

/\*\*

- Fired when one or more document-related events occur.
  \*/
  declare class AudioClipEvent {
  /\*\*
  - Fired after a clip has been added to a multitrack document.
    \*/
    static readonly `EVENT_ADDED`: string

/\*\*

- Fired after a clip has moved within a multitrack document.
  \*/
  static readonly `EVENT_MOVED`: string

/\*\*

- Fired after a clip has been removed from a multitrack document.
  \*/
  static readonly `EVENT_REMOVED`: string

/\*\*

- Clip unique ID.
  \*/
  readonly clipID: string

/\*\*

- Document unique ID.
  \*/
  readonly documentID: string

/\*\*

- Document file path.
  \*/
  readonly path: string

/\*\*

- Track unique ID.
  \*/
  readonly trackID: number

/\*\*

- Track name.
  \*/
  readonly trackName: string

/\*\*

- \*/
  static \_\_(): any
  }

/\*\*

- Audio clips for the associated audio track.
  \*/
  declare class AudioClipCollection {
  /\*\*
  - Returns an audio clip for the supplied index.
    \*/
    readonly index: AudioClipCollection

/\*\*

- Audio clip count.
  \*/
  readonly length: number

/\*\*

-
- @param AudioClip
- @param sourceChannelRouting Adds a new clip to the track from the passed document, or moves the supplied clip into this track.
  \*/
  add(AudioClip: any, sourceChannelRouting: any): object

/\*\*

-
- @param AudioClipCollection Removes a clip from this track.
  \*/
  remove(AudioClipCollection: any): boolean
  }

/\*\*

- Object for one audio clip within a multitrack session.
  \*/
  declare class AudioClip {
  /\*\*
  - \*/
    readonly ancestor: any

/\*\*

- Clip audio format: sample rate, bit depth, and channel layout.
  \*/
  readonly audioFormat: object

/\*\*

- Clip end time in samples at the multitrack document's sample rate; exclusive.
  \*/
  readonly endTime: number

/\*\*

- Unique ID for the clip.
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

- Selection state for this audio clip.
  \*/
  readonly selected: boolean

/\*\*

- Maps source channels to clip channels. The array stores source-channel indices routed to the corresponding clip channels. It must contain one source-channel index for each clip channel, and each source channel can route to exactly one clip channel.
  \*/
  sourceChannelRouting: any[]

/\*\*

- Clip start time in samples at the multitrack document's sample rate.
  \*/
  startTime: number
  }

/\*\*

- AudioChannelLayout models a channel layout. Named channel constants use AUDIOCHANNELLABEL* ..., and layouts can be built from an Array of those constants or from a CHANNELLAYOUT* ... constant for common layouts.
  \*/
  declare class AudioChannelLayout {
  /\*\*
  - Ambisonic-W
    \*/
    static readonly `AUDIOCHANNELLABEL_AMBISONIC_W`: number

/\*\*

- Ambisonic-X
  \*/
  static readonly `AUDIOCHANNELLABEL_AMBISONIC_X`: number

/\*\*

- Ambisonic-Y
  \*/
  static readonly `AUDIOCHANNELLABEL_AMBISONIC_Y`: number

/\*\*

- Ambisonic-Z
  \*/
  static readonly `AUDIOCHANNELLABEL_AMBISONIC_Z`: number

/\*\*

- Back-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_BACKCENTER`: number

/\*\*

- Back-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_BACKLEFT`: number

/\*\*

- Back-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_BACKRIGHT`: number

/\*\*

- Bottom-Front-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_BOTTOMFRONTCENTER`: number

/\*\*

- Bottom-Front-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_BOTTOMFRONTLEFT`: number

/\*\*

- Bottom-Front-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_BOTTOMFRONTRIGHT`: number

/\*\*

- Discrete
  \*/
  static readonly `AUDIOCHANNELLABEL_DISCRETE`: number

/\*\*

- Front-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_FRONTCENTER`: number

/\*\*

- Front-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_FRONTLEFT`: number

/\*\*

- Front-Left-Of-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_FRONTLEFTOFCENTER`: number

/\*\*

- Front-Left-Wide
  \*/
  static readonly `AUDIOCHANNELLABEL_FRONTLEFTWIDE`: number

/\*\*

- Front-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_FRONTRIGHT`: number

/\*\*

- Front-Right-Of-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_FRONTRIGHTOFCENTER`: number

/\*\*

- Front-Right-Wide
  \*/
  static readonly `AUDIOCHANNELLABEL_FRONTRIGHTWIDE`: number

/\*\*

- Left-Height
  \*/
  static readonly `AUDIOCHANNELLABEL_LEFTHEIGHT`: number

/\*\*

- Left-Total
  \*/
  static readonly `AUDIOCHANNELLABEL_LEFTTOTAL`: number

/\*\*

- LFE2
  \*/
  static readonly `AUDIOCHANNELLABEL_LFE2`: number

/\*\*

- Low-Frequency
  \*/
  static readonly `AUDIOCHANNELLABEL_LOWFREQUENCY`: number

/\*\*

- Proximity-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_PROXIMITYLEFT`: number

/\*\*

- Proximity-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_PROXIMITYRIGHT`: number

/\*\*

- Rear-Surround-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_REARSURROUNDLEFT`: number

/\*\*

- Rear-Surround-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_REARSURROUNDRIGHT`: number

/\*\*

- Right-Height
  \*/
  static readonly `AUDIOCHANNELLABEL_RIGHTHEIGHT`: number

/\*\*

- Right-Total
  \*/
  static readonly `AUDIOCHANNELLABEL_RIGHTTOTAL`: number

/\*\*

- Side-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_SIDELEFT`: number

/\*\*

- Side-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_SIDERIGHT`: number

/\*\*

- Top-Back-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_TOPBACKCENTER`: number

/\*\*

- Top-Back-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_TOPBACKLEFT`: number

/\*\*

- Top-Back-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_TOPBACKRIGHT`: number

/\*\*

- Top-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_TOPCENTER`: number

/\*\*

- Top-Front-Center
  \*/
  static readonly `AUDIOCHANNELLABEL_TOPFRONTCENTER`: number

/\*\*

- Top-Front-Left
  \*/
  static readonly `AUDIOCHANNELLABEL_TOPFRONTLEFT`: number

/\*\*

- Top-Front-Right
  \*/
  static readonly `AUDIOCHANNELLABEL_TOPFRONTRIGHT`: number

/\*\*

- 6-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_51`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
  \*/
  static readonly `CHANNELLAYOUT_7_1`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency Front-Left-Of-Center Front-Right-Of-Center
  \*/
  static readonly `CHANNELLAYOUT_7_1EMAGIC`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
  \*/
  static readonly `CHANNELLAYOUT_7_1ITU`: number

/\*\*

- 8-channel layout: Front-Center Front-Left-Of-Center Front-Right-Of-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_7_1MPEG`: number

/\*\*

- 4-channel layout: Ambisonic-W Ambisonic-X Ambisonic-Y Ambisonic-Z
  \*/
  static readonly `CHANNELLAYOUT_AMBISONICSBFORMAT`: number

/\*\*

- 2-channel layout: Bottom-Front-Left Bottom-Front-Right
  \*/
  static readonly `CHANNELLAYOUT_BFL_BFR`: number

/\*\*

- 6-channel layout: Front-LeftFront-Right Front-Center Low-Frequency Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_BROADCAST51`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_CUBE`: number

/\*\*

- 2-channel layout: Front-Center Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_C_LFE`: number

/\*\*

- 3-channel layout: Front-Center Front-Left Front-Right
  \*/
  static readonly `CHANNELLAYOUT_C_L_R`: number

/\*\*

- 4-channel layout: Front-Center Front-Left Front-Right Back-Center
  \*/
  static readonly `CHANNELLAYOUT_C_L_R_CS`: number

/\*\*

- 5-channel layout: Front-Center Front-Left Front-Right Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_C_L_R_LS_RS`: number

/\*\*

- 6-channel layout: Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center
  \*/
  static readonly `CHANNELLAYOUT_C_L_R_LS_RS_CS`: number

/\*\*

- 7-channel layout: Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_C_L_R_LS_RS_CS_LFE`: number

/\*\*

- 6-channel layout: Front-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_C_L_R_LS_RS_LFE`: number

/\*\*

- 7-channel layout: Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
  \*/
  static readonly `CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS`: number

/\*\*

- 8-channel layout: Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right Back-Center
  \*/
  static readonly `CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS_CS`: number

/\*\*

- 6-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center
  \*/
  static readonly `CHANNELLAYOUT_HEXAGONAL`: number

/\*\*

- 2-channel layout: Front-Left-Of-Center Front-Right-Of-Center
  \*/
  static readonly `CHANNELLAYOUT_LC_RC`: number

/\*\*

- 6-channel layout: Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_LEGACY51`: number

/\*\*

- 2-channel layout: Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_LSD_RSD`: number

/\*\*

- 2-channel layout: Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_LS_RS`: number

/\*\*

- 3-channel layout: Front-Left Front-Center Front-Right
  \*/
  static readonly `CHANNELLAYOUT_L_C_R`: number

/\*\*

- 4-channel layout: Front-Left Front-Center Front-Right Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_C_R_CS`: number

/\*\*

- 5-channel layout: Front-Left Front-Center Front-Right Back-Center Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_L_C_R_CS_LFE`: number

/\*\*

- 4-channel layout: Front-Left Front-Center Front-Right Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_L_C_R_LFE`: number

/\*\*

- 5-channel layout: Front-Left Front-Center Front-Right Back-Left Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_C_R_LS_RS`: number

/\*\*

- 6-channel layout: Front-Left Front-Center Front-Right Back-Left Back-Right Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_L_C_R_LS_RS_LFE`: number

/\*\*

- 3-channel layout: Front-Left Front-Right Front-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C`: number

/\*\*

- 3-channel layout: Front-Left Front-Right Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_CS`: number

/\*\*

- 4-channel layout: Front-Left Front-Right Back-Center Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_L_R_CS_LFE`: number

/\*\*

- 4-channel layout: Front-Left Front-Right Front-Center Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_CS`: number

/\*\*

- 4-channel layout: Front-Left Front-Right Front-Center Low-Frequency
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE`: number

/\*\*

- 5-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_CS`: number

/\*\*

- 7-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS`: number

/\*\*

- 9-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_LSD_RSD`: number

/\*\*

- 14-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR`: number

/\*\*

- 9-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_LC_RC_CS`: number

/\*\*

- 8-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD`: number

/\*\*

- 10-channel layout: Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right Left-Height Right-Height
  \*/
  static readonly `CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD_TSL_TSR`: number
