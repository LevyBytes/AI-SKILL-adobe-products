# AEIO_GetInSpecInfo

`AEIO_GetInSpecInfo`

Provide a few AEIO_Verbiage strings describing the file for display in the Project panel. This includes strings for the file type and subtype, meaning the codec.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetInSpecInfo(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  AEIO_Verbiage   *verbiageP);
```

This function is called OFTEN, every time the project panel refreshes. Minimize allocations. In the AEIOs shipped with After Effects, we check for a valid optionsH with `AEGP_GetInSpecOptionsHandle`; when one exists, we use the data inside it. Otherwise, we do nothing. This matters because if your AEIO handles still images, the folder that contains those stills can trigger this function. Ideally, no optionsH is associated with that folder unless your AEIO is truly unusual.

Input

Yes
