# Importing and interpreting footage items — Supported import formats

A handful of filename extensions — MOV, AVI, MXF, FLV, and F4V among them — name a container file format rather than one specific audio, video, or image data format. The data packed inside a container file may be encoded with all sorts of compression and encoding schemes. After Effects will import the container files themselves, but whether it can import the data they hold turns on which codecs (decoders, specifically) you've got installed.

Adding more codecs widens the range of file types After Effects can import. A lot of codecs have to go into the operating system (Windows or macOS), where they operate as a component within the QuickTime or Video for Windows formats. Reach out to whoever makes your hardware or software for details on codecs that suit the files your particular devices or applications turn out.

Some files need extra import plug-ins installed before you can import and use them.

Adobe Premiere can capture and import a good number of formats that lie beyond what After Effects handles on its own. Getting that data from Adobe Premiere across to After Effects can be done in many ways. The topic of using Adobe Premiere together with After Effects has more to offer.

- Adobe Sound Document (ASND; multi-track files imported as merged single track)
- Advanced Audio Coding (AAC, M4A)
- Audio Interchange File Format (AIF, AIFF)
- MP3 (MP3, MPEG, MPG, MPA, MPE)
- Video for Windows (AVI; requires QuickTime on Mac OS)
- Waveform (WAV)

- Adobe Illustrator (AI, AI4, AI5, EPS, PS; continuously rasterized)
- Adobe PDF (PDF; first page only; continuously rasterized)
- Adobe Photoshop (PSD)
- Bitmap (BMP, RLE, DIB)
- Camera Raw (TIF, CRW, NEF, RAF, ORF, MRW, DCR, MOS, RAW, PEF, SRF, DNG, X3F, CR2, ERF)
- Cineon/DPX (CIN, DPX with 8-, 10-, 12-, and 16-bpc DPX files, including those with an alpha channel and timecode)
- Discreet RLA/RPF (RLA, RPF; 16 bpc ; imports camera data)
- EPS
- GIF
- JPEG (JPG, JPE)
- Maya camera data (MA)
- Maya IFF (IFF, TDI; 16 bpc )
- OpenEXR (EXR, SXR, MXR; 32 bpc )
- PICT (PCT)
- Portable Network Graphics (PNG; 16 bpc)
- Radiance (HDR, RGBE, XYZE; 32 bpc)
- SGI (SGI, BW, RGB; 16 bpc)
- Softimage (PIC)
- Targa (TGA, VDA, ICB, VST)
- TIFF (TIF)

- To reach the various layers and channels inside OpenEXR files, After Effects bundles 3D Channel effect plug-ins from fnord software. There's more to learn about working with channels in OpenEXR files.
- ZPIC files that match imported PIC files are readable by After Effects too. There's more to learn about importing and working with 3D files from other applications.
- Files in any still-image format can be brought in as a sequence. Learn about preparing and importing still images.

- Animated GIF (GIF)
- Avid DNxHR
- HEVC (H.265) MPEG-4
- Support for ARRIRAW files from the ARRI ALEXA or ARRIFLEX D-21 cameras For more information on ARRIRAW files, see the ARRIRAW FAQ on the ARRI Group website.
- CinemaDNG

Note: CinemaDNG is a subset of Camera Raw. A subset of Camera Raw settings can be accessed via More Options in the Interpret Footage dialog box. Color management for CinemaDNG includes the same color spaces as After Effects existing Camera Raw: Adobe RGB, sRGB IEC619662.1, ColorMatch RGB, and ProPhoto RGB.

- DV (in MOV or AVI container or as containerless DV stream)
- Electric Image (IMG, EI)
- FLV, F4V
- QuickTime (MOV; 16 bpc, only for codecs that don't have any native decoders)
- Video for Windows (AVI, WAV; requires QuickTime on Mac OS)
- Windows Media File (WMV, WMA, ASF; Windows only)
- XDCAM HD and XDCAM EX
- RED (R3D)
- Media eXchange Format (MXF): being a container format, MXF yields only certain kinds of its data to After Effects on import. Among what does come in is the Op-Atom flavor of MXF that Panasonic video cameras write to Panasonic P2 media. From those MXF files, After Effects pulls video encoded with the AVC-Intra 50, AVC-Intra 100, DV, DVCPRO, DVCPRO50, and DVCPRO HD codecs. XDCAM HD files in MXF format also import — the MXF OP1format, holding MPEG-2 video that meets the XDCAM HD format.
- MPEG-1, MPEG-2, and MPEG-4 formats: MPEG, MPE, MPG, M2V, MPA, MP2, M2A, MPV, M2P, M2T, M2TS (AVCHD), MP4, M4V, M4A
- SWF (continuously rasterized)

- Adobe Premiere 1.0, 1.5, 2.0, CS3, CS4, CS5, CS6, and CC (PRPROJ; 1.0, 1.5, and 2.0 Windows only), and later projects
- Adobe After Effects 6.0 and later binary projects in After Effects CS5 (AEP, AET)
- After Effects 7 can open projects from After Effects 3.0 through After Effects 7.
- Adobe After Effects CS4 and later XML projects (AEPX)

Bundled with the application these days is the Automatic Duck Pro Import AE plug-in, here named Pro Import After Effects. Through it you can pull in AAF and OMF files off an Avid system, XML files from Final Cut Pro 7 (or older), plus Motion 4 (or older) project files. To dig into using Pro Import After Effects, reach its User Guide by choosing File > Import > Pro Import After Effects and then clicking the Help button.

Final Cut Pro projects can also be imported into Premiere, after which that project's pieces can travel on into After Effects.

Note

- EIZ files matching imported EI files are something After Effects can read as well. There's more to learn about importing and working with 3D files from other applications.
- Certain MPEG data formats live inside container formats whose filename extensions After Effects doesn't recognize. The .vob and .mod extensions are examples. Sometimes renaming such a file's extension to one After Effects does recognize lets you import it. Given how unevenly these container formats get implemented, though, compatibility can't be promised.
- MPEG format details are covered on the MPEG website.
- Ahead of any work with QuickTime, look over the alert that the United States Computer Emergency Readiness Team put out in April 2016, which advises Windows users to remove Apple QuickTime from their machines.
- R3D files come interpreted as carrying 32-bpc color within a non-linear HDTV (Rec. 709) color space. Overbright values aren't preserved by the RED R3D Source Settings color adjustments. Color adjustments performed inside After Effects do hold onto overbright colors when you're in 32-bpc (bits per channel) color. Keep clipping at bay by adjusting exposure inside After Effects rather than over in the RED R3D Source Settings dialog box during footage interpretation.
- Sony XDCAM HD assets will import into After Effects provided they were recorded to MXF files; XDCAM HD assets in IMX format won't. Sony XDCAM EX assets held as essence files carrying the .mp4 filename extension inside a BPAV directory import too.
- An alpha channel comes along when SWF files import. Audio drops out. So do interactive content and scripted animation. What survives is animation set by keyframes in the main, top-level movie.
