# Create a multitrack session

Session (\*.sesx) files do not store audio data inside the session file. They are compact XML-based files that reference audio and video files elsewhere on the hard drive. A session file keeps track of:

- The files included in the session.
- Where those files are located.
- Envelopes and effects applied in the session.

.sesx files can be opened in text editors, or kept in version control systems, when you need to inspect settings closely. Perforce and Git are common choices in the game industry.

Select File > New > Multitrack Session.

Enter a filename and location, then configure these options:

- Template: selects either the default template or a custom template you created. Session templates define source files along with settings such as Sample Rate and Bit Depth.
- Sample Rate: sets the session's frequency range. To capture a frequency accurately, use a sample rate at least double that frequency.
- Bit Depth: sets the amplitude range for the session, including recordings and files made with the Multitrack > Mixdown Session to New File command.
- Mix: controls whether tracks mix down to a mono, stereo, or 5.1 Mix track.

Note

- Every file added to a session must use the same sample rate. When imported files use different sample rates, Audition asks to resample them, which can lower audio quality. Change resampling quality in the Sample Rate Conversion settings under Data preferences.
- Choose the bit depth with care because it cannot be altered after session creation. For fast systems, 32-bit is usually ideal. On a slower system, try reducing the bit depth.
