# Diagnose file formats and codecs

Video-recording hardware and video applications store encoded media in particular file formats, including AVI, QuickTime (MOV), and Windows Media (WMV).

Note

Some formats are not available on both macOS and Windows. For supported file-format details, refer to supported file formats for Premiere.

AVI and MOV are examples of video file formats that act as container file formats. Inside a container, the data is encoded with a specific codec. Codecs are compression algorithms for video and audio information, and many codec types are in use.

For example, an AVI file can use these codec types, among others:

- The DV codec, used by camcorders that record to miniDV tapes
- A commercial codec, such as DivX
- A Motion JPEG codec, used by some still-image cameras with "movie" modes

Premiere likely cannot decode files encoded by a poorly designed codec or by a codec that is missing from the computer.

When you know the file format, and the codec when relevant, it is easier to choose from the solutions below. Use one or more of these methods to collect that information:

- Open the file in Apple QuickTime Player and choose Window > Show Movie Inspector.
- For a file created by a camcorder, camera, or other video-recording device, consult the device documentation or look up the manufacturer's specifications online.
- Use a third-party media-analysis application to open the file, such as MediaInfo or GSpot 2.70.
