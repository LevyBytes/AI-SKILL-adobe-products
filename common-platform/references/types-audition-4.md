# Audition (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Shows Dynamic Peaks.
  \*/
  static readonly `COMMAND_METERING_DYNAMICPEAKS`: string

/\*\*

- Clears Clip Indicators.
  \*/
  static readonly `COMMAND_METERING_RESETINDICATORS`: string

/\*\*

- Sets the level meter range to 120dB.
  \*/
  static readonly `COMMAND_METERING_SET120DBRANGE`: string

/\*\*

- Sets the level meter range to 24dB.
  \*/
  static readonly `COMMAND_METERING_SET24DBRANGE`: string

/\*\*

- Sets the level meter range to 48dB.
  \*/
  static readonly `COMMAND_METERING_SET48DBRANGE`: string

/\*\*

- Sets the level meter range to 60dB.
  \*/
  static readonly `COMMAND_METERING_SET60DBRANGE`: string

/\*\*

- Sets the level meter range to 72dB.
  \*/
  static readonly `COMMAND_METERING_SET72DBRANGE`: string

/\*\*

- Sets the level meter range to 96dB.
  \*/
  static readonly `COMMAND_METERING_SET96DBRANGE`: string

/\*\*

- Shows LED-like meter bars.
  \*/
  static readonly `COMMAND_METERING_SHOWLEDMETERS`: string

/\*\*

- Shows meter bars with a color gradient.
  \*/
  static readonly `COMMAND_METERING_SHOWMETERBARSGRADIENT`: string

/\*\*

- Shows Valleys.
  \*/
  static readonly `COMMAND_METERING_SHOWVALLEYS`: string

/\*\*

- Shows Static Peaks.
  \*/
  static readonly `COMMAND_METERING_STATICPEAKS`: string

/\*\*

- Enables Input Metering.
  \*/
  static readonly `COMMAND_METERING_TOGGLEMETERINPUTSIGNAL`: string

/\*\*

- Adds a new 5.1 audio track.
  \*/
  static readonly `COMMAND_MULTITRACK_ADD51AUDIOTRACK`: string

/\*\*

- Adds a new 5.1 bus track.
  \*/
  static readonly `COMMAND_MULTITRACK_ADD51BUSTRACK`: string

/\*\*

- Adds a new mono audio track.
  \*/
  static readonly `COMMAND_MULTITRACK_ADDMONOAUDIOTRACK`: string

/\*\*

- Adds a new mono bus track.
  \*/
  static readonly `COMMAND_MULTITRACK_ADDMONOBUSTRACK`: string

/\*\*

- Adds a new stereo audio track.
  \*/
  static readonly `COMMAND_MULTITRACK_ADDSTEREOAUDIOTRACK`: string

/\*\*

- Adds a new stereo bus track.
  \*/
  static readonly `COMMAND_MULTITRACK_ADDSTEREOBUSTRACK`: string

/\*\*

- Adds a new video track.
  \*/
  static readonly `COMMAND_MULTITRACK_ADDVIDEOTRACK`: string

/\*\*

- Bounces the selected track to a new track.
  \*/
  static readonly `COMMAND_MULTITRACK_BOUNCESELECTEDTRACKTONEWTRACK`: string

/\*\*

- Creates a new track by bouncing the selected clips from the time selection.
  \*/
  static readonly `COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSINRANGE`: string

/\*\*

- Bounces only selected clips to a new track.
  \*/
  static readonly `COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSONLY`: string

/\*\*

- Bounces a time selection to a new track.
  \*/
  static readonly `COMMAND_MULTITRACK_BOUNCETONEWTRACKTIMESELECTIONRANGE`: string

/\*\*

- Deletes the currently selected track.
  \*/
  static readonly `COMMAND_MULTITRACK_DELETETRACK`: string

/\*\*

- Duplicates a track.
  \*/
  static readonly `COMMAND_MULTITRACK_DUPLICATETRACK`: string

/\*\*

- Edits the metronome pattern.
  \*/
  static readonly `COMMAND_MULTITRACK_EDITMETRONOMEPATTERN`: string

/\*\*

