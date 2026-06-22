# Audition (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Inserts clipboard contents into the file.
  \*/
  static readonly `COMMAND_EDIT_PASTE`: string

/\*\*

- Inserts clipboard contents into a new file.
  \*/
  static readonly `COMMAND_EDIT_PASTETONEW`: string

/\*\*

- Changes all clips with rendered stretches over to realtime.
  \*/
  static readonly `COMMAND_EDIT_REALTIMEALLSTRETCHEDCLIPS`: string

/\*\*

- Performs the last operation again.
  \*/
  static readonly `COMMAND_EDIT_REDO`: string

/\*\*

- Changes the selected marker's name in the Markers panel.
  \*/
  static readonly `COMMAND_EDIT_RENAMESELECTEDMARKER`: string

/\*\*

- Changes all clips with realtime stretches over to rendered.
  \*/
  static readonly `COMMAND_EDIT_RENDERALLSTRETCHEDCLIPS`: string

/\*\*

- Runs the last chosen command again, showing a dialog when settings can be adjusted before application.
  \*/
  static readonly `COMMAND_EDIT_REPEATLASTCOMMAND`: string

/\*\*

- Runs the last chosen command again without showing dialogs.
  \*/
  static readonly `COMMAND_EDIT_REPEATLASTCOMMANDNOUI`: string

/\*\*

- Removes the gap at the current playhead position in the selected track, then shifts content to close it.
  \*/
  static readonly `COMMAND_EDIT_RIPPLEDELETEGAPINSELECTEDTRACK`: string

/\*\*

- Removes selected clips and shifts content to close the resulting gaps.
  \*/
  static readonly `COMMAND_EDIT_RIPPLEDELETESELECTEDCLIPS`: string

/\*\*

- Removes the time selection in all tracks and shifts content to close the gap.
  \*/
  static readonly `COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINALLTRACKS`: string

/\*\*

- Removes the time selection within selected clips and shifts content to close the gaps.
  \*/
  static readonly `COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDCLIPS`: string

/\*\*

- Removes the time selection in the selected track and shifts content to close the gap.
  \*/
  static readonly `COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDTRACK`: string

/\*\*

- Selects all active-panel content. In the Multitrack Editor, all clips are selected. In the Waveform Editor, all audio samples are selected.
  \*/
  static readonly `COMMAND_EDIT_SELECTALL`: string

/\*\*

- Selects every clip in the selected track.
  \*/
  static readonly `COMMAND_EDIT_SELECTALLCLIPSINSELECTEDTRACK`: string

/\*\*

- Creates a time selection spanning all active-panel content.
  \*/
  static readonly `COMMAND_EDIT_SELECTALLTIME`: string

/\*\*

- Selects all clips marked with Audio Type Ambience.
  \*/
  static readonly `COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_AMBIENCE`: string

/\*\*

- Selects all clips marked with Audio Type Dialogue.
  \*/
  static readonly `COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_DIALOG`: string

/\*\*

- Selects all clips marked with Audio Type Music.
  \*/
  static readonly `COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_MUSIC`: string

/\*\*

- Targets every clip whose Audio Type is Sound Effects.
  \*/
  static readonly `COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_SFX`: string

/\*\*

- Selects clips after the playhead on the selected track.
  \*/
  static readonly `COMMAND_EDIT_SELECTCLIPSTOENDOFSELECTEDTRACK`: string

/\*\*

- Selects clips after the playhead through the session end.
  \*/
  static readonly `COMMAND_EDIT_SELECTCLIPSTOENDOFSESSION`: string

/\*\*

- Selects clips before the playhead back to the session start.
  \*/
  static readonly `COMMAND_EDIT_SELECTCLIPSTOSTARTOFSESSION`: string

/\*\*

- Creates a time selection spanning the visible active-panel content.
  \*/
  static readonly `COMMAND_EDIT_SELECTCURRENTVIEWTIME`: string

