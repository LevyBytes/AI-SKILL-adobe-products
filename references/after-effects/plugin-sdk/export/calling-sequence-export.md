# Calling Sequence - Export

If the user adds an item to the render queue and selects the output format supported by the AEIO, After Effects sends `AEIO_InitOutputSpec`(). Use the various get functions to read output-setting information, then store relevant information with `AEGP_SetOutSpecOptionsHandle`(), followed by `AEIO_GetFlatOutputOptions`(). `AEIO_GetDepths`() is sent so After Effects can learn which output pixel bit depths the AEIO supports. `AEIO_GetOutputInfo`() is sent so file name, type, and subtype information can appear in the output module details.

Clicking the Format Options button in the render queue calls `AEIO_UserOptionsDialog`().

When the user clicks the "Render" button, `AEIO_SetOutputFile`() is called, followed by `AEIO_GetSizes`(); your AEIO determines whether the destination has enough free disk space.

Before video frames are sent, `AEIO_StartAdding`() is sent so the AEIO can open the file handle and write the header. For AEIOs that support video or audio formats, each audio chunk triggers `AEIO_AddSoundChunk`(), and each video frame triggers `AEIO_AddFrame`().

For still-image sequences supported by the AEIO, After Effects repeatedly calls `AEIO_OutputFrame`() and sends the frame for output as a `PF_EffectWorld` representation.

For each frame, `AEIO_WriteLabels`() gives the plug-in a chance to write field and alpha interpretation information. `AEIO_EndAdding`() arrives after the last video frame or audio chunk. Close the output file then.