- Shows clip keyframe nodes and enables editing.
  \*/
  static readonly `COMMAND_MULTITRACK_ENABLECLIPKEYFRAMEEDITING`: string

/\*\*

- Toggles Solo for the Selected Track Exclusively.
  \*/
  static readonly `COMMAND_MULTITRACK_EXCLUSIVELYTOGGLESOLOFORSELECTED`: string

/\*\*

- Imports specified files and inserts them into the active session as clips.
  \*/
  static readonly `COMMAND_MULTITRACK_IMPORTANDINSERTFILESASCLIPS`: string

/\*\*

- Minimizes the currently selected track.
  \*/
  static readonly `COMMAND_MULTITRACK_MINIMIZESELECTEDTRACK`: string

/\*\*

- Mixes down the full master track output to a new unsaved file.
  \*/
  static readonly `COMMAND_MULTITRACK_MIXDOWNALLTONEWFILE`: string

/\*\*

- Mixes down master track output from selected clips to a new unsaved file.
  \*/
  static readonly `COMMAND_MULTITRACK_MIXDOWNSELECTEDCLIPSTONEWFILE`: string

/\*\*

- Mixes down master track output from the time selection to a new unsaved file.
  \*/
  static readonly `COMMAND_MULTITRACK_MIXDOWNSELECTIONTONEWFILE`: string

/\*\*

- Moves the currently selected track down.
  \*/
  static readonly `COMMAND_MULTITRACK_MOVETRACKDOWN`: string

/\*\*

- Moves the currently selected track up.
  \*/
  static readonly `COMMAND_MULTITRACK_MOVETRACKUP`: string

/\*\*

- Toggles Solo for the Selected Track Non-exclusively.
  \*/
  static readonly `COMMAND_MULTITRACK_NONEXCLUSIVELYTOGGLESOLOFORSELECTED`: string

/\*\*

- Plays hidden clips.
  \*/
  static readonly `COMMAND_MULTITRACK_PLAYHIDDENCLIPS`: string

/\*\*

- Exports the current session to a new XML file that Adobe Premiere Pro can open.
  \*/
  static readonly `COMMAND_MULTITRACK_PREMIEREPROXMLSEQUENCE`: string

/\*\*

- Moves selection onto the next track.
  \*/
  static readonly `COMMAND_MULTITRACK_SELECTNEXTTRACK`: string

/\*\*

- Moves selection onto the previous track.
  \*/
  static readonly `COMMAND_MULTITRACK_SELECTPREVIOUSTRACK`: string

/\*\*

- Sets the metronome sound type to African 1.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN1`: string

/\*\*

- Sets the metronome sound type to African 2.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN2`: string

/\*\*

- Sets the metronome sound type to Beeps.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEBEEPS`: string

/\*\*

- Sets the metronome sound type to Cymbals.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPECYMBALS`: string

/\*\*

- Sets the metronome sound type to Kit.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEKIT`: string

/\*\*

- Sets the metronome sound type to Latin 1.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN1`: string

/\*\*

- Sets the metronome sound type to Latin 2.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN2`: string

/\*\*

- Sets the metronome sound type to Latin 3.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN3`: string

/\*\*

- Use Sticks for the metronome sound type.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPESTICKS`: string

/\*\*

- Use Tabla for the metronome sound type.
  \*/
  static readonly `COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPETABLA`: string

/\*\*

- Switch Arm for Record across All Tracks.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORALL`: string

/\*\*

- Switch Arm for Record on the Selected Track.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORSELECTED`: string

/\*\*

- Turn the multitrack metronome on or off.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLEMETRONOME`: string

/\*\*

- Switch Monitor Input across All Tracks.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORALL`: string

/\*\*

- Switch Monitor Input on the Selected Track.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORSELECTED`: string

/\*\*

- Switch Mute across All Tracks.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLEMUTEFORALL`: string

/\*\*

- Switch Mute on the Selected Track.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLEMUTEFORSELECTED`: string

/\*\*

- Switch Solo across All Tracks.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLESOLOFORALL`: string

/\*\*

- Switch Solo Safe on the Selected Track.
  \*/
  static readonly `COMMAND_MULTITRACK_TOGGLESOLOSAFEFORSELECTED`: string

/\*\*

- Show Audio Channel Mapping inside the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_AUDIOCHANNELMAPPING`: string

