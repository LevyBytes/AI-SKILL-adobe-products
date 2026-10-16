# AEGP_RegisterListener

Register plug-in callbacks for render-queue notifications. This is Render Queue Monitor Suite 1, frozen in AE 11.0; include the matching SDK headers rather than redeclaring their types in a plug-in.

Use `aegp_refconP` for callback state, or `NULL` when no state is needed. The suite member has this function-pointer declaration:

```cpp
SPAPI A_Err (*AEGP_RegisterListener)(
    AEGP_PluginID aegp_plugin_id,
    AEGP_RQM_Refcon aegp_refconP,
    const AEGP_RQM_FunctionBlock1 *fcn_blockP);
```

The callback context and complete six-member callback block are:

```cpp
typedef struct _AEGP_RQM_BasicData {
    const struct SPBasicSuite   *pica_basicP;
    A_long                      aegp_plug_id;
    AEGP_RQM_Refcon             aegp_refconPV;
} AEGP_RQM_BasicData;

typedef struct _AEGP_RQM_FunctionBlock1 {
    A_Err (*AEGP_RQM_RenderJobStarted)(AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid);
    A_Err (*AEGP_RQM_RenderJobEnded)(AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid);
    A_Err (*AEGP_RQM_RenderJobItemStarted)(AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid, AEGP_RQM_ItemId itemid);
    A_Err (*AEGP_RQM_RenderJobItemUpdated)(AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid, AEGP_RQM_ItemId itemid, AEGP_RQM_FrameId frameid);
    A_Err (*AEGP_RQM_RenderJobItemEnded)(AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid, AEGP_RQM_ItemId itemid, AEGP_RQM_FinishedStatus fstatus);
    A_Err (*AEGP_RQM_RenderJobItemReportLog)(AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid, AEGP_RQM_ItemId itemid, A_Boolean isError, AEGP_MemHandle logbuf);
} AEGP_RQM_FunctionBlock1;
```

`AEGP_RQM_FinishedStatus` has four values:

- `AEGP_RQM_FinishedStatus_UNKNOWN`
- `AEGP_RQM_FinishedStatus_SUCCEEDED`
- `AEGP_RQM_FinishedStatus_ABORTED`
- `AEGP_RQM_FinishedStatus_ERRED`
