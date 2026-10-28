# AEIO_GetSound

`AEIO_GetSound`

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide sound from AEIO_InSpecH at the described quality.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetSound(
  AEIO_BasicData             *basic_dataP,
  AEIO_InSpecH               inH,
  AEIO_SndQuality            quality,
  const AEIO_InterruptFuncs  *interrupt_funcsP0,
  const A_Time               *startPT,
  const A_Time               *durPT,
  A_u_long                   start_sampLu,
  A_u_long                   num_samplesLu,
  void                       *dataPV);
```

`AEIO_SndQuality` may be: - `AEIO_SndQuality_APPROX`, (this quality is used to draw the audio waveform) - `AEIO_SndQuality_LO`, - `AEIO_SndQuality_HI`

Input

No