/\*\*

- Show Audio Hardware inside the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_AUDIOHARDWARE`: string

/\*\*

- Show Auto Save within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_AUTOSAVE`: string

/\*\*

- Show Control Surface within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_CONTROLSURFACE`: string

/\*\*

- Show Data inside the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_DATA`: string

/\*\*

- Show Effects inside the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_EFFECTS`: string

/\*\*

- Show General within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_GENERAL`: string

/\*\*

- Show whichever Preferences dialog pane was used most recently.
  \*/
  static readonly `COMMAND_PREFERENCES_LASTPANE`: string

/\*\*

- Show Media & Disk Cache inside the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_MEDIA`: string

/\*\*

- Show Memory inside the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_MEMORY`: string

/\*\*

- Show Markers & Metadata within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_METADATA`: string

/\*\*

- Show Multitrack within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_MULTITRACK`: string

/\*\*

- Show Multitrack Clips within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_MULTITRACKCLIPS`: string

/\*\*

- Show Playback within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_PLAYBACK`: string

/\*\*

- Show Spectral Displays within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_SPECTRALDISPLAY`: string

/\*\*

- Show Time Display within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_TIMEDISPLAY`: string

/\*\*

- Switch preference "Enable input metering when arming tracks for record" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLEENABLEINPUTMETERING`: string

/\*\*

- Switch preference "Enable smart monitoring when arming tracks for record" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLEENABLESMARTMONITORING`: string

/\*\*

- Switch preference "Play audio while scrubbing the playhead" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLEPLAYAUDIOWHILESCRUBBING`: string

/\*\*

- Switch preference "Auto-scroll during playback and recording" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLEPLAYBACKAUTOSCROLLENABLED`: string

/\*\*

- Switch preference "Play only selected frequencies when a spectral frequency selection exists" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDFREQUENCIES`: string

/\*\*

- Switch preference "Stop at the end of the selection when playback starts within a selected region" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDREGION`: string

/\*\*

- Switch preference "Return playhead to start position on stop" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLEPLAYSTYLEISLEGACY`: string

/\*\*

- Switch preference "Centered auto-scrolling in Waveform Editor" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLEV`: string

/\*\*

- Switch preference "Centered auto-scrolling in Multitrack Editor" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLMT`: string

/\*\*

- Switch preference "Synchronize playhead selection and zoom range between documents" for Audition.
  \*/
  static readonly `COMMAND_PREFERENCES_TOGGLESYNCSELECTIONVIEWCTI`: string

/\*\*

- Show Appearance inside the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_USERINTERFACE`: string

/\*\*

- Show Video within the Preferences dialog.
  \*/
  static readonly `COMMAND_PREFERENCES_VIDEO`: string

/\*\*

- Lower opacity for the spectral frequency display brush.
  \*/
  static readonly `COMMAND_TOOLS_DECREASEBRUSHOPACITY`: string

/\*\*

- Reduce size for the spectral frequency display brush.
  \*/
  static readonly `COMMAND_TOOLS_DECREASEBRUSHSIZE`: string

/\*\*

- Select the Spot Healing Brush tool.
  \*/
  static readonly `COMMAND_TOOLS_HEALINGBRUSH`: string

/\*\*

- Raise opacity for the spectral frequency display brush.
  \*/
  static readonly `COMMAND_TOOLS_INCREASEBRUSHOPACITY`: string

/\*\*

- Enlarge size for the spectral frequency display brush.
  \*/
  static readonly `COMMAND_TOOLS_INCREASEBRUSHSIZE`: string

/\*\*

- Select the Lasso Selection tool.
  \*/
  static readonly `COMMAND_TOOLS_LASSOSELECTION`: string

/\*\*

- Select the Marquee Selection tool.
  \*/
  static readonly `COMMAND_TOOLS_MARQUEESELECTION`: string

/\*\*

- Select the Move tool.
  \*/
  static readonly `COMMAND_TOOLS_MOVE`: string

/\*\*

