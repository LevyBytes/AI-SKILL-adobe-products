# Supported codecs for growing files within an MXF wrapper

- AVC-Intra Class 50/100
- IMX 30/40/50
- XDCAM HD 50/35/25/18 RDD9 (The low latency version of XDCAM HD is not supported)
- OP1B files

Media Preferences contains the controls for automatically refreshing growing files and setting the refresh frequency. The updated duration appears in the Project panel and the Source Monitor, and the refreshed duration is available for Timeline editing.

Growing files import only when Premiere can read the volume that stores them. For network storage, an unc path("//somewhere/something") is readable only when that drive is mapped("H:\somewhere\something"). After mapping, bring in the file with File > Import. The resulting clips can be edited like other clips.