/\*\*

- Reverses the spectral selection.
  \*/
  static readonly `COMMAND_EDIT_SELECTINVERSE`: string

/\*\*

- Selects the next clip on the selected track.
  \*/
  static readonly `COMMAND_EDIT_SELECTNEXTCLIPINSELECTEDTRACK`: string

/\*\*

- Creates a time selection around all selected clips.
  \*/
  static readonly `COMMAND_EDIT_SELECTTIMEAROUNDCLIPS`: string

/\*\*

- Places the selection in point at the playhead position.
  \*/
  static readonly `COMMAND_EDIT_SETINPOINTTOCTI`: string

/\*\*

- Places the selection out point at the playhead position.
  \*/
  static readonly `COMMAND_EDIT_SETOUTPOINTTOCTI`: string

/\*\*

- Opens keyboard shortcut customization.
  \*/
  static readonly `COMMAND_EDIT_SHORTCUTS`: string

/\*\*

- Extracts Channels to Mono Files.
  \*/
  static readonly `COMMAND_EDIT_SPLITTOMONO`: string

/\*\*

- Toggles every channel's enabled state.
  \*/
  static readonly `COMMAND_EDIT_TOGGLEALLCHANNELS`: string

/\*\*

- Toggles the center channel enabled state.
  \*/
  static readonly `COMMAND_EDIT_TOGGLECENTERCHANNEL`: string

/\*\*

- Toggles clip stretch handle visibility.
  \*/
  static readonly `COMMAND_EDIT_TOGGLECLIPSTRETCHING`: string

/\*\*

- Toggles the front left channel enabled state.
  \*/
  static readonly `COMMAND_EDIT_TOGGLEFRONTLEFTCHANNEL`: string

/\*\*

- Toggles the front right channel enabled state.
  \*/
  static readonly `COMMAND_EDIT_TOGGLEFRONTRIGHTCHANNEL`: string

/\*\*

- Toggles the left surround channel enabled state.
  \*/
  static readonly `COMMAND_EDIT_TOGGLELEFTSURROUNDCHANNEL`: string

/\*\*

- Toggles the low frequency effect channel enabled state.
  \*/
  static readonly `COMMAND_EDIT_TOGGLELFECHANNEL`: string

/\*\*

- Toggles the right surround channel enabled state.
  \*/
  static readonly `COMMAND_EDIT_TOGGLERIGHTSURROUNDCHANNEL`: string

/\*\*

- Turns all timeline snapping on|off.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPPING`: string

/\*\*

- Toggles snapping to clips.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPTOCLIPS`: string

/\*\*

- Toggles snapping to frames when a frame time format is displayed.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPTOFRAMES`: string

/\*\*

- Turns loop-boundary snapping on or off.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPTOLOOPS`: string

/\*\*

- Turns marker snapping on or off.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPTOMARKERS`: string

/\*\*

- Turns snapping to major ruler tick marks on or off.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPTORULERCOARSE`: string

/\*\*

- Turns snapping to every ruler tick mark on or off.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPTORULERFINE`: string

/\*\*

- Turns zero-crossing snapping on or off.
  \*/
  static readonly `COMMAND_EDIT_TOGGLESNAPTOZEROCROSSINGS`: string

/\*\*

- Reverses the last operation.
  \*/
  static readonly `COMMAND_EDIT_UNDO`: string

/\*\*

- Runs adaptive noise reduction processing.
  \*/
  static readonly `COMMAND_EFFECTS_ADAPTIVENOISEREDUCTION`: string

/\*\*

- Increases waveform channel amplitude.
  \*/
  static readonly `COMMAND_EFFECTS_AMPLIFY`: string

/\*\*

- Adds Analog Delay to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_ANALOGDELAY`: string

/\*\*

- Cleans click artifacts from the waveform.
  \*/
  static readonly `COMMAND_EFFECTS_AUTOCLICKREMOVER`: string

