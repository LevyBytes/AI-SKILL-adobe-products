# PF_Cmd_GET_FLATTENED_SEQUENCE_DATA

`PF_Cmd_GET_FLATTENED_SEQUENCE_DATA`

Through version 13.2, every act of serializing or flattening sequence_data meant tearing down and rebuilding whatever data structures were involved. From 13.5 onward, that serializing/flattening fires off even more frequently as an effect is edited. The reason? To keep the UI thread and the render thread in sync, AE has to serialize/flatten project edits before shipping them between the two.

To streamline this, 13.5 lets AE issue `PF_Cmd_GET_FLATTENED_SEQUENCE_DATA` to ask for sequence data without forcing the present data to first be deallocated and reallocated. What sets this selector apart from `PF_Cmd_SEQUENCE_FLATTEN` is that it returns a copy of the proper flattened state while leaving intact the original structure(s) the effect is presently working with. The PathMaster sample project carries a code example for this.

In time this will be mandatory for plug-ins rebuilt to be thread-safe (refer to `PF_OutFlag2_AE13_5_THREADSAFE` further down). The long-serving `PF_Cmd_SEQUENCE_FLATTEN` is destined to lose support in later versions.

- `PF_OutFlag_FORCE_RERENDER` Changes

When you can, we suggest setting off rerenders with one of these: GuidMixInPtr() (covered in the section that follows), arb data, or `PF_ChangeFlag_CHANGED_VALUE`. Each of these lets cached frames be reused following an Undo.

Note: From 14.0 on, applying `PF_ChangeFlag_CHANGED_VALUE` to layer or path params won't kick off a rerender. As an alternative, you can set the value through `AEGP_StreamSuite`-

`AEGP_SetStreamValue`().

`FORCE_RERENDER` remains necessary in cases where sequence_data has to be copied across from the UI thread to the render project/effect clone so the two stay aligned.

Whether or not the render request draws on the cache, `FORCE_RERENDER` is what triggers this. Deprecating `FORCE_RERENDER` becomes possible once the complete set of APIs for managing render state is in place.

`FORCE_RERENDER` no longer functions in every case it once did, since it has to bring the UI's copy of sequence_data into sync with the render thread's copy.

`FORCE_RERENDER` does its job when set during `PF_Cmd_USER_CHANGED_PARAM`. It functions in CLICK and DRAG events as well, but solely when `PF_Cmd_GET_FLATTENED_SEQUENCE_DATA` has been implemented. That implementation is needed to keep flattening — and the loss of UI state — from happening partway through mouse operations. Lacking `GET_FLATTENED`, the revised `FORCE_RERENDER` behavior stays switched off.

- GUIDs for Cached Frames
