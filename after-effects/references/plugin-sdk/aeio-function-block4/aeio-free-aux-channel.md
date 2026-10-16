# AEIO_FreeAuxChannel

`AEIO_FreeAuxChannel`

Frees data tied to an auxiliary channel.

Suite argument declaration (not a standalone call):

```cpp
AEIO_FreeAuxChannel(
  AEIO_BasicData   *basic_dataP,
  AEIO_InSpecH     inH,
  PF_ChannelChunk  *chunkP);
```

Input

No

`AEIO_Num` AuxFiles

Enumerates the files required to render the supplied AEIO_InSpecH.

When the user chooses File > Dependencies > Collect Files..., this function and AEIO_GetNthAuxFileSpec are called. Here the AEIO reports the associated files to AE.

Suite argument declaration (not a standalone call):

```cpp
AEIO_NumAuxFiles(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    seqH,
  A_long          *files_per_framePL);
```

Input

No