/\*\*

- Fixes phase in a stereo waveform.
  \*/
  static readonly `COMMAND_EFFECTS_AUTOPHASECORRECTION`: string

/\*\*

- Learns a sound model from the waveform selection.
  \*/
  static readonly `COMMAND_EFFECTS_CAPTUREDYNAMICNOISEREMOVALPROFILE`: string

/\*\*

- Captures a noise print from the waveform.
  \*/
  static readonly `COMMAND_EFFECTS_CAPTURENOISEREDUCTIONPROFILE`: string

/\*\*

- Extracts the Center Channel.
  \*/
  static readonly `COMMAND_EFFECTS_CENTERCHANNELEXTRACT`: string

/\*\*

- Mixes Channels.
  \*/
  static readonly `COMMAND_EFFECTS_CHANNELMIXER`: string

/\*\*

- Adds Chorus to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_CHORUS`: string

/\*\*

- Adds Chorus|Flanger to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_CHORUSFLANGER`: string

/\*\*

- Clears everything from the Effects Rack panel.
  \*/
  static readonly `COMMAND_EFFECTS_CLEAREFFECTSRACK`: string

/\*\*

- Applies the Click|Pop Eliminator effect.
  \*/
  static readonly `COMMAND_EFFECTS_CLICKPOPELIMINATOR`: string

/\*\*

- Finds and repairs click|pop defects in the waveform.
  \*/
  static readonly `COMMAND_EFFECTS_CLICKPOPELIMINATORANALYSIS`: string

/\*\*

- Finds and repairs clipped samples in the waveform.
  \*/
  static readonly `COMMAND_EFFECTS_CLIPRESTORATIONANALYSIS`: string

/\*\*

- Adds Convolution Reverb to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_CONVOLUTIONREVERB`: string

/\*\*

- Adds DeEsser to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_DEESSER`: string

/\*\*

- Adds DeHummer to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_DEHUMMER`: string

/\*\*

- Adds Delay to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_DELAY`: string

/\*\*

- Removes every effect from the Effects Rack.
  \*/
  static readonly `COMMAND_EFFECTS_DELETEALLEFFECTS`: string

/\*\*

- Removes selected effects from the Effects Rack.
  \*/
  static readonly `COMMAND_EFFECTS_DELETESELECTEDEFFECTS`: string

/\*\*

- Analyzes the waveform and removes silence.
  \*/
  static readonly `COMMAND_EFFECTS_DELETESILENCEANALYSIS`: string

/\*\*

- Adds Distortion to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_DISTORTION`: string

/\*\*

- Applies Doppler effect to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_DOPPLER`: string

/\*\*

- Processes waveform dynamics.
  \*/
  static readonly `COMMAND_EFFECTS_DYNAMICS`: string

/\*\*

- Adds echo to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_ECHO`: string

/\*\*

- Sets the Effects Rack panel for editing clip effects.
  \*/
  static readonly `COMMAND_EFFECTS_EDITCLIPEFFECTS`: string

/\*\*

- Opens the selected effect in the Effects Rack for editing.
  \*/
  static readonly `COMMAND_EFFECTS_EDITSELECTEDEFFECT`: string

/\*\*

- Sets track-level editing mode in the Effects Rack panel.
  \*/
  static readonly `COMMAND_EFFECTS_EDITTRACKEFFECTS`: string

/\*\*

- \*/
  static readonly `COMMAND_EFFECTS_EFFECTSRACKPANELTOFRONTANDACTIVE`: string

/\*\*

- Processes a fade envelope with an amplification percentage scale.
  \*/
  static readonly `COMMAND_EFFECTS_FADEENVELOPE`: string

/\*\*

- Applies FFT Filter to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_FFTFILTER`: string

/\*\*

- Adds Flanger to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_FLANGER`: string

/\*\*

- Adds reverb to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_FULLREVERB`: string