- Select the Paintbrush Selection tool.
  \*/
  static readonly `COMMAND_TOOLS_PAINTBRUSHSELECTION`: string

/\*\*

- Select the active Razor tool, or step through Razor tool variants.
  \*/
  static readonly `COMMAND_TOOLS_RAZOR`: string

/\*\*

- Select the Razor tool variant that targets every clip.
  \*/
  static readonly `COMMAND_TOOLS_RAZORALLCLIPS`: string

/\*\*

- Select the Razor tool variant that targets selected clips.
  \*/
  static readonly `COMMAND_TOOLS_RAZORSELECTEDCLIPS`: string

/\*\*

- Select the Slip tool.
  \*/
  static readonly `COMMAND_TOOLS_SLIP`: string

/\*\*

- Select the Time Selection tool.
  \*/
  static readonly `COMMAND_TOOLS_TIMESELECTION`: string

/\*\*

- Clear any selection, then place the playhead to the left.
  \*/
  static readonly `COMMAND_TRANSPORT_COLLAPSESELECTIONLEFT`: string

/\*\*

- Clear any selection, then shift the playhead one page left.
  \*/
  static readonly `COMMAND_TRANSPORT_COLLAPSESELECTIONPAGELEFT`: string

/\*\*

- Clear any selection, then shift the playhead one page right.
  \*/
  static readonly `COMMAND_TRANSPORT_COLLAPSESELECTIONPAGERIGHT`: string

/\*\*

- Clear any selection, then place the playhead to the right.
  \*/
  static readonly `COMMAND_TRANSPORT_COLLAPSESELECTIONRIGHT`: string

/\*\*

- Shift the playhead one page left.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTIPAGELEFT`: string

/\*\*

- Shift the playhead one page right.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTIPAGERIGHT`: string

/\*\*

- Clear any selection, then send the playhead to the beginning.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITOBEGINNING`: string

/\*\*

- Clear any selection, then send the playhead to the end.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITOEND`: string

/\*\*

- Place the playhead at the selection in point.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITOINPOINT`: string

/\*\*

- Shift the playhead left.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITOLEFT`: string

/\*\*

- Jump the playhead to the next notable point from its current position.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITONEXT`: string

/\*\*

- Jump the playhead to the next Marker from its current position.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITONEXTMARKER`: string

/\*\*

- Place the playhead at the selection out point.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITOOUTPOINT`: string

/\*\*

- Jump the playhead to the previous notable point from its current position.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITOPREVIOUS`: string

/\*\*

