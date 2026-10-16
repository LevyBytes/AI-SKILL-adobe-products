# AEIO_AddMarker

`AEIO_AddMarker`

Associates a marker of the specified type and frame with the AEIO_OutSpecH.

An interrupt function may be supplied to handle user cancellation for this action.

Suite argument declaration (not a standalone call):

```cpp
AEIO_AddMarker(
  AEIO_BasicData       *basic_dataP,
  AEIO_OutSpecH        outH,
  A_long               frame_index,
  AEIO_MarkerType      marker_type,
  void                 *marker_dataPV,
  AEIO_InterruptFuncs  *inter0);
```

Output

No