/\*\*

- Processes a gain envelope with a decibel scale.
  \*/
  static readonly `COMMAND_EFFECTS_GAINENVELOPE`: string

/\*\*

- Creates specified noise in a new file.
  \*/
  static readonly `COMMAND_EFFECTS_GENERATENOISE`: string

/\*\*

- Creates specified speech in a new file.
  \*/
  static readonly `COMMAND_EFFECTS_GENERATESPEECH`: string

/\*\*

- Creates specified tone in a new file.
  \*/
  static readonly `COMMAND_EFFECTS_GENERATETONES`: string

/\*\*

- Applies graphic EQ to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_GRAPHICEQ10BANDS`: string

/\*\*

- Applies graphic EQ to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_GRAPHICEQ20BANDS`: string

/\*\*

- Applies graphic EQ to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_GRAPHICEQ30BANDS`: string

/\*\*

- Applies the Graphic Phase Shifter effect.
  \*/
  static readonly `COMMAND_EFFECTS_GRAPHICPHASESHIFTER`: string

/\*\*

- Adds GuitarSuite to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_GUITARSUITE`: string

/\*\*

- Applies hard limiting to the waveform.
  \*/
  static readonly `COMMAND_EFFECTS_HARDLIMIT`: string

/\*\*

- Processes hiss reduction.
  \*/
  static readonly `COMMAND_EFFECTS_HISSREDUCTIONPROCESS`: string

/\*\*

- Fixes waveform leveling, with best results on speech.
  \*/
  static readonly `COMMAND_EFFECTS_INTRACLIP`: string

/\*\*

- Inverts audio in the current selection.
  \*/
  static readonly `COMMAND_EFFECTS_INVERT`: string

/\*\*

- Analyzes the waveform and marks non-silence.
  \*/
  static readonly `COMMAND_EFFECTS_MARKAUDIOANALYSIS`: string

/\*\*

- Adds Mastering to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_MASTERING`: string

/\*\*

- Opens the Match Loudness panel.
  \*/
  static readonly `COMMAND_EFFECTS_MATCHVOLUME`: string

/\*\*

- Adds Multiband Compressor to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_MULTIBANDCOMPRESSOR`: string

/\*\*

- Runs cleanup for background noise.
  \*/
  static readonly `COMMAND_EFFECTS_NOISEREDUCTIONPROCESS`: string

/\*\*

- Normalizes waveform amplitude.
  \*/
  static readonly `COMMAND_EFFECTS_NORMALIZE`: string

/\*\*

- Applies Notch Filter to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_NOTCHFILTER`: string

/\*\*

- Processes waveform dynamics.
  \*/
  static readonly `COMMAND_EFFECTS_PARAMETRICDYNAMICS`: string

/\*\*

- Applies Parametric EQ to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_PARAMETRICEQ`: string

/\*\*

- Adds Phaser to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_PHASER`: string

/\*\*

- Applies a time-based pitch envelope.
  \*/
  static readonly `COMMAND_EFFECTS_PITCHBENDER`: string

/\*\*

- Corrects pitch automatically.
  \*/
  static readonly `COMMAND_EFFECTS_PITCHCORRECT`: string

/\*\*

- Lets pitch be corrected manually over time with an envelope.
  \*/
  static readonly `COMMAND_EFFECTS_PITCHCORRECTMANUAL`: string

/\*\*

- Changes pitch by shifting or stretching it.
  \*/
  static readonly `COMMAND_EFFECTS_PITCHSHIFTER`: string

/\*\*

- Displays the Audio plug-in manager dialog.
  \*/
  static readonly `COMMAND_EFFECTS_PLUGINMANAGER`: string

/\*\*

- Toggles power for the full effects rack.
  \*/
  static readonly `COMMAND_EFFECTS_POWEREFFECTSRACK`: string

/\*\*

- Toggles power for selected effects in the effects rack.
  \*/
  static readonly `COMMAND_EFFECTS_POWERSELECTEDEFFECTS`: string

/\*\*

- Adds Loudness Radar Meter to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_RADARMETER`: string