- Jump the playhead to the previous Marker from its current position.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITOPREVIOUSMARKER`: string

/\*\*

- Shift the playhead right.
  \*/
  static readonly `COMMAND_TRANSPORT_MOVECTITORIGHT`: string

/\*\*

- Begin playback at the start position.
  \*/
  static readonly `COMMAND_TRANSPORT_PLAY`: string

/\*\*

- Shuttle toward the left.
  \*/
  static readonly `COMMAND_TRANSPORT_SHUTTLELEFT`: string

/\*\*

- Shuttle toward the right.
  \*/
  static readonly `COMMAND_TRANSPORT_SHUTTLERIGHT`: string

/\*\*

- Stop shuttle motion.
  \*/
  static readonly `COMMAND_TRANSPORT_SHUTTLESTOP`: string

/\*\*

- End playback.
  \*/
  static readonly `COMMAND_TRANSPORT_STOP`: string

/\*\*

- Switch looped playback on or off.
  \*/
  static readonly `COMMAND_TRANSPORT_TOGGLELOOPING`: string

/\*\*

- Pause or resume playback and recording.
  \*/
  static readonly `COMMAND_TRANSPORT_TOGGLEPAUSE`: string

/\*\*

- Start or stop playback.
  \*/
  static readonly `COMMAND_TRANSPORT_TOGGLEPLAYBACK`: string

/\*\*

- Start or stop recording.
  \*/
  static readonly `COMMAND_TRANSPORT_TOGGLERECORDING`: string

/\*\*

- Switch between instant recording and timed recording modes.
  \*/
  static readonly `COMMAND_TRANSPORT_TOGGLERECORDMODE`: string

/\*\*

- Switch skip selection playback on or off.
  \*/
  static readonly `COMMAND_TRANSPORT_TOGGLESKIPSELECTION`: string

/\*\*

- Switches the Preview Editor inside the Editor panel.
  \*/
  static readonly `COMMAND_VIEW_ALTVIEW`: string

/\*\*

- Displays the CD Editor.
  \*/
  static readonly `COMMAND_VIEW_CDEDITOR`: string

/\*\*

- Lower the spectral display resolution.
  \*/
  static readonly `COMMAND_VIEW_DECREASESPECTRALRESOLUTION`: string

/\*\*

- Show the Metadata Display dialog for customizing the Files panel.
  \*/
  static readonly `COMMAND_VIEW_DISPLAYFORFILESPANEL`: string

/\*\*

- Show the Markers Display dialog for customizing the Markers panel.
  \*/
  static readonly `COMMAND_VIEW_DISPLAYFORMARKERSPANEL`: string

/\*\*

- Show the Metadata Display dialog to customize the panel named Metadata.
  \*/
  static readonly `COMMAND_VIEW_DISPLAYFORMETADATAPANEL`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_EDITCUSTOMFRAMERATE`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_EDITTEMPO`: string

/\*\*

- Hide every open rack effect window.
  \*/
  static readonly `COMMAND_VIEW_HIDEALLRACKEFFECTWINDOWS`: string

/\*\*

- Raise the spectral display resolution.
  \*/
  static readonly `COMMAND_VIEW_INCREASESPECTRALRESOLUTION`: string

/\*\*

- Displays the Multitrack Editor.
  \*/
  static readonly `COMMAND_VIEW_MULTITRACKEDITOR`: string

/\*\*

- Move forward through the available time display formats.
  \*/
  static readonly `COMMAND_VIEW_NEXTTIMEDISPLAYFORMAT`: string

/\*\*

- Move backward through the available time display formats.
  \*/
  static readonly `COMMAND_VIEW_PREVIOUSTIMEDISPLAYFORMAT`: string

/\*\*

- Move the view backward in time.
  \*/
  static readonly `COMMAND_VIEW_SCROLLLEFT`: string

/\*\*

- Move the view backward by one time page.
  \*/
  static readonly `COMMAND_VIEW_SCROLLPAGELEFT`: string

/\*\*

- Move the view forward by one time page.
  \*/
  static readonly `COMMAND_VIEW_SCROLLPAGERIGHT`: string

/\*\*

- Move the view forward in time.
  \*/
  static readonly `COMMAND_VIEW_SCROLLRIGHT`: string

/\*\*

- Move the view until the playhead is visible.
  \*/
  static readonly `COMMAND_VIEW_SCROLLTOCTI`: string

/\*\*

- Move the view until the selection is visible.
  \*/
  static readonly `COMMAND_VIEW_SCROLLTOSELECTION`: string

/\*\*

- Move the view until the playback start time is visible.
  \*/
  static readonly `COMMAND_VIEW_SCROLLTOSTI`: string

/\*\*

- Make the navigation bar display channels as the waveform editor does.
  \*/
  static readonly `COMMAND_VIEW_SETNAVBARCHANNELDISPLAYFROMEDITOR`: string

/\*\*

- Make the navigation bar show layered channels.
  \*/
  static readonly `COMMAND_VIEW_SETNAVBARCHANNELSLAYERED`: string

/\*\*

- Make the navigation bar show separated channels.
  \*/
  static readonly `COMMAND_VIEW_SETNAVBARCHANNELSSEPARATED`: string

/\*\*

- Shows or hides the status bar.
  \*/
  static readonly `COMMAND_VIEW_SHOWSTATUS`: string

/\*\*

- Change the spectral frequency scale to fully linear.
  \*/
  static readonly `COMMAND_VIEW_SPECTRALFREQUENCYFULLLINEAR`: string

/\*\*

- Change the spectral frequency scale to fully logarithmic.
  \*/
  static readonly `COMMAND_VIEW_SPECTRALFREQUENCYFULLLOGARITHMIC`: string

/\*\*

- Shift the spectral frequency scale toward linear and away from logarithmic.
  \*/
  static readonly `COMMAND_VIEW_SPECTRALFREQUENCYMORELINEAR`: string

/\*\*

- Shift the spectral frequency scale toward logarithmic and away from linear.
  \*/
  static readonly `COMMAND_VIEW_SPECTRALFREQUENCYMORELOGARITHMIC`: string

/\*\*

- Switch synchronization between the active file and preferences for time and tempo.
  \*/
  static readonly `COMMAND_VIEW_SYNCWITHTIMEPREFS`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATBARSANDBEATS`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATCOMPACTDISC`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATCUSTOM`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATDECIMAL`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSAMPLES`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE23976`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE24`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE25`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE2997`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE30`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994DROP`: string

