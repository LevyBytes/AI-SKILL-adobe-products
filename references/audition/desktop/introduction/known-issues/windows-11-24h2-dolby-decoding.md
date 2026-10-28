# Dolby audio does not decode on new or freshly installed Windows 11 version 24H2 devices

Issue: Because the OS no longer ships the built-in Dolby audio decoder, new or freshly installed Windows 11 version 24H2 devices do not decode Dolby Digital audio (AC-3 / E-AC-3) by default. In that state, Adobe Audition cannot decode or import Dolby audio streams and audio tracks contained in video files.

Workaround: Adobe Audition reads WAV or PCM files without depending on the Windows system codec. Converting Dolby audio to WAV/PCM before import removes the missing Dolby decoder dependency.