/\*\*

- Renders every Effects Rack effect into the current audio file.
  \*/
  static readonly `COMMAND_EFFECTS_RENDEREFFECTSRACK`: string

/\*\*

- Replaces unwanted selected sound using surrounding material.
  \*/
  static readonly `COMMAND_EFFECTS_REPAIR`: string

/\*\*

- Adds reverb to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_REVERB`: string

/\*\*

- Reverses audio in the current selection.
  \*/
  static readonly `COMMAND_EFFECTS_REVERSE`: string

/\*\*

- Applies Scientific Filter to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_SCIENTIFICFILTER`: string

/\*\*

- Silences audio in the current selection.
  \*/
  static readonly `COMMAND_EFFECTS_SILENCE`: string

/\*\*

- Adds Single-band Compressor to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_SINGLEBANDCOMPRESSOR`: string

/\*\*

- Removes a specified sound.
  \*/
  static readonly `COMMAND_EFFECTS_SOUNDREMOVALPROCESS`: string

/\*\*

- Positions and expands the stereo image.
  \*/
  static readonly `COMMAND_EFFECTS_STEREOEXPANDER`: string

/\*\*

- Stretches the waveform.
  \*/
  static readonly `COMMAND_EFFECTS_STRETCH`: string

/\*\*

- Adds reverb to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_STUDIOREVERB`: string

/\*\*

- Adds Surround Reverb to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_SURROUNDREVERB`: string

/\*\*

- Adds Tube-modeled Compressor to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_TUBEMODELEDCOMPRESSOR`: string

/\*\*

- Applies Vocal Enhancer to waveform audio.
  \*/
  static readonly `COMMAND_EFFECTS_VOCALENHANCER`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_AUTO_HEAL`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_CONVERT_TO_5_1`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_CONVERT_TO_MONO`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_CONVERT_TO_STEREO`: string

/\*\*

- Permits deleting a favorite.
  \*/
  static readonly `COMMAND_FAVORITES_DELETEFAVORITE`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_DE_ESSER`: string

/\*\*

- Displays the Favorites panel so favorites can be edited.
  \*/
  static readonly `COMMAND_FAVORITES_EDITFAVORITES`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_FADE_IN`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_FADE_OUT`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_HARD_LIMIT_TO`\_\_0_1_DB: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_LOWER_PITCH`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_NORMALIZE_TO`\_\_0_1_DB: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_NORMALIZE_TO`\_\_3_DB: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_RAISE_PITCH`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_REMOVE_60_HZ_HUM`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_REMOVE_VOCALS`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_REPAIR_DC_OFFSET`: string

/\*\*

- Begins recording editor actions into a favorite.
  \*/
  static readonly `COMMAND_FAVORITES_STARTRECORDINGFAVORITE`: string

/\*\*

- Ends editor-action recording and saves the recording.
  \*/
  static readonly `COMMAND_FAVORITES_STOPRECORDINGFAVORITE`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_TELEPHONE_VOICE`: string

/\*\*

- \*/
  static readonly `COMMAND_FAVORITES_VOICE_OVER_COMPRESSOR`: string

/\*\*

- Clears the recent file list.
  \*/
  static readonly `COMMAND_FILE_CLEARRECENT`: string

/\*\*

- Closes the current file.
  \*/
  static readonly `COMMAND_FILE_CLOSE`: string

/\*\*

- Closes every file.
  \*/
  static readonly `COMMAND_FILE_CLOSEALL`: string

/\*\*

- Closes the current session together with its referenced media.
  \*/
  static readonly `COMMAND_FILE_CLOSESESSIONANDITSMEDIA`: string

/\*\*