/\*\*

- \*/
  static readonly `COMMAND_VIEW_TIMEDISPLAYFORMATSMPTEDROP`: string

/\*\*

- Switch display of clip effect envelopes.
  \*/
  static readonly `COMMAND_VIEW_TOGGLECLIPEFFECTENVELOPES`: string

/\*\*

- Switch display of clip pan envelopes.
  \*/
  static readonly `COMMAND_VIEW_TOGGLECLIPPANENVELOPES`: string

/\*\*

- Switch display of clip volume envelopes.
  \*/
  static readonly `COMMAND_VIEW_TOGGLECLIPVOLUMEENVELOPES`: string

/\*\*

- Switch uniquely colored waveform channels.
  \*/
  static readonly `COMMAND_VIEW_TOGGLECOLOREDCHANNELS`: string

/\*\*

- Switch display of the Editor panel controls.
  \*/
  static readonly `COMMAND_VIEW_TOGGLEEDITORCONTROLS`: string

/\*\*

- Switches between Waveform Editor and Multitrack Editor.
  \*/
  static readonly `COMMAND_VIEW_TOGGLEEDITORS`: string

/\*\*

- Switch display of the Editor heads up display (HUD).
  \*/
  static readonly `COMMAND_VIEW_TOGGLEHUD`: string

/\*\*

- Switch layered waveform channels.
  \*/
  static readonly `COMMAND_VIEW_TOGGLELAYEREDCHANNELS`: string

/\*\*

- Switch display of the spectral pitch display.
  \*/
  static readonly `COMMAND_VIEW_TOGGLEPITCHDISPLAY`: string

/\*\*

- Switch status-bar data shown under the mouse cursor.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARDATAUNDERCURSOR`: string

/\*\*

- Switch status-bar file errors, warnings, and processing status.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARDOCMODALERRORSWARNINGS`: string

/\*\*

- Switch the dropped audio indicator in the status bar.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARDROPPEDAUDIO`: string

/\*\*

- Switch duration information in the status bar.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARDURATION`: string

/\*\*

- Switch free space information in the status bar.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACE`: string

/\*\*

- Switch free space information shown as time in the status bar.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACETIME`: string

/\*\*

- Switch sample type information in the status bar.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARSAMPLETYPE`: string

/\*\*

- Switch uncompressed audio size information in the status bar.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARUNCOMPRESSEDAUDIOSIZE`: string

/\*\*

- Switch video frame rate in the status bar.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESHOWSTATUSBARVIDEOFRAMERATE`: string

/\*\*

- Switch display of the spectral frequency display.
  \*/
  static readonly `COMMAND_VIEW_TOGGLESPECTRALDISPLAY`: string

/\*\*

- Decode video for the Video Panel at full resolution.
  \*/
  static readonly `COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTION`: string

/\*\*

- Use full resolution for video display when playback stops.
  \*/
  static readonly `COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTIONONSTOP`: string

/\*\*

- Switch video display between full screen and normal view.
  \*/
  static readonly `COMMAND_VIEW_VIDEODISPLAYFULLSCREEN`: string

/\*\*

- Decode video for the Video Panel at one half resolution.
  \*/
  static readonly `COMMAND_VIEW_VIDEODISPLAYQUARTERRESOLUTION`: string

/\*\*

- Set Video Panel scaling to 100 percent.
  \*/
  static readonly `COMMAND_VIEW_VIDEODISPLAYSETSCALE100`: string