- Closes files that no open session references.
  \*/
  static readonly `COMMAND_FILE_CLOSEUNUSEDMEDIA`: string

/\*\*

- Exports application settings to the chosen file.
  \*/
  static readonly `COMMAND_FILE_EXPORTAPPLICATIONSETTINGS`: string

/\*\*

- Exports audio for all range markers as separate files.
  \*/
  static readonly `COMMAND_FILE_EXPORT_ALLMARKERRANGES`: string

/\*\*

- Burns the audio file to a blank compact disc.
  \*/
  static readonly `COMMAND_FILE_EXPORT_BURNAUDIOTOCD`: string

/\*\*

- Exports the current session to a new XML file that Adobe Premiere Pro can open.
  \*/
  static readonly `COMMAND_FILE_EXPORT_EXPORTTOADOBEPREMIEREPRO`: string

/\*\*

- Mixes down a track selection and exports it with Adobe Media Encoder.
  \*/
  static readonly `COMMAND_FILE_EXPORT_EXPORTWITHADOBEMEDIAENCODER`: string

/\*\*

- Exports the current session to FCP XML Interchange Format.
  \*/
  static readonly `COMMAND_FILE_EXPORT_FCXML`: string

/\*\*

- Exports the current file to a new file.
  \*/
  static readonly `COMMAND_FILE_EXPORT_FILE`: string

/\*\*

- Exports selected markers to file.
  \*/
  static readonly `COMMAND_FILE_EXPORT_MARKERS`: string

/\*\*

- Mixes down the full master track output to a new file.
  \*/
  static readonly `COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNALL`: string

/\*\*

- Mixes down the master track output in selected clips to a new file.
  \*/
  static readonly `COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDCLIPS`: string

/\*\*

- Mixes down one or more files from master track output in regions matching selected range markers.
  \*/
  static readonly `COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDMARKERRANGES`: string

/\*\*

- Mixes down the master track output in the time selection to a new file.
  \*/
  static readonly `COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTION`: string

/\*\*

- Exports the current session to a new OMF file.
  \*/
  static readonly `COMMAND_FILE_EXPORT_OMF`: string

/\*\*

- Exports the current session to a new file.
  \*/
  static readonly `COMMAND_FILE_EXPORT_SESSION`: string

/\*\*

- Exports the current session as a reusable template.
  \*/
  static readonly `COMMAND_FILE_EXPORT_SESSIONASTEMPLATE`: string

/\*\*

- Extracts tracks from an audio CD.
  \*/
  static readonly `COMMAND_FILE_EXTRACTAUDIOFROMCD`: string

/\*\*

- Imports application settings from the chosen file.
  \*/
  static readonly `COMMAND_FILE_IMPORTAPPLICATIONSETTINGS`: string

/\*\*

- Imports the selected file.
  \*/
  static readonly `COMMAND_FILE_IMPORTFILE`: string

/\*\*

- Imports selected files under a data type chosen by the user.
  \*/
  static readonly `COMMAND_FILE_IMPORTRAWDATA`: string

/\*\*

- Imports markers from the selected file.
  \*/
  static readonly `COMMAND_FILE_IMPORT_MARKERS`: string

/\*\*

- Creates a new blank waveform file.
  \*/
  static readonly `COMMAND_FILE_NEWAUDIOFILE`: string

/\*\*

- Creates a blank CD Layout.
  \*/
  static readonly `COMMAND_FILE_NEWCDLAYOUT`: string

/\*\*

- Creates a blank session.
  \*/
  static readonly `COMMAND_FILE_NEWSESSION`: string

/\*\*

- Opens an existing file.
  \*/
  static readonly `COMMAND_FILE_OPEN`: string

/\*\*

- Opens existing files, then appends them after the current open file's contents.
  \*/
  static readonly `COMMAND_FILE_OPENAPPENDTOCURRENT`: string

/\*\*

- Opens existing files, then appends their contents into a newly created file.
  \*/
  static readonly `COMMAND_FILE_OPENAPPENDTONEW`: string

/\*\*

- Reopens the most recently used file.
  \*/
  static readonly `COMMAND_FILE_OPENMRUFILE`: string

/\*\*

- Reopens the most recently used session.
  \*/
  static readonly `COMMAND_FILE_OPENMRUSESSION`: string

/\*\*

- Exits the application.
  \*/
  static readonly `COMMAND_FILE_QUIT`: string

/\*\*

- Reveals the chosen file in the OS.
  \*/
  static readonly `COMMAND_FILE_REVEAL`: string

/\*\*

- Reveals the chosen file in the Media Browser panel.
  \*/
  static readonly `COMMAND_FILE_REVEALINMEDIABROWSER`: string

/\*\*

- Saves the current file.
  \*/
  static readonly `COMMAND_FILE_SAVE`: string

/\*\*

- Saves every file.
  \*/
  static readonly `COMMAND_FILE_SAVEALL`: string

/\*\*

- Saves all audio files to a specific format.
  \*/
  static readonly `COMMAND_FILE_SAVEALLAUDIOASBATCHPROCESS`: string

/\*\*

- Saves the current file to a new file.
  \*/
  static readonly `COMMAND_FILE_SAVEAS`: string

/\*\*

- Saves the current selection to a new file.
  \*/
  static readonly `COMMAND_FILE_SAVESELECTIONAS`: string

/\*\*

- Switches to the next opened File.
  \*/
  static readonly `COMMAND_FILE_SWITCHTONEXTFILE`: string

/\*\*

- Switches to the previous opened File.
  \*/
  static readonly `COMMAND_FILE_SWITCHTOPREVIOUSFILE`: string

/\*\*

- Opens the About dialog.
  \*/
  static readonly `COMMAND_HELP_ABOUT`: string

/\*\*

- Browses Addons.
  \*/
  static readonly `COMMAND_HELP_ADDONS`: string

/\*\*

- Opens Audition Help.
  \*/
  static readonly `COMMAND_HELP_ADOBEAUDITIONHELP`: string

/\*\*

- Downloads SDKs and other developer resources.
  \*/
  static readonly `COMMAND_HELP_DEVELOPERCENTER`: string

/\*\*

- Downloads Effects and other content.
  \*/
  static readonly `COMMAND_HELP_DOWNLOAD`: string

/\*\*

- Launches Improvement Program Options Dialog.
  \*/
  static readonly `COMMAND_HELP_IMPROVEMENTPROGRAM`: string

/\*\*

- Goes to Audition Keyboard Shortcuts Help.
  \*/
  static readonly `COMMAND_HELP_KEYBOARDSHORTCUTS`: string

/\*\*

- Opens Audition Learn.
  \*/
  static readonly `COMMAND_HELP_ONBOARDING`: string

/\*\*

- Reveals Adobe Audition log files in the OS.
  \*/
  static readonly `COMMAND_HELP_REVEALLOGFILES`: string

/\*\*

- Submits a bug report or feature request.
  \*/
  static readonly `COMMAND_HELP_SENDFEEDBACK`: string

/\*\*

- Goes to Audition Support Center.
  \*/
  static readonly `COMMAND_HELP_SUPPORTCENTER`: string

/\*\*

- Navigates to Audition User Forums.
  \*/
  static readonly `COMMAND_HELP_USERFORUMS`: string

/\*\*

- Sends the End key.
  \*/
  static readonly `COMMAND_KEYBOARD_END`: string

/\*\*

- Sends the Enter key.
  \*/
  static readonly `COMMAND_KEYBOARD_ENTER`: string

/\*\*

- Sends the ESC key.
  \*/
  static readonly `COMMAND_KEYBOARD_ESCAPE`: string

/\*\*

- Sends the Home key.
  \*/
  static readonly `COMMAND_KEYBOARD_HOME`: string
